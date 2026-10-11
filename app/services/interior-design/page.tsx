
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ClipboardCheck,
  DraftingCompass,
  Home,
  LampDesk,
  Layers3,
  Lightbulb,
  PaintBucket,
  Ruler,
  ShieldCheck,
  Sofa,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";

import ServiceDetail from "@/components/ServiceDetail";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Interior Design",
  description:
    "Explore Royal Stone Construction interior design services for homes and offices, modular kitchens, furniture, lighting and complete interior execution.",
};

const interiorServices = [
  {
    number: "01",
    title: "Home Interiors",
    description:
      "Thoughtful living rooms, bedrooms and functional spaces designed around your lifestyle.",
    icon: Home,
  },
  {
    number: "02",
    title: "Modular Kitchens",
    description:
      "Practical kitchen layouts, smart storage planning, cabinet finishes and modular solutions.",
    icon: UtensilsCrossed,
  },
  {
    number: "03",
    title: "Furniture & Storage",
    description:
      "Wardrobes, storage solutions, furniture planning and coordinated interior elements.",
    icon: Sofa,
  },
  {
    number: "04",
    title: "Lighting & Finishes",
    description:
      "Lighting concepts, colours, material combinations and finishing details.",
    icon: LampDesk,
  },
];

const designProcess = [
  {
    number: "01",
    title: "Understanding Your Space",
    description:
      "We discuss your requirements, room dimensions, preferences, budget and intended use of the space.",
    icon: Ruler,
  },
  {
    number: "02",
    title: "Design & Material Planning",
    description:
      "We explore layouts, furniture arrangements, lighting concepts and suitable material options.",
    icon: DraftingCompass,
  },
  {
    number: "03",
    title: "Execution & Finishing",
    description:
      "The agreed design scope guides interior work, installation coordination and finishing review.",
    icon: PaintBucket,
  },
];

const designPrinciples = [
  "Functional Space Planning",
  "Material & Colour Coordination",
  "Lighting & Furniture Layout",
  "Finishing & Detail Planning",
];

