import type { MetadataRoute } from "next";
import { absoluteUrl, publicPages } from "@/lib/seo";
import { getSiteContent } from "@/lib/site-content-server";

export const revalidate = 30;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { projects } = await getSiteContent();
  return [
    ...Object.keys(publicPages).map(path => ({ url: absoluteUrl(path) })),
    ...projects.filter(project => project.status !== "Concept").map(project => ({
      url: absoluteUrl(`/projects/${project.slug}`),
      images: [project.image, ...project.gallery].filter((image, index, images) => images.indexOf(image) === index).map(absoluteUrl),
    })),
  ];
}
