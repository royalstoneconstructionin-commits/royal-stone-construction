"use client";

import { FormEvent, useMemo, useState } from "react";
import { CheckCircle2 } from "lucide-react";
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

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setSuccess(false);

    if (!form.name.trim() || !form.mobile.trim() || !form.city.trim() || !form.purpose) {
      setMessage("Please fill all fields.");
      return;
    }

    if (!/^[0-9]{10}$/.test(form.mobile)) {
      setMessage("Please enter a valid 10 digit mobile number.");
      return;
    }

    if (!supabase) {
      setMessage("Online enquiries are currently unavailable. Please contact us using the details below.");
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("leads").insert({
      name: form.name.trim(),
      mobile: form.mobile,
      city: form.city.trim(),
      purpose: form.purpose,
    });
    setLoading(false);

    if (error) {
      console.error(error);
      setMessage("Unable to submit enquiry. Please try again or contact us using the details below.");
      return;
    }

    setSuccess(true);
    setMessage("Thank you! Your enquiry has been submitted successfully.");
    setForm(emptyForm);
  }

  return (
    <div id="lead-form" className="w-full max-w-xl rounded-[28px] border border-white/60 bg-white p-6 shadow-2xl shadow-slate-900/15 sm:p-8">
      <div className="mb-6 text-center">
        <span className="inline-flex rounded-full bg-red-50 px-4 py-2 text-xs font-black tracking-[0.15em] text-red-600">FREE CONSULTATION</span>
        <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Talk to Our Experts</h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600 sm:text-base">Tell us what you need. Our team will contact you regarding your project.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
          placeholder="Full Name"
          autoComplete="name"
          className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
        />
        <input
          type="tel"
          value={form.mobile}
          onChange={(e) => setForm((p) => ({ ...p, mobile: e.target.value.replace(/\D/g, "").slice(0, 10) }))}
          placeholder="Mobile Number"
          inputMode="numeric"
          autoComplete="tel"
          className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
        />
        <input
          type="text"
          value={form.city}
          onChange={(e) => setForm((p) => ({ ...p, city: e.target.value }))}
          placeholder="City"
          autoComplete="address-level2"
          className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
        />
        <select
          value={form.purpose}
          onChange={(e) => setForm((p) => ({ ...p, purpose: e.target.value }))}
          className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-4 text-slate-900 outline-none transition focus:border-red-500 focus:ring-4 focus:ring-red-100"
        >
          <option value="">Select Your Purpose</option>
          <option value="Architecture">Architecture</option>
          <option value="Construction with Material">Construction with Material</option>
          <option value="Interior Design">Interior Design</option>
          <option value="Other">Other</option>
        </select>

        <button
          type="submit"
          disabled={loading}
          className="h-14 w-full rounded-2xl bg-red-600 text-lg font-extrabold text-white shadow-xl shadow-red-600/20 transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Submit Enquiry"}
        </button>

        {message && (
          <div className={`flex items-start gap-2 rounded-xl px-4 py-3 text-sm font-semibold ${success ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"}`}>
            {success && <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />}
            <span>{message}</span>
          </div>
        )}
      </form>
    </div>
  );
}
