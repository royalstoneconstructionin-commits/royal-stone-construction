"use client";

import { useEffect, useState } from "react";
import PricingPackages from "@/components/PricingPackages";
import DesignFeeCalculator from "@/components/DesignFeeCalculator";
import type { PackageCity } from "@/lib/design-packages";

export default function DesignPackagesSection({ reference = false, pricingDetails = "" }: { reference?: boolean; pricingDetails?: string }) {
  const [city, setCity] = useState<PackageCity>("Patna");
  useEffect(() => {
    const selected = new URLSearchParams(window.location.search).get("city");
    if (selected === "Patna" || selected === "Noida") setCity(selected);
  }, []);
  return <>
    <PricingPackages reference={reference} city={city} onCityChange={setCity} />
    {pricingDetails.trim() && <div className="site-container py-6"><h2 className="text-xl font-bold text-slate-950">Design package terms</h2><p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-600">{pricingDetails}</p></div>}
    <DesignFeeCalculator city={city} onCityChange={setCity} />
  </>;
}
