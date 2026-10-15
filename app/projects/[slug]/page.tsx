
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  DraftingCompass,
  Hammer,
  Images,
  Layers3,
  MapPin,
  Maximize2,
  PaintBucket,
  Ruler,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { getSiteContent } from "@/lib/site-content-server";
import { pageMetadata } from "@/lib/seo";

export const revalidate = 30;

// Render each published project on demand, then reuse it between refreshes.
export function generateStaticParams() {
  return [];
}

type Props = {
  params: Promise<{ slug: string }>;
};

// ============================================
// SEO METADATA
// ============================================

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const { projects } = await getSiteContent();

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return {
      title: "Project Not Found",
      robots: { index: false },
    };
  }

  return {
    ...pageMetadata(project.title, project.details, `/projects/${project.slug}`, project.image),
    robots:
      project.status === "Concept"
        ? { index: false }
        : undefined,
  };
}

// ============================================
// PROJECT DETAIL PAGE
// ============================================

export default async function ProjectPage({
  params,
}: Props) {
  const { slug } = await params;

  const { projects } = await getSiteContent();

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  const isConcept = project.status === "Concept";

  const statusLabel = isConcept
    ? "Illustrative Concept"
    : project.status.replace(" Projects", "");

  const categoryLabel = project.category.replace(
    " Projects",
    ""
  );

  const projectInfo = [
    { label: "Project Duration", value: project.duration, icon: Ruler },
    {
      label: "Project Location",
      value: project.city,
      icon: MapPin,
    },
    {
      label: "Project Category",
      value: categoryLabel,
      icon: Building2,
    },
    {
      label: "Project Type",
      value: project.type,
      icon: DraftingCompass,
    },
    {
      label: "Project Area",
      value: project.area,
      icon: Ruler,
    },
    {
      label: "Project Status",
      value: statusLabel,
      icon: BadgeCheck,
    },
  ].filter((item) => item.value?.trim());

  const galleryImages = project.gallery.filter(Boolean);

  return (
    <main className="overflow-hidden bg-white">

      {/* =====================================
          PAGE HERO
      ===================================== */}

      <PageHero
        eyebrow="PROJECT DETAILS"
        title={project.title}
        text={project.details}
      />

      {/* =====================================
          PROJECT SHOWCASE
      ===================================== */}

      <section className="relative isolate overflow-hidden bg-gradient-to-br from-white via-slate-50 to-brand-50/30 py-16 sm:py-20 lg:py-24">

        {/* Background Pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-brand-500/10 blur-[110px]" />

        <div className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-brand-400/10 blur-[120px]" />

        <div className="site-container relative z-10">

          {/* BACK NAVIGATION */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">

            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-extrabold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-x-1 hover:border-brand-200 hover:bg-brand-50 hover:text-brand-600"
            >
              <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />

              Back to Projects
            </Link>

            <div className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-2.5 text-xs font-black uppercase tracking-[0.12em] text-brand-600">
              <Sparkles className="h-4 w-4" />
              Royal Stone Portfolio
            </div>

          </div>

          {/* CONCEPT NOTICE */}
          {isConcept && (
            <div
              role="note"
              className="mb-8 flex items-start gap-4 rounded-[24px] border border-amber-200 bg-amber-50 px-6 py-5"
            >
              <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-amber-700" />

              <div>
                <h2 className="text-base font-black text-amber-900">
                  Illustrative Design Concept
                </h2>

                <p className="mt-2 text-sm leading-7 text-amber-800">
                  This entry is an illustrative architectural
                  concept, not a completed or ongoing client
                  project. Images and specifications are for
                  design illustration only.
                </p>
              </div>
            </div>
          )}

          {/* =====================================
              MAIN PROJECT IMAGE
          ===================================== */}

          <div className="group relative isolate overflow-hidden rounded-[32px] border border-slate-200 bg-[#0b1820] shadow-[0_25px_70px_rgba(11,24,32,0.15)]">

            {/* Image */}
            <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden bg-slate-100 sm:min-h-[420px] lg:min-h-[580px]">

              <Image
                unoptimized={!project.image.startsWith("/")}
                src={project.image}
                alt={
                  isConcept
                    ? `${project.title} - illustrative concept design`
                    : project.title
                }
                width={1400}
                height={950}
                priority
                sizes="(max-width: 768px) 100vw, 1200px"
                className="max-h-[680px] h-auto w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.025] motion-reduce:transform-none"
              />

              {/* Image Lighting */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-slate-950/10" />

              {/* Status Badge */}
              <div className="absolute left-4 top-4 z-10 sm:left-7 sm:top-7">

                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/95 px-4 py-2.5 text-xs font-black uppercase tracking-wide text-brand-600 shadow-xl backdrop-blur-xl">

                  <BadgeCheck className="h-4 w-4" />

                  {statusLabel}

                </span>

              </div>

              {/* Open Image */}
              <a
                href={project.image}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} image`}
                className="group/open absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 bg-slate-950/30 text-white backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-brand-600 sm:right-7 sm:top-7"
              >
                <Maximize2 className="h-5 w-5" />
              </a>

              {/* Bottom Image Content */}
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 p-6 text-white sm:p-9">

                <div className="flex flex-wrap items-end justify-between gap-4">

                  <div className="max-w-2xl">

                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-2 text-xs font-bold backdrop-blur-lg">

                      <Building2 className="h-4 w-4 text-brand-300" />

                      {project.type}

                    </div>

                    <h2 className="mt-4 text-2xl font-black leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                      {project.title}
                    </h2>

                    {project.city && (
                      <p className="mt-3 flex items-center gap-2 text-sm text-slate-200">

                        <MapPin className="h-4 w-4 text-brand-300" />

                        {project.city}

                      </p>
                    )}

                  </div>

                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold backdrop-blur-lg">
                    {categoryLabel}
                  </span>

                </div>

              </div>

            </div>

            {/* Bottom Accent */}
            <div className="h-1 w-full bg-gradient-to-r from-brand-600 via-brand-400 to-transparent" />

          </div>

          {/* =====================================
              PROJECT QUICK INFORMATION
          ===================================== */}

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {projectInfo
              .filter((item) =>
                [
                  "Project Location",
                  "Project Category",
                  "Project Type",
                  "Project Status",
                ].includes(item.label)
              )
              .map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className="group relative overflow-hidden rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(11,24,32,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_15px_40px_rgba(184,134,50,0.1)]"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white">

                    <Icon className="h-6 w-6" />

                  </div>

                  <p className="mt-5 text-xs font-black uppercase tracking-[0.12em] text-brand-600">
                    {label}
                  </p>

                  <p className="mt-2 break-words text-base font-extrabold text-slate-950">
                    {value}
                  </p>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-brand-600 to-brand-400 transition-all duration-500 group-hover:w-full" />

                </div>
              ))}

          </div>

        </div>
      </section>

      {/* =====================================
          PROJECT DESCRIPTION + INFO
      ===================================== */}

      <section className="relative isolate overflow-hidden bg-white py-20 sm:py-24 lg:py-28">

        {/* Background Lights */}
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-500/5 blur-[100px]" />

        <div className="site-container relative z-10">

          <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">

            {/* LEFT PROJECT DESCRIPTION */}
            <div className="space-y-9">

              {/* PROJECT OVERVIEW */}
              <div className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(11,24,32,0.05)] transition-all duration-300 hover:border-brand-200 hover:shadow-[0_20px_55px_rgba(184,134,50,0.08)] sm:p-9">

                <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brand-500/5 blur-[80px]" />

                <div className="relative inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-brand-600">

                  <Sparkles className="h-4 w-4" />

                  PROJECT STORY

                </div>

                <h2 className="relative mt-6 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  Project{" "}

                  <span className="text-brand-600">
                    Overview.
                  </span>
                </h2>

                <div className="relative mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-brand-600 to-brand-400 transition-all duration-500 group-hover:w-28" />

                <p className="relative mt-7 whitespace-pre-line text-base leading-8 text-slate-600 sm:text-lg">

                  {project.overview ||
                    "Additional project information will be available once approved for publication."}

                </p>

                <div className="relative mt-8 flex items-center gap-2 border-t border-slate-100 pt-6 text-sm font-bold text-slate-500">

                  <Building2 className="h-5 w-5 text-brand-600" />

                  Royal Stone Construction

                </div>

              </div>

              {/* PROJECT WORK */}
              <div className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-7 shadow-[0_12px_40px_rgba(11,24,32,0.05)] transition-all duration-300 hover:border-brand-200 hover:shadow-[0_20px_55px_rgba(184,134,50,0.08)] sm:p-9">

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-all duration-300 group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-[0_10px_25px_rgba(184,134,50,0.2)]">

                    <Hammer className="h-7 w-7" />

                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-brand-600">
                      PROJECT SCOPE
                    </p>

                    <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                      {isConcept
                        ? "Proposed Work"
                        : "Work Completed"}
                    </h2>
                  </div>

                </div>

                <p className="mt-7 whitespace-pre-line text-base leading-8 text-slate-600">

                  {project.work ||
                    "Work details will be added when available."}

                </p>

                <div className="mt-8 h-px w-full bg-gradient-to-r from-slate-200 to-transparent" />

                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-slate-500">

                  <CheckCircle2 className="h-4 w-4 text-brand-600" />

                  {isConcept
                    ? "Illustrative scope information"
                    : "Project information"}

                </div>

              </div>

              {/* MATERIALS */}
              {project.materials?.trim() && (
                <div className="group relative overflow-hidden rounded-[28px] border border-brand-100 bg-gradient-to-r from-brand-50 via-white to-brand-50 p-7 sm:p-8">

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-white">

                      <Layers3 className="h-6 w-6" />

                    </div>

                    <h2 className="text-2xl font-black text-slate-950">
                      {isConcept
                        ? "Concept Materials"
                        : "Project Materials"}
                    </h2>

                  </div>

                  <p className="mt-5 whitespace-pre-line leading-8 text-slate-600">
                    {project.materials}
                  </p>

                </div>
              )}

            </div>

            {/* =====================================
                RIGHT PROJECT DETAILS SIDEBAR
            ===================================== */}

            <aside className="relative lg:sticky lg:top-28">

              <div className="relative isolate overflow-hidden rounded-[32px] bg-[#0b1820] p-7 text-white shadow-[0_25px_65px_rgba(11,24,32,0.16)] sm:p-9">

                {/* Background Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 -z-10 h-72 w-72 rounded-full bg-brand-600/20 blur-[90px]" />

                <div className="pointer-events-none absolute -bottom-28 -left-20 -z-10 h-60 w-60 rounded-full bg-brand-500/10 blur-[100px]" />

                {/* Header */}
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.13em] text-brand-300">

                  <BadgeCheck className="h-4 w-4" />

                  PROJECT INFORMATION

                </div>

                <h2 className="mt-6 text-2xl font-black leading-tight sm:text-3xl">
                  Project{" "}

                  <span className="text-brand-400">
                    Details.
                  </span>
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Explore the location, service category,
                  project specifications and status.
                </p>

                {/* Info List */}
                <dl className="mt-8 divide-y divide-white/10 border-y border-white/10">

                  {projectInfo.map(
                    ({ label, value, icon: Icon }) => (
                      <div
                        key={label}
                        className="group/info flex items-start gap-4 py-5"
                      >

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand-500/20 bg-brand-500/10 text-brand-400 transition-all duration-300 group-hover/info:bg-brand-600 group-hover/info:text-white">

                          <Icon className="h-5 w-5" />

                        </div>

                        <div className="min-w-0 flex-1">

                          <dt className="text-xs font-black uppercase tracking-[0.12em] text-brand-300">
                            {label}
                          </dt>

                          <dd className="mt-2 break-words whitespace-pre-line text-sm font-semibold leading-7 text-white">
                            {value}
                          </dd>

                        </div>

                      </div>
                    )
                  )}

                  {project.materials?.trim() && (
                    <div className="flex items-start gap-4 py-5">

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand-500/20 bg-brand-500/10 text-brand-400">

                        <Layers3 className="h-5 w-5" />

                      </div>

                      <div className="min-w-0 flex-1">

                        <dt className="text-xs font-black uppercase tracking-[0.12em] text-brand-300">
                          Materials
                        </dt>

                        <dd className="mt-2 whitespace-pre-line break-words text-sm leading-7 text-white">
                          {project.materials}
                        </dd>

                      </div>

                    </div>
                  )}

                </dl>

                {/* CTA */}
                <Link
                  href="/get-quote"
                  className="group/btn relative mt-8 inline-flex min-h-14 w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-brand-600 to-brand-700 px-6 py-4 text-sm font-extrabold text-white shadow-[0_12px_35px_rgba(184,134,50,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(184,134,50,0.4)]"
                >

                  <span className="pointer-events-none absolute -left-20 top-0 h-full w-14 skew-x-[-25deg] bg-white/20 transition-all duration-700 group-hover/btn:left-[120%]" />

                  <span className="relative z-10">
                    Start a Similar Project
                  </span>

                  <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />

                </Link>

                {/* Trust Note */}
                <div className="mt-6 flex items-start gap-3">

                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />

                  <p className="text-xs leading-6 text-slate-400">
                    Project specifications and quotation
                    depend on your individual requirements.
                  </p>

                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-brand-600 via-brand-400 to-transparent" />

              </div>

            </aside>

          </div>

        </div>
      </section>

      {/* =====================================
          PROJECT GALLERY
      ===================================== */}

      {galleryImages.length > 0 && (
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-slate-50 via-white to-brand-50/40 py-20 sm:py-24 lg:py-28">

          {/* Background Glow */}
          <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-brand-500/5 blur-[110px]" />

          <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-brand-400/5 blur-[110px]" />

          <div className="site-container relative z-10">

            {/* Section Header */}
            <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end">

              <div className="max-w-3xl">

                <div className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-2.5 text-xs font-black uppercase tracking-[0.15em] text-brand-600">

                  <Images className="h-4 w-4" />

                  PROJECT GALLERY

                </div>

                <h2 className="mt-6 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">

                  Explore the{" "}

                  <span className="bg-gradient-to-r from-brand-700 to-brand-500 bg-clip-text text-transparent">
                    Details.
                  </span>

                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  {isConcept
                    ? "Explore additional views of this illustrative architectural concept."
                    : "Explore additional project images and visual details."}
                </p>

              </div>

              {/* Gallery Count */}
              <div className="flex w-fit items-center gap-3 rounded-2xl border border-brand-100 bg-white px-5 py-4 shadow-sm">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">

                  <Images className="h-6 w-6" />

                </div>

                <div>
                  <p className="text-2xl font-black text-slate-950">
                    {String(galleryImages.length).padStart(
                      2,
                      "0"
                    )}
                  </p>

                  <p className="text-xs font-semibold text-slate-500">
                    Gallery Images
                  </p>
                </div>

              </div>

            </div>

            {/* Gallery Grid */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {galleryImages.map((src, index) => (
                <a
                  key={`${src}-${index}`}
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} gallery image ${index + 1}`}
                  className="group relative block overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_10px_35px_rgba(11,24,32,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-brand-300 hover:shadow-[0_25px_60px_rgba(184,134,50,0.13)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-300 motion-reduce:transform-none"
                >

                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">

                    <Image
                      unoptimized={!src.startsWith("/")}
                      src={src}
                      alt={`${project.title} - ${
                        isConcept
                          ? "concept illustration"
                          : "gallery"
                      } view ${index + 1}`}
                      width={800}
                      height={600}
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-90 motion-reduce:transform-none"
                    />

                    {/* Image Overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Image Number */}
                    <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/90 px-4 py-2 text-xs font-black text-brand-600 shadow-lg backdrop-blur-lg">

                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}

                    </span>

                    {/* Open Icon */}
                    <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-slate-950/30 text-white backdrop-blur-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-600">

                      <Maximize2 className="h-5 w-5" />

                    </div>

                    {/* Image Footer */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">

                      <div className="flex items-center justify-between gap-3">

                        <div>

                          <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-200">
                            {isConcept
                              ? "Concept Illustration"
                              : "Project Image"}
                          </p>

                          <p className="mt-2 text-base font-black">
                            Gallery View {index + 1}
                          </p>

                        </div>

                        <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />

                      </div>

                    </div>

                  </div>

                  {/* Bottom Border */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-brand-600 to-brand-400 transition-all duration-500 group-hover:w-full" />

                </a>
              ))}

            </div>

          </div>

        </section>
      )}

      {/* =====================================
          NEXT PROJECT CTA
      ===================================== */}

      <section className="relative overflow-hidden bg-white py-14 sm:py-20">

        <div className="site-container">

          <div className="flex flex-col items-start justify-between gap-6 rounded-[28px] border border-brand-100 bg-gradient-to-r from-brand-50 via-white to-brand-50 p-7 sm:flex-row sm:items-center sm:p-9">

            <div className="flex items-start gap-4">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-[0_10px_30px_rgba(184,134,50,0.25)]">

                <PaintBucket className="h-7 w-7" />

              </div>

              <div>

                <h2 className="text-xl font-black text-slate-950 sm:text-2xl">
                  Explore More Project Ideas
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-7 text-slate-600">
                  Discover more architecture, construction
                  and interior design projects from
                  Royal Stone Construction.
                </p>

              </div>

            </div>

            <Link
              href="/projects"
              className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-2xl bg-brand-600 px-6 py-3 font-extrabold text-white shadow-[0_10px_30px_rgba(184,134,50,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-brand-700 hover:shadow-[0_15px_40px_rgba(184,134,50,0.3)]"
            >

              View All Projects

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />

            </Link>

          </div>

        </div>

      </section>

      {/* =====================================
          FINAL CTA
      ===================================== */}

      <CTASection
        title="Have a project in mind?"
      />

    </main>
  );
}
