import type { Metadata } from "next";

export const siteUrl = "https://www.royalstoneconstruction.in";
export const siteName = "Royal Stone Construction";

export function absoluteUrl(path: string) {
  const url = new URL(path, `${siteUrl}/`);
  // Match Next.js metadata's normalized homepage URL.
  return url.pathname === "/" && !url.search && !url.hash ? url.origin : url.toString();
}

export function pageMetadata(title: string, description: string, path: string, image = "/logo.png"): Metadata {
  const fullTitle = `${title} | ${siteName}`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName,
      title: fullTitle,
      description,
      url: absoluteUrl(path),
      images: [{ url: absoluteUrl(image), alt: title }],
    },
    twitter: { card: "summary", title: fullTitle, description, images: [absoluteUrl(image)] },
  };
}

export const publicPages = {
  "/privacy-policy": ["Privacy Policy", "How Royal Stone Construction's website collects and handles enquiry information, with contact details for privacy questions."],
  "/terms": ["Website Terms", "Read how Royal Stone Construction website enquiries, package prices, calculator estimates and scope confirmation work."],
  "/locations/patna": ["Architecture & Construction Services in Patna, Bihar", "Explore Royal Stone Construction architecture, construction with material and interior services in Patna, with local design packages and consultation details."],
  "/locations/noida": ["Architecture Design Packages in Noida", "Compare Royal Stone Construction architecture design packages for Noida, including planning and drawing inclusions, design area estimates and enquiries."],
  "/": ["Architecture & Construction in Patna", "Royal Stone Construction provides architecture, construction with material and interior design in Patna, Bihar. Plan your project with one coordinated team."],
  "/about": ["About Us", "Discover Royal Stone Construction in Patna, Bihar. Architecture, construction with material and interior design with practical planning and coordinated execution."],
  "/services": ["Architecture, Construction & Interior Design Services", "Explore architecture, construction with material, interior design, turnkey projects, floor planning, elevation, structural planning and renovation services."],
  "/packages": ["Construction & Architecture Design Packages", "Compare Royal Stone Construction Silver, Gold and Platinum construction packages, plus architecture design packages for Patna and Noida, with pricing, specifications and enquiries."],
  "/services/architecture": ["Architecture & House Planning in Patna", "Explore Royal Stone Construction architecture services, house plans, space planning and coordinated design drawings, with design packages for Patna and Noida."],
  "/services/construction": ["Construction With Material in Patna", "Plan house construction with Royal Stone Construction in Patna, Bihar. Services include materials, labour management, site supervision, structural work and finishing."],
  "/services/interior-design": ["Interior Design in Patna", "Explore interior design for homes, offices and commercial spaces, including layouts, modular kitchens, furniture, lighting and finishes from Royal Stone Construction."],
  "/services/turnkey-projects": ["Turnkey Construction Projects in Patna", "Explore Royal Stone Construction turnkey services, from architecture and construction planning to materials, interiors, finishing and final handover."],
  "/services/floor-planning": ["Floor Planning & House Layouts", "Plan efficient house layouts with Royal Stone Construction. Explore room sizes, circulation, daylight, ventilation and furniture placement before construction."],
  "/services/elevation": ["2D & 3D Building Elevation Design", "Explore 2D elevation drawings and 3D front elevation design with Royal Stone Construction. Compare building proportions, exterior materials, colours and finishes."],
  "/services/structural-planning": ["Structural Planning & Drawings", "Explore structural planning with Royal Stone Construction, including foundation planning, column layouts, beam and slab details and architectural coordination."],
  "/services/renovation": ["Home & Commercial Renovation", "Refresh existing spaces with Royal Stone Construction renovation services, including layout improvements, electrical and plumbing upgrades, flooring and interiors."],
  "/projects": ["Projects & Design Gallery", "Explore Royal Stone Construction's architecture, residential, commercial, interior design and construction portfolio, including clearly labelled illustrative concepts."],
  "/process": ["Our Design & Construction Process", "Explore the Royal Stone Construction workflow from consultation, architecture planning and quotation to construction, quality inspection and final handover."],
  "/why-us": ["Why Choose Us", "Discover Royal Stone Construction's approach to quality materials, transparent pricing, project supervision and complete project management."],
  "/contact": ["Contact Our Team in Patna", "Contact Royal Stone Construction in Patna, Bihar for architecture, construction with material and interior design enquiries."],
  "/get-quote": ["Request a Construction & Design Quote", "Request a free consultation for architecture, construction with material, interior design or turnkey projects from Royal Stone Construction."],
} as const;

export function metadataForRoute(path: keyof typeof publicPages) {
  const [title, description] = publicPages[path];
  return pageMetadata(title, description, path);
}
