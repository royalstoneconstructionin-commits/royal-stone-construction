
"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { useRouter } from "next/navigation";

import {
  Activity,
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
  Download,
  FilePenLine,
  LayoutDashboard,
  Loader2,
  LogOut,
  Mail,
  MapPin,
  Phone,
  RefreshCw,
  Search,
  ShieldCheck,
  Sparkles,
  Trash2,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";

import { createSupabaseBrowserClient } from "@/lib/supabase-browser";
import SiteContentEditor from "@/components/SiteContentEditor";

// ======================================
// TYPES
// ======================================

type LeadStatus =
  | "New"
  | "Contacted"
  | "In Progress"
  | "Closed";

type Lead = {
  id: string;
  name: string;
  mobile: string;
  city: string;
  purpose: string;
  status: LeadStatus;
  created_at: string;
};

type StatusFilter = "All" | LeadStatus;
type DashboardTab = "leads" | "content";

type Feedback = {
  type: "success" | "error";
  message: string;
};

const statuses: LeadStatus[] = [
  "New",
  "Contacted",
  "In Progress",
  "Closed",
];

const filters: StatusFilter[] = [
  "All",
  ...statuses,
];

const statusStyles: Record<LeadStatus, string> = {
  New: "border-blue-200 bg-blue-50 text-blue-700",
  Contacted:
    "border-amber-200 bg-amber-50 text-amber-700",
  "In Progress":
    "border-violet-200 bg-violet-50 text-violet-700",
  Closed:
    "border-emerald-200 bg-emerald-50 text-emerald-700",
};

function formatDate(date: string) {
  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) {
    return "Unknown";
  }

  return parsed.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function getInitials(name: string) {
  return (
    name
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part.charAt(0))
      .join("")
      .toUpperCase() || "?"
  );
}

function csvCell(value: string) {
  // Prevent spreadsheet formula execution in exported text.
  const safe = /^[=+\-@\t\r]/.test(value)
    ? `'${value}`
    : value;

  return `"${safe.replace(/"/g, '""')}"`;
}

// ======================================
// ADMIN DASHBOARD
// ======================================

