
"use client";

import {
  useMemo,
  useRef,
  useState,
  type FormEvent,
} from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  Eye,
  EyeOff,
  KeyRound,
  Loader2,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { createSupabaseBrowserClient } from "@/lib/supabase-browser";

export default function AdminLoginPage() {
  const router = useRouter();

  const supabase = useMemo(
    () => createSupabaseBrowserClient(),
    []
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submitting = useRef(false);

  // =====================================
  // ADMIN LOGIN
  // =====================================

  async function handleSubmit(
    e: FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (submitting.current) return;

    setError("");

    if (!supabase) {
      setError(
        "Admin login is unavailable. Please check your Supabase configuration."
      );
      return;
    }

    const loginEmail = email.trim();

    if (!loginEmail || !password) {
      setError("Please enter your email and password.");
      return;
    }

    submitting.current = true;
    setLoading(true);

    try {
      // STEP 1: SUPABASE EMAIL/PASSWORD LOGIN

      const {
        data,
        error: loginError,
      } = await supabase.auth.signInWithPassword({
        email: loginEmail,
        password,
      });

      if (loginError || !data.user) {
        setError(
          "Invalid email or password. Please verify your credentials and try again."
        );
        return;
      }

      // STEP 2: VERIFY ADMIN ROLE

      const {
        data: adminRow,
        error: adminError,
      } = await supabase
        .from("admin_users")
        .select("user_id")
        .eq("user_id", data.user.id)
        .maybeSingle();

      if (adminError) {
        console.error(
          "Admin permission verification failed:",
          adminError
        );

        await supabase.auth.signOut();

        setError(
          "Unable to verify admin permissions. Please check your database access settings."
        );
        return;
      }

      // STEP 3: BLOCK NON-ADMIN ACCOUNTS

      if (!adminRow) {
        await supabase.auth.signOut();

        setError(
          "This account is not authorized to access the admin dashboard."
        );
        return;
      }

      // STEP 4: ADMIN DASHBOARD REDIRECT

      router.replace("/admin/dashboard");
      router.refresh();
    } catch (err) {
      console.error("Admin login failed:", err);

      setError(
        "Unable to sign in. Please check your connection and try again."
      );
    } finally {
      submitting.current = false;
      setLoading(false);
    }
  }

  return (
    <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#08111f] px-4 py-8 sm:px-6 lg:px-8">

      {/* =====================================
          ANIMATED BACKGROUND
      ===================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Red Glow */}
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-red-600/20 blur-[130px]" />

        {/* Orange Glow */}
        <div className="absolute -bottom-48 -right-32 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[130px]" />

        {/* Architectural Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />

        {/* Decorative Rings */}
        <div className="absolute -right-40 -top-40 hidden h-[550px] w-[550px] rounded-full border border-red-500/10 lg:block" />

        <div className="absolute -right-20 -top-20 hidden h-[350px] w-[350px] rounded-full border border-red-500/10 lg:block" />

      </div>

      {/* =====================================
          LOGIN LAYOUT
      ===================================== */}

      <div className="relative z-10 grid w-full max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-white shadow-[0_30px_100px_rgba(0,0,0,0.35)] lg:min-h-[680px] lg:grid-cols-[1fr_0.95fr]">

        {/* =====================================
            LEFT BRAND PANEL
        ===================================== */}

        <section className="relative isolate overflow-hidden bg-[#0d192c] px-7 py-10 text-white sm:px-10 lg:flex lg:flex-col lg:justify-between lg:px-14 lg:py-14">

          {/* Background Glow */}
          <div className="pointer-events-none absolute -left-32 -top-20 -z-10 h-96 w-96 rounded-full bg-red-600/20 blur-[110px]" />

          <div className="pointer-events-none absolute -bottom-24 -right-28 -z-10 h-80 w-80 rounded-full bg-orange-500/10 blur-[110px]" />

          {/* Branding */}
          <div className="relative">

            <Link
              href="/"
              className="group inline-flex items-center gap-4"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[20px] bg-gradient-to-br from-red-600 to-red-800 text-white shadow-[0_12px_40px_rgba(220,38,38,0.3)] transition-all duration-300 group-hover:scale-105 motion-reduce:transform-none">

                <Building2 className="h-8 w-8" />

              </div>

              <div>
                <p className="text-base font-black tracking-tight text-white sm:text-lg">
                  Royal Stone
                </p>

                <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-red-400">
                  Construction
                </p>
              </div>

            </Link>

          </div>

          {/* Main Left Content */}
          <div className="relative mt-12 lg:mt-0">

            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-xs font-black uppercase tracking-[0.14em] text-red-300">

              <Sparkles className="h-4 w-4" />

              ADMIN CONTROL CENTER

            </div>

            <h1 className="mt-7 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">

              Manage Your

              <span className="mt-2 block bg-gradient-to-r from-red-400 via-red-400 to-orange-300 bg-clip-text text-transparent">
                Business Smarter.
              </span>

            </h1>

            <p className="mt-6 max-w-md text-base leading-8 text-slate-300">
              Access your Royal Stone Construction
              administrator workspace to manage customer
              enquiries and website content.
            </p>

            {/* Feature Items */}
            <div className="mt-9 space-y-4">

              {[
                {
                  title: "Lead Management",
                  text: "Track customer enquiries and statuses.",
                },
                {
                  title: "Website Content",
                  text: "Manage projects and approved testimonials.",
                },
                {
                  title: "Admin Access",
                  text: "Access restricted to authorised accounts.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group flex items-center gap-4 rounded-[20px] border border-white/10 bg-white/[0.05] px-5 py-4 backdrop-blur-md transition-all duration-300 hover:translate-x-1 hover:border-red-500/30 hover:bg-white/[0.09] motion-reduce:transform-none"
                >

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 text-red-400 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">

                    <CheckCircle2 className="h-5 w-5" />

                  </div>

                  <div>
                    <h3 className="text-sm font-black text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs leading-6 text-slate-400">
                      {item.text}
                    </p>
                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* Left Footer */}
          <div className="relative mt-10 flex items-center gap-3 border-t border-white/10 pt-7">

            <ShieldCheck className="h-5 w-5 text-red-400" />

            <p className="text-xs font-semibold text-slate-400">
              Authorized administrator access only
            </p>

          </div>

        </section>

        {/* =====================================
            RIGHT LOGIN FORM
        ===================================== */}

        <section className="relative flex items-center justify-center bg-white px-6 py-12 sm:px-12 lg:px-14 lg:py-16">

          {/* Light Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-red-500/5 blur-[80px]" />

          <div className="relative w-full max-w-md">

            {/* Login Icon */}
            <div className="flex h-20 w-20 items-center justify-center rounded-[25px] border border-red-100 bg-gradient-to-br from-red-50 to-white text-red-600 shadow-[0_12px_35px_rgba(220,38,38,0.1)]">

              <LockKeyhole className="h-9 w-9" />

            </div>

            {/* Heading */}
            <div className="mt-8">

              <p className="text-xs font-black uppercase tracking-[0.16em] text-red-600">
                WELCOME BACK
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Admin Login
                <span className="text-red-600">.</span>
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Enter your administrator email and
                password to continue to the dashboard.
              </p>

            </div>

            {/* =====================================
                LOGIN FORM
            ===================================== */}

            <form
              onSubmit={handleSubmit}
              aria-busy={loading}
              className="mt-9 space-y-6"
            >

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="admin-email"
                  className="mb-2.5 block text-sm font-black text-slate-900"
                >
                  Admin Email
                </label>

                <div className="group relative">

                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 transition-colors duration-300 group-focus-within:text-red-600" />

                  <input
                    id="admin-email"
                    name="email"
                    type="email"
                    autoComplete="username"
                    autoCapitalize="none"
                    spellCheck={false}
                    required
                    disabled={loading}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                    }}
                    placeholder="Enter your admin email"
                    className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-12 pr-4 text-sm font-semibold text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-100 disabled:opacity-60"
                  />

                </div>
              </div>

              {/* PASSWORD */}
              <div>
                <label
                  htmlFor="admin-password"
                  className="mb-2.5 block text-sm font-black text-slate-900"
                >
                  Password
                </label>

                <div className="group relative">

                  <KeyRound className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 transition-colors duration-300 group-focus-within:text-red-600" />

                  <input
                    id="admin-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    disabled={loading}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError("");
                    }}
                    placeholder="Enter your password"
                    className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-12 pr-14 text-sm font-semibold text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-100 disabled:opacity-60"
                  />

                  {/* SHOW / HIDE PASSWORD */}
                  <button
                    type="button"
                    disabled={loading}
                    onClick={() =>
                      setShowPassword((current) => !current)
                    }
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                    aria-pressed={showPassword}
                    className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl text-slate-400 transition-all duration-300 hover:bg-red-50 hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 disabled:opacity-50"
                  >

                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}

                  </button>

                </div>
              </div>

              {/* ERROR MESSAGE */}
              {error && (
                <div
                  role="alert"
                  className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-4 text-sm font-semibold leading-6 text-red-700"
                >

                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0" />

                  <p>{error}</p>

                </div>
              )}

              {/* LOGIN BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="group relative flex h-14 w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-red-600 to-red-700 px-6 font-extrabold text-white shadow-[0_12px_35px_rgba(220,38,38,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(220,38,38,0.4)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-200 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 motion-reduce:transform-none"
              >

                {/* Light Sweep */}
                <span className="pointer-events-none absolute -left-24 top-0 h-full w-20 skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-700 group-hover:left-[120%]" />

                {loading ? (
                  <>
                    <Loader2 className="relative h-5 w-5 animate-spin" />
                    <span className="relative">
                      Signing In...
                    </span>
                  </>
                ) : (
                  <>
                    <span className="relative">
                      Login to Dashboard
                    </span>

                    <ArrowRight className="relative h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}

              </button>

            </form>

            {/* DIVIDER */}
            <div className="mt-9 flex items-center gap-4">

              <div className="h-px flex-1 bg-slate-200" />

              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                ADMIN ACCESS
              </span>

              <div className="h-px flex-1 bg-slate-200" />

            </div>

            {/* SECURITY NOTE */}
            <div className="mt-7 flex items-start gap-3 rounded-[20px] border border-slate-200 bg-slate-50 p-5">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <div>
                <h3 className="text-sm font-black text-slate-900">
                  Restricted Access
                </h3>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Only accounts listed as administrators
                  can access the management dashboard.
                </p>
              </div>

            </div>

            {/* BACK TO WEBSITE */}
            <div className="mt-8 text-center">

              <Link
                href="/"
                className="group inline-flex items-center gap-2 text-sm font-extrabold text-slate-600 transition-colors duration-300 hover:text-red-600"
              >

                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />

                Back to Website

              </Link>

            </div>

          </div>

        </section>

      </div>

      {/* PAGE FOOTER */}
      <div className="relative z-10 mt-7 text-center">

        <p className="text-xs font-semibold text-slate-400">
          Royal Stone Construction
          <span className="mx-2 text-red-400">•</span>
          Admin Control Center
        </p>

      </div>

    </main>
  );
}
