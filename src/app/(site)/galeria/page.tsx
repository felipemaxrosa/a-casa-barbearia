import type { Metadata } from "next";
import { GaleriaGrid } from "./GaleriaGrid";

export const metadata: Metadata = {
  title: "Galeria",
  description: "Inspira-te com os trabalhos da A Casa Barbearia em Coimbra. Cortes de cabelo e barba de autor.",
  alternates: { canonical: "/galeria" },
};

export const photos = [
  { src: "/images/gallery/01.png", alt: "Corte clássico com fade — A Casa Barbearia",  real: true  },
  { src: "/images/gallery/02.png", alt: "Corte e barba degradada — A Casa Barbearia",  real: true  },
  { src: "/images/gallery/03.png", alt: "Fade alto com textura — A Casa Barbearia",    real: true  },
  { src: "/images/gallery/04.png", alt: "Corte de cabelo — A Casa Barbearia",           real: false },
  { src: "/images/gallery/05.png", alt: "Corte de cabelo — A Casa Barbearia",           real: false },
  { src: "/images/gallery/06.png", alt: "Corte de cabelo — A Casa Barbearia",           real: false },
  { src: "/images/gallery/07.png", alt: "Corte de cabelo — A Casa Barbearia",           real: false },
  { src: "/images/gallery/08.png", alt: "Corte de cabelo — A Casa Barbearia",           real: false },
  { src: "/images/gallery/09.png", alt: "Corte de cabelo — A Casa Barbearia",           real: false },
  { src: "/images/gallery/10.png", alt: "Corte de cabelo — A Casa Barbearia",           real: false },
  { src: "/images/gallery/11.png", alt: "Corte de cabelo — A Casa Barbearia",           real: false },
  { src: "/images/gallery/12.png", alt: "Corte de cabelo — A Casa Barbearia",           real: false },
];

export default function GaleriaPage() {
  return <GaleriaGrid photos={photos} />;
}
