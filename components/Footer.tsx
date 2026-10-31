import Link from "next/link";
import Image from "next/image";
import { serviceLinks } from "@/lib/site-data";
import { businessContact } from "@/lib/business-contact";
import WhatsAppIcon from "@/components/WhatsAppIcon";

import {
  Instagram,
  Linkedin,
  Facebook,
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
  Award,
  Clock3,
  Building2,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#0b1820] text-white"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-brand-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-brand-500/10 blur-[140px]" />

      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-500/60 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8 lg:py-9">

        {/* MAIN FOOTER COLUMNS */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.7fr_0.85fr_1.35fr] lg:gap-x-7 lg:gap-y-0">

          {/* BRAND */}
          <div className="group">
            <Image
              src="/logo.png"
              alt="Royal Stone Construction logo"
              width={96}
              height={96}
              className="mb-3 h-[76px] w-[76px] rounded-full border border-brand-300 bg-white object-contain"
            />

            <h2 className="relative inline-block text-xl font-black tracking-tight text-white transition-all duration-500 group-hover:text-brand-400 sm:text-2xl">
              Royal Stone Construction
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-gradient-to-r from-brand-500 via-brand-400 to-brand-500 transition-all duration-500 group-hover:w-full" />
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
              Architecture, construction with material, interior design and
              project planning for residential and commercial spaces.
            </p>

            <Link
              href="/get-quote"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-2 text-sm font-semibold text-brand-300 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400 hover:bg-brand-500 hover:text-white hover:shadow-[0_10px_30px_rgba(212,165,75,.25)]"
            >
              Get Free Quote
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-base font-bold text-white">
              Quick Links
            </h3>

            <div className="mt-4 flex flex-col gap-2.5 text-sm">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Services", "/services"],
                ["Projects", "/projects"],
                ["Why Us", "/why-us"],
                ["Our Process", "/process"],
                ["Contact Us", "/contact"],
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="group/link relative w-fit text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-brand-500 transition-all duration-300 group-hover/link:w-full" />
                </Link>
              ))}
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-base font-bold text-white">
              Services
            </h3>

            <div className="mt-4 flex flex-col gap-2.5 text-sm text-slate-400">
              {serviceLinks.map(([service, href]) => (
                <Link
                  key={service}
                  href={href}
                  className="group/service flex items-center gap-2 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500 transition-all duration-300 group-hover/service:scale-150" />
                  <span>{service}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-base font-bold text-white">
              Contact
            </h3>

            <div className="mt-4 space-y-3.5 text-sm text-slate-400">

              {/* PATNA */}
              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-500/10">
                  <MapPin className="h-4 w-4 text-brand-500" />
                </div>

                <div className="space-y-1">
                  <h4 className="font-semibold text-white">
                    PATNA (HEAD OFFICE)
                  </h4>
                  <p>
                    House No-216, MIG, Near Malahi Pakri Chowk,
                    Kankarbagh, Patna-800020, Bihar
                  </p>
                  <p className="mt-2 text-brand-500">
                    +91 91625 31390
                  </p>
                </div>
              </div>

              {/* GAYA */}
              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-500/10">
                  <MapPin className="h-4 w-4 text-brand-500" />
                </div>

                <div className="space-y-1">
                  <h4 className="font-semibold text-white">
                    GAYA BRANCH
                  </h4>
                  <p>
                    Near Gaya College Khel Parisar, Gaya,
                    Bihar 823001, India
                  </p>
                  <p className="mt-2 text-brand-500">
                    +91 91625 31390
                  </p>
                </div>
              </div>

              {/* NOIDA */}
              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-500/10">
                  <MapPin className="h-4 w-4 text-brand-500" />
                </div>

                <div className="space-y-1">
                  <h4 className="font-semibold text-white">
                    NOIDA OFFICE
                  </h4>
                  <p>
                    H-207, H-Block, Sector-63,
                    Noida, Uttar Pradesh - 201301, India
                  </p>
                  <p className="mt-2 text-brand-500">
                    +91 77619 80518
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-500/10">
                  <Phone className="h-4 w-4 text-brand-500" />
                </div>

                <a
                  href={businessContact.phoneHref}
                  className="break-all pt-2 transition-colors hover:text-white"
                >
                  {businessContact.phoneDisplay}
                </a>
              </div>

              {/* EMAIL */}
              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-500/10">
                  <Mail className="h-4 w-4 text-brand-500" />
                </div>

                <a
                  href={`mailto:${businessContact.email}`}
                  className="break-all pt-2 transition-colors hover:text-white"
                >
                  {businessContact.email}
                </a>
              </div>
            </div>

            {/* SOCIAL MEDIA ICONS */}
            <div className="mt-4 flex flex-wrap gap-2.5">
              {[
                {
                  Icon: Instagram,
                  label: "Instagram",
                  href: businessContact.instagramHref,
                },
                {
                  Icon: Linkedin,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/company/royalstone-construction/about/?viewAsMember=true",
                },
                {
                  Icon: Facebook,
                  label: "Facebook",
                  href: "https://www.facebook.com/share/1JcLSkXanW/",
                },
              ].map(({ Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  scroll={false}
                  aria-label={label}
                  className="group/social flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:border-brand-500 hover:bg-brand-600 hover:shadow-[0_8px_25px_rgba(212,165,75,.35)]"
                >
                  <Icon className="h-4 w-4 transition-transform duration-300 group-hover/social:scale-110" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* FULL WIDTH WHY CHOOSE ROYAL STONE */}
        <section className="mt-10 border-y border-white/10 py-10 sm:py-12">

          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-500">
              Our Commitment
            </span>

            <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
              Why Choose Royal Stone?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              Building your vision with quality, trust and excellence.
              We focus on delivering complete construction solutions
              for residential and commercial spaces.
            </p>
          </div>

          {/* FEATURES */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {/* QUALITY */}
            <div className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/50 hover:bg-white/[0.06]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 transition-colors group-hover:bg-brand-500/20">
                <Award className="h-6 w-6 text-brand-500" />
              </div>

              <div>
                <h3 className="font-bold text-white">
                  Quality Work
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Focus on quality materials and professional workmanship.
                </p>
              </div>
            </div>

            {/* TIMELY DELIVERY */}
            <div className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/50 hover:bg-white/[0.06]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 transition-colors group-hover:bg-brand-500/20">
                <Clock3 className="h-6 w-6 text-brand-500" />
              </div>

              <div>
                <h3 className="font-bold text-white">
                  Timely Delivery
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Committed to efficient project execution and planning.
                </p>
              </div>
            </div>

            {/* COMPLETE SOLUTIONS */}
            <div className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/50 hover:bg-white/[0.06]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 transition-colors group-hover:bg-brand-500/20">
                <Building2 className="h-6 w-6 text-brand-500" />
              </div>

              <div>
                <h3 className="font-bold text-white">
                  Complete Solutions
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Architecture, construction and interior design.
                </p>
              </div>
            </div>

          </div>

          {/* TRUST MESSAGE */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 rounded-xl bg-gradient-to-r from-brand-500/10 via-brand-500/5 to-brand-500/10 px-5 py-7 text-center sm:flex-row sm:justify-between sm:px-8">
            <div>
              <h3 className="text-lg font-bold text-white">
                Let's Build Something Great Together!
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                Have a project in mind? Connect with our team today.
              </p>
            </div>

            <Link
              href="/get-quote"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand-500 hover:shadow-lg"
            >
              Get Free Quote
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* BOTTOM FOOTER */}
        <div className="mt-8 border-t border-white/10 pt-7">
          <div className="flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-slate-300">
                Royal Stone Construction
              </span>
              . All Rights Reserved.
            </p>

            <div className="flex gap-5">
              <Link
                href="/privacy-policy"
                scroll={false}
                className="transition-colors duration-300 hover:text-brand-400"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                scroll={false}
                className="transition-colors duration-300 hover:text-brand-400"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CALL FLOATING BUTTON - 56px */}
      <a
        href={businessContact.phoneHref}
        aria-label="Call Royal Stone Construction"
        className="group fixed bottom-[148px] right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white shadow-[0_8px_24px_rgba(0,0,0,.12)] transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-[0_12px_40px_rgba(184,134,50,.55)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-300 focus-visible:ring-offset-2"
      >
        <Phone className="h-8 w-8" />
      </a>

      {/* LINKEDIN FLOATING BUTTON - 56px */}
      <a
        href="https://www.linkedin.com/company/royalstone-construction/about/?viewAsMember=true"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Royal Stone Construction on LinkedIn"
        className="group fixed bottom-[84px] right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#0A66C2] text-white shadow-[0_8px_24px_rgba(0,0,0,.12)] transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-[0_12px_40px_rgba(10,102,194,.55)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300 focus-visible:ring-offset-2"
      >
        <Linkedin className="h-8 w-8" />
      </a>

      {/* WHATSAPP FLOATING BUTTON - 56px */}
      <a
        href={businessContact.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Royal Stone Construction on WhatsApp"
        className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(0,0,0,.12)] transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-[0_12px_40px_rgba(37,211,102,.55)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-300 focus-visible:ring-offset-2"
      >
        <WhatsAppIcon className="h-8 w-8" />
      </a>

    </footer>
  );
}