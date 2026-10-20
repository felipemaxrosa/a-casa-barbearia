/**
 * Constantes globais do projecto A Casa Barbearia.
 */

/** URL do sistema de marcações AppBarber — abre em nova tab */
export const APPBARBER_URL =
  "https://sites.appbarber.com.br/acasabarbearia-hp4f";

/** WhatsApp da barbearia — número real a substituir quando confirmado */
const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP ?? "351912345678";
const WA_TEXT = encodeURIComponent("Olá! Gostava de saber mais sobre os vossos serviços.");
export const WHATSAPP_URL = `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`;
