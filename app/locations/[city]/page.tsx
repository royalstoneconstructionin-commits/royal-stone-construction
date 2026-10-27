import Link from "next/link";
import { notFound } from "next/navigation";
import { metadataForRoute } from "@/lib/seo";
import { getSiteContent } from "@/lib/site-content-server";
import ProjectCard from "@/components/ProjectCard";
import { businessContact } from "@/lib/business-contact";

const locations = {
  patna: { name: "Patna", title: "Architecture and construction in Patna, Bihar", intro: "Based in Patna, Royal Stone Construction brings architecture, construction with material and interiors into one coordinated workflow. Start by discussing your site, layout requirements and the work you need planned.", details: "For a new house or commercial space, review room planning, access, daylight and ventilation before agreeing drawings. For construction and interiors, confirm the material specifications, scope and quotation with the team.", services: [["Architecture and house planning", "/services/architecture"], ["Construction with material", "/services/construction"], ["Interior design", "/services/interior-design"]] },
  noida: { name: "Noida", title: "Architecture design packages for Noida", intro: "Explore the existing Silver, Gold and Platinum architecture design packages for Noida. Each package lists its drawings and design inclusions so you can compare the scope before requesting a quotation.", details: "Silver includes floor planning, plumbing, electric design and 3D front elevation. Gold adds the listed structural details; Platinum also includes 3D interior design. Use your design area to estimate the fee, then confirm the billing area and deliverables with the team.", services: [["Architecture package scope", "/services/architecture?city=Noida#packages"], ["Floor planning", "/services/floor-planning"], ["Building elevation design", "/services/elevation"]] },
} as const;
export const revalidate = 30;
type Props = { params: Promise<{ city: string }> };
export function generateStaticParams() { return Object.keys(locations).map(city => ({ city })); }
export async function generateMetadata({ params }: Props) {
  const { city } = await params;
  if (city !== "patna" && city !== "noida") return {};
  return metadataForRoute(`/locations/${city}`);
}
export default async function CityPage({ params }: Props) {
  const { city } = await params;
  if (city !== "patna" && city !== "noida") notFound();
  const location = locations[city];
  const content = await getSiteContent();
  const projects = content.projects.filter(project => project.status !== "Concept" && project.city.toLowerCase().includes(city));
  return <main className="bg-white py-12 sm:py-16"><div className="site-container">
    <Link href="/services" className="inline-flex min-h-11 items-center text-brand-600">Services</Link>
    <h1 className="mt-5 max-w-3xl text-4xl font-bold text-slate-950 sm:text-5xl">{location.title}</h1>
    <p className="mt-6 max-w-3xl leading-8 text-slate-600">{location.intro}</p>
    <p className="mt-4 max-w-3xl leading-8 text-slate-600">{location.details}</p>
    <h2 className="mt-10 text-2xl font-bold text-slate-950">Plan your {location.name} design enquiry</h2>
    <p className="mt-4 max-w-3xl leading-7 text-slate-600">Share your city and the area you want designed. For multiple floors, confirm the billing area with the team. Package prices are design fees; construction with material is quoted separately.</p>
    <div className="mt-5 flex flex-wrap gap-4"><Link href={`/packages?city=${location.name}`} className="inline-flex min-h-11 items-center rounded-lg bg-brand-600 px-5 py-3 font-semibold text-white">Compare {location.name} packages</Link><Link href={`/get-quote?city=${location.name}&purpose=Architecture`} className="inline-flex min-h-11 items-center text-brand-600 underline">Request a consultation</Link><a href={businessContact.phoneHref} className="inline-flex min-h-11 items-center text-brand-600 underline">Call {businessContact.phoneDisplay}</a></div>
    <h2 className="mt-10 text-2xl font-bold text-slate-950">Related design and service information</h2>
    <ul className="mt-4 space-y-2">{location.services.map(([label, href]) => <li key={href}><Link href={href} className="inline-flex min-h-11 items-center text-brand-600 underline">{label}</Link></li>)}</ul>
    {projects.length > 0 && <><h2 className="mt-10 text-2xl font-bold text-slate-950">Approved projects in {location.name}</h2><div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{projects.map(project => <ProjectCard reference key={project.slug} project={project} />)}</div></>}
  </div></main>;
}
