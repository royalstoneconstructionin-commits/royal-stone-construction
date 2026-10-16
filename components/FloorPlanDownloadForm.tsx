"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { CheckCircle2, Download, Loader2 } from "lucide-react";
import type { FloorPlan } from "@/lib/floor-plans";

export default function FloorPlanDownloadForm({ plan }: { plan: FloorPlan }) {
  const [form, setForm] = useState({ name: "", mobile: "", address: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const request = useRef<AbortController | null>(null);
  const download = useRef<HTMLAnchorElement>(null);

  useEffect(() => () => request.current?.abort(), []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (request.current || success) return;
    setError("");
    if (!form.name.trim() || !form.address.trim()) {
      setError("Please enter your full name and address.");
      return;
    }
    if (!/^[0-9]{10}$/.test(form.mobile)) {
      setError("Please enter a valid 10 digit mobile number.");
      return;
    }
    const controller = new AbortController();
    request.current = controller;
    setLoading(true);
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, floorPlan: plan.image }),
        signal: controller.signal,
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        setError(result.error || "Unable to save your details. Please try again.");
        return;
      }
      setSuccess(true);
      download.current?.click();
    } catch {
      if (!controller.signal.aborted) setError("Unable to connect. Please check your connection and try again.");
    } finally {
      if (!controller.signal.aborted) setLoading(false);
      request.current = null;
    }
  }

  const fieldClass = "mt-2 min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-950 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200";

  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Floor plan download</p>
      <h3 className="mt-2 text-2xl font-extrabold text-slate-950">Your home starts with a plan.</h3>
      {!success && <p id="floor-plan-download-description" className="mt-3 text-sm leading-6 text-slate-600">Enter your details to download this map as a full-size PNG image. Our team may contact you about your floor plan requirements.</p>}
      <a ref={download} href={`/projects/${plan.image}.png`} download={`royal-stone-${plan.width}x${plan.length}-${plan.image}.png`} className={`${success ? "inline-flex" : "hidden"} mt-5 min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-bold text-white hover:bg-brand-700`}>
        <Download aria-hidden="true" className="h-4 w-4" />Download Map Again
      </a>
      {success ? (
        <div role="status" className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-6 text-emerald-800">
          <CheckCircle2 aria-hidden="true" className="mb-2 h-6 w-6" />
          Your details have been submitted and your map download has started. If it hasn’t started, use the download button above.
        </div>
      ) : (
        <form onSubmit={handleSubmit} aria-describedby="floor-plan-download-description" aria-busy={loading} className="mt-6 space-y-4">
          <fieldset disabled={loading} className="space-y-4 disabled:opacity-60">
            <label htmlFor="floor-plan-name" className="block text-sm font-bold text-slate-700">Full name <span aria-hidden="true">*</span>
              <input id="floor-plan-name" name="name" autoFocus required maxLength={200} autoComplete="name" value={form.name} onChange={event => setForm(prev => ({ ...prev, name: event.target.value }))} placeholder="Enter your full name" className={fieldClass} />
            </label>
            <label htmlFor="floor-plan-mobile" className="block text-sm font-bold text-slate-700">Mobile number <span aria-hidden="true">*</span>
              <input id="floor-plan-mobile" name="mobile" type="tel" required pattern="[0-9]{10}" maxLength={10} inputMode="numeric" autoComplete="tel-national" title="Enter a 10 digit mobile number" value={form.mobile} onChange={event => setForm(prev => ({ ...prev, mobile: event.target.value.replace(/\D/g, "").slice(0, 10) }))} placeholder="10 digit mobile number" className={fieldClass} />
            </label>
            <label htmlFor="floor-plan-address" className="block text-sm font-bold text-slate-700">Address <span aria-hidden="true">*</span>
              <textarea id="floor-plan-address" name="address" required maxLength={500} rows={3} autoComplete="street-address" value={form.address} onChange={event => setForm(prev => ({ ...prev, address: event.target.value }))} placeholder="House / street, city, state and PIN code" className={`${fieldClass} resize-y`} />
            </label>
          </fieldset>
          {error && <p role="alert" className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">{error}</p>}
          <button type="submit" disabled={loading} className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-bold text-white hover:bg-brand-700 disabled:cursor-wait disabled:opacity-60">
            {loading ? <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" /> : <Download aria-hidden="true" className="h-4 w-4" />}
            {loading ? "Submitting details…" : "Submit & Download Map"}
          </button>
        </form>
      )}
    </div>
  );
}
