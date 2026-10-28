
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowDownRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";
import LeadForm from "@/components/LeadForm";

const slides = [
  {
    image: "/hero-background.jpg",
    label: "Architecture & Planning",
  },
  {
    image: "/background1.jpg",
    label: "Interior Design",
  },
  {
    image: "/background2.jpg",
    label: "Construction with Material",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const update = () => setReducedMotion(media.matches);
    update();

    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;

    const timer = window.setInterval(() => {
      if (document.hidden) return;
      setActive((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [paused, reducedMotion]);

  const moveSlide = (direction: number) => {
    setActive(
      (current) => (current + direction + slides.length) % slides.length
    );
  };

  return (
    <section
      id="home"
      aria-label="Royal Stone Construction"
      className="relative isolate scroll-mt-20 overflow-hidden bg-[#0b1820]"
    >
      {/* Background slider */}
      <div className="absolute inset-0" aria-hidden="true">
        {slides.map((slide, index) => (
          <Image
            key={slide.image}
            src={slide.image}
            alt=""
            fill
            sizes="100vw"
            priority={index === 0}
           className={`absolute inset-0 h-full w-full object-contain sm:object-cover transition-opacity duration-[1200ms] motion-reduce:transition-none ${
  active === index ? "opacity-100" : "opacity-0"
}
            }`}
          />
        ))}
      </div>

      {/* Dark overlay for readable text */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#08151c]/95 via-[#08151c]/45 to-[#08151c]/1n5"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-10">
        <div className="grid items-center gap-8 py-8 sm:gap-10 sm:py-12 lg:min-h-[560px] lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-16 lg:py-12">
          {/* Main content */}
          <div className="hero-left-copy max-w-2xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-brand-500" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white sm:text-xs">
                Royal Stone Construction
              </span>
            </div>

            <h1 className="mt-6 text-[clamp(2.75rem,4.8vw,4.25rem)] font-bold leading-[1.08] tracking-[-0.035em] text-white">
              From vision
              <br />
              to <span className="text-white">structure.</span>
            </h1>

            <p className="mt-6 max-w-md text-sm leading-7 text-white sm:text-base sm:leading-8">
              Thoughtful architecture. Refined interiors. Complete
              construction with material—planned around your space,
              your needs, and your vision.
            </p>

            <a
              href="#hero-enquiry"
              className="mt-7 inline-flex min-h-12 items-center gap-5 rounded-md bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-500"
            >
              Discuss your project
              <ArrowDownRight className="h-4 w-4" />
            </a>

            {/* Services */}
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/30 pt-4 text-xs font-medium text-white sm:text-sm">
              {["Architecture", "Construction", "Interiors"].map(
                (service) => (
                  <span key={service} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-brand-500" />
                    {service}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Enquiry form */}
          <div
            id="hero-enquiry"
            className="mx-auto w-full max-w-[380px] scroll-mt-24 lg:mx-0"
          >
            <div className="overflow-hidden rounded-xl border border-white/20 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.25)]">
              <div className="border-b border-slate-100 px-6 py-5">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Let’s build together
                  </p>
                </div>

                <h2 className="mt-2 text-xl font-semibold tracking-tight text-[#142630]">
                  Tell us about your project
                </h2>
              </div>

              <LeadForm compact />
            </div>

            <p className="mt-3 text-center text-xs leading-5 text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.9)]">
              Share your requirements with our team.
            </p>
          </div>
        </div>

        {/* Slider controls */}
        <div
          role="group"
          aria-label="Background slideshow controls"
          className="flex flex-wrap items-center justify-between gap-5 border-t border-white/15 py-5"
        >
          <div className="flex items-center gap-4">
            <span className="text-xs font-medium tabular-nums text-white">
              {String(active + 1).padStart(2, "0")}
              <span className="mx-2 text-white/30">/</span>
              {String(slides.length).padStart(2, "0")}
            </span>

            <span className="h-4 w-px bg-white/20" />

            <span className="text-xs tracking-wide text-white/75 sm:text-sm">
              {slides[active].label}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.image}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show ${slide.label} background`}
                aria-pressed={active === index}
                className="flex h-11 w-7 items-center justify-center rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#d4a54b]"
              >
                <span
                  className={`h-1 w-full rounded-full ${
                    active === index ? "bg-brand-500" : "bg-white/60"
                  }`}
                />
              </button>
            ))}

            {!reducedMotion && (
              <button
                type="button"
                onClick={() => setPaused((current) => !current)}
                aria-label={paused ? "Play slideshow" : "Pause slideshow"}
                className="ml-2 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#d4a54b]"
              >
                {paused ? (
                  <Play className="h-4 w-4" />
                ) : (
                  <Pause className="h-4 w-4" />
                )}
              </button>
            )}

            <button
              type="button"
              onClick={() => moveSlide(-1)}
              aria-label="Previous background"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#d4a54b]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={() => moveSlide(1)}
              aria-label="Next background"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#d4a54b]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-left-copy > * {
          animation: hero-copy-enter 700ms ease-out both;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.85);
        }

        .hero-left-copy > a {
          text-shadow: none;
        }

        .hero-left-copy > :nth-child(2) {
          animation-delay: 100ms;
        }

        .hero-left-copy > :nth-child(3) {
          animation-delay: 200ms;
        }

        .hero-left-copy > :nth-child(4) {
          animation-delay: 300ms;
        }

        .hero-left-copy > :nth-child(5) {
          animation-delay: 400ms;
        }

        @keyframes hero-copy-enter {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-left-copy > * {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
