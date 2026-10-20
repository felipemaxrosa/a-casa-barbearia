import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Desactivado para v1 — render estático + ISR mais simples
  cacheComponents: false,

  // Turbopack (default no Next 16) + Tailwind v4
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },

  // Imagens: permitir CDN do Sanity quando integrado
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
