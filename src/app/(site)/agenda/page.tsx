import type { Metadata } from "next";
import { Heading } from "@/components/ui";
import { AgendaDemo } from "@/components/agenda/AgendaDemo";

export const metadata: Metadata = {
  title: "Agenda — Marcar Corte",
  description: "Escolhe o dia e hora que te convém. Marcações na A Casa Barbearia em Coimbra, sem esperas.",
  alternates: { canonical: "/agenda" },
};

export default function AgendaPage() {
  return (
    <div className="section">
      <div className="container-site max-w-5xl">
        <div className="mb-10">
          <span className="divider-brass" />
          <Heading as="h1" size={1}>Agenda</Heading>
          <p className="text-[var(--color-muted)] mt-4 text-lg max-w-xl">
            Escolhe um horário disponível e confirma a marcação por WhatsApp. Sem esperas, sem surpresas.
          </p>
        </div>

        <div
          className="bg-[var(--color-surface)] rounded-[var(--radius-card)] p-4 md:p-8"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <AgendaDemo />
        </div>

        <p className="mt-6 text-sm text-[var(--color-muted)]">
          Preferes ligar? <a href="tel:+351XXXXXXXXX" className="underline underline-offset-2 hover:text-[var(--color-green-700)]">+351 XXX XXX XXX</a>
        </p>
      </div>
    </div>
  );
}
