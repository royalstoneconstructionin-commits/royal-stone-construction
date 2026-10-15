import { metadataForRoute } from "@/lib/seo";

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
  Home,
  Layers3,
  Lightbulb,
  MapPinned,
  Ruler,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

import ServiceDetail from "@/components/ServiceDetail";
import { services } from "@/lib/site-data";

export const metadata: Metadata = metadataForRoute("/services/floor-planning");

const planningFeatures = [
  {
    number: "01",
    title: "Residential Floor Planning",
    description:
      "Practical layouts for homes, including living spaces, bedrooms, kitchens, bathrooms and circulation areas.",
    icon: Home,
  },
  {
    number: "02",
    title: "Commercial Space Planning",
    description:
      "Organised layout concepts for offices, shops and commercial properties based on functional requirements.",
    icon: Building2,
  },
  {
    number: "03",
    title: "Space Optimisation",
    description:
      "Explore room arrangements and space usage to support comfortable circulation and everyday functionality.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Custom Layout Design",
    description:
      "Discuss personalised layouts based on plot dimensions, access, preferences and applicable planning constraints.",
    icon: DraftingCompass,
  },
];

const planningSteps = [
  {
    number: "01",
    title: "Share Plot Details",
    description:
      "Tell us about your plot dimensions, location, road access and building requirements.",
    icon: MapPinned,
  },
  {
    number: "02",
    title: "Requirement Discussion",
    description:
      "Discuss the number of rooms, intended use, priorities and design preferences.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Layout Development",
    description:
      "Explore proposed room arrangements, space distribution and circulation in the floor plan.",
    icon: Ruler,
  },
  {
    number: "04",
    title: "Review & Finalisation",
    description:
      "Review the proposed layout and discuss revisions before finalising the agreed planning deliverables.",
    icon: CheckCircle2,
  },
];

const planningPrinciples = [
  {
    title: "Functional Room Layouts",
    text: "Room arrangements designed around practical usage.",
    icon: Home,
  },
  {
    title: "Smart Space Utilisation",
    text: "Considered circulation and efficient space distribution.",
    icon: Layers3,
  },
  {
    title: "Natural Light & Ventilation",
    text: "Planning that considers daylight and ventilation opportunities.",
    icon: Lightbulb,
  },
  {
    title: "Site-Based Planning",
    text: "Layouts considered in relation to plot dimensions and applicable requirements.",
    icon: Ruler,
  },
];

