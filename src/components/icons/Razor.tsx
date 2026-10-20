import type { SVGProps } from "react";

export function Razor({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {/* Lâmina da navalha */}
      <path d="M3 12 C3 7 7 4 12 4 L20 6 L20 18 L12 20 C7 20 3 17 3 12Z" />
      {/* Fio */}
      <line x1="12" y1="4" x2="12" y2="20" strokeWidth={0.75} opacity={0.4} />
      {/* Cabo */}
      <path d="M20 6 L22 8 L22 16 L20 18" />
    </svg>
  );
}
