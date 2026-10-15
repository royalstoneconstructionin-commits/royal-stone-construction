import { metadataForRoute } from "@/lib/seo";

import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardList,
  FileText,
  Hammer,
  Headphones,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import PageHero from "@/components/PageHero";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = metadataForRoute("/get-quote");

const processSteps = [
  {
    number: "01",
    title: "Share Your Requirements",
    description:
      "Fill out the enquiry form with your name, contact number, city and project requirements.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Project Consultation",
    description:
      "Our team will contact you to understand your site, design preferences, priorities and budget.",
    icon: Headphones,
  },
  {
    number: "03",
    title: "Planning & Quotation",
    description:
      "We discuss the next steps, possible project scope and the information required for a detailed quotation.",
    icon: FileText,
  },
];

const services = [
  { label: "Architecture", icon: Building2 },
  { label: "Construction", icon: Hammer },
  { label: "Interior Design", icon: Sparkles },
];

export default function QuotePage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* PAGE HERO */}
      <PageHero
        eyebrow="GET FREE QUOTE"
        title="Your next project starts here."
        text="Share your requirements with Royal Stone Construction. From architecture and construction to interior design, let's discuss your project and explore the next steps."
      />

      {/* MAIN QUOTE SECTION */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-white via-slate-50 to-brand-50/40 py-20 sm:py-24 lg:py-28">
        {/* Background Pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Background Glows */}
        <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-brand-500/10 blur-[110px]" />
        <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-brand-400/10 blur-[120px]" />

        <div className="site-container relative z-10">
          {/* SECTION INTRO */}
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-2.5 text-xs font-black uppercase tracking-[0.16em] text-brand-600">
              <Sparkles className="h-4 w-4" />
              START YOUR PROJECT
            </div>

            <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Let&apos;s Build Something{" "}
              <span className="bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500 bg-clip-text text-transparent">
                Extraordinary.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Every project starts with a conversation.
              Tell us what you&apos;re planning, and we&apos;ll help
              you understand the next steps.
            </p>
          </div>

          {/* MAIN TWO COLUMN LAYOUT */}
          <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
            {/* LEFT SIDE */}
            <div className="space-y-8">
              {/* DARK INTRO CARD */}
              <div className="group relative isolate overflow-hidden rounded-[32px] bg-[#0b1820] p-7 text-white shadow-[0_20px_60px_rgba(11,24,32,0.15)] sm:p-9">
                {/* Background Lighting */}
                <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-brand-600/20 blur-[90px]" />
                <div className="pointer-events-none absolute -bottom-28 -left-20 -z-10 h-64 w-64 rounded-full bg-brand-500/10 blur-[100px]" />

                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-2.5 text-xs font-black tracking-[0.14em] text-brand-300">
                  <ShieldCheck className="h-4 w-4" />
                  PROJECT CONSULTATION
                </div>

                {/* Heading */}
                <h3 className="mt-7 text-3xl font-black leading-tight tracking-tight sm:text-4xl">
                  Tell Us Your Vision.
                  <span className="mt-1 block text-brand-400">
                    We&apos;ll Discuss the Plan.
                  </span>
                </h3>

                <p className="mt-6 max-w-lg text-base leading-8 text-slate-300">
                  Whether you need a house map, complete
                  construction with material or a beautiful
                  interior, begin by sharing your ideas
                  and requirements.
                </p>

                {/* Service Highlights */}
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {services.map(({ label, icon: Icon }) => (
                    <div
                      key={label}
                      className="group/service flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:bg-brand-500/10 motion-reduce:transform-none"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400 transition-all duration-300 group-hover/service:bg-brand-600 group-hover/service:text-white group-hover/service:shadow-[0_0_25px_rgba(212,165,75,0.3)]">
                        <Icon className="h-5 w-5" />
                      </div>

                      <span className="text-xs font-bold leading-5 text-slate-200">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400">
                    <BadgeCheck className="h-5 w-5" />
                  </div>

                  <p className="text-sm font-semibold text-slate-300">
                    Royal Stone Construction
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-brand-600 via-brand-400 to-transparent" />
              </div>

              {/* WHAT HAPPENS NEXT */}
              <div className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(11,24,32,0.06)] sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                    <ClipboardList className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-black tracking-tight text-slate-950">
                      What Happens Next?
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      Our consultation process
                    </p>
                  </div>
                </div>

                {/* Process Timeline */}
                <ol className="mt-8 space-y-5">
                  {processSteps.map(
                    (
                      {
                        number,
                        title,
                        description,
                        icon: Icon,
                      },
                      index
                    ) => (
                      <li
                        key={number}
                        className="group/step relative flex items-start gap-4"
                      >
                        {/* Connecting Line */}
                        {index !== processSteps.length - 1 && (
                          <div className="absolute bottom-[-20px] left-6 top-12 w-px bg-gradient-to-b from-brand-300 to-brand-100" />
                        )}

                        {/* Step Number */}
                        <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-brand-100 bg-brand-50 text-sm font-black text-brand-600 transition-all duration-300 group-hover/step:scale-110 group-hover/step:border-brand-600 group-hover/step:bg-brand-600 group-hover/step:text-white group-hover/step:shadow-[0_8px_25px_rgba(184,134,50,0.25)] motion-reduce:transform-none">
                          {number}
                        </div>

                        {/* Step Card */}
                        <div className="relative min-w-0 flex-1 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/60 p-5 transition-all duration-300 group-hover/step:border-brand-200 group-hover/step:bg-white group-hover/step:shadow-[0_10px_30px_rgba(184,134,50,0.07)]">
                          <div className="flex items-start justify-between gap-3">
                            <h4 className="text-base font-black text-slate-950 sm:text-lg">
                              {title}
                            </h4>

                            <Icon className="h-5 w-5 shrink-0 text-brand-500" />
                          </div>

                          <p className="mt-3 text-sm leading-7 text-slate-600">
                            {description}
                          </p>

                          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-brand-600 to-brand-400 transition-all duration-500 group-hover/step:w-full" />
                        </div>
                      </li>
                    )
                  )}
                </ol>
              </div>

              {/* INFORMATION NOTE */}
              <div className="flex items-start gap-4 rounded-[24px] border border-brand-100 bg-brand-50/80 px-5 py-5 sm:px-6">
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-brand-600" />

                <div>
                  <h4 className="text-base font-black text-slate-900">
                    No Obligation to Proceed
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Your quotation depends on project size,
                    location, design, material specifications
                    and scope. Submitting an enquiry does not
                    commit you to starting a project.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - LEAD FORM */}
            <div className="relative lg:sticky lg:top-28">
              {/* Form Glow */}
              <div className="pointer-events-none absolute -inset-5 rounded-[45px] bg-gradient-to-br from-brand-500/15 via-transparent to-brand-400/15 blur-3xl" />

              {/* Decorative Outlines */}
              <div className="pointer-events-none absolute -right-4 -top-4 hidden h-36 w-36 rounded-[35px] border border-brand-500/20 lg:block" />
              <div className="pointer-events-none absolute -bottom-5 -left-5 hidden h-28 w-28 rounded-full border border-brand-400/20 lg:block" />

              {/* Form Badge */}
              <div className="relative mb-6 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-brand-300" />

                <span className="text-center text-xs font-black uppercase tracking-[0.15em] text-brand-600">
                  REQUEST YOUR FREE QUOTE
                </span>

                <span className="h-px w-8 bg-brand-300" />
              </div>

              {/* FORM WRAPPER */}
              <div className="relative mx-auto w-full max-w-xl">
                <div className="relative rounded-[34px] transition-all duration-500 hover:shadow-[0_25px_70px_rgba(184,134,50,0.12)]">
                  <LeadForm />
                </div>
              </div>

              {/* Form Trust Note */}
              <div className="relative mx-auto mt-6 flex max-w-xl items-start gap-3 rounded-2xl border border-slate-200 bg-white/90 px-5 py-4 shadow-sm">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />

                <p className="text-xs leading-6 text-slate-600">
                  Your submitted enquiry will be shared
                  with Royal Stone Construction for
                  consultation and follow-up.
                </p>
              </div>

              {/* Bottom Assistance */}
              <div className="relative mx-auto mt-6 max-w-xl rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-50 text-green-600">
                    <MessageCircle className="h-6 w-6" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-black text-slate-950">
                      Prefer to Talk Directly?
                    </h4>

                    <p className="mt-1 text-xs text-slate-500">
                      Contact our team using the contact page.
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    aria-label="Go to contact page"
                    className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-all duration-300 hover:bg-brand-600 hover:text-white"
                  >
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="relative overflow-hidden bg-[#0b1820] py-14 text-white sm:py-16">
        <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand-600/15 blur-[100px]" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-brand-500/10 blur-[110px]" />

        <div className="site-container relative z-10 flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em] text-brand-400">
              <Sparkles className="h-4 w-4" />
              ROYAL STONE CONSTRUCTION
            </div>

            <h2 className="mt-4 text-2xl font-black sm:text-3xl">
              Need More Information?
            </h2>

            <p className="mt-3 max-w-xl leading-7 text-slate-300">
              Explore our services and find the right
              starting point for your project.
            </p>
          </div>

          <Link
            href="/services"
            className="group relative inline-flex min-h-14 shrink-0 items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-brand-600 to-brand-700 px-7 py-4 font-extrabold text-white shadow-[0_12px_35px_rgba(184,134,50,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(184,134,50,0.35)]"
          >
            <span className="pointer-events-none absolute -left-20 top-0 h-full w-14 skew-x-[-25deg] bg-white/20 transition-all duration-700 group-hover:left-[120%]" />

            <span className="relative z-10">
              Explore Services
            </span>

            <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}
