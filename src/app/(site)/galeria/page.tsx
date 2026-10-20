import type { Metadata } from "next";
import Image from "next/image";
import { Heading } from "@/components/ui";
import { Scissors } from "@/components/icons";

export const metadata: Metadata = {
  title: "Galeria",
  description: "Inspira-te com os trabalhos da A Casa Barbearia em Coimbra. Cortes de cabelo e barba de autor.",
  alternates: { canonical: "/galeria" },
};

interface Photo {
  src: string;
  alt: string;
  real: boolean;
}

const photos: Photo[] = [
  { src: "/images/gallery/01.jpg", alt: "Corte clássico com fade — A Casa Barbearia", real: true },
  { src: "/images/gallery/02.jpg", alt: "Corte e barba degradada — A Casa Barbearia",  real: true },
  { src: "/images/gallery/03.jpg", alt: "Fade alto com textura — A Casa Barbearia",     real: true },
  { src: "/images/gallery/04.jpg", alt: "Corte de cabelo — A Casa Barbearia",            real: false },
  { src: "/images/gallery/05.jpg", alt: "Corte de cabelo — A Casa Barbearia",            real: false },
  { src: "/images/gallery/06.jpg", alt: "Corte de cabelo — A Casa Barbearia",            real: false },
  { src: "/images/gallery/07.jpg", alt: "Corte de cabelo — A Casa Barbearia",            real: false },
  { src: "/images/gallery/08.jpg", alt: "Corte de cabelo — A Casa Barbearia",            real: false },
  { src: "/images/gallery/09.jpg", alt: "Corte de cabelo — A Casa Barbearia",            real: false },
  { src: "/images/gallery/10.jpg", alt: "Corte de cabelo — A Casa Barbearia",            real: false },
  { src: "/images/gallery/11.jpg", alt: "Corte de cabelo — A Casa Barbearia",            real: false },
  { src: "/images/gallery/12.jpg", alt: "Corte de cabelo — A Casa Barbearia",            real: false },
];

function PhotoPlaceholder({ index }: { index: number }) {
  return (
    <div className="w-full aspect-square bg-[var(--color-surface-2)] rounded-[var(--radius-card)] flex flex-col items-center justify-center gap-3 text-[var(--color-muted)]">
      <Scissors size={32} className="text-[var(--color-line-strong)]" />
      <span className="text-xs">Foto em breve</span>
    </div>
  );
}

export default function GaleriaPage() {
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
          {photos.map((photo, i) =>
            photo.real ? (
              <div
                key={photo.src}
                className="relative w-full aspect-square rounded-[var(--radius-card)] overflow-hidden"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ) : (
              <PhotoPlaceholder key={photo.src} index={i} />
            )
          )}
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
    </div>
  );
}
