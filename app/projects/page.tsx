
import type { Metadata } from "next";

import {
  ArrowUpRight,
  Building2,
  DraftingCompass,
  Hammer,
  Images,
  Layers3,
  PaintBucket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import PageHero from "@/components/PageHero";
import ProjectGallery from "@/components/ProjectGallery";
import CTASection from "@/components/CTASection";

import { getSiteContent } from "@/lib/site-content-server";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Projects & Gallery | Royal Stone Construction",
  description:
    "Explore Royal Stone Construction's architecture, residential, commercial, interior design and construction portfolio, including clearly labelled illustrative concepts.",
};

const portfolioCategories = [
  {
    title: "Architecture",
    description: "Thoughtful designs & planning",
    icon: DraftingCompass,
    number: "01",
  },
  {
    title: "Construction",
    description: "Planning to execution",
    icon: Hammer,
    number: "02",
  },
  {
    title: "Interior Design",
    description: "Functional & elegant spaces",
    icon: PaintBucket,
    number: "03",
  },
];

export default async function ProjectsPage() {
  // Load projects from existing Supabase content system
  const { projects } = await getSiteContent();

  const totalProjects = projects.length;

  const conceptProjects = projects.filter(
    (project) => project.status === "Concept"
  ).length;

  const otherProjects = totalProjects - conceptProjects;

  return (
    <main className="overflow-hidden bg-white">

      {/* =====================================
          PAGE HERO
      ===================================== */}

      <PageHero
        eyebrow="PROJECTS & GALLERY"
        title="Spaces with purpose. Details with care."
        text="Explore our architecture, construction and interior design portfolio. Discover thoughtfully planned spaces, design ideas and project concepts. Illustrative concepts are clearly labelled separately from project work."
      />

      {/* =====================================
          PORTFOLIO INTRO
      ===================================== */}

      <section className="relative isolate overflow-hidden bg-white py-16 sm:py-20 lg:py-24">

        {/* Background Effects */}
        <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-red-500/5 blur-[110px]" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-orange-400/5 blur-[110px]" />

        <div className="site-container relative z-10">

          {/* PREMIUM DARK PORTFOLIO PANEL */}
          <div className="group relative isolate overflow-hidden rounded-[32px] bg-[#08111f] p-6 text-white shadow-[0_25px_70px_rgba(15,23,42,0.17)] sm:p-9 lg:p-12">

            {/* Background Red Glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-red-600/20 blur-[110px]" />

            <div className="pointer-events-none absolute -bottom-32 -left-24 -z-10 h-80 w-80 rounded-full bg-orange-500/10 blur-[110px]" />

            {/* Architectural Grid */}
            <div
              className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />

            {/* Decorative Circles */}
            <div className="pointer-events-none absolute -right-24 -top-24 hidden h-[400px] w-[400px] rounded-full border border-white/10 lg:block" />

            <div className="pointer-events-none absolute -right-8 -top-8 hidden h-[250px] w-[250px] rounded-full border border-red-500/10 lg:block" />

            {/* Panel Content */}
            <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">

              {/* LEFT */}
              <div>

                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 rounded-full border border-red-500/25 bg-red-500/10 px-4 py-2.5 text-xs font-black uppercase tracking-[0.15em] text-red-300">

                  <Sparkles className="h-4 w-4" />

                  ROYAL STONE PORTFOLIO

                </div>

                {/* Heading */}
                <h2 className="mt-7 max-w-2xl text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">

                  Designing Spaces.

                  <span className="mt-1 block bg-gradient-to-r from-red-400 via-red-400 to-orange-300 bg-clip-text text-transparent">
                    Creating Possibilities.
                  </span>

                </h2>

                {/* Description */}
                <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">

                  Explore architectural ideas, construction
                  projects and interior design concepts
                  organised in one portfolio.

                  <span className="mt-3 block">
                    Browse by service category, discover
                    different design approaches and find
                    inspiration for your next project.
                  </span>

                </p>

                {/* Accent Line */}
                <div className="mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-red-600 via-red-400 to-orange-400 shadow-[0_0_20px_rgba(239,68,68,0.35)] transition-all duration-500 group-hover:w-36" />

              </div>

              {/* RIGHT STATS */}
              <div className="grid gap-4 sm:grid-cols-2">

                {/* Total Portfolio */}
                <div className="group/stat relative overflow-hidden rounded-[25px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-red-500/30 hover:bg-white/[0.10] hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)]">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/15 text-red-400 transition-all duration-300 group-hover/stat:scale-110 group-hover/stat:bg-red-600 group-hover/stat:text-white">

                    <Images className="h-6 w-6" />

                  </div>

                  <p className="mt-7 text-4xl font-black text-white">
                    {String(totalProjects).padStart(2, "0")}
                  </p>

                  <h3 className="mt-3 text-base font-black text-white">
                    Portfolio Entries
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-slate-400">
                    Items in the current gallery
                  </p>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-600 to-orange-400 transition-all duration-500 group-hover/stat:w-full" />

                </div>

                {/* Concepts */}
                <div className="group/stat relative overflow-hidden rounded-[25px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-red-500/30 hover:bg-white/[0.10] hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)]">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/15 text-red-400 transition-all duration-300 group-hover/stat:scale-110 group-hover/stat:bg-red-600 group-hover/stat:text-white">

                    <Layers3 className="h-6 w-6" />

                  </div>

                  <p className="mt-7 text-4xl font-black text-white">
                    {String(conceptProjects).padStart(2, "0")}
                  </p>

                  <h3 className="mt-3 text-base font-black text-white">
                    Design Concepts
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-slate-400">
                    Illustrative portfolio entries
                  </p>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-600 to-orange-400 transition-all duration-500 group-hover/stat:w-full" />

                </div>

                {/* Other Project Entries */}
                <div className="group/stat relative overflow-hidden rounded-[25px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-red-500/30 hover:bg-white/[0.10] hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] sm:col-span-2">

                  <div className="flex items-center gap-5">

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-500/15 text-red-400 transition-all duration-300 group-hover/stat:scale-110 group-hover/stat:bg-red-600 group-hover/stat:text-white">

                      <Building2 className="h-7 w-7" />

                    </div>

                    <div>
                      <p className="text-3xl font-black text-white">
                        {String(otherProjects).padStart(2, "0")}
                      </p>

                      <h3 className="mt-1 text-sm font-bold text-slate-200">
                        Non-Concept Project Entries
                      </h3>

                      <p className="mt-1 text-xs text-slate-400">
                        Based on current project status
                      </p>
                    </div>

                    <ArrowUpRight className="ml-auto h-5 w-5 shrink-0 text-red-400 transition-all duration-300 group-hover/stat:-translate-y-1 group-hover/stat:translate-x-1" />

                  </div>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-600 to-orange-400 transition-all duration-500 group-hover/stat:w-full" />

                </div>

              </div>

            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-red-600 via-orange-400 to-transparent" />

          </div>

          {/* =====================================
              SERVICE CATEGORY CARDS
          ===================================== */}

          <div className="mt-9 grid gap-5 md:grid-cols-3">

            {portfolioCategories.map(
              ({
                title,
                description,
                icon: Icon,
                number,
              }) => (
                <div
                  key={title}
                  className="group relative isolate flex min-w-0 items-center gap-4 overflow-hidden rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-1 hover:border-red-300 hover:shadow-[0_15px_40px_rgba(220,38,38,0.12)] sm:p-6"
                >

                  {/* Card Glow */}
                  <div className="pointer-events-none absolute -right-12 -top-12 -z-10 h-40 w-40 rounded-full bg-red-500/5 blur-[60px] transition-all duration-500 group-hover:bg-red-500/15" />

                  {/* Icon */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-red-100 bg-red-50 text-red-600 transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-[0_10px_30px_rgba(220,38,38,0.25)] motion-reduce:transform-none">

                    <Icon className="h-7 w-7" />

                  </div>

                  {/* Text */}
                  <div className="min-w-0 flex-1">

                    <p className="text-[11px] font-black uppercase tracking-[0.15em] text-red-600">
                      CATEGORY {number}
                    </p>

                    <h3 className="mt-2 text-lg font-black text-slate-950 transition-colors duration-300 group-hover:text-red-600">
                      {title}
                    </h3>

                    <p className="mt-1 text-xs leading-6 text-slate-500">
                      {description}
                    </p>

                  </div>

                  <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-600" />

                  {/* Animated Border */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-600 to-orange-400 transition-all duration-500 group-hover:w-full" />

                </div>
              )
            )}

          </div>

        </div>
      </section>

      {/* =====================================
          PROJECT GALLERY
      ===================================== */}

      <section className="relative isolate overflow-hidden bg-gradient-to-br from-slate-50 via-white to-red-50/40 py-20 sm:py-24 lg:py-28">

        {/* Architectural Background Pattern */}
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

        <div className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-orange-400/5 blur-[120px]" />

        <div className="site-container relative z-10">

          {/* Small Gallery Label */}
          <div className="mb-5 flex flex-wrap items-center justify-between gap-4">

            <div className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-white px-4 py-2.5 text-xs font-black uppercase tracking-[0.15em] text-red-600 shadow-sm">

              <Sparkles className="h-4 w-4" />

              PROJECT EXPLORER

            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">

              <ShieldCheck className="h-4 w-4 text-red-600" />

              Concepts are clearly labelled

            </div>

          </div>

          {/* Existing Dynamic Gallery */}
          <ProjectGallery projects={projects} />

        </div>

      </section>

      {/* =====================================
          FINAL CTA
      ===================================== */}

      <CTASection
        title="Let's bring your project ideas to life."
      />

    </main>
  );
}
