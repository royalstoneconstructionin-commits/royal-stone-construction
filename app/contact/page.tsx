import { metadataForRoute } from "@/lib/seo";
import { businessContact } from "@/lib/business-contact";
import WhatsAppIcon from "@/components/WhatsAppIcon";

import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  Navigation,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import PageHero from "@/components/PageHero";
import LeadForm from "@/components/LeadForm";
import { getSiteContent } from "@/lib/site-content-server";

export const revalidate = 30;

export const metadata: Metadata = metadataForRoute("/contact");

const contactCards = [
  {
    number: "01",
    title: "Call Us",
    subtitle: "Speak with our team",
    text: businessContact.phoneDisplay,
    href: businessContact.phoneHref,
    button: "Call Now",
    icon: Phone,
    external: false,
  },
  {
    number: "02",
    title: "Email Us",
    subtitle: "Send your requirements",
    text: "royalstoneconstruction.in@gmail.com",
    href: "mailto:royalstoneconstruction.in@gmail.com",
    button: "Send Email",
    icon: Mail,
    external: false,
  },
  {
    number: "03",
    title: "WhatsApp",
    subtitle: "Connect with our team",
    text: businessContact.phoneDisplay,
    href: businessContact.whatsappHref,
    button: "Start Chat",
    icon: WhatsAppIcon,
    external: true,
  },
];

