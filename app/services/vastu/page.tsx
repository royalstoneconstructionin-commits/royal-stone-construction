import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Bath, BedDouble, BookOpen, Building2, CarFront, CheckCircle2,
  ChevronDown, ChevronRight, ClipboardCheck, Compass, DoorOpen, DraftingCompass,
  Flame, Home, LayoutGrid, MapPin, MessageSquare, MoveUpRight, Ruler, Sofa, Sun,
} from "lucide-react";
import { buttonClass } from "@/components/CTASection";
import LeadForm from "@/components/LeadForm";
import SectionHeading from "@/components/SectionHeading";
import VastuDirectionDiagram from "@/components/VastuDirectionDiagram";
import { metadataForRoute } from "@/lib/seo";
import { vastuRequirements } from "@/lib/vastu";

export const metadata: Metadata = {
  ...metadataForRoute("/services/vastu"),
  keywords: ["Vastu Shastra Consultation in Patna", "Vastu Consultant in Patna", "Vastu Shastra for Home", "Vastu House Planning", "Vastu Based House Map", "Vastu for New House", "Vastu Compliant Floor Plan"],
};

const secondaryButton = "inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-bold text-slate-800 transition-colors hover:border-brand-300 hover:bg-brand-50 focus-visible:ring-4 focus-visible:ring-brand-200";
const cardClass = "rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(11,24,32,0.06)] transition-colors hover:border-brand-300 sm:p-7";
const consultation = "/services/vastu#vastu-consultation";

const offerings = [
  { Icon: Home, text: "Review your home's orientation, room relationships and daily routines with your traditional Vastu preferences in mind." },
  { Icon: DraftingCompass, text: "Develop a house layout around plot dimensions, access and preferred directions, coordinated with practical architecture." },
  { Icon: Building2, text: "Consider entrances, workstations, circulation and functional zones for shops, offices and other commercial spaces." },
  { Icon: Compass, text: "Discuss plot shape, road access and orientation before you decide how the building could be arranged." },
  { Icon: BedDouble, text: "Explore kitchen and bedroom positions alongside storage, privacy, ventilation and everyday comfort." },
  { Icon: DoorOpen, text: "Review the entrance and connections between rooms while retaining convenient access and sensible circulation." },
  { Icon: ClipboardCheck, text: "Understand your current layout and discuss feasible adjustments, with structural and service constraints considered." },
  { Icon: Ruler, text: "Bring agreed Vastu preferences into a clearly labelled 2D floor plan for discussion before design finalisation." },
];

const directions = [
  ["North", "Often considered for entrances, openings or work areas. Review road access, privacy and usable daylight."],
  ["South", "Traditionally considered for enclosed or supporting spaces; openings still need climate and ventilation review."],
  ["East", "Often associated with morning light and considered for living areas or an entrance where access allows."],
  ["West", "May accommodate dining or supporting rooms. Consider shading and afternoon heat when placing openings."],
  ["North-East", "Traditionally preferred for a pooja space or a lighter, open area, subject to the building layout."],
  ["North-West", "Often considered for guest rooms or utility spaces, while checking service connections and circulation."],
  ["South-East", "A commonly preferred kitchen zone in traditional Vastu; safe cooking, exhaust and plumbing guide the final plan."],
  ["South-West", "Commonly considered for the main bedroom or storage, with comfort, accessibility and privacy assessed."],
];

const rooms = [
  { title: "Main Entrance", Icon: DoorOpen, text: "North or east entrances are common traditional preferences. Road position, safe access and the exact entrance location matter." },
  { title: "Living Room", Icon: Sofa, text: "North or east zones are often considered. Arrange seating to preserve light, movement and connections with family spaces." },
  { title: "Master Bedroom", Icon: BedDouble, text: "A south-west location is a common preference. Plan the bed, wardrobes, windows and privacy together." },
  { title: "Kitchen", Icon: Flame, text: "South-east is often preferred, with north-west discussed as an alternative. Prioritise safe worktops, exhaust and services." },
  { title: "Pooja Room", Icon: Sun, text: "North-east is traditionally considered for prayer. A quiet, accessible niche can also be explored where space is limited." },
  { title: "Bathroom", Icon: Bath, text: "West or north-west locations are often discussed. Drainage, waterproofing, ventilation and service shafts guide feasibility." },
  { title: "Staircase", Icon: MoveUpRight, text: "South or west zones are common considerations. Structural design, headroom, safe dimensions and escape access come first." },
  { title: "Study Room", Icon: BookOpen, text: "East- or north-facing study positions are common preferences. Reduce glare and provide comfortable furniture and lighting." },
  { title: "Parking Area", Icon: CarFront, text: "North or north-west areas may be considered where road access allows. Check turning space, gate position and pedestrian safety." },
];

