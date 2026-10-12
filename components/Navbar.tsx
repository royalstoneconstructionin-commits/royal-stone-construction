"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { serviceLinks } from "@/lib/site-data";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Projects", "/projects"],
  ["Why Us", "/why-us"],
  ["Contact", "/contact"],
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const pathname = usePathname();
  const active = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/85 backdrop-blur-xl shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" onClick={() => setOpen(false)} className="group flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_8px_25px_rgba(220,38,38,0.18)]">
            <Image
              src="/royal-stone-logo.png"
              alt="Royal Stone Construction"
              fill
              sizes="48px"
              className="object-contain p-1"
              priority
            />
          </div>

          <div>
            <p className="text-base font-black tracking-tight text-slate-950 transition-all duration-300 group-hover:text-red-600 group-hover:[text-shadow:0_0_16px_rgba(220,38,38,.22)] sm:text-lg">
              Royal Stone
            </p>

            <p className="text-[10px] font-black tracking-[0.24em] text-red-600 sm:text-xs">
              CONSTRUCTION
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Main navigation" className="hidden items-center gap-5 lg:flex xl:gap-8">
          {links.map(([label, href]) => (
            label === "Services" ? <div key={label} className="relative flex items-center" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setDropdown(false); }} onKeyDown={(event) => { if (event.key === "Escape") setDropdown(false); }}>
              <Link href={href} aria-current={pathname === href ? "page" : undefined} className={`py-2 text-sm font-bold transition hover:text-red-600 ${active(href) ? "text-red-600" : "text-slate-700"}`}>Services</Link>
              <button type="button" aria-label="Show service pages" aria-expanded={dropdown} aria-controls="services-dropdown" onClick={() => setDropdown(value => !value)} className="ml-1 rounded-lg p-1 text-slate-700 hover:bg-red-50 hover:text-red-600"><ChevronDown className={`h-4 w-4 transition ${dropdown ? "rotate-180" : ""}`} /></button>
              <div id="services-dropdown" hidden={!dropdown} className="absolute left-0 top-full w-72 pt-3"><div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">{serviceLinks.map(([name, route]) => <Link key={route} href={route} onClick={() => setDropdown(false)} className="block rounded-xl px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-red-50 hover:text-red-600" aria-current={pathname === route ? "page" : undefined}>{name}</Link>)}</div></div>
            </div> :
            <Link
              key={label}
              href={href}
              aria-current={active(href) ? "page" : undefined}
              className={`group relative py-2 text-sm font-bold transition-colors duration-300 hover:text-red-600 ${active(href) ? "text-red-600" : "text-slate-700"}`}
            >
              {label}

              <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-red-600 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          <Link
            href="/get-quote"
            className="group relative flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-5 py-3 text-sm font-extrabold text-white shadow-[0_10px_30px_rgba(220,38,38,.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_35px_rgba(220,38,38,.35)]"
          >
            <span className="absolute -left-16 top-0 h-full w-10 skew-x-[-25deg] bg-white/20 transition-all duration-700 group-hover:left-[120%]" />

            <span className="relative">Get Free Quote</span>

            <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm transition-all duration-300 hover:border-red-200 hover:bg-red-50 hover:text-red-600 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          <span
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-navigation"
        inert={!open}
        className={`overflow-hidden border-t border-slate-200/70 bg-white/95 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          open
            ? "max-h-[85vh] overflow-y-auto opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="px-5 py-5 sm:px-6">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
            {links.map(([label, href], index) => (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between rounded-xl px-4 py-3 font-bold text-slate-800 transition-all duration-300 hover:translate-x-1 hover:bg-red-50 hover:text-red-600"
                style={{
                  transitionDelay: open ? `${index * 50}ms` : "0ms",
                }}
              >
                <span>{label}</span>

                <ArrowRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
              </Link>
            ))}

            <div className="ml-4 border-l-2 border-red-100 pl-3">{serviceLinks.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-2 text-sm font-bold text-slate-600 hover:bg-red-50 hover:text-red-600">{label}</Link>)}</div>

            <Link
              href="/get-quote"
              onClick={() => setOpen(false)}
              className="group mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-5 py-3.5 font-extrabold text-white shadow-[0_10px_25px_rgba(220,38,38,.25)] transition-all duration-300 hover:shadow-[0_14px_35px_rgba(220,38,38,.35)]"
            >
              Get Free Quote

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </nav>
        </div>
      </div>

      {/* Bottom Glow Line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
    </header>
  );
}
