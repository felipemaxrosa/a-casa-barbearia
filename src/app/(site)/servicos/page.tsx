import type { Metadata } from "next";
import Image from "next/image";
import { Heading, Badge, Button } from "@/components/ui";
import { Scissors, Razor, Comb, House } from "@/components/icons";

export const metadata: Metadata = {
  title: "Serviços e Preços",
  description:
    "Descobre todos os serviços da A Casa Barbearia em Coimbra: corte, barba, combo, luzes e muito mais.",
  alternates: { canonical: "/servicos" },
};

const services = [
  {
    icon: <Scissors size={28} />,
    title: "Cabelo",
    price: "€13",
    duration: "30 min",
    category: "Cabelo",
    desc: "Corte personalizado adaptado ao teu estilo, com acabamento profissional.",
  },
  {
    icon: <Razor size={28} />,
    title: "Barba",
    price: "€10",
    duration: "30 min",
    category: "Barba",
    desc: "Barbear tradicional com toalha quente, navalha e produtos premium.",
  },
  {
    icon: <Comb size={28} />,
    title: "Cabelo e Barba",
    price: "€20",
    duration: "60 min",
    category: "Combo",
    desc: "O pacote completo — cabelo + barba com o cuidado que mereces.",
  },
  {
    icon: <Scissors size={28} />,
    title: "Limpeza de Pele Express",
    price: "€10",
    duration: "20 min",
    category: "Extras",
    desc: "Tratamento facial de limpeza profunda para uma pele radiante.",
  },
  {
    icon: <Comb size={28} />,
    title: "Luzes / Madeixas",
    price: "€40",
    duration: "120 min",
    category: "Cabelo",
    desc: "Técnica de cor para um resultado natural e luminoso.",
  },
  {
    icon: <House size={28} />,
    title: "Pai (cab+barba) e Filho (cab)",
    price: "€30",
    duration: "90 min",
    category: "Família",
    desc: "Um ritual a dois. Pai com corte + barba, filho com corte.",
  },
  {
    icon: <House size={28} />,
    title: "Pai e Filho (cabelo)",
    price: "€23",
    duration: "60 min",
    category: "Família",
    desc: "Dois cortes de cabelo — o momento perfeito para pai e filho.",
  },
];

const categoryColor: Record<string, "default" | "green" | "brass"> = {
  Cabelo:  "green",
  Barba:   "brass",
  Combo:   "default",
  Extras:  "default",
  Família: "brass",
};

export default function ServicosPage() {
  return (
    <div className="section relative overflow-hidden">
      {/* Decoração fundo */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none select-none hidden lg:block opacity-[0.04]">
        <Image src="/images/barber-tools.png" alt="" fill className="object-contain" />
      </div>
      <div className="container-site relative z-10">
        <div className="mb-12">
          <span className="divider-brass" />
          <Heading as="h1" size={1}>Serviços</Heading>
          <p className="text-[var(--color-muted)] mt-4 text-lg max-w-xl">
            Do corte clássico ao tratamento completo. Todos os serviços com produtos de qualidade
            e a atenção ao detalhe que a nossa casa merece.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map(({ icon, title, price, duration, category, desc }) => (
            <div
              key={title}
              className="bg-[var(--color-surface)] rounded-[var(--radius-card)] p-6 flex flex-col gap-4"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="text-[var(--color-brass-ink)]">{icon}</div>
                <Badge variant={categoryColor[category]}>{category}</Badge>
              </div>
              <div>
                <h2 className="font-display font-semibold text-xl mb-1">{title}</h2>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">{desc}</p>
              </div>
              <div className="flex items-center justify-between mt-auto pt-2 border-t border-[var(--color-line)]">
                <span className="text-2xl font-display font-semibold text-[var(--color-green-700)]">{price}</span>
                <span className="text-sm text-[var(--color-muted)]">{duration}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start">
          <p className="text-sm text-[var(--color-muted)]">
            Preços disponíveis via AppBarber. Marcações confirmadas no momento.
          </p>
          <Button href="/agenda" variant="secondary" size="sm" className="shrink-0">
            Ver disponibilidade →
          </Button>
        </div>
      </div>
    </div>
  );
}
