
"use client";

import Image from "next/image";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  AlertCircle,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Clock3,
  FileText,
  FolderKanban,
  ImageIcon,
  Loader2,
  MapPin,
  MessageSquareQuote,
  Plus,
  RefreshCcw,
  Save,
  ShieldCheck,
  Sparkles,
  Trash2,
} from "lucide-react";

import { createSupabaseBrowserClient } from "@/lib/supabase-browser";

import {
  defaultContent,
  isSiteContent,
  type SiteContent,
  type Project,
  type Testimonial,
} from "@/lib/content";

type Tab = "projects" | "testimonials" | "hours";

type Notice = {
  type: "success" | "error" | "info";
  text: string;
};

const inputClass =
  "mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 text-sm font-medium text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10 disabled:cursor-not-allowed disabled:opacity-60";

const actionClass =
  "group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 px-5 py-3 text-sm font-extrabold text-white shadow-[0_10px_30px_rgba(220,38,38,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_35px_rgba(220,38,38,0.3)] disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none disabled:transform-none";

// -----------------------------------------
// Reusable Field
// -----------------------------------------

function Field({
  label,
  value,
  onChange,
  multiline = false,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block min-w-0">
      <span className="text-sm font-bold text-slate-700">
        {label}
      </span>

      {multiline ? (
        <textarea
          value={value}
          onChange={(event) => onChange(event.target.value)}
          rows={4}
          placeholder={placeholder}
          className={`${inputClass} min-h-28 resize-y leading-7`}
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className={inputClass}
        />
      )}
    </label>
  );
}

// -----------------------------------------
// Reusable Select
// -----------------------------------------

function Choice({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="block min-w-0">
      <span className="text-sm font-bold text-slate-700">
        {label}
      </span>

      <div className="relative">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={`${inputClass} appearance-none pr-11`}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 mt-1 h-4 w-4 -translate-y-1/2 text-slate-400" />
      </div>
    </label>
  );
}

// -----------------------------------------
// Main Component
// -----------------------------------------