const advantages = [
  ["Architectural Design & Vastu Coordination", "Discuss traditional preferences alongside the architectural layout, rather than treating room placement in isolation."],
  ["Customized Planning Based on Plot Requirements", "Your plot shape, road access, setbacks and family requirements guide the planning discussion."],
  ["Residential & Commercial Consultation", "Explore layout considerations suited to the way your home, office or shop will actually be used."],
  ["Practical Space Utilization", "Balance preferred directions with room proportions, useful storage, daylight and clear circulation."],
  ["2D Floor Plan Integration", "Record the agreed arrangement in a coordinated house plan with clear room labels and dimensions."],
  ["Clear Consultation Process", "Understand the proposed scope, design choices and revisions before finalising your planning work."],
];

const steps = [
  ["Share Your Plot Details", "Send the location, dimensions, road position and any existing drawings."],
  ["Discuss Your Requirements", "Tell us about your rooms, daily routines, budget and Vastu preferences."],
  ["Review Plot Direction & Layout", "Check orientation, access and the constraints that shape your plan."],
  ["Prepare Vastu-Informed Design Suggestions", "Explore room arrangements and discuss practical tradeoffs with the design team."],
  ["Finalize the Design After Consultation", "Review revisions and confirm the agreed layout and deliverables."],
];

const questions = [
  ["What is Vastu Shastra?", "Vastu Shastra is a traditional Indian approach to arranging buildings and spaces, with attention to direction, proportions and room relationships. We discuss these cultural preferences alongside practical architectural requirements. It does not provide scientifically established guarantees of health, wealth or other life outcomes."],
  ["Can I get a Vastu-compliant 2D house plan?", "Yes. We can prepare a 2D house plan that considers your Vastu preferences along with plot dimensions, access and room requirements. The achievable layout depends on site constraints, structural design and applicable building requirements; the scope is confirmed during consultation."],
  ["Can Vastu principles be considered for an existing home?", "Yes. Share your current floor plan and orientation so we can review room use and discuss feasible adjustments. Changes depend on existing structure, plumbing, services and your budget. Any structural alteration needs appropriate professional review."],
  ["Do you provide Vastu consultation for commercial buildings?", "Yes. We discuss traditional Vastu considerations for offices, shops and other commercial spaces, while accounting for workflow, customer access, occupancy needs and the building's requirements."],
  ["What details are required for Vastu consultation?", "Please share your name, mobile number, city, plot dimensions with units, facing direction if known, road location and the spaces you need. Existing drawings and a list of your Vastu preferences help us understand the brief. You can submit an enquiry even if some plot details are not yet available."],
  ["Can Vastu be combined with modern architectural design?", "Yes. Preferred directions and room relationships can be explored together with modern layouts, daylight, ventilation, accessibility and structural planning. We explain practical tradeoffs when a traditional preference conflicts with site conditions or building requirements."],
  ["How can I request a consultation?", "Complete the consultation form below with your contact information and select the Vastu service you need. Our team will contact you to discuss your plot, design requirements, proposed scope and any applicable fees. You can also reach us through the Contact page."],
];

