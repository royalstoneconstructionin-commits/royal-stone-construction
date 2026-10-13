import assert from "node:assert/strict";
import { createServer } from "node:http";
import { spawn } from "node:child_process";
import { createRequire } from "node:module";
import { readFileSync, writeFileSync, mkdirSync, mkdtempSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const require = createRequire(import.meta.url);
const ts = require("typescript");
const root = fileURLToPath(new URL("../", import.meta.url));
const qaRoot = path.join(root, ".qa");
mkdirSync(qaRoot, { recursive: true });
const compiled = mkdtempSync(path.join(qaRoot, "estimate-check-"));

try {
  for (const name of ["design-packages", "design-estimate", "lead-submission"]) {
    const source = readFileSync(path.join(root, "lib", `${name}.ts`), "utf8");
    writeFileSync(path.join(compiled, `${name}.js`), ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText);
  }
  const { packageData } = require(path.join(compiled, "design-packages.js"));
  const { calculateDesignEstimate, dimensionArea, positiveNumber, packageRate, formatMoney, estimateEnquiryHref } = require(path.join(compiled, "design-estimate.js"));
  const { prepareLeadSubmission } = require(path.join(compiled, "lead-submission.js"));
  assert.equal(calculateDesignEstimate("Patna", "Silver Package", 1000).fee, 6000);
  assert.equal(dimensionArea(30, 40), 1200);
  assert.equal(calculateDesignEstimate("Patna", "Silver Package", dimensionArea(30, 40)).fee, 7200);
  assert.equal(calculateDesignEstimate("Patna", "Silver Package", "1000.125").fee, 6000.75);
  assert.equal(dimensionArea("30.5", "40.25"), 1227.625);
  assert.equal(formatMoney(6000), "₹6,000");
  assert.equal(formatMoney(6000.756), "₹6,000.76");
  for (const [city, packages] of Object.entries(packageData)) {
    for (const item of packages) assert.equal(calculateDesignEstimate(city, item.name, 1000).fee, packageRate(item.price) * 1000);
  }
  for (const value of ["", " ", 0, -1, "-2", "NaN", "Infinity", Infinity, NaN, undefined, null, true, "0x10", "abc"]) {
    assert.equal(positiveNumber(value), null);
    assert.equal(calculateDesignEstimate("Patna", "Silver Package", value), null);
    assert.equal(dimensionArea(value, 40), null);
  }
  assert.equal(dimensionArea(1e308, 1e308), null);
  assert.equal(calculateDesignEstimate("Patna", "Silver Package", 1e308), null);
  assert.equal(packageRate("Contact us for pricing"), null);
  const originalPrice = packageData.Noida[0].price;
  packageData.Noida[0].price = "Contact us for pricing";
  assert.equal(calculateDesignEstimate("Noida", packageData.Noida[0].name, 1000), null);
  packageData.Noida[0].price = originalPrice;
  assert.equal(calculateDesignEstimate("Unknown", "Silver Package", 1000), null);
  assert.equal(calculateDesignEstimate("Patna", "Unknown", 1000), null);
  const estimate = calculateDesignEstimate("Patna", "Silver Package", 1000);
  const params = new URL(estimateEnquiryHref(estimate), "http://localhost").searchParams;
  assert.equal(params.get("area"), "1000");
  assert.equal(params.get("purpose"), "Architecture");
  const enquiry = { name: "Calculator Test", mobile: "9876543210", city: params.get("city"), purpose: params.get("purpose"), packageName: params.get("package"), estimateArea: params.get("area"), rate: 999, estimatedFee: 1, floors: 3 };
  const record = prepareLeadSubmission(enquiry);
  assert.match(record.purpose, /1,000 sqft × ₹6\/sqft = ₹6,000/);
  assert.match(record.purpose, /Patna/);
  assert.match(record.purpose, /Silver Package/);
  assert.match(record.purpose, /entered-design-area/);
  assert.doesNotMatch(record.purpose, /999|₹18,000/);
  assert.throws(() => prepareLeadSubmission({ ...enquiry, estimateArea: -1 }));
  assert.throws(() => prepareLeadSubmission({ ...enquiry, mobile: "123" }));
  const ordinary = { name: "Ordinary Test", mobile: "9876543210", city: "Delhi", purpose: "Interior Design" };
  assert.deepEqual(prepareLeadSubmission(ordinary), ordinary);
  console.log("PASS: examples, all city/package rates, decimals, invalid values, enquiry prefill, server validation and ordinary enquiries.");

  if (process.argv.includes("--integration")) {
    const saved = [];
    const mock = createServer(async (req, res) => {
      let body = "";
      for await (const chunk of req) body += chunk;
      if (req.method === "POST" && req.url === "/rest/v1/leads") {
        saved.push(JSON.parse(body));
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end("null");
      } else { res.writeHead(404); res.end(); }
    });
    await new Promise(resolve => mock.listen(0, "127.0.0.1", resolve));
    const portProbe = createServer();
    await new Promise(resolve => portProbe.listen(0, "127.0.0.1", resolve));
    const port = portProbe.address().port;
    await new Promise(resolve => portProbe.close(resolve));
    const base = `http://127.0.0.1:${port}`;
    const child = spawn(process.execPath, [require.resolve("next/dist/bin/next"), "start", "--hostname", "127.0.0.1", "--port", String(port)], {
      cwd: root,
      env: { ...process.env, NEXT_PUBLIC_SUPABASE_URL: `http://127.0.0.1:${mock.address().port}`, NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: "test-key", NEXT_PUBLIC_SUPABASE_ANON_KEY: "test-key" },
      stdio: "ignore", windowsHide: true,
    });
    try {
      let ready = false;
      for (let attempt = 0; attempt < 80; attempt++) {
        try { if ((await fetch(`${base}/get-quote`)).ok) { ready = true; break; } } catch { /* Wait for local startup. */ }
        await new Promise(resolve => setTimeout(resolve, 250));
      }
      assert.ok(ready, "Production server started");
      const submit = body => fetch(`${base}/api/leads`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      assert.equal((await submit(enquiry)).status, 200);
      assert.deepEqual(saved[0], record);
      assert.equal((await submit({ ...enquiry, estimateArea: 0 })).status, 400);
      assert.equal(saved.length, 1);
      assert.equal((await submit(ordinary)).status, 200);
      assert.deepEqual(saved[1], ordinary);
      for (const route of ["/", "/packages", "/services/architecture"]) {
        const response = await fetch(`${base}${route}`);
        assert.equal(response.status, 200);
        const html = await response.text();
        assert.equal((html.match(/id="design-fee-calculator"/g) ?? []).length, 1);
        assert.ok(html.indexOf('id="packages"') < html.indexOf('id="design-fee-calculator"'));
        assert.match(html, /lg:grid-cols-2/);
        assert.match(html, /Enquire About This Estimate/);
        assert.match(html, /Enter your design area/);
        assert.match(html, /Area to Be Designed \(sqft\)/);
      }
      const adminSource = readFileSync(path.join(root, "app/admin/dashboard/page.tsx"), "utf8");
      assert.match(adminSource, /\{lead\.purpose\}/);
      console.log("PASS: production pages, responsive layout structure, API-to-stored-admin-record integration, tampered amount ignored, invalid estimate rejected, existing enquiry preserved (local mock database).");
    } finally {
      child.kill();
      await new Promise(resolve => mock.close(resolve));
    }
  }
} finally {
  // Only remove the temporary directory created by this script, inside .qa.
  assert.ok(path.resolve(compiled).startsWith(`${path.resolve(qaRoot)}${path.sep}`));
  rmSync(compiled, { recursive: true, force: true });
}
