import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/data/blog";

const BASE = "https://www.pillarproductionsusa.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/brands`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/branded-series`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE}/guide`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/videos`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/schedule`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/licensing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/catalog`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/studio-model`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/hubs`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/shows`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/shows/coastal-torque`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/shows/serve-it-up`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/shows/serving-for-greece`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];

  const blogPages: MetadataRoute.Sitemap = getAllSlugs().map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...blogPages];
}
