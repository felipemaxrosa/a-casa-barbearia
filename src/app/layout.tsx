import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://acasa-barbearia.vercel.app"
  ),
  title: {
    template: "%s · A Casa – Barbearia",
    default: "A Casa – Barbearia | Coimbra",
  },
  description:
    "Barbearia artesanal em Coimbra. Corte, barba e muito mais, com o cuidado de quem te recebe em casa.",
  openGraph: {
    siteName: "A Casa – Barbearia",
    locale: "pt_PT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://cdn.sanity.io" />
      </head>
      <body>{children}</body>
    </html>
  );
}
