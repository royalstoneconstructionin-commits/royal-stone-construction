
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  DraftingCompass,
  Hammer,
  PaintBucket,
  MoveUpRight,
} from "lucide-react";

import LeadForm from "@/components/LeadForm";

const services = [
  {
    label: "Architecture",
    icon: DraftingCompass,
  },
  {
    label: "Construction",
    icon: Hammer,
  },
  {
    label: "Interior Design",
    icon: PaintBucket,
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate scroll-mt-20 overflow-hidden bg-gradient-to-br from-white via-[#f8fafc] to-[#fff1f2]"
    >
      {/* Background Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-red-400/15 blur-[110px]" />

      <div className="pointer-events-none absolute -right-40 top-20 h-[550px] w-[550px] rounded-full bg-orange-300/20 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-52 w-[700px] max-w-full -translate-x-1/2 rounded-full bg-red-500/10 blur-[100px]" />

      {/* Decorative Circle */}
      <div className="pointer-events-none absolute -right-44 -top-44 hidden h-[650px] w-[650px] rounded-full border border-red-500/10 lg:block" />

      <div className="pointer-events-none absolute -right-20 -top-20 hidden h-[400px] w-[400px] rounded-full border border-red-500/10 lg:block" />

      {/* Main Content */}
      <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-14 px-5 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 lg:px-8 lg:py-24">

        {/* LEFT CONTENT */}
        <div className="relative z-10">

          {/* Top Badge */}
          <div className="group/badge inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-red-200 bg-white/90 px-4 py-2.5 shadow-[0_5px_25px_rgba(220,38,38,0.07)] backdrop-blur-md transition-all duration-300 hover:border-red-400 hover:shadow-[0_8px_30px_rgba(220,38,38,0.15)]">

            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-600" />
            </span>

            <Sparkles className="h-4 w-4 text-red-600" />

            <span className="text-xs font-extrabold tracking-wide text-red-600 sm:text-sm">
              Built with planning. Finished with pride.
            </span>

          </div>

          {/* Small Heading */}
          <div className="mt-8 flex items-center gap-3">
            <span className="h-[2px] w-10 rounded-full bg-red-600" />

            <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 sm:text-sm">
              Royal Stone Construction
            </span>
          </div>

          {/* Main Title */}
          <h1 className="mt-5 max-w-3xl font-serif text-[clamp(3.15rem,6vw,6rem)] font-black leading-[1.04] tracking-[-0.045em] text-slate-950">

            <span className="block">
              From Vision
            </span>

            <span className="block">
              to
            </span>

            <span className="group/title relative inline-block cursor-default bg-gradient-to-r from-red-700 via-red-600 to-orange-500 bg-clip-text pb-2 text-transparent transition-all duration-500 hover:scale-[1.02] hover:drop-shadow-[0_0_15px_rgba(220,38,38,0.35)]">

              Structure.

              {/* Animated Underline */}
              <span className="absolute bottom-0 left-0 h-1 w-16 rounded-full bg-gradient-to-r from-red-600 to-orange-400 transition-all duration-500 group-hover/title:w-full group-hover/title:shadow-[0_0_20px_rgba(239,68,68,0.6)]" />

            </span>

          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg lg:text-xl">

            Transform your ideas into beautifully designed and
            professionally executed spaces.

            <span className="mt-3 block">
              From architecture and construction with material
              to elegant interior design, Royal Stone Construction
              helps you plan every step of your project.
            </span>

          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">

            {/* Primary CTA */}
            <Link
              href="/get-quote"
              className="group/primary relative inline-flex min-h-14 items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-red-600 to-red-700 px-7 py-4 text-base font-extrabold text-white shadow-[0_12px_35px_rgba(220,38,38,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(220,38,38,0.4)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-300 motion-reduce:transform-none"
            >

              {/* Moving Shine */}
              <span className="pointer-events-none absolute -left-20 top-0 h-full w-14 skew-x-[-25deg] bg-white/20 blur-sm transition-all duration-700 group-hover/primary:left-[120%]" />

              <span className="relative z-10">
                Start Your Project
              </span>

              <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover/primary:translate-x-1" />

            </Link>

            {/* Secondary CTA */}
            <Link
              href="/services"
              className="group/secondary inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-slate-300 bg-white/90 px-7 py-4 text-base font-extrabold text-slate-900 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-red-300 hover:bg-red-50 hover:text-red-600 hover:shadow-[0_12px_30px_rgba(220,38,38,0.1)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-200 motion-reduce:transform-none"
            >

              Explore Services

              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover/secondary:-translate-y-1 group-hover/secondary:translate-x-1" />

            </Link>

          </div>

          {/* Quick Trust Points */}
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-slate-600">

            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-red-600" />
              Project Planning
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-red-600" />
              Construction Services
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-red-600" />
              Interior Design
            </div>

          </div>

          {/* Premium Service Cards */}
          <div className="mt-10 grid grid-cols-3 gap-2 border-t border-slate-200/90 pt-7 sm:gap-4">

            {services.map(({ label, icon: Icon }) => (

              <div
                key={label}
                className="group/service relative flex min-w-0 flex-col items-center gap-2 overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 px-2 py-4 text-center shadow-[0_6px_24px_rgba(15,23,42,0.04)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:bg-white hover:shadow-[0_15px_35px_rgba(220,38,38,0.12)] sm:flex-row sm:gap-3 sm:px-4 sm:text-left"
              >

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600 transition-all duration-300 group-hover/service:scale-110 group-hover/service:bg-red-600 group-hover/service:text-white group-hover/service:shadow-[0_0_22px_rgba(220,38,38,0.3)]">

                  <Icon className="h-5 w-5" />

                </div>

                <span className="text-[11px] font-extrabold leading-4 text-slate-700 transition-colors group-hover/service:text-red-600 sm:text-sm">
                  {label}
                </span>

                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-red-600 to-orange-400 transition-all duration-500 group-hover/service:w-full" />

              </div>

            ))}

          </div>

        </div>

        {/* RIGHT SIDE - LEAD FORM */}
        <div className="relative z-10 flex w-full justify-center lg:justify-end">

          {/* Form Background Glow */}
          <div className="pointer-events-none absolute -inset-6 rounded-[45px] bg-gradient-to-br from-red-500/20 via-white/10 to-orange-400/20 blur-3xl" />

          {/* Decorative Outline */}
          <div className="pointer-events-none absolute -right-4 -top-4 hidden h-36 w-36 rounded-[35px] border border-red-500/20 lg:block" />

          <div className="pointer-events-none absolute -bottom-5 -left-5 hidden h-28 w-28 rounded-full border border-orange-400/20 lg:block" />

          {/* Form Wrapper */}
          <div className="group/form relative w-full max-w-xl">

            {/* Top Light Line */}
            <div className="pointer-events-none absolute inset-x-10 -top-px z-20 h-px bg-gradient-to-r from-transparent via-red-500/70 to-transparent" />

            {/* Form */}
            <div className="relative rounded-[34px] transition-all duration-500 hover:shadow-[0_25px_70px_rgba(220,38,38,0.13)]">
              <LeadForm />
            </div>

            {/* Floating Decoration */}
            <div className="pointer-events-none absolute -bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-slate-200 bg-white px-5 py-3 text-xs font-extrabold text-slate-700 shadow-[0_12px_35px_rgba(15,23,42,0.1)] lg:flex">

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-50 text-red-600">
                <MoveUpRight className="h-4 w-4" />
              </span>

              YOUR PROJECT STARTS HERE

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Gradient Border */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />

    </section>
  );
}
