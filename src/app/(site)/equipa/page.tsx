import type { Metadata } from "next";
import Image from "next/image";
import { Heading, Badge, Button } from "@/components/ui";
import { Scissors } from "@/components/icons";

export const metadata: Metadata = {
  title: "A Nossa Equipa",
  description: "Conhece os profissionais da A Casa Barbearia em Coimbra. André e a equipa ao teu serviço.",
  alternates: { canonical: "/equipa" },
};

const team = [
  {
    name: "André",
    role: "Proprietário · Barbeiro",
    bio: "André fundou A Casa com uma missão simples: criar um espaço onde cada cliente se sente em casa. Com anos de experiência e paixão pelo ofício, cada corte é uma expressão do seu cuidado.",
    specialties: ["Corte clássico", "Barba", "Fade", "Limpeza de pele"],
    placeholder: true,
  },
  {
    name: "Colega",
    role: "Barbeiro",
    bio: "Profissional dedicado, com técnica apurada e atenção ao detalhe. Parte essencial da equipa d'A Casa.",
    specialties: ["Corte moderno", "Barba", "Combo"],
    placeholder: true,
  },
];

export default function EquipaPage() {
  return (
    <div className="section">
      <div className="container-site">
        <div className="mb-12">
          <span className="divider-brass" />
          <Heading as="h1" size={1}>A Nossa Equipa</Heading>
          <p className="text-[var(--color-muted)] mt-4 text-lg max-w-xl">
            Mais do que barbeiros — são os anfitriões d'A Casa. Conhece quem vai cuidar de ti.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
          {team.map(({ name, role, bio, specialties, placeholder }) => (
            <div
              key={name}
              className="bg-[var(--color-surface)] rounded-[var(--radius-card)] overflow-hidden"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              {/* Foto placeholder */}
              <div className="aspect-[4/3] bg-[var(--color-surface-2)] flex items-center justify-center relative">
                {placeholder ? (
                  <div className="flex flex-col items-center gap-3 text-[var(--color-muted)]">
                    <Scissors size={48} className="text-[var(--color-line-strong)]" />
                    <span className="text-sm">Foto em breve</span>
                  </div>
                ) : (
                  <Image src={`/images/team/${name.toLowerCase()}.jpg`} alt={`${name} — ${role}`} fill className="object-cover" />
                )}
              </div>

              {/* Info */}
              <div className="p-6">
                <h2 className="font-display font-semibold text-2xl mb-1">{name}</h2>
                <p className="text-[var(--color-brass-ink)] text-sm font-medium mb-4">{role}</p>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-5">{bio}</p>

                <div className="flex flex-wrap gap-2">
                  {specialties.map((s) => (
                    <Badge key={s} variant="green">{s}</Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-[var(--color-surface-2)] rounded-[var(--radius-card)] max-w-lg">
          <p className="text-[var(--color-muted)] text-sm leading-relaxed">
            Preferes um barbeiro específico? Na agenda podes escolher com quem queres marcar.
          </p>
          <Button href="/agenda" variant="secondary" size="sm" className="mt-4">
            Ver agenda
          </Button>
        </div>
      </div>
    </div>
  );
}
