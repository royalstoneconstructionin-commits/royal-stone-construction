import assert from "node:assert/strict";
import { createServer } from "node:http";
import { spawn } from "node:child_process";
import { createRequire } from "node:module";
import { readFileSync, writeFileSync, mkdirSync, mkdtempSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

// Exercise the real production API against a local Supabase stand-in; never write test leads to production.
const require = createRequire(import.meta.url);
const root = fileURLToPath(new URL("../", import.meta.url));
const qa = path.join(root, ".qa");
mkdirSync(qa, { recursive: true });
const temporary = mkdtempSync(path.join(qa, "vastu-check-"));
const ts = require("typescript");
let child;
let mock;
let savedApiEnvironment;

try {
  for (const name of ["design-packages", "design-estimate", "floor-plans", "construction-packages", "vastu", "lead-submission"]) {
    const source = readFileSync(path.join(root, "lib", `${name}.ts`), "utf8");
    writeFileSync(path.join(temporary, `${name}.js`), ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText);
  }
  const { prepareLeadSubmission } = require(path.join(temporary, "lead-submission.js"));
  const { vastuDirections, vastuRequirements } = require(path.join(temporary, "vastu.js"));
  const { constructionPackages } = require(path.join(temporary, "construction-packages.js"));
  const { packageData } = require(path.join(temporary, "design-packages.js"));
  const { calculateDesignEstimate } = require(path.join(temporary, "design-estimate.js"));
  const contact = { name: "Local QA", mobile: "9876543210", city: "Patna" };
  const vastu = { ...contact, purpose: "Vastu Shastra", plotSize: "30 × 40 ft", plotFacing: "North-East", serviceRequirement: vastuRequirements[0], additionalMessage: "Review an existing home.\nKeep structural walls." };
  const record = prepareLeadSubmission(vastu);
  assert.deepEqual(Object.keys(record).sort(), ["city", "mobile", "name", "purpose"]);
  for (const value of ["Vastu Shastra", vastu.plotSize, vastu.plotFacing, vastu.serviceRequirement, "Review an existing home. Keep structural walls."]) assert.ok(record.purpose.includes(value));
  for (const plotFacing of [...vastuDirections, "Not sure", ""]) assert.doesNotThrow(() => prepareLeadSubmission({ ...vastu, plotFacing }));
  for (const serviceRequirement of vastuRequirements) assert.doesNotThrow(() => prepareLeadSubmission({ ...vastu, serviceRequirement }));
  for (const invalid of [{ mobile: "123" }, { city: "" }, { plotSize: "a".repeat(201) }, { plotFacing: "Invalid" }, { plotFacing: {} }, { additionalMessage: "a".repeat(2001) }, { additionalMessage: {} }, { serviceRequirement: "Invalid" }, { purpose: "Unknown" }]) assert.throws(() => prepareLeadSubmission({ ...vastu, ...invalid }));
  for (const purpose of ["Architecture", "Construction with Material", "Interior Design", "Turnkey Project", "Other"]) assert.deepEqual(prepareLeadSubmission({ ...contact, purpose }), { ...contact, purpose });
  assert.equal(prepareLeadSubmission({ ...contact, purpose: "Vastu Shastra" }).purpose, "Vastu Shastra");
  const expectedRates = { Patna: [6, 8, 30], Noida: [10, 15, 40] };
  for (const [city, packages] of Object.entries(packageData)) {
    packages.forEach((item, index) => {
      assert.equal(calculateDesignEstimate(city, item.name, 1000).fee, expectedRates[city][index] * 1000);
      assert.match(prepareLeadSubmission({ ...contact, city, purpose: "Architecture", packageName: item.name, estimateArea: 1000, estimatedFee: 1 }).purpose, /1,000 sqft/);
    });
  }
  for (const pkg of constructionPackages) assert.ok(prepareLeadSubmission({ ...contact, purpose: "Construction with Material", packageName: pkg.name }).purpose.includes(pkg.rate));
  console.log("PASS: Vastu validation and schema compatibility; legacy enquiries, package selections and calculator rates.");

  const saved = [];
  let failInsert = false;
  mock = createServer(async (req, res) => {
    let body = "";
    for await (const chunk of req) body += chunk;
    if (req.method !== "POST" || req.url !== "/rest/v1/leads") { res.writeHead(404); res.end(); return; }
    res.setHeader("Content-Type", "application/json");
    if (failInsert) { res.writeHead(503); res.end(JSON.stringify({ message: "Local simulated database failure" })); return; }
    saved.push(JSON.parse(body));
    res.writeHead(201);
    res.end("null");
  });
  await new Promise(resolve => mock.listen(0, "127.0.0.1", resolve));
  // Next inlines NEXT_PUBLIC values into production bundles. Invoke the unchanged
  // API source with local environment values to keep this test fully isolated.
  const apiEnvironment = {
    NEXT_PUBLIC_SUPABASE_URL: `http://127.0.0.1:${mock.address().port}`,
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: "local-test-key",
    NEXT_PUBLIC_SUPABASE_ANON_KEY: "local-test-key",
  };
  savedApiEnvironment = Object.fromEntries(Object.keys(apiEnvironment).map(key => [key, process.env[key]]));
  Object.assign(process.env, apiEnvironment);
  const apiSource = readFileSync(path.join(root, "app/api/leads/route.ts"), "utf8").replace('"@/lib/lead-submission"', '"./lead-submission"');
  writeFileSync(path.join(temporary, "route.js"), ts.transpileModule(apiSource, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText);
  const { POST } = require(path.join(temporary, "route.js"));
  const submit = body => POST(new Request("http://localhost/api/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) }));
  assert.equal((await submit(vastu)).status, 200);
  assert.deepEqual(saved[0], record);
  assert.equal((await submit({ ...vastu, plotFacing: "Invalid" })).status, 400);
  assert.equal(saved.length, 1);
  failInsert = true;
  const failure = await submit(vastu);
  assert.equal(failure.status, 503);
  assert.match((await failure.json()).error, /Unable to submit enquiry/);
  failInsert = false;
  assert.equal((await submit({ ...contact, purpose: "Architecture", packageName: "Silver Package", estimateArea: 1000 })).status, 200);
  assert.match(saved[1].purpose, /6,000/);
  console.log("PASS: unchanged API handler through Supabase client, stored Vastu details, validation rejection, database error and existing calculator submission (local mock).");
  const probe = createServer();
  await new Promise(resolve => probe.listen(0, "127.0.0.1", resolve));
  const port = probe.address().port;
  await new Promise(resolve => probe.close(resolve));
  const base = `http://127.0.0.1:${port}`;
  child = spawn(process.execPath, [require.resolve("next/dist/bin/next"), "start", "--hostname", "127.0.0.1", "--port", String(port)], {
    cwd: root,
    env: { ...process.env, NEXT_PUBLIC_SUPABASE_URL: `http://127.0.0.1:${mock.address().port}`, NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: "local-test-key", NEXT_PUBLIC_SUPABASE_ANON_KEY: "local-test-key" },
    stdio: "ignore", windowsHide: true,
  });
  let ready = false;
  for (let attempt = 0; attempt < 80; attempt++) {
    try { if ((await fetch(`${base}/services/vastu`)).ok) { ready = true; break; } } catch { /* Server startup. */ }
    await new Promise(resolve => setTimeout(resolve, 250));
  }
  assert.ok(ready, "Production server started");
  const html = await (await fetch(`${base}/services/vastu`)).text();
  assert.equal((html.match(/<h1[\s>]/g) ?? []).length, 1);
  assert.equal((html.match(/<main[\s>]/g) ?? []).length, 1);
  assert.equal((html.match(/<section[\s>]/g) ?? []).length, 10);
  assert.equal((html.match(/<details[\s>]/g) ?? []).length, 7);
  assert.match(html, /<title>Vastu Shastra Consultation &amp; House Planning in Patna \| Royal Stone Construction<\/title>/);
  assert.match(html, /rel="canonical" href="https:\/\/www.royalstoneconstruction.in\/services\/vastu"/);
  assert.match(html, /property="og:url" content="https:\/\/www.royalstoneconstruction.in\/services\/vastu"/);
  assert.match(html, /name="description" content="Explore Vastu Shastra consultation and Vastu-informed house planning with Royal Stone Construction in Patna. Discuss your plot and design requirements."/);
  for (const label of ["Full Name", "Mobile Number", "City", "Plot Size", "Plot Facing Direction", "Service Requirement", "Additional Message"]) assert.ok(html.includes(label));
  for (const href of ["/services/architecture", "/services/floor-planning", "/contact"]) assert.ok(html.includes(`href="${href}"`));
  assert.match(html, /Selected service: Vastu Shastra/);
  const anchors = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]));
  for (const [, fragment] of html.matchAll(/href="(?:\/services\/vastu)?#([^"]+)"/g)) assert.ok(anchors.has(fragment), `CTA target ${fragment}`);
  const [desktop, mobile] = ["Main navigation", "Mobile navigation"].map(label => html.match(new RegExp(`<nav aria-label="${label}"[^>]*>([\\s\\S]*?)<\\/nav>`))[1]);
  for (const navigation of [desktop, mobile]) assert.match(navigation, /href="\/services\/vastu"/);
  assert.match(html.match(/<footer[\s\S]*?<\/footer>/)[0], /href="\/services\/vastu"/);
  assert.equal((await fetch(`${base}/vastu-planning.svg`)).status, 200);
  assert.ok((await (await fetch(`${base}/sitemap.xml`)).text()).includes("https://www.royalstoneconstruction.in/services/vastu"));
  for (const route of ["/", "/services", "/packages", "/services/architecture", "/services/construction", "/services/interior-design", "/services/turnkey-projects", "/services/floor-planning", "/services/elevation", "/services/structural-planning", "/services/renovation", "/contact", "/get-quote", "/about", "/process", "/why-us", "/projects"]) {
    const response = await fetch(base + route);
    assert.equal(response.status, 200, route);
    const page = await response.text();
    assert.equal((page.match(/<h1[\s>]/g) ?? []).length, 1, route);
    if (route === "/" || route === "/services") assert.match(page, /Explore Service/);
  }
  console.log("PASS: Vastu production route, ten sections, seven native FAQ accordions, metadata, desktop/mobile/footer links, form fields, CTA anchors, asset, sitemap and 17 existing routes.");
} finally {
  if (savedApiEnvironment) for (const [key, value] of Object.entries(savedApiEnvironment)) {
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  }
  if (child) {
    child.kill();
    await new Promise(resolve => child.exitCode !== null || child.signalCode !== null ? resolve() : child.once("exit", resolve));
  }
  if (mock) await new Promise(resolve => mock.close(resolve));
  assert.ok(path.resolve(temporary).startsWith(`${path.resolve(qa)}${path.sep}`));
  rmSync(temporary, { recursive: true, force: true });
}
