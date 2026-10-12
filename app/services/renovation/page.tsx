
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  DraftingCompass,
  Hammer,
  Home,
  Layers3,
  PaintBucket,
  RefreshCw,
  Ruler,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import ServiceDetail from "@/components/ServiceDetail";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Renovation",
  description:
    "Explore home and commercial renovation planning, coordinated layouts, upgrades and finishing with Royal Stone Construction.",
};

const renovationSteps = [
  {
    number: "01",
    title: "Site Assessment",
    description:
      "Understand the existing property, renovation requirements, site conditions and proposed improvements.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Design & Planning",
    description:
      "Discuss space planning, layouts, material selections and renovation scope before execution.",
    icon: DraftingCompass,
  },
  {
    number: "03",
    title: "Renovation Execution",
    description:
      "Coordinate agreed renovation activities, materials, finishes and project milestones.",
    icon: Hammer,
  },
  {
    number: "04",
    title: "Finishing & Review",
    description:
      "Review completed work against the agreed scope and coordinate the final finishing requirements.",
    icon: CheckCircle2,
  },
];

const renovationAreas = [
  {
    number: "01",
    title: "Home Renovation",
    description:
      "Refresh existing living spaces with practical layouts, planned improvements and appropriate finishing choices.",
    icon: Home,
  },
  {
    number: "02",
    title: "Interior Upgrades",
    description:
      "Explore updated finishes, surface treatments, fixtures and interior improvements.",
    icon: PaintBucket,
  },
  {
    number: "03",
    title: "Space Reconfiguration",
    description:
      "Evaluate layout changes to improve functionality, subject to structural and site constraints.",
    icon: Ruler,
  },
  {
    number: "04",
    title: "Property Improvements",
    description:
      "Plan suitable upgrades and repair requirements according to the property's condition and project scope.",
    icon: Building2,
  },
];

