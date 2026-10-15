"use client";

import { useEffect, useId, useState } from "react";
import { useRouter } from "next/navigation";
import { packageData, type PackageCity } from "@/lib/design-packages";
import { calculateDesignEstimate, designBillingPolicy, designEstimateNote, dimensionArea, estimateEnquiryHref, formatArea, formatMoney, packageRate, positiveNumber } from "@/lib/design-estimate";

export default function DesignFeeCalculator({ city: controlledCity, onCityChange }: { city?: PackageCity; onCityChange?: (city: PackageCity) => void }) {
  const id = useId();
  const router = useRouter();
  const [localCity, setLocalCity] = useState<PackageCity>("Patna");
  const city = controlledCity ?? localCity;
  const setCity = onCityChange ?? setLocalCity;
  const [packageName, setPackageName] = useState(packageData.Patna[0].name);
  const [mode, setMode] = useState("area");
  const [area, setArea] = useState("");
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  useEffect(() => {
    const selected = new URLSearchParams(window.location.search).get("city");
    if (selected === "Patna" || selected === "Noida") setLocalCity(selected);
  }, []);
  const packages = packageData[city];
  const item = packages.find(pkg => pkg.name === packageName) ?? packages[0];
  const rate = item ? packageRate(item.price) : null;
  const enteredArea = mode === "area" ? positiveNumber(area) : dimensionArea(width, length);
  const estimate = calculateDesignEstimate(city, item?.name ?? "", enteredArea);
  const hasInput = mode === "area" ? area !== "" : width !== "" && length !== "";
  const fieldClass = "mt-2 min-h-12 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-base text-slate-950 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200";

  return <section id="design-fee-calculator" aria-labelledby={`${id}-title`} className="bg-[#faf9f7] py-12 sm:py-16">
    <div className="site-container">
      <p className="text-xs font-bold tracking-[0.18em] text-brand-600">PLAN YOUR DESIGN</p>
      <h2 id={`${id}-title`} className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Design Fee Calculator</h2>
      <div className="mt-7 grid items-start gap-6 lg:grid-cols-2">
        <div className="min-w-0 space-y-5 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
          <div className="grid gap-5 sm:grid-cols-2">
            <label htmlFor={`${id}-city`} className="text-sm font-semibold text-slate-800">City
              <select id={`${id}-city`} value={city} className={fieldClass} onChange={event => {
                const nextCity = event.target.value as PackageCity;
                setCity(nextCity);
                if (!packageData[nextCity].some(pkg => pkg.name === packageName)) setPackageName(packageData[nextCity][0]?.name ?? "");
              }}>{Object.keys(packageData).map(value => <option key={value}>{value}</option>)}</select>
            </label>
            <label htmlFor={`${id}-package`} className="text-sm font-semibold text-slate-800">Package
              <select id={`${id}-package`} value={item?.name ?? ""} onChange={event => setPackageName(event.target.value)} className={fieldClass}>{packages.map(pkg => <option key={pkg.name}>{pkg.name}</option>)}</select>
            </label>
          </div>
          <p className="text-sm text-slate-600">Selected package rate: <strong className="text-slate-950">{rate === null ? "Contact us for pricing" : `${formatMoney(rate)}/sqft`}</strong></p>
          <fieldset><legend className="text-sm font-semibold text-slate-800">Area input mode</legend>
            <div className="mt-3 flex flex-wrap gap-5">{[["area", "Enter Area"], ["dimensions", "Calculate Area"]].map(([value, label]) => <label key={value} className="flex min-h-11 items-center gap-2 text-sm text-slate-800"><input type="radio" name={`${id}-mode`} value={value} checked={mode === value} onChange={() => setMode(value)} className="h-4 w-4 accent-brand-600" />{label}</label>)}</div>
          </fieldset>
          {mode === "area" ? <label htmlFor={`${id}-area`} className="block text-sm font-semibold text-slate-800">Area to Be Designed (sqft)
            <input id={`${id}-area`} type="number" inputMode="decimal" min="0" step="any" value={area} onChange={event => setArea(event.target.value)} placeholder="e.g. 1000" aria-describedby={`${id}-helper ${id}-error`} className={fieldClass} />
          </label> : <div>
            <div className="grid grid-cols-2 gap-4">{[{ key: "width", label: "Width (ft)", value: width, setter: setWidth }, { key: "length", label: "Length (ft)", value: length, setter: setLength }].map(({ key, label, value, setter }) => <label key={key} htmlFor={`${id}-${key}`} className="text-sm font-semibold text-slate-800">{label}<input id={`${id}-${key}`} type="number" inputMode="decimal" min="0" step="any" value={value} onChange={event => setter(event.target.value)} aria-describedby={`${id}-helper ${id}-error`} className={fieldClass} /></label>)}</div>
            <p className="mt-3 text-sm text-slate-600">Area to Be Designed (sqft): {typeof enteredArea === "number" ? formatArea(enteredArea) : "—"}</p>
          </div>}
          <p id={`${id}-helper`} className="text-sm leading-6 text-slate-500">{designBillingPolicy.helper}</p>
          <p id={`${id}-error`} role="status" className="text-sm text-red-600">{hasInput && !estimate && rate !== null ? "Enter positive, valid area or dimension values within the supported range." : ""}</p>
        </div>
        <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
          <h3 className="text-xl font-bold text-slate-950">Your Design Estimate</h3>
          <div aria-live="polite" aria-atomic="true">
            <dl className="mt-5 space-y-3 text-sm">{[["Selected city", city], ["Selected package", item?.name ?? "—"], ["Design area", enteredArea !== null ? `${formatArea(enteredArea)} sqft` : "—"], ["Rate per sqft", rate === null ? "Contact us for pricing" : `${formatMoney(rate)}/sqft`]].map(([label, value]) => <div key={label} className="flex flex-wrap justify-between gap-2"><dt className="text-slate-500">{label}</dt><dd className="break-all font-semibold text-slate-900">{value}</dd></div>)}</dl>
            <div className="mt-5 rounded-xl bg-slate-950 p-5 text-white"><p className="text-sm text-slate-300">Estimated Design Fee</p><p className="mt-2 break-words text-3xl font-bold">{estimate ? formatMoney(estimate.fee) : rate === null ? "Contact us for pricing" : "Enter your design area"}</p>{estimate && <p className="mt-3 break-words text-sm text-slate-300">{formatArea(estimate.area)} sqft × {formatMoney(estimate.rate)}/sqft = {formatMoney(estimate.fee)}</p>}</div>
          </div>
          <h4 className="mt-5 font-semibold text-slate-950">Package inclusions</h4>
          <ul className="mt-3 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">{item?.features.map(feature => <li key={feature} className="flex gap-2"><span aria-hidden="true" className="text-brand-600">✓</span>{feature}</li>)}</ul>
          <button type="button" disabled={!estimate} onClick={() => { if (estimate) router.push(estimateEnquiryHref(estimate)); }} className="mt-6 min-h-12 w-full rounded-lg bg-brand-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-200 disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none">Enquire About This Estimate</button>
          <p className="mt-4 text-xs leading-6 text-slate-500">{designEstimateNote}</p>
        </div>
      </div>
    </div>
  </section>;
}
