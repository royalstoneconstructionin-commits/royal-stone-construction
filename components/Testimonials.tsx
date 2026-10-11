
import {
  ArrowUpRight,
  CheckCircle2,
  MessageSquareQuote,
  Quote,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import type { Testimonial } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";

type TestimonialsProps = {
  testimonials: Testimonial[];
};

export default function Testimonials({
  testimonials,
}: TestimonialsProps) {
  const approved = testimonials.filter(
    (item) =>
      item.approved &&
      item.name.trim() &&
      item.quote.trim()
  );

  const visibleTestimonials = approved.slice(0, 3);

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-slate-50 via-white to-red-50/40 py-20 sm:py-24 lg:py-28">

      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-red-500/10 blur-[110px]" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-orange-400/10 blur-[130px]" />

      {/* Decorative Circles */}
      <div className="pointer-events-none absolute -right-40 -top-40 hidden h-[500px] w-[500px] rounded-full border border-red-500/10 lg:block" />

      <div className="pointer-events-none absolute -right-20 -top-20 hidden h-[300px] w-[300px] rounded-full border border-red-500/10 lg:block" />

      <div className="site-container relative z-10">

        {/* HEADER */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

          <SectionHeading
            eyebrow="CLIENT EXPERIENCES"
            title="A place for your stories."
            text="Thoughtful communication, transparent planning and a clear process are central to every project. Discover genuine experiences shared by our customers."
          />

          {/* Decorative Header Card */}
          <div className="group flex w-fit items-center gap-4 rounded-[22px] border border-red-100 bg-white/90 px-5 py-4 shadow-[0_10px_35px_rgba(220,38,38,0.07)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-red-300 hover:shadow-[0_15px_40px_rgba(220,38,38,0.13)]">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white">

              <MessageSquareQuote className="h-7 w-7" />

            </div>

            <div>
              <p className="text-sm font-black text-slate-950">
                Client Experiences
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Genuine feedback only
              </p>
            </div>

          </div>

        </div>

        {/* TESTIMONIAL CARDS */}
        {visibleTestimonials.length > 0 ? (

          <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">

            {visibleTestimonials.map((item, index) => (

              <figure
                key={`${item.name}-${index}`}
                className="group relative isolate flex h-full min-w-0 flex-col overflow-hidden rounded-[30px] border border-slate-200/90 bg-white p-7 shadow-[0_10px_35px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-red-300 hover:shadow-[0_25px_65px_rgba(220,38,38,0.13)] motion-reduce:transform-none sm:p-8"
              >

                {/* Card Background Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 -z-10 h-60 w-60 rounded-full bg-red-500/5 blur-[80px] transition-all duration-500 group-hover:bg-red-500/15" />

                <div className="pointer-events-none absolute -bottom-24 -left-20 -z-10 h-52 w-52 rounded-full bg-orange-400/5 blur-[80px] transition-all duration-500 group-hover:bg-orange-400/10" />

                {/* Large Decorative Quote */}
                <Quote
                  aria-hidden="true"
                  className="pointer-events-none absolute right-6 top-5 h-24 w-24 rotate-180 text-slate-100 transition-all duration-500 group-hover:scale-110 group-hover:text-red-50"
                  strokeWidth={1}
                />

                {/* TOP ROW */}
                <div className="relative z-10 flex items-start justify-between gap-3">

                  {/* Icon */}
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[20px] border border-red-100 bg-gradient-to-br from-red-50 to-white text-red-600 shadow-sm transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-[0_12px_35px_rgba(220,38,38,0.3)] motion-reduce:transform-none">

                    <MessageSquareQuote
                      className="h-8 w-8"
                      strokeWidth={1.8}
                    />

                  </div>

                  {/* Decorative Arrow */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-400 transition-all duration-300 group-hover:rotate-45 group-hover:border-red-200 group-hover:bg-red-50 group-hover:text-red-600 motion-reduce:transform-none">

                    <ArrowUpRight className="h-5 w-5" />

                  </div>

                </div>

                {/* Review Label */}
                <div className="relative z-10 mt-8 flex items-center gap-2">

                  <span className="h-2 w-2 rounded-full bg-red-600 shadow-[0_0_12px_rgba(220,38,38,0.4)]" />

                  <span className="text-xs font-black uppercase tracking-[0.16em] text-red-600">
                    Customer Feedback
                  </span>

                </div>

                {/* Quote Text */}
                <blockquote className="relative z-10 mt-5 flex-1">

                  <p className="break-words text-base font-medium leading-8 text-slate-700 transition-colors duration-300 group-hover:text-slate-900 sm:text-lg">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                </blockquote>

                {/* Divider */}
                <div className="relative z-10 mt-8 h-px w-full bg-gradient-to-r from-slate-200 via-slate-100 to-transparent transition-all duration-500 group-hover:from-red-300" />

                {/* CUSTOMER DETAILS */}
                <figcaption className="relative z-10 mt-6 flex items-center gap-4">

                  {/* Avatar Initial */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-red-700 text-xl font-black uppercase text-white shadow-[0_8px_25px_rgba(220,38,38,0.2)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_12px_35px_rgba(220,38,38,0.35)]">

                    {item.name.trim().charAt(0)}

                  </div>

                  {/* Name and City */}
                  <div className="min-w-0 flex-1">

                    <h3 className="break-words text-base font-black text-slate-950 transition-colors duration-300 group-hover:text-red-600 sm:text-lg">
                      {item.name}
                    </h3>

                    {item.city && (
                      <p className="mt-1 text-sm text-slate-500">
                        {item.city}
                      </p>
                    )}

                  </div>

                  {/* Approved Indicator */}
                  <CheckCircle2
                    className="h-5 w-5 shrink-0 text-emerald-500"
                    aria-label="Approved for publication"
                  />

                </figcaption>

                {/* Animated Bottom Line */}
                <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-700 via-red-500 to-orange-400 transition-all duration-500 group-hover:w-full" />

                {/* Light Sweep */}
                <div className="pointer-events-none absolute -left-32 top-0 h-full w-20 skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />

              </figure>

            ))}

          </div>

        ) : (

          /* NO APPROVED TESTIMONIALS */
          <div className="relative mt-12 overflow-hidden rounded-[32px] border border-dashed border-red-200 bg-white/90 px-6 py-14 text-center shadow-[0_12px_45px_rgba(15,23,42,0.04)] backdrop-blur-md sm:px-10 sm:py-20">

            {/* Background Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/5 blur-[100px]" />

            {/* Icon */}
            <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-[30px] border border-red-100 bg-gradient-to-br from-red-50 to-white text-red-600 shadow-[0_12px_35px_rgba(220,38,38,0.1)]">

              <MessageSquareQuote className="h-11 w-11" />

              <div className="absolute -right-2 -top-2 flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-white shadow-lg">

                <Sparkles className="h-4 w-4" />

              </div>

            </div>

            {/* Label */}
            <div className="relative mt-8 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-[0.15em] text-red-600">

              <span className="h-2 w-2 rounded-full bg-red-600" />

              CLIENT EXPERIENCES

            </div>

            {/* Heading */}
            <h3 className="relative mt-6 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
              Client Feedback Coming Soon
            </h3>

            {/* Description */}
            <p className="relative mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">

              We look forward to sharing genuine customer
              experiences here.

              <span className="mt-2 block">
                Feedback will be displayed once it has been
                received and approved for publication.
              </span>

            </p>

            {/* Informational Points */}
            <div className="relative mx-auto mt-9 flex max-w-xl flex-wrap items-center justify-center gap-3">

              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-bold text-slate-600">

                <ShieldCheck className="h-4 w-4 text-red-600" />

                Genuine Experiences

              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-bold text-slate-600">

                <Users className="h-4 w-4 text-red-600" />

                Customer Feedback

              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-bold text-slate-600">

                <CheckCircle2 className="h-4 w-4 text-red-600" />

                Approved for Publication

              </span>

            </div>

          </div>

        )}

        {/* BOTTOM INFORMATION BAR */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-[22px] border border-slate-200 bg-white/80 px-5 py-5 shadow-sm sm:flex-row sm:items-center sm:px-7">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">

              <ShieldCheck className="h-5 w-5" />

            </div>

            <div>
              <p className="text-sm font-black text-slate-900">
                Royal Stone Construction
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Customer experiences are published after approval.
              </p>
            </div>

          </div>

          <span className="text-xs font-bold uppercase tracking-[0.12em] text-red-600">
            Built on Trust
          </span>

        </div>

      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />

    </section>
  );
}
