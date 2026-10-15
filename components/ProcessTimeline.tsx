
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import { processSteps } from "@/lib/site-data";

type ProcessTimelineProps = {
  preview?: boolean;
  reference?: boolean;
};

const previewIndices = [0, 3, 6, 9];

export default function ProcessTimeline({
  preview = false,
  reference = false,
}: ProcessTimelineProps) {
  const steps = preview
    ? processSteps.filter((_, index) =>
        previewIndices.includes(index)
      )
    : processSteps;

  if (reference) return <ol className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {steps.map(([title, text], index) => <li key={title} className="relative flex items-start gap-4 pr-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">{index + 1}</span>
      <div><p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-brand-600">Process Step {String(index + 1).padStart(2, "0")}</p><h3 className="text-sm font-bold text-slate-950">{title}</h3><p className="mt-2 text-sm leading-5 text-slate-500">{text}</p><span className="mt-2 block text-xs text-slate-500">Our Process</span></div>
      {index < steps.length - 1 && <ArrowRight aria-hidden="true" className="absolute -right-2 top-4 hidden h-4 w-4 text-slate-400 lg:block" />}
    </li>)}
  </ol>;

  return (
    <div className="relative w-full overflow-hidden">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-brand-500/5 blur-[100px]" />

      <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-brand-400/5 blur-[110px]" />

      {/* Timeline */}
      <ol
        className={`relative mt-10 grid gap-6 lg:gap-7 ${
          preview
            ? "sm:grid-cols-2 lg:grid-cols-4"
            : "md:grid-cols-2"
        }`}
      >
        {steps.map(([title, text], index) => {
          const number = String(index + 1).padStart(2, "0");
          const isLast = index === steps.length - 1;

          return (
            <li
              key={`${title}-${index}`}
              className="group relative min-w-0"
            >

              {/* Card */}
              <div className="relative isolate flex h-full min-h-[270px] flex-col overflow-hidden rounded-[28px] border border-slate-200/90 bg-white p-7 shadow-[0_10px_35px_rgba(11,24,32,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-brand-300 hover:shadow-[0_25px_60px_rgba(184,134,50,0.13)] sm:p-8">

                {/* Background Light */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-brand-500/5 blur-3xl transition-all duration-500 group-hover:bg-brand-500/15" />

                <div className="pointer-events-none absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-brand-400/5 blur-3xl transition-all duration-500 group-hover:bg-brand-400/10" />

                {/* Decorative Large Number */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-2 top-1 select-none text-[100px] font-black leading-none text-slate-100/80 transition-all duration-500 group-hover:scale-110 group-hover:text-brand-50"
                >
                  {number}
                </span>

                {/* Top Area */}
                <div className="relative z-10 flex items-start justify-between gap-3">

                  {/* Number Badge */}
                  <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white text-2xl font-black text-brand-600 shadow-sm transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 group-hover:border-brand-500 group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-[0_10px_35px_rgba(184,134,50,0.25)]">

                    <span className="relative z-10">
                      {number}
                    </span>

                  </div>

                  {/* Top Right Icon */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-400 transition-all duration-300 group-hover:rotate-45 group-hover:border-brand-200 group-hover:bg-brand-50 group-hover:text-brand-600">

                    <ArrowUpRight className="h-5 w-5" />

                  </div>

                </div>

                {/* Content */}
                <div className="relative z-10 mt-8 flex flex-1 flex-col">

                  {/* Step Label */}
                  <div className="mb-3 flex items-center gap-2">

                    <span className="h-1.5 w-1.5 rounded-full bg-brand-500 shadow-[0_0_10px_rgba(212,165,75,0.4)]" />

                    <span className="text-xs font-black uppercase tracking-[0.18em] text-brand-600">
                      Process Step {number}
                    </span>

                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-black leading-snug tracking-tight text-slate-950 transition-all duration-300 group-hover:text-brand-600 sm:text-2xl">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 sm:text-base">
                    {text}
                  </p>

                  {/* Bottom Divider */}
                  <div className="mt-7 h-px w-full bg-gradient-to-r from-slate-200 to-transparent transition-all duration-500 group-hover:from-brand-300" />

                  {/* Bottom Text */}
                  <div className="mt-4 flex items-center justify-between">

                    <div className="flex items-center gap-2 text-xs font-bold text-slate-500 transition-colors duration-300 group-hover:text-brand-600">

                      <CheckCircle2 className="h-4 w-4 text-brand-500" />

                      Our Process

                    </div>

                    <Sparkles className="h-4 w-4 text-slate-300 transition-all duration-300 group-hover:rotate-12 group-hover:text-brand-500" />

                  </div>

                </div>

                {/* Animated Bottom Border */}
                <div className="absolute bottom-0 left-0 h-1 w-0 rounded-full bg-gradient-to-r from-brand-600 via-brand-500 to-brand-400 transition-all duration-500 group-hover:w-full" />

                {/* Top Shine */}
                <div className="pointer-events-none absolute -left-32 top-0 h-full w-20 skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />

              </div>

              {/* Connecting Arrow - Preview Desktop */}
              {preview && !isLast && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-[22px] top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center lg:flex"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-200 bg-white text-brand-600 shadow-[0_5px_20px_rgba(184,134,50,0.12)] transition-all duration-300 group-hover:scale-110 group-hover:border-brand-500 group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-[0_0_25px_rgba(184,134,50,0.25)]">

                    <ArrowRight className="h-4 w-4" />

                  </div>
                </div>
              )}

            </li>
          );
        })}
      </ol>

      {/* Bottom Timeline Completion */}
      {!preview && steps.length > 0 && (
        <div className="relative mt-12 flex flex-col items-center justify-center gap-4">

          <div className="h-12 w-px bg-gradient-to-b from-brand-400 to-transparent" />

          <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-3 rounded-full border border-brand-100 bg-brand-50 px-5 py-3 text-center shadow-sm transition-all duration-300 hover:border-brand-300 hover:shadow-[0_8px_30px_rgba(184,134,50,0.1)]">

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-white">
              <CheckCircle2 className="h-5 w-5" />
            </span>

            <span className="text-sm font-black text-slate-800">
              From Planning to Project Handover
            </span>

          </div>

        </div>
      )}

    </div>
  );
}
