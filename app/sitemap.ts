import type { MetadataRoute } from "next";
import { getSiteContent } from "@/lib/content";
import { absoluteUrl } from "@/lib/content/metadata";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { services } = await getSiteContent();
  const pages = [
    "/",
    "/leistungen",
    "/ueber-uns",
    "/faq",
    "/kontakt",
    "/impressum",
    "/datenschutz",
    ...services.map((service) => `/leistungen/${service.slug}`),
  ];

  return pages.map((path) => ({
    url: absoluteUrl(path).toString(),
    lastModified: new Date(),
  }));
}
