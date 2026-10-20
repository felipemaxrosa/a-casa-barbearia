"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Heading } from "@/components/ui";
import { Scissors } from "@/components/icons";

interface Photo {
  src: string;
  alt: string;
  real: boolean;
}

/* ── Lightbox ─────────────────────────────────────────────────── */
function Lightbox({
  photos,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  photos: Photo[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const photo = photos[index];
  const hasPrev = index > 0;
  const hasNext = index < photos.length - 1;

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape")     onClose();
      if (e.key === "ArrowLeft")  onPrev();
      if (e.key === "ArrowRight") onNext();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Fotografia ampliada"
    >
      {/* Contador */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/60 text-sm font-sans tabular-nums">
        {index + 1} / {photos.length}
      </div>

      {/* Fechar */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
        aria-label="Fechar"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Seta anterior */}
      {hasPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-3 md:left-6 text-white/70 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10"
          aria-label="Foto anterior"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      )}

      {/* Imagem */}
      <div
        className="relative max-w-[90vw] max-h-[85vh] w-full h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="90vw"
          className="object-contain"
          priority
        />
      </div>

      {/* Seta próxima */}
      {hasNext && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-3 md:right-6 text-white/70 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10"
          aria-label="Próxima foto"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      )}
    </div>
  );
}

/* ── Grid principal ───────────────────────────────────────────── */
export function GaleriaGrid({ photos }: { photos: Photo[] }) {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  // Só as fotos reais navegam no lightbox
  const realPhotos = photos.filter((p) => p.real);

  const openLightbox = useCallback((idx: number) => setLightboxIdx(idx), []);
  const closeLightbox = useCallback(() => setLightboxIdx(null), []);
  const goPrev = useCallback(() => setLightboxIdx((i) => (i !== null && i > 0 ? i - 1 : i)), []);
  const goNext = useCallback(
    () => setLightboxIdx((i) => (i !== null && i < realPhotos.length - 1 ? i + 1 : i)),
    [realPhotos.length]
  );

  return (
    <div className="section">
      <div className="container-site">
        <div className="mb-12">
          <span className="divider-brass" />
          <Heading as="h1" size={1}>Galeria</Heading>
          <p className="text-[var(--color-muted)] mt-4 text-lg max-w-xl">
            Cada corte conta uma história. Inspira-te com o trabalho da nossa equipa.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {photos.map((photo, i) => {
            // índice dentro das fotos reais (para o lightbox)
            const realIdx = realPhotos.findIndex((p) => p.src === photo.src);

            return photo.real ? (
              <button
                key={photo.src}
                onClick={() => openLightbox(realIdx)}
                className="relative w-full aspect-square rounded-[var(--radius-card)] overflow-hidden focus-visible:outline-2 focus-visible:outline-[var(--color-brass-ink)] group"
                style={{ boxShadow: "var(--shadow-card)" }}
                aria-label={`Ver foto: ${photo.alt}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <svg
                    width="32" height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow"
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </div>
              </button>
            ) : (
              <div
                key={`placeholder-${i}`}
                className="w-full aspect-square bg-[var(--color-surface-2)] rounded-[var(--radius-card)] flex flex-col items-center justify-center gap-3 text-[var(--color-muted)]"
              >
                <Scissors size={32} className="text-[var(--color-line-strong)]" />
                <span className="text-xs">Foto em breve</span>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-sm text-[var(--color-muted)] text-center">
          Mais trabalhos em{" "}
          <a
            href="https://www.instagram.com/acasa_barbearia/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-brass-ink)] hover:text-[var(--color-green-700)] transition-colors underline underline-offset-4"
          >
            @acasa_barbearia
          </a>
        </p>
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <Lightbox
          photos={realPhotos}
          index={lightboxIdx}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </div>
  );
}
