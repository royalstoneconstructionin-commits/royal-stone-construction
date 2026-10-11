
"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Clock3,
  DraftingCompass,
  HardHat,
  House,
  Images,
  LayoutGrid,
  Paintbrush,
  RotateCcw,
  Search,
  SlidersHorizontal,
  Sparkles,
  X,
} from "lucide-react";

import type { Project } from "@/lib/content";
import ProjectCard from "@/components/ProjectCard";

const categories = [
  { label: "All", icon: LayoutGrid },
  { label: "Residential Projects", icon: House },
  { label: "Commercial Projects", icon: Building2 },
  { label: "Architecture", icon: DraftingCompass },
  { label: "Interior Design", icon: Paintbrush },
  { label: "Construction", icon: HardHat },
  { label: "Completed Projects", icon: BadgeCheck },
  { label: "Ongoing Projects", icon: Clock3 },
] as const;

type ProjectGalleryProps = {
  projects: Project[];
};

export default function ProjectGallery({
  projects,
}: ProjectGalleryProps) {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  // Match existing project data
  const matchesCategory = (
    project: Project,
    selected: string
  ) =>
    selected === "All" ||
    project.category === selected ||
    project.type === selected ||
    project.status === selected;

  // Category counts
  const categoryCounts = useMemo(() => {
    return categories.map((item) => ({
      label: item.label,
      count: projects.filter((project) =>
        matchesCategory(project, item.label)
      ).length,
    }));
  }, [projects]);

  // Filter + search
  const visible = useMemo(() => {
    const query = search.trim().toLowerCase();

    return projects.filter((project) => {
      const categoryMatch = matchesCategory(
        project,
        category
      );

      const searchable = [
        project.title,
        project.city,
        project.type,
        project.category,
        project.status,
        project.details,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return (
        categoryMatch &&
        (!query || searchable.includes(query))
      );
    });
  }, [projects, category, search]);

  const resetFilters = () => {
    setCategory("All");
    setSearch("");
  };

  const hasFilters =
    category !== "All" || search.trim() !== "";

  return (
    <section className="relative isolate w-full overflow-hidden py-6">

      {/* Background Glows */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-red-500/5 blur-[100px]" />

      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-orange-400/5 blur-[110px]" />

      <div className="relative z-10">

        {/* GALLERY HEADER */}
        <div className="mb-10 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">

          <div className="max-w-3xl">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2.5 text-xs font-black uppercase tracking-[0.14em] text-red-600">

              <Sparkles className="h-4 w-4" />

              Explore Our Portfolio

            </div>

            {/* Title */}
            <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">

              Our Projects &

              <span className="group/title relative ml-2 inline-block bg-gradient-to-r from-red-700 via-red-600 to-orange-500 bg-clip-text text-transparent transition-all duration-500 hover:drop-shadow-[0_0_15px_rgba(220,38,38,0.25)]">

                Designs

                <span className="absolute bottom-0 left-0 h-1 w-0 rounded-full bg-gradient-to-r from-red-600 to-orange-400 transition-all duration-500 group-hover/title:w-full" />

              </span>

            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">

              Explore architecture, construction and interior
              design projects and illustrative concepts.

              Discover thoughtful planning, modern spaces
              and professional design ideas.

            </p>

          </div>

          {/* Portfolio Counter */}
          <div className="group relative w-fit overflow-hidden rounded-[24px] border border-red-100 bg-gradient-to-br from-white to-red-50 px-6 py-5 shadow-[0_10px_35px_rgba(220,38,38,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(220,38,38,0.13)]">

            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-red-500/10 blur-2xl" />

            <div className="relative flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600 text-white shadow-[0_8px_25px_rgba(220,38,38,0.25)] transition-transform duration-300 group-hover:scale-110">

                <Images className="h-7 w-7" />

              </div>

              <div>
                <p className="text-3xl font-black text-slate-950">
                  {projects.length.toString().padStart(2, "0")}
                </p>

                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Portfolio Items
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* FILTER PANEL */}
        <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_12px_45px_rgba(15,23,42,0.05)] sm:p-7">

          {/* Glow Decoration */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-red-500/5 blur-[75px]" />

          {/* Filter Header */}
          <div className="relative flex flex-col justify-between gap-5 lg:flex-row lg:items-center">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-600">

                <SlidersHorizontal className="h-5 w-5" />

              </div>

              <div>
                <h3 className="text-lg font-black text-slate-950">
                  Filter Projects
                </h3>

                <p className="text-sm text-slate-500">
                  Find projects by category or location
                </p>
              </div>

            </div>

            {/* Search */}
            <div className="group/search relative w-full lg:max-w-sm">

              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 transition-colors duration-300 group-focus-within/search:text-red-600" />

              <input
                type="search"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search projects or city..."
                aria-label="Search projects"
                className="h-13 min-h-13 w-full rounded-2xl border border-slate-200 bg-slate-50/80 py-3 pl-12 pr-11 text-sm font-medium text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition hover:bg-red-50 hover:text-red-600"
                >
                  <X className="h-4 w-4" />
                </button>
              )}

            </div>
          </div>

          {/* Divider */}
          <div className="relative my-6 h-px w-full bg-gradient-to-r from-slate-200 via-slate-100 to-transparent" />

          {/* Filter Buttons */}
          <div
            role="group"
            aria-label="Filter projects"
            className="relative flex flex-wrap gap-3"
          >

            {categories.map(({ label, icon: Icon }) => {
              const active = category === label;

              const count =
                categoryCounts.find(
                  (item) => item.label === label
                )?.count ?? 0;

              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setCategory(label)}
                  aria-pressed={active}
                  className={`group/filter relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-2xl border px-4 py-3 text-sm font-extrabold transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-200 ${
                    active
                      ? "border-red-600 bg-gradient-to-r from-red-600 to-red-700 text-white shadow-[0_8px_25px_rgba(220,38,38,0.22)]"
                      : "border-slate-200 bg-white text-slate-600 hover:-translate-y-0.5 hover:border-red-300 hover:bg-red-50 hover:text-red-600 hover:shadow-[0_8px_20px_rgba(220,38,38,0.08)]"
                  }`}
                >

                  {/* Active Button Shine */}
                  {active && (
                    <span className="pointer-events-none absolute -left-20 top-0 h-full w-12 skew-x-[-25deg] bg-white/20 transition-all duration-700 group-hover/filter:left-[120%]" />
                  )}

                  <Icon className="relative z-10 h-4 w-4 shrink-0 transition-transform duration-300 group-hover/filter:scale-110" />

                  <span className="relative z-10">
                    {label}
                  </span>

                  {/* Filter Count */}
                  <span
                    className={`relative z-10 flex min-w-6 items-center justify-center rounded-lg px-1.5 py-0.5 text-[11px] font-black ${
                      active
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 text-slate-500 group-hover/filter:bg-red-100 group-hover/filter:text-red-600"
                    }`}
                  >
                    {count}
                  </span>

                </button>
              );
            })}

          </div>

          {/* Filter Footer */}
          <div className="relative mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-5">

            <div className="flex items-center gap-2">

              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-50 motion-reduce:animate-none" />
                <span className="relative h-2 w-2 rounded-full bg-red-600" />
              </span>

              <p
                role="status"
                aria-live="polite"
                className="text-sm font-medium text-slate-600"
              >
                Showing{" "}
                <strong className="font-black text-red-600">
                  {visible.length}
                </strong>{" "}
                of{" "}
                <strong className="font-black text-slate-900">
                  {projects.length}
                </strong>{" "}
                portfolio items
              </p>

            </div>

            {hasFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="group/reset inline-flex items-center gap-2 rounded-xl border border-red-100 bg-red-50 px-4 py-2.5 text-sm font-bold text-red-600 transition-all duration-300 hover:border-red-600 hover:bg-red-600 hover:text-white"
              >

                <RotateCcw className="h-4 w-4 transition-transform duration-500 group-hover/reset:-rotate-45" />

                Reset Filters

              </button>
            )}

          </div>

        </div>

        {/* PROJECT CARDS */}
        {visible.length > 0 ? (

          <div className="mt-9 grid items-stretch gap-7 md:grid-cols-2 lg:grid-cols-3">

            {visible.map((project, index) => (

              <div
                key={project.slug}
                className="min-w-0 motion-safe:animate-[galleryReveal_0.45s_ease-out_both]"
                style={{
                  animationDelay: `${Math.min(index, 8) * 65}ms`,
                }}
              >

                <ProjectCard project={project} />

              </div>

            ))}

          </div>

        ) : (

          /* EMPTY STATE */
          <div className="relative mt-9 overflow-hidden rounded-[32px] border border-dashed border-red-200 bg-gradient-to-br from-white via-slate-50 to-red-50/60 px-6 py-16 text-center sm:px-10 sm:py-20">

            {/* Background */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/5 blur-[90px]" />

            <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-[24px] border border-red-100 bg-white text-red-600 shadow-[0_12px_35px_rgba(220,38,38,0.1)]">

              <Images className="h-9 w-9" />

            </div>

            <h3 className="relative mt-7 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">

              {search.trim()
                ? "No Matching Projects Found"
                : "Project Updates Coming Soon"}

            </h3>

            <p className="relative mx-auto mt-4 max-w-lg text-base leading-8 text-slate-600">

              {search.trim()
                ? "We couldn't find a project matching your search. Try another keyword, location or category."
                : "Approved projects in this category will appear here when published. Explore other categories in the meantime."}

            </p>

            {hasFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="group/empty relative mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 font-extrabold text-white shadow-[0_10px_30px_rgba(220,38,38,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(220,38,38,0.35)]"
              >

                View All Projects

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/empty:translate-x-1" />

              </button>
            )}

          </div>

        )}

        {/* Bottom Note */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 px-5 py-4 sm:flex-row">

          <div className="flex items-start gap-3">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
              <Sparkles className="h-4 w-4" />
            </div>

            <div>
              <p className="text-sm font-bold text-slate-800">
                Royal Stone Construction Portfolio
              </p>

              <p className="mt-0.5 text-xs leading-5 text-slate-500">
                Illustrative concepts are labelled separately
                from project work.
              </p>
            </div>

          </div>

          <span className="text-xs font-semibold text-slate-400">
            Architecture • Construction • Interiors
          </span>

        </div>

      </div>

      {/* Staggered card animation */}
      <style jsx global>{`
        @keyframes galleryReveal {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .motion-safe\\:animate-\\[galleryReveal_0\\.45s_ease-out_both\\] {
            animation: none !important;
          }
        }
      `}</style>

    </section>
  );
}
