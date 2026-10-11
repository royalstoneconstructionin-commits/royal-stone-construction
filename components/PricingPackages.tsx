"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const packageData = {
  Patna: [
    {
      name: "Silver Package",
      price: "₹6/sqft",
      popular: false,
      features: [
        "Floor Plan",
        "Plumbing Design",
        "Electric Design",
        "3D Front Elevation",
      ],
    },
    {
      name: "Gold Package",
      price: "₹8/sqft",
      popular: true,
      features: [
        "Floor Plan",
        "Plumbing Design",
        "Electric Design",
        "3D Front Elevation",
        "Column Layout Design",
        "Pile/Footing Layout Design",
        "Tie Beam Detail Design",
        "Slab Beam Detail Design",
        "Slab Reinforcement Details Design",
        "Staircase Section Details",
        "Septic Tank & Borewell Position",
      ],
    },
    {
      name: "Platinum Package",
      price: "₹30/sqft",
      popular: false,
      features: [
        "Floor Plan",
        "Plumbing Design",
        "Electric Design",
        "3D Front Elevation",
        "Column Layout Design",
        "Pile/Footing Layout Design",
        "Tie Beam Detail Design",
        "Slab Beam Detail Design",
        "Slab Reinforcement Details Design",
        "Staircase Section Details",
        "Septic Tank & Borewell Position",
        "3D Interior Design",
      ],
    },
  ],

  Noida: [
    {
      name: "Silver Package",
      price: "₹10/sqft",
      popular: false,
      features: [
        "Floor Plan",
        "Plumbing Design",
        "Electric Design",
        "3D Front Elevation",
      ],
    },
    {
      name: "Gold Package",
      price: "₹15/sqft",
      popular: true,
      features: [
        "Floor Plan",
        "Plumbing Design",
        "Electric Design",
        "3D Front Elevation",
        "Column Layout Design",
        "Pile/Footing Layout Design",
        "Tie Beam Detail Design",
        "Slab Beam Detail Design",
        "Slab Reinforcement Details Design",
        "Staircase Section Details",
        "Septic Tank & Borewell Position",
      ],
    },
    {
      name: "Platinum Package",
      price: "₹40/sqft",
      popular: false,
      features: [
        "Floor Plan",
        "Plumbing Design",
        "Electric Design",
        "3D Front Elevation",
        "Column Layout Design",
        "Pile/Footing Layout Design",
        "Tie Beam Detail Design",
        "Slab Beam Detail Design",
        "Slab Reinforcement Details Design",
        "Staircase Section Details",
        "Septic Tank & Borewell Position",
        "3D Interior Design",
      ],
    },
  ],
};

export default function PricingPackages() {
  const [selectedCity, setSelectedCity] = useState<"Patna" | "Noida">("Patna");

  const packages = packageData[selectedCity];

  const scrollToForm = () => {
    document
      .getElementById("lead-form")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

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
              className={`relative flex min-h-[620px] flex-col rounded-3xl bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(15,23,42,0.14)] sm:p-8 ${
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
                onClick={scrollToForm}
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