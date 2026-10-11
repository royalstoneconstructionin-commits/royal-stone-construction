"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase-browser";

export default function AdminLoginPage() {
  const router = useRouter();
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { data, error: loginError } = await supabase.auth.signInWithPassword({ email, password });
    if (loginError || !data.user) {
      setLoading(false);
      setError("Invalid email or password.");
      return;
    }

    const { data: adminRow } = await supabase.from("admin_users").select("user_id").eq("user_id", data.user.id).maybeSingle();
    if (!adminRow) {
      await supabase.auth.signOut();
      setLoading(false);
      setError("This account is not authorized as an admin.");
      return;
    }

    router.push("/admin/dashboard");
    router.refresh();
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0d1728] px-5 py-10">
      <form onSubmit={handleSubmit} className="w-full max-w-md rounded-3xl bg-white p-7 shadow-2xl sm:p-9">
        <span className="text-xs font-black tracking-[0.18em] text-red-600">ROYAL STONE CONSTRUCTION</span>
        <h1 className="mt-3 text-3xl font-black text-slate-950">Admin Login</h1>
        <p className="mt-2 text-slate-600">Sign in to view and manage website leads.</p>
        <div className="mt-7 space-y-4">
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Admin Email" className="h-14 w-full rounded-2xl border border-slate-300 px-4 outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100" />
          <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="h-14 w-full rounded-2xl border border-slate-300 px-4 outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100" />
          {error && <div className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</div>}
          <button disabled={loading} className="h-14 w-full rounded-2xl bg-red-600 font-extrabold text-white transition hover:bg-red-700 disabled:opacity-60">{loading ? "Signing in..." : "Login"}</button>
        </div>
      </form>
    </main>
  );
}
