import { cache } from "react";
import { unstable_cache } from "next/cache";
import { createClient } from "@supabase/supabase-js";
import { defaultContent, isSiteContent } from "@/lib/content";

// Public RLS-protected content only. Uses the existing public credentials.
const getCachedContent = unstable_cache(async (url: string, key: string) => {
    const client = createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false }, global: { fetch: (input, init) => fetch(input, { ...init, cache: "no-store", signal: AbortSignal.timeout(5000) }) } });
    const { data, error } = await client.from("site_content").select("content").eq("id", "public").maybeSingle();
    // Do not persist failed requests in the data cache.
    if (error) throw error;
    if (!data) return defaultContent;
    if (!isSiteContent(data.content)) throw new Error("Invalid public site content");
    return data.content;
}, ["public-site-content-v1"], { revalidate: 30, tags: ["site-content"] });

export const getSiteContent = cache(async () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return defaultContent;
  try {
    return await getCachedContent(url, key);
  } catch { return defaultContent; }
});
