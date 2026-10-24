"use client";

import { FormEvent, useEffect, useId, useRef, useState } from "react";
import { packageData } from "@/lib/design-packages";
import { constructionPackages } from "@/lib/construction-packages";
import { vastuDirections, vastuRequirements } from "@/lib/vastu";
import { calculateDesignEstimate, designEstimateNote, formatArea, formatMoney, type DesignEstimate } from "@/lib/design-estimate";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Loader2,
  MapPin,
  Phone,
  User,
} from "lucide-react";

type LeadFormState = {
  name: string;
  mobile: string;
  city: string;
  purpose: string;
};

const emptyForm: LeadFormState = {
  name: "",
  mobile: "",
  city: "",
  purpose: "",
};

export default function LeadForm({ compact = false, variant = "general" }: { compact?: boolean; variant?: "general" | "vastu" }) {
  const messageId = useId();
  const fieldId = useId();
  const [optional, setOptional] = useState({ projectType: "", projectArea: "", preferredStart: "", budget: "" });
  const [form, setForm] = useState<LeadFormState>({ ...emptyForm, purpose: variant === "vastu" ? "Vastu Shastra" : "" });
  const [vastu, setVastu] = useState({ plotSize: "", plotFacing: "", serviceRequirement: "", additionalMessage: "" });
  const isVastu = form.purpose === "Vastu Shastra";
  const Heading = variant === "vastu" ? "h3" : "h2";
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const submitting = useRef(false);
  const [selectedPackage, setSelectedPackage] = useState("");
  const [selectedEstimate, setSelectedEstimate] = useState<DesignEstimate | null>(null);

  useEffect(() => {
    const selectPackage = (city: string, name: string) => {
      if (city !== "Patna" && city !== "Noida") return;
      if (!packageData[city].some(item => item.name === name)) return;
      setForm(prev => ({ ...prev, city, purpose: "Architecture" }));
      setSelectedPackage(name);
      setSelectedEstimate(null);
    };
    const params = new URLSearchParams(window.location.search);
    const initialCity = params.get("city");
    const initialPurpose = params.get("purpose");
    if (initialCity === "Patna" || initialCity === "Noida") setForm(prev => ({ ...prev, city: initialCity }));
    if (variant === "general" && ["Architecture", "Construction with Material", "Interior Design", "Turnkey Project", "Vastu Shastra", "Other"].includes(initialPurpose ?? "")) setForm(prev => ({ ...prev, purpose: initialPurpose! }));
    if (variant === "general") selectPackage(params.get("city") ?? "", params.get("package") ?? "");
    if (variant === "general") setSelectedEstimate(calculateDesignEstimate(params.get("city") ?? "", params.get("package") ?? "", params.get("area")));
    if (variant === "general" && initialPurpose === "Construction with Material" && constructionPackages.some(pkg => pkg.name === params.get("package"))) {
      setSelectedPackage(params.get("package")!);
      setSelectedEstimate(null);
    }
    const onPackage = (event: Event) => {
      const detail = (event as CustomEvent<{ city: string; name: string }>).detail;
      if (variant === "general" && detail) selectPackage(detail.city, detail.name);
    };
    window.addEventListener("royal-stone-package", onPackage);
    return () => window.removeEventListener("royal-stone-package", onPackage);
  }, [variant]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;

    setMessage("");
    setSuccess(false);

    if (
      !form.name.trim() ||
      !form.mobile.trim() ||
      !form.city.trim() ||
      !form.purpose
    ) {
      setMessage("Please fill all fields.");
      return;
    }

    if (!/^[0-9]{10}$/.test(form.mobile)) {
      setMessage("Please enter a valid 10 digit mobile number.");
      return;
    }

    submitting.current = true;
    setLoading(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          ...optional,
          ...(isVastu ? vastu : {}),
          packageName: selectedPackage,
          estimateArea: selectedEstimate?.area,
        }),
      });
      const result = await response.json();
      if (!response.ok) {
        setMessage(result.error || "Unable to submit enquiry. Please try again or contact us directly.");
        return;
      }

      setSuccess(true);
      setMessage(
        "Thank you! Your enquiry has been submitted successfully."
      );
      setForm({ ...emptyForm, purpose: variant === "vastu" ? "Vastu Shastra" : "" });
      setVastu({ plotSize: "", plotFacing: "", serviceRequirement: "", additionalMessage: "" });
      setOptional({ projectType: "", projectArea: "", preferredStart: "", budget: "" });
      setSelectedPackage("");
      setSelectedEstimate(null);
    } catch (error) {
      console.error("Lead submission error:", error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      submitting.current = false;
      setLoading(false);
    }
  }

  const fieldClass = compact
    ? "h-11 w-full rounded-lg border border-slate-300 bg-white px-4 text-base text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/10"
    : "h-14 w-full rounded-2xl border border-slate-200 bg-slate-50/70 pl-12 pr-4 font-medium text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/10";
  const detailFieldClass = fieldClass.replace("pl-12", "pl-4");

  return (
    <div
      id="lead-form"
      className={compact ? "relative w-full overflow-hidden rounded-2xl bg-white shadow-[0_12px_40px_rgba(0,0,0,0.16)]" : "group relative w-full max-w-xl overflow-hidden rounded-[32px] border border-white/70 bg-white/95 p-1 shadow-[0_30px_80px_rgba(11,24,32,0.18)] backdrop-blur-xl"}
    >
      {!compact && <>
      {/* Animated Border Glow */}
      <div className="pointer-events-none absolute -inset-[2px] -z-10 rounded-[34px] bg-gradient-to-r from-brand-600 via-brand-400 to-brand-600 opacity-30 blur-md transition duration-500 group-hover:opacity-60" />

      {/* Background Effects */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-brand-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-brand-400/10 blur-3xl" />

      </>}

      <div className={`relative rounded-[28px] bg-white ${compact ? "px-4 py-5 sm:px-5" : "px-5 py-7 sm:px-8 sm:py-9"}`}>
        {/* Header */}
        <div className={`${compact ? "mb-4" : "mb-7"} text-center`}>
          {!compact && (
          <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-xs font-black tracking-[0.16em] text-brand-600 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-600" />
            </span>
            FREE CONSULTATION
          </div>
          )}

          <Heading className={compact ? "text-xl font-bold tracking-tight text-slate-950 sm:text-2xl" : "bg-gradient-to-r from-slate-950 via-slate-800 to-brand-600 bg-clip-text text-3xl font-black tracking-tight text-transparent sm:text-4xl"}>
            {variant === "vastu" ? "Discuss Your Vastu Requirements" : "Talk to Our Experts"}
          </Heading>

          <p className={`mx-auto max-w-md text-sm text-slate-500 ${compact ? "mt-2 leading-5 text-slate-600" : "mt-3 leading-6 sm:text-base"}`}>
            Tell us about your project and our construction experts will contact
            you shortly.
          </p>
        </div>

        <form onSubmit={handleSubmit} aria-describedby={message ? messageId : undefined} className={compact ? "space-y-2.5" : "space-y-4"}>
          {selectedPackage && (form.purpose === "Architecture" || form.purpose === "Construction with Material") && (
            <div className="flex items-center justify-between gap-3 rounded-lg border border-brand-100 bg-brand-50 px-3 py-2 text-sm text-brand-700">
              <span>Selected: {selectedPackage} · {form.purpose === "Architecture" ? form.city : "Construction"}</span>
              <button type="button" onClick={() => { setSelectedPackage(""); setSelectedEstimate(null); }} className="min-h-11 font-semibold underline">Clear</button>
            </div>
          )}
          {selectedEstimate && (
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700">
              <p className="font-bold text-slate-950">Selected Design Estimate · Architecture</p>
              <p>{selectedEstimate.city} · {selectedEstimate.packageName}</p>
              <p>Area to Be Designed: {formatArea(selectedEstimate.area)} sqft</p>
              <p>{formatArea(selectedEstimate.area)} sqft × {formatMoney(selectedEstimate.rate)}/sqft = {formatMoney(selectedEstimate.fee)}</p>
              <p className="font-bold text-brand-600">Estimated Design Fee: {formatMoney(selectedEstimate.fee)}</p>
              <p className="mt-2 text-xs text-slate-500">{designEstimateNote}</p>
            </div>
          )}
          {/* Name */}
          <div className="group/input relative">
            {!compact && (<User className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 transition group-focus-within/input:text-brand-500" />)}

            <input
              type="text"
              value={form.name}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
              placeholder="Full Name"
              aria-label="Full Name"
              required
              maxLength={200}
              autoComplete="name"
              className={fieldClass}
            />
          </div>

          {/* Mobile */}
          <div className="group/input relative">
            {!compact && (<Phone className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 transition group-focus-within/input:text-brand-500" />)}

            <input
              type="tel"
              value={form.mobile}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  mobile: e.target.value
                    .replace(/\D/g, "")
                    .slice(0, 10),
                }))
              }
              placeholder="Mobile Number"
              aria-label="Mobile Number"
              required
              pattern="[0-9]{10}"
              title="Enter a 10 digit mobile number"
              inputMode="numeric"
              autoComplete="tel"
              className={fieldClass}
            />
          </div>

          {/* City */}
          <div className="group/input relative">
            {!compact && (<MapPin className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 transition group-focus-within/input:text-brand-500" />)}

            <input
              type="text"
              value={form.city}
              onChange={(e) => {
                setSelectedEstimate(null);
                if (form.purpose !== "Construction with Material") setSelectedPackage("");
                setForm((prev) => ({
                  ...prev,
                  city: e.target.value,
                }));
              }}
              placeholder="City"
              aria-label="City"
              required
              maxLength={200}
              autoComplete="address-level2"
              className={fieldClass}
            />
          </div>

          {/* Purpose */}
          {variant === "vastu" ? <p className="rounded-lg border border-brand-100 bg-brand-50 px-4 py-3 text-sm font-semibold text-brand-700">Selected service: Vastu Shastra</p> : <div className="group/input relative">
            {!compact && (<Building2 className="pointer-events-none absolute left-4 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-slate-400 transition group-focus-within/input:text-brand-500" />)}

            <select
              aria-label="Requirement / Purpose"
              required
              value={form.purpose}
              onChange={(e) => {
                setSelectedEstimate(null);
                setSelectedPackage("");
                setForm((prev) => ({
                  ...prev,
                  purpose: e.target.value,
                }));
              }}
              className={compact ? `${fieldClass} pr-9` : "h-14 w-full appearance-none rounded-2xl border border-slate-200 bg-slate-50/70 pl-12 pr-10 font-medium text-slate-900 outline-none transition-all duration-300 hover:border-slate-300 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/10"}
            >
              <option value="">Select Your Requirement</option>
              <option value="Architecture">
                Architecture / House Map Design
              </option>
              <option value="Construction with Material">
                Construction with Material
              </option>
              <option value="Interior Design">Interior Design</option>
              <option value="Turnkey Project">Turnkey Project</option>
              <option value="Vastu Shastra">Vastu Shastra</option>
              <option value="Other">Other</option>
            </select>

            {!compact && (
            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400">
              ▼
            </div>
            )}
          </div>}

          {isVastu && <fieldset className="space-y-4">
            <legend className="mb-3 text-sm font-bold text-slate-900">Your plot & consultation</legend>
            <label htmlFor={`${fieldId}-size`} className="block text-sm font-semibold text-slate-700">Plot Size <span className="font-normal">(optional)</span>
              <input id={`${fieldId}-size`} value={vastu.plotSize} onChange={event => setVastu(prev => ({ ...prev, plotSize: event.target.value }))} maxLength={200} placeholder="e.g. 30 × 40 ft or 1,200 sqft" className={`${detailFieldClass} mt-2`} />
            </label>
            <label htmlFor={`${fieldId}-facing`} className="block text-sm font-semibold text-slate-700">Plot Facing Direction <span className="font-normal">(optional)</span>
              <select id={`${fieldId}-facing`} value={vastu.plotFacing} onChange={event => setVastu(prev => ({ ...prev, plotFacing: event.target.value }))} className={`${detailFieldClass} mt-2`}>
                <option value="">Select direction</option>
                {vastuDirections.map(direction => <option key={direction}>{direction}</option>)}
                <option>Not sure</option>
              </select>
            </label>
            <label htmlFor={`${fieldId}-requirement`} className="block text-sm font-semibold text-slate-700">Service Requirement
              <select id={`${fieldId}-requirement`} required value={vastu.serviceRequirement} onChange={event => setVastu(prev => ({ ...prev, serviceRequirement: event.target.value }))} className={`${detailFieldClass} mt-2`}>
                <option value="">Select consultation type</option>
                {vastuRequirements.map(requirement => <option key={requirement}>{requirement}</option>)}
              </select>
            </label>
            <label htmlFor={`${fieldId}-message`} className="block text-sm font-semibold text-slate-700">Additional Message <span className="font-normal">(optional)</span>
              <textarea id={`${fieldId}-message`} value={vastu.additionalMessage} onChange={event => setVastu(prev => ({ ...prev, additionalMessage: event.target.value }))} maxLength={2000} rows={4} placeholder="Tell us about your rooms, existing plan or design preferences." className={`${detailFieldClass.replace(/h-(11|14)/, "h-auto")} mt-2 min-h-28 py-3`} />
            </label>
          </fieldset>}

          {/* Submit Button */}
          {variant !== "vastu" && <details className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700">
            <summary className="min-h-11 cursor-pointer content-center font-semibold">Additional project details (optional)</summary>
            <div className="mt-3 space-y-3 pb-2">{([
              ["projectType", "Project type", "e.g. Home or commercial space"],
              ["projectArea", "Plot / design area", "Include units, e.g. 1000 sqft"],
              ["preferredStart", "Preferred start time", "e.g. Next month"],
              ["budget", "Approximate budget", "Include currency, if known"],
            ] as const).map(([key, label, placeholder]) => <label key={key} className="block font-medium">{label}<input value={optional[key]} onChange={event => setOptional(prev => ({ ...prev, [key]: event.target.value }))} maxLength={200} placeholder={placeholder} className="mt-2 min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-base text-slate-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200" /></label>)}</div>
          </details>}
          <button
            type="submit"
            disabled={loading}
            className={compact ? "flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-brand-600 text-base font-bold text-white transition-colors hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-200 disabled:cursor-not-allowed disabled:opacity-60" : "group/button relative flex h-14 w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-brand-600 to-brand-700 text-base font-extrabold text-white shadow-[0_12px_35px_rgba(184,134,50,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(184,134,50,0.38)] disabled:cursor-not-allowed disabled:opacity-60"}
          >
            {/* Button Light Sweep */}
            {!compact && (<span className="absolute -left-20 top-0 h-full w-14 skew-x-[-25deg] bg-white/20 blur-sm transition-all duration-700 group-hover/button:left-[120%]" />)}

            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Submit Enquiry
                {!compact && (<ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/button:translate-x-1" />)}
              </>
            )}
          </button>

          {/* Message */}
          {message && (
            <div
              role="status"
              id={messageId}
              className={`flex items-start gap-3 rounded-2xl border px-4 py-3.5 text-sm font-semibold ${
                success
                  ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                  : "border-red-200 bg-red-50 text-red-700"
              }`}
            >
              {success && (
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
              )}

              <span>{message}</span>
            </div>
          )}

          {/* Trust */}
          <div className="flex items-center justify-center gap-2 pt-1 text-xs text-slate-400">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <span>Your information is safe & secure.</span>
          </div>
        </form>
      </div>
    </div>
  );
}
