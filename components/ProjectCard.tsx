
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  MapPin,
  Sparkles,
} from "lucide-react";

import type { Project } from "@/lib/content";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  const isConcept = project.status === "Concept";

  const statusLabel = isConcept
    ? "Illustrative Concept"
    : project.status.replace(" Projects", "");

  const categoryLabel = project.category.replace(
    " Projects",
    ""
  );

  const projectUrl = `/projects/${encodeURIComponent(
    project.slug
  )}`;

  return (
    <article
      className="
        group relative flex h-full min-w-0 flex-col
        overflow-hidden rounded-[30px]
        border border-slate-200/90
        bg-white
        shadow-[0_10px_35px_rgba(15,23,42,0.06)]
        transition-all duration-500
        hover:-translate-y-2
        hover:border-red-200
        hover:shadow-[0_25px_65px_rgba(220,38,38,0.14)]
        focus-within:border-red-300
        focus-within:shadow-[0_20px_50px_rgba(220,38,38,0.12)]
        motion-reduce:transform-none
      "
    >
      {/* IMAGE AREA */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">

        {/* Project Image Link */}
        <Link
          href={projectUrl}
          aria-label={`View ${project.title}`}
          className="absolute inset-0 block overflow-hidden focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-red-500"
        >
          <Image
            unoptimized
            src={project.image}
            alt={
              isConcept
                ? `${project.title} - illustrative architectural concept`
                : project.title
            }
            width={800}
            height={600}
            loading="lazy"
            decoding="async"
            className="
              h-full w-full object-cover
              transition-all duration-700 ease-out
              group-hover:scale-110
              group-hover:brightness-[0.85]
              motion-reduce:transform-none
            "
          />

          {/* Image Gradient Overlay */}
          <div
            className="
              pointer-events-none absolute inset-0
              bg-gradient-to-t
              from-slate-950/65
              via-slate-950/5
              to-transparent
              opacity-60
              transition-opacity duration-500
              group-hover:opacity-100
            "
          />

          {/* Hover Light */}
          <div
            className="
              pointer-events-none absolute -right-24 -top-24
              h-60 w-60 rounded-full
              bg-red-500/20 blur-[75px]
              opacity-0 transition-opacity duration-500
              group-hover:opacity-100
            "
          />

          {/* Hover View Icon */}
          <div
            className="
              absolute bottom-5 right-5
              flex h-12 w-12 items-center justify-center
              rounded-2xl border border-white/30
              bg-white/15 text-white
              shadow-xl backdrop-blur-xl
              opacity-0 translate-y-3
              transition-all duration-500
              group-hover:translate-y-0
              group-hover:opacity-100
              group-focus-within:translate-y-0
              group-focus-within:opacity-100
            "
          >
            <ArrowUpRight className="h-6 w-6" />
          </div>
        </Link>

        {/* Project Status Badge */}
        <div className="pointer-events-none absolute left-4 top-4 z-10">
          <span
            className="
              inline-flex items-center gap-2
              rounded-full border border-white/80
              bg-white/95 px-4 py-2
              text-[11px] font-black
              uppercase tracking-wide
              text-red-600 shadow-lg
              backdrop-blur-md
              transition-all duration-300
              group-hover:shadow-[0_5px_20px_rgba(220,38,38,0.15)]
            "
          >
            {isConcept ? (
              <Sparkles className="h-3.5 w-3.5" />
            ) : (
              <Building2 className="h-3.5 w-3.5" />
            )}

            {statusLabel}
          </span>
        </div>

        {/* Bottom Image Category */}
        <div className="pointer-events-none absolute bottom-5 left-5 z-10">
          <span
            className="
              inline-flex items-center gap-2
              rounded-full border border-white/20
              bg-slate-950/30 px-3 py-2
              text-xs font-bold text-white
              backdrop-blur-lg
            "
          >
            <Building2 className="h-3.5 w-3.5 text-red-300" />
            {categoryLabel}
          </span>
        </div>
      </div>

      {/* PROJECT CONTENT */}
      <div className="relative flex flex-1 flex-col p-6 sm:p-7">

        {/* Background Glow */}
        <div
          className="
            pointer-events-none absolute -right-20 top-0
            h-48 w-48 rounded-full
            bg-red-500/5 blur-3xl
            opacity-0 transition-opacity duration-500
            group-hover:opacity-100
          "
        />

        {/* Project Type */}
        <div className="relative z-10 flex items-center gap-2">
          <span
            className="
              h-2 w-2 rounded-full bg-red-600
              shadow-[0_0_12px_rgba(220,38,38,0.4)]
            "
          />

          <span
            className="
              text-xs font-black uppercase
              tracking-[0.16em] text-red-600
            "
          >
            {project.type}
          </span>
        </div>

        {/* Project Title */}
        <h3
          className="
            relative z-10 mt-4
            text-2xl font-black leading-snug
            tracking-tight text-slate-950
            transition-all duration-300
            group-hover:text-red-600
            sm:text-[26px]
          "
        >
          {project.title}
        </h3>

        {/* Location */}
        <div className="relative z-10 mt-4 flex flex-wrap items-center gap-3">

          <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-500">
            <MapPin className="h-4 w-4 text-red-500" />
            {project.city}
          </span>

          <span className="h-1 w-1 rounded-full bg-slate-300" />

          <span className="text-sm font-medium text-slate-500">
            {categoryLabel}
          </span>
        </div>

        {/* Description */}
        <p
          className="
            relative z-10 mt-5 flex-1
            text-sm leading-7 text-slate-600
            sm:text-base
          "
        >
          {project.details}
        </p>

        {/* Divider */}
        <div
          className="
            relative z-10 mt-7 h-px w-full
            bg-gradient-to-r
            from-slate-200 via-slate-100 to-transparent
            transition-all duration-500
            group-hover:from-red-300
            group-hover:via-red-100
          "
        />

        {/* Bottom Button */}
        <div className="relative z-10 mt-5">
          <Link
            href={projectUrl}
            className="
              group/button inline-flex w-full
              items-center justify-between gap-3
              rounded-2xl border border-red-100
              bg-red-50 px-5 py-3.5
              text-sm font-extrabold text-red-600
              transition-all duration-300
              hover:border-red-600
              hover:bg-red-600
              hover:text-white
              hover:shadow-[0_10px_30px_rgba(220,38,38,0.25)]
              focus-visible:outline-none
              focus-visible:ring-4 focus-visible:ring-red-200
            "
          >
            <span>
              View Project
              <span className="sr-only">
                : {project.title}
              </span>
            </span>

            <span
              className="
                flex h-9 w-9 items-center justify-center
                rounded-xl bg-white text-red-600
                shadow-sm transition-all duration-300
                group-hover/button:translate-x-1
                group-hover/button:rotate-[-45deg]
                group-hover/button:bg-white/20
                group-hover/button:text-white
                motion-reduce:transform-none
              "
            >
              <ArrowRight className="h-5 w-5" />
            </span>
          </Link>
        </div>
      </div>

      {/* Animated Bottom Red Line */}
      <div
        className="
          absolute bottom-0 left-0 h-1 w-0
          bg-gradient-to-r
          from-red-600 via-red-500 to-orange-400
          transition-all duration-500
          group-hover:w-full
        "
      />

      {/* Card Light Sweep */}
      <div
        className="
          pointer-events-none absolute -left-32 top-0
          h-full w-20 skew-x-[-25deg]
          bg-gradient-to-r
          from-transparent via-white/20 to-transparent
          opacity-0 transition-all duration-700
          group-hover:left-[120%]
          group-hover:opacity-100
        "
      />
    </article>
  );
}