export default function VastuPage() {
  return <main className="bg-white">
    <section className="relative overflow-hidden border-b border-brand-100 bg-brand-50 py-10 sm:py-16 lg:py-20">
      <div className="site-container">
        <nav aria-label="Breadcrumb" className="mb-9 text-sm text-slate-600">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:text-brand-600">Home</Link></li>
            <li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li>
            <li><Link href="/services" className="hover:text-brand-600">Services</Link></li>
            <li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li>
            <li aria-current="page" className="font-semibold text-brand-700">Vastu Shastra</li>
          </ol>
        </nav>
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
          <div>
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-600"><Compass aria-hidden="true" className="h-5 w-5" />Vastu Shastra · Royal Stone Construction</p>
            <h1 className="mt-5 font-serif text-4xl font-black leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-[3.5rem]">Vastu Shastra Consultation &amp; Vastu-Compliant House Planning</h1>
            <p className="mt-6 text-base leading-8 text-slate-600">Create a balanced and thoughtfully planned home with Royal Stone Construction. Our Vastu Shastra consultation combines traditional Vastu principles with practical architectural planning to support your space, layout, and preferences.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={consultation} className={buttonClass}>Get Free Consultation <ArrowRight aria-hidden="true" className="h-5 w-5" /></Link>
              <Link href="#vastu-services" className={secondaryButton}>Explore Our Services</Link>
            </div>
            <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-slate-600"><MapPin aria-hidden="true" className="h-4 w-4 text-brand-600" />Vastu Shastra Consultation in Patna</p>
          </div>
          <figure className="overflow-hidden rounded-[30px] border border-brand-200 bg-white shadow-[0_20px_65px_rgba(11,24,32,0.08)]">
             <Image src="/vastu-shastra.jpg" alt="Vastu Shastra Planning Guide" width={960} height={720} priority sizes="(max-width: 1023px) 100vw, 45vw" className="h-auto w-full" />
            <figcaption className="border-t border-brand-100 px-5 py-4 text-sm text-slate-600">Traditional preferences. Thoughtful layouts. Designed around you.</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section className="py-16 sm:py-20">
      <div className="site-container grid items-center gap-9 lg:grid-cols-2 lg:gap-16">
        <figure className="relative overflow-hidden rounded-[30px] border border-slate-200">
          <Image src="/architecture.png" alt="Modern two-storey home concept with large windows and open living spaces, illustrating contemporary architectural planning" width={1616} height={1616} sizes="(max-width: 1023px) 100vw, 45vw" className="aspect-[4/3] w-full object-cover" />
          <figcaption className="absolute bottom-4 left-4 rounded-lg bg-white/95 px-3 py-2 text-xs font-semibold text-slate-700">Architectural concept · Illustrative design</figcaption>
        </figure>
        <div>
          <SectionHeading compact eyebrow="Tradition meets architecture" title="What Is Vastu Shastra?" />
          <p className="mt-5 leading-8 text-slate-600">Vastu Shastra is a traditional Indian system of architectural thought concerned with how a building is placed and how its spaces relate to direction, proportion and one another. For a home, it commonly considers the entrance, room arrangement and use of open space.</p>
          <p className="mt-4 leading-8 text-slate-600">Modern Vastu house planning starts with your actual plot and lifestyle. We explore your preferred room directions alongside daylight, ventilation, circulation, structural needs and applicable building requirements. The aim is a usable design that respects your preferences.</p>
          <p className="mt-4 text-sm leading-7 text-slate-500">Vastu recommendations reflect tradition and personal beliefs. Final suitability depends on the site and building; consultation does not promise particular life outcomes.</p>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-brand-600">
            <Link href="/services/architecture" className="inline-flex min-h-11 items-center gap-2 hover:underline">Architecture <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/services/floor-planning" className="inline-flex min-h-11 items-center gap-2 hover:underline">Floor Planning <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </div>
    </section>

    <section id="vastu-services" className="scroll-mt-28 bg-slate-50 py-16 sm:py-20">
      <div className="site-container">
        <SectionHeading compact eyebrow="Our expertise" title="Our Vastu Shastra Services" text="From choosing a plot to reviewing an existing home, discuss the planning support your project needs." />
        <div className="mt-9 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {offerings.map(({ Icon, text }, index) => <article key={vastuRequirements[index]} className={`${cardClass} flex flex-col`}>
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-100 bg-brand-50 text-brand-600"><Icon aria-hidden="true" className="h-6 w-6" /></span>
            <h3 className="mt-5 text-lg font-bold leading-7 text-slate-950">{vastuRequirements[index]}</h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{text}</p>
            <Link href={consultation} className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-600 hover:underline">Discuss Your Plan <ArrowRight aria-hidden="true" className="h-4 w-4" /><span className="sr-only"> for {vastuRequirements[index]}</span></Link>
          </article>)}
        </div>
      </div>
    </section>

    <section className="py-16 sm:py-20">
      <div className="site-container">
        <SectionHeading compact eyebrow="A sense of direction" title="Understanding Vastu Directions" text="Common traditional considerations to explore during planning, with your specific plot as the starting point." />
        <div className="mt-9 grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <VastuDirectionDiagram />
          <div className="grid gap-x-6 gap-y-5 sm:grid-cols-2">{directions.map(([title, text]) => <div key={title} className="border-l-2 border-brand-200 pl-4"><h3 className="font-bold text-slate-950">{title}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{text}</p></div>)}</div>
        </div>
        <p className="mt-7 rounded-2xl border border-brand-100 bg-brand-50 px-5 py-4 text-sm leading-7 text-slate-700">These are broad traditional preferences, not universal rules. Plot shape, road position, local building requirements, structure, safety and accessibility determine what is suitable for your project.</p>
      </div>
    </section>

    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="site-container">
        <SectionHeading compact eyebrow="Room by room" title="Vastu Guidance for Every Space" text="Bring traditional preferences and everyday function into the same planning conversation." />
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{rooms.map(({ title, Icon, text }) => <article key={title} className={cardClass}><Icon aria-hidden="true" className="h-6 w-6 text-brand-600" /><h3 className="mt-4 text-lg font-bold text-slate-950">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{text}</p></article>)}</div>
      </div>
    </section>

    <section className="py-16 sm:py-20">
      <div className="site-container">
        <SectionHeading compact eyebrow="Why Royal Stone" title="Why Choose Royal Stone Construction for Vastu Planning?" />
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{advantages.map(([title, text]) => <article key={title} className={cardClass}><CheckCircle2 aria-hidden="true" className="h-7 w-7 text-brand-600" /><h3 className="mt-4 text-lg font-bold text-slate-950">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{text}</p></article>)}</div>
      </div>
    </section>

    <section className="bg-slate-950 py-16 text-white sm:py-20">
      <div className="site-container">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-300">From your brief to your plan</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Our Vastu Consultation Process</h2>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">{steps.map(([title, text], index) => <li key={title} className="border-t border-white/15 pt-5"><span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-400/40 bg-brand-500/15 text-lg font-bold text-brand-300">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-5 text-lg font-bold leading-7">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-300">{text}</p></li>)}</ol>
      </div>
    </section>

    <section className="bg-brand-50 py-16 sm:py-20">
      <div className="site-container grid items-start gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <div><SectionHeading compact eyebrow="Your questions" title="Frequently Asked Questions" /><p className="mt-5 text-sm leading-7 text-slate-600">Understand the approach, the details we need and how Vastu preferences can fit into your design.</p><Link href="/contact" className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-600 hover:underline">Contact Our Team <ArrowRight className="h-4 w-4" /></Link></div>
        <div className="space-y-3">{questions.map(([question, answer]) => <details key={question} className="group rounded-2xl border border-slate-200 bg-white open:border-brand-300"><summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">{question}<ChevronDown aria-hidden="true" className="h-5 w-5 shrink-0 text-brand-600 transition-transform group-open:rotate-180 motion-reduce:transition-none" /></summary><p className="border-t border-slate-100 px-5 py-4 text-sm leading-7 text-slate-600">{answer}</p></details>)}</div>
      </div>
    </section>

    <section id="vastu-consultation" className="scroll-mt-28 py-16 sm:py-20">
      <div className="site-container grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <div><SectionHeading compact eyebrow="Let’s plan together" title="Get Expert Vastu Shastra Consultation" /><p className="mt-5 leading-8 text-slate-600">Share your plot and the spaces you have in mind. Whether you are planning a new home or reviewing an existing layout, we can discuss your Vastu preferences and the architectural scope you need.</p>
          <ul className="mt-7 space-y-5">{[
            { Icon: Ruler, text: "Add plot dimensions with units, if available." },
            { Icon: Compass, text: "Choose the facing direction, or select “Not sure”." },
            { Icon: LayoutGrid, text: "Tell us the rooms and spaces you need." },
            { Icon: MessageSquare, text: "We will discuss feasibility, scope and any applicable fees." },
          ].map(({ Icon, text }) => <li key={text} className="flex items-start gap-3 text-sm leading-7 text-slate-600"><Icon aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-brand-600" />{text}</li>)}</ul>
          <p className="mt-7 text-sm leading-7 text-slate-500">Prefer to speak with us directly? Visit our <Link href="/contact" className="font-semibold text-brand-600 underline underline-offset-4">Contact page</Link> for phone and other contact options.</p>
        </div>
        <LeadForm variant="vastu" />
      </div>
    </section>

    <section className="border-t border-brand-100 bg-brand-50 py-16 sm:py-20">
      <div className="site-container text-center">
        <Compass aria-hidden="true" className="mx-auto h-9 w-9 text-brand-600" />
        <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">Plan Your Dream Home with Vastu-Informed Design</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">Connect with Royal Stone Construction to discuss architectural planning and traditional Vastu preferences for your home or commercial project.</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3"><Link href={consultation} className={buttonClass}>Get Free Consultation <ArrowRight aria-hidden="true" className="h-5 w-5" /></Link><Link href="/contact" className={secondaryButton}>Contact Us</Link></div>
      </div>
    </section>
  </main>;
}
