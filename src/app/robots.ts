import type { MetadataRoute } from "next";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://a-casa-barbearia.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/studio", "/proposta", "/api/"],
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
  };
}
