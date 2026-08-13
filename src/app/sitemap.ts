import type { MetadataRoute } from "next";
import { SERVICES, PROJECTS } from "@/lib/site-data";

const BASE = "https://mep-services.amsitservices.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/about", "/projects", "/testimonials", "/contact", "/privacy", "/terms"].map((r) => ({
    url: `${BASE}${r}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: r === "" ? 1 : 0.8,
  }));

  const serviceRoutes = SERVICES.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const projectRoutes = PROJECTS.map((p) => ({
    url: `${BASE}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}
