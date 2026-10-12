
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
  ClipboardList,
  DraftingCompass,
  HardHat,
  Hammer,
  Layers3,
  PackageCheck,
  Ruler,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";

import ServiceDetail from "@/components/ServiceDetail";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Construction With Material",
  description:
    "Explore complete house construction with material supply, labour coordination, site supervision, planning and quality control from Royal Stone Construction.",
};

const constructionFeatures = [
  {
    number: "01",
    title: "Material Planning & Supply",
    description:
      "Coordinate construction material requirements, specifications, procurement and delivery based on the agreed project scope.",
    icon: Truck,
  },
  {
    number: "02",
    title: "Labour & Site Coordination",
    description:
      "Plan site activities, construction teams and responsibilities according to project milestones.",
    icon: HardHat,
  },
  {
    number: "03",
    title: "Construction Execution",
    description:
      "Coordinate foundation, structural, masonry and finishing activities according to approved drawings and agreed work.",
    icon: Hammer,
  },
  {
    number: "04",
    title: "Quality Review",
    description:
      "Use agreed specifications, technical supervision and relevant inspection checkpoints during construction.",
    icon: ShieldCheck,
  },
];

const constructionStages = [
  {
    number: "01",
    title: "Planning & Consultation",
    description:
      "Discuss plot details, construction requirements, drawings, budget and material specifications.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Site Preparation & Foundation",
    description:
      "Plan site preparation and foundation work according to engineering drawings and site requirements.",
    icon: Ruler,
  },
  {
    number: "03",
    title: "Structural Construction",
    description:
      "Coordinate structural, masonry and related construction work based on the agreed execution plan.",
    icon: Building2,
  },
  {
    number: "04",
    title: "Finishing & Handover",
    description:
      "Review the agreed finishing activities, inspections and handover deliverables.",
    icon: PackageCheck,
  },
];

const constructionAreas = [
  {
    title: "Foundation & Structural Work",
    text: "Foundation, columns, beams, slabs and structural construction as specified in approved plans.",
    icon: Layers3,
  },
  {
    title: "Brickwork & Plastering",
    text: "Wall construction, masonry coordination and surface preparation.",
    icon: Building2,
  },
  {
    title: "Electrical & Plumbing",
    text: "Coordination of electrical and plumbing work according to agreed drawings and service scope.",
    icon: ClipboardCheck,
  },
  {
    title: "Flooring & Finishing",
    text: "Planning and execution of specified flooring, painting and finishing activities.",
    icon: Hammer,
  },
];

