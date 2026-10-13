import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import PricingPackages from "@/components/PricingPackages";
import DesignFeeCalculator from "@/components/DesignFeeCalculator";
import { metadataForRoute } from "@/lib/seo";

export const metadata: Metadata = metadataForRoute("/packages");

export default function PackagesPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-[#faf9f7] py-10 sm:py-14">
        <div className="site-container">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-red-600">Home</Link>
            <ChevronRight aria-hidden="true" className="h-4 w-4" />
            <span aria-current="page" className="text-slate-900">Packages</span>
          </nav>
          <p className="text-xs font-bold tracking-[0.18em] text-red-600">PLAN YOUR SPACE</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Find Your Design Package</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Compare Silver, Gold and Platinum packages for Patna and Noida.
            Explore the drawings and design services included, then enquire
            with your preferred city and package.
          </p>
        </div>
      </section>
      <PricingPackages reference />
      <DesignFeeCalculator />
    </main>
  );
}
