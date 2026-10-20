import type { Metadata } from "next";
import Link from "next/link";
import { Heading, Button, Badge } from "@/components/ui";
import { BarberPole, Razor, Scissors, House, Comb } from "@/components/icons";
import { WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: { absolute: "Proposta — A Casa Barbearia" },
  robots: { index: false, follow: false },
};

export default function PropostaPage() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)] font-sans">

      {/* ── Barra topo ──────────────────────────────────────── */}
      <div className="bg-[var(--color-green-900)] text-white/70 text-xs text-center py-2 px-4">
        Esta é uma proposta confidencial para A Casa Barbearia ·{" "}
        <Link href="/" className="text-[var(--color-brass-light)] underline underline-offset-2 hover:text-white transition-colors">
          Ver o site →
        </Link>
      </div>

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="section bg-[var(--color-green-900)] text-white">
        <div className="container-site max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <BarberPole size={24} className="text-[var(--color-brass)]" />
            <span className="text-sm font-medium text-white/60 uppercase tracking-widest">Proposta exclusiva</span>
          </div>
          <Heading as="h1" size={1} className="text-white mb-6">
            André, a <em className="text-[var(--color-brass-light)] italic">A Casa</em> merece<br />
            estar online.
          </Heading>
          <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-none">
            Hoje a tua barbearia vive no boca-a-boca e no Instagram. Isso já foi suficiente —
            mas há clientes que te procuram no Google e não te encontram. Um site muda isso.
          </p>
          <Button href="/" variant="brass" size="lg">
            Ver o site →
          </Button>
        </div>
      </section>

      {/* ── O problema ──────────────────────────────────────── */}
      <section className="section bg-[var(--color-surface-2)]">
        <div className="container-site max-w-3xl">
          <span className="divider-brass" />
          <Heading as="h2" size={2} className="mb-8">
            Cada dia sem site são clientes que vão embora
          </Heading>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { stat: "88%",  label: "dos consumidores pesquisam online antes de visitar um negócio local" },
              { stat: "#1",   label: "factor de confiança para novos clientes: ter presença online profissional" },
              { stat: "3×",   label: "mais contactos recebem negócios locais com Google Business optimizado" },
            ].map(({ stat, label }) => (
              <div key={stat} className="bg-[var(--color-surface)] rounded-[var(--radius-card)] p-6 text-center" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="text-4xl font-display font-bold text-[var(--color-green-700)] mb-3">{stat}</div>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── O que inclui ────────────────────────────────────── */}
      <section className="section">
        <div className="container-site max-w-3xl">
          <span className="divider-brass" />
          <Heading as="h2" size={2} className="mb-8">
            O que vais ter
          </Heading>
          <div className="flex flex-col gap-4">
            {features.map(({ icon, title, desc, badge }) => (
              <div key={title} className="flex gap-4 p-5 bg-[var(--color-surface)] rounded-[var(--radius-card)]" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="text-[var(--color-brass-ink)] shrink-0 mt-0.5">{icon}</div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-display font-semibold text-base">{title}</h3>
                    {badge && <Badge variant="green">{badge}</Badge>}
                  </div>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Depoimentos ─────────────────────────────────────── */}
      <section className="section bg-[var(--color-surface-2)]">
        <div className="container-site max-w-3xl">
          <span className="divider-brass" />
          <Heading as="h2" size={2} className="mb-4">
            Os teus clientes já falam de ti assim
          </Heading>
          <p className="text-[var(--color-muted)] mb-8">
            Imagina um visitante online ler isto antes de marcar. A confiança já está ganha antes de ele entrar.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {proofQuotes.map(({ author, quote }) => (
              <blockquote key={author} className="bg-[var(--color-surface)] rounded-[var(--radius-card)] p-5" style={{ boxShadow: "var(--shadow-card)" }}>
                <p className="text-[var(--color-brass)] mb-2">★★★★★</p>
                <p className="text-sm text-[var(--color-ink)] leading-relaxed mb-3">&ldquo;{quote}&rdquo;</p>
                <footer className="text-xs text-[var(--color-muted)]">— {author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO local ───────────────────────────────────────── */}
      <section className="section">
        <div className="container-site max-w-3xl">
          <span className="divider-brass" />
          <Heading as="h2" size={2} className="mb-4">
            Aparecer quando procuram &ldquo;barbearia Coimbra&rdquo;
          </Heading>
          <p className="text-[var(--color-muted)] mb-8 leading-relaxed max-w-none">
            Um site bem feito coloca a A Casa nos resultados do Google. Com o Perfil de Empresa optimizado,
            apareces no mapa local — exatamente quando alguém em Coimbra está à procura de um barbeiro.
          </p>
          <div className="bg-[var(--color-green-100)] rounded-[var(--radius-card)] p-6 border-l-4 border-[var(--color-green-700)]">
            <h3 className="font-display font-semibold text-lg text-[var(--color-green-700)] mb-2">
              Inclui SEO local de raiz
            </h3>
            <ul className="text-sm text-[var(--color-muted)] flex flex-col gap-1 list-disc list-inside">
              <li>Dados estruturados: o Google sabe que és uma barbearia em Coimbra</li>
              <li>Morada, horário e telefone indexados automaticamente</li>
              <li>Open Graph: quando partilhas o link, aparece uma pré-visualização com a tua identidade</li>
              <li>Página rápida: sites lentos sobem menos — o teu vai ser rápido</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA final ───────────────────────────────────────── */}
      <section className="section bg-[var(--color-green-900)] text-white">
        <div className="container-site max-w-2xl text-center">
          <span className="divider-brass mx-auto" />
          <Heading as="h2" size={2} className="text-white mb-4">
            Pronto para levar a A Casa para o próximo nível?
          </Heading>
          <p className="text-white/70 mb-8 text-lg leading-relaxed max-w-none">
            O site está pronto para mostrar. Explora, navega, abre no telemóvel —
            é assim que os teus clientes vão ver A Casa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/" variant="brass" size="lg">
              Ver o site
            </Button>
            <Button
              href={WHATSAPP_URL}
              variant="secondary"
              size="lg"
              className="border-white/40 text-white hover:bg-white/10"
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar sobre o projecto
            </Button>
          </div>
          <p className="text-white/40 text-xs mt-8">
            Esta página é confidencial e não está indexada nos motores de pesquisa.
          </p>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    icon: <House size={20} />,
    title: "Site completo e profissional",
    desc: "Home, serviços, equipa e contactos. Uma montra digital que representa A Casa com a qualidade que o teu trabalho merece.",
    badge: undefined,
  },
  {
    icon: <Scissors size={20} />,
    title: "Marcações via AppBarber",
    desc: "Os clientes marcam directamente no AppBarber — o sistema que já usas, agora integrado no site com um botão directo.",
    badge: "Sem esperas",
  },
  {
    icon: <Comb size={20} />,
    title: "WhatsApp como canal de contacto",
    desc: "Um botão de WhatsApp em todo o site para que os clientes possam falar contigo directamente, a qualquer momento.",
    badge: undefined,
  },
  {
    icon: <Razor size={20} />,
    title: "SEO local — aparecer no Google",
    desc: "Optimizado para aparecer quando alguém em Coimbra pesquisa por barbeiro. Mais visibilidade, mais clientes novos.",
    badge: undefined,
  },
];

const proofQuotes = [
  { author: "Leandro Marcelino",     quote: "Atendimento premium com qualidade no serviço. Preço justo e serviço excelente, vou voltar." },
  { author: "Victor",                quote: "O André recebeu-me com café e uma boa conversa. O trabalho ficou ótimo, com certeza voltarei." },
  { author: "MyselfJCVF",            quote: "Com marcação o que é ótimo sem ter de estar à espera!" },
  { author: "António Matos Godinho", quote: "Ambiente tranquilo, corte impecável. Vou regressar em breve." },
];
