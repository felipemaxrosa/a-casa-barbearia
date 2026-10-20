"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui";
import { APPBARBER_URL } from "@/lib/constants";

const navLinks = [
  { href: "/servicos",  label: "Serviços" },
  { href: "/equipa",    label: "Equipa" },
  { href: "/contactos", label: "Contactos" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 bg-[var(--color-cream)]/95 backdrop-blur-sm border-b border-[var(--color-line)]"
      style={{ boxShadow: "0 1px 8px rgba(40,30,15,0.05)" }}
    >
      <div className="container-site">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="A Casa Barbearia — Início">
            <Image
              src="/images/logo.png"
              alt="A Casa Barbearia"
              width={48}
              height={48}
              className="h-10 w-auto md:h-12"
              priority
            />
            <span className="font-display font-semibold text-lg text-[var(--color-green-900)] hidden sm:block">
              A Casa
            </span>
          </Link>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Navegação principal">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-sans text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-green-900)] transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA desktop */}
          <div className="hidden md:block">
            <Button
              href={APPBARBER_URL}
              size="sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Marcar corte
            </Button>
          </div>

          {/* Menu mobile */}
          <button
            className="md:hidden p-2 text-[var(--color-ink)] rounded-md focus-visible:outline-2"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            <span className="block w-5 h-0.5 bg-current mb-1 transition-transform" style={{ transform: open ? "rotate(45deg) translate(2px, 6px)" : undefined }} />
            <span className="block w-5 h-0.5 bg-current mb-1 transition-opacity" style={{ opacity: open ? 0 : 1 }} />
            <span className="block w-5 h-0.5 bg-current transition-transform" style={{ transform: open ? "rotate(-45deg) translate(2px, -6px)" : undefined }} />
          </button>
        </div>

        {/* Nav mobile */}
        {open && (
          <nav
            className="md:hidden py-4 border-t border-[var(--color-line)] flex flex-col gap-3"
            aria-label="Navegação mobile"
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-sans text-base font-medium text-[var(--color-ink)] py-2 hover:text-[var(--color-green-700)] transition-colors"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Button
              href={APPBARBER_URL}
              size="md"
              className="mt-2 w-full justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Marcar corte
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
