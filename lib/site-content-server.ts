import { cache } from "react";
import { createClient } from "@supabase/supabase-js";
import { defaultContent, isSiteContent } from "@/lib/content";

// Public RLS-protected content only. Uses the existing public credentials.
export const getSiteContent = cache(async () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return defaultContent;
  try {
    const client = createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false }, global: { fetch: (input, init) => fetch(input, { ...init, cache: "no-store", signal: AbortSignal.timeout(5000) }) } });
    const { data, error } = await client.from("site_content").select("content").eq("id", "public").maybeSingle();
    return !error && isSiteContent(data?.content) ? data.content : defaultContent;
  } catch { return defaultContent; }
});
