import { metadataForRoute } from "@/lib/seo";

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
  Eye,
  Hammer,
  HeartHandshake,
  Layers3,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";

import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection, {
  buttonClass,
} from "@/components/CTASection";

export const metadata: Metadata = metadataForRoute("/about");

const missionVision = [
  {
    number: "01",
    eyebrow: "OUR PURPOSE",
    title: "Our Mission",
    icon: Target,
    text: "To make planning and construction easier to navigate through clear project scope, coordinated teamwork, transparent communication and thoughtful execution.",
  },
  {
    number: "02",
    eyebrow: "OUR FUTURE",
    title: "Our Vision",
    icon: Eye,
    text: "To create residential and commercial spaces that combine everyday functionality, lasting quality and a considered sense of architectural design.",
  },
];

const values = [
  {
    number: "01",
    title: "Quality Commitment",
    text: "Agreed material specifications, coordinated drawings and inspection checkpoints guide our approach to construction quality.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Client-Focused Approach",
    text: "We listen to your priorities, explain options and keep you involved in the decisions that shape your space.",
    icon: HeartHandshake,
  },
  {
    number: "03",
    title: "Planning & Expertise",
    text: "Architectural planning, site coordination, structural detailing and interior execution work together in one process.",
    icon: BadgeCheck,
  },
  {
    number: "04",
    title: "Thoughtful Design",
    text: "We focus on practical layouts, appropriate materials and spaces designed around everyday needs.",
    icon: Lightbulb,
  },
  {
    number: "05",
    title: "Transparent Communication",
    text: "Clear discussions about requirements, quotations and project milestones help everyone stay aligned.",
    icon: ClipboardCheck,
  },
  {
    number: "06",
    title: "Coordinated Execution",
    text: "A connected workflow helps bring architectural design, construction planning and finishing together.",
    icon: Building2,
  },
];

