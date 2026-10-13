
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  Layers3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import PricingPackages from "@/components/PricingPackages";
import DesignFeeCalculator from "@/components/DesignFeeCalculator";

import { services } from "@/lib/site-data";

type ServiceDetailProps = {
  service: (typeof services)[number];
};

export default function ServiceDetail({
  service,
}: ServiceDetailProps) {
  const Icon = service.icon;

  const isArchitecture = service.slug === "architecture";
  const isConstruction = service.slug === "construction";

  const processTitle = isArchitecture
    ? "Our Planning Process"
    : "Our Delivery Process";

  const quoteTitle =
    service.slug === "turnkey-projects"
      ? "Let's plan your turnkey project."
      : `Let's plan your ${service.title.toLowerCase()}.`;

  return (
    <main className="overflow-hidden bg-white">

      {/* PAGE HERO */}
      <PageHero
        eyebrow="OUR SERVICES"
        title={service.title}
        text={service.text}
      />

      {/* ===================================== */}
      {/* SCOPE OF WORK */}
      {/* ===================================== */}
      <section className="relative isolate overflow-hidden bg-white py-20 sm:py-24 lg:py-28">

        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-red-500/5 blur-[110px]" />

        <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-orange-400/5 blur-[110px]" />

        <div className="site-container relative z-10">

          {/* Heading */}
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">

            <SectionHeading
              eyebrow="SCOPE OF WORK"
              title="Details that make a difference."
              text="We shape the scope around your property, priorities and budget. Your quotation confirms the deliverables included in your project."
            />

            {/* Service Badge */}
            <div className="group flex w-fit items-center gap-3 rounded-2xl border border-red-100 bg-gradient-to-r from-red-50 to-white px-5 py-4 shadow-[0_8px_30px_rgba(220,38,38,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-red-300 hover:shadow-[0_12px_35px_rgba(220,38,38,0.12)]">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-600 text-white shadow-[0_8px_22px_rgba(220,38,38,0.2)] transition-transform duration-300 group-hover:scale-110">

                <Icon className="h-6 w-6" />

              </div>

              <div>
                <p className="text-2xl font-black text-slate-950">
                  {String(service.items.length).padStart(2, "0")}
                </p>

                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Service Areas
                </p>
              </div>

            </div>

          </div>

          {/* SCOPE CARDS */}
          <div className="mt-12 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {service.items.map((item, index) => (

              <article
                key={`${item}-${index}`}
                className="group relative isolate flex h-full min-h-[220px] min-w-0 flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_10px_35px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-red-300 hover:shadow-[0_25px_60px_rgba(220,38,38,0.13)] focus-within:border-red-300 motion-reduce:transform-none sm:p-8"
              >

                {/* Card Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 -z-10 h-56 w-56 rounded-full bg-red-500/5 blur-[75px] transition-all duration-500 group-hover:bg-red-500/15" />

                {/* Large Decorative Number */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-5 top-3 select-none text-[72px] font-black leading-none text-slate-100 transition-all duration-500 group-hover:scale-110 group-hover:text-red-50"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="relative z-10 flex items-start justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-red-100 bg-red-50 text-red-600 transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-[0_10px_30px_rgba(220,38,38,0.3)] motion-reduce:transform-none">

                    <CheckCircle2
                      className="h-7 w-7"
                      strokeWidth={1.8}
                    />

                  </div>

                </div>

                {/* Label */}
                <div className="relative z-10 mt-7 flex items-center gap-2">

                  <span className="h-1.5 w-1.5 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.4)]" />

                  <span className="text-xs font-black uppercase tracking-[0.15em] text-red-600">
                    Service Detail
                  </span>

                </div>

                {/* Scope Title */}
                <h3 className="relative z-10 mt-3 flex-1 text-xl font-black leading-snug tracking-tight text-slate-950 transition-all duration-300 group-hover:text-red-600 sm:text-2xl">

                  {item}

                </h3>

                {/* Divider */}
                <div className="relative z-10 mt-7 h-px w-full bg-gradient-to-r from-slate-200 to-transparent transition-all duration-500 group-hover:from-red-300" />

                {/* Bottom */}
                <div className="relative z-10 mt-4 flex items-center justify-between gap-3">

                  <span className="flex items-center gap-2 text-xs font-semibold text-slate-500">

                    <BadgeCheck className="h-4 w-4 shrink-0 text-red-600" />

                    Scope confirmed in quotation

                  </span>

                  <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-600 motion-reduce:transform-none" />

                </div>

                {/* Animated Bottom Border */}
                <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-700 via-red-500 to-orange-400 transition-all duration-500 group-hover:w-full" />

                {/* Light Sweep */}
                <div className="pointer-events-none absolute -left-32 top-0 h-full w-20 skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />

              </article>

            ))}

          </div>

          {/* Bottom CTA */}
          <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-[24px] border border-red-100 bg-gradient-to-r from-red-50 via-white to-orange-50 px-6 py-6 sm:flex-row sm:items-center sm:px-8">

            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-600 text-white">

                <ClipboardCheck className="h-6 w-6" />

              </div>

              <div>
                <h3 className="text-lg font-black text-slate-950">
                  Need a customized service quotation?
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Share your project requirements to discuss the
                  suitable scope of work.
                </p>
              </div>

            </div>

            <Link
              href="/get-quote"
              className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-extrabold text-white shadow-[0_8px_25px_rgba(220,38,38,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-[0_12px_35px_rgba(220,38,38,0.3)]"
            >
              Get Free Quote

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

          </div>

        </div>
      </section>

      {/* ===================================== */}
      {/* BENEFITS AND WORK PROCESS */}
      {/* ===================================== */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-slate-50 via-white to-red-50/40 py-20 sm:py-24 lg:py-28">

        {/* Decorative Pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-red-500/5 blur-[110px]" />

        <div className="site-container relative z-10 grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

          {/* BENEFITS COLUMN */}
          <div className="relative">

            <SectionHeading
              eyebrow="THE BENEFITS"
              title="Planned around your project."
              text={service.benefit}
            />

            {/* Premium Benefit Card */}
            <div className="group relative mt-10 overflow-hidden rounded-[28px] border border-white/10 bg-[#0d1728] p-7 text-white shadow-[0_20px_50px_rgba(15,23,42,0.15)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_65px_rgba(15,23,42,0.2)] sm:p-8">

              {/* Glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-red-500/15 blur-[75px]" />

              <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-orange-500/10 blur-[75px]" />

              {/* Icon */}
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10 text-red-400 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-[0_10px_30px_rgba(220,38,38,0.3)]">

                <ShieldCheck className="h-7 w-7" />

              </div>

              <h3 className="relative mt-6 text-2xl font-black">
                Project Clarity
              </h3>

              <p className="relative mt-4 leading-8 text-slate-300">
                Every project starts with understanding your
                requirements, site conditions and budget.
                The agreed quotation defines the scope,
                deliverables and applicable project milestones.
              </p>

              {/* Construction Specific */}
              {isConstruction && (
                <div className="relative mt-6 rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-md">

                  <div className="flex items-center gap-3">

                    <Layers3 className="h-5 w-5 shrink-0 text-red-400" />

                    <h4 className="font-bold text-white">
                      Construction Timeline
                    </h4>

                  </div>

                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Your project timeline is prepared after
                    reviewing the area, design, approvals,
                    site access and material availability.

                    We agree on stage milestones and communicate
                    changes as work progresses.
                  </p>

                </div>
              )}

              {/* Bottom */}
              <div className="relative mt-7 flex items-center gap-2 border-t border-white/10 pt-6 text-sm font-semibold text-red-300">

                <Sparkles className="h-4 w-4" />

                Royal Stone Construction

              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-600 to-orange-400 transition-all duration-500 group-hover:w-full" />

            </div>

          </div>

          {/* PROCESS COLUMN */}
          <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.07)] sm:p-8 lg:p-9">

            {/* Process Card Background */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-red-500/5 blur-[90px]" />

            {/* Process Header */}
            <div className="relative flex flex-wrap items-start justify-between gap-4">

              <div>

                <div className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-red-600">

                  <Sparkles className="h-3.5 w-3.5" />

                  STEP BY STEP

                </div>

                <h2 className="mt-5 max-w-md text-2xl font-black leading-tight tracking-tight text-slate-950 sm:text-3xl">

                  {processTitle}

                </h2>

                <p className="mt-3 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
                  A structured workflow from the initial
                  discussion to the final service deliverables.
                </p>

              </div>

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-600">

                <Layers3 className="h-7 w-7" />

              </div>

            </div>

            {/* Divider */}
            <div className="relative my-8 h-px bg-gradient-to-r from-slate-200 via-red-100 to-transparent" />

            {/* TIMELINE STEPS */}
            <ol className="relative space-y-5">

              {service.steps.map((step, index) => {

                const isLast =
                  index === service.steps.length - 1;

                const stepNumber = String(
                  index + 1
                ).padStart(2, "0");

                return (
                  <li
                    key={`${step}-${index}`}
                    className="group/step relative flex items-start gap-4"
                  >

                    {/* Timeline Connector */}
                    {!isLast && (
                      <span
                        aria-hidden="true"
                        className="absolute bottom-[-20px] left-[23px] top-[50px] w-px bg-gradient-to-b from-red-300 to-red-100"
                      />
                    )}

                    {/* Number */}
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-red-100 bg-red-50 text-base font-black text-red-600 transition-all duration-300 group-hover/step:scale-110 group-hover/step:border-red-600 group-hover/step:bg-red-600 group-hover/step:text-white group-hover/step:shadow-[0_8px_25px_rgba(220,38,38,0.25)] motion-reduce:transform-none">

                      {stepNumber}

                    </div>

                    {/* Step Content */}
                    <div className="relative min-w-0 flex-1 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/70 px-5 py-5 transition-all duration-300 group-hover/step:border-red-200 group-hover/step:bg-white group-hover/step:shadow-[0_10px_30px_rgba(220,38,38,0.07)]">

                      <div className="flex items-start justify-between gap-3">

                        <p className="flex-1 text-sm font-semibold leading-7 text-slate-700 transition-colors duration-300 group-hover/step:text-slate-950 sm:text-base">

                          {step}

                        </p>

                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-red-500" />

                      </div>

                      {/* Animated Border */}
                      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-red-600 to-orange-400 transition-all duration-500 group-hover/step:w-full" />

                    </div>

                  </li>
                );
              })}

            </ol>

            {/* Process Bottom */}
            <div className="relative mt-9 flex items-center gap-3 rounded-2xl border border-red-100 bg-gradient-to-r from-red-50 to-white px-5 py-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-600 text-white">

                <BadgeCheck className="h-5 w-5" />

              </div>

              <p className="text-sm font-bold leading-6 text-slate-800">
                Scope and milestones are finalized
                according to your project requirements.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* ===================================== */}
      {/* ARCHITECTURE PRICING */}
      {/* ===================================== */}
      {isArchitecture && (
        <><PricingPackages /><DesignFeeCalculator /></>
      )}

      {/* ===================================== */}
      {/* FINAL CTA + LEAD FORM */}
      {/* ===================================== */}
      <CTASection
        form
        title={quoteTitle}
      />

    </main>
  );
}