export default function ConstructionPage() {
  const service = services.find(
    (item) => item.slug === "construction"
  );

  if (!service) {
    notFound();
  }

  return (
    <main className="overflow-hidden bg-white">
      {/* PREMIUM HEADER */}
      <section className="relative isolate overflow-hidden bg-[#08111f] py-8 text-white sm:py-10">
        <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-red-600/20 blur-[100px]" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-orange-500/10 blur-[110px]" />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="site-container relative z-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition-colors hover:text-red-300"
              >
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                Back to Services
              </Link>

              <div className="mt-5 flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-red-500/30 bg-red-500/10 text-red-400">
                  <HardHat className="h-7 w-7" />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-red-400">
                    COMPLETE CONSTRUCTION SOLUTIONS
                  </p>

                  <p className="mt-1 text-xl font-black sm:text-2xl">
                    Construction With Material
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/get-quote"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-2xl bg-red-600 px-6 py-3 text-sm font-extrabold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-[0_15px_40px_rgba(220,38,38,0.35)] motion-reduce:transform-none"
            >
              Get Free Quote
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* EXISTING SERVICE DETAIL */}
      <ServiceDetail service={service} />

      {/* CONSTRUCTION FEATURES */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-red-50/40 py-20 sm:py-24 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-red-500/10 blur-[110px]" />
        <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-orange-400/10 blur-[120px]" />

        <div className="site-container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-white px-5 py-2.5 text-xs font-black uppercase tracking-[0.15em] text-red-600 shadow-sm">
              <Sparkles className="h-4 w-4" />
              CONSTRUCTION SERVICES
            </div>

            <h2 className="mt-6 text-3xl font-black leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
              From Foundation to
              <span className="mt-2 block bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent">
                Final Finishing.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Our construction-with-material service brings
              together material planning, site coordination
              and construction activities through an
              organised project workflow.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {constructionFeatures.map(
              ({ number, title, description, icon: Icon }) => (
                <article
                  key={number}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-red-300 hover:shadow-[0_25px_65px_rgba(220,38,38,0.13)] motion-reduce:transform-none"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-5 top-3 text-[78px] font-black leading-none text-slate-100"
                  >
                    {number}
                  </span>

                  <div className="relative flex h-16 w-16 items-center justify-center rounded-[20px] border border-red-100 bg-red-50 text-red-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-[0_12px_35px_rgba(220,38,38,0.3)] motion-reduce:transform-none">
                    <Icon className="h-8 w-8" />
                  </div>

                  <p className="relative mt-8 text-xs font-black uppercase tracking-[0.14em] text-red-600">
                    CONSTRUCTION {number}
                  </p>

                  <h3 className="relative mt-4 text-xl font-black text-slate-950 transition-colors duration-300 group-hover:text-red-600">
                    {title}
                  </h3>

                  <p className="relative mt-4 flex-1 leading-8 text-slate-600">
                    {description}
                  </p>

                  <div className="relative mt-8 h-px bg-slate-200" />

                  <div className="relative mt-5 flex items-center justify-between">
                    <span className="flex items-center gap-2 text-xs font-bold text-slate-500">
                      <CheckCircle2 className="h-4 w-4 text-red-600" />
                      Project Scope
                    </span>

                    <ArrowUpRight className="h-5 w-5 text-red-500 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transform-none" />
                  </div>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-600 to-orange-400 transition-all duration-500 group-hover:w-full" />
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* MATERIAL & CONSTRUCTION AREAS */}
      <section className="relative overflow-hidden bg-[#08111f] py-20 text-white sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-red-600/15 blur-[120px]" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-orange-500/10 blur-[130px]" />

        <div className="site-container relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-red-500/25 bg-red-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.15em] text-red-300">
                <Layers3 className="h-4 w-4" />
                MATERIAL & EXECUTION PLANNING
              </div>

              <h2 className="mt-7 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                Planned Construction.
                <span className="mt-2 block text-red-400">
                  Coordinated Execution.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
                Construction involves multiple activities,
                material requirements and technical decisions.
                A coordinated approach helps align those
                activities with project drawings,
                specifications and milestones.
              </p>

              <p className="mt-4 max-w-xl leading-8 text-slate-400">
                Material brands, grades, quantities and
                included work are defined in your agreed
                quotation or construction contract.
              </p>

              <Link
                href="/get-quote"
                className="group mt-9 inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-red-600 px-7 py-4 font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 motion-reduce:transform-none"
              >
                Discuss Construction Requirements
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {constructionAreas.map(({ title, text, icon: Icon }) => (
                <article
                  key={title}
                  className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:bg-white/[0.09] motion-reduce:transform-none"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white motion-reduce:transform-none">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-6 text-lg font-black text-white">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {text}
                  </p>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-600 to-orange-400 transition-all duration-500 group-hover:w-full" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONSTRUCTION WORKFLOW */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute -left-28 top-0 h-80 w-80 rounded-full bg-red-500/5 blur-[100px]" />

        <div className="site-container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-5 py-2.5 text-xs font-black uppercase tracking-[0.15em] text-red-600">
              <DraftingCompass className="h-4 w-4" />
              OUR CONSTRUCTION PROCESS
            </div>

            <h2 className="mt-6 text-3xl font-black text-slate-950 sm:text-4xl lg:text-5xl">
              A Structured Path to{" "}
              <span className="text-red-600">Your New Space.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
              From understanding your requirements to
              construction and handover, the final
              workflow is planned around your project.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {constructionStages.map(
              ({ number, title, description, icon: Icon }) => (
                <article
                  key={number}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-7 shadow-[0_10px_35px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-red-300 hover:shadow-[0_20px_55px_rgba(220,38,38,0.12)] motion-reduce:transform-none"
                >
                  <span
                    aria-hidden="true"
                    className="absolute right-5 top-3 text-[78px] font-black leading-none text-slate-100"
                  >
                    {number}
                  </span>

                  <div className="relative flex h-16 w-16 items-center justify-center rounded-[20px] bg-red-50 text-red-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white motion-reduce:transform-none">
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
                      Construction Workflow
                    </span>

                    <ArrowUpRight className="h-5 w-5 text-red-600 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transform-none" />
                  </div>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-600 to-orange-400 transition-all duration-500 group-hover:w-full" />
                </article>
              )
            )}
          </div>

          {/* SAFETY NOTE */}
          <div className="mt-12 flex items-start gap-4 rounded-[25px] border border-red-100 bg-red-50/70 p-6 sm:p-8">
            <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-red-600" />

            <div>
              <h3 className="text-lg font-black text-slate-950">
                Material Specifications & Site Safety
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Actual construction activities, materials,
                quality checkpoints, supervision responsibilities
                and timelines are subject to the agreed
                contract. Structural work must follow
                qualified engineering designs, relevant
                safety requirements and applicable approvals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#08111f] py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-red-600/15 blur-[100px]" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-orange-500/10 blur-[110px]" />

        <div className="site-container relative z-10">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="flex items-start gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[20px] bg-red-600 text-white shadow-[0_10px_30px_rgba(220,38,38,0.3)]">
                <HardHat className="h-8 w-8" />
              </div>

              <div className="max-w-2xl">
                <p className="text-xs font-black uppercase tracking-[0.15em] text-red-400">
                  START YOUR CONSTRUCTION PROJECT
                </p>

                <h2 className="mt-3 text-2xl font-black sm:text-3xl">
                  Planning to Build Your Dream Home?
                </h2>

                <p className="mt-4 leading-8 text-slate-300">
                  Share your plot details, proposed construction
                  area, location and material requirements.
                  Let&apos;s discuss your project scope and quotation.
                </p>
              </div>
            </div>

            <Link
              href="/get-quote"
              className="group inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-2xl bg-red-600 px-7 py-4 font-extrabold text-white shadow-[0_12px_35px_rgba(220,38,38,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-[0_18px_45px_rgba(220,38,38,0.35)] motion-reduce:transform-none"
            >
              Get Construction Quote
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
