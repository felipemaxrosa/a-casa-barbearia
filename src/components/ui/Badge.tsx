import type { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "green" | "brass";
}

const variants = {
  default: "bg-[var(--color-surface-2)] text-[var(--color-muted)]",
  green:   "bg-[var(--color-green-100)] text-[var(--color-green-700)]",
  brass:   "bg-[var(--color-brass-light)]/30 text-[var(--color-brass-ink)]",
};

export function Badge({ variant = "default", className = "", children, ...props }: Props) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium font-sans tracking-wide ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
