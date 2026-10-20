import Link from "next/link";
import { Heading, Button } from "@/components/ui";
import { BarberPole } from "@/components/icons";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)] flex items-center justify-center">
      <div className="container-site text-center py-20">
        <BarberPole size={64} className="text-[var(--color-line-strong)] mx-auto mb-6" />
        <Heading as="h1" size={1} className="mb-4">Página não encontrada</Heading>
        <p className="text-[var(--color-muted)] text-lg mb-8">
          Parece que esta página foi à navalha. Vamos de volta ao início?
        </p>
        <Button href="/">Voltar ao início</Button>
      </div>
    </div>
  );
}
