"use client";

import { useState, useEffect, useRef } from "react";
import { generateWeek, type DayColumn, type SlotStatus } from "@/lib/agenda-data";
import { buildWhatsappUrl, buildTelUrl } from "@/lib/whatsapp";

type Selected = { dateISO: string; time: string; dayLabel: string } | null;

export function AgendaDemo() {
  const [week, setWeek] = useState<DayColumn[]>([]);
  const [selected, setSelected] = useState<Selected>(null);
  const [activeDayIdx, setActiveDayIdx] = useState(0);
  const bridgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWeek(generateWeek(7));
  }, []);

  function handleSelect(dateISO: string, time: string, dayLabel: string) {
    setSelected({ dateISO, time, dayLabel });
    // scroll para o booking bridge no mobile
    setTimeout(() => bridgeRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }), 100);
  }

  if (!week.length) {
    return (
      <div className="flex items-center justify-center h-48 text-[var(--color-muted)] text-sm">
        A carregar agenda…
      </div>
    );
  }

  const activeDay = week[activeDayIdx];

  return (
    <div className="flex flex-col gap-6">
      {/* Legenda */}
      <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-[var(--color-avail-bg)] border border-[var(--color-avail)]" />
          <span className="text-[var(--color-avail)]">Disponível</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-[var(--color-busy-bg)]" />
          <span className="text-[var(--color-muted)]">Ocupado</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-[var(--color-green-900)]" />
          <span className="text-[var(--color-green-700)]">Selecionado</span>
        </div>
        <span className="ml-auto text-[var(--color-muted)] italic">Demo — sem marcação real</span>
      </div>

      {/* Seletor de dias (mobile: tabs, desktop: colunas) */}
      <div className="md:hidden flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
        {week.map((day, i) => (
          <button
            key={day.dateISO}
            onClick={() => setActiveDayIdx(i)}
            className={`flex-shrink-0 flex flex-col items-center px-3 py-2 rounded-lg text-sm transition-colors ${
              activeDayIdx === i
                ? "bg-[var(--color-green-900)] text-white"
                : "bg-[var(--color-surface)] text-[var(--color-ink)] hover:bg-[var(--color-surface-2)]"
            } ${day.closed ? "opacity-40" : ""}`}
            disabled={day.closed}
          >
            <span className="font-medium">{day.dayName}</span>
            <span className="text-xs opacity-70">{day.dayNum}</span>
          </button>
        ))}
      </div>

      {/* Grid desktop */}
      <div className="hidden md:grid gap-1" style={{ gridTemplateColumns: `repeat(${week.length}, minmax(0, 1fr))` }}>
        {/* Cabeçalho */}
        {week.map((day) => (
          <div
            key={day.dateISO}
            className={`text-center py-2 rounded-t-lg text-sm font-medium ${
              day.closed
                ? "text-[var(--color-muted)]/50 bg-[var(--color-surface-2)]/50"
                : "text-[var(--color-ink)] bg-[var(--color-surface)]"
            }`}
          >
            <div>{day.dayName}</div>
            <div className="text-xs opacity-60">{day.dayNum} {day.monthShort}</div>
          </div>
        ))}

        {/* Slots */}
        {week.map((day) => (
          <div key={day.dateISO} className="flex flex-col gap-1 pt-1">
            {day.closed ? (
              <div className="text-center text-xs text-[var(--color-muted)]/50 py-4">Fechado</div>
            ) : (
              day.slots.map((slot) => {
                const isSelected = selected?.dateISO === day.dateISO && selected?.time === slot.time;
                return (
                  <SlotButton
                    key={slot.time}
                    time={slot.time}
                    status={slot.status}
                    selected={isSelected}
                    onClick={() =>
                      slot.status === "available" &&
                      handleSelect(
                        day.dateISO,
                        slot.time,
                        `${day.dayName}, ${day.dayNum} ${day.monthShort}`
                      )
                    }
                  />
                );
              })
            )}
          </div>
        ))}
      </div>

      {/* Slots mobile (dia ativo) */}
      <div className="md:hidden">
        {activeDay.closed ? (
          <div className="text-center py-8 text-[var(--color-muted)]">Fechado</div>
        ) : (
          <div className="grid grid-cols-3 gap-2">
            {activeDay.slots.map((slot) => {
              const isSelected = selected?.dateISO === activeDay.dateISO && selected?.time === slot.time;
              return (
                <SlotButton
                  key={slot.time}
                  time={slot.time}
                  status={slot.status}
                  selected={isSelected}
                  onClick={() =>
                    slot.status === "available" &&
                    handleSelect(
                      activeDay.dateISO,
                      slot.time,
                      `${activeDay.dayName}, ${activeDay.dayNum} ${activeDay.monthShort}`
                    )
                  }
                />
              );
            })}
          </div>
        )}
      </div>

      {/* Booking Bridge */}
      {selected && (
        <div
          ref={bridgeRef}
          className="rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 flex flex-col gap-4"
          style={{ boxShadow: "var(--shadow-lg)" }}
          role="region"
          aria-label="Confirmação de marcação"
        >
          <div>
            <h3 className="font-display font-semibold text-xl mb-1">
              {selected.dayLabel} · {selected.time}
            </h3>
            <p className="text-sm text-[var(--color-muted)]">com André — A Casa Barbearia</p>
          </div>

          <p className="text-xs text-[var(--color-muted)] italic border-l-2 border-[var(--color-brass)] pl-3">
            Demonstração — a marcação real é confirmada por WhatsApp ou telefone.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={buildWhatsappUrl(selected.time, selected.dayLabel)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-[var(--color-green-900)] text-white text-sm font-medium rounded-[var(--radius-pill)] hover:bg-[var(--color-green-800)] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Confirmar por WhatsApp
            </a>
            <a
              href={buildTelUrl()}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-[var(--color-line)] text-[var(--color-ink)] text-sm font-medium rounded-[var(--radius-pill)] hover:bg-[var(--color-surface-2)] transition-colors"
            >
              Ligar
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── SlotButton ─────────────────────────────────────────────── */
function SlotButton({
  time,
  status,
  selected,
  onClick,
}: {
  time: string;
  status: SlotStatus;
  selected: boolean;
  onClick: () => void;
}) {
  const isBusy = status === "busy";

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isBusy}
      aria-pressed={selected}
      aria-disabled={isBusy}
      className={`
        w-full py-1.5 px-1 text-xs rounded-md font-medium transition-colors focus-visible:outline-2
        ${selected
          ? "bg-[var(--color-green-900)] text-white"
          : isBusy
            ? "bg-[var(--color-busy-bg)] text-[var(--color-busy)] cursor-not-allowed"
            : "bg-[var(--color-avail-bg)] text-[var(--color-avail)] border border-[var(--color-avail)] hover:bg-[var(--color-avail)] hover:text-white"
        }
      `}
    >
      {time}
    </button>
  );
}
