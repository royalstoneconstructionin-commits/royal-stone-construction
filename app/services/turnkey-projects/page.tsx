
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ClipboardCheck,
  DraftingCompass,
  Hammer,
  Home,
  Layers3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import ServiceDetail from "@/components/ServiceDetail";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Turnkey Projects",
  description:
    "Explore Royal Stone Construction turnkey services, from architecture and construction planning to materials, interiors and final handover.",
};

const turnkeySteps = [
  {
    number: "01",
    title: "Design & Planning",
    description:
      "Understand project requirements, prepare the design scope and coordinate architectural planning.",
    icon: DraftingCompass,
  },
  {
    number: "02",
    title: "Construction & Materials",
    description:
      "Plan construction activities, material specifications and execution according to the agreed project scope.",
    icon: Hammer,
  },
  {
    number: "03",
    title: "Finishing & Handover",
    description:
      "Coordinate the agreed finishing work, project reviews and final handover activities.",
    icon: Home,
  },
];

export default function TurnkeyProjectsPage() {
  const service = services.find(
    (item) => item.slug === "turnkey-projects"
  );

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* PREMIUM SERVICE TOP BAR */}
      <section className="relative isolate overflow-hidden bg-[#08111f] py-7 text-white sm:py-9">
        <div className="pointer-events-none absolute -left-20 top-0 h-60 w-60 rounded-full bg-red-600/20 blur-[90px]" />

        <div className="pointer-events-none absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-orange-500/10 blur-[100px]" />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="site-container relative z-10">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition-colors duration-300 hover:text-red-300"
              >
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                All Services
              </Link>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-red-500/30 bg-red-500/10 text-red-400">
                  <Layers3 className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-400">
                    COMPLETE PROJECT SOLUTIONS
                  </p>

                  <h1 className="mt-1 text-xl font-black tracking-tight sm:text-2xl">
                    Turnkey Projects
                  </h1>
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

      {/* EXISTING DYNAMIC SERVICE DETAILS */}
      <ServiceDetail service={service} />

      {/* TURNKEY WORKFLOW */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-slate-50 via-white to-red-50/40 py-20 sm:py-24 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-red-500/10 blur-[110px]" />

        <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-orange-400/10 blur-[120px]" />

        <div className="site-container relative z-10">
          {/* HEADER */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-white px-4 py-2.5 text-xs font-black uppercase tracking-[0.15em] text-red-600 shadow-sm">
              <Sparkles className="h-4 w-4" />
              TURNKEY APPROACH
            </div>

            <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              One Coordinated{" "}
              <span className="bg-gradient-to-r from-red-700 via-red-600 to-orange-500 bg-clip-text text-transparent">
                Project Journey.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Turnkey projects connect planning, construction
              and finishing through a coordinated approach.
              The exact deliverables depend on your agreed
              project scope.
            </p>
          </div>

          {/* WORKFLOW CARDS */}
          <div className="mt-14 grid items-stretch gap-6 md:grid-cols-3">
            {turnkeySteps.map(
              ({ number, title, description, icon: Icon }) => (
                <article
                  key={number}
                  className="group relative isolate flex h-full min-w-0 flex-col overflow-hidden rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-red-300 hover:shadow-[0_25px_65px_rgba(220,38,38,0.13)] motion-reduce:transform-none sm:p-8"
                >
                  {/* BACKGROUND GLOW */}
                  <div className="pointer-events-none absolute -right-20 -top-20 -z-10 h-60 w-60 rounded-full bg-red-500/5 blur-[80px] transition-colors duration-500 group-hover:bg-red-500/15" />

                  {/* DECORATIVE NUMBER */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-5 top-3 text-[85px] font-black leading-none text-slate-100 transition-colors duration-500 group-hover:text-red-50"
                  >
                    {number}
                  </span>

                  {/* ICON */}
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-[20px] border border-red-100 bg-red-50 text-red-600 transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-[0_12px_35px_rgba(220,38,38,0.3)] motion-reduce:transform-none">
                    <Icon className="h-8 w-8" />
                  </div>

                  {/* STEP */}
                  <div className="relative mt-8 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-red-600" />

                    <span className="text-xs font-black uppercase tracking-[0.15em] text-red-600">
                      STAGE {number}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="relative mt-4 text-xl font-black leading-snug text-slate-950 transition-colors duration-300 group-hover:text-red-600 sm:text-2xl">
                    {title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="relative mt-4 flex-1 leading-8 text-slate-600">
                    {description}
                  </p>

                  {/* DIVIDER */}
                  <div className="relative mt-8 h-px bg-gradient-to-r from-slate-200 to-transparent transition-colors duration-300 group-hover:from-red-300" />

                  {/* FOOTER */}
                  <div className="relative mt-5 flex items-center justify-between">
                    <span className="flex items-center gap-2 text-xs font-bold text-slate-500">
                      <CheckCircle2 className="h-4 w-4 text-red-600" />
                      Project Stage
                    </span>

                    <ArrowUpRight className="h-5 w-5 text-slate-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-600 motion-reduce:transform-none" />
                  </div>

                  {/* BOTTOM BORDER */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-600 to-orange-400 transition-all duration-500 group-hover:w-full" />
                </article>
              )
            )}
          </div>

          {/* IMPORTANT NOTE */}
          <div className="mt-10 flex items-start gap-4 rounded-[24px] border border-red-100 bg-white p-6 shadow-sm sm:p-7">
            <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-red-600" />

            <div>
              <h3 className="text-lg font-black text-slate-950">
                Project Scope & Specifications
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                Material brands, construction specifications,
                design deliverables, project timelines and
                interior work are discussed and agreed based
                on individual requirements.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-[28px] bg-[#08111f] p-7 text-white shadow-xl sm:flex-row sm:items-center sm:p-9">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-600 text-white">
                <ClipboardCheck className="h-7 w-7" />
              </div>

              <div>
                <h3 className="text-xl font-black sm:text-2xl">
                  Planning a Turnkey Project?
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-7 text-slate-300">
                  Tell us about your property, budget and
                  requirements to discuss a suitable project plan.
                </p>
              </div>
            </div>

            <Link
              href="/get-quote"
              className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-2xl bg-red-600 px-6 py-3 font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-[0_12px_35px_rgba(220,38,38,0.35)] motion-reduce:transform-none"
            >
              Request a Quote

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
