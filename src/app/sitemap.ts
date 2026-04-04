import type { MetadataRoute } from "next";

const BASE = "https://www.pillarproductions.tv";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  return [
    // Core pages
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/brands`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/branded-series`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/schedule`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/licensing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/catalog`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/studio-model`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/hubs`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },

    // Shows
    { url: `${BASE}/shows`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/shows/coastal-torque`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/shows/serve-it-up`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/shows/serving-for-greece`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];
}
