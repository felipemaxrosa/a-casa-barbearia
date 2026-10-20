import type { SVGProps } from "react";

export function BarberPole({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
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
      {/* Haste */}
      <line x1="12" y1="3" x2="12" y2="21" />
      {/* Globo topo */}
      <circle cx="12" cy="3" r="1.5" />
      {/* Base */}
      <rect x="9" y="20" width="6" height="2" rx="1" />
      {/* Riscas em espiral (estilizadas) */}
      <path d="M9 7 Q15 9 9 11 Q15 13 9 15 Q15 17 9 19" strokeWidth={1.25} />
    </svg>
  );
}
