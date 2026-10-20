import type { HTMLAttributes } from "react";

type Level = 1 | 2 | 3 | 4;

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  as?: `h${Level}`;
  size?: Level;
  accent?: boolean;
}

const sizeClass: Record<Level, string> = {
  1: "text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05]",
  2: "text-[clamp(1.6rem,3.5vw,2.5rem)] font-semibold leading-[1.1]",
  3: "text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold leading-[1.15]",
  4: "text-xl font-semibold leading-snug",
};

export function Heading({ as: Tag = "h2", size = 2, accent = false, className = "", children, ...props }: Props) {
  // Não definimos color aqui — herda de @layer base (h1,h2,...{color:var(--color-ink)})
  // Para que className="text-white" ou qualquer utilitário de cor passado pelo pai
  // ganhe sempre (Tailwind utilities > @layer base).
  return (
    <Tag
      className={`font-display ${sizeClass[size]} ${accent ? "text-[var(--color-green-700)]" : ""} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
