
import Link from "next/link";
import { serviceLinks } from "@/lib/site-data";
import { businessContact } from "@/lib/business-contact";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#08111f] text-white"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-red-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-orange-500/10 blur-[140px]" />

      {/* Subtle top line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-red-500/60 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="group">
            <h2
              className="
                relative inline-block
                text-2xl font-black tracking-tight
                text-white
                transition-all duration-500
                group-hover:text-red-400
                group-hover:[text-shadow:0_0_8px_rgba(239,68,68,.9),0_0_20px_rgba(239,68,68,.55),0_0_35px_rgba(239,68,68,.35)]
                sm:text-3xl
              "
            >
              Royal Stone Construction

              <span
                className="
                  absolute -bottom-2 left-0 h-[2px] w-0
                  bg-gradient-to-r from-red-500 via-orange-400 to-red-500
                  transition-all duration-500
                  group-hover:w-full
                "
              />
            </h2>

            <p className="mt-7 max-w-sm leading-7 text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
              Architecture, construction with material, interior design and
              project planning for residential and commercial spaces.
            </p>

            <Link
              href="/get-quote"
              className="
                mt-6 inline-flex items-center gap-2
                rounded-full border border-red-500/30
                bg-red-500/10 px-5 py-2.5
                text-sm font-semibold text-red-300
                transition-all duration-300
                hover:-translate-y-1
                hover:border-red-400
                hover:bg-red-500
                hover:text-white
                hover:shadow-[0_10px_30px_rgba(239,68,68,.25)]
              "
            >
              Get Free Quote
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white">Quick Links</h3>

            <div className="mt-6 flex flex-col gap-4">
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
                  className="
                    group/link relative w-fit
                    text-slate-400
                    transition-all duration-300
                    hover:translate-x-1
                    hover:text-white
                  "
                >
                  {label}

                  <span
                    className="
                      absolute -bottom-1 left-0 h-px w-0
                      bg-red-500
                      transition-all duration-300
                      group-hover/link:w-full
                    "
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white">Services</h3>

            <div className="mt-6 flex flex-col gap-4 text-slate-400">
              {serviceLinks.map(([service, href]) => (
                <Link
                  key={service}
                  href={href}
                  className="
                    group/service flex cursor-default items-center gap-2
                    transition-all duration-300
                    hover:translate-x-1
                    hover:text-white
                  "
                >
                  <span
                    className="
                      h-1.5 w-1.5 rounded-full bg-red-500
                      transition-all duration-300
                      group-hover/service:scale-150
                      group-hover/service:shadow-[0_0_12px_rgba(239,68,68,.9)]
                    "
                  />

                  <span>{service}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white">Contact</h3>

            <div className="mt-6 space-y-5 text-slate-400">
              <div className="group/contact flex gap-3">
                <div
                  className="
                    flex h-10 w-10 shrink-0 items-center justify-center
                    rounded-xl bg-red-500/10
                    transition-all duration-300
                    group-hover/contact:bg-red-500
                    group-hover/contact:shadow-[0_0_25px_rgba(239,68,68,.35)]
                  "
                >
                  <MapPin className="h-5 w-5 text-red-500 transition-colors group-hover/contact:text-white" />
                </div>

                <span className="pt-2 transition-colors group-hover/contact:text-white">
                  Patna, Bihar, India
                </span>
              </div>

              <div className="group/contact flex gap-3">
                <div
                  className="
                    flex h-10 w-10 shrink-0 items-center justify-center
                    rounded-xl bg-red-500/10
                    transition-all duration-300
                    group-hover/contact:bg-red-500
                    group-hover/contact:shadow-[0_0_25px_rgba(239,68,68,.35)]
                  "
                >
                  <Phone className="h-5 w-5 text-red-500 transition-colors group-hover/contact:text-white" />
                </div>

                <a
                  href={businessContact.phoneHref}
                  className="pt-2 transition-colors hover:text-white"
                >
                  {businessContact.phoneDisplay}
                </a>
              </div>

              <div className="group/contact flex gap-3">
                <div
                  className="
                    flex h-10 w-10 shrink-0 items-center justify-center
                    rounded-xl bg-red-500/10
                    transition-all duration-300
                    group-hover/contact:bg-red-500
                    group-hover/contact:shadow-[0_0_25px_rgba(239,68,68,.35)]
                  "
                >
                  <Mail className="h-5 w-5 text-red-500 transition-colors group-hover/contact:text-white" />
                </div>

                <a
                  href="mailto:royalstoneconstruction.in@gmail.com"
                  className="break-all pt-2 transition-colors hover:text-white"
                >
                  royalstoneconstruction.in@gmail.com
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-7 flex flex-wrap gap-3">
              {[
                { Icon: Facebook, label: "Facebook", href: "#" },
                { Icon: Instagram, label: "Instagram", href: "#" },
                { Icon: Youtube, label: "YouTube", href: "#" },
                {
                  Icon: Linkedin,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/company/royalstone-construction/about/?viewAsMember=true",
                },
              ].map(({ Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noopener noreferrer" : undefined}
                  scroll={false}
                  aria-label={label}
                  className="
                    group/social flex h-11 w-11 items-center justify-center
                    rounded-full border border-white/10
                    bg-white/5
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:scale-110
                    hover:border-red-500
                    hover:bg-red-600
                    hover:shadow-[0_8px_25px_rgba(239,68,68,.35)]
                  "
                >
                  <Icon
                    className="
                      h-5 w-5
                      transition-transform duration-300
                      group-hover/social:scale-110
                    "
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-7">
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
                href="#"
                scroll={false}
                className="transition-colors duration-300 hover:text-red-400"
              >
                Privacy Policy
              </Link>

              <Link
                href="#"
                scroll={false}
                className="transition-colors duration-300 hover:text-red-400"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Call Floating Button */}
      <a
        href={businessContact.phoneHref}
        aria-label="Call Royal Stone Construction"
        className="
          group fixed bottom-[172px] right-5 z-50
          flex h-16 w-16 items-center justify-center
          rounded-full bg-red-600 text-white
          shadow-[0_8px_24px_rgba(0,0,0,.12)]
          transition-all duration-300
          hover:-translate-y-1 hover:scale-110
          hover:shadow-[0_12px_40px_rgba(220,38,38,.55)]
          focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-300 focus-visible:ring-offset-2
          motion-reduce:transform-none motion-reduce:transition-none
        "
      >
        <Phone className="h-8 w-8" />
      </a>

      {/* LinkedIn Floating Button */}
      <a
        href="https://www.linkedin.com/company/royalstone-construction/about/?viewAsMember=true"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Royal Stone Construction on LinkedIn"
        className="
          group fixed bottom-[96px] right-5 z-50
          flex h-16 w-16 items-center justify-center
          rounded-full bg-[#0A66C2] text-white
          shadow-[0_8px_24px_rgba(0,0,0,.12)]
          transition-all duration-300
          hover:-translate-y-1 hover:scale-110
          hover:shadow-[0_12px_40px_rgba(10,102,194,.55)]
          focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300 focus-visible:ring-offset-2
          motion-reduce:transform-none motion-reduce:transition-none
        "
      >
        <Linkedin className="h-8 w-8" />
      </a>

      {/* WhatsApp Floating Button */}
      <a
        href={businessContact.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Royal Stone Construction on WhatsApp"
        className="
          group fixed bottom-5 right-5 z-50
          flex h-16 w-16 items-center justify-center
          rounded-full bg-[#25D366]
          text-white
          shadow-[0_8px_24px_rgba(0,0,0,.12)]
          transition-all duration-300
          hover:-translate-y-1
          hover:scale-110
          hover:shadow-[0_12px_40px_rgba(37,211,102,.55)]
          focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-300 focus-visible:ring-offset-2
          motion-reduce:transform-none motion-reduce:transition-none
        "
      >
        <WhatsAppIcon className="h-8 w-8" />
      </a>
    </footer>
  );
}
