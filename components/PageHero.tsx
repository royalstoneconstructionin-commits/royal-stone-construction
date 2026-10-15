
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronRight,
  Home,
  Sparkles,
  Building2,
} from "lucide-react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
};

export default function PageHero({
  eyebrow,
  title,
  text,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-slate-200/70 bg-gradient-to-br from-white via-[#f8fafc] to-[#fff1f2] py-16 sm:py-20 lg:py-24">

      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-10 h-[400px] w-[400px] rounded-full bg-brand-500/10 blur-[110px]" />

      <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-brand-400/10 blur-[130px]" />

      {/* Decorative Circles */}
      <div className="pointer-events-none absolute -right-48 -top-48 hidden h-[600px] w-[600px] rounded-full border border-brand-500/10 lg:block" />

      <div className="pointer-events-none absolute -right-20 -top-20 hidden h-[350px] w-[350px] rounded-full border border-brand-500/10 lg:block" />

      {/* Decorative Building Icon */}
      <Building2
        className="pointer-events-none absolute -right-12 bottom-0 hidden h-80 w-80 rotate-[-10deg] text-brand-600/5 lg:block"
        strokeWidth={0.6}
        aria-hidden="true"
      />

      {/* Main Container */}
      <div className="site-container page-enter relative z-10">

        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-sm"
        >
          <Link
            href="/"
            className="group/home inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2.5 font-bold text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:bg-brand-50 hover:text-brand-600 motion-reduce:transform-none"
          >
            <Home className="h-4 w-4 transition-transform duration-300 group-hover/home:scale-110" />
            Home
          </Link>

          <ChevronRight
            className="h-4 w-4 text-slate-400"
            aria-hidden="true"
          />

          <span
            aria-current="page"
            className="max-w-full break-words rounded-full border border-brand-100 bg-brand-50 px-4 py-2.5 text-sm font-extrabold text-brand-600"
          >
            {eyebrow}
          </span>
        </nav>

        {/* Content */}
        <div className="mt-10 max-w-4xl">

          {/* Eyebrow Badge */}
          <div className="group/badge inline-flex max-w-full flex-wrap items-center gap-3 rounded-full border border-brand-200/80 bg-white/90 px-4 py-2.5 shadow-[0_5px_25px_rgba(184,134,50,0.07)] backdrop-blur-md transition-all duration-300 hover:border-brand-400 hover:shadow-[0_8px_30px_rgba(184,134,50,0.15)]">

            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-60 motion-reduce:animate-none" />

              <span className="relative h-2.5 w-2.5 rounded-full bg-brand-600" />
            </span>

            <Sparkles className="h-4 w-4 text-brand-600" />

            <span className="text-xs font-black uppercase tracking-[0.12em] text-brand-600 sm:tracking-[0.18em]">
              {eyebrow}
            </span>
          </div>

          {/* Title */}
          <div className="group/title relative mt-7">

            <h1 className="max-w-4xl break-words font-serif text-[clamp(2.5rem,6vw,5rem)] font-black leading-[1.1] tracking-[-0.045em] text-slate-950 transition-all duration-500 group-hover/title:text-slate-900 group-hover/title:drop-shadow-[0_0_18px_rgba(184,134,50,0.12)]">
              {title}
            </h1>

            {/* Animated Red Underline */}
            <div className="mt-7 h-1 w-20 rounded-full bg-gradient-to-r from-brand-600 via-brand-500 to-brand-400 shadow-[0_0_15px_rgba(212,165,75,0.3)] transition-all duration-500 group-hover/title:w-40 group-hover/title:shadow-[0_0_25px_rgba(212,165,75,0.55)]" />
          </div>

          {/* Description */}
          <p className="mt-7 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg lg:text-xl">
            {text}
          </p>

          {/* Bottom Elements */}
          <div className="mt-9 flex flex-wrap items-center gap-5">

            {/* Quote Button */}
            <Link
              href="/get-quote"
              className="group/btn relative inline-flex min-h-12 items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-brand-600 to-brand-700 px-6 py-3 font-extrabold text-white shadow-[0_12px_35px_rgba(184,134,50,0.22)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(184,134,50,0.35)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-300 motion-reduce:transform-none"
            >
              {/* Moving Shine */}
              <span className="pointer-events-none absolute -left-20 top-0 h-full w-14 skew-x-[-25deg] bg-white/20 blur-sm transition-all duration-700 group-hover/btn:left-[120%]" />

              <span className="relative z-10">
                Get Free Quote
              </span>

              <ArrowUpRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
            </Link>

            {/* Brand Info */}
            <div className="flex items-center gap-3 text-sm font-semibold text-slate-500">

              <span className="h-px w-7 bg-brand-400" />

              <span>
                Royal Stone Construction
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Border */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />
    </section>
  );
}
