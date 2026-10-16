"use client";

import Image from "next/image";
import FloorPlanDownloadForm from "@/components/FloorPlanDownloadForm";
import { floorPlans as plans } from "@/lib/floor-plans";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Building2, Expand, Home, Ruler, Search, X } from "lucide-react";

const categories = ["All Plans", "Residential", "Duplex", "Apartment"];
const normalise = (value: string) => value.toLowerCase().replace(/[×x*\s,–—-]/g, "");

export default function ArchitecturePlanGallery() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Plans");
  const [selected, setSelected] = useState<(typeof plans)[number] | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const visible = plans.filter(plan =>
    (category === "All Plans" || plan.category === category) &&
    normalise(`${plan.title} ${plan.category} ${plan.layout} ${plan.width * plan.length} sqft`).includes(normalise(search)),
  );

  useEffect(() => {
    if (!selected) return;
    const modal = dialog.current;
    const previousOverflow = document.body.style.overflow;
    modal?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      modal?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [selected]);

  return (
    <section id="floor-plan-gallery" aria-labelledby="floor-plans-heading" className="border-y border-slate-200 bg-slate-50 py-14 sm:py-20">
      <div className="site-container">
        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-600">Royal Stone Design Collection</p>
            <h2 id="floor-plans-heading" className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Find a floor plan for your home.</h2>
            <p className="mt-4 leading-7 text-slate-600">Explore house layouts, duplex designs and apartment plans for different plot sizes. Choose a design and fill in your details to download the floor plan.</p>
          </div>
          <div className="relative w-full lg:w-80 lg:shrink-0">
            <label htmlFor="floor-plan-search" className="sr-only">Search floor plans by plot size or layout</label>
            <Search aria-hidden="true" className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input id="floor-plan-search" type="search" value={search} onChange={event => setSearch(event.target.value)} placeholder="Search plot size, e.g. 20 x 40" className="min-h-12 w-full rounded-xl border border-slate-200 bg-white py-3 pl-12 pr-4 text-sm text-slate-900" />
          </div>
        </div>

        <div className="my-8 flex flex-wrap items-center justify-between gap-4 border-y border-slate-200 py-5">
          <div role="group" aria-label="Filter floor plans" className="flex flex-wrap gap-2">
            {categories.map(item => (
              <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)} className={`min-h-11 rounded-lg border px-4 py-2 text-sm font-bold transition-colors ${category === item ? "border-brand-600 bg-brand-600 text-white" : "border-slate-200 bg-white text-slate-600 hover:border-brand-300 hover:text-brand-700"}`}>{item}</button>
            ))}
          </div>
          <p role="status" className="text-sm text-slate-500">Showing {visible.length} of {plans.length} plans</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map(plan => (
            <article key={plan.image} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
              <button type="button" onClick={() => setSelected(plan)} aria-label={`View ${plan.title}`} aria-haspopup="dialog" className="relative block w-full bg-white p-3 text-left">
                <div className="relative aspect-square overflow-hidden rounded-xl bg-slate-50">
                  <Image src={`/projects/${plan.image}.png`} alt={`${plan.title}, ${plan.layout}, Royal Stone Construction concept`} fill sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw" className="object-contain transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transform-none" />
                </div>
                <span className="absolute bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-brand-100 bg-white/95 text-brand-600 shadow-sm"><Expand aria-hidden="true" className="h-4 w-4" /></span>
              </button>
              <div className="px-5 pb-5 pt-2">
                <span className="rounded-md bg-brand-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-700">{plan.category} concept</span>
                <h3 className="mt-3 text-xl font-extrabold text-slate-950">{plan.title}</h3>
                <dl className="mt-5 grid grid-cols-2 gap-x-3 gap-y-4 border-y border-slate-100 py-4 text-sm">
                  <div><dt className="flex items-center gap-1.5 text-xs text-slate-500"><Ruler aria-hidden="true" className="h-3.5 w-3.5 text-brand-600" />Plot size</dt><dd className="mt-1 font-bold">{plan.width} × {plan.length} ft</dd></div>
                  <div><dt className="text-xs text-slate-500">Plot area</dt><dd className="mt-1 font-bold">{(plan.width * plan.length).toLocaleString("en-IN")} sq ft</dd></div>
                  <div><dt className="flex items-center gap-1.5 text-xs text-slate-500"><Home aria-hidden="true" className="h-3.5 w-3.5 text-brand-600" />Layout</dt><dd className="mt-1 font-bold">{plan.layout}</dd></div>
                  <div><dt className="flex items-center gap-1.5 text-xs text-slate-500"><Building2 aria-hidden="true" className="h-3.5 w-3.5 text-brand-600" />Design</dt><dd className="mt-1 font-bold">{plan.category}</dd></div>
                </dl>
                <button type="button" onClick={() => setSelected(plan)} aria-label={`View details for ${plan.title}`} aria-haspopup="dialog" className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-600">View Floor Plan <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></button>
              </div>
            </article>
          ))}
        </div>

        {visible.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
            <h3 className="text-xl font-bold">No matching floor plans</h3>
            <p className="mt-2 text-slate-600">Try another plot size or explore all designs.</p>
            <button type="button" onClick={() => { setSearch(""); setCategory("All Plans"); }} className="mt-5 min-h-11 rounded-xl bg-brand-600 px-5 py-3 font-bold text-white">Reset filters</button>
          </div>
        )}

        <div className="mt-9 flex flex-col justify-between gap-5 rounded-2xl border border-brand-200 bg-brand-50 p-6 sm:flex-row sm:items-center">
          <div><h3 className="text-lg font-bold">Your plot. Your requirements. Your plan.</h3><p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600">These are illustrative concepts with approximate dimensions. Share your plot size and room requirements for a customised layout.</p></div>
          <Link href="/get-quote" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-bold text-white hover:bg-brand-700">Get a Custom Plan <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link>
        </div>
      </div>

      <dialog ref={dialog} aria-labelledby="floor-plan-dialog-title" onCancel={() => setSelected(null)} onClose={() => setSelected(null)} onClick={event => { if (event.target === event.currentTarget) setSelected(null); }} className="fixed inset-0 m-auto max-h-[92dvh] w-[calc(100%-2rem)] max-w-5xl overflow-y-auto rounded-2xl border-0 bg-white p-0 text-slate-950 shadow-2xl backdrop:bg-slate-950/80 backdrop:backdrop-blur-sm">
        {selected && <>
          <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-slate-200 bg-white px-5 py-4">
            <h2 id="floor-plan-dialog-title" className="text-lg font-bold">{selected.title}</h2>
            <button type="button" onClick={() => setSelected(null)} aria-label="Close floor plan" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200"><X aria-hidden="true" className="h-5 w-5" /></button>
          </div>
          <div className="grid items-start gap-6 p-5 sm:p-6 lg:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
              <Image src={`/projects/${selected.image}.png`} alt={`${selected.title} concept drawing`} width={1536} height={1536} sizes="(min-width: 1024px) 460px, 100vw" className="h-auto w-full object-contain" />
              <p className="mt-3 text-center text-xs leading-5 text-slate-500">Illustrative concept. Dimensions are approximate.</p>
            </div>
            <FloorPlanDownloadForm key={selected.image} plan={selected} />
          </div>
        </>}
      </dialog>
    </section>
  );
}