export default function SiteContentEditor() {
  const supabase = useMemo(
    () => createSupabaseBrowserClient(),
    []
  );

  const [content, setContent] =
    useState<SiteContent>(() =>
      structuredClone(defaultContent)
    );

  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [dirty, setDirty] = useState(false);

  const [tab, setTab] = useState<Tab>("projects");
  const [openProject, setOpenProject] =
    useState<number | null>(0);

  const [notice, setNotice] =
    useState<Notice | null>(null);

  const inFlight = useRef(false);

  // -----------------------------------------
  // Load Content
  // -----------------------------------------

  const load = useCallback(async () => {
    if (inFlight.current) return;

    if (!supabase) {
      setReady(false);
      setLoading(false);
      setNotice({
        type: "error",
        text: "Supabase is not configured. Check your environment variables.",
      });
      return;
    }

    inFlight.current = true;
    setLoading(true);

    try {
      const { data, error } = await supabase
        .from("site_content")
        .select("content")
        .eq("id", "public")
        .maybeSingle();

      if (error) {
        setReady(false);
        setNotice({
          type: "error",
          text: "Content storage is unavailable. Check your Supabase site_content table, SQL setup and permissions. Existing leads are unaffected.",
        });
        return;
      }

      if (data && !isSiteContent(data.content)) {
        setReady(false);
        setNotice({
          type: "error",
          text: "Stored website content has an invalid format. Resolve it before editing to avoid overwriting existing data.",
        });
        return;
      }

      setContent(
        data?.content ??
          structuredClone(defaultContent)
      );

      setNotice(null);
      setDirty(false);
      setReady(true);
    } catch (error) {
      console.error("Content loading failed:", error);

      setReady(false);
      setNotice({
        type: "error",
        text: "Unable to load website content. Check your connection and try again.",
      });
    } finally {
      setLoading(false);
      inFlight.current = false;
    }
  }, [supabase]);

  useEffect(() => {
    void load();
  }, [load]);

  // -----------------------------------------
  // Unsaved Changes Protection
  // -----------------------------------------

  useEffect(() => {
    const warn = (event: BeforeUnloadEvent) => {
      if (!dirty) return;

      event.preventDefault();
      event.returnValue = "";
    };

    window.addEventListener("beforeunload", warn);

    return () => {
      window.removeEventListener(
        "beforeunload",
        warn
      );
    };
  }, [dirty]);

  // -----------------------------------------
  // Update Helpers
  // -----------------------------------------

  function change(next: SiteContent) {
    setContent(next);
    setDirty(true);
    setNotice(null);
  }

  function updateProject(
    index: number,
    patch: Partial<Project>
  ) {
    change({
      ...content,
      projects: content.projects.map((project, i) =>
        i === index
          ? { ...project, ...patch }
          : project
      ),
    });
  }

  function updateTestimonial(
    index: number,
    patch: Partial<Testimonial>
  ) {
    change({
      ...content,
      testimonials: content.testimonials.map(
        (item, i) =>
          i === index
            ? { ...item, ...patch }
            : item
      ),
    });
  }

  // -----------------------------------------
  // Reload Data Without Browser Refresh
  // -----------------------------------------

  async function reloadContent() {
    if (dirty) {
      const confirmed = window.confirm(
        "You have unpublished changes. Discard changes and reload saved content?"
      );

      if (!confirmed) return;
    }

    await load();
  }

  // -----------------------------------------
  // Add Project
  // -----------------------------------------

  function addProject() {
    const template = defaultContent.projects[0];

    if (!template) {
      setNotice({
        type: "error",
        text: "A default project template is required before a new project can be created.",
      });
      return;
    }

    const newProject: Project = {
      ...structuredClone(template),
      title: "New Project",
      slug: `new-project-${Date.now()}`,
      city: "",
      area: "",
      image: "",
      details: "",
      overview: "",
      work: "",
      materials: "",
      gallery: [],
      status: "Concept",
    };

    change({
      ...content,
      projects: [...content.projects, newProject],
    });

    setOpenProject(content.projects.length);
  }

  // -----------------------------------------
  // Remove Project
  // -----------------------------------------

  function removeProject(index: number) {
    const project = content.projects[index];

    if (!project) return;

    const confirmed = window.confirm(
      `Remove "${project.title}" from the draft? Save & Publish to confirm the removal.`
    );

    if (!confirmed) return;

    change({
      ...content,
      projects: content.projects.filter(
        (_, i) => i !== index
      ),
    });

    setOpenProject(null);
  }

  // -----------------------------------------
  // Add Testimonial
  // -----------------------------------------

  function addTestimonial() {
    change({
      ...content,
      testimonials: [
        ...content.testimonials,
        {
          name: "",
          city: "",
          quote: "",
          approved: false,
        },
      ],
    });
  }

  // -----------------------------------------
  // Remove Testimonial
  // -----------------------------------------

  function removeTestimonial(index: number) {
    const confirmed = window.confirm(
      "Remove this customer feedback from the draft?"
    );

    if (!confirmed) return;

    change({
      ...content,
      testimonials: content.testimonials.filter(
        (_, i) => i !== index
      ),
    });
  }

  // -----------------------------------------
  // Save & Publish
  // -----------------------------------------

  async function save() {
    if (!supabase || !ready || saving || !dirty) {
      return;
    }

    const published: SiteContent = {
      ...content,
      projects: content.projects.map((project) => ({
        ...project,
        image: project.image.trim(),
        gallery: project.gallery
          .map((src) => src.trim())
          .filter(Boolean),
      })),
    };

    if (!isSiteContent(published)) {
      setNotice({
        type: "error",
        text: "Please check project titles, unique lowercase URL slugs, image URLs and customer feedback. Project images must use a local /path or HTTPS URL.",
      });
      return;
    }

    if (!published.workingHours.trim()) {
      setTab("hours");
      setNotice({
        type: "error",
        text: "Please enter working hours or a consultation availability message before publishing.",
      });
      return;
    }

    setSaving(true);
    setNotice(null);

    try {
      // Check signed-in user
      const { data: userData, error: userError } =
        await supabase.auth.getUser();

      if (userError || !userData.user) {
        setNotice({
          type: "error",
          text: "Your session has expired. Please sign in again.",
        });
        return;
      }

      // Check admin permission
      const { data: admin, error: authError } =
        await supabase
          .from("admin_users")
          .select("user_id")
          .eq("user_id", userData.user.id)
          .maybeSingle();

      if (authError || !admin) {
        setNotice({
          type: "error",
          text: "Only authorised administrators can publish website content.",
        });
        return;
      }

      // Publish to Supabase
      const { error } = await supabase
        .from("site_content")
        .upsert({
          id: "public",
          content: published,
          updated_at: new Date().toISOString(),
        });

      if (error) {
        console.error("Publish error:", error);

        setNotice({
          type: "error",
          text: "Unable to publish content. Check your Supabase permissions and try again.",
        });
        return;
      }

      setContent(published);
      setDirty(false);

      setNotice({
        type: "success",
        text: "Website content published successfully. Public pages may need cache revalidation or refresh to display the latest updates.",
      });
    } catch (error) {
      console.error("Publishing failed:", error);

      setNotice({
        type: "error",
        text: "Something went wrong while publishing. Please try again.",
      });
    } finally {
      setSaving(false);
    }
  }

  // -----------------------------------------
  // Dashboard Counters
  // -----------------------------------------

  const totalProjects = content.projects.length;

  const conceptProjects = content.projects.filter(
    (project) => project.status === "Concept"
  ).length;

  const approvedTestimonials =
    content.testimonials.filter(
      (testimonial) => testimonial.approved
    ).length;

  const tabs = [
    {
      id: "projects" as const,
      label: "Projects",
      icon: FolderKanban,
      count: totalProjects,
    },
    {
      id: "testimonials" as const,
      label: "Testimonials",
      icon: MessageSquareQuote,
      count: content.testimonials.length,
    },
    {
      id: "hours" as const,
      label: "Working Hours",
      icon: Clock3,
      count: null,
    },
  ];

  // =========================================
  // UI
  // =========================================

  return (
    <section className="relative mt-10 min-w-0 space-y-7 pb-10">

      {/* =====================================
          PREMIUM ADMIN HEADER
      ===================================== */}

      <div className="relative isolate overflow-hidden rounded-[30px] bg-[#08111f] p-6 text-white shadow-[0_20px_60px_rgba(15,23,42,0.15)] sm:p-8 lg:p-10">

        {/* Decorative Background */}
        <div className="pointer-events-none absolute -right-20 -top-24 -z-10 h-80 w-80 rounded-full bg-red-600/20 blur-[90px]" />

        <div className="pointer-events-none absolute -bottom-32 -left-20 -z-10 h-72 w-72 rounded-full bg-orange-500/10 blur-[100px]" />

        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />

        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

          {/* Header Text */}
          <div className="max-w-2xl">

            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.15em] text-red-300">

              <Sparkles className="h-4 w-4" />

              Royal Stone Admin

            </div>

            <h2 className="mt-6 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Website{" "}
              <span className="bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
                Content Manager
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Manage project portfolios, approved customer
              testimonials and consultation availability
              from one central dashboard.
            </p>

            {/* Status Indicator */}
            <div className="mt-6 flex flex-wrap items-center gap-3">

              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-slate-200">

                <span
                  className={`h-2 w-2 rounded-full ${
                    ready
                      ? "bg-emerald-400"
                      : "bg-amber-400"
                  }`}
                />

                {ready
                  ? "Content Editor Ready"
                  : "Content Editor Unavailable"}

              </div>

              {dirty && (
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-xs font-bold text-amber-300">
                  <AlertCircle className="h-3.5 w-3.5" />
                  Unpublished Changes
                </div>
              )}

            </div>

          </div>

          {/* Header Actions */}
          <div className="flex flex-wrap gap-3">

            <button
              type="button"
              onClick={reloadContent}
              disabled={loading || saving}
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/20 disabled:opacity-50"
            >
              <RefreshCcw
                className={`h-4 w-4 ${
                  loading ? "animate-spin" : ""
                }`}
              />

              Reload Data
            </button>

            <button
              type="button"
              onClick={save}
              disabled={!ready || saving || !dirty}
              className={actionClass}
            >
              {saving ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Save className="h-4 w-4" />
              )}

              {saving
                ? "Publishing..."
                : "Save & Publish"}
            </button>

          </div>
        </div>

        {/* Header Bottom Line */}
        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-red-600 via-orange-400 to-transparent" />

      </div>

      {/* =====================================
          STATS CARDS
      ===================================== */}

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {[
          {
            title: "Total Projects",
            value: totalProjects,
            icon: FolderKanban,
            info: "Portfolio items",
          },
          {
            title: "Concept Projects",
            value: conceptProjects,
            icon: ImageIcon,
            info: "Illustrative concepts",
          },
          {
            title: "Approved Reviews",
            value: approvedTestimonials,
            icon: MessageSquareQuote,
            info: "Approved for publishing",
          },
          {
            title: "Working Hours",
            value: content.workingHours.trim()
              ? "Added"
              : "Pending",
            icon: Clock3,
            info: "Consultation availability",
          },
        ].map(({ title, value, icon: Icon, info }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-[25px] border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-[0_15px_40px_rgba(220,38,38,0.09)]"
          >

            <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-red-500/5 blur-3xl transition-colors group-hover:bg-red-500/10" />

            <div className="flex items-start justify-between">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white">

                <Icon className="h-6 w-6" />

              </div>

              <ArrowUpRight className="h-4 w-4 text-slate-300 transition-colors group-hover:text-red-600" />

            </div>

            <p className="mt-6 text-3xl font-black text-slate-950">
              {value}
            </p>

            <h3 className="mt-2 text-sm font-extrabold text-slate-800">
              {title}
            </h3>

            <p className="mt-1 text-xs text-slate-500">
              {info}
            </p>

            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-600 to-orange-400 transition-all duration-500 group-hover:w-full" />

          </div>
        ))}

      </div>

      {/* =====================================
          MESSAGES
      ===================================== */}

      {notice && (
        <div
          role="status"
          aria-live="polite"
          className={`flex items-start gap-3 rounded-2xl border px-5 py-4 text-sm font-semibold leading-7 ${
            notice.type === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-800"
              : notice.type === "error"
              ? "border-red-200 bg-red-50 text-red-800"
              : "border-slate-200 bg-slate-50 text-slate-700"
          }`}
        >

          {notice.type === "success" ? (
            <CheckCircle2 className="mt-1 h-5 w-5 shrink-0" />
          ) : (
            <AlertCircle className="mt-1 h-5 w-5 shrink-0" />
          )}

          <span>{notice.text}</span>

        </div>
      )}

      {/* =====================================
          MAIN CONTENT EDITOR
      ===================================== */}

      <div className="min-w-0 overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_15px_50px_rgba(15,23,42,0.05)]">

        {/* Editor Header */}
        <div className="flex flex-col justify-between gap-5 border-b border-slate-100 px-5 py-7 sm:flex-row sm:items-center sm:px-8">

          <div>
            <h3 className="text-2xl font-black text-slate-950">
              Manage Website Content
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Select a section to edit and publish website
              information.
            </p>
          </div>

          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-xs font-extrabold text-red-600">
            <ShieldCheck className="h-4 w-4" />
            Admin Content Control
          </div>

        </div>

        {loading ? (

          /* LOADING STATE */
          <div className="flex min-h-72 flex-col items-center justify-center px-6 py-16 text-center">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-600">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>

            <h3 className="mt-6 text-xl font-black text-slate-950">
              Loading Website Content
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Fetching your saved content from Supabase.
            </p>

          </div>

        ) : !ready ? (

          /* ERROR / RETRY STATE */
          <div className="flex min-h-64 flex-col items-center justify-center px-6 py-12 text-center">

            <AlertCircle className="h-12 w-12 text-red-500" />

            <h3 className="mt-5 text-xl font-black text-slate-950">
              Content Editor Unavailable
            </h3>

            <p className="mt-2 max-w-md text-sm leading-7 text-slate-600">
              Please verify your Supabase connection,
              authentication and table permissions.
            </p>

            <button
              type="button"
              onClick={() => void load()}
              className={`mt-6 ${actionClass}`}
            >
              <RefreshCcw className="h-4 w-4" />
              Retry Loading
            </button>

          </div>

        ) : (
          <>

            {/* =====================================
                TABS
            ===================================== */}

            <div className="border-b border-slate-100 bg-slate-50/50 px-4 py-5 sm:px-8">

              <div
                role="group"
                aria-label="Website content sections"
                className="flex flex-wrap gap-3"
              >

                {tabs.map(
                  ({ id, label, icon: Icon, count }) => {
                    const active = tab === id;

                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => setTab(id)}
                        aria-pressed={active}
                        className={`group relative inline-flex min-h-12 items-center gap-2.5 overflow-hidden rounded-2xl border px-4 py-3 text-sm font-extrabold transition-all duration-300 ${
                          active
                            ? "border-red-600 bg-gradient-to-r from-red-600 to-red-700 text-white shadow-[0_8px_25px_rgba(220,38,38,0.2)]"
                            : "border-slate-200 bg-white text-slate-600 hover:-translate-y-0.5 hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                        }`}
                      >

                        <Icon className="relative z-10 h-4 w-4" />

                        <span className="relative z-10">
                          {label}
                        </span>

                        {count !== null && (
                          <span
                            className={`relative z-10 rounded-lg px-2 py-0.5 text-xs ${
                              active
                                ? "bg-white/20 text-white"
                                : "bg-slate-100 text-slate-500"
                            }`}
                          >
                            {count}
                          </span>
                        )}

                        {active && (
                          <span className="pointer-events-none absolute -left-20 top-0 h-full w-12 skew-x-[-25deg] bg-white/20 transition-all duration-700 group-hover:left-[120%]" />
                        )}

                      </button>
                    );
                  }
                )}

              </div>

            </div>

            <fieldset
              disabled={saving}
              className="min-w-0 border-0 p-0 disabled:opacity-70"
            >

              {/* =====================================
                  PROJECTS TAB
              ===================================== */}

              {tab === "projects" && (
                <div className="space-y-7 p-5 sm:p-8">

                  {/* Header */}
                  <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

                    <div>
                      <h3 className="text-2xl font-black text-slate-950">
                        Project Management
                      </h3>

                      <p className="mt-2 max-w-xl text-sm leading-7 text-slate-600">
                        Add and manage your architecture,
                        construction and interior design
                        portfolio.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={addProject}
                      className={actionClass}
                    >
                      <Plus className="h-5 w-5" />
                      Add New Project
                    </button>

                  </div>

                  {/* Note */}
                  <div className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4">

                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />

                    <p className="text-sm leading-7 text-amber-900">
                      Use approved project photos and
                      information. Illustrative projects
                      must remain marked as{" "}
                      <strong>Concept</strong> until verified.
                      Use local image paths or HTTPS URLs.
                    </p>

                  </div>

                  {/* Empty Projects */}
                  {content.projects.length === 0 && (
                    <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-14 text-center">

                      <FolderKanban className="mx-auto h-12 w-12 text-red-500" />

                      <h4 className="mt-5 text-xl font-black text-slate-950">
                        No Projects Added
                      </h4>

                      <p className="mt-2 text-sm text-slate-500">
                        Create your first portfolio project.
                      </p>

                    </div>
                  )}

                  {/* Project List */}
                  <div className="space-y-5">

                    {content.projects.map(
                      (project, index) => {
                        const expanded =
                          openProject === index;

                        const imageValid =
                          project.image.startsWith("/") ||
                          project.image.startsWith("https://");

                        return (
                          <div
                            key={index}
                            className="group overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-red-200 hover:shadow-[0_12px_40px_rgba(220,38,38,0.07)]"
                          >

                            {/* Project Summary */}
                            <button
                              type="button"
                              onClick={() =>
                                setOpenProject(
                                  expanded ? null : index
                                )
                              }
                              aria-expanded={expanded}
                              className="flex w-full items-center gap-4 p-4 text-left sm:p-5"
                            >

                              {/* Thumbnail */}
                              <div className="relative flex h-20 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-slate-100 sm:w-28">

                                {imageValid ? (
                                  <Image
                                    unoptimized
                                    fill
                                    sizes="112px"
                                    src={project.image}
                                    alt=""
                                    loading="lazy"
                                    className="h-full w-full object-cover"
                                  />
                                ) : (
                                  <ImageIcon className="h-8 w-8 text-slate-400" />
                                )}

                              </div>

                              {/* Project Info */}
                              <div className="min-w-0 flex-1">

                                <div className="flex flex-wrap items-center gap-2">

                                  <h4 className="truncate text-base font-black text-slate-950 sm:text-lg">
                                    {project.title ||
                                      "Untitled Project"}
                                  </h4>

                                  <span
                                    className={`rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-wide ${
                                      project.status === "Concept"
                                        ? "bg-amber-50 text-amber-700"
                                        : "bg-emerald-50 text-emerald-700"
                                    }`}
                                  >
                                    {project.status}
                                  </span>

                                </div>

                                <p className="mt-2 flex items-center gap-1.5 text-xs text-slate-500 sm:text-sm">
                                  <MapPin className="h-3.5 w-3.5 shrink-0 text-red-500" />

                                  {project.city || "Location not added"}
                                </p>

                                <p className="mt-1 truncate text-xs text-slate-500">
                                  {project.type}
                                </p>

                              </div>

                              {/* Expand Icon */}
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">

                                <ChevronDown
                                  className={`h-5 w-5 transition-transform duration-300 ${
                                    expanded ? "rotate-180" : ""
                                  }`}
                                />

                              </div>

                            </button>

                            {/* Project Editor */}
                            {expanded && (
                              <div className="border-t border-slate-100 bg-slate-50/40 p-5 sm:p-7">

                                <div className="mb-7 flex items-center gap-3">

                                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600">

                                    <FileText className="h-5 w-5" />

                                  </div>

                                  <div>
                                    <h5 className="font-black text-slate-950">
                                      Edit Project Details
                                    </h5>

                                    <p className="text-xs text-slate-500">
                                      Update project information below.
                                    </p>
                                  </div>

                                </div>

                                <div className="grid gap-5 md:grid-cols-2">

                                  <Field
                                    label="Project Title"
                                    value={project.title}
                                    onChange={(title) =>
                                      updateProject(index, {
                                        title,
                                      })
                                    }
                                  />

                                  <Field
                                    label="URL Slug"
                                    value={project.slug}
                                    onChange={(slug) =>
                                      updateProject(index, {
                                        slug,
                                      })
                                    }
                                    placeholder="modern-house-patna"
                                  />

                                  <Field
                                    label="City / Location"
                                    value={project.city}
                                    onChange={(city) =>
                                      updateProject(index, {
                                        city,
                                      })
                                    }
                                  />

                                  <Field
                                    label="Project Area"
                                    value={project.area}
                                    onChange={(area) =>
                                      updateProject(index, {
                                        area,
                                      })
                                    }
                                  />

                                  <Choice
                                    label="Project Category"
                                    value={project.category}
                                    options={[
                                      "Residential Projects",
                                      "Commercial Projects",
                                    ]}
                                    onChange={(category) =>
                                      updateProject(index, {
                                        category:
                                          category as Project["category"],
                                      })
                                    }
                                  />

                                  <Choice
                                    label="Project Type"
                                    value={project.type}
                                    options={[
                                      "Architecture",
                                      "Interior Design",
                                      "Construction",
                                    ]}
                                    onChange={(type) =>
                                      updateProject(index, {
                                        type:
                                          type as Project["type"],
                                      })
                                    }
                                  />

                                  <Choice
                                    label="Completion Status"
                                    value={project.status}
                                    options={[
                                      "Concept",
                                      "Ongoing Projects",
                                      "Completed Projects",
                                    ]}
                                    onChange={(status) =>
                                      updateProject(index, {
                                        status:
                                          status as Project["status"],
                                      })
                                    }
                                  />

                                  <Field
                                    label="Main Image URL"
                                    value={project.image}
                                    onChange={(image) =>
                                      updateProject(index, {
                                        image,
                                      })
                                    }
                                    placeholder="/projects/project-1.jpg"
                                  />

                                  <Field
                                    label="Short Description"
                                    value={project.details}
                                    onChange={(details) =>
                                      updateProject(index, {
                                        details,
                                      })
                                    }
                                    multiline
                                  />

                                  <Field
                                    label="Project Overview"
                                    value={project.overview}
                                    onChange={(overview) =>
                                      updateProject(index, {
                                        overview,
                                      })
                                    }
                                    multiline
                                  />

                                  <Field
                                    label="Work Completed"
                                    value={project.work}
                                    onChange={(work) =>
                                      updateProject(index, {
                                        work,
                                      })
                                    }
                                    multiline
                                  />

                                  <Field
                                    label="Materials"
                                    value={project.materials}
                                    onChange={(materials) =>
                                      updateProject(index, {
                                        materials,
                                      })
                                    }
                                    multiline
                                  />

                                  <div className="md:col-span-2">
                                    <Field
                                      label="Gallery Image URLs (One Per Line)"
                                      value={project.gallery.join(
                                        "\n"
                                      )}
                                      onChange={(gallery) =>
                                        updateProject(index, {
                                          gallery:
                                            gallery.split("\n"),
                                        })
                                      }
                                      multiline
                                    />
                                  </div>

                                </div>

                                {/* Project Actions */}
                                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6">

                                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500">

                                    <ShieldCheck className="h-4 w-4 text-red-500" />

                                    Changes publish after saving.

                                  </div>

                                  <button
                                    type="button"
                                    onClick={() =>
                                      removeProject(index)
                                    }
                                    className="inline-flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-5 py-3 text-sm font-bold text-red-700 transition hover:border-red-600 hover:bg-red-600 hover:text-white"
                                  >
                                    <Trash2 className="h-4 w-4" />

                                    Remove Project
                                  </button>

                                </div>

                              </div>
                            )}

                          </div>
                        );
                      }
                    )}

                  </div>

                </div>
              )}

              {/* =====================================
                  TESTIMONIALS TAB
              ===================================== */}

              {tab === "testimonials" && (
                <div className="space-y-7 p-5 sm:p-8">

                  <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

                    <div>
                      <h3 className="text-2xl font-black text-slate-950">
                        Customer Testimonials
                      </h3>

                      <p className="mt-2 max-w-xl text-sm leading-7 text-slate-600">
                        Manage genuine client feedback and
                        approve reviews for publication.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={addTestimonial}
                      className={actionClass}
                    >
                      <Plus className="h-5 w-5" />
                      Add Feedback
                    </button>

                  </div>

                  {/* Approval Note */}
                  <div className="flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50 px-5 py-4">

                    <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-blue-600" />

                    <p className="text-sm leading-7 text-blue-900">
                      Publish only genuine customer feedback
                      with the customer&apos;s permission.
                      Unapproved feedback remains hidden
                      from the public website.
                    </p>

                  </div>

                  {/* Empty State */}
                  {content.testimonials.length === 0 && (
                    <div className="rounded-[28px] border border-dashed border-slate-300 bg-slate-50 px-6 py-14 text-center">

                      <MessageSquareQuote className="mx-auto h-12 w-12 text-red-500" />

                      <h4 className="mt-5 text-xl font-black text-slate-950">
                        No Feedback Added Yet
                      </h4>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        Add approved customer testimonials
                        when genuine feedback becomes available.
                      </p>

                    </div>
                  )}

                  {/* Testimonials */}
                  <div className="grid gap-6 lg:grid-cols-2">

                    {content.testimonials.map(
                      (item, index) => (
                        <div
                          key={index}
                          className="group relative overflow-hidden rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.05)] transition-all duration-300 hover:border-red-200 hover:shadow-[0_15px_40px_rgba(220,38,38,0.07)]"
                        >

                          <div className="flex items-start justify-between gap-3">

                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600">

                              <MessageSquareQuote className="h-6 w-6" />

                            </div>

                            <span
                              className={`rounded-full px-3 py-1.5 text-xs font-bold ${
                                item.approved
                                  ? "bg-emerald-50 text-emerald-700"
                                  : "bg-amber-50 text-amber-700"
                              }`}
                            >
                              {item.approved
                                ? "Approved"
                                : "Draft"}
                            </span>

                          </div>

                          <h4 className="mt-6 text-xl font-black text-slate-950">
                            Customer Feedback {index + 1}
                          </h4>

                          <div className="mt-6 grid gap-5">

                            <Field
                              label="Customer Name"
                              value={item.name}
                              onChange={(name) =>
                                updateTestimonial(index, {
                                  name,
                                })
                              }
                            />

                            <Field
                              label="Customer City"
                              value={item.city}
                              onChange={(city) =>
                                updateTestimonial(index, {
                                  city,
                                })
                              }
                            />

                            <Field
                              label="Genuine Customer Feedback"
                              value={item.quote}
                              onChange={(quote) =>
                                updateTestimonial(index, {
                                  quote,
                                })
                              }
                              multiline
                            />

                          </div>

                          {/* Approval Checkbox */}
                          <label className="mt-6 flex cursor-pointer items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">

                            <input
                              type="checkbox"
                              checked={item.approved}
                              onChange={(event) =>
                                updateTestimonial(index, {
                                  approved:
                                    event.target.checked,
                                })
                              }
                              className="mt-1 h-5 w-5 shrink-0 accent-red-600"
                            />

                            <div>
                              <p className="text-sm font-bold text-slate-900">
                                Approve for Publication
                              </p>

                              <p className="mt-1 text-xs leading-5 text-slate-500">
                                I confirm this is genuine
                                feedback and permission to
                                publish has been obtained.
                              </p>
                            </div>

                          </label>

                          <button
                            type="button"
                            onClick={() =>
                              removeTestimonial(index)
                            }
                            className="mt-6 inline-flex items-center gap-2 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-bold text-red-700 transition-colors hover:border-red-600 hover:bg-red-600 hover:text-white"
                          >
                            <Trash2 className="h-4 w-4" />
                            Remove Feedback
                          </button>

                          <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-600 to-orange-400 transition-all duration-500 group-hover:w-full" />

                        </div>
                      )
                    )}

                  </div>

                </div>
              )}

              {/* =====================================
                  WORKING HOURS TAB
              ===================================== */}

              {tab === "hours" && (
                <div className="p-5 sm:p-8">

                  <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">

                    {/* Left */}
                    <div>

                      <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-red-50 text-red-600">
                        <Clock3 className="h-8 w-8" />
                      </div>

                      <h3 className="mt-6 text-2xl font-black text-slate-950 sm:text-3xl">
                        Working Hours & Availability
                      </h3>

                      <p className="mt-4 leading-8 text-slate-600">
                        Set the consultation availability
                        displayed on your public contact page.
                        You can update it whenever your
                        business schedule changes.
                      </p>

                      <div className="mt-7 flex items-start gap-3 rounded-2xl border border-red-100 bg-red-50 px-5 py-4">

                        <Sparkles className="mt-1 h-5 w-5 shrink-0 text-red-600" />

                        <p className="text-sm leading-7 text-slate-700">
                          If your working hours are not
                          finalized, use an accurate
                          availability message instead of
                          inventing business hours.
                        </p>

                      </div>

                    </div>

                    {/* Right */}
                    <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm sm:p-8">

                      <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-red-500/5 blur-[80px]" />

                      <h4 className="relative text-xl font-black text-slate-950">
                        Consultation Schedule
                      </h4>

                      <p className="relative mt-2 text-sm text-slate-500">
                        Edit the text shown to website visitors.
                      </p>

                      <div className="relative mt-7">

                        <Field
                          label="Working Hours / Consultation Availability"
                          value={content.workingHours}
                          onChange={(workingHours) =>
                            change({
                              ...content,
                              workingHours,
                            })
                          }
                          placeholder="Enter confirmed working hours or consultation availability..."
                          multiline
                        />

                      </div>

                      {/* Preview */}
                      <div className="relative mt-7 rounded-2xl border border-red-100 bg-white p-5">

                        <div className="flex items-center gap-2 text-sm font-black text-red-600">

                          <Clock3 className="h-4 w-4" />

                          Website Preview

                        </div>

                        <p className="mt-4 whitespace-pre-line text-sm leading-7 text-slate-700">
                          {content.workingHours.trim() ||
                            "Your consultation availability will appear here."}
                        </p>

                      </div>

                    </div>

                  </div>

                </div>
              )}

            </fieldset>

            {/* =====================================
                BOTTOM SAVE BAR
            ===================================== */}

            <div className="flex flex-col justify-between gap-5 border-t border-slate-200 bg-slate-50 px-5 py-6 sm:flex-row sm:items-center sm:px-8">

              <div className="flex items-start gap-3">

                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                    dirty
                      ? "bg-amber-50 text-amber-600"
                      : "bg-emerald-50 text-emerald-600"
                  }`}
                >

                  {dirty ? (
                    <AlertCircle className="h-5 w-5" />
                  ) : (
                    <CheckCircle2 className="h-5 w-5" />
                  )}

                </div>

                <div>
                  <p className="text-sm font-black text-slate-900">
                    {dirty
                      ? "You Have Unpublished Changes"
                      : "No Pending Changes"}
                  </p>

                  <p className="mt-1 text-xs leading-6 text-slate-500">
                    {dirty
                      ? "Click Save & Publish to store your content in Supabase."
                      : "All changes made in this editor have been saved or no edits are pending."}
                  </p>
                </div>

              </div>

              <button
                type="button"
                onClick={save}
                disabled={!ready || saving || !dirty}
                className={actionClass}
              >

                {saving ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Save className="h-4 w-4" />
                )}

                {saving
                  ? "Publishing..."
                  : "Save & Publish"}

              </button>

            </div>

          </>
        )}

      </div>

    </section>
  );
}
