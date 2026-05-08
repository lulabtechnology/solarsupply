import type { MetadataRoute } from "next";
import { productFamilies, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const basePages = ["", "/empresa", "/productos", "/servicios", "/recursos", "/contacto"];
  const productPages = productFamilies.map((product) => `/productos/${product.slug}`);

  return [...basePages, ...productPages].map((path) => ({
    url: `${site.domain}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.75
  }));
}
