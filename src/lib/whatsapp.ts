/**
 * Constrói URLs de WhatsApp e telefone para o CTA da agenda demo.
 */

const PHONE = process.env.NEXT_PUBLIC_PHONE ?? "351912345678";
const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP ?? "351912345678";

export function buildWhatsappUrl(slot: string, day: string): string {
  const text = encodeURIComponent(
    `Olá! Gostava de marcar um corte para ${day} às ${slot}. É possível?`
  );
  return `https://wa.me/${WHATSAPP}?text=${text}`;
}

export function buildTelUrl(): string {
  return `tel:+${PHONE}`;
}
