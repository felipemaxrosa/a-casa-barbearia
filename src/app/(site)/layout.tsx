import { Header } from "@/components/layout";
import { Footer } from "@/components/layout";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Saltar para o conteúdo principal
      </a>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}