export default async function ContactPage() {
  const { workingHours, address, mapUrl, serviceAreas } = await getSiteContent();

  return (
    <main className="overflow-hidden bg-white">

      {/* PAGE HERO */}
      <PageHero
        eyebrow="CONTACT US"
        title="Let's talk about your space."
        text="Have a project in mind? Reach out for architecture, construction with material and interior design enquiries. Tell us what you need and let's discuss the next step."
      />

      {/* =====================================
          CONTACT CARDS
      ===================================== */}
      <section className="relative isolate overflow-hidden bg-white py-20 sm:py-24 lg:py-28">

        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-brand-500/5 blur-[110px]" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-brand-400/5 blur-[120px]" />

        <div className="site-container relative z-10">

          {/* Section Heading */}
          <div className="mx-auto max-w-3xl text-center">

            <div className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-2.5 text-xs font-black uppercase tracking-[0.16em] text-brand-600">

              <Sparkles className="h-4 w-4" />

              GET IN TOUCH

            </div>

            <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Let&apos;s Start a{" "}
              <span className="bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500 bg-clip-text text-transparent">
                Conversation.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Whether you&apos;re planning a new home, need an
              architectural design or want complete construction
              services, choose the easiest way to contact us.
            </p>

          </div>

          {/* Contact Cards */}
          <div className="mt-12 grid items-stretch gap-6 md:grid-cols-3">

            {contactCards.map(
              ({
                number,
                title,
                subtitle,
                text,
                href,
                button,
                icon: Icon,
                external,
              }) => (
                <article
                  key={title}
                  className="group relative isolate flex h-full min-w-0 flex-col overflow-hidden rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_10px_35px_rgba(11,24,32,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-brand-300 hover:shadow-[0_25px_65px_rgba(184,134,50,0.14)] motion-reduce:transform-none sm:p-8"
                >

                  {/* Background Glow */}
                  <div className="pointer-events-none absolute -right-20 -top-20 -z-10 h-60 w-60 rounded-full bg-brand-500/5 blur-[80px] transition-colors duration-500 group-hover:bg-brand-500/15" />

                  {/* Decorative Number */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-5 top-2 text-[85px] font-black leading-none text-slate-100 transition-all duration-500 group-hover:scale-110 group-hover:text-brand-50"
                  >
                    {number}
                  </span>

                  {/* Top Icons */}
                  <div className="relative z-10 flex items-start justify-between gap-4">

                    <div className={external
                      ? "flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(0,0,0,.12)] transition-transform duration-300 group-hover:scale-110 motion-reduce:transform-none"
                      : "flex h-16 w-16 items-center justify-center rounded-[20px] border border-brand-100 bg-brand-50 text-brand-600 transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 group-hover:border-brand-600 group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-[0_12px_35px_rgba(184,134,50,0.3)] motion-reduce:transform-none"}>

                      <Icon className="h-8 w-8" />

                    </div>

                    <ArrowUpRight className="h-5 w-5 text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-600" />

                  </div>

                  {/* Label */}
                  <div className="relative z-10 mt-8 flex items-center gap-2">

                    <span className="h-2 w-2 rounded-full bg-brand-600" />

                    <span className="text-xs font-black uppercase tracking-[0.15em] text-brand-600">
                      {subtitle}
                    </span>

                  </div>

                  {/* Title */}
                  <h3 className="relative z-10 mt-4 text-2xl font-black tracking-tight text-slate-950 transition-colors duration-300 group-hover:text-brand-600">
                    {title}
                  </h3>

                  {/* Contact Information */}
                  <p className="relative z-10 mt-4 flex-1 break-all text-base leading-7 text-slate-600">
                    {text}
                  </p>

                  {/* Divider */}
                  <div className="relative z-10 mt-8 h-px w-full bg-gradient-to-r from-slate-200 to-transparent transition-colors duration-300 group-hover:from-brand-300" />

                  {/* Action Button */}
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={
                      external
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group/button relative z-10 mt-6 inline-flex min-h-12 items-center justify-between gap-3 overflow-hidden rounded-2xl border border-brand-100 bg-brand-50 px-5 py-3.5 text-sm font-extrabold text-brand-600 transition-all duration-300 hover:border-brand-600 hover:bg-brand-600 hover:text-white hover:shadow-[0_10px_30px_rgba(184,134,50,0.25)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-200"
                  >

                    <span className="relative z-10">
                      {button}
                    </span>

                    <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover/button:translate-x-1" />

                    {/* Light Sweep */}
                    <span className="pointer-events-none absolute -left-20 top-0 h-full w-14 skew-x-[-25deg] bg-white/20 transition-all duration-700 group-hover/button:left-[120%]" />

                  </a>

                  {/* Animated Bottom Border */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-brand-700 via-brand-500 to-brand-400 transition-all duration-500 group-hover:w-full" />

                </article>
              )
            )}

          </div>

        </div>
      </section>

      {/* =====================================
          CONTACT DETAILS + LEAD FORM
      ===================================== */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-slate-50 via-white to-brand-50/40 py-20 sm:py-24 lg:py-28">

        {/* Background Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-brand-500/5 blur-[110px]" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-brand-400/10 blur-[120px]" />

        <div className="site-container relative z-10">

          {/* Section Header */}
          <div className="mb-12 max-w-3xl">

            <div className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-2.5 text-xs font-black uppercase tracking-[0.16em] text-brand-600">

              <Building2 className="h-4 w-4" />

              CONTACT & CONSULTATION

            </div>

            <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Your Next Project{" "}
              <span className="text-brand-600">
                Starts Here.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Share your project ideas, preferred location
              and service requirements. Our team can help
              you plan the next steps.
            </p>

          </div>

          {/* Two Column Layout */}
          <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">

            {/* LEFT DETAILS */}
            <div className="space-y-7">

              {/* Dark Contact Panel */}
              <div className="group relative isolate overflow-hidden rounded-[32px] bg-[#0b1820] p-7 text-white shadow-[0_20px_60px_rgba(11,24,32,0.15)] sm:p-9">

                {/* Background Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 -z-10 h-72 w-72 rounded-full bg-brand-600/20 blur-[90px]" />

                <div className="pointer-events-none absolute -bottom-28 -left-20 -z-10 h-64 w-64 rounded-full bg-brand-500/10 blur-[100px]" />

                {/* Heading */}
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-2 text-xs font-black tracking-[0.15em] text-brand-300">

                  <Sparkles className="h-4 w-4" />

                  VISIT & CONNECT

                </div>

                <h3 className="mt-6 text-2xl font-black leading-tight sm:text-3xl">
                  Visit or arrange a{" "}
                  <span className="text-brand-400">
                    consultation.
                  </span>
                </h3>

                <p className="mt-4 leading-8 text-slate-300">
                  Contact our team to discuss your requirements
                  and arrange a suitable consultation.
                </p>

                {/* Location */}
                <div className="mt-9 flex items-start gap-4 border-t border-white/10 pt-7">

                  <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl border border-brand-500/20 bg-brand-500/10 p-3 text-brand-400 transition-all duration-300 group-hover:border-brand-500/40">
                    <MapPin className="h-6 w-6" />
                  </div>

                  <div>
                    <h4 className="text-lg font-black text-white">
                      Our Location
                    </h4>

                    <p className="mt-2 text-sm leading-7 text-slate-300 sm:text-base">
                      {address?.trim() || "Contact us to arrange a consultation"}
                    </p>

                    {!address?.trim() && <p className="mt-2 text-xs leading-6 text-slate-400">
                      Please contact us for the exact
                      meeting address.
                    </p>}
                  </div>

                </div>

                {/* Working Hours */}
                {workingHours.trim() && <div className="mt-7 flex items-start gap-4 border-t border-white/10 pt-7">

                  <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl border border-brand-500/20 bg-brand-500/10 p-3 text-brand-400">
                    <Clock3 className="h-6 w-6" />
                  </div>

                  <div className="min-w-0">
                    <h4 className="text-lg font-black text-white">
                      Working Hours
                    </h4>

                    <p className="mt-2 whitespace-pre-line text-sm leading-7 text-slate-300 sm:text-base">
                      {workingHours?.trim() ||
                        "Please contact us to confirm consultation availability."}
                    </p>
                  </div>

                </div>}
                {serviceAreas?.trim() && <p className="mt-7 whitespace-pre-line text-sm leading-7 text-slate-300">Confirmed service areas: {serviceAreas}</p>}

                {/* Footer Line */}
                <div className="mt-8 flex items-center gap-2 border-t border-white/10 pt-6 text-sm font-semibold text-brand-300">

                  <CheckCircle2 className="h-4 w-4 shrink-0" />

                  Royal Stone Construction

                </div>

                {/* Bottom Glow Line */}
                <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-brand-600 via-brand-400 to-transparent" />

              </div>

              {mapUrl?.trim() && <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3"><Navigation className="h-6 w-6 text-brand-600" /><h3 className="text-lg font-black text-slate-950">Consultation directions</h3></div>
                <p className="mt-3 text-sm leading-7 text-slate-600">Contact us to arrange a consultation before visiting.</p>
                <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-2 font-semibold text-brand-600 underline">Open verified map <ArrowUpRight className="h-4 w-4" /></a>
              </div>}

            </div>

            {/* =====================================
                RIGHT SIDE LEAD FORM
            ===================================== */}
            <div className="relative lg:sticky lg:top-28">

              {/* Background Glow */}
              <div className="pointer-events-none absolute -inset-5 rounded-[45px] bg-gradient-to-br from-brand-500/15 via-transparent to-brand-400/15 blur-3xl" />

              {/* Decoration */}
              <div className="pointer-events-none absolute -right-4 -top-4 hidden h-36 w-36 rounded-[35px] border border-brand-500/20 lg:block" />

              <div className="pointer-events-none absolute -bottom-5 -left-5 hidden h-28 w-28 rounded-full border border-brand-400/20 lg:block" />

              {/* Form Wrapper */}
              <div className="relative mx-auto w-full max-w-xl">

                {/* Top Label */}
                <div className="mb-5 flex items-center justify-center gap-2">

                  <span className="h-px w-8 bg-brand-300" />

                  <span className="text-xs font-black uppercase tracking-[0.15em] text-brand-600">
                    REQUEST A CONSULTATION
                  </span>

                  <span className="h-px w-8 bg-brand-300" />

                </div>

                {/* Existing Supabase Form */}
                <div className="relative rounded-[34px] transition-all duration-500 hover:shadow-[0_25px_70px_rgba(184,134,50,0.12)]">
                  <LeadForm />
                </div>

                {/* Trust Note */}
                <div className="mt-6 flex items-start justify-center gap-3 rounded-2xl border border-slate-200 bg-white/90 px-5 py-4 shadow-sm">

                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />

                  <p className="text-xs leading-6 text-slate-600">
                    Your enquiry will be shared with
                    Royal Stone Construction for
                    consultation and follow-up.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================
          FINAL CONTACT CTA
      ===================================== */}
      <section className="relative overflow-hidden bg-[#0b1820] py-16 text-white sm:py-20">

        {/* Background Lights */}
        <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand-600/15 blur-[100px]" />

        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-brand-500/10 blur-[110px]" />

        <div className="site-container relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

          <div className="max-w-2xl">

            <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/10 px-4 py-2 text-xs font-black tracking-[0.14em] text-brand-300">

              <Sparkles className="h-4 w-4" />

              LET&apos;S BUILD TOGETHER

            </div>

            <h2 className="mt-6 text-3xl font-black leading-tight sm:text-4xl">
              Have a project in mind?
              <span className="mt-1 block text-brand-400">
                Let&apos;s discuss your plans.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
              From architectural design to complete construction
              and interior finishing, start with a clear
              discussion about your requirements.
            </p>

          </div>

          <Link
            href="/get-quote"
            className="group relative inline-flex min-h-14 shrink-0 items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-brand-600 to-brand-700 px-7 py-4 font-extrabold text-white shadow-[0_12px_35px_rgba(184,134,50,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(184,134,50,0.4)]"
          >

            <span className="pointer-events-none absolute -left-20 top-0 h-full w-14 skew-x-[-25deg] bg-white/20 transition-all duration-700 group-hover:left-[120%]" />

            <span className="relative z-10">
              Get Free Quote
            </span>

            <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />

          </Link>

        </div>

      </section>

    </main>
  );
}
