"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";

import Link from "next/link";
import { ArrowRight, Gem, House, ClipboardList } from "lucide-react";
import { packageData, packageEnquiryHref, type PackageCity } from "@/lib/design-packages";
export default function PricingPackages({ reference = false, city, onCityChange }: { reference?: boolean; city?: PackageCity; onCityChange?: (city: PackageCity) => void }) {
  const [localCity, setLocalCity] = useState<PackageCity>("Patna");
  const selectedCity = city ?? localCity;
  const setSelectedCity = onCityChange ?? setLocalCity;

  useEffect(() => {
    const city = new URLSearchParams(window.location.search).get("city");
    if (city === "Patna" || city === "Noida") setLocalCity(city);
  }, []);

  const packages = packageData[selectedCity];

  const scrollToForm = (name: string) => {
    window.dispatchEvent(new CustomEvent("royal-stone-package", {
      detail: { city: selectedCity, name },
    }));
    document
      .getElementById("lead-form")
      ?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      });
  };

  if (reference) {
    const icons = [ClipboardList, House, Gem];
    return (
      <section id="packages" className="scroll-mt-24 bg-white py-12 sm:py-16">
        <div className="site-container">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold tracking-[0.18em] text-brand-600">DESIGN PACKAGES</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Choose the right starting point.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">Explore our existing architecture packages for Patna and Noida, with scope and pricing details on the architecture page.</p>
              <p className="mt-2 text-sm text-slate-500">Select your city to view package pricing and services.</p>
            </div>
            <div className="flex gap-2" role="group" aria-label="Package city">
              {(["Patna", "Noida"] as const).map(city => (
                <button key={city} type="button" aria-pressed={city === selectedCity} onClick={() => setSelectedCity(city)} className={`min-h-11 rounded-full px-7 text-sm font-semibold transition-colors ${city === selectedCity ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-700 hover:bg-brand-50"}`}>{city}</button>
              ))}
            </div>
          </div>
          <p className="mb-4 text-sm text-slate-500" aria-live="polite">Showing packages for <strong className="text-slate-900">{selectedCity}</strong></p>
          <div className="grid gap-5 lg:grid-cols-3">
            {packages.map((item, index) => {
              const Icon = icons[index];
              return <article key={item.name} className="flex min-w-0 flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
                <div className="flex items-start gap-4 border-b border-slate-100 bg-[#fdf5f5] p-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600"><Icon className="h-6 w-6" /></span>
                  <div><h3 className="text-xl font-bold text-slate-950">{item.name}</h3><p className="mt-1 text-xl font-bold text-brand-600">{item.price}</p><p className="mt-1 text-xs text-slate-500">{selectedCity}{item.popular ? " · Most Popular" : ""}</p></div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="mb-3 text-sm font-bold text-slate-950">Inclusions:</p>
                  <ul className="flex-1 space-y-2.5">{item.features.map(feature => <li key={feature} className="flex items-start gap-2 text-sm leading-5 text-slate-600"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" /><span>{feature}</span></li>)}</ul>
                  <Link href={`/services/architecture?${new URLSearchParams({ city: selectedCity })}#packages`} aria-label={`View Details: ${item.name} in ${selectedCity}`} className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-brand-600 hover:underline">View Details <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  <Link href={packageEnquiryHref(selectedCity, item.name)} aria-label={`Enquire Now: ${item.name} in ${selectedCity}`} className="mt-2 flex min-h-11 items-center justify-center gap-3 rounded-md bg-brand-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700">Enquire Now <ArrowRight className="h-4 w-4" /></Link>
                </div>
              </article>;
            })}
          </div>
          <Link href="/services/architecture" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-600 hover:underline">View Design Packages <ArrowRight className="h-4 w-4" /></Link>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-500">Final pricing may vary depending on project size, location, scope and design requirements. Contact our team for a detailed quotation.</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="packages"
      className="bg-[#f7f5f0] px-5 py-20 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADING */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#b88a32]/30 bg-[#b88a32]/10 px-4 py-2 text-xs font-extrabold tracking-[0.16em] text-[#9a7026]">
            OUR PACKAGES
          </span>

          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-[#111111] sm:text-5xl">
            Choose the Right
            <span className="text-[#b88a32]"> Design Package</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Select your city to view package pricing and services.
          </p>
        </div>

        {/* CITY SWITCH */}
        <div className="mb-10 flex justify-center gap-3">
          <button
            type="button"
            onClick={() => setSelectedCity("Patna")}
            aria-pressed={selectedCity === "Patna"}
            className={`rounded-xl px-7 py-3 font-bold transition ${
              selectedCity === "Patna"
                ? "bg-[#111111] text-white shadow-lg"
                : "border border-slate-300 bg-white text-slate-900 hover:border-[#b88a32] hover:text-[#b88a32]"
            }`}
          >
            Patna
          </button>

          <button
            type="button"
            onClick={() => setSelectedCity("Noida")}
            aria-pressed={selectedCity === "Noida"}
            className={`rounded-xl px-7 py-3 font-bold transition ${
              selectedCity === "Noida"
                ? "bg-[#111111] text-white shadow-lg"
                : "border border-slate-300 bg-white text-slate-900 hover:border-[#b88a32] hover:text-[#b88a32]"
            }`}
          >
            Noida
          </button>
        </div>

        {/* CITY LABEL */}
        <div className="mb-8 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">
            Showing packages for
          </p>

          <h3 className="mt-2 text-2xl font-black text-[#111111]">
            {selectedCity}
          </h3>
        </div>

        {/* PACKAGE GRID */}
        <div className="grid gap-7 lg:grid-cols-3">
          {packages.map((item) => (
            <div
              key={`${selectedCity}-${item.name}`}
              className={`relative flex min-h-[620px] flex-col rounded-3xl bg-white p-7 shadow-[0_18px_50px_rgba(11,24,32,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(11,24,32,0.14)] sm:p-8 ${
                item.popular
                  ? "border-2 border-[#b88a32]"
                  : "border border-slate-200"
              }`}
            >
              {/* MOST POPULAR */}
              {item.popular && (
                <div className="mb-5">
                  <span className="inline-flex rounded-full bg-[#b88a32] px-4 py-2 text-xs font-extrabold text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <p className="mb-2 text-sm font-bold uppercase tracking-[0.14em] text-slate-400">
                {selectedCity}
              </p>

              <h3 className="text-3xl font-extrabold text-[#111111]">
                {item.name}
              </h3>

              <div className="mt-3 text-4xl font-black text-[#b88a32]">
                {item.price}
              </div>

              <div className="my-7 h-px bg-slate-200" />

              {/* FEATURES */}
              <ul className="flex-1 space-y-4">
                {item.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-base text-slate-700"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#b88a32]/10 text-[#b88a32]">
                      <Check size={16} strokeWidth={3} />
                    </span>

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CHOOSE BUTTON */}
              <button
                type="button"
                onClick={() => scrollToForm(item.name)}
                className={`mt-8 min-h-14 w-full rounded-xl border-2 px-5 text-base font-extrabold transition ${
                  item.popular
                    ? "border-[#111111] bg-[#111111] text-white hover:border-[#b88a32] hover:bg-[#b88a32]"
                    : "border-[#b88a32] bg-white text-[#b88a32] hover:bg-[#b88a32] hover:text-white"
                }`}
              >
                Choose {item.name}
              </button>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-slate-500">
          Final pricing may vary depending on project size, location, scope and
          design requirements. Contact our team for a detailed quotation.
        </p>
      </div>
    </section>
  );
}
