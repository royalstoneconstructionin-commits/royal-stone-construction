
import { Sparkles } from "lucide-react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  text?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  text,
}: SectionHeadingProps) {
  return (
    <div className="group relative isolate max-w-3xl">

      {/* Background Glow */}
      <div
        className="
          pointer-events-none absolute -left-16 -top-10 -z-10
          h-48 w-72 rounded-full
          bg-red-500/5 blur-[75px]
          opacity-50
          transition-all duration-700
          group-hover:bg-red-500/10
          group-hover:opacity-100
        "
      />

      {/* Eyebrow Badge */}
      <div
        className="
          inline-flex max-w-full items-center gap-3
          rounded-full border border-red-100
          bg-gradient-to-r from-red-50 to-white
          px-4 py-2.5
          shadow-[0_5px_20px_rgba(220,38,38,0.05)]
          transition-all duration-500
          group-hover:border-red-300
          group-hover:shadow-[0_8px_30px_rgba(220,38,38,0.12)]
        "
      >

        {/* Glowing Dot */}
        <span className="relative flex h-2.5 w-2.5 shrink-0">

          <span
            className="
              absolute inline-flex h-full w-full
              animate-ping rounded-full
              bg-red-400 opacity-60
              motion-reduce:animate-none
            "
          />

          <span className="relative h-2.5 w-2.5 rounded-full bg-red-600" />

        </span>

        <Sparkles
          className="
            h-4 w-4 shrink-0 text-red-600
            transition-transform duration-500
            group-hover:rotate-12
            group-hover:scale-110
            motion-reduce:transform-none
          "
        />

        <span
          className="
            text-xs font-black uppercase
            tracking-[0.15em] text-red-600
            sm:text-sm
            sm:tracking-[0.18em]
          "
        >
          {eyebrow}
        </span>

      </div>

      {/* Heading */}
      <div className="relative mt-6">

        <h2
          className="
            max-w-3xl text-3xl font-black
            leading-[1.15] tracking-[-0.04em]
            text-slate-950
            transition-all duration-500
            group-hover:text-slate-900
            group-hover:[text-shadow:0_0_22px_rgba(220,38,38,0.16)]
            sm:text-4xl
            lg:text-5xl
          "
        >
          {title}
        </h2>

        {/* Animated Red Underline */}
        <div
          className="
            relative mt-6 h-1 w-24
            overflow-hidden rounded-full
            bg-slate-100
            transition-all duration-500
            group-hover:w-40
          "
        >
          <div
            className="
              h-full w-full rounded-full
              bg-gradient-to-r
              from-red-700 via-red-500 to-orange-400
              shadow-[0_0_15px_rgba(220,38,38,0.35)]
            "
          />
        </div>

      </div>

      {/* Description */}
      {text && (
        <div className="relative mt-6 max-w-2xl">

          <p
            className="
              text-base leading-8
              text-slate-600
              transition-colors duration-500
              group-hover:text-slate-700
              sm:text-lg
            "
          >
            {text}
          </p>

        </div>
      )}

      {/* Small Decorative Accent */}
      <div
        className="
          pointer-events-none absolute -right-4 top-4
          hidden h-16 w-16
          rounded-full border border-red-100/60
          opacity-40
          transition-all duration-700
          group-hover:scale-110
          group-hover:border-red-300
          group-hover:opacity-80
          md:block
        "
      />

    </div>
  );
}
