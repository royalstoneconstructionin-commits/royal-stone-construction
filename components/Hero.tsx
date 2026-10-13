import { Sparkles } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import HeroBackground from "@/components/HeroBackground";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate scroll-mt-20 overflow-hidden bg-[#101b22]"
    >
      <HeroBackground src="/hero-background.jpeg" />

      {/* Main Content */}
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 py-10 sm:px-6 lg:min-h-[560px] lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-12 lg:px-8 lg:py-12">

        {/* LEFT CONTENT */}
        <div className="relative z-10">

          {/* Top Badge */}
          <div className="group/badge inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-red-200 bg-white/90 px-4 py-2.5 shadow-[0_5px_25px_rgba(220,38,38,0.07)] backdrop-blur-md transition-all duration-300 hover:border-red-400 hover:shadow-[0_8px_30px_rgba(220,38,38,0.15)]">

            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-600" />
            </span>

            <Sparkles className="h-4 w-4 text-red-600" />

            <span className="text-xs font-extrabold tracking-wide text-red-600 sm:text-sm">
              Built with planning. Finished with pride.
            </span>

          </div>

          {/* Small Heading */}
          <div className="mt-8 flex items-center gap-3">
            <span className="h-[2px] w-10 rounded-full bg-red-600" />

            <span className="text-xs font-black uppercase tracking-[0.2em] text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] sm:text-sm">
              Royal Stone Construction
            </span>
          </div>

          {/* Main Title */}
          <h1 className="mt-5 max-w-3xl font-serif text-[clamp(3.15rem,6vw,6rem)] font-black leading-[1.04] tracking-[-0.045em] text-white drop-shadow-[0_3px_8px_rgba(0,0,0,0.8)]">

            <span className="block">
              From Vision
            </span>

            <span className="block">
              to
            </span>

            <span className="group/title relative inline-block cursor-default bg-gradient-to-r from-red-400 via-orange-400 to-amber-300 bg-clip-text pb-2 text-transparent transition-all duration-500 hover:scale-[1.02] hover:drop-shadow-[0_0_15px_rgba(220,38,38,0.35)]">

              Structure.

              {/* Animated Underline */}
              <span className="absolute bottom-0 left-0 h-1 w-16 rounded-full bg-gradient-to-r from-red-600 to-orange-400 transition-all duration-500 group-hover/title:w-full group-hover/title:shadow-[0_0_20px_rgba(239,68,68,0.6)]" />

            </span>

          </h1>

        </div>

        {/* RIGHT SIDE - LEAD FORM */}
        <div className="relative z-10 flex w-full justify-center lg:self-start lg:justify-end lg:pt-4">
          <div className="w-full max-w-[360px]">
            <LeadForm compact />
          </div>
        </div>

      </div>

      {/* Bottom Gradient Border */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />

    </section>
  );
}
