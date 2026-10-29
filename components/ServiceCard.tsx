
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import { services } from "@/lib/site-data";

type ServiceCardProps = {
  service: (typeof services)[number];
  reference?: boolean;
};

export default function ServiceCard({
  service,
  reference = false,
}: ServiceCardProps) {
  const Icon = service.icon;

  if (reference) {
    const images: Record<string, string> = {
      architecture: "/architecture.png",
      construction: "/projects/home.png",
      "interior-design": "/projects/living.png",
      "turnkey-projects": "/projects/space.png",
      "floor-planning": "/Floor.png",
      elevation: "/2d3d.png",
      "structural-planning": "/st.png",
      renovation: "/renovation.png",
      vastu: "/vastu-shastra.jpg",
    };
    return <article className="group flex min-w-0 flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <Link href={`/services/${service.slug}`} aria-label={`Explore ${service.title}`} className="relative block aspect-[1.9/1] overflow-hidden bg-slate-100">
        <Image src={images[service.slug] ?? "/projects/home.png"} alt={service.slug === "vastu" ? "Architectural floor plan with a north compass and room layout for Vastu consultation" : `${service.title} design illustration`} fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none" />
        <span className="absolute bottom-2 left-3 rounded bg-white/90 px-2 py-1 text-[10px] text-slate-600">Design Concept</span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="mb-2 flex items-center gap-2 text-[10px] font-bold tracking-[0.14em] text-brand-600"><Icon className="h-4 w-4" />OUR EXPERTISE</p>
        <h3 className="text-lg font-bold text-slate-950">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-slate-500">{service.text}</p>
        <p className="mt-3 text-xs text-slate-500">Explore service details</p>
        <Link href={`/services/${service.slug}`} className="mt-2 flex min-h-11 items-center justify-between gap-3 text-sm font-semibold text-brand-600 hover:underline">{service.slug === "vastu" ? "Explore Service" : "Learn More"}<span className="sr-only"> about {service.title}</span><ArrowRight className="h-4 w-4" /></Link>
      </div>
    </article>;
  }

  return (
    <article
      className="
        group relative isolate flex h-full min-w-0 flex-col
        overflow-hidden rounded-[30px]
        border border-slate-200/90
        bg-white
        p-6 sm:p-8
        shadow-[0_10px_35px_rgba(11,24,32,0.06)]
        transition-all duration-500 ease-out
        hover:-translate-y-2
        hover:border-brand-300
        hover:shadow-[0_25px_65px_rgba(184,134,50,0.15)]
        focus-within:border-brand-300
        focus-within:shadow-[0_20px_50px_rgba(184,134,50,0.12)]
        motion-reduce:transform-none
      "
    >
      {/* BACKGROUND RED GLOW */}
      <div
        className="
          pointer-events-none absolute -right-24 -top-24
          -z-10 h-72 w-72 rounded-full
          bg-brand-500/5 blur-[80px]
          transition-all duration-700
          group-hover:scale-125
          group-hover:bg-brand-500/15
        "
      />

      {/* BOTTOM ORANGE GLOW */}
      <div
        className="
          pointer-events-none absolute -bottom-24 -left-24
          -z-10 h-56 w-56 rounded-full
          bg-brand-400/5 blur-[80px]
          transition-all duration-700
          group-hover:bg-brand-400/10
        "
      />

      {/* DECORATIVE CIRCLE */}
      <div
        className="
          pointer-events-none absolute -right-12 -top-12
          h-48 w-48 rounded-full
          border border-brand-500/5
          transition-all duration-700
          group-hover:scale-110
          group-hover:border-brand-500/15
        "
      />

      {/* TOP HEADER */}
      <div className="relative z-10 flex items-start justify-between gap-4">

        {/* SERVICE ICON */}
        <div
          className="
            relative flex h-[70px] w-[70px]
            shrink-0 items-center justify-center
            rounded-[22px]
            border border-brand-100
            bg-gradient-to-br from-brand-50 to-white
            text-brand-600
            shadow-[0_8px_25px_rgba(184,134,50,0.08)]
            transition-all duration-500
            group-hover:-rotate-3
            group-hover:scale-110
            group-hover:border-brand-600
            group-hover:bg-brand-600
            group-hover:text-white
            group-hover:shadow-[0_12px_35px_rgba(184,134,50,0.3)]
            motion-reduce:transform-none
          "
        >
          <div
            className="
              absolute inset-0 rounded-[22px]
              bg-gradient-to-br from-brand-600 to-brand-700
              opacity-0
              transition-opacity duration-500
              group-hover:opacity-100
            "
          />

          <Icon
            className="
              relative z-10 h-8 w-8
              transition-transform duration-500
              group-hover:scale-110
              motion-reduce:transform-none
            "
            strokeWidth={1.8}
          />
        </div>

        {/* TOP RIGHT ARROW */}
        <div
          className="
            flex h-11 w-11 shrink-0 items-center justify-center
            rounded-full
            border border-slate-200
            bg-slate-50
            text-slate-400
            transition-all duration-500
            group-hover:rotate-45
            group-hover:border-brand-200
            group-hover:bg-brand-50
            group-hover:text-brand-600
            motion-reduce:transform-none
          "
        >
          <ArrowUpRight className="h-5 w-5" />
        </div>

      </div>

      {/* SERVICE CATEGORY LABEL */}
      <div className="relative z-10 mt-8 flex items-center gap-2">

        <span
          className="
            h-2 w-2 rounded-full bg-brand-600
            shadow-[0_0_12px_rgba(184,134,50,0.45)]
          "
        />

        <span
          className="
            text-xs font-black uppercase
            tracking-[0.18em] text-brand-600
          "
        >
          OUR EXPERTISE
        </span>

      </div>

      {/* SERVICE TITLE */}
      <h3
        className="
          relative z-10 mt-4
          text-2xl font-black leading-snug
          tracking-tight text-slate-950
          transition-all duration-500
          group-hover:text-brand-600
          group-hover:[text-shadow:0_0_20px_rgba(184,134,50,0.12)]
          sm:text-[27px]
        "
      >
        {service.title}
      </h3>

      {/* RED ACCENT LINE */}
      <div
        className="
          relative z-10 mt-5
          h-1 w-12 rounded-full
          bg-gradient-to-r from-brand-600 to-brand-400
          transition-all duration-500
          group-hover:w-24
          group-hover:shadow-[0_0_15px_rgba(212,165,75,0.4)]
        "
      />

      {/* SERVICE DESCRIPTION */}
      <p
        className="
          relative z-10 mt-5 flex-1
          text-base leading-8 text-slate-600
          transition-colors duration-300
          group-hover:text-slate-700
        "
      >
        {service.text}
      </p>

      {/* SERVICE HIGHLIGHT */}
      <div
        className="
          relative z-10 mt-7
          flex items-center gap-2
          text-sm font-semibold text-slate-500
        "
      >
        <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-600" />

        <span>
          Explore service details
        </span>
      </div>

      {/* DIVIDER */}
      <div
        className="
          relative z-10 mt-6 h-px w-full
          bg-gradient-to-r
          from-slate-200 via-slate-100 to-transparent
          transition-all duration-500
          group-hover:from-brand-300
          group-hover:via-brand-100
        "
      />

      {/* LEARN MORE BUTTON */}
      <Link
        href={`/services/${service.slug}`}
        className="
          group/button relative z-10 mt-6
          inline-flex min-h-14 w-full
          items-center justify-between gap-3
          overflow-hidden rounded-2xl
          border border-brand-100
          bg-brand-50 px-5 py-3
          text-sm font-extrabold text-brand-600
          transition-all duration-300
          hover:border-brand-600
          hover:bg-gradient-to-r
          hover:from-brand-600
          hover:to-brand-700
          hover:text-white
          hover:shadow-[0_12px_35px_rgba(184,134,50,0.25)]
          focus-visible:outline-none
          focus-visible:ring-4
          focus-visible:ring-brand-200
        "
      >
        {/* BUTTON LIGHT SWEEP */}
        <span
          className="
            pointer-events-none absolute -left-20 top-0
            h-full w-14 skew-x-[-25deg]
            bg-white/20 blur-sm
            transition-all duration-700
            group-hover/button:left-[120%]
          "
        />

        <span className="relative z-10 flex items-center gap-2">
          <Sparkles className="h-4 w-4" />

          {service.slug === "vastu" ? "Explore Service" : "Learn More"}

          <span className="sr-only">
            about {service.title}
          </span>
        </span>

        {/* ARROW */}
        <span
          className="
            relative z-10 flex h-9 w-9
            items-center justify-center
            rounded-xl bg-white
            text-brand-600 shadow-sm
            transition-all duration-300
            group-hover/button:translate-x-1
            group-hover/button:bg-white/20
            group-hover/button:text-white
            motion-reduce:transform-none
          "
        >
          <ArrowRight className="h-5 w-5" />
        </span>
      </Link>

      {/* ANIMATED BOTTOM BORDER */}
      <div
        className="
          pointer-events-none absolute bottom-0 left-0
          h-1 w-0
          bg-gradient-to-r
          from-brand-700 via-brand-500 to-brand-400
          transition-all duration-500
          group-hover:w-full
        "
      />

      {/* LIGHT SWEEP ON CARD */}
      <div
        className="
          pointer-events-none absolute -left-32 top-0
          h-full w-20 skew-x-[-25deg]
          bg-gradient-to-r
          from-transparent via-white/30 to-transparent
          opacity-0
          transition-all duration-700
          group-hover:left-[120%]
          group-hover:opacity-100
        "
      />
    </article>
  );
}