export default function InteriorDesignPage() {
  const service = services.find(
    (item) => item.slug === "interior-design"
  );

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* PREMIUM PAGE HEADER */}
      <section className="relative isolate overflow-hidden bg-[#08111f] py-8 text-white sm:py-10">
        <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-red-600/20 blur-[100px]" />

        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-orange-500/10 blur-[110px]" />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="site-container relative z-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition-colors duration-300 hover:text-red-300"
              >
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                Back to Services
              </Link>

              <div className="mt-5 flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-red-500/30 bg-red-500/10 text-red-400 shadow-[0_0_30px_rgba(239,68,68,0.12)]">
                  <Sofa className="h-7 w-7" />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-red-400">
                    LUXURY & FUNCTIONAL SPACES
                  </p>

                  <p className="mt-1 text-xl font-black tracking-tight sm:text-2xl">
                    Interior Design Services
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/get-quote"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-2xl bg-red-600 px-6 py-3 text-sm font-extrabold text-white shadow-[0_10px_30px_rgba(220,38,38,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-[0_15px_40px_rgba(220,38,38,0.35)] motion-reduce:transform-none"
            >
              Get Free Quote
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* EXISTING SERVICE DETAILS */}
      <ServiceDetail service={service} />

      {/* INTERIOR DESIGN SERVICES */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-slate-50 via-white to-red-50/40 py-20 sm:py-24 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-red-500/10 blur-[110px]" />

        <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-orange-400/10 blur-[120px]" />

        <div className="site-container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-white px-5 py-2.5 text-xs font-black uppercase tracking-[0.15em] text-red-600 shadow-sm">
              <Sparkles className="h-4 w-4" />
              INTERIOR SOLUTIONS
            </div>

            <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Beautiful Spaces.
              <span className="mt-2 block bg-gradient-to-r from-red-700 via-red-600 to-orange-500 bg-clip-text text-transparent">
                Thoughtfully Designed.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              From furniture layouts and modern kitchens to
              lighting, materials and finishing details,
              explore interior solutions planned around
              your requirements.
            </p>

            <div className="mx-auto mt-7 h-1 w-24 rounded-full bg-gradient-to-r from-red-600 to-orange-400" />
          </div>

          {/* SERVICES GRID */}
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {interiorServices.map(
              ({ number, title, description, icon: Icon }) => (
                <article
                  key={number}
                  className="group relative isolate flex h-full min-w-0 flex-col overflow-hidden rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-red-300 hover:shadow-[0_25px_65px_rgba(220,38,38,0.13)] motion-reduce:transform-none"
                >
                  <div className="pointer-events-none absolute -right-20 -top-20 -z-10 h-60 w-60 rounded-full bg-red-500/5 blur-[80px] transition-colors duration-500 group-hover:bg-red-500/15" />

                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-5 top-3 text-[78px] font-black leading-none text-slate-100 transition-colors duration-500 group-hover:text-red-50"
                  >
                    {number}
                  </span>

                  <div className="relative flex h-16 w-16 items-center justify-center rounded-[20px] border border-red-100 bg-red-50 text-red-600 transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-[0_12px_35px_rgba(220,38,38,0.3)] motion-reduce:transform-none">
                    <Icon className="h-8 w-8" />
                  </div>

                  <div className="relative mt-8 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-red-600" />
                    <span className="text-xs font-black uppercase tracking-[0.15em] text-red-600">
                      INTERIOR {number}
                    </span>
                  </div>

                  <h3 className="relative mt-5 text-xl font-black leading-snug text-slate-950 transition-colors duration-300 group-hover:text-red-600">
                    {title}
                  </h3>

                  <p className="relative mt-4 flex-1 leading-8 text-slate-600">
                    {description}
                  </p>

                  <div className="relative mt-8 h-px bg-gradient-to-r from-slate-200 to-transparent transition-colors duration-300 group-hover:from-red-300" />

                  <div className="relative mt-5 flex items-center justify-between">
                    <span className="flex items-center gap-2 text-xs font-bold text-slate-500">
                      <CheckCircle2 className="h-4 w-4 text-red-600" />
                      Interior Planning
                    </span>

                    <ArrowUpRight className="h-5 w-5 text-slate-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-600 motion-reduce:transform-none" />
                  </div>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-600 to-orange-400 transition-all duration-500 group-hover:w-full" />
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* DARK PREMIUM INTERIOR DESIGN SECTION */}
      <section className="relative isolate overflow-hidden bg-[#08111f] py-20 text-white sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-red-600/15 blur-[120px]" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-orange-500/10 blur-[130px]" />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />

        <div className="site-container relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-red-500/25 bg-red-500/10 px-4 py-2.5 text-xs font-black uppercase tracking-[0.15em] text-red-300">
                <Lightbulb className="h-4 w-4" />
                DESIGN PHILOSOPHY
              </div>

              <h2 className="mt-7 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Designed for Living.
                <span className="mt-2 block text-red-400">
                  Crafted for Comfort.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                Good interior design balances appearance,
                comfort and everyday practicality.
              </p>

              <p className="mt-4 max-w-xl leading-8 text-slate-400">
                Our approach considers how people use each
                space, the materials they prefer and the
                details that bring the complete design together.
              </p>

              <div className="mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-red-600 via-red-400 to-orange-400 shadow-[0_0_20px_rgba(239,68,68,0.25)]" />

              <Link
                href="/get-quote"
                className="group mt-9 inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-red-600 px-7 py-4 font-extrabold text-white shadow-[0_12px_35px_rgba(220,38,38,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-[0_18px_45px_rgba(220,38,38,0.35)] motion-reduce:transform-none"
              >
                Discuss Your Interior
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* RIGHT */}
            <div className="space-y-4">
              {designPrinciples.map((item, index) => (
                <div
                  key={item}
                  className="group relative flex items-center gap-5 overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-md transition-all duration-300 hover:translate-x-1 hover:border-red-500/40 hover:bg-white/[0.09] motion-reduce:transform-none sm:p-6"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10 text-red-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white motion-reduce:transform-none">
                    {index === 0 ? (
                      <Ruler className="h-6 w-6" />
                    ) : index === 1 ? (
                      <Layers3 className="h-6 w-6" />
                    ) : index === 2 ? (
                      <LampDesk className="h-6 w-6" />
                    ) : (
                      <PaintBucket className="h-6 w-6" />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-black uppercase tracking-wider text-red-400">
                      DESIGN PRINCIPLE {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3 className="mt-2 text-base font-black text-white sm:text-lg">
                      {item}
                    </h3>
                  </div>

                  <CheckCircle2 className="h-5 w-5 shrink-0 text-red-400" />

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-600 to-orange-400 transition-all duration-500 group-hover:w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTERIOR DESIGN PROCESS */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-red-500/5 blur-[100px]" />

        <div className="site-container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-5 py-2.5 text-xs font-black uppercase tracking-[0.15em] text-red-600">
              <ClipboardCheck className="h-4 w-4" />
              OUR DESIGN PROCESS
            </div>

            <h2 className="mt-6 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              From Ideas to{" "}
              <span className="text-red-600">
                Beautiful Interiors.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
              A structured approach helps connect your
              design preferences, practical needs and
              final interior execution.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {designProcess.map(
              ({ number, title, description, icon: Icon }) => (
                <article
                  key={number}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-7 shadow-[0_10px_35px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-red-300 hover:shadow-[0_20px_55px_rgba(220,38,38,0.12)] motion-reduce:transform-none sm:p-8"
                >
                  <span
                    aria-hidden="true"
                    className="absolute right-5 top-3 text-[78px] font-black leading-none text-slate-100"
                  >
                    {number}
                  </span>

                  <div className="relative flex h-16 w-16 items-center justify-center rounded-[20px] bg-red-50 text-red-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-[0_10px_30px_rgba(220,38,38,0.25)] motion-reduce:transform-none">
                    <Icon className="h-8 w-8" />
                  </div>

                  <p className="relative mt-8 text-xs font-black uppercase tracking-[0.15em] text-red-600">
                    STEP {number}
                  </p>

                  <h3 className="relative mt-4 text-xl font-black text-slate-950 sm:text-2xl">
                    {title}
                  </h3>

                  <p className="relative mt-4 flex-1 leading-8 text-slate-600">
                    {description}
                  </p>

                  <div className="relative mt-8 h-px bg-slate-200" />

                  <div className="relative mt-5 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500">
                      Interior Design Workflow
                    </span>

                    <ArrowUpRight className="h-5 w-5 text-red-600 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transform-none" />
                  </div>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-600 to-orange-400 transition-all duration-500 group-hover:w-full" />
                </article>
              )
            )}
          </div>

          {/* SCOPE NOTE */}
          <div className="mt-10 flex items-start gap-4 rounded-[24px] border border-red-100 bg-red-50/70 p-6 sm:p-8">
            <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-red-600" />

            <div>
              <h3 className="text-lg font-black text-slate-950">
                Interior Scope & Specifications
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Furniture, modular kitchens, material brands,
                finishes, lighting installations and execution
                timelines depend on the final agreed quotation
                and project scope.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#08111f] py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-red-600/15 blur-[100px]" />

        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-orange-500/10 blur-[110px]" />

        <div className="site-container relative z-10">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="flex items-start gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[20px] bg-red-600 text-white shadow-[0_10px_30px_rgba(220,38,38,0.3)]">
                <Sofa className="h-8 w-8" />
              </div>

              <div className="max-w-2xl">
                <p className="text-xs font-black uppercase tracking-[0.15em] text-red-400">
                  START YOUR INTERIOR PROJECT
                </p>

                <h2 className="mt-3 text-2xl font-black leading-tight sm:text-3xl">
                  Ready to Transform Your Interior?
                </h2>

                <p className="mt-4 leading-8 text-slate-300">
                  Share your room dimensions, preferences,
                  requirements and budget to discuss
                  an interior design plan.
                </p>
              </div>
            </div>

            <Link
              href="/get-quote"
              className="group inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-2xl bg-red-600 px-7 py-4 font-extrabold text-white shadow-[0_12px_35px_rgba(220,38,38,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-[0_18px_45px_rgba(220,38,38,0.35)] motion-reduce:transform-none"
            >
              Get Interior Design Quote
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
