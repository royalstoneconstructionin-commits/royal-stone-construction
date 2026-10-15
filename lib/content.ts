export type Project = {
  slug: string; title: string; city: string; category: "Residential Projects" | "Commercial Projects";
  type: "Architecture" | "Interior Design" | "Construction";
  status: "Concept" | "Completed Projects" | "Ongoing Projects";
  image: string; gallery: string[]; details: string; overview: string; work: string; materials: string; area: string;
  duration?: string; approved?: boolean;
};
export type Testimonial = { name: string; city: string; quote: string; approved: boolean; reviewUrl?: string };
export type SiteContent = { projects: Project[]; testimonials: Testimonial[]; workingHours: string; address?: string; mapUrl?: string; serviceAreas?: string; pricingDetails?: string };

export const defaultContent: SiteContent = {
  workingHours: "",
  testimonials: [],
  projects: [
    { slug: "residential-design-concept", title: "Contemporary Home Concept", city: "Location to be confirmed", category: "Residential Projects", type: "Architecture", status: "Concept", image: "/projects/home.png", gallery: ["/projects/home.png"], details: "An illustrative approach to a light-filled family home with considered planning.", overview: "This editable design concept shows how architecture and floor planning can be presented. It is not a completed Royal Stone project. Replace it with approved project information and photographs from the admin panel.", work: "Illustrative facade and layout study; no executed work is claimed.", materials: "To be confirmed for a verified project.", area: "To be confirmed" },
    { slug: "commercial-design-concept", title: "Commercial Space Concept", city: "Location to be confirmed", category: "Commercial Projects", type: "Construction", status: "Concept", image: "/projects/space.png", gallery: ["/projects/space.png"], details: "An illustrative commercial frontage with an organised, practical layout.", overview: "A placeholder for future commercial project documentation. The image is a concept illustration, not a photograph of completed or ongoing construction.", work: "Concept presentation only; execution details will be added after approval.", materials: "To be confirmed for a verified project.", area: "To be confirmed" },
    { slug: "interior-design-concept", title: "Living Space Concept", city: "Location to be confirmed", category: "Residential Projects", type: "Interior Design", status: "Concept", image: "/projects/living.png", gallery: ["/projects/living.png"], details: "An illustrative living space with coordinated seating, storage and lighting.", overview: "An editable interior concept to demonstrate the gallery layout. This is not a client home or a completed installation. Approved project photos and details can replace this entry later.", work: "Illustrative room composition; no completed installation is claimed.", materials: "To be confirmed for a verified project.", area: "To be confirmed" },
  ],
};

export function validImage(value: string) {
  return /^\/(?!\/)[a-zA-Z0-9/_.-]+$/.test(value) || /^https:\/\/[^\s]+$/.test(value);
}

export function isSiteContent(value: unknown): value is SiteContent {
  if (!value || typeof value !== "object") return false;
  const content = value as SiteContent;
  if (typeof content.workingHours !== "string" || !Array.isArray(content.projects) || !Array.isArray(content.testimonials)) return false;
  if (!["address", "mapUrl", "serviceAreas", "pricingDetails"].every(key => content[key as keyof SiteContent] === undefined || typeof content[key as keyof SiteContent] === "string")) return false;
  if (content.mapUrl?.trim() && !isMapUrl(content.mapUrl)) return false;
  const slugs = new Set<string>();
  for (const project of content.projects) {
    if (!project || typeof project !== "object") return false;
    if (!["slug", "title", "city", "image", "details", "overview", "work", "materials", "area"].every(key => typeof project[key as keyof Project] === "string")) return false;
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.slug) || slugs.has(project.slug) || !project.title.trim() || !validImage(project.image)) return false;
    if (!["Residential Projects", "Commercial Projects"].includes(project.category) || !["Architecture", "Interior Design", "Construction"].includes(project.type) || !["Concept", "Completed Projects", "Ongoing Projects"].includes(project.status)) return false;
    if (!Array.isArray(project.gallery) || !project.gallery.every(src => typeof src === "string" && validImage(src))) return false;
    if (project.duration !== undefined && typeof project.duration !== "string") return false;
    if (project.approved !== undefined && typeof project.approved !== "boolean") return false;
    slugs.add(project.slug);
  }
  return content.testimonials.every(item => item && typeof item.name === "string" && typeof item.city === "string" && typeof item.quote === "string" && typeof item.approved === "boolean" && (!item.approved || (item.name.trim() && item.quote.trim())) && (item.reviewUrl === undefined || (typeof item.reviewUrl === "string" && (!item.reviewUrl.trim() || isGoogleReviewUrl(item.reviewUrl)))));
}

function hasHttpsHost(value: string, allowed: (host: string) => boolean) {
  try { const url = new URL(value.trim()); return url.protocol === "https:" && !url.username && !url.password && allowed(url.hostname); } catch { return false; }
}

export function isMapUrl(value: string) {
  return hasHttpsHost(value, host => ["www.google.com", "maps.google.com", "maps.app.goo.gl", "goo.gl"].includes(host));
}

export function isGoogleReviewUrl(value: string) {
  return hasHttpsHost(value, host => ["www.google.com", "maps.google.com", "maps.app.goo.gl", "g.page", "goo.gl"].includes(host));
}

// Concepts remain labelled examples. Real work requires explicit publication approval.
export function publicSiteContent(content: SiteContent): SiteContent {
  return { ...content, workingHours: content.workingHours.startsWith("Working hours will be published soon.") ? "" : content.workingHours, projects: content.projects.filter(project => project.status === "Concept" || project.approved === true), testimonials: content.testimonials.filter(item => item.approved) };
}
