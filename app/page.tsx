import StructuredData from "@/components/StructuredData";
import { metadataForRoute } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { Building2, ShieldCheck, FileText, Box, ChartNoAxesColumnIncreasing, ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import ProcessTimeline from "@/components/ProcessTimeline";
import ProjectCard from "@/components/ProjectCard";
import Testimonials from "@/components/Testimonials";
import PricingPackages from "@/components/PricingPackages";
import HomeFAQ from "@/components/HomeFAQ";
import { services } from "@/lib/site-data";
import { getSiteContent } from "@/lib/site-content-server";

export const revalidate = 30;
export const metadata: Metadata = metadataForRoute("/");

const homeButton = "inline-flex min-h-11 items-center justify-center gap-3 rounded-md bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700";
const reasons = [
  { Icon: ShieldCheck, title: "Transparent Process", text: "Clear communication, planning and progress visibility." },
  { Icon: Building2, title: "One Team", text: "Architecture, construction and interiors under one workflow." },
  { Icon: FileText, title: "Clear Scope", text: "Confirm drawings, specifications and a detailed quotation before execution." },
  { Icon: Box, title: "Material Specifications", text: "Agree material specifications and inspection checkpoints before construction." },
  { Icon: ChartNoAxesColumnIncreasing, title: "Progress Updates", text: "Site coordination and progress reviews throughout your build." },
];

export default async function HomePage() {
  const content = await getSiteContent();
  return <main className="bg-white">
    <StructuredData />
    <Hero />
    <section className="py-12 sm:py-16">
      <div className="site-container grid items-center gap-8 lg:grid-cols-2">
        <SectionHeading compact eyebrow="ABOUT ROYAL STONE" title="One team for your next chapter." text="From your first floor plan to the final finish, Royal Stone Construction brings design and execution together. We help you make considered decisions for your home or commercial space." />
        <div><p className="text-base leading-7 text-slate-600">Based in Patna, Bihar, our approach combines practical planning, clear scope and coordinated project delivery. Your priorities shape the work at every stage.</p><Link href="/about" className={`mt-5 ${homeButton}`}>Learn More About Us <ArrowRight className="h-4 w-4" /></Link></div>
      </div>
    </section>
    <section id="services" className="scroll-mt-24 bg-[#faf9f7] py-12 sm:py-16">
      <div className="site-container">
        <SectionHeading compact eyebrow="OUR SERVICES" title="Everything you need to build better." text="One team for planning, execution and interiors." />
        <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map(service => <ServiceCard reference key={service.slug} service={service} />)}</div>
        <Link href="/services" className={`mt-6 ${homeButton}`}>View Services <ArrowRight className="h-4 w-4" /></Link>
      </div>
    </section>
    <PricingPackages reference />
    <section id="why-us" className="scroll-mt-24 bg-[#faf9f7] py-12 sm:py-16">
      <div className="site-container">
        <SectionHeading compact eyebrow="WHY ROYAL STONE" title="Professional execution from concept to completion." />
        <div className="mt-7 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">{reasons.map(({ Icon, title, text }) => <div key={title} className="flex items-start gap-4"><span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600"><Icon className="h-6 w-6" strokeWidth={1.6} /></span><div><h3 className="text-base font-bold text-slate-950">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{text}</p></div></div>)}</div>
        <Link href="/why-us" className={`mt-6 ${homeButton}`}>Why Choose Us <ArrowRight className="h-4 w-4" /></Link>
      </div>
    </section>
    <section className="py-12 sm:py-16">
      <div className="site-container">
        <SectionHeading compact eyebrow="OUR PROCESS" title="From your first idea to final handover." text="A coordinated workflow with clear decisions at each stage." />
        <ProcessTimeline preview reference />
        <Link href="/process" className={`mt-6 ${homeButton}`}>Explore Our Process <ArrowRight className="h-4 w-4" /></Link>
      </div>
    </section>
    <section className="bg-[#faf9f7] py-12 sm:py-16">
      <div className="site-container">
        <SectionHeading compact eyebrow="PROJECTS PREVIEW" title="Explore what your space could become." text="Our gallery is ready for approved project documentation. Clearly labeled concepts show how upcoming work will be presented." />
        <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{content.projects.map(project => <ProjectCard reference key={project.slug} project={project} />)}</div>
        {content.projects.length === 0 && <p className="mt-8 leading-7 text-slate-600">Project updates coming soon.</p>}
        <Link href="/projects" className={`mt-6 ${homeButton}`}>View Projects <ArrowRight className="h-4 w-4" /></Link>
      </div>
    </section>
    <Testimonials testimonials={content.testimonials} />
    <HomeFAQ />
    <CTASection reference />
    <CTASection />
  </main>;
}
