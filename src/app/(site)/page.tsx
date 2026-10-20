import type { Metadata } from "next";
import Image from "next/image";
import { Heading } from "@/components/ui";
import { Button } from "@/components/ui";
import { HairSalonJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "A Casa – Barbearia | Coimbra",
  description:
    "Barbearia artesanal em Coimbra. Corte, barba e muito mais, com o cuidado de quem te recebe em casa.",
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
        {/* Ilustração decorativa — ferramentas do barbeiro */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none select-none hidden md:block">
          <Image
            src="/images/barber-tools.png"
            alt=""
            fill
            className="object-contain object-center"
            style={{ mixBlendMode: "luminosity", opacity: 0.12 }}
            priority={false}
          />
        </div>

        <div className="container-site relative z-10 flex flex-col items-start gap-6 max-w-2xl">
          <span className="divider-brass" />
          <Heading as="h1" size={1} className="text-white !text-[var(--color-surface)]">
            Entra.<br />
            Senta-te.<br />
            Estás em <em className="italic text-[var(--color-brass-light)]">Casa</em>.
          </Heading>
          <p className="text-lg text-white/70 leading-relaxed max-w-lg">
            Barbearia artesanal no coração de Coimbra. Cortes de autor, barba impecável
            e o ambiente de quem te conhece pelo nome.
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <Button href="/agenda" size="lg">
              Marcar corte
            </Button>
            <Button href="/servicos" variant="secondary" size="lg" className="border-white/40 text-white hover:bg-white/10">
              Ver serviços
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
              { icon: "✂️", title: "Ofício artesanal", desc: "Cada corte é tratado com atenção e rigor, sem pressa." },
              { icon: "☕", title: "Recebido em casa", desc: "Café, boa conversa e o André a receber-te pelo nome." },
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
          <p className="text-white/70 mb-8 text-lg">
            Escolhe o horário que te convém e aparece sem esperas.
          </p>
          <Button href="/agenda" size="lg">
            Marcar agora
          </Button>
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
