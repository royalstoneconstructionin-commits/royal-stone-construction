import Link from "next/link";
import { buttonClass } from "@/components/CTASection";
export default function NotFound() { return <main className="site-container py-24 text-center"><p className="font-black tracking-widest text-brand-600">404</p><h1 className="mt-4 text-4xl font-black text-slate-950">Page not found.</h1><p className="mt-5 leading-7 text-slate-600">This page may have moved or the project may no longer be published.</p><Link href="/" className={`mt-8 ${buttonClass}`}>Back to Home</Link></main>; }
