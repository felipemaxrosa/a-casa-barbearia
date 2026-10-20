import type { MetadataRoute } from "next";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://acasa-barbearia.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                  lastModified: new Date(), changeFrequency: "weekly",  priority: 1 },
    { url: `${BASE}/servicos`,    lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/equipa`,      lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/agenda`,      lastModified: new Date(), changeFrequency: "daily",   priority: 0.9 },
    { url: `${BASE}/contactos`,   lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    // /proposta, /studio e /api excluídos intencionalmente
  ];
}
