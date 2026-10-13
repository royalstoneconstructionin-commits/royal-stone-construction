import { packageData, type PackageCity } from "./design-packages";

// Change this policy when the company's billing-area rule is confirmed.
export const designBillingPolicy = {
  basis: "entered-design-area",
  helper: "Enter the area you want designed. For multiple floors, confirm the applicable billing area with our team.",
} as const;

export const designEstimateNote = "This is an estimated design fee. Construction with material is priced separately. Final quotation depends on confirmed billing area, project scope and applicable charges.";

export function positiveNumber(value: unknown): number | null {
  if (typeof value !== "string" && typeof value !== "number") return null;
  if (typeof value === "string" && !/^\d+(?:\.\d*)?$|^\.\d+$/.test(value.trim())) return null;
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? number : null;
}

export function getDesignPackage(city: string, name: string) {
  if (city !== "Patna" && city !== "Noida") return null;
  return packageData[city].find(item => item.name === name) ?? null;
}

// The displayed card price remains the single pricing source. Unknown formats fail closed.
export function packageRate(price: string): number | null {
  const match = /^₹\s*(\d+(?:\.\d+)?)\s*\/\s*sqft$/i.exec(price.trim());
  return match ? positiveNumber(match[1]) : null;
}

export type DesignEstimate = {
  city: PackageCity;
  packageName: string;
  service: "Architecture";
  area: number;
  rate: number;
  fee: number;
  billingBasis: typeof designBillingPolicy.basis;
};

export function calculateDesignEstimate(city: string, name: string, enteredArea: unknown): DesignEstimate | null {
  const item = getDesignPackage(city, name);
  const area = positiveNumber(enteredArea);
  const rate = item ? packageRate(item.price) : null;
  if (!item || area === null || rate === null) return null;
  const fee = area * rate;
  if (!Number.isFinite(fee) || fee <= 0) return null;
  return { city: city as PackageCity, packageName: name, service: "Architecture", area, rate, fee, billingBasis: designBillingPolicy.basis };
}

export function dimensionArea(width: unknown, length: unknown): number | null {
  const w = positiveNumber(width);
  const l = positiveNumber(length);
  return w !== null && l !== null ? positiveNumber(w * l) : null;
}

export const formatMoney = (value: number) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(value);
export const formatArea = (value: number) => new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 15 }).format(value);

export function estimateDescription(estimate: DesignEstimate) {
  return `Architecture / ${estimate.packageName} (${estimate.city}) | Area to Be Designed: ${formatArea(estimate.area)} sqft | Rate: ${formatMoney(estimate.rate)}/sqft | ${formatArea(estimate.area)} sqft × ${formatMoney(estimate.rate)}/sqft = ${formatMoney(estimate.fee)} | Estimated Design Fee: ${formatMoney(estimate.fee)} | Billing basis: ${estimate.billingBasis} | ${designEstimateNote}`;
}

export function estimateEnquiryHref(estimate: DesignEstimate) {
  return `/get-quote?${new URLSearchParams({ city: estimate.city, package: estimate.packageName, purpose: estimate.service, area: String(estimate.area), rate: String(estimate.rate), estimatedFee: String(estimate.fee) })}#lead-form`;
}
