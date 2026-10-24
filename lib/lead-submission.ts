import { calculateDesignEstimate, estimateDescription, getDesignPackage } from "./design-estimate";
import { floorPlans } from "./floor-plans";
import { constructionPackages } from "./construction-packages";

const purposes = ["Architecture", "Construction with Material", "Interior Design", "Turnkey Project", "Other"];

// Both ordinary enquiries and calculator enquiries use this server-side validation.
export function prepareLeadSubmission(input: unknown) {
  if (!input || typeof input !== "object") throw new Error("Please fill all fields.");
  const body = input as Record<string, unknown>;
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const mobile = typeof body.mobile === "string" ? body.mobile.trim() : "";
  if (body.floorPlan !== undefined) {
    const plan = floorPlans.find(item => item.image === body.floorPlan);
    const address = typeof body.address === "string" ? body.address.trim() : "";
    if (!plan) throw new Error("Please select a valid floor plan.");
    if (!name || name.length > 200) throw new Error("Please enter your full name (up to 200 characters).");
    if (!/^[0-9]{10}$/.test(mobile)) throw new Error("Please enter a valid 10 digit mobile number.");
    if (!address || address.length > 500) throw new Error("Please enter your address (up to 500 characters).");
    // Keep download enquiries compatible with the existing lead table and admin export.
    return {
      name,
      mobile,
      city: "Not specified",
      purpose: `Architecture | Floor plan download: ${plan.title} (${plan.image}) | Address: ${address.replace(/[\r\n]+/g, " ")}`,
    };
  }
  const city = typeof body.city === "string" ? body.city.trim() : "";
  const purpose = typeof body.purpose === "string" ? body.purpose : "";
  if (!name || !city || !purposes.includes(purpose) || name.length > 200 || city.length > 200) throw new Error("Please fill all fields with valid details.");
  if (!/^[0-9]{10}$/.test(mobile)) throw new Error("Please enter a valid 10 digit mobile number.");
  const packageName = typeof body.packageName === "string" ? body.packageName : "";
  let requirement = purpose;
  if (body.estimateArea !== undefined && body.estimateArea !== null) {
    const estimate = calculateDesignEstimate(city, packageName, body.estimateArea);
    if (purpose !== "Architecture" || !estimate) throw new Error("Please return to the calculator and select a valid estimate.");
    // Client-supplied rate and amount are deliberately ignored.
    requirement = estimateDescription(estimate);
  } else if (packageName && purpose === "Architecture") {
    if (!getDesignPackage(city, packageName)) throw new Error("Please select a valid city and package.");
    requirement = `${purpose} / ${packageName} (${city})`;
  } else if (packageName && purpose === "Construction with Material") {
    const constructionPackage = constructionPackages.find(pkg => pkg.name === packageName);
    if (!constructionPackage) throw new Error("Please select a valid construction package.");
    requirement = `${purpose} / ${constructionPackage.name} (${constructionPackage.rate})`;
  }
  for (const [key, label] of [["projectType", "Project type"], ["projectArea", "Plot / design area"], ["preferredStart", "Preferred start"], ["budget", "Approximate budget"]]) {
    const value = body[key];
    if (value === undefined || value === "") continue;
    if (typeof value !== "string" || value.trim().length > 200) throw new Error("Please keep optional project details within 200 characters each.");
    if (value.trim()) requirement += ` | ${label}: ${value.trim().replace(/[\r\n]+/g, " ")}`;
  }
  // Use the existing text column: legacy leads and admin search/export remain compatible.
  return { name, mobile, city, purpose: requirement };
}
