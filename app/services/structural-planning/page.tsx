import { metadataForRoute } from "@/lib/seo";

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  DraftingCompass,
  HardHat,
  Layers3,
  Ruler,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import ServiceDetail from "@/components/ServiceDetail";
import { services } from "@/lib/site-data";

export const metadata: Metadata = metadataForRoute("/services/structural-planning");

const planningStages = [
  {
    number: "01",
    title: "Project & Site Review",
    description:
      "Understanding architectural requirements, site conditions and the information needed for structural planning.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Structural Coordination",
    description:
      "Coordinating structural layouts, column positions, beams and foundation requirements with the architectural plan.",
    icon: DraftingCompass,
  },
  {
    number: "03",
    title: "Drawings & Review",
    description:
      "Organising structural documentation for review by qualified professionals before construction execution.",
    icon: HardHat,
  },
];

const planningFocus = [
  {
    title: "Foundation Planning",
    description:
      "Foundation requirements informed by structural analysis and suitable ground investigation.",
    icon: Layers3,
  },
  {
    title: "Layout Coordination",
    description:
      "Coordinating structural member locations with the architectural layout and project requirements.",
    icon: Ruler,
  },
  {
    title: "Construction Documentation",
    description:
      "Drawings and specifications prepared or reviewed according to the agreed technical scope.",
    icon: Building2,
  },
];

