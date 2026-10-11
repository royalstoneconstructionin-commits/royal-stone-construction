"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["Home", "#home"],
  ["Services", "#services"],
  ["Why Us", "#why-us"],
  ["Contact", "#contact"],
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-white">
            <Image src="/royal-stone-logo.png" alt="Royal Stone Construction" fill className="object-contain" priority />
          </div>
          <div>
            <p className="text-base font-black tracking-tight text-slate-950">Royal Stone</p>
            <p className="text-xs font-bold tracking-[0.2em] text-red-600">CONSTRUCTION</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map(([label, href]) => (
            <Link key={label} href={href} className="text-sm font-semibold text-slate-700 transition hover:text-red-600">
              {label}
            </Link>
          ))}
          <Link href="#lead-form" className="rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-700">
            Get Free Quote
          </Link>
        </nav>

        <button onClick={() => setOpen((v) => !v)} className="rounded-lg p-2 text-slate-900 lg:hidden" aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map(([label, href]) => (
              <Link key={label} href={href} onClick={() => setOpen(false)} className="font-semibold text-slate-800">
                {label}
              </Link>
            ))}
            <Link href="#lead-form" onClick={() => setOpen(false)} className="rounded-xl bg-red-600 px-5 py-3 text-center font-bold text-white">
              Get Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