export default function FloorPlanningPage() {
  const service = services.find(
    (item) => item.slug === "floor-planning"
  );

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* =====================================
          PREMIUM FLOOR PLANNING HEADER
      ===================================== */}
      <section className="relative isolate overflow-hidden bg-[#0b1820] py-8 text-white sm:py-10">

        {/* Lighting Effects */}
        <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand-600/20 blur-[100px]" />

        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-brand-500/10 blur-[110px]" />

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

            {/* Left Header */}
            <div>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition-colors duration-300 hover:text-brand-300"
              >
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                Back to Services
              </Link>

              <div className="mt-5 flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-brand-500/30 bg-brand-500/10 text-brand-400 shadow-[0_0_30px_rgba(212,165,75,0.12)]">

                  <DraftingCompass className="h-7 w-7" />

                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-brand-400">
                    ARCHITECTURE & SPACE PLANNING
                  </p>

                  <p className="mt-1 text-xl font-black tracking-tight sm:text-2xl">
                    Floor Planning Services
                  </p>
                </div>
              </div>
            </div>

            {/* Quote Button */}
            <Link
              href="/get-quote"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-2xl bg-brand-600 px-6 py-3 text-sm font-extrabold text-white shadow-[0_10px_30px_rgba(184,134,50,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-brand-700 hover:shadow-[0_15px_40px_rgba(184,134,50,0.35)] motion-reduce:transform-none"
            >
              Get Free Quote

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

          </div>
        </div>
      </section>

      {/* =====================================
          EXISTING SERVICE DETAILS
      ===================================== */}
      <ServiceDetail service={service} />

      {/* =====================================
          FLOOR PLANNING SERVICES
      ===================================== */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-slate-50 via-white to-brand-50/40 py-20 sm:py-24 lg:py-28">

        {/* Grid Pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Glow */}
        <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-brand-500/10 blur-[110px]" />

        <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-brand-400/10 blur-[120px]" />

        <div className="site-container relative z-10">

          {/* Section Heading */}
          <div className="mx-auto max-w-3xl text-center">

            <div className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-5 py-2.5 text-xs font-black uppercase tracking-[0.15em] text-brand-600 shadow-sm">

              <Sparkles className="h-4 w-4" />

              FLOOR PLANNING SOLUTIONS

            </div>

            <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">

              Every Space Begins

              <span className="mt-2 block bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500 bg-clip-text text-transparent">
                With a Great Plan.
              </span>

            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              A thoughtful floor plan connects room layouts,
              movement, natural lighting and functionality.
              Explore planning solutions based on your
              property and requirements.
            </p>

            <div className="mx-auto mt-7 h-1 w-24 rounded-full bg-gradient-to-r from-brand-600 to-brand-400" />

          </div>

          {/* Planning Feature Cards */}
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {planningFeatures.map(
              ({
                number,
                title,
                description,
                icon: Icon,
              }) => (
                <article
                  key={number}
                  className="group relative isolate flex h-full min-w-0 flex-col overflow-hidden rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(11,24,32,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-brand-300 hover:shadow-[0_25px_65px_rgba(184,134,50,0.13)] motion-reduce:transform-none"
                >

                  {/* Background Glow */}
                  <div className="pointer-events-none absolute -right-20 -top-20 -z-10 h-60 w-60 rounded-full bg-brand-500/5 blur-[80px] transition-colors duration-500 group-hover:bg-brand-500/15" />

                  {/* Decorative Number */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-5 top-3 text-[78px] font-black leading-none text-slate-100 transition-colors duration-500 group-hover:text-brand-50"
                  >
                    {number}
                  </span>

                  {/* Animated Icon */}
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-[20px] border border-brand-100 bg-brand-50 text-brand-600 transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 group-hover:border-brand-600 group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-[0_12px_35px_rgba(184,134,50,0.3)] motion-reduce:transform-none">

                    <Icon className="h-8 w-8" />

                  </div>

                  {/* Label */}
                  <div className="relative mt-8 flex items-center gap-2">

                    <span className="h-2 w-2 rounded-full bg-brand-600" />

                    <span className="text-xs font-black uppercase tracking-[0.15em] text-brand-600">
                      PLANNING {number}
                    </span>

                  </div>

                  {/* Title */}
                  <h3 className="relative mt-5 text-xl font-black leading-snug text-slate-950 transition-colors duration-300 group-hover:text-brand-600">

                    {title}

                  </h3>

                  {/* Description */}
                  <p className="relative mt-4 flex-1 leading-8 text-slate-600">

                    {description}

                  </p>

                  {/* Divider */}
                  <div className="relative mt-8 h-px bg-gradient-to-r from-slate-200 to-transparent transition-colors duration-300 group-hover:from-brand-300" />

                  {/* Footer */}
                  <div className="relative mt-5 flex items-center justify-between">

                    <span className="flex items-center gap-2 text-xs font-bold text-slate-500">
                      <CheckCircle2 className="h-4 w-4 text-brand-600" />
                      Planning Solutions
                    </span>

                    <ArrowUpRight className="h-5 w-5 text-slate-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-600 motion-reduce:transform-none" />

                  </div>

                  {/* Animated Border */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-brand-600 to-brand-400 transition-all duration-500 group-hover:w-full" />

                </article>
              )
            )}

          </div>

        </div>
      </section>

      {/* =====================================
          DARK PLANNING PHILOSOPHY
      ===================================== */}
      <section className="relative isolate overflow-hidden bg-[#0b1820] py-20 text-white sm:py-24 lg:py-28">

        {/* Background Glows */}
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand-600/15 blur-[120px]" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-brand-500/10 blur-[130px]" />

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

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

            {/* Left */}
            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/25 bg-brand-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.15em] text-brand-300">

                <Lightbulb className="h-4 w-4" />

                SMART SPACE DESIGN

              </div>

              <h2 className="mt-7 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">

                A Smarter Layout.

                <span className="mt-2 block text-brand-400">
                  A Better Living Experience.
                </span>

              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                Effective floor planning is about more
                than drawing walls and rooms.

                <span className="mt-4 block">
                  It considers how spaces connect,
                  how people move between rooms and
                  how the design responds to the
                  property and its intended use.
                </span>

              </p>

              <div className="mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-brand-600 via-brand-400 to-brand-400" />

              <Link
                href="/get-quote"
                className="group mt-9 inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-brand-600 px-7 py-4 font-extrabold text-white shadow-[0_12px_35px_rgba(184,134,50,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-brand-700 hover:shadow-[0_18px_45px_rgba(184,134,50,0.35)] motion-reduce:transform-none"
              >
                Discuss Your Floor Plan

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />

              </Link>

            </div>

            {/* Right Planning Principles */}
            <div className="space-y-4">

              {planningPrinciples.map(
                ({ title, text, icon: Icon }, index) => (
                  <div
                    key={title}
                    className="group relative flex items-center gap-5 overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-md transition-all duration-300 hover:translate-x-1 hover:border-brand-500/40 hover:bg-white/[0.09] motion-reduce:transform-none sm:p-6"
                  >

                    {/* Icon */}
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-brand-500/20 bg-brand-500/10 text-brand-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white motion-reduce:transform-none">

                      <Icon className="h-6 w-6" />

                    </div>

                    {/* Text */}
                    <div className="min-w-0 flex-1">

                      <p className="text-xs font-black uppercase tracking-wider text-brand-400">
                        DESIGN FOCUS{" "}
                        {String(index + 1).padStart(2, "0")}
                      </p>

                      <h3 className="mt-2 text-base font-black text-white sm:text-lg">

                        {title}

                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-400">

                        {text}

                      </p>

                    </div>

                    <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-400" />

                    {/* Animated Border */}
                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-brand-600 to-brand-400 transition-all duration-500 group-hover:w-full" />

                  </div>
                )
              )}

            </div>

          </div>

        </div>
      </section>

      {/* =====================================
          FLOOR PLANNING WORKFLOW
      ===================================== */}
      <section className="relative isolate overflow-hidden bg-white py-20 sm:py-24 lg:py-28">

        <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-brand-500/5 blur-[110px]" />

        <div className="site-container relative z-10">

          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">

            <div className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-5 py-2.5 text-xs font-black uppercase tracking-[0.15em] text-brand-600">

              <Workflow className="h-4 w-4" />

              OUR FLOOR PLANNING PROCESS

            </div>

            <h2 className="mt-6 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">

              From Plot Details to{" "}

              <span className="text-brand-600">
                Your Floor Plan.
              </span>

            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
              A structured design process helps turn your
              requirements into a practical proposed layout.
            </p>

          </div>

          {/* Process Cards */}
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {planningSteps.map(
              ({
                number,
                title,
                description,
                icon: Icon,
              }) => (
                <article
                  key={number}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-7 shadow-[0_10px_35px_rgba(11,24,32,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-brand-300 hover:shadow-[0_20px_55px_rgba(184,134,50,0.12)] motion-reduce:transform-none"
                >

                  {/* Decorative Number */}
                  <span
                    aria-hidden="true"
                    className="absolute right-5 top-3 text-[78px] font-black leading-none text-slate-100"
                  >
                    {number}
                  </span>

                  {/* Icon */}
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-[20px] bg-brand-50 text-brand-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-[0_10px_30px_rgba(184,134,50,0.25)] motion-reduce:transform-none">

                    <Icon className="h-8 w-8" />

                  </div>

                  {/* Step Number */}
                  <p className="relative mt-8 text-xs font-black uppercase tracking-[0.15em] text-brand-600">
                    STEP {number}
                  </p>

                  {/* Title */}
                  <h3 className="relative mt-4 text-xl font-black text-slate-950">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="relative mt-4 flex-1 leading-8 text-slate-600">
                    {description}
                  </p>

                  {/* Divider */}
                  <div className="relative mt-8 h-px bg-slate-200" />

                  {/* Footer */}
                  <div className="relative mt-5 flex items-center justify-between">

                    <span className="text-xs font-bold text-slate-500">
                      Floor Planning
                    </span>

                    <ArrowUpRight className="h-5 w-5 text-brand-600 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transform-none" />

                  </div>

                  {/* Bottom Border */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-brand-600 to-brand-400 transition-all duration-500 group-hover:w-full" />

                </article>
              )
            )}

          </div>

          {/* Important Note */}
          <div className="mt-12 flex items-start gap-4 rounded-[25px] border border-brand-100 bg-brand-50/70 p-6 sm:p-8">

            <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-brand-600" />

            <div>
              <h3 className="text-lg font-black text-slate-950">
                Floor Plan Scope & Approvals
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Floor planning deliverables depend on plot
                dimensions, property conditions, local
                building regulations and agreed service scope.
                Plans intended for construction may require
                technical review and applicable approvals.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================
          FINAL QUOTE CTA
      ===================================== */}
      <section className="relative overflow-hidden bg-[#0b1820] py-16 text-white sm:py-20">

        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand-600/15 blur-[100px]" />

        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-brand-500/10 blur-[110px]" />

        <div className="site-container relative z-10">

          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

            {/* Left Side */}
            <div className="flex items-start gap-5">

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[20px] bg-brand-600 text-white shadow-[0_10px_30px_rgba(184,134,50,0.3)]">

                <DraftingCompass className="h-8 w-8" />

              </div>

              <div className="max-w-2xl">

                <p className="text-xs font-black uppercase tracking-[0.15em] text-brand-400">
                  START YOUR FLOOR PLAN
                </p>

                <h2 className="mt-3 text-2xl font-black leading-tight sm:text-3xl">
                  Ready to Plan Your Dream Home?
                </h2>

                <p className="mt-4 leading-8 text-slate-300">
                  Share your plot size, location, room
                  requirements and design preferences
                  to discuss a suitable floor plan.
                </p>

              </div>

            </div>

            {/* Button */}
            <Link
              href="/get-quote"
              className="group inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-2xl bg-brand-600 px-7 py-4 font-extrabold text-white shadow-[0_12px_35px_rgba(184,134,50,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-brand-700 hover:shadow-[0_18px_45px_rgba(184,134,50,0.35)] motion-reduce:transform-none"
            >
              Get Floor Plan Quote

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

          </div>

        </div>
      </section>
    </>
  );
}
