
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Box,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  DraftingCompass,
  Eye,
  Home,
  Layers3,
  MapPin,
  PenTool,
  Ruler,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import ServiceDetail from "@/components/ServiceDetail";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Architecture Services",
  description:
    "Explore Royal Stone Construction architecture services including house map planning, 2D floor plans, 3D elevations, residential and commercial architectural design.",
};

// =====================================
// ARCHITECTURE SERVICES
// =====================================

const architectureServices = [
  {
    number: "01",
    title: "House Map Planning",
    description:
      "Practical house plans designed around plot dimensions, room requirements, site access and daily living needs.",
    icon: Home,
  },
  {
    number: "02",
    title: "2D Floor Plans",
    description:
      "Detailed architectural layouts showing room arrangements, dimensions, circulation and space organisation.",
    icon: DraftingCompass,
  },
  {
    number: "03",
    title: "3D Elevation Design",
    description:
      "Exterior architectural concepts that help you visualise building form, colours, materials and facade details.",
    icon: Box,
  },
  {
    number: "04",
    title: "Residential Architecture",
    description:
      "Planning and architectural design concepts for individual homes, villas and residential buildings.",
    icon: Building2,
  },
  {
    number: "05",
    title: "Commercial Architecture",
    description:
      "Functional planning for offices, shops and commercial properties based on their intended use.",
    icon: Layers3,
  },
  {
    number: "06",
    title: "Custom Architectural Design",
    description:
      "Personalised layout concepts developed around your property conditions, preferences and design goals.",
    icon: PenTool,
  },
];

// =====================================
// ARCHITECTURE WORKFLOW
// =====================================

const architectureSteps = [
  {
    number: "01",
    title: "Requirement Consultation",
    description:
      "Discuss plot location, dimensions, building requirements, preferred layout and approximate budget.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Architectural Planning",
    description:
      "Explore room arrangements, circulation, site considerations and proposed planning options.",
    icon: Ruler,
  },
  {
    number: "03",
    title: "Design Development",
    description:
      "Develop agreed architectural drawings, elevation concepts and design details for review.",
    icon: DraftingCompass,
  },
  {
    number: "04",
    title: "Review & Finalisation",
    description:
      "Discuss revisions and finalise the drawings and deliverables included in the agreed scope.",
    icon: CheckCircle2,
  },
];

const designPrinciples = [
  {
    title: "Functional Planning",
    description:
      "Thoughtful room layouts and practical movement between spaces.",
    icon: Home,
  },
  {
    title: "Site-Based Design",
    description:
      "Planning that considers plot dimensions, orientation and access.",
    icon: MapPin,
  },
  {
    title: "Visual Design",
    description:
      "Architectural form, exterior appearance and coordinated details.",
    icon: Eye,
  },
  {
    title: "Detailed Documentation",
    description:
      "Architectural drawings prepared according to project requirements.",
    icon: DraftingCompass,
  },
];

