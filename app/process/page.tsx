import { metadataForRoute } from "@/lib/seo";

import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  DraftingCompass,
  Layers3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import PageHero from "@/components/PageHero";
import ProcessTimeline from "@/components/ProcessTimeline";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = metadataForRoute("/process");

const highlights = [
  {
    number: "01",
    title: "Clear Project Planning",
    text: "We begin by understanding your requirements, project goals, site conditions and budget before defining the next steps.",
    icon: DraftingCompass,
  },
  {
    number: "02",
    title: "Coordinated Execution",
    text: "Architecture, construction and finishing activities are planned around the agreed project scope and milestones.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Quality & Communication",
    text: "Project reviews, agreed specifications and regular communication help keep the workflow organised.",
    icon: ShieldCheck,
  },
];

export default function ProcessPage() {
  return (
    <main className="overflow-hidden bg-white">

      {/* PAGE HERO */}
      <PageHero
        eyebrow="OUR PROCESS"
        title="A clear path from idea to handover."
        text="Each stage connects your requirements with the work on site. The final sequence, deliverables and milestones are agreed around your project scope."
      />

      {/* MAIN PROCESS SECTION */}
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

        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-orange-400/10 blur-[120px]" />

        {/* Decorative Rings */}
        <div className="pointer-events-none absolute -right-40 -top-40 hidden h-[500px] w-[500px] rounded-full border border-red-500/10 lg:block" />

        <div className="site-container relative z-10">

          {/* Section Header */}
          <div className="mx-auto max-w-3xl text-center">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-white px-5 py-2.5 text-xs font-black uppercase tracking-[0.16em] text-red-600 shadow-sm">

              <span className="relative flex h-2 w-2">
                <span className="absolute h-full w-full animate-ping rounded-full bg-red-400 opacity-60 motion-reduce:animate-none" />
                <span className="relative h-2 w-2 rounded-full bg-red-600" />
              </span>

              <Sparkles className="h-4 w-4" />

              HOW WE WORK

            </div>

            {/* Title */}
            <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">

              From Planning to{" "}

              <span className="group/title relative inline-block bg-gradient-to-r from-red-700 via-red-600 to-orange-500 bg-clip-text text-transparent transition-all duration-500 hover:drop-shadow-[0_0_15px_rgba(220,38,38,0.3)]">

                Completion.

                <span className="absolute -bottom-2 left-0 h-1 w-0 rounded-full bg-gradient-to-r from-red-600 to-orange-400 transition-all duration-500 group-hover/title:w-full" />

              </span>

            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Our structured workflow helps connect your
              project requirements, planning, execution
              and final delivery.

              Every stage is discussed according to your
              project needs.
            </p>

            {/* Decorative Line */}
            <div className="mx-auto mt-7 h-1 w-24 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-orange-400 shadow-[0_0_20px_rgba(220,38,38,0.3)]" />

          </div>

          {/* PROCESS TIMELINE WRAPPER */}
          <div className="relative mt-14">

            {/* Outer Light */}
            <div className="pointer-events-none absolute -inset-5 rounded-[40px] bg-gradient-to-br from-red-500/5 via-transparent to-orange-400/5 blur-3xl" />

            {/* Actual Timeline */}
            <div className="relative rounded-[32px] border border-slate-200/80 bg-white/70 p-4 shadow-[0_20px_65px_rgba(15,23,42,0.05)] backdrop-blur-md sm:p-7 lg:p-10">

              {/* Timeline Header */}
              <div className="flex flex-col justify-between gap-5 border-b border-slate-200 pb-7 sm:flex-row sm:items-center">

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-red-700 text-white shadow-[0_10px_30px_rgba(220,38,38,0.25)]">

                    <ClipboardCheck className="h-7 w-7" />

                  </div>

                  <div>
                    <h3 className="text-xl font-black text-slate-950 sm:text-2xl">
                      Our Project Workflow
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Step-by-step construction process
                    </p>
                  </div>

                </div>

                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2.5 text-xs font-extrabold text-red-600">

                  <BadgeCheck className="h-4 w-4" />

                  Structured Workflow

                </span>

              </div>

              {/* Existing ProcessTimeline */}
              <ProcessTimeline />

            </div>

          </div>

          {/* Bottom Process Note */}
          <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-[26px] border border-red-100 bg-gradient-to-r from-red-50 via-white to-orange-50 p-6 sm:flex-row sm:items-center sm:p-8">

            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-600 text-white shadow-[0_10px_25px_rgba(220,38,38,0.2)]">

                <CheckCircle2 className="h-6 w-6" />

              </div>

              <div>
                <h3 className="text-lg font-black text-slate-950">
                  Every Project Is Different
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-7 text-slate-600">
                  Project timelines, deliverables and milestones
                  depend on site conditions, approvals, material
                  availability and the agreed scope of work.
                </p>
              </div>

            </div>

            <Link
              href="/get-quote"
              className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-2xl bg-red-600 px-6 py-3 font-extrabold text-white shadow-[0_10px_30px_rgba(220,38,38,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-[0_15px_40px_rgba(220,38,38,0.35)]"
            >
              Start Your Project

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

          </div>

        </div>
      </section>

      {/* WHY OUR PROCESS */}
      <section className="relative isolate overflow-hidden bg-[#08111f] py-20 text-white sm:py-24 lg:py-28">

        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-red-600/15 blur-[120px]" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-orange-500/10 blur-[130px]" />

        {/* Grid Pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />

        <div className="site-container relative z-10">

          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">

            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/25 bg-red-500/10 px-4 py-2.5 text-xs font-black uppercase tracking-[0.15em] text-red-300">

              <Sparkles className="h-4 w-4" />

              THE ROYAL STONE APPROACH

            </div>

            <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">

              Built on Planning.

              <span className="mt-1 block text-red-400">
                Driven by Quality.
              </span>

            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              A thoughtful workflow helps bring clarity
              to project decisions, coordination and
              execution.
            </p>

          </div>

          {/* Highlight Cards */}
          <div className="mt-14 grid items-stretch gap-6 md:grid-cols-3">

            {highlights.map(
              ({
                number,
                title,
                text,
                icon: Icon,
              }) => (
                <article
                  key={number}
                  className="group relative isolate flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.05] p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-red-500/40 hover:bg-white/[0.08] hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] motion-reduce:transform-none sm:p-8"
                >

                  {/* Decorative Number */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-5 top-3 text-[80px] font-black leading-none text-white/[0.04] transition-all duration-500 group-hover:text-red-500/[0.08]"
                  >
                    {number}
                  </span>

                  {/* Icon */}
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-[20px] border border-red-500/20 bg-red-500/10 text-red-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-[0_10px_30px_rgba(239,68,68,0.3)] motion-reduce:transform-none">

                    <Icon className="h-8 w-8" />

                  </div>

                  {/* Number Label */}
                  <div className="relative mt-8 flex items-center gap-2">

                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />

                    <span className="text-xs font-black uppercase tracking-[0.15em] text-red-400">
                      OUR APPROACH {number}
                    </span>

                  </div>

                  {/* Title */}
                  <h3 className="relative mt-4 text-xl font-black leading-snug text-white sm:text-2xl">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="relative mt-4 flex-1 leading-8 text-slate-300">
                    {text}
                  </p>

                  {/* Bottom Divider */}
                  <div className="relative mt-8 h-px bg-white/10" />

                  <div className="relative mt-5 flex items-center justify-between">

                    <span className="text-xs font-bold text-red-300">
                      Royal Stone Construction
                    </span>

                    <ArrowUpRight className="h-5 w-5 text-slate-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-400" />

                  </div>

                  {/* Animated Bottom Border */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-600 to-orange-400 transition-all duration-500 group-hover:w-full" />

                </article>
              )
            )}

          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <CTASection
        title="Let's talk about your first step."
      />

    </main>
  );
}
