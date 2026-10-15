
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import LeadForm from "@/components/LeadForm";

export const buttonClass =
  "group/btn relative inline-flex min-h-14 items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-brand-600 via-brand-600 to-brand-700 px-8 py-4 text-base font-extrabold text-white shadow-[0_12px_35px_rgba(184,134,50,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(184,134,50,0.45)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-400/50 active:scale-[0.98] motion-reduce:transform-none";

type CTASectionProps = {
  form?: boolean;
  title?: string;
  reference?: boolean;
};

export default function CTASection({
  form = false,
  title = "Ready to bring your project to life?",
  reference = false,
}: CTASectionProps) {
  if (reference && !form) return <section className="bg-[#faf9f7] pb-12 pt-6 sm:pb-16">
    <div className="site-container">
      <div className="grid overflow-hidden rounded-lg border border-slate-200 bg-white md:grid-cols-[0.8fr_1.2fr]">
        <div className="relative min-h-64"><Image src="/construction.png" alt="Construction site illustration with a tower crane and concrete building structure" fill sizes="(max-width: 767px) 100vw, 40vw" className="object-cover" /><span className="absolute bottom-3 left-4 rounded bg-white/90 px-2 py-1 text-xs text-slate-600">Design Concept</span></div>
        <div className="p-6 sm:p-8">
          <p className="text-xs font-bold tracking-[0.18em] text-brand-600">LET&apos;S BUILD TOGETHER</p>
          <h2 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-slate-950">Plan Your Dream Project with Our Experts</h2>
          <p className="mt-3 font-semibold text-slate-800">{title}</p>
          <p className="mt-2 text-sm leading-6 text-slate-500">Your dream space deserves expert planning and professional execution. Tell us your city and project requirements. Our team can help you explore the next steps, project scope and quotation.</p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm"><span className="flex items-center gap-2"><Building2 className="h-4 w-4 text-brand-600" /><span>Expert Planning <span className="block text-xs text-slate-500">Design to execution</span></span></span><span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-brand-600" /><span>Clear Consultation <span className="block text-xs text-slate-500">Understand your options</span></span></span></div>
          <Link href="/get-quote" className="mt-5 inline-flex min-h-11 items-center gap-3 rounded-md bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700">Get Free Quote <ArrowRight className="h-4 w-4" /></Link>
          <p className="mt-3 flex items-center gap-2 text-xs text-slate-500"><CheckCircle2 className="h-4 w-4 text-emerald-600" />Start with a project enquiry</p>
        </div>
      </div>
    </div>
  </section>;
  return (
    <section className="relative isolate overflow-hidden bg-[#0b1820] py-20 text-white sm:py-24 lg:py-28">

      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-32 top-0 h-[400px] w-[400px] rounded-full bg-brand-600/15 blur-[110px]" />

        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-brand-600/10 blur-[130px]" />

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/5 blur-[140px]" />

        {/* Decorative Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />

        {/* Decorative Rings */}
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/10" />

        <div className="absolute -right-20 -top-20 h-[340px] w-[340px] rounded-full border border-brand-500/10" />

      </div>

      {/* Top Gradient Line */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-brand-500/60 to-transparent" />

      {/* Main Container */}
      <div
        className={`site-container relative z-10 grid items-center gap-12 px-5 sm:px-6 lg:gap-16 ${
          form
            ? "lg:grid-cols-[0.9fr_1.1fr]"
            : "lg:grid-cols-[1fr_auto]"
        }`}
      >

        {/* Left Content */}
        <div className="relative">

          {/* Premium Badge */}
          <div className="mb-7 inline-flex max-w-full items-center gap-2 rounded-full border border-brand-500/25 bg-brand-500/10 px-4 py-2.5 backdrop-blur-md">

            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-70" />
              <span className="relative h-2 w-2 rounded-full bg-brand-500" />
            </span>

            <Sparkles className="h-4 w-4 shrink-0 text-brand-400" />

            <span className="text-xs font-black tracking-[0.12em] text-brand-300 sm:tracking-[0.18em]">
              LET&apos;S BUILD TOGETHER
            </span>

          </div>

          {/* Heading */}
          <h2 className="max-w-3xl text-4xl font-black leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[56px]">

            {title}

          </h2>

          {/* Animated Underline */}
          <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-brand-600 via-brand-400 to-transparent shadow-[0_0_20px_rgba(212,165,75,0.4)]" />

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">

            Your dream space deserves expert planning and
            professional execution.

            <span className="mt-3 block">
              Tell us your city and project requirements.
              Our team can help you explore the next steps,
              project scope and quotation.
            </span>

          </p>

          {/* Features */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">

            <div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:bg-white/[0.08]">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400 transition-all duration-300 group-hover:bg-brand-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(212,165,75,0.4)]">
                <Building2 className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-bold text-white">
                  Expert Planning
                </p>
                <p className="text-xs text-slate-400">
                  Design to execution
                </p>
              </div>

            </div>

            <div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:bg-white/[0.08]">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400 transition-all duration-300 group-hover:bg-brand-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(212,165,75,0.4)]">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-bold text-white">
                  Clear Consultation
                </p>
                <p className="text-xs text-slate-400">
                  Understand your options
                </p>
              </div>

            </div>

          </div>

          {/* Button - visible on left when form is enabled */}
          {form && (
            <div className="mt-9">

              <Link href="/get-quote" className={buttonClass}>

                <span className="pointer-events-none absolute -left-20 top-0 h-full w-14 skew-x-[-25deg] bg-white/20 blur-sm transition-all duration-700 group-hover/btn:left-[120%]" />

                <span className="relative z-10">
                  Get Free Quote
                </span>

                <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />

              </Link>

              <p className="mt-4 flex items-center gap-2 text-sm text-slate-400">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Share your requirements with our team
              </p>

            </div>
          )}

        </div>

        {/* Right Content */}
        {form ? (

          <div className="relative flex w-full justify-center lg:justify-end">

            {/* Form Outer Glow */}
            <div className="pointer-events-none absolute -inset-5 rounded-[40px] bg-gradient-to-br from-brand-500/15 via-transparent to-brand-400/10 blur-3xl" />

            {/* Decorative Accent */}
            <div className="pointer-events-none absolute -right-3 -top-3 hidden h-28 w-28 rounded-full border border-brand-500/20 lg:block" />

            {/* Existing Form */}
            <div className="relative z-10 w-full max-w-xl">
              <LeadForm />
            </div>

          </div>

        ) : (

          <div className="flex flex-col items-start gap-4 lg:items-center">

            <Link href="/get-quote" className={buttonClass}>

              {/* Moving Shine */}
              <span className="pointer-events-none absolute -left-20 top-0 h-full w-14 skew-x-[-25deg] bg-white/20 blur-sm transition-all duration-700 group-hover/btn:left-[120%]" />

              <span className="relative z-10">
                Get Free Quote
              </span>

              <ArrowUpRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />

            </Link>

            <span className="flex items-center gap-2 text-sm text-slate-400">

              <CheckCircle2 className="h-4 w-4 text-emerald-400" />

              Start with a project enquiry

            </span>

          </div>

        )}

      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

    </section>
  );
}
