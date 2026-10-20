import type { SVGProps } from "react";

export function Comb({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
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
      {/* Corpo do pente */}
      <rect x="3" y="4" width="18" height="6" rx="1" />
      {/* Dentes */}
      <line x1="6"  y1="10" x2="6"  y2="20" />
      <line x1="9"  y1="10" x2="9"  y2="17" />
      <line x1="12" y1="10" x2="12" y2="20" />
      <line x1="15" y1="10" x2="15" y2="17" />
      <line x1="18" y1="10" x2="18" y2="20" />
    </svg>
  );
}
