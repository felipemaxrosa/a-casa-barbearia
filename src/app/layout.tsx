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
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://a-casa-barbearia.vercel.app"
  ),
  title: {
    template: "%s · A Casa – Barbearia",
    default: "A Casa – Barbearia | Coimbra",
  },
  description:
    "Barbearia clássica em Coimbra. Corte, barba e muito mais, com o cuidado de quem te recebe em casa.",
  openGraph: {
    siteName: "A Casa – Barbearia",
    title: "A Casa – Barbearia | Coimbra",
    description: "Barbearia clássica em Coimbra. Corte, barba e muito mais, com o cuidado de quem te recebe em casa.",
    locale: "pt_PT",
    type: "website",
    url: "https://a-casa-barbearia.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "A Casa – Barbearia | Coimbra",
    description: "Barbearia clássica em Coimbra. Corte, barba e muito mais, com o cuidado de quem te recebe em casa.",
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
{/* suppressHydrationWarning: extensões de browser (ex: Dashlane, LastPass)
          injectam atributos no <body> antes da hidratação do React, causando
          um mismatch benigno. Esta flag suprime apenas o aviso no <body>,
          não afecta os filhos nem oculta erros reais de hidratação. */}
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
