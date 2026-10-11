
import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  DraftingCompass,
  Hammer,
  Layers3,
  PaintBucket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore architecture, construction with material, interiors, turnkey projects, floor planning, elevations, structural planning and renovation services from Royal Stone Construction.",
};

const expertise = [
  {
    number: "01",
    title: "Architecture & Planning",
    description:
      "Floor plans, elevations and practical design solutions.",
    icon: DraftingCompass,
  },
  {
    number: "02",
    title: "Construction Services",
    description:
      "Construction with material and coordinated execution.",
    icon: Hammer,
  },
  {
    number: "03",
    title: "Interior Design",
    description:
      "Functional layouts, finishes and attractive living spaces.",
    icon: PaintBucket,
  },
];

const steps = [
  {
    number: "01",
    title: "Share Your Requirements",
    description:
      "Tell us about your property, project location and the services you need.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Discuss Your Project",
    description:
      "Explore the design, construction scope, budget and specifications.",
    icon: Building2,
  },
  {
    number: "03",
    title: "Plan the Next Steps",
    description:
      "Review the proposed approach and information needed for a quotation.",
    icon: BadgeCheck,
  },
];

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* PAGE HERO */}
      <PageHero
        eyebrow="OUR SERVICES"
        title="Everything you need to build better."
        text="One team for planning, construction and interiors. Explore the right service for your property, from a single drawing package to a complete turnkey project."
      />

      {/* PREMIUM INTRO SECTION */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-red-500/10 blur-[110px]" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-orange-400/10 blur-[120px]" />

        <div className="site-container relative z-10">
          <div className="group relative isolate overflow-hidden rounded-[32px] bg-[#08111f] p-7 text-white shadow-[0_25px_70px_rgba(15,23,42,0.16)] sm:p-10 lg:p-14">

            {/* Background Glows */}
            <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-red-600/20 blur-[110px]" />
            <div className="pointer-events-none absolute -bottom-32 -left-24 -z-10 h-80 w-80 rounded-full bg-orange-500/10 blur-[110px]" />

            {/* Architectural Pattern */}
            <div
              className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "52px 52px",
              }}
            />

            <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              {/* LEFT */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-xs font-black uppercase tracking-[0.15em] text-red-300">
                  <Sparkles className="h-4 w-4" />
                  COMPLETE BUILDING SOLUTIONS
                </div>

                <h2 className="mt-7 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  From Your First Idea
                  <span className="mt-2 block bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
                    To Your Dream Space.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                  Royal Stone Construction connects architectural
                  design, construction planning and interior
                  solutions through a coordinated approach.

                  <span className="mt-4 block">
                    Whether you need a house plan, construction
                    with material, renovation or complete interior
                    design, explore services based on your project
                    requirements.
                  </span>
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold text-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-red-400" />
                    Architecture
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold text-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-red-400" />
                    Construction
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold text-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-red-400" />
                    Interior Design
                  </span>
                </div>

                <Link
                  href="/get-quote"
                  className="group/btn mt-9 inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-red-600 px-7 py-4 font-extrabold text-white shadow-[0_12px_35px_rgba(220,38,38,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-[0_18px_45px_rgba(220,38,38,0.4)] motion-reduce:transform-none"
                >
                  Get Free Quote
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1 motion-reduce:transform-none" />
                </Link>
              </div>

              {/* RIGHT EXPERTISE CARDS */}
              <div className="space-y-4">
                {expertise.map(
                  ({
                    number,
                    title,
                    description,
                    icon: Icon,
                  }) => (
                    <div
                      key={number}
                      className="group/item relative flex items-center gap-4 overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-md transition-all duration-500 hover:translate-x-1 hover:border-red-500/40 hover:bg-white/[0.10] hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)] motion-reduce:transform-none sm:p-6"
                    >
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10 text-red-400 transition-all duration-300 group-hover/item:scale-110 group-hover/item:bg-red-600 group-hover/item:text-white group-hover/item:shadow-[0_10px_30px_rgba(239,68,68,0.3)] motion-reduce:transform-none">
                        <Icon className="h-7 w-7" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-black uppercase tracking-wider text-red-400">
                          SERVICE {number}
                        </p>

                        <h3 className="mt-2 text-lg font-black text-white">
                          {title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {description}
                        </p>
                      </div>

                      <ArrowUpRight className="h-5 w-5 shrink-0 text-red-400 transition-transform duration-300 group-hover/item:-translate-y-1 group-hover/item:translate-x-1 motion-reduce:transform-none" />

                      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-600 to-orange-400 transition-all duration-500 group-hover/item:w-full" />
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-red-600 via-orange-400 to-transparent" />
          </div>
        </div>
      </section>

      {/* MAIN SERVICES GRID */}
      <section
        id="all-services"
        className="relative isolate overflow-hidden bg-gradient-to-br from-slate-50 via-white to-red-50/40 py-20 sm:py-24 lg:py-28"
      >
        {/* Grid Background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-red-500/5 blur-[110px]" />
        <div className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-orange-400/10 blur-[120px]" />

        <div className="site-container relative z-10">
          {/* Section Heading */}
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-white px-4 py-2.5 text-xs font-black uppercase tracking-[0.15em] text-red-600 shadow-sm">
                <Sparkles className="h-4 w-4" />
                EXPLORE OUR SERVICES
              </div>

              <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Services Designed for{" "}
                <span className="bg-gradient-to-r from-red-700 via-red-600 to-orange-500 bg-clip-text text-transparent">
                  Your Project.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Explore our architectural, construction and
                interior services. Select a service below to
                learn more about its scope and approach.
              </p>
            </div>

            {/* Dynamic Service Counter */}
            <div className="flex w-fit items-center gap-4 rounded-[22px] border border-red-100 bg-white px-6 py-5 shadow-[0_10px_35px_rgba(220,38,38,0.07)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                <Layers3 className="h-7 w-7" />
              </div>

              <div>
                <p className="text-3xl font-black text-slate-950">
                  {String(services.length).padStart(2, "0")}
                </p>
                <p className="mt-1 text-xs font-semibold text-slate-500">
                  Services Listed
                </p>
              </div>
            </div>
          </div>

          {/* EXISTING DYNAMIC SERVICE CARDS */}
          {services.length > 0 ? (
            <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.slug}
                  className="group relative min-w-0 transition-all duration-500 hover:-translate-y-2 hover:drop-shadow-[0_16px_24px_rgba(220,38,38,0.10)] motion-reduce:transform-none"
                >
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-12 rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center">
              <Building2 className="mx-auto h-12 w-12 text-red-600" />

              <h3 className="mt-5 text-xl font-black text-slate-950">
                Services Coming Soon
              </h3>

              <p className="mt-3 text-slate-600">
                Service information will appear here when available.
              </p>
            </div>
          )}

          {/* Bottom Information */}
          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-[28px] border border-red-100 bg-gradient-to-r from-red-50 via-white to-orange-50 p-6 sm:flex-row sm:items-center sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-600 text-white shadow-[0_10px_30px_rgba(220,38,38,0.25)]">
                <ShieldCheck className="h-7 w-7" />
              </div>

              <div>
                <h3 className="text-lg font-black text-slate-950 sm:text-xl">
                  Not Sure Which Service You Need?
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-7 text-slate-600">
                  Tell us about your site, budget and project
                  requirements so we can discuss the suitable
                  service scope.
                </p>
              </div>
            </div>

            <Link
              href="/get-quote"
              className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-2xl bg-red-600 px-6 py-3 font-extrabold text-white shadow-[0_10px_30px_rgba(220,38,38,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-[0_15px_40px_rgba(220,38,38,0.3)] motion-reduce:transform-none"
            >
              Get Free Quote

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none" />
            </Link>
          </div>
        </div>
      </section>

      {/* HOW TO GET STARTED */}
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
          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/25 bg-red-500/10 px-4 py-2.5 text-xs font-black uppercase tracking-[0.15em] text-red-300">
              <Sparkles className="h-4 w-4" />
              GETTING STARTED
            </div>

            <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Your Project.
              <span className="mt-2 block text-red-400">
                A Clear Starting Point.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Our consultation process helps us understand
              your requirements before discussing project
              planning and quotations.
            </p>
          </div>

          {/* PROCESS CARDS */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map(
              ({ number, title, description, icon: Icon }) => (
                <article
                  key={number}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.05] p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-red-500/40 hover:bg-white/[0.08] hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] motion-reduce:transform-none sm:p-8"
                >
                  {/* Number */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-5 top-2 text-[80px] font-black leading-none text-white/[0.04]"
                  >
                    {number}
                  </span>

                  {/* Icon */}
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-[20px] border border-red-500/20 bg-red-500/10 text-red-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-[0_10px_30px_rgba(239,68,68,0.3)] motion-reduce:transform-none">
                    <Icon className="h-8 w-8" />
                  </div>

                  {/* Step */}
                  <p className="relative mt-8 text-xs font-black uppercase tracking-[0.16em] text-red-400">
                    STEP {number}
                  </p>

                  {/* Title */}
                  <h3 className="relative mt-4 text-xl font-black text-white sm:text-2xl">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="relative mt-4 flex-1 leading-8 text-slate-300">
                    {description}
                  </p>

                  {/* Divider */}
                  <div className="relative mt-8 h-px bg-white/10" />

                  {/* Footer */}
                  <div className="relative mt-5 flex items-center justify-between">
                    <span className="text-xs font-bold text-red-300">
                      Royal Stone Construction
                    </span>

                    <ArrowUpRight className="h-5 w-5 text-slate-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-400 motion-reduce:transform-none" />
                  </div>

                  {/* Animated Line */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-600 to-orange-400 transition-all duration-500 group-hover:w-full" />
                </article>
              )
            )}
          </div>

          {/* Process Button */}
          <div className="mt-12 text-center">
            <Link
              href="/process"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 px-7 py-4 font-extrabold text-red-200 transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:bg-red-600 hover:text-white motion-reduce:transform-none"
            >
              Explore Our Process

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none" />
            </Link>
          </div>
        </div>
      </section>

      {/* EXISTING CTA COMPONENT */}
      <CTASection />
    </main>
  );
}
