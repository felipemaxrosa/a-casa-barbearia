import type { Metadata } from "next";
import { Heading, Button } from "@/components/ui";
import { WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contactos e Localização",
  description: "Encontra a A Casa Barbearia em Coimbra. Rua Feitoria dos Linhos, Nº6, junto ao Portugal dos Pequenitos.",
  alternates: { canonical: "/contactos" },
};

const horario = [
  { dia: "Segunda",  horas: "Fechado" },
  { dia: "Terça",    horas: "09:00 – 19:00" },
  { dia: "Quarta",   horas: "09:00 – 19:00" },
  { dia: "Quinta",   horas: "09:00 – 19:00" },
  { dia: "Sexta",    horas: "09:00 – 19:00" },
  { dia: "Sábado",   horas: "09:00 – 18:00" },
  { dia: "Domingo",  horas: "Fechado" },
];

export default function ContactosPage() {
  return (
    <div className="section">
      <div className="container-site">
        <div className="mb-12">
          <span className="divider-brass" />
          <Heading as="h1" size={1}>Encontra-nos</Heading>
          <p className="text-[var(--color-muted)] mt-4 text-lg max-w-xl">
            Estamos no coração de Coimbra à tua espera.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Info */}
          <div className="flex flex-col gap-8">
            {/* Morada */}
            <div>
              <h2 className="font-display font-semibold text-xl mb-3">Morada</h2>
              <address className="not-italic text-[var(--color-muted)] leading-relaxed">
                <p className="font-medium text-[var(--color-ink)]">Rua Feitoria dos Linhos, Nº 6</p>
                <p>3040-252 Coimbra</p>
                <p className="text-sm mt-1 text-[var(--color-muted)]/80">Junto ao Portugal dos Pequenitos</p>
              </address>
              <a
                href="https://maps.app.goo.gl/66xdMgbatHhrtvRx9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-3 text-sm text-[var(--color-brass-ink)] hover:text-[var(--color-green-700)] transition-colors underline underline-offset-4"
              >
                Abrir no Google Maps ↗
              </a>
            </div>

            {/* Horário */}
            <div>
              <h2 className="font-display font-semibold text-xl mb-3">Horário</h2>
              <dl className="flex flex-col gap-1.5">
                {horario.map(({ dia, horas }) => (
                  <div key={dia} className="flex justify-between text-sm max-w-xs">
                    <dt className="text-[var(--color-ink)] font-medium">{dia}</dt>
                    <dd className={horas === "Fechado" ? "text-[var(--color-muted)]/60" : "text-[var(--color-muted)]"}>
                      {horas}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Contacto */}
            <div>
              <h2 className="font-display font-semibold text-xl mb-3">Contacto</h2>
              <div className="flex flex-col gap-3">
                <Button
                  href={WHATSAPP_URL}
                  variant="primary"
                  size="md"
                  className="w-fit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar no WhatsApp
                </Button>
                <a
                  href="https://www.instagram.com/acasa_barbearia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--color-brass-ink)] hover:text-[var(--color-green-700)] transition-colors underline underline-offset-4"
                >
                  @acasa_barbearia no Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div
            className="rounded-[var(--radius-card)] overflow-hidden aspect-video lg:aspect-auto lg:min-h-80 bg-[var(--color-surface-2)]"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190.72840!2d-8.4350211!3d40.2026289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd22f9978b9f810b%3A0xa6b291a9404da22e!2sA%20Casa%20-%20Barbearia!5e0!3m2!1spt!2spt"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização d'A Casa Barbearia no Google Maps"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
