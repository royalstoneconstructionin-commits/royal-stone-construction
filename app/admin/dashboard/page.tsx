"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut, RefreshCw, Trash2 } from "lucide-react";
import { createSupabaseBrowserClient } from "@/lib/supabase-browser";

type Lead = {
  id: string;
  name: string;
  mobile: string;
  city: string;
  purpose: string;
  status: "New" | "Contacted" | "In Progress" | "Closed";
  created_at: string;
};

const statuses: Lead["status"][] = ["New", "Contacted", "In Progress", "Closed"];

export default function AdminDashboard() {
  const router = useRouter();
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  async function loadLeads() {
    if (!supabase) {
      router.replace("/admin/login");
      return;
    }
    setLoading(true);
    const { data: userData } = await supabase.auth.getUser();
    if (!userData.user) {
      router.replace("/admin/login");
      return;
    }

    const { data: adminRow } = await supabase.from("admin_users").select("user_id").eq("user_id", userData.user.id).maybeSingle();
    if (!adminRow) {
      await supabase.auth.signOut();
      router.replace("/admin/login");
      return;
    }

    const { data, error } = await supabase.from("leads").select("*").order("created_at", { ascending: false });
    if (error) console.error(error);
    setLeads((data ?? []) as Lead[]);
    setLoading(false);
  }

  useEffect(() => {
    loadLeads();
  }, []);

  async function updateStatus(id: string, status: Lead["status"]) {
    if (!supabase) return;
    const { error } = await supabase.from("leads").update({ status }).eq("id", id);
    if (!error) setLeads((current) => current.map((lead) => (lead.id === id ? { ...lead, status } : lead)));
  }

  async function deleteLead(id: string) {
    if (!supabase) return;
    if (!window.confirm("Delete this lead permanently?")) return;
    const { error } = await supabase.from("leads").delete().eq("id", id);
    if (!error) setLeads((current) => current.filter((lead) => lead.id !== id));
  }

  async function logout() {
    if (supabase) await supabase.auth.signOut();
    router.push("/admin/login");
  }

  const filtered = leads.filter((lead) => `${lead.name} ${lead.mobile} ${lead.city} ${lead.purpose}`.toLowerCase().includes(search.toLowerCase()));

  return (
    <main className="min-h-screen bg-slate-100 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="text-xs font-black tracking-[0.18em] text-red-600">ROYAL STONE CONSTRUCTION</span>
            <h1 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl">Lead Dashboard</h1>
            <p className="mt-2 text-slate-600">View and manage all enquiries received from the website.</p>
          </div>
          <div className="flex gap-3">
            <button onClick={loadLeads} className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 font-bold text-slate-800 shadow-sm"><RefreshCw className="h-4 w-4" /> Refresh</button>
            <button onClick={logout} className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-3 font-bold text-white"><LogOut className="h-4 w-4" /> Logout</button>
          </div>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat label="Total Leads" value={leads.length} />
          <Stat label="New" value={leads.filter((x) => x.status === "New").length} />
          <Stat label="In Progress" value={leads.filter((x) => x.status === "In Progress").length} />
          <Stat label="Closed" value={leads.filter((x) => x.status === "Closed").length} />
        </div>

        <div className="mt-6 overflow-hidden rounded-3xl bg-white shadow-sm">
          <div className="flex flex-col gap-4 border-b border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div><h2 className="text-xl font-black text-slate-950">All Leads</h2><p className="text-sm text-slate-500">Newest enquiries appear first.</p></div>
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search name, mobile, city..." className="h-11 w-full rounded-xl border border-slate-300 px-4 outline-none focus:border-red-500 sm:max-w-sm" />
          </div>

          {loading ? (
            <div className="p-10 text-center text-slate-500">Loading leads...</div>
          ) : filtered.length === 0 ? (
            <div className="p-10 text-center text-slate-500">No leads found.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-[980px] w-full border-collapse">
                <thead className="bg-slate-50 text-left text-xs uppercase tracking-wider text-slate-500">
                  <tr><th className="p-4">#</th><th className="p-4">Name</th><th className="p-4">Mobile</th><th className="p-4">City</th><th className="p-4">Purpose</th><th className="p-4">Status</th><th className="p-4">Received</th><th className="p-4">Action</th></tr>
                </thead>
                <tbody>
                  {filtered.map((lead, index) => (
                    <tr key={lead.id} className="border-t border-slate-100 text-sm">
                      <td className="p-4 text-slate-500">{index + 1}</td>
                      <td className="p-4 font-bold text-slate-900">{lead.name}</td>
                      <td className="p-4"><a className="font-semibold text-red-600" href={`tel:${lead.mobile}`}>{lead.mobile}</a></td>
                      <td className="p-4 text-slate-700">{lead.city}</td>
                      <td className="p-4"><span className="rounded-lg bg-red-50 px-2.5 py-1.5 font-semibold text-red-700">{lead.purpose}</span></td>
                      <td className="p-4">
                        <select value={lead.status} onChange={(e) => updateStatus(lead.id, e.target.value as Lead["status"])} className="rounded-lg border border-slate-300 bg-white px-3 py-2">
                          {statuses.map((status) => <option key={status} value={status}>{status}</option>)}
                        </select>
                      </td>
                      <td className="p-4 text-slate-500">{new Date(lead.created_at).toLocaleString("en-IN")}</td>
                      <td className="p-4"><button onClick={() => deleteLead(lead.id)} className="rounded-lg bg-red-50 p-2 text-red-700 transition hover:bg-red-100" aria-label="Delete lead"><Trash2 className="h-4 w-4" /></button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return <div className="rounded-2xl bg-white p-5 shadow-sm"><p className="text-sm font-semibold text-slate-500">{label}</p><p className="mt-2 text-3xl font-black text-slate-950">{value}</p></div>;
}