export default function RenovationPage() {
  const service = services.find(
    (item) => item.slug === "renovation"
  );

  if (!service) {
    notFound();
  }

  return (
    <main className="overflow-hidden bg-white">
      {/* ======================================
          PREMIUM HEADER
      ====================================== */}
      <section className="relative isolate overflow-hidden bg-[#08111f] py-8 text-white sm:py-10">
        {/* Background Lighting */}
        <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-red-600/20 blur-[100px]" />

        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-orange-500/10 blur-[110px]" />

        {/* Architectural Grid */}
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
            {/* Header Text */}
            <div>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition-colors duration-300 hover:text-red-300"
              >
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                Back to Services
              </Link>

              <div className="mt-5 flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-red-500/30 bg-red-500/10 text-red-400 shadow-[0_0_30px_rgba(239,68,68,0.12)]">
                  <RefreshCw className="h-7 w-7" />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-red-400">
                    RENOVATION & UPGRADES
                  </p>

                  <p className="mt-1 text-xl font-black tracking-tight sm:text-2xl">
                    Renovation Services
                  </p>
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

      {/* ======================================
          EXISTING SERVICE DETAILS
      ====================================== */}
      <ServiceDetail service={service} />

      {/* ======================================
          RENOVATION WORKFLOW
      ====================================== */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-slate-50 via-white to-red-50/40 py-20 sm:py-24 lg:py-28">
        {/* Grid Background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Lighting */}
        <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-red-500/10 blur-[110px]" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-orange-400/10 blur-[120px]" />

        <div className="site-container relative z-10">
          {/* Section Header */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-white px-5 py-2.5 text-xs font-black uppercase tracking-[0.15em] text-red-600 shadow-sm">
              <Sparkles className="h-4 w-4" />
              RENOVATION WORKFLOW
            </div>

            <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Transforming Spaces.
              <span className="mt-2 block bg-gradient-to-r from-red-700 via-red-600 to-orange-500 bg-clip-text text-transparent">
                Step by Step.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              From evaluating your existing space to
              discussing finishes and project delivery,
              our renovation process focuses on
              coordinated planning and practical execution.
            </p>

            <div className="mx-auto mt-7 h-1 w-24 rounded-full bg-gradient-to-r from-red-600 to-orange-400 shadow-[0_0_20px_rgba(220,38,38,0.2)]" />
          </div>

          {/* Workflow Cards */}
          <div className="mt-14 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4">
            {renovationSteps.map(
              ({
                number,
                title,
                description,
                icon: Icon,
              }) => (
                <article
                  key={number}
                  className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-red-300 hover:shadow-[0_25px_65px_rgba(220,38,38,0.13)] motion-reduce:transform-none"
                >
                  {/* Background Glow */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-red-500/5 blur-[80px] transition-colors duration-500 group-hover:bg-red-500/15" />

                  {/* Number */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-5 top-3 text-[85px] font-black leading-none text-slate-100 transition-colors duration-500 group-hover:text-red-50"
                  >
                    {number}
                  </span>

                  {/* Icon */}
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-[20px] border border-red-100 bg-red-50 text-red-600 transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-[0_12px_35px_rgba(220,38,38,0.3)] motion-reduce:transform-none">
                    <Icon className="h-8 w-8" />
                  </div>

                  {/* Step Label */}
                  <div className="relative mt-8 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-red-600" />

                    <span className="text-xs font-black uppercase tracking-[0.15em] text-red-600">
                      STAGE {number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="relative mt-5 text-xl font-black leading-snug text-slate-950 transition-colors duration-300 group-hover:text-red-600">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="relative mt-4 flex-1 leading-8 text-slate-600">
                    {description}
                  </p>

                  {/* Divider */}
                  <div className="relative mt-8 h-px bg-gradient-to-r from-slate-200 to-transparent transition-colors duration-300 group-hover:from-red-300" />

                  {/* Footer */}
                  <div className="relative mt-5 flex items-center justify-between">
                    <span className="flex items-center gap-2 text-xs font-bold text-slate-500">
                      <CheckCircle2 className="h-4 w-4 text-red-600" />
                      Renovation Stage
                    </span>

                    <ArrowUpRight className="h-5 w-5 text-slate-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-600 motion-reduce:transform-none" />
                  </div>

                  {/* Bottom Border */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-600 to-orange-400 transition-all duration-500 group-hover:w-full" />
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* ======================================
          RENOVATION AREAS
      ====================================== */}
      <section className="relative isolate overflow-hidden bg-[#08111f] py-20 text-white sm:py-24 lg:py-28">
        {/* Lighting */}
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-red-600/15 blur-[120px]" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-orange-500/10 blur-[130px]" />

        {/* Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />

        <div className="site-container relative z-10">
          {/* Section Header */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/25 bg-red-500/10 px-4 py-2.5 text-xs font-black uppercase tracking-[0.15em] text-red-300">
              <Layers3 className="h-4 w-4" />
              RENOVATION POSSIBILITIES
            </div>

            <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Give Your Space
              <span className="mt-2 block text-red-400">
                A New Perspective.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Explore potential improvements for
              residential and commercial spaces.
              Actual renovation options depend on the
              property&apos;s condition, technical requirements
              and agreed project scope.
            </p>
          </div>

          {/* Renovation Area Cards */}
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {renovationAreas.map(
              ({
                number,
                title,
                description,
                icon: Icon,
              }) => (
                <article
                  key={number}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.05] p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-red-500/40 hover:bg-white/[0.08] hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] motion-reduce:transform-none"
                >
                  {/* Number */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-5 top-3 text-[75px] font-black leading-none text-white/[0.04]"
                  >
                    {number}
                  </span>

                  {/* Icon */}
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-[20px] border border-red-500/20 bg-red-500/10 text-red-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-[0_10px_30px_rgba(239,68,68,0.3)] motion-reduce:transform-none">
                    <Icon className="h-8 w-8" />
                  </div>

                  {/* Label */}
                  <p className="relative mt-8 text-xs font-black uppercase tracking-[0.15em] text-red-400">
                    RENOVATION {number}
                  </p>

                  <h3 className="relative mt-4 text-xl font-black leading-snug text-white">
                    {title}
                  </h3>

                  <p className="relative mt-5 flex-1 leading-8 text-slate-300">
                    {description}
                  </p>

                  <div className="relative mt-8 h-px bg-white/10" />

                  <div className="relative mt-5 flex items-center justify-between">
                    <span className="text-xs font-bold text-red-300">
                      Royal Stone Construction
                    </span>

                    <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-400 motion-reduce:transform-none" />
                  </div>

                  {/* Animated Line */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-600 to-orange-400 transition-all duration-500 group-hover:w-full" />
                </article>
              )
            )}
          </div>

          {/* ======================================
              PREMIUM RENOVATION MESSAGE
          ====================================== */}
          <div className="group relative mt-14 overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05] p-7 backdrop-blur-md sm:p-10">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-red-600/15 blur-[100px]" />

            <div className="relative grid items-center gap-8 md:grid-cols-[auto_1fr]">
              <div className="flex h-20 w-20 items-center justify-center rounded-[24px] border border-red-500/30 bg-red-500/10 text-red-400 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 motion-reduce:transform-none">
                <RefreshCw className="h-10 w-10" />
              </div>

              <div>
                <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em] text-red-300">
                  <Sparkles className="h-4 w-4" />
                  REIMAGINE YOUR SPACE
                </div>

                <h3 className="mt-4 text-2xl font-black sm:text-3xl">
                  From Existing Spaces to New Possibilities.
                </h3>

                <p className="mt-4 max-w-3xl leading-8 text-slate-300">
                  A renovation can help refresh the appearance,
                  functionality and comfort of your space.
                  We begin by understanding what can be
                  improved within your project&apos;s practical
                  and technical constraints.
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-red-600 via-orange-400 to-transparent" />
          </div>
        </div>
      </section>

      {/* ======================================
          FINAL CTA SECTION
      ====================================== */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-white via-slate-50 to-red-50/50 py-16 sm:py-20">
        <div className="pointer-events-none absolute -left-28 top-0 h-80 w-80 rounded-full bg-red-500/10 blur-[100px]" />

        <div className="site-container relative z-10">
          <div className="relative overflow-hidden rounded-[32px] border border-red-100 bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.07)] sm:p-10">
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              {/* Left */}
              <div className="flex items-start gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[20px] bg-red-600 text-white shadow-[0_10px_30px_rgba(220,38,38,0.25)]">
                  <ShieldCheck className="h-8 w-8" />
                </div>

                <div className="max-w-2xl">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-red-600">
                    START YOUR RENOVATION
                  </p>

                  <h2 className="mt-3 text-2xl font-black leading-tight tracking-tight text-slate-950 sm:text-3xl">
                    Ready to Transform Your Property?
                  </h2>

                  <p className="mt-4 leading-8 text-slate-600">
                    Tell us about your property&apos;s current
                    condition, renovation goals and budget.
                    Let&apos;s discuss a suitable plan for your space.
                  </p>
                </div>
              </div>

              {/* Right */}
              <Link
                href="/get-quote"
                className="group inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-2xl bg-red-600 px-7 py-4 font-extrabold text-white shadow-[0_12px_35px_rgba(220,38,38,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-[0_18px_45px_rgba(220,38,38,0.35)] motion-reduce:transform-none"
              >
                Get Renovation Quote
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Note */}
            <div className="mt-8 flex items-start gap-3 border-t border-slate-100 pt-6">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />

              <p className="text-sm leading-7 text-slate-500">
                Structural alterations, electrical or plumbing
                changes and other regulated works require
                appropriate professional assessments and
                applicable approvals before execution.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
