"use client";

import { FormEvent, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Loader2,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import { createSupabaseBrowserClient } from "@/lib/supabase-browser";

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

export default function LeadForm() {
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);
  const [form, setForm] = useState<LeadFormState>(emptyForm);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const submitting = useRef(false);

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

    if (!supabase) {
      setMessage(
        "Online enquiries are currently unavailable. Please contact us directly."
      );
      return;
    }

    submitting.current = true;
    setLoading(true);

    try {
      const { error } = await supabase.from("leads").insert({
        name: form.name.trim(),
        mobile: form.mobile.trim(),
        city: form.city.trim(),
        purpose: form.purpose,
      });

      if (error) {
        console.error("Supabase Error:", error);
        setMessage(
          "Unable to submit enquiry. Please try again or contact us directly."
        );
        return;
      }

      setSuccess(true);
      setMessage(
        "Thank you! Your enquiry has been submitted successfully."
      );
      setForm(emptyForm);
    } catch (error) {
      console.error("Lead submission error:", error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      submitting.current = false;
      setLoading(false);
    }
  }

  return (
    <div
      id="lead-form"
      className="group relative w-full max-w-xl overflow-hidden rounded-[32px] border border-white/70 bg-white/95 p-1 shadow-[0_30px_80px_rgba(15,23,42,0.18)] backdrop-blur-xl"
    >
      {/* Animated Border Glow */}
      <div className="pointer-events-none absolute -inset-[2px] -z-10 rounded-[34px] bg-gradient-to-r from-red-600 via-orange-400 to-red-600 opacity-30 blur-md transition duration-500 group-hover:opacity-60" />

      {/* Background Effects */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-red-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-orange-400/10 blur-3xl" />

      <div className="relative rounded-[28px] bg-white px-5 py-7 sm:px-8 sm:py-9">
        {/* Header */}
        <div className="mb-7 text-center">
          <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-xs font-black tracking-[0.16em] text-red-600 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-600" />
            </span>
            FREE CONSULTATION
          </div>

          <h2 className="bg-gradient-to-r from-slate-950 via-slate-800 to-red-600 bg-clip-text text-3xl font-black tracking-tight text-transparent sm:text-4xl">
            Talk to Our Experts
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500 sm:text-base">
            Tell us about your project and our construction experts will contact
            you shortly.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div className="group/input relative">
            <User className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 transition group-focus-within/input:text-red-500" />

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
              autoComplete="name"
              className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50/70 pl-12 pr-4 font-medium text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
            />
          </div>

          {/* Mobile */}
          <div className="group/input relative">
            <Phone className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 transition group-focus-within/input:text-red-500" />

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
              inputMode="numeric"
              autoComplete="tel"
              className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50/70 pl-12 pr-4 font-medium text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
            />
          </div>

          {/* City */}
          <div className="group/input relative">
            <MapPin className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 transition group-focus-within/input:text-red-500" />

            <input
              type="text"
              value={form.city}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  city: e.target.value,
                }))
              }
              placeholder="City"
              aria-label="City"
              autoComplete="address-level2"
              className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50/70 pl-12 pr-4 font-medium text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
            />
          </div>

          {/* Purpose */}
          <div className="group/input relative">
            <Building2 className="pointer-events-none absolute left-4 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-slate-400 transition group-focus-within/input:text-red-500" />

            <select
              aria-label="Requirement / Purpose"
              value={form.purpose}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  purpose: e.target.value,
                }))
              }
              className="h-14 w-full appearance-none rounded-2xl border border-slate-200 bg-slate-50/70 pl-12 pr-10 font-medium text-slate-900 outline-none transition-all duration-300 hover:border-slate-300 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"
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
              <option value="Other">Other</option>
            </select>

            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400">
              ▼
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="group/button relative flex h-14 w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-red-600 to-red-700 text-base font-extrabold text-white shadow-[0_12px_35px_rgba(220,38,38,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(220,38,38,0.38)] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {/* Button Light Sweep */}
            <span className="absolute -left-20 top-0 h-full w-14 skew-x-[-25deg] bg-white/20 blur-sm transition-all duration-700 group-hover/button:left-[120%]" />

            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Submit Enquiry
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/button:translate-x-1" />
              </>
            )}
          </button>

          {/* Message */}
          {message && (
            <div
              role="status"
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
