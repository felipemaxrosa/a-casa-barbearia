import Link from "next/link";
import { BarberPole } from "@/components/icons";

const year = new Date().getFullYear();

const links = [
  { href: "/servicos",  label: "Serviços" },
  { href: "/equipa",    label: "Equipa" },
  { href: "/contactos", label: "Contactos" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--color-green-900)] text-white/80">
      <div className="container-site py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BarberPole size={20} className="text-[var(--color-brass)]" />
              <span className="font-display font-semibold text-xl text-white">A Casa</span>
            </div>
            <p className="text-sm leading-relaxed text-white/60 max-w-xs">
              Barbearia clássica em Coimbra. Onde cada corte é uma experiência.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-widest text-[var(--color-brass-light)] mb-4">
              Navegação
            </h3>
            <ul className="flex flex-col gap-2">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-widest text-[var(--color-brass-light)] mb-4">
              Encontra-nos
            </h3>
            <address className="not-italic text-sm text-white/70 leading-relaxed">
              <p>Coimbra, Portugal</p>
              <a
                href="https://www.instagram.com/acasa_barbearia/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors mt-1 block"
              >
                @acasa_barbearia
              </a>
              <a
                href="https://maps.app.goo.gl/66xdMgbatHhrtvRx9"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors mt-1 block"
              >
                Ver no Google Maps
              </a>
            </address>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>© {year} A Casa – Barbearia. Todos os direitos reservados.</p>
          <Link href="/proposta" className="hover:text-white/80 transition-colors">
            Proposta
          </Link>
        </div>
      </div>
    </footer>
  );
}
