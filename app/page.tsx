import {
  Building2,
  DraftingCompass,
  Hammer,
  PaintBucket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import LeadForm from "@/components/LeadForm";
import PricingPackages from "@/components/PricingPackages";

const services = [
  {
    title: "Architecture",
    text: "Smart planning, floor plans, elevations and practical architectural design.",
    icon: DraftingCompass,
  },
  {
    title: "Construction with Material",
    text: "End-to-end construction execution with planned material and quality control.",
    icon: Hammer,
  },
  {
    title: "Interior Design",
    text: "Functional and attractive interiors for homes, offices and commercial spaces.",
    icon: PaintBucket,
  },
];

export default function HomePage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-red-50/70"
      >
        {/* background decoration */}
        <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-red-200/40 blur-3xl" />

        <div className="mx-auto grid min-h-[760px] max-w-7xl items-center gap-12 px-5 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
          {/* LEFT CONTENT */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-4 py-2 text-sm font-extrabold text-red-600 shadow-sm">
              <Sparkles className="h-4 w-4" />
              Built with planning. Finished with pride.
            </div>

            <h1 className="mt-7 max-w-3xl font-serif text-5xl font-black leading-[0.96] tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl xl:text-[88px]">
              From Vision to
              <span className="block text-red-600">
                Structure.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Architecture, construction with material, and interior design
              services for people who want a professional, transparent and
              beautifully executed project.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#lead-form"
                className="inline-flex min-h-14 items-center justify-center rounded-xl bg-red-600 px-7 font-extrabold text-white shadow-xl shadow-red-600/20 transition hover:bg-red-700"
              >
                Start Your Project
              </a>

              <a
                href="#services"
                className="inline-flex min-h-14 items-center justify-center rounded-xl border border-slate-300 bg-white px-7 font-extrabold text-slate-900 transition hover:bg-slate-50"
              >
                Explore Services
              </a>
            </div>

            {/* STATS */}
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-slate-200 pt-7">
              <div>
                <strong className="block text-2xl font-black text-slate-950">
                  3+
                </strong>

                <span className="text-xs text-slate-500 sm:text-sm">
                  Core Services
                </span>
              </div>

              <div>
                <strong className="block text-2xl font-black text-slate-950">
                  100%
                </strong>

                <span className="text-xs text-slate-500 sm:text-sm">
                  Responsive Support
                </span>
              </div>

              <div>
                <strong className="block text-2xl font-black text-slate-950">
                  1 Team
                </strong>

                <span className="text-xs text-slate-500 sm:text-sm">
                  Design to Delivery
                </span>
              </div>
            </div>
          </div>

          {/* LEAD FORM */}
          <div
            id="lead-form"
            className="relative z-10 flex justify-center lg:justify-end"
          >
            <LeadForm />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="bg-white py-20"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-black tracking-[0.18em] text-red-600">
              OUR SERVICES
            </span>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Everything you need to build better.
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              One team for planning, execution and interiors.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map(({ title, text, icon: Icon }) => (
              <article
                key={title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                  <Icon />
                </div>

                <h3 className="mt-6 text-2xl font-black text-slate-950">
                  {title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING / PACKAGES */}
      <PricingPackages />

      {/* WHY US */}
      <section
        id="why-us"
        className="bg-[#0d1728] py-20 text-white"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="text-sm font-black tracking-[0.18em] text-red-400">
              WHY ROYAL STONE
            </span>

            <h2 className="mt-3 text-4xl font-black sm:text-5xl">
              Professional execution from concept to completion.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <ShieldCheck className="text-red-400" />

              <h3 className="mt-4 text-xl font-bold">
                Transparent Process
              </h3>

              <p className="mt-2 leading-7 text-slate-300">
                Clear communication, planning and progress visibility.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <Building2 className="text-red-400" />

              <h3 className="mt-4 text-xl font-bold">
                One Team
              </h3>

              <p className="mt-2 leading-7 text-slate-300">
                Architecture, construction and interiors under one workflow.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}