
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
import LeadForm from "./LeadForm";

const slides = [
  {
    image: "/hero-background.jpg",
    label: "Architecture & Planning",
    width: 700,
    height: 226,
  },
  {
    image: "/background1.jpg",
    label: "Interior Design",
    width: 700,
    height: 285,
  },
  {
    image: "/background2.jpg",
    label: "Construction with Material",
    width: 700,
    height: 288,
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updateMotionPreference = () => {
      setReducedMotion(mediaQuery.matches);
    };

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [paused, reducedMotion]);

  const previousSlide = () => {
    setActive((current) => (current - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setActive((current) => (current + 1) % slides.length);
  };

  return (
    <section
      id="home"
      className="relative isolate scroll-mt-20 overflow-hidden bg-[#0b1820]"
    >
      {/* Desktop background slider */}
      <div className="absolute inset-0 hidden sm:block" aria-hidden="true">
        {slides.map((slide, index) => (
          <Image
            key={slide.image}
            src={slide.image}
            alt=""
            fill
            sizes="100vw"
            priority={index === 0}
            className={`object-cover object-center transition-opacity duration-[1200ms] motion-reduce:transition-none ${
              active === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Mobile image: preserve the complete image and its aspect ratio */}
      <div
        className="relative block w-full bg-[#0b1820] sm:hidden"
        aria-hidden="true"
      >
        <Image
          key={slides[active].image}
          src={slides[active].image}
          alt=""
          width={slides[active].width}
          height={slides[active].height}
          sizes="100vw"
          priority={active === 0}
          className="block h-auto w-full object-contain"
        />
      </div>

      {/* Desktop overlay only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-[#08151c]/70 via-[#08151c]/45 to-[#08151c]/15 sm:block"
      />

      {/* Hero content */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-5 py-8 sm:px-8 sm:py-12 lg:min-h-[560px] lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center lg:gap-12 lg:px-10">
        {/* Heading and description */}
        <div className="flex flex-col justify-center text-white">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-amber-400 sm:text-sm">
            Royal Stone Construction
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            From vision to structure.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
            We bring your ideas to life with thoughtful planning,
            quality construction, and interior solutions designed
            around your needs.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center gap-2 rounded-md bg-amber-500 px-5 py-3 font-semibold text-[#101820] transition hover:bg-amber-400"
            >
              Discuss your project
              <ArrowDownRight size={18} />
            </a>

            <a
              href="#services"
              className="inline-flex min-h-12 items-center rounded-md border border-white/40 px-5 py-3 font-medium text-white transition hover:bg-white/10"
            >
              Explore Services
            </a>
          </div>

          {/* Slider controls */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="mr-2 text-sm text-white/80">
              {slides[active].label}
            </span>

            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous background image"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/15"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next background image"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/15"
            >
              <ChevronRight size={20} />
            </button>

            <button
              type="button"
              onClick={() => setPaused((value) => !value)}
              aria-label={paused ? "Play image slider" : "Pause image slider"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/15"
            >
              {paused ? <Play size={17} /> : <Pause size={17} />}
            </button>
          </div>
        </div>

        {/* Enquiry form */}
        <div id="contact" className="w-full scroll-mt-24">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
