import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: Variant;
  size?: Size;
}

type ButtonProps = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type LinkProps = ButtonBaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type Props = ButtonProps | LinkProps;

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-[var(--color-green-900)] text-white hover:bg-[var(--color-green-800)] shadow-sm",
  secondary:
    "border border-[var(--color-green-900)] text-[var(--color-green-900)] hover:bg-[var(--color-green-100)]",
  ghost:
    "text-[var(--color-brass-ink)] hover:text-[var(--color-green-900)] underline underline-offset-4",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const base =
  "inline-flex items-center justify-center gap-2 font-sans font-medium rounded-[var(--radius-pill)] transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-brass-ink)] focus-visible:outline-offset-3 disabled:opacity-50 disabled:cursor-not-allowed";

export function Button({ variant = "primary", size = "md", ...props }: Props) {
  const classes = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${(props as ButtonBaseProps & { className?: string }).className ?? ""}`;

  if ("href" in props && props.href) {
    const { href, variant: _v, size: _s, className: _c, ...rest } = props as LinkProps;
    return (
      <Link href={href} className={classes} {...rest} />
    );
  }

  const { variant: _v, size: _s, className: _c, ...rest } = props as ButtonProps;
  return <button className={classes} {...rest} />;
}
