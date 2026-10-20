import type { SVGProps } from "react";

export function Towel({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
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
      {/* Barra de toalha */}
      <line x1="4" y1="3" x2="20" y2="3" strokeWidth={2} />
      {/* Toalha dobrada a cair */}
      <path d="M8 3 C8 3 7 7 7 10 L7 20 Q7 21.5 8.5 21.5 L15.5 21.5 Q17 21.5 17 20 L17 10 C17 7 16 3 16 3" />
      {/* Dobra decorativa */}
      <path d="M7 14 Q12 16 17 14" strokeWidth={1} opacity={0.5} />
    </svg>
  );
}