const workStages = [
  {
    number: "01",
    title: "Consultation",
    text: "Understanding your ideas, requirements and project goals.",
    icon: HeartHandshake,
  },
  {
    number: "02",
    title: "Planning",
    text: "Reviewing designs, requirements, budgets and scope.",
    icon: DraftingCompass,
  },
  {
    number: "03",
    title: "Execution",
    text: "Coordinating the agreed work and project stages.",
    icon: Hammer,
  },
  {
    number: "04",
    title: "Delivery",
    text: "Reviewing deliverables and preparing project handover.",
    icon: CheckCircle2,
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white">

      {/* =====================================
          ABOUT PAGE HERO
      ===================================== */}
      <PageHero
        eyebrow="ABOUT ROYAL STONE"
        title="Built with planning. Finished with pride."
        text="Royal Stone Construction brings architecture, construction with material and interior design into one coordinated workflow for residential and commercial spaces."
      />

      {/* =====================================
          WHO WE ARE
      ===================================== */}
      <section className="relative isolate overflow-hidden bg-white py-20 sm:py-24 lg:py-28">

        {/* Background Light */}
        <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-brand-500/5 blur-[110px]" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-brand-400/5 blur-[120px]" />

        <div className="site-container relative z-10 grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">

          {/* LEFT CONTENT */}
          <div className="relative">

            <SectionHeading
              eyebrow="WHO WE ARE"
              title="One team. A shared vision."
              text="Based in Patna, Bihar, we help clients move from an initial idea to an organised project."
            />

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              At Royal Stone Construction, we connect
              thoughtful architectural design with practical
              site execution.

              <span className="mt-4 block">
                From house planning and construction with
                material to interior design, our approach
                focuses on understanding your requirements
                and coordinating the work needed to bring
                your project to life.
              </span>
            </p>

            {/* Highlights */}
            <div className="mt-8 space-y-4">

              {[
                "Architecture & Space Planning",
                "Construction With Material",
                "Interior Design & Finishing",
              ].map((item) => (
                <div
                  key={item}
                  className="group flex items-center gap-3"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-[0_8px_25px_rgba(184,134,50,0.25)]">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>

                  <span className="font-bold text-slate-700 transition-colors duration-300 group-hover:text-brand-600">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            {/* CTA */}
            <Link
              href="/services"
              className={`${buttonClass} mt-9`}
            >
              Explore Our Services

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Link>

          </div>

          {/* RIGHT MISSION VISION */}
          <div className="grid gap-6">

            {missionVision.map(
              ({
                number,
                eyebrow,
                title,
                text,
                icon: Icon,
              }) => (
                <article
                  key={title}
                  className="group relative isolate overflow-hidden rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(11,24,32,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-brand-300 hover:shadow-[0_25px_65px_rgba(184,134,50,0.13)] motion-reduce:transform-none sm:p-8"
                >

                  {/* Glow */}
                  <div className="pointer-events-none absolute -right-20 -top-20 -z-10 h-60 w-60 rounded-full bg-brand-500/5 blur-[80px] transition-all duration-500 group-hover:bg-brand-500/15" />

                  {/* Decorative Number */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-5 top-2 text-[100px] font-black leading-none text-slate-100 transition-all duration-500 group-hover:scale-110 group-hover:text-brand-50"
                  >
                    {number}
                  </span>

                  {/* Icon */}
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-[20px] border border-brand-100 bg-brand-50 text-brand-600 transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 group-hover:border-brand-600 group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-[0_12px_35px_rgba(184,134,50,0.3)] motion-reduce:transform-none">
                    <Icon className="h-8 w-8" />
                  </div>

                  {/* Eyebrow */}
                  <div className="relative z-10 mt-7 flex items-center gap-2">

                    <span className="h-2 w-2 rounded-full bg-brand-600" />

                    <span className="text-xs font-black tracking-[0.16em] text-brand-600">
                      {eyebrow}
                    </span>

                  </div>

                  {/* Title */}
                  <h3 className="relative z-10 mt-4 text-2xl font-black tracking-tight text-slate-950 transition-all duration-300 group-hover:text-brand-600 sm:text-3xl">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="relative z-10 mt-4 max-w-lg leading-8 text-slate-600">
                    {text}
                  </p>

                  {/* Animated Line */}
                  <div className="relative z-10 mt-7 h-1 w-14 rounded-full bg-gradient-to-r from-brand-600 to-brand-400 transition-all duration-500 group-hover:w-28" />

                  {/* Bottom Border */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-brand-700 via-brand-500 to-brand-400 transition-all duration-500 group-hover:w-full" />

                </article>
              )
            )}

          </div>

        </div>
      </section>

      {/* =====================================
          OUR VALUES
      ===================================== */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-slate-50 via-white to-brand-50/40 py-20 sm:py-24 lg:py-28">

        {/* Background Pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-brand-500/10 blur-[120px]" />

        <div className="site-container relative z-10">

          {/* Header */}
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">

            <SectionHeading
              eyebrow="OUR VALUES"
              title="Care in every decision."
              text="We believe successful spaces begin with thoughtful planning, clear communication and a coordinated approach to project execution."
            />

            {/* Decorative Badge */}
            <div className="flex w-fit items-center gap-3 rounded-2xl border border-brand-100 bg-white px-5 py-4 shadow-sm">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <ShieldCheck className="h-6 w-6" />
              </div>

              <div>
                <p className="font-black text-slate-950">
                  Our Principles
                </p>

                <p className="text-xs text-slate-500">
                  Planning with purpose
                </p>
              </div>

            </div>

          </div>

          {/* VALUES GRID */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {values.map(
              ({
                number,
                title,
                text,
                icon: Icon,
              }) => (
                <article
                  key={title}
                  className="group relative isolate flex h-full min-w-0 flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_10px_35px_rgba(11,24,32,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-brand-300 hover:shadow-[0_25px_60px_rgba(184,134,50,0.12)] motion-reduce:transform-none"
                >

                  {/* Glow */}
                  <div className="pointer-events-none absolute -right-20 -top-20 -z-10 h-56 w-56 rounded-full bg-brand-500/5 blur-[80px] transition-colors duration-500 group-hover:bg-brand-500/15" />

                  {/* Top Row */}
                  <div className="flex items-start justify-between gap-4">

                    <div className="flex h-16 w-16 items-center justify-center rounded-[20px] border border-brand-100 bg-brand-50 text-brand-600 transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 group-hover:border-brand-600 group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-[0_10px_30px_rgba(184,134,50,0.3)] motion-reduce:transform-none">

                      <Icon className="h-8 w-8" />

                    </div>

                    <span className="text-sm font-black text-slate-300">
                      {number}
                    </span>

                  </div>

                  {/* Small Label */}
                  <div className="mt-8 flex items-center gap-2">

                    <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />

                    <span className="text-xs font-black uppercase tracking-[0.15em] text-brand-600">
                      CORE VALUE
                    </span>

                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-xl font-black leading-snug tracking-tight text-slate-950 transition-colors duration-300 group-hover:text-brand-600 sm:text-2xl">
                    {title}
                  </h3>

                  {/* Text */}
                  <p className="mt-4 flex-1 leading-7 text-slate-600">
                    {text}
                  </p>

                  {/* Divider */}
                  <div className="mt-8 h-px w-full bg-gradient-to-r from-slate-200 to-transparent transition-colors duration-300 group-hover:from-brand-300" />

                  {/* Bottom Icon */}
                  <div className="mt-4 flex items-center justify-between">

                    <span className="flex items-center gap-2 text-xs font-bold text-slate-500">
                      <CheckCircle2 className="h-4 w-4 text-brand-500" />
                      Royal Stone
                    </span>

                    <ArrowUpRight className="h-5 w-5 text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-600 motion-reduce:transform-none" />

                  </div>

                  {/* Animated Bottom Border */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-brand-600 to-brand-400 transition-all duration-500 group-hover:w-full" />

                </article>
              )
            )}

          </div>

          {/* Values CTA */}
          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-[26px] border border-brand-100 bg-gradient-to-r from-brand-50 via-white to-brand-50 p-6 sm:flex-row sm:items-center sm:p-8">

            <div className="flex items-start gap-4">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-[0_10px_25px_rgba(184,134,50,0.2)]">
                <Sparkles className="h-7 w-7" />
              </div>

              <div>
                <h3 className="text-lg font-black text-slate-950 sm:text-xl">
                  Why Choose Royal Stone Construction?
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-7 text-slate-600">
                  Explore how our approach brings design,
                  planning and execution together.
                </p>
              </div>

            </div>

            <Link
              href="/why-us"
              className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-2xl bg-brand-600 px-6 py-3 font-extrabold text-white shadow-[0_8px_25px_rgba(184,134,50,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-brand-700 hover:shadow-[0_12px_35px_rgba(184,134,50,0.3)]"
            >
              Why Royal Stone

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

          </div>

        </div>
      </section>

      {/* =====================================
          OUR APPROACH - DARK SECTION
      ===================================== */}
      <section className="relative isolate overflow-hidden bg-[#0b1820] py-20 text-white sm:py-24 lg:py-28">

        {/* Background Lighting */}
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand-600/15 blur-[120px]" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-brand-500/10 blur-[130px]" />

        {/* Background Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />

        <div className="site-container relative z-10">

          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">

            <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-2.5 text-xs font-black uppercase tracking-[0.16em] text-brand-300">

              <Sparkles className="h-4 w-4" />

              OUR APPROACH

            </div>

            <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              From the first idea to
              <span className="block text-brand-400">
                the final detail.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Our approach connects consultation, planning,
              execution and project delivery through a
              structured workflow.
            </p>

          </div>

          {/* PROCESS GRID */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {workStages.map(
              ({
                number,
                title,
                text,
                icon: Icon,
              }) => (
                <article
                  key={title}
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.05] p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-brand-500/40 hover:bg-white/[0.08] hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] motion-reduce:transform-none"
                >

                  {/* Decorative Number */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-4 top-2 text-[76px] font-black leading-none text-white/[0.04]"
                  >
                    {number}
                  </span>

                  {/* Icon */}
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-500/20 bg-brand-500/10 text-brand-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-[0_10px_30px_rgba(212,165,75,0.3)] motion-reduce:transform-none">

                    <Icon className="h-7 w-7" />

                  </div>

                  {/* Step */}
                  <p className="relative mt-8 text-xs font-black tracking-[0.16em] text-brand-400">
                    STEP {number}
                  </p>

                  {/* Title */}
                  <h3 className="relative mt-3 text-xl font-black text-white sm:text-2xl">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="relative mt-4 leading-7 text-slate-300">
                    {text}
                  </p>

                  {/* Bottom */}
                  <div className="relative mt-7 h-px bg-white/10" />

                  <div className="relative mt-4 flex items-center justify-between">

                    <Layers3 className="h-4 w-4 text-brand-400" />

                    <ArrowUpRight className="h-4 w-4 text-slate-500 transition-colors duration-300 group-hover:text-brand-400" />

                  </div>

                  {/* Animated Bottom Border */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-brand-600 to-brand-400 transition-all duration-500 group-hover:w-full" />

                </article>
              )
            )}

          </div>

          {/* Process CTA */}
          <div className="mt-12 text-center">

            <Link
              href="/process"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-brand-500/30 bg-brand-600/10 px-7 font-extrabold text-brand-200 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500 hover:bg-brand-600 hover:text-white"
            >
              Explore Our Process

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

          </div>

        </div>

      </section>

      {/* =====================================
          FINAL CTA
      ===================================== */}
      <CTASection
        title="Start your project with a clear plan."
      />

    </main>
  );
}