export default function ArchitecturePage() {
  const service = services.find(
    (item) => item.slug === "architecture"
  );

  if (!service) {
    notFound();
  }

  return (
    <main className="overflow-hidden bg-white">
      {/* =====================================
          PREMIUM ARCHITECTURE HEADER
      ===================================== */}

      <section className="relative isolate overflow-hidden bg-[#08111f] py-8 text-white sm:py-10">
        {/* Lighting */}
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
                  <DraftingCompass className="h-7 w-7" />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-red-400">
                    DESIGN & ARCHITECTURAL PLANNING
                  </p>

                  <p className="mt-1 text-xl font-black tracking-tight sm:text-2xl">
                    Architecture Services
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

      {/* =====================================
          EXISTING SERVICE DETAILS
      ===================================== */}

      <ServiceDetail service={service} />

      {/* =====================================
          ARCHITECTURE SERVICES GRID
      ===================================== */}

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

        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-red-500/10 blur-[110px]" />

        <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-orange-400/10 blur-[120px]" />

        <div className="site-container relative z-10">
          {/* Section Header */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-white px-5 py-2.5 text-xs font-black uppercase tracking-[0.15em] text-red-600 shadow-sm">
              <Sparkles className="h-4 w-4" />
              ARCHITECTURAL SOLUTIONS
            </div>

            <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Great Buildings Begin
              <span className="mt-2 block bg-gradient-to-r from-red-700 via-red-600 to-orange-500 bg-clip-text text-transparent">
                With Great Design.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              From house maps and floor plans to modern
              elevations and complete architectural concepts,
              explore planning solutions developed around
              your property and requirements.
            </p>

            <div className="mx-auto mt-7 h-1 w-24 rounded-full bg-gradient-to-r from-red-600 to-orange-400" />
          </div>

          {/* Service Cards */}
          <div className="mt-14 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
            {architectureServices.map(
              ({
                number,
                title,
                description,
                icon: Icon,
              }) => (
                <article
                  key={number}
                  className="group relative isolate flex h-full min-w-0 flex-col overflow-hidden rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-red-300 hover:shadow-[0_25px_65px_rgba(220,38,38,0.13)] motion-reduce:transform-none sm:p-8"
                >
                  {/* Decorative Light */}
                  <div className="pointer-events-none absolute -right-20 -top-20 -z-10 h-60 w-60 rounded-full bg-red-500/5 blur-[80px] transition-colors duration-500 group-hover:bg-red-500/15" />

                  {/* Number */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-5 top-3 text-[80px] font-black leading-none text-slate-100 transition-colors duration-500 group-hover:text-red-50"
                  >
                    {number}
                  </span>

                  {/* Icon */}
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-[20px] border border-red-100 bg-red-50 text-red-600 transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-[0_12px_35px_rgba(220,38,38,0.3)] motion-reduce:transform-none">
                    <Icon className="h-8 w-8" />
                  </div>

                  {/* Label */}
                  <div className="relative mt-8 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-red-600" />

                    <span className="text-xs font-black uppercase tracking-[0.15em] text-red-600">
                      ARCHITECTURE {number}
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

                  {/* Divider */}
                  <div className="relative mt-8 h-px bg-gradient-to-r from-slate-200 to-transparent transition-colors duration-300 group-hover:from-red-300" />

                  {/* Footer */}
                  <div className="relative mt-5 flex items-center justify-between">
                    <span className="flex items-center gap-2 text-xs font-bold text-slate-500">
                      <CheckCircle2 className="h-4 w-4 text-red-600" />
                      Design Solutions
                    </span>

                    <ArrowUpRight className="h-5 w-5 text-slate-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-600 motion-reduce:transform-none" />
                  </div>

                  {/* Animated Border */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-600 to-orange-400 transition-all duration-500 group-hover:w-full" />
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* =====================================
          DARK ARCHITECTURE PHILOSOPHY
      ===================================== */}

      <section className="relative isolate overflow-hidden bg-[#08111f] py-20 text-white sm:py-24 lg:py-28">
        {/* Background Effects */}
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-red-600/15 blur-[120px]" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-orange-500/10 blur-[130px]" />

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
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-red-500/25 bg-red-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.15em] text-red-300">
                <DraftingCompass className="h-4 w-4" />
                OUR DESIGN PHILOSOPHY
              </div>

              <h2 className="mt-7 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Designed With Purpose.
                <span className="mt-2 block text-red-400">
                  Planned for Living.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                Architectural design is about more than
                attractive drawings. It connects the
                property&apos;s conditions with practical spaces
                and your vision for the building.
              </p>

              <p className="mt-4 max-w-xl leading-8 text-slate-400">
                Our approach considers layouts, circulation,
                natural lighting, ventilation and exterior
                appearance while respecting applicable
                technical and planning requirements.
              </p>

              <div className="mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-red-600 via-red-400 to-orange-400" />

              <Link
                href="/get-quote"
                className="group mt-9 inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-red-600 px-7 py-4 font-extrabold text-white shadow-[0_12px_35px_rgba(220,38,38,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-[0_18px_45px_rgba(220,38,38,0.35)] motion-reduce:transform-none"
              >
                Discuss Your Design

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Right Principles */}
            <div className="space-y-4">
              {designPrinciples.map(
                ({ title, description, icon: Icon }, index) => (
                  <div
                    key={title}
                    className="group relative flex items-center gap-5 overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-md transition-all duration-300 hover:translate-x-1 hover:border-red-500/40 hover:bg-white/[0.09] motion-reduce:transform-none sm:p-6"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10 text-red-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white motion-reduce:transform-none">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-black uppercase tracking-wider text-red-400">
                        DESIGN FOCUS{" "}
                        {String(index + 1).padStart(2, "0")}
                      </p>

                      <h3 className="mt-2 text-base font-black text-white sm:text-lg">
                        {title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {description}
                      </p>
                    </div>

                    <CheckCircle2 className="h-5 w-5 shrink-0 text-red-400" />

                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-600 to-orange-400 transition-all duration-500 group-hover:w-full" />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          ARCHITECTURE DESIGN PROCESS
      ===================================== */}

      <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-red-500/5 blur-[110px]" />

        <div className="site-container relative z-10">
          {/* Section Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-5 py-2.5 text-xs font-black uppercase tracking-[0.15em] text-red-600">
              <Layers3 className="h-4 w-4" />
              OUR ARCHITECTURE PROCESS
            </div>

            <h2 className="mt-6 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              From Your Vision to{" "}
              <span className="text-red-600">
                Architectural Plans.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
              Our design process helps translate your
              requirements into architectural concepts
              and coordinated project documentation.
            </p>
          </div>

          {/* Process Cards */}
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {architectureSteps.map(
              ({
                number,
                title,
                description,
                icon: Icon,
              }) => (
                <article
                  key={number}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-7 shadow-[0_10px_35px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-red-300 hover:shadow-[0_20px_55px_rgba(220,38,38,0.12)] motion-reduce:transform-none"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-5 top-3 text-[78px] font-black leading-none text-slate-100"
                  >
                    {number}
                  </span>

                  {/* Animated Icon */}
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-[20px] bg-red-50 text-red-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-[0_10px_30px_rgba(220,38,38,0.25)] motion-reduce:transform-none">
                    <Icon className="h-8 w-8" />
                  </div>

                  <p className="relative mt-8 text-xs font-black uppercase tracking-[0.15em] text-red-600">
                    STEP {number}
                  </p>

                  <h3 className="relative mt-4 text-xl font-black text-slate-950">
                    {title}
                  </h3>

                  <p className="relative mt-4 flex-1 leading-8 text-slate-600">
                    {description}
                  </p>

                  <div className="relative mt-8 h-px bg-slate-200" />

                  <div className="relative mt-5 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500">
                      Architecture Workflow
                    </span>

                    <ArrowUpRight className="h-5 w-5 text-red-600 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transform-none" />
                  </div>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-600 to-orange-400 transition-all duration-500 group-hover:w-full" />
                </article>
              )
            )}
          </div>

          {/* Important Note */}
          <div className="mt-12 flex items-start gap-4 rounded-[25px] border border-red-100 bg-red-50/70 p-6 sm:p-8">
            <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-red-600" />

            <div>
              <h3 className="text-lg font-black text-slate-950">
                Architectural Planning & Approvals
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Architectural designs depend on plot
                dimensions, site conditions, building
                regulations and the agreed project scope.
                Construction drawings may require
                coordination with qualified architects,
                structural engineers and applicable
                local authority approvals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          FINAL CTA
      ===================================== */}

      <section className="relative overflow-hidden bg-[#08111f] py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-red-600/15 blur-[100px]" />

        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-orange-500/10 blur-[110px]" />

        <div className="site-container relative z-10">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="flex items-start gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[20px] bg-red-600 text-white shadow-[0_10px_30px_rgba(220,38,38,0.3)]">
                <DraftingCompass className="h-8 w-8" />
              </div>

              <div className="max-w-2xl">
                <p className="text-xs font-black uppercase tracking-[0.15em] text-red-400">
                  START YOUR ARCHITECTURAL PROJECT
                </p>

                <h2 className="mt-3 text-2xl font-black sm:text-3xl">
                  Ready to Design Your Dream Home?
                </h2>

                <p className="mt-4 leading-8 text-slate-300">
                  Share your plot size, location, building
                  requirements and preferred architectural
                  style. Let&apos;s discuss your planning
                  requirements and quotation.
                </p>
              </div>
            </div>

            <Link
              href="/get-quote"
              className="group inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-2xl bg-red-600 px-7 py-4 font-extrabold text-white shadow-[0_12px_35px_rgba(220,38,38,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-[0_18px_45px_rgba(220,38,38,0.35)] motion-reduce:transform-none"
            >
              Get Architecture Quote

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
