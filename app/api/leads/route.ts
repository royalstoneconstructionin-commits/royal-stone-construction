import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { prepareLeadSubmission } from "@/lib/lead-submission";

export async function POST(request: Request) {
  if (Number(request.headers.get("content-length")) > 16_384) return NextResponse.json({ error: "Enquiry is too large." }, { status: 413 });
  let lead;
  try {
    lead = prepareLeadSubmission(await request.json());
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Invalid enquiry." }, { status: 400 });
  }
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return NextResponse.json({ error: "Online enquiries are currently unavailable. Please contact us directly." }, { status: 503 });
  try {
    const client = createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
    const { error } = await client.from("leads").insert(lead);
    if (error) throw error;
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Unable to submit enquiry. Please try again or contact us directly." }, { status: 503 });
  }
}
