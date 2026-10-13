import Link from "next/link";
import { ChevronDown } from "lucide-react";

const questions = [
  { question: "What is included in the design package?", answer: "Silver includes Floor Plan, Plumbing Design, Electric Design and 3D Front Elevation. Gold adds structural layouts and details, including column, footing, beam, slab and staircase drawings, plus septic tank and borewell positioning. Platinum also includes 3D Interior Design. Select Patna or Noida in the package section to see the applicable price and full inclusions." },
  { question: "Do you provide construction with materials?", answer: "Yes. Our Construction With Material service includes material supply, labour management, site supervision, structural work, electrical and plumbing work, flooring, painting, finishing and quality control. The scope and material specifications are agreed before execution." },
  { question: "Which locations do you serve?", answer: "Royal Stone Construction is based in Patna, Bihar. Architecture design packages are listed for Patna and Noida. Share your project location with our team to confirm the services available for your site." },
  { question: "How can I request a quotation?", answer: "Use Get Free Quote or the enquiry form to share your name, mobile number, city and service requirement. For a design package, choose Enquire Now to include your selected city and package. Our team will discuss your requirements and the scope needed for a detailed quotation." },
  { question: "Can I book only house map design?", answer: "Yes. Architecture and Floor Planning are listed as individual services. House map planning, floor planning and 2D plans are available within our architecture services. Share your plot dimensions and requirements so the team can discuss the appropriate scope." },
];

export default function HomeFAQ() {
  return <section className="bg-[#faf9f7] py-12 sm:py-16" aria-labelledby="home-faq-title">
    <div className="site-container grid items-start gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
      <div><p className="text-xs font-bold tracking-[0.18em] text-red-600">FAQ</p><h2 id="home-faq-title" className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Your Questions, Answered</h2><p className="mt-4 text-sm leading-6 text-slate-500">A little clarity before you begin. Explore the services and packages, or discuss your requirements with our team.</p><Link href="/get-quote" className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-red-600 hover:underline">Request a quotation</Link></div>
      <div className="space-y-3">{questions.map(({ question, answer }) => <details key={question} className="group rounded-lg border border-slate-200 bg-white open:border-red-200">
        <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">{question}<ChevronDown aria-hidden="true" className="h-4 w-4 shrink-0 text-slate-500 transition-transform group-open:rotate-180 motion-reduce:transition-none" /></summary>
        <p className="border-t border-slate-100 px-5 py-4 text-sm leading-7 text-slate-600">{answer}</p>
      </details>)}</div>
    </div>
  </section>;
}
