import StructuredData from "@/components/StructuredData";
import { metadataForRoute } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { Building2, ShieldCheck } from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTASection, { buttonClass } from "@/components/CTASection";
import ProcessTimeline from "@/components/ProcessTimeline";
import ProjectCard from "@/components/ProjectCard";
import Testimonials from "@/components/Testimonials";
import { services } from "@/lib/site-data";
import { getSiteContent } from "@/lib/site-content-server";

export const revalidate = 30;
export const metadata: Metadata = metadataForRoute("/");

export default async function HomePage() {
  const content = await getSiteContent();
  return <main className="bg-white">
    <StructuredData />
    <Hero />
    <section className="py-20"><div className="site-container grid items-center gap-10 lg:grid-cols-2"><SectionHeading eyebrow="ABOUT ROYAL STONE" title="One team for your next chapter." text="From your first floor plan to the final finish, Royal Stone Construction brings design and execution together. We help you make considered decisions for your home or commercial space." /><div><p className="text-lg leading-8 text-slate-600">Based in Patna, Bihar, our approach combines practical planning, clear scope and coordinated project delivery. Your priorities shape the work at every stage.</p><Link href="/about" className={`mt-7 ${buttonClass}`}>Learn More About Us</Link></div></div></section>
    <section id="services" className="bg-white py-20"><div className="site-container"><SectionHeading eyebrow="OUR SERVICES" title="Everything you need to build better." text="One team for planning, execution and interiors." /><div className="mt-10 grid gap-6 md:grid-cols-3">{services.slice(0, 3).map(service => <ServiceCard key={service.slug} service={service} />)}</div><Link href="/services" className={`mt-8 ${buttonClass}`}>View Services</Link></div></section>
    <section className="bg-slate-50 py-16"><div className="site-container grid items-center gap-8 md:grid-cols-[1fr_auto]"><SectionHeading eyebrow="DESIGN PACKAGES" title="Choose the right starting point." text="Explore our existing architecture packages for Patna and Noida, with scope and pricing details on the architecture page." /><Link href="/services/architecture" className={buttonClass}>View Design Packages</Link></div></section>
    <section id="why-us" className="bg-[#0d1728] py-20 text-white"><div className="site-container grid gap-10 lg:grid-cols-2"><div><span className="text-sm font-black tracking-[0.18em] text-red-400">WHY ROYAL STONE</span><h2 className="mt-3 text-4xl font-black sm:text-5xl">Professional execution from concept to completion.</h2><Link href="/why-us" className={`mt-7 ${buttonClass}`}>Why Choose Us</Link></div><div className="grid gap-5 sm:grid-cols-2"><div className="rounded-2xl border border-white/10 bg-white/5 p-6"><ShieldCheck className="text-red-400" /><h3 className="mt-4 text-xl font-bold">Transparent Process</h3><p className="mt-2 leading-7 text-slate-300">Clear communication, planning and progress visibility.</p></div><div className="rounded-2xl border border-white/10 bg-white/5 p-6"><Building2 className="text-red-400" /><h3 className="mt-4 text-xl font-bold">One Team</h3><p className="mt-2 leading-7 text-slate-300">Architecture, construction and interiors under one workflow.</p></div></div></div></section>
    <section className="py-20"><div className="site-container"><SectionHeading eyebrow="OUR PROCESS" title="From your first idea to final handover." text="A coordinated workflow with clear decisions at each stage." /><ProcessTimeline preview /><Link href="/process" className={`mt-8 ${buttonClass}`}>Explore Our Process</Link></div></section>
    <section className="py-20"><div className="site-container"><SectionHeading eyebrow="PROJECTS PREVIEW" title="Explore what your space could become." text="Our gallery is ready for approved project documentation. Clearly labeled concepts show how upcoming work will be presented." /><div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{content.projects.slice(0, 3).map(project => <ProjectCard key={project.slug} project={project} />)}</div>{content.projects.length === 0 && <p className="mt-8 leading-7 text-slate-600">Project updates coming soon.</p>}<Link href="/projects" className={`mt-8 ${buttonClass}`}>View Projects</Link></div></section>
    <Testimonials testimonials={content.testimonials} /><CTASection />
  </main>;
}
