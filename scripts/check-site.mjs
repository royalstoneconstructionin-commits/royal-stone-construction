import assert from "node:assert/strict";
import { createServer } from "node:http";
import { spawn } from "node:child_process";
import { createRequire } from "node:module";
import { readFileSync, writeFileSync, mkdirSync, mkdtempSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const root = fileURLToPath(new URL("../", import.meta.url));
const qa = path.join(root, ".qa");
mkdirSync(qa, { recursive: true });
const temporary = mkdtempSync(path.join(qa, "site-check-"));
const ts = require("typescript");
let child;
let browser;
try {
  for (const name of ["content", "design-packages", "design-estimate", "lead-submission"]) {
    writeFileSync(path.join(temporary, `${name}.js`), ts.transpileModule(readFileSync(path.join(root, "lib", `${name}.ts`), "utf8"), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText);
  }
  const { defaultContent, isSiteContent, publicSiteContent } = require(path.join(temporary, "content.js"));
  assert.ok(isSiteContent(defaultContent));
  const candidate = structuredClone(defaultContent);
  candidate.projects[0].status = "Completed Projects";
  assert.equal(publicSiteContent(candidate).projects.length, 2);
  candidate.projects[0].approved = true;
  candidate.projects[0].duration = "3 months";
  assert.equal(publicSiteContent(candidate).projects.length, 3);
  candidate.testimonials = [{ name: "Test only", city: "Patna", quote: "Test only", approved: false }];
  assert.equal(publicSiteContent(candidate).testimonials.length, 0);
  candidate.mapUrl = "javascript:alert(1)";
  assert.equal(isSiteContent(candidate), false);
  candidate.mapUrl = "https://maps.app.goo.gl/test";
  candidate.testimonials[0].reviewUrl = "https://evil.example/review";
  assert.equal(isSiteContent(candidate), false);
  candidate.testimonials[0].reviewUrl = "https://g.page/test/review";
  assert.ok(isSiteContent(candidate));
  const { packageData } = require(path.join(temporary, "design-packages.js"));
  const { packageRate } = require(path.join(temporary, "design-estimate.js"));
  assert.deepEqual(packageData.Patna.map(item => packageRate(item.price)), [6, 8, 30]);
  assert.deepEqual(packageData.Noida.map(item => packageRate(item.price)), [10, 15, 40]);
  const { prepareLeadSubmission } = require(path.join(temporary, "lead-submission.js"));
  const lead = { name: "Local test", city: "Patna", mobile: "9876543210", purpose: "Architecture" };
  assert.match(prepareLeadSubmission({ ...lead, budget: "INR 10 lakh", projectArea: "1000 sqft" }).purpose, /Approximate budget: INR 10 lakh/);
  assert.throws(() => prepareLeadSubmission({ ...lead, budget: "x".repeat(201) }));
  console.log("PASS: original city rates, legacy CMS compatibility, approval filtering, optional enquiry details and external URL validation.");

  const probe = createServer();
  await new Promise(resolve => probe.listen(0, "127.0.0.1", resolve));
  const port = probe.address().port;
  await new Promise(resolve => probe.close(resolve));
  const base = `http://127.0.0.1:${port}`;
  child = spawn(process.execPath, [require.resolve("next/dist/bin/next"), "start", "--hostname", "127.0.0.1", "--port", String(port)], { cwd: root, env: { ...process.env, NEXT_PUBLIC_SUPABASE_URL: "", NEXT_PUBLIC_SUPABASE_ANON_KEY: "", NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: "" }, stdio: "ignore", windowsHide: true });
  let ready = false;
  for (let i = 0; i < 80; i++) {
    try { if ((await fetch(base)).ok) { ready = true; break; } } catch { /* Startup only. */ }
    await new Promise(resolve => setTimeout(resolve, 250));
  }
  assert.ok(ready);
  const routes = ["/", "/about", "/services", "/packages", "/services/architecture", "/services/construction", "/services/interior-design", "/services/turnkey-projects", "/services/floor-planning", "/services/elevation", "/services/structural-planning", "/services/renovation", "/projects", "/process", "/why-us", "/contact", "/get-quote", "/privacy-policy", "/terms", "/locations/patna", "/locations/noida"];
  for (const route of routes) {
    const response = await fetch(base + route);
    assert.equal(response.status, 200, route);
    const html = await response.text();
    assert.equal((html.match(/<h1[\s>]/g) ?? []).length, 1, `${route}: one h1`);
    assert.equal((html.match(/<main[\s>]/g) ?? []).length, 1, `${route}: one main`);
    assert.match(html, new RegExp(`rel="canonical" href="https://www\\.royalstoneconstruction\\.in${route === "/" ? "" : route}"`));
    assert.doesNotMatch(html, /content="noindex/);
    assert.match(html, /href="\/privacy-policy"/);
    assert.match(html, /href="\/terms"/);
    assert.match(html, /instagram.com\/royalstoneconstruction1/);
    assert.doesNotMatch(html, /aria-label="(?:Facebook|YouTube)"/);
    const internal = [...html.matchAll(/<a\b[^>]*href="(\/[^"?#]*)/g)].map(match => match[1]).filter(href => !href.startsWith('/_next'));
    for (const href of new Set(internal)) assert.equal((await fetch(base + href)).status, 200, `${route} -> ${href}`);
    if (route === "/") {
      const json = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
      assert.equal(json['@graph'][0]['@type'], "GeneralContractor");
      assert.ok(!json['@graph'][0].aggregateRating && !json['@graph'][0].address && !json['@graph'][0].openingHours);
    }
    if (route === "/contact") assert.doesNotMatch(html, /<iframe|Working hours will be published soon/);
  }
  const sitemap = await (await fetch(base + '/sitemap.xml')).text();
  for (const route of routes) assert.ok(sitemap.includes(`https://www.royalstoneconstruction.in${route === '/' ? '' : route}`));
  assert.doesNotMatch(sitemap, /\/locations\/delhi|\/projects\/.*-concept/);
  assert.match(await (await fetch(base + '/robots.txt')).text(), /Allow: \/[\s\S]*Sitemap:/);
  assert.equal((await fetch(base + '/locations/delhi')).status, 404);
  console.log("PASS: 21 public routes and internal links, legal/social links, headings, canonical/indexable metadata, factual structured data, sitemap and robots.");

  if (process.argv.includes('--browser')) {
    const { chromium } = require(path.join(qa, 'browser-check/node_modules/playwright'));
    browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 }, reducedMotion: 'reduce' });
    await page.goto(base + '/packages');
    await page.getByRole('button', { name: 'Noida', exact: true }).click();
    const calc = page.locator('#design-fee-calculator');
    assert.equal(await calc.locator('select').nth(0).inputValue(), 'Noida');
    await calc.getByLabel('Area to Be Designed (sqft)', { exact: true }).fill('1000');
    await calc.getByText('₹10,000', { exact: true }).waitFor();
    await calc.locator('select').nth(1).selectOption('Gold Package');
    await calc.getByText('₹15,000', { exact: true }).waitFor();
    await calc.locator('select').nth(0).selectOption('Patna');
    await calc.getByText('₹8,000', { exact: true }).waitFor();
    assert.equal(await page.getByRole('button', { name: 'Patna', exact: true }).getAttribute('aria-pressed'), 'true');
    await calc.getByLabel('Calculate Area', { exact: true }).check();
    await calc.getByLabel('Width (ft)', { exact: true }).fill('30');
    await calc.getByLabel('Length (ft)', { exact: true }).fill('40');
    await calc.getByText('₹9,600', { exact: true }).waitFor();
    await calc.getByRole('button', { name: 'Enquire About This Estimate' }).click();
    await page.waitForURL('**/get-quote?**');
    await page.getByText('Selected: Gold Package', { exact: false }).waitFor();
    assert.equal(await page.getByLabel('City', { exact: true }).inputValue(), 'Patna');
    assert.equal(await page.getByLabel('Requirement / Purpose').inputValue(), 'Architecture');
    await page.goto(base + '/packages?city=Noida');
    await page.getByRole('link', { name: 'Enquire Now: Silver Package in Noida' }).click();
    await page.waitForURL('**/get-quote?**');
    await page.getByText('Selected: Silver Package', { exact: false }).waitFor();
    assert.equal(await page.getByLabel('City', { exact: true }).inputValue(), 'Noida');
    await page.goto(base + '/services/architecture?city=Noida');
    await page.getByRole('button', { name: 'Noida', exact: true }).click();
    assert.equal(await page.locator('#design-fee-calculator select').nth(0).inputValue(), 'Noida');
    await page.getByRole('button', { name: 'Choose Gold Package', exact: true }).click();
    await page.getByText('Selected: Gold Package', { exact: false }).waitFor();
    assert.equal(await page.getByLabel('City', { exact: true }).inputValue(), 'Noida');
    console.log('PASS: synchronized city controls, package rates, dimensions, live estimates and package/calculator quote prefills.');

    let requests = 0;
    let fail = false;
    await page.route('**/api/leads', async route => { requests++; await new Promise(resolve => setTimeout(resolve, 300)); await route.fulfill({ status: fail ? 503 : 200, contentType: 'application/json', body: JSON.stringify(fail ? { error: 'Local test: unavailable' } : { success: true }) }); });
    await page.goto(base + '/get-quote');
    await page.getByRole('button', { name: 'Submit Enquiry', exact: true }).click();
    assert.equal(requests, 0);
    await page.getByLabel('Full Name').fill('Local browser test');
    await page.getByLabel('Mobile Number').fill('123');
    await page.getByLabel('City', { exact: true }).fill('Patna');
    await page.getByLabel('Requirement / Purpose').selectOption('Architecture');
    await page.getByRole('button', { name: 'Submit Enquiry', exact: true }).click();
    assert.equal(requests, 0);
    await page.getByLabel('Mobile Number').fill('9876543210');
    await page.getByRole('button', { name: 'Submit Enquiry', exact: true }).dblclick();
    await page.getByText('Thank you! Your enquiry has been submitted successfully.').waitFor();
    assert.equal(requests, 1);
    assert.equal(await page.getByLabel('Full Name').inputValue(), '');
    fail = true;
    await page.getByLabel('Full Name').fill('Local browser test');
    await page.getByLabel('Mobile Number').fill('9876543210');
    await page.getByLabel('City', { exact: true }).fill('Patna');
    await page.getByLabel('Requirement / Purpose').selectOption('Architecture');
    await page.getByRole('button', { name: 'Submit Enquiry', exact: true }).click();
    await page.getByText('Local test: unavailable').waitFor();
    assert.equal(await page.getByLabel('Full Name').inputValue(), 'Local browser test');
    console.log('PASS: accessible required/mobile validation, success reset and error recovery with intercepted requests; no real enquiry sent.');
    await page.goto(base + '/projects');
    await page.getByRole('searchbox', { name: 'Search projects' }).fill('no matching local test');
    await page.getByText('No Matching Projects Found').waitFor();
    await page.getByRole('button', { name: 'Clear search' }).click();
    await page.getByText('Contemporary Home Concept', { exact: false }).first().waitFor();
    console.log('PASS: project search and clear controls, honest project/review empty states and labelled concepts.');

    for (const width of [360, 390, 768, 1280]) {
      await page.setViewportSize({ width, height: 900 });
      for (const route of ['/', '/packages', '/services/architecture', '/projects', '/contact', '/get-quote']) {
        await page.goto(base + route);
        const dimensions = await page.evaluate(() => ({ viewport: document.documentElement.clientWidth, content: document.documentElement.scrollWidth }));
        assert.ok(dimensions.content <= dimensions.viewport, `${route} at ${width}: overflow ${dimensions.content}`);
      }
      await page.screenshot({ path: path.join(qa, `quote-${width}.png`), fullPage: true });
    }
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(base);
    await page.getByRole('button', { name: 'Toggle menu' }).click();
    await page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: 'Contact', exact: true }).click();
    await page.waitForURL('**/contact');
    await page.locator('footer img').scrollIntoViewIfNeeded();
    await page.waitForFunction(() => { const image = document.querySelector('footer img'); return image && image.complete && image.naturalWidth > 0; });
    await page.locator('footer').screenshot({ path: path.join(qa, 'footer-mobile.png') });
    await page.screenshot({ path: path.join(qa, 'contact-mobile.png'), fullPage: true });
    console.log('PASS: mobile navigation and no horizontal overflow on six main pages at 360, 390, 768 and 1280px. Screenshots saved in .qa.');
  }
} finally {
  if (browser) await browser.close();
  if (child) child.kill();
  assert.ok(path.resolve(temporary).startsWith(`${path.resolve(qa)}${path.sep}`));
  rmSync(temporary, { recursive: true, force: true });
}
