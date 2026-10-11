
import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  HardHat,
  HeartHandshake,
  Layers3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import PageHero from "@/components/PageHero";
import CTASection, {
  buttonClass,
} from "@/components/CTASection";

import { reasons } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description:
    "Discover Royal Stone Construction's approach to quality materials, transparent pricing, project supervision and complete project management.",
};

const reasonIcons = [
  ShieldCheck,
  ClipboardCheck,
  HardHat,
  HeartHandshake,
  Building2,
  BadgeCheck,
];

const commitments = [
  {
    number: "01",
    title: "Understand",
    text: "We begin by listening to your requirements, priorities, site details and project expectations.",
    icon: HeartHandshake,
  },
  {
    number: "02",
    title: "Plan",
    text: "We discuss scope, materials, responsibilities and the steps needed before execution begins.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Coordinate",
    text: "We connect design decisions, project activities and communication throughout the agreed workflow.",
    icon: Layers3,
  },
];

export default function WhyUsPage() {
  return (
    <main className="overflow-hidden bg-white">

      {/* =====================================
          PAGE HERO
      ===================================== */}

      <PageHero
        eyebrow="WHY ROYAL STONE"
        title="Professional execution from concept to completion."
        text="A well-built project starts with a clear plan and a team that keeps the details connected. Discover the principles behind our approach to your work."
      />

      {/* =====================================
          INTRODUCTION SECTION
      ===================================== */}

      <section className="relative isolate overflow-hidden bg-white py-16 sm:py-20 lg:py-24">

        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-red-500/5 blur-[110px]" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-orange-400/5 blur-[120px]" />

        <div className="site-container relative z-10">

          {/* Dark Premium Panel */}
          <div className="group relative isolate overflow-hidden rounded-[32px] bg-[#08111f] p-7 text-white shadow-[0_25px_70px_rgba(15,23,42,0.18)] sm:p-10 lg:p-14">

            {/* Background Lighting */}
            <div className="pointer-events-none absolute -right-28 -top-28 -z-10 h-96 w-96 rounded-full bg-red-600/20 blur-[110px]" />

            <div className="pointer-events-none absolute -bottom-32 -left-24 -z-10 h-80 w-80 rounded-full bg-orange-500/10 blur-[110px]" />

            {/* Architectural Grid */}
            <div
              className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                backgroundSize: "52px 52px",
              }}
            />

            {/* Decorative Rings */}
            <div className="pointer-events-none absolute -right-36 -top-36 hidden h-[450px] w-[450px] rounded-full border border-white/10 lg:block" />

            <div className="pointer-events-none absolute -right-20 -top-20 hidden h-[300px] w-[300px] rounded-full border border-red-500/20 lg:block" />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">

              {/* LEFT CONTENT */}
              <div>

                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-xs font-black uppercase tracking-[0.15em] text-red-300">

                  <Sparkles className="h-4 w-4" />

                  THE ROYAL STONE DIFFERENCE

                </div>

                {/* Title */}
                <h2 className="mt-7 max-w-2xl text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">

                  More Than Construction.

                  <span className="mt-2 block bg-gradient-to-r from-red-400 via-red-400 to-orange-300 bg-clip-text text-transparent">
                    A Thoughtful Approach.
                  </span>

                </h2>

                {/* Description */}
                <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                  At Royal Stone Construction, we believe
                  a successful project begins with clear
                  communication and practical planning.

                  <span className="mt-4 block">
                    We bring architecture, construction
                    with material and interior design into
                    a coordinated process focused on your
                    requirements.
                  </span>
                </p>

                {/* Decorative Line */}
                <div className="mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-red-600 via-red-400 to-orange-400 shadow-[0_0_20px_rgba(239,68,68,0.35)] transition-all duration-500 group-hover:w-40" />

                {/* CTA */}
                <Link
                  href="/get-quote"
                  className="group/btn mt-9 inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 px-7 py-4 font-extrabold text-white shadow-[0_12px_35px_rgba(220,38,38,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(220,38,38,0.4)] motion-reduce:transform-none"
                >

                  Discuss Your Project

                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />

                </Link>

              </div>

              {/* RIGHT CONTENT */}
              <div className="grid gap-4">

                {[
                  {
                    title: "Thoughtful Planning",
                    text: "Requirements before execution",
                    icon: ClipboardCheck,
                  },
                  {
                    title: "Quality-Focused Approach",
                    text: "Attention to project specifications",
                    icon: ShieldCheck,
                  },
                  {
                    title: "Connected Workflow",
                    text: "Architecture to finishing",
                    icon: Layers3,
                  },
                ].map(({ title, text, icon: Icon }) => (
                  <div
                    key={title}
                    className="group/item relative flex items-center gap-5 overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-x-1 hover:border-red-500/40 hover:bg-white/[0.10] hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] motion-reduce:transform-none"
                  >

                    {/* Icon */}
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[20px] border border-red-500/20 bg-red-500/10 text-red-400 transition-all duration-300 group-hover/item:scale-110 group-hover/item:bg-red-600 group-hover/item:text-white group-hover/item:shadow-[0_10px_30px_rgba(239,68,68,0.3)] motion-reduce:transform-none">

                      <Icon className="h-8 w-8" />

                    </div>

                    {/* Text */}
                    <div className="min-w-0 flex-1">

                      <h3 className="text-base font-black text-white sm:text-lg">
                        {title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {text}
                      </p>

                    </div>

                    <CheckCircle2 className="h-5 w-5 shrink-0 text-red-400" />

                    {/* Bottom Border */}
                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-600 to-orange-400 transition-all duration-500 group-hover/item:w-full" />

                  </div>
                ))}

              </div>

            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-red-600 via-orange-400 to-transparent" />

          </div>

        </div>
      </section>

      {/* =====================================
          WHY CHOOSE US - REASONS
      ===================================== */}

      <section className="relative isolate overflow-hidden bg-gradient-to-br from-slate-50 via-white to-red-50/40 py-20 sm:py-24 lg:py-28">

        {/* Background Pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-red-500/5 blur-[110px]" />

        <div className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-orange-400/10 blur-[120px]" />

        <div className="site-container relative z-10">

          {/* HEADER */}
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

            <div className="max-w-3xl">

              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-white px-4 py-2.5 text-xs font-black uppercase tracking-[0.15em] text-red-600 shadow-sm">

                <Sparkles className="h-4 w-4" />

                WHY CHOOSE US

              </div>

              {/* Heading */}
              <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">

                The Values Behind{" "}

                <span className="bg-gradient-to-r from-red-700 via-red-600 to-orange-500 bg-clip-text text-transparent">
                  Every Project.
                </span>

              </h2>

              {/* Description */}
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Discover the working principles that guide
                our approach to construction, architectural
                planning and project coordination.
              </p>

            </div>

            {/* Header Badge */}
            <div className="flex w-fit items-center gap-4 rounded-[22px] border border-red-100 bg-white px-5 py-4 shadow-[0_10px_35px_rgba(220,38,38,0.07)]">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                <ShieldCheck className="h-7 w-7" />
              </div>

              <div>
                <p className="text-sm font-black text-slate-950">
                  Our Commitments
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Planning with purpose
                </p>
              </div>

            </div>

          </div>

          {/* =====================================
              DYNAMIC REASONS GRID
          ===================================== */}

          <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">

            {reasons.map(([title, text], index) => {
              const Icon =
                reasonIcons[index % reasonIcons.length];

              return (
                <article
                  key={`${title}-${index}`}
                  className="group relative isolate flex h-full min-w-0 flex-col overflow-hidden rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_10px_35px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-red-300 hover:shadow-[0_25px_65px_rgba(220,38,38,0.13)] motion-reduce:transform-none sm:p-8"
                >

                  {/* Background Glow */}
                  <div className="pointer-events-none absolute -right-20 -top-20 -z-10 h-60 w-60 rounded-full bg-red-500/5 blur-[80px] transition-all duration-500 group-hover:bg-red-500/15" />

                  {/* Decorative Number */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-5 top-3 text-[85px] font-black leading-none text-slate-100 transition-all duration-500 group-hover:scale-110 group-hover:text-red-50"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Top Row */}
                  <div className="relative z-10 flex items-start justify-between gap-4">

                    {/* Animated Icon */}
                    <div className="flex h-16 w-16 items-center justify-center rounded-[20px] border border-red-100 bg-gradient-to-br from-red-50 to-white text-red-600 transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-[0_12px_35px_rgba(220,38,38,0.3)] motion-reduce:transform-none">

                      <Icon className="h-8 w-8" />

                    </div>

                    {/* Arrow */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-400 transition-all duration-300 group-hover:border-red-200 group-hover:bg-red-50 group-hover:text-red-600">

                      <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transform-none" />

                    </div>

                  </div>

                  {/* Small Label */}
                  <div className="relative z-10 mt-8 flex items-center gap-2">

                    <span className="h-2 w-2 rounded-full bg-red-600 shadow-[0_0_12px_rgba(220,38,38,0.4)]" />

                    <span className="text-xs font-black uppercase tracking-[0.16em] text-red-600">
                      OUR ADVANTAGE
                    </span>

                  </div>

                  {/* Title */}
                  <h3 className="relative z-10 mt-5 text-xl font-black leading-snug tracking-tight text-slate-950 transition-colors duration-300 group-hover:text-red-600 sm:text-2xl">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="relative z-10 mt-5 flex-1 text-base leading-8 text-slate-600">
                    {text}
                  </p>

                  {/* Divider */}
                  <div className="relative z-10 mt-8 h-px w-full bg-gradient-to-r from-slate-200 to-transparent transition-colors duration-300 group-hover:from-red-300" />

                  {/* Bottom Row */}
                  <div className="relative z-10 mt-5 flex items-center justify-between gap-3">

                    <span className="flex items-center gap-2 text-xs font-bold text-slate-500">

                      <CheckCircle2 className="h-4 w-4 text-red-600" />

                      Royal Stone Construction

                    </span>

                    <ArrowUpRight className="h-5 w-5 text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-600 motion-reduce:transform-none" />

                  </div>

                  {/* Animated Bottom Border */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-700 via-red-500 to-orange-400 transition-all duration-500 group-hover:w-full" />

                  {/* Light Sweep */}
                  <div className="pointer-events-none absolute -left-32 top-0 h-full w-20 skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />

                </article>
              );
            })}

          </div>

          {/* PROCESS CTA */}
          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-[28px] border border-red-100 bg-gradient-to-r from-red-50 via-white to-orange-50 p-6 sm:flex-row sm:items-center sm:p-8">

            <div className="flex items-start gap-4">

              {/* Icon */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-600 text-white shadow-[0_10px_30px_rgba(220,38,38,0.25)]">

                <ClipboardCheck className="h-7 w-7" />

              </div>

              {/* Text */}
              <div>

                <h3 className="text-xl font-black text-slate-950">
                  Explore Our Construction Process
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-7 text-slate-600">
                  Understand how we approach consultation,
                  planning, site coordination and project
                  handover.
                </p>

              </div>

            </div>

            {/* Button */}
            <Link
              href="/process"
              className={`${buttonClass} group inline-flex shrink-0 items-center gap-3`}
            >

              Explore Our Process

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />

            </Link>

          </div>

        </div>
      </section>

      {/* =====================================
          OUR COMMITMENT SECTION
      ===================================== */}

      <section className="relative isolate overflow-hidden bg-[#08111f] py-20 text-white sm:py-24 lg:py-28">

        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-red-600/15 blur-[120px]" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-orange-500/10 blur-[130px]" />

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

          {/* Section Header */}
          <div className="mx-auto max-w-3xl text-center">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/25 bg-red-500/10 px-4 py-2.5 text-xs font-black uppercase tracking-[0.15em] text-red-300">

              <Sparkles className="h-4 w-4" />

              OUR COMMITMENT

            </div>

            {/* Title */}
            <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">

              Your Vision Matters.

              <span className="mt-2 block text-red-400">
                Every Step Counts.
              </span>

            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              From understanding your requirements
              to discussing project milestones, we
              focus on an organised and collaborative
              construction journey.
            </p>

          </div>

          {/* COMMITMENT CARDS */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {commitments.map(
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

                  {/* Step Label */}
                  <div className="relative mt-8 flex items-center gap-2">

                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />

                    <span className="text-xs font-black uppercase tracking-[0.15em] text-red-400">
                      OUR APPROACH {number}
                    </span>

                  </div>

                  {/* Title */}
                  <h3 className="relative mt-4 text-2xl font-black text-white">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="relative mt-4 flex-1 leading-8 text-slate-300">
                    {text}
                  </p>

                  {/* Footer */}
                  <div className="relative mt-8 h-px bg-white/10" />

                  <div className="relative mt-5 flex items-center justify-between">

                    <span className="text-xs font-bold text-red-300">
                      Royal Stone Construction
                    </span>

                    <ArrowUpRight className="h-5 w-5 text-slate-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-400 motion-reduce:transform-none" />

                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-600 to-orange-400 transition-all duration-500 group-hover:w-full" />

                </article>
              )
            )}

          </div>

          {/* Bottom Message */}
          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-[26px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl sm:flex-row sm:items-center sm:p-8">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-600 text-white shadow-[0_10px_30px_rgba(239,68,68,0.25)]">

                <ShieldCheck className="h-7 w-7" />

              </div>

              <div>

                <h3 className="text-lg font-black text-white sm:text-xl">
                  Ready to Discuss Your Project?
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-400">
                  Let's start with your ideas, requirements
                  and project expectations.
                </p>

              </div>

            </div>

            <Link
              href="/get-quote"
              className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-2xl bg-red-600 px-6 py-3 font-extrabold text-white shadow-[0_10px_30px_rgba(220,38,38,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-[0_15px_40px_rgba(220,38,38,0.35)]"
            >

              Get Free Quote

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />

            </Link>

          </div>

        </div>
      </section>

      {/* =====================================
          FINAL CTA
      ===================================== */}

      <CTASection />

    </main>
  );
}
