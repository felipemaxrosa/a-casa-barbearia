import type { Metadata } from "next";
import Image from "next/image";
import { Heading } from "@/components/ui";
import { Button } from "@/components/ui";
import { HairSalonJsonLd } from "@/components/seo/JsonLd";
import { APPBARBER_URL, WHATSAPP_URL } from "@/lib/constants";

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export const metadata: Metadata = {
  // absolute evita que o template do root layout duplique o título
  title: { absolute: "A Casa – Barbearia | Coimbra" },
  description:
    "Barbearia clássica em Coimbra. Corte, barba e muito mais, com o cuidado de quem te recebe em casa.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HairSalonJsonLd />
      {/* Hero */}
      <section
        className="section bg-[var(--color-green-900)] text-white relative overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Ilustração decorativa — ferramentas do barbeiro (desktop: metade direita; mobile: canto direito mais suave) */}
        <div className="absolute right-0 top-0 bottom-0 w-2/3 md:w-1/2 pointer-events-none select-none">
          <Image
            src="/images/barber-tools.png"
            alt=""
            fill
            className="object-contain object-center"
            style={{ mixBlendMode: "luminosity", opacity: 0.08 }}
            priority={false}
            sizes="(max-width: 768px) 66vw, 50vw"
          />
        </div>

        <div className="container-site relative z-10 flex flex-col items-start gap-6 max-w-2xl">
          <span className="divider-brass" />
          <Heading as="h1" size={1} className="text-[var(--color-surface)]">
            Entra.<br />
            Senta-te.<br />
            Estás em <em className="italic text-[var(--color-brass-light)]">Casa</em>.
          </Heading>
          <p className="text-lg text-white/70 leading-relaxed max-w-lg">
            Barbearia clássica no coração de Coimbra. Cortes de autor, barba impecável
            e o ambiente de quem te conhece pelo nome.
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <Button href={APPBARBER_URL} variant="brass" size="lg" target="_blank" rel="noopener noreferrer">
              Marcar corte
            </Button>
            <Button href={WHATSAPP_URL} variant="secondary" size="lg" className="border-white/40 text-white hover:bg-white/10" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Destaques */}
      <section className="section bg-[var(--color-surface-2)]" aria-labelledby="highlights-heading">
        <div className="container-site">
          <div className="text-center mb-12">
            <span className="divider-brass mx-auto" />
            <Heading id="highlights-heading" as="h2" size={2}>
              Porque é que os clientes voltam
            </Heading>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: "✂️", title: "Ofício clássico", desc: "Cada corte é tratado com atenção e rigor, sem pressa." },
              { icon: "☕", title: "Recebido em casa", desc: "Café, boa conversa e uma equipa que te recebe pelo nome." },
              { icon: "📅", title: "Sem esperas", desc: "Marca online e chega na hora certa, sem filas." },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-[var(--color-surface)] rounded-[var(--radius-card)] p-8 text-center"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <span className="text-4xl block mb-4">{icon}</span>
                <h3 className="font-display font-semibold text-lg mb-2">{title}</h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testemunhos */}
      <section className="section" aria-labelledby="testimonials-heading">
        <div className="container-site">
          <div className="text-center mb-12">
            <span className="divider-brass mx-auto" />
            <Heading id="testimonials-heading" as="h2" size={2}>
              O que os clientes dizem
            </Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map(({ author, quote, rating }) => (
              <blockquote
                key={author}
                className="bg-[var(--color-surface)] rounded-[var(--radius-card)] p-6"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <p className="text-[var(--color-brass)] text-lg mb-3" aria-label={`${rating} estrelas`}>
                  {"★".repeat(rating)}
                </p>
                <p className="text-[var(--color-ink)] leading-relaxed text-sm mb-4">
                  &ldquo;{quote}&rdquo;
                </p>
                <footer className="text-[var(--color-muted)] text-xs font-medium">
                  — {author}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-[var(--color-green-900)]" aria-labelledby="cta-heading">
        <div className="container-site text-center text-white">
          <span className="divider-brass mx-auto" />
          <Heading id="cta-heading" as="h2" size={2} className="text-white mb-4">
            Pronto para o teu próximo corte?
          </Heading>
          {/* max-w-none + mx-auto para contrariar o max-width:68ch do reset global */}
          <p className="text-white/70 mb-8 text-lg max-w-none mx-auto">
            Escolhe o horário que te convém e aparece sem esperas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href={APPBARBER_URL} variant="brass" size="lg" target="_blank" rel="noopener noreferrer">
              Marcar agora
            </Button>
            <Button href={WHATSAPP_URL} variant="secondary" size="lg" className="border-white/40 text-white hover:bg-white/10" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

const testimonials = [
  { author: "Gustavo Resende",     rating: 5, quote: "Melhor barbeiro de sempre, muito bom ambiente e qualidade ainda melhor." },
  { author: "Leandro Marcelino",   rating: 5, quote: "Atendimento premium com qualidade no serviço. Utilizei corte, barba e limpeza de pele, preço justo e serviço excelente, vou voltar." },
  { author: "Victor",              rating: 5, quote: "Fui fazer a barba e o André recebeu-me com café e uma boa conversa. O trabalho ficou ótimo, com certeza voltarei." },
  { author: "MyselfJCVF",          rating: 5, quote: "Serviço muito bom e com marcação o que é ótimo sem ter de estar à espera!" },
  { author: "João Pedro Verneck",  rating: 5, quote: "Adorei o ambiente, fui muito bem recepcionado com cafézinho e um bom papo, e acima de tudo adorei o corte!" },
  { author: "António Matos Godinho", rating: 5, quote: "Muito bom. Ambiente tranquilo, corte impecável. Vou regressar em breve." },
  { author: "Davi Andrade",        rating: 5, quote: "Profissional excelente, boa recepção, atendimento impecável!" },
  { author: "Robson Matias",       rating: 5, quote: "Excelente experiência! Ambiente familiar e atendimento impecável!" },
];
