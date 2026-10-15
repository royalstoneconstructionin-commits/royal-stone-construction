import Link from "next/link";
import { businessContact } from "@/lib/business-contact";

export default function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return <main className="bg-white py-12 sm:py-16"><div className="site-container max-w-3xl">
    <Link href="/" className="inline-flex min-h-11 items-center text-sm font-semibold text-brand-600">Home</Link>
    <h1 className="mt-5 text-4xl font-bold text-slate-950">{title}</h1>
    <div className="mt-8 space-y-6 text-base leading-8 text-slate-700">{children}</div>
    <p className="mt-10 text-sm leading-7 text-slate-600">For questions, contact <a className="text-brand-600 underline" href={`mailto:${businessContact.email}`}>{businessContact.email}</a> or <a className="text-brand-600 underline" href={businessContact.phoneHref}>{businessContact.phoneDisplay}</a>.</p>
  </div></main>;
}