export default function AdminDashboard() {
  const router = useRouter();

  const supabase = useMemo(
    () => createSupabaseBrowserClient(),
    []
  );

  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [authorised, setAuthorised] = useState(false);

  const [activeTab, setActiveTab] =
    useState<DashboardTab>("leads");

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] =
    useState<StatusFilter>("All");

  const [busyLeadId, setBusyLeadId] =
    useState<string | null>(null);

  const [feedback, setFeedback] =
    useState<Feedback | null>(null);

  const inFlight = useRef(false);
  const mounted = useRef(false);

  // ======================================
  // LOAD LEADS & VERIFY ADMIN
  // ======================================

  const loadLeads = useCallback(async () => {
    if (inFlight.current) return;

    inFlight.current = true;
    setLoading(true);
    setFeedback(null);

    try {
      if (!supabase) {
        router.replace("/admin/login");
        return;
      }

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (!mounted.current) return;

      if (userError || !user) {
        setAuthorised(false);
        router.replace("/admin/login");
        return;
      }

      const {
        data: adminRow,
        error: adminError,
      } = await supabase
        .from("admin_users")
        .select("user_id")
        .eq("user_id", user.id)
        .maybeSingle();

      if (!mounted.current) return;

      if (adminError) {
        throw adminError;
      }

      if (!adminRow) {
        setAuthorised(false);

        await supabase.auth.signOut();

        if (mounted.current) {
          router.replace("/admin/login");
        }

        return;
      }

      setAuthorised(true);

      const { data, error } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", {
          ascending: false,
        });

      if (!mounted.current) return;

      if (error) {
        throw error;
      }

      setLeads((data ?? []) as Lead[]);
    } catch (error) {
      console.error("Unable to load leads:", error);

      if (mounted.current) {
        setFeedback({
          type: "error",
          message:
            error instanceof Error
              ? error.message
              : "Unable to load dashboard data.",
        });
      }
    } finally {
      inFlight.current = false;

      if (mounted.current) {
        setLoading(false);
      }
    }
  }, [router, supabase]);

  useEffect(() => {
    mounted.current = true;

    void loadLeads();

    return () => {
      mounted.current = false;
    };
  }, [loadLeads]);

  // ======================================
  // UPDATE LEAD STATUS
  // ======================================

  async function updateStatus(
    id: string,
    status: LeadStatus
  ) {
    if (!supabase || busyLeadId) return;

    setBusyLeadId(id);
    setFeedback(null);

    try {
      const { error } = await supabase
        .from("leads")
        .update({ status })
        .eq("id", id);

      if (error) {
        throw error;
      }

      setLeads((current) =>
        current.map((lead) =>
          lead.id === id
            ? { ...lead, status }
            : lead
        )
      );

      setFeedback({
        type: "success",
        message: `Lead status updated to ${status}.`,
      });
    } catch (error) {
      console.error("Status update failed:", error);

      setFeedback({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to update lead status.",
      });
    } finally {
      setBusyLeadId(null);
    }
  }

  // ======================================
  // DELETE LEAD
  // ======================================

  async function deleteLead(id: string) {
    if (!supabase || busyLeadId) return;

    const confirmed = window.confirm(
      "Are you sure you want to permanently delete this lead?"
    );

    if (!confirmed) return;

    setBusyLeadId(id);
    setFeedback(null);

    try {
      const { error } = await supabase
        .from("leads")
        .delete()
        .eq("id", id);

      if (error) {
        throw error;
      }

      setLeads((current) =>
        current.filter((lead) => lead.id !== id)
      );

      setFeedback({
        type: "success",
        message: "Lead deleted successfully.",
      });
    } catch (error) {
      console.error("Delete lead failed:", error);

      setFeedback({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to delete lead.",
      });
    } finally {
      setBusyLeadId(null);
    }
  }

  // ======================================
  // LOGOUT
  // ======================================

  async function logout() {
    if (!supabase) {
      router.replace("/admin/login");
      return;
    }

    const { error } = await supabase.auth.signOut();

    if (error) {
      setFeedback({
        type: "error",
        message: error.message,
      });
      return;
    }

    setAuthorised(false);
    router.replace("/admin/login");
  }

  // ======================================
  // FILTERS
  // ======================================

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();

    return leads.filter((lead) => {
      const matchesSearch = [
        lead.name,
        lead.mobile,
        lead.city,
        lead.purpose,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query);

      const matchesStatus =
        statusFilter === "All" ||
        lead.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [leads, search, statusFilter]);

  // ======================================
  // STATISTICS
  // ======================================

  const counts = useMemo(
    () => ({
      total: leads.length,
      new: leads.filter(
        (lead) => lead.status === "New"
      ).length,
      contacted: leads.filter(
        (lead) => lead.status === "Contacted"
      ).length,
      progress: leads.filter(
        (lead) => lead.status === "In Progress"
      ).length,
      closed: leads.filter(
        (lead) => lead.status === "Closed"
      ).length,
    }),
    [leads]
  );

  const stats = [
    {
      label: "Total Leads",
      value: counts.total,
      icon: Users,
      color: "bg-red-50 text-red-600",
    },
    {
      label: "New Enquiries",
      value: counts.new,
      icon: Sparkles,
      color: "bg-blue-50 text-blue-600",
    },
    {
      label: "Contacted",
      value: counts.contacted,
      icon: Phone,
      color: "bg-amber-50 text-amber-600",
    },
    {
      label: "In Progress",
      value: counts.progress,
      icon: Activity,
      color: "bg-violet-50 text-violet-600",
    },
    {
      label: "Closed",
      value: counts.closed,
      icon: CheckCircle2,
      color: "bg-emerald-50 text-emerald-600",
    },
  ];

  // ======================================
  // EXPORT FILTERED LEADS
  // ======================================

  function exportCSV() {
    if (filtered.length === 0) {
      setFeedback({
        type: "error",
        message: "No leads available to export.",
      });
      return;
    }

    const headers = [
      "Name",
      "Mobile",
      "City",
      "Purpose",
      "Status",
      "Received",
    ];

    const rows = filtered.map((lead) =>
      [
        lead.name,
        lead.mobile,
        lead.city,
        lead.purpose,
        lead.status,
        formatDate(lead.created_at),
      ]
        .map((value) => csvCell(value))
        .join(",")
    );

    const csv =
      "\uFEFF" +
      [
        headers.join(","),
        ...rows,
      ].join("\r\n");

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const anchor = document.createElement("a");
    anchor.href = url;

    anchor.download = `royal-stone-leads-${
      new Date().toISOString().slice(0, 10)
    }.csv`;

    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();

    URL.revokeObjectURL(url);
  }

  // ======================================
  // ACCESS VERIFICATION SCREEN
  // ======================================

  if (!authorised) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#08111f] px-5 py-12">
        <div className="w-full max-w-md rounded-[30px] border border-white/10 bg-white/[0.06] p-8 text-center text-white shadow-2xl backdrop-blur-xl">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[24px] border border-red-500/20 bg-red-500/10 text-red-400">
            {loading ? (
              <Loader2 className="h-10 w-10 animate-spin" />
            ) : (
              <ShieldCheck className="h-10 w-10" />
            )}
          </div>

          <h1 className="mt-7 text-2xl font-black">
            {loading
              ? "Verifying Admin Access"
              : "Dashboard Unavailable"}
          </h1>

          <p className="mt-4 leading-7 text-slate-300">
            {loading
              ? "Checking your admin session and permissions."
              : feedback?.message ||
                "Unable to verify your admin session."}
          </p>

          {!loading && (
            <button
              type="button"
              onClick={() => void loadLeads()}
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-bold text-white transition hover:bg-red-700"
            >
              <RefreshCw className="h-4 w-4" />
              Try Again
            </button>
          )}
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f7fb] pb-16">

      {/* ======================================
          PREMIUM DARK HEADER
      ====================================== */}

      <header className="relative isolate overflow-hidden bg-[#08111f] px-4 pb-16 pt-7 text-white sm:px-6 sm:pb-20 lg:px-8">

        {/* Background Lighting */}
        <div className="pointer-events-none absolute -left-28 -top-20 h-96 w-96 rounded-full bg-red-600/20 blur-[110px]" />

        <div className="pointer-events-none absolute -right-28 top-0 h-96 w-96 rounded-full bg-orange-500/10 blur-[120px]" />

        {/* Architectural Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />

        <div className="relative mx-auto max-w-7xl">

          {/* TOP BRAND BAR */}
          <div className="flex flex-col gap-5 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-600 shadow-[0_10px_30px_rgba(220,38,38,0.3)]">
                <Building2 className="h-7 w-7 text-white" />
              </div>

              <div>
                <p className="text-xs font-black uppercase tracking-[0.15em] text-red-400">
                  ROYAL STONE CONSTRUCTION
                </p>

                <p className="mt-1 text-lg font-black text-white">
                  Admin Control Center
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">

              {/* REFRESH */}
              <button
                type="button"
                onClick={() => void loadLeads()}
                disabled={loading}
                className="group inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <RefreshCw
                  className={`h-4 w-4 ${
                    loading ? "animate-spin" : ""
                  }`}
                />
                Refresh
              </button>

              {/* LOGOUT */}
              <button
                type="button"
                onClick={() => void logout()}
                className="group inline-flex min-h-11 items-center gap-2 rounded-xl bg-red-600 px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-[0_10px_25px_rgba(220,38,38,0.3)]"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          </div>

          {/* MAIN HEADER */}
          <div className="mt-9 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">

            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-red-500/25 bg-red-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.15em] text-red-300">
                <ShieldCheck className="h-4 w-4" />
                ADMINISTRATOR DASHBOARD
              </div>

              <h1 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                Business{" "}
                <span className="bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
                  Dashboard.
                </span>
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Manage customer enquiries, track lead
                progress and update published website
                content from one admin workspace.
              </p>
            </div>

            <div className="flex w-fit items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-5 py-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-black text-white">
                  Admin Verified
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Supabase authenticated
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ======================================
          MAIN DASHBOARD AREA
      ====================================== */}

      <div className="relative z-10 mx-auto -mt-9 max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* STATISTICS */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              label={stat.label}
              value={stat.value}
              icon={stat.icon}
              color={stat.color}
            />
          ))}
        </div>

        {/* ADMIN NAVIGATION */}
        <div className="mt-8 flex flex-col justify-between gap-4 rounded-[24px] border border-slate-200 bg-white p-3 shadow-[0_8px_35px_rgba(15,23,42,0.04)] sm:flex-row sm:items-center">

          <div className="flex flex-wrap gap-2">

            <button
              type="button"
              onClick={() => setActiveTab("leads")}
              aria-pressed={activeTab === "leads"}
              className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-extrabold transition-all duration-300 ${
                activeTab === "leads"
                  ? "bg-red-600 text-white shadow-[0_8px_22px_rgba(220,38,38,0.2)]"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <LayoutDashboard className="h-5 w-5" />
              Lead Management
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("content")}
              aria-pressed={activeTab === "content"}
              className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-extrabold transition-all duration-300 ${
                activeTab === "content"
                  ? "bg-red-600 text-white shadow-[0_8px_22px_rgba(220,38,38,0.2)]"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <FilePenLine className="h-5 w-5" />
              Website Content
            </button>
          </div>

          <div className="flex items-center gap-2 px-3 text-xs font-bold text-slate-500">
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            Admin workspace
          </div>

        </div>

        {/* FEEDBACK MESSAGE */}
        {feedback && (
          <div
            role={feedback.type === "error" ? "alert" : "status"}
            className={`mt-6 flex items-start justify-between gap-4 rounded-2xl border px-5 py-4 text-sm font-semibold ${
              feedback.type === "error"
                ? "border-red-200 bg-red-50 text-red-700"
                : "border-emerald-200 bg-emerald-50 text-emerald-700"
            }`}
          >
            <div className="flex items-start gap-3">
              {feedback.type === "error" ? (
                <X className="mt-0.5 h-5 w-5 shrink-0" />
              ) : (
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
              )}

              <p className="leading-6">
                {feedback.message}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setFeedback(null)}
              aria-label="Dismiss notification"
              className="shrink-0 rounded-lg p-1 transition hover:bg-black/5"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* ======================================
            LEAD MANAGEMENT TAB
        ====================================== */}
        <section
          aria-label="Lead Management"
          className={activeTab === "leads" ? "block" : "hidden"}
        >
          {/* LEAD TABLE WRAPPER */}
          <div className="mt-7 overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_15px_55px_rgba(15,23,42,0.05)]">

            {/* TABLE HEADER */}
            <div className="border-b border-slate-100 p-5 sm:p-7">

              <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">

                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                    <Users className="h-7 w-7" />
                  </div>

                  <div>
                    <h2 className="text-xl font-black text-slate-950 sm:text-2xl">
                      Customer Leads
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Manage enquiries received from your website.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={exportCSV}
                  disabled={filtered.length === 0}
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#08111f] px-5 py-3 text-sm font-extrabold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <Download className="h-5 w-5" />
                  Export CSV
                </button>

              </div>

              {/* SEARCH */}
              <div className="mt-7 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                <div className="relative w-full lg:max-w-md">
                  <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                  <input
                    type="search"
                    aria-label="Search leads"
                    value={search}
                    onChange={(event) =>
                      setSearch(event.target.value)
                    }
                    placeholder="Search name, mobile, city, purpose..."
                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-12 pr-4 text-sm text-slate-900 outline-none transition focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-100"
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {filters.map((status) => (
                    <button
                      key={status}
                      type="button"
                      onClick={() => setStatusFilter(status)}
                      aria-pressed={statusFilter === status}
                      className={`rounded-xl border px-3.5 py-2.5 text-xs font-extrabold transition-all duration-300 ${
                        statusFilter === status
                          ? "border-red-600 bg-red-600 text-white shadow-sm"
                          : "border-slate-200 bg-white text-slate-600 hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>

              </div>

              {/* RESULTS COUNT */}
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs font-semibold text-slate-500">
                  Showing{" "}
                  <span className="font-black text-red-600">
                    {filtered.length}
                  </span>{" "}
                  of {leads.length} enquiries
                </p>

                {(search || statusFilter !== "All") && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearch("");
                      setStatusFilter("All");
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700"
                  >
                    <X className="h-4 w-4" />
                    Clear Filters
                  </button>
                )}
              </div>
            </div>

            {/* LOADING */}
            {loading ? (
              <div className="flex flex-col items-center justify-center px-6 py-20 text-center">
                <Loader2 className="h-10 w-10 animate-spin text-red-600" />

                <h3 className="mt-5 text-lg font-black text-slate-950">
                  Loading Enquiries
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Fetching lead information from Supabase.
                </p>
              </div>
            ) : filtered.length === 0 ? (
              /* EMPTY STATE */
              <div className="flex flex-col items-center justify-center px-6 py-20 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-[24px] bg-red-50 text-red-600">
                  <Search className="h-9 w-9" />
                </div>

                <h3 className="mt-6 text-xl font-black text-slate-950">
                  No Leads Found
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-slate-500">
                  {search || statusFilter !== "All"
                    ? "No enquiries match your current search or status filter."
                    : "New website enquiries will appear here when submitted."}
                </p>
              </div>
            ) : (
              /* LEADS TABLE */
              <div className="overflow-x-auto">
                <table className="w-full min-w-[1050px] border-collapse text-left">

                  <thead className="bg-slate-50">
                    <tr className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">
                      <th className="px-5 py-5">#</th>
                      <th className="px-5 py-5">Customer</th>
                      <th className="px-5 py-5">Contact</th>
                      <th className="px-5 py-5">City</th>
                      <th className="px-5 py-5">Requirement</th>
                      <th className="px-5 py-5">Status</th>
                      <th className="px-5 py-5">Received</th>
                      <th className="px-5 py-5">Action</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100">
                    {filtered.map((lead, index) => (
                      <tr
                        key={lead.id}
                        className="group transition-colors duration-300 hover:bg-red-50/30"
                      >
                        {/* SERIAL */}
                        <td className="px-5 py-5 text-sm font-semibold text-slate-400">
                          {String(index + 1).padStart(2, "0")}
                        </td>

                        {/* CUSTOMER */}
                        <td className="px-5 py-5">
                          <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-red-700 text-sm font-black text-white shadow-[0_5px_15px_rgba(220,38,38,0.15)] transition-transform duration-300 group-hover:scale-105">
                              {getInitials(lead.name)}
                            </div>

                            <div>
                              <p className="font-black text-slate-900">
                                {lead.name}
                              </p>

                              <p className="mt-1 text-xs text-slate-400">
                                Website Enquiry
                              </p>
                            </div>
                          </div>
                        </td>

                        {/* MOBILE */}
                        <td className="px-5 py-5">
                          <a
                            href={`tel:${lead.mobile}`}
                            className="inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:text-red-700"
                          >
                            <Phone className="h-4 w-4" />
                            {lead.mobile}
                          </a>
                        </td>

                        {/* CITY */}
                        <td className="px-5 py-5">
                          <div className="flex items-center gap-2 text-sm text-slate-700">
                            <MapPin className="h-4 w-4 shrink-0 text-red-500" />
                            {lead.city}
                          </div>
                        </td>

                        {/* REQUIREMENT */}
                        <td className="px-5 py-5">
                          <span className="inline-flex max-w-[240px] items-center rounded-xl border border-red-100 bg-red-50 px-3 py-2 text-xs font-extrabold leading-5 text-red-700">
                            {lead.purpose}
                          </span>
                        </td>

                        {/* STATUS */}
                        <td className="px-5 py-5">
                          <select
                            aria-label={`Status for ${lead.name}`}
                            value={lead.status}
                            disabled={busyLeadId !== null}
                            onChange={(event) =>
                              void updateStatus(
                                lead.id,
                                event.target.value as LeadStatus
                              )
                            }
                            className={`min-w-[145px] cursor-pointer rounded-xl border px-3 py-2.5 text-xs font-black outline-none transition focus:ring-4 focus:ring-red-100 disabled:cursor-not-allowed disabled:opacity-60 ${
                              statusStyles[lead.status]
                            }`}
                          >
                            {statuses.map((status) => (
                              <option
                                key={status}
                                value={status}
                              >
                                {status}
                              </option>
                            ))}
                          </select>
                        </td>

                        {/* DATE */}
                        <td className="px-5 py-5">
                          <div className="flex items-start gap-2 text-xs font-semibold leading-6 text-slate-500">
                            <Clock3 className="mt-1 h-4 w-4 shrink-0 text-slate-400" />
                            {formatDate(lead.created_at)}
                          </div>
                        </td>

                        {/* DELETE ACTION */}
                        <td className="px-5 py-5">
                          <button
                            type="button"
                            onClick={() =>
                              void deleteLead(lead.id)
                            }
                            disabled={busyLeadId !== null}
                            aria-label={`Delete lead for ${lead.name}`}
                            title="Delete lead"
                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-red-600 transition-all duration-300 hover:border-red-600 hover:bg-red-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            {busyLeadId === lead.id ? (
                              <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                              <Trash2 className="h-4 w-4" />
                            )}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* TABLE FOOTER */}
            <div className="flex flex-col justify-between gap-3 border-t border-slate-100 bg-slate-50/70 px-5 py-5 sm:flex-row sm:items-center sm:px-7">
              <p className="text-xs font-semibold text-slate-500">
                Lead information is loaded from your
                connected Supabase database.
              </p>

              <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                Admin Access
              </div>
            </div>
          </div>

          {/* BOTTOM LEAD MANAGEMENT NOTE */}
          <div className="mt-7 flex flex-col items-start justify-between gap-5 rounded-[26px] bg-[#08111f] p-6 text-white sm:flex-row sm:items-center sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-red-600 p-3 text-white">
                <Mail className="h-6 w-6" />
              </div>

              <div>
                <h3 className="text-lg font-black">
                  Stay on Top of Every Enquiry
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-7 text-slate-300">
                  Use lead statuses to track customer
                  follow-ups and keep your enquiry records
                  organised.
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-xs font-bold text-red-300">
              <Activity className="h-4 w-4" />
              Lead Tracking
            </div>
          </div>
        </section>

        {/* ======================================
            WEBSITE CONTENT MANAGEMENT TAB
        ====================================== */}

        <section
          aria-label="Website Content Management"
          className={
            activeTab === "content" ? "block" : "hidden"
          }
        >
          <div className="mt-7 overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_15px_55px_rgba(15,23,42,0.05)]">

            {/* CONTENT HEADER */}
            <div className="relative overflow-hidden bg-[#08111f] p-7 text-white sm:p-10">
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-red-600/20 blur-[90px]" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-red-500/25 bg-red-500/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-red-300">
                  <Sparkles className="h-4 w-4" />
                  WEBSITE CONTENT CONTROL
                </div>

                <h2 className="mt-5 text-2xl font-black sm:text-3xl">
                  Website Content Management
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
                  Manage website projects, approved
                  testimonials and working hours through
                  your existing content editor.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {[
                    "Projects",
                    "Testimonials",
                    "Working Hours",
                  ].map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-slate-200"
                    >
                      <CheckCircle2 className="h-4 w-4 text-red-400" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ORIGINAL CONTENT EDITOR */}
            <div className="p-4 sm:p-6 lg:p-8">
              <SiteContentEditor />
            </div>

          </div>
        </section>

        {/* ADMIN FOOTER */}
        <footer className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row">
          <p className="text-xs font-semibold text-slate-500">
            Royal Stone Construction — Admin Dashboard
          </p>

          <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500">
            <ShieldCheck className="h-4 w-4 text-red-600" />
            Powered by your existing Supabase integration
          </span>
        </footer>

      </div>
    </main>
  );
}

// ======================================
// STATISTICS CARD
// ======================================

function StatCard({
  label,
  value,
  icon: Icon,
  color,
}: {
  label: string;
  value: number;
  icon: LucideIcon;
  color: string;
}) {
  return (
    <article className="group relative min-w-0 overflow-hidden rounded-[25px] border border-slate-200 bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-red-200 hover:shadow-[0_20px_50px_rgba(220,38,38,0.12)] motion-reduce:transform-none">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-red-500/5 blur-[65px] transition-colors duration-500 group-hover:bg-red-500/15" />

      <div className="relative flex items-start justify-between gap-3">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110 motion-reduce:transform-none ${color}`}
        >
          <Icon className="h-7 w-7" />
        </div>

        <ArrowRight className="h-4 w-4 -rotate-45 text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-600" />
      </div>

      <p className="relative mt-7 text-4xl font-black tracking-tight text-slate-950">
        {value.toLocaleString("en-IN")}
      </p>

      <h3 className="relative mt-2 text-sm font-bold text-slate-500">
        {label}
      </h3>

      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-600 to-orange-400 transition-all duration-500 group-hover:w-full" />
    </article>
  );
}