export default function StructuralPlanningPage() {
  const service = services.find(
    (item) => item.slug === "structural-planning"
  );

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* PREMIUM HEADER */}
      <section className="relative isolate overflow-hidden bg-[#08111f] py-8 text-white sm:py-10">

        {/* Background Effects */}
        <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-red-600/20 blur-[100px]" />

        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-orange-500/10 blur-[100px]" />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="site-container relative z-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

            <div>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition-colors duration-300 hover:text-red-300"
              >
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                Back to Services
              </Link>

              <div className="mt-5 flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-red-500/30 bg-red-500/10 text-red-400 shadow-[0_0_30px_rgba(239,68,68,0.1)]">
                  <DraftingCompass className="h-7 w-7" />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-red-400">
                    ENGINEERING & PLANNING
                  </p>

                  <h2 className="mt-1 text-xl font-black tracking-tight sm:text-2xl">
                    Structural Planning
                  </h2>
                </div>
              </div>
            </div>

            <Link
              href="/get-quote"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-2xl bg-red-600 px-6 py-3 text-sm font-extrabold text-white shadow-[0_10px_30px_rgba(220,38,38,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-[0_15px_40px_rgba(220,38,38,0.35)] motion-reduce:transform-none"
            >
              Get Free Quote
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

          </div>
        </div>
      </section>

      {/* EXISTING SERVICE DETAIL */}
      <ServiceDetail service={service} />

      {/* STRUCTURAL PLANNING WORKFLOW */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-slate-50 via-white to-red-50/40 py-20 sm:py-24 lg:py-28">

        {/* Background Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Background Lighting */}
        <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-red-500/10 blur-[110px]" />

        <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-orange-400/10 blur-[120px]" />

        <div className="site-container relative z-10">

          {/* SECTION HEADING */}
          <div className="mx-auto max-w-3xl text-center">

            <div className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-white px-5 py-2.5 text-xs font-black uppercase tracking-[0.15em] text-red-600 shadow-sm">
              <Sparkles className="h-4 w-4" />
              STRUCTURAL PLANNING PROCESS
            </div>

            <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Thoughtful Planning.
              <span className="mt-2 block bg-gradient-to-r from-red-700 via-red-600 to-orange-500 bg-clip-text text-transparent">
                Stronger Foundations.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Structural planning connects architectural
              requirements with engineering considerations.
              Every project requires appropriate technical
              review based on its site conditions and design.
            </p>

            <div className="mx-auto mt-7 h-1 w-24 rounded-full bg-gradient-to-r from-red-600 to-orange-400" />
          </div>

          {/* WORKFLOW CARDS */}
          <div className="mt-14 grid items-stretch gap-6 md:grid-cols-3">

            {planningStages.map(
              ({
                number,
                title,
                description,
                icon: Icon,
              }) => (
                <article
                  key={number}
                  className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-red-300 hover:shadow-[0_25px_65px_rgba(220,38,38,0.13)] motion-reduce:transform-none sm:p-8"
                >

                  {/* Decorative Number */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-5 top-3 text-[85px] font-black leading-none text-slate-100 transition-colors duration-500 group-hover:text-red-50"
                  >
                    {number}
                  </span>

                  {/* Animated Icon */}
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-[20px] border border-red-100 bg-red-50 text-red-600 transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-[0_12px_35px_rgba(220,38,38,0.3)] motion-reduce:transform-none">
                    <Icon className="h-8 w-8" />
                  </div>

                  {/* Step Label */}
                  <div className="relative mt-8 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-red-600" />

                    <span className="text-xs font-black uppercase tracking-[0.15em] text-red-600">
                      PLANNING STAGE {number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="relative mt-5 text-xl font-black leading-snug text-slate-950 transition-colors duration-300 group-hover:text-red-600 sm:text-2xl">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="relative mt-4 flex-1 leading-8 text-slate-600">
                    {description}
                  </p>

                  {/* Bottom Divider */}
                  <div className="relative mt-8 h-px bg-gradient-to-r from-slate-200 to-transparent transition-colors duration-300 group-hover:from-red-300" />

                  {/* Footer */}
                  <div className="relative mt-5 flex items-center justify-between">

                    <span className="flex items-center gap-2 text-xs font-bold text-slate-500">
                      <CheckCircle2 className="h-4 w-4 text-red-600" />
                      Project Planning
                    </span>

                    <ArrowUpRight className="h-5 w-5 text-slate-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-600 motion-reduce:transform-none" />

                  </div>

                  {/* Animated Bottom Line */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-600 to-orange-400 transition-all duration-500 group-hover:w-full" />

                </article>
              )
            )}

          </div>

          {/* IMPORTANT NOTE */}
          <div className="mt-12 flex items-start gap-4 rounded-[25px] border border-red-100 bg-white p-6 shadow-sm sm:p-8">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-600">
              <ShieldCheck className="h-7 w-7" />
            </div>

            <div>
              <h3 className="text-lg font-black text-slate-950">
                Structural Safety & Technical Review
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Structural drawings, foundation designs and
                construction specifications must be reviewed
                by appropriately qualified structural engineers
                and comply with applicable codes and approval
                requirements. Actual design decisions depend
                on site conditions, loads, soil investigation
                and engineering calculations.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* KEY PLANNING AREAS */}
      <section className="relative isolate overflow-hidden bg-[#08111f] py-20 text-white sm:py-24 lg:py-28">

        {/* Lighting */}
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-red-600/15 blur-[120px]" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-orange-500/10 blur-[130px]" />

        {/* Background Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />

        <div className="site-container relative z-10">

          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">

            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/25 bg-red-500/10 px-4 py-2.5 text-xs font-black uppercase tracking-[0.15em] text-red-300">
              <BadgeCheck className="h-4 w-4" />
              PLANNING CONSIDERATIONS
            </div>

            <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Every Detail Matters.
              <span className="mt-2 block text-red-400">
                From Ground to Structure.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Structural planning involves coordinated
              decisions about foundation systems, layouts
              and technical documentation.
            </p>
          </div>

          {/* DETAIL CARDS */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {planningFocus.map(
              ({
                title,
                description,
                icon: Icon,
              }) => (
                <article
                  key={title}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.05] p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-red-500/40 hover:bg-white/[0.08] hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] motion-reduce:transform-none sm:p-8"
                >

                  <div className="flex h-16 w-16 items-center justify-center rounded-[20px] border border-red-500/20 bg-red-500/10 text-red-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-[0_10px_30px_rgba(239,68,68,0.3)] motion-reduce:transform-none">
                    <Icon className="h-8 w-8" />
                  </div>

                  <h3 className="mt-8 text-xl font-black text-white sm:text-2xl">
                    {title}
                  </h3>

                  <p className="mt-5 flex-1 leading-8 text-slate-300">
                    {description}
                  </p>

                  <div className="mt-8 h-px bg-white/10" />

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs font-bold text-red-300">
                      Structural Planning
                    </span>

                    <ArrowUpRight className="h-5 w-5 text-slate-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-400 motion-reduce:transform-none" />
                  </div>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-600 to-orange-400 transition-all duration-500 group-hover:w-full" />
                </article>
              )
            )}

          </div>

          {/* BOTTOM CTA */}
          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-[28px] border border-white/10 bg-white/[0.05] p-7 backdrop-blur-md sm:flex-row sm:items-center sm:p-9">

            <div className="flex items-start gap-4">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-600 text-white">
                <DraftingCompass className="h-7 w-7" />
              </div>

              <div>
                <h3 className="text-xl font-black sm:text-2xl">
                  Planning Your Construction Project?
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
                  Share your project location, requirements
                  and available drawings to discuss the
                  appropriate planning scope.
                </p>
              </div>

            </div>

            <Link
              href="/get-quote"
              className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-2xl bg-red-600 px-6 py-3 font-extrabold text-white shadow-[0_10px_30px_rgba(220,38,38,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-[0_15px_40px_rgba(220,38,38,0.35)] motion-reduce:transform-none"
            >
              Request Consultation
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

          </div>

        </div>
      </section>
    </>
  );
}
