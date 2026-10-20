/**
 * Gerador de dados fake para a agenda demo.
 * Os dados são determinísticos: para a mesma data/hora, o estado (livre/ocupado)
 * é sempre o mesmo. Não há backend.
 */

export type SlotStatus = "available" | "busy";

export interface Slot {
  time: string;    // "09:00"
  status: SlotStatus;
}

export interface DayColumn {
  dateISO: string; // "2026-10-20"
  dayName: string; // "Ter"
  dayNum: number;  // 20
  monthShort: string; // "Out"
  closed: boolean;
  slots: Slot[];
}

/** Hash determinístico baseado numa string — distribui 0..100 */
function stableHash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h) % 100;
}

/** Dias fechados: 0=Dom, 1=Seg */
const CLOSED_DAYS = new Set([0, 1]);

/** Horário de trabalho — slots de 30 min (duração base: Barba/Cabelo = 30 min) */
const HOURS = ["09:00","09:30","10:00","10:30","11:00","11:30",
               "12:00","12:30","14:00","14:30","15:00","15:30",
               "16:00","16:30","17:00","17:30","18:00","18:30"];

const PT_DAYS  = ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];
const PT_MONTHS = ["Jan","Fev","Mar","Abr","Mai","Jun",
                   "Jul","Ago","Set","Out","Nov","Dez"];

function isBusy(dateISO: string, time: string): boolean {
  const h = stableHash(`${dateISO}|${time}`);
  const [hh] = time.split(":").map(Number);

  // Sábado mais cheio: 70%, tarde mais cheia
  const isSat = new Date(dateISO).getDay() === 6;
  const isAfternoon = hh >= 14;

  const threshold = isSat ? 65 : isAfternoon ? 55 : 40;
  return h < threshold;
}

/**
 * Gera os próximos `days` dias a partir de hoje.
 */
export function generateWeek(days = 7): DayColumn[] {
  const result: DayColumn[] = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (let i = 0; i < days; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);

    const dow   = d.getDay();
    const dateISO = d.toISOString().slice(0, 10);
    const closed  = CLOSED_DAYS.has(dow);

    result.push({
      dateISO,
      dayName:    PT_DAYS[dow],
      dayNum:     d.getDate(),
      monthShort: PT_MONTHS[d.getMonth()],
      closed,
      slots: closed
        ? []
        : HOURS.map((time) => ({
            time,
            status: isBusy(dateISO, time) ? "busy" : "available",
          })),
    });
  }

  return result;
}
