import { useState } from "react";

const links = [
  { href: "#modulos", label: "Módulos" },
  { href: "#comparativo", label: "Comparativo" },
  { href: "#arquitetura", label: "Arquitetura" },
  { href: "#prova-real", label: "Prova real" },
  { href: "#implantacao", label: "Implantação" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-charcoal/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold/15 font-display text-sm font-bold text-gold">
            LH
          </span>
          <div className="text-left leading-tight">
            <span className="font-display text-sm font-semibold tracking-wide text-cream">
              Ligeirinho Hub
            </span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-muted">
              NEXUS
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-charcoal transition hover:bg-gold-light"
          >
            Falar com a NEXUS
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className="sr-only">Menu</span>
          <svg className="h-5 w-5 text-cream" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/5 bg-charcoal-light px-5 py-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-2.5 text-sm text-muted hover:text-gold"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            className="mt-2 block rounded-full bg-gold py-3 text-center text-sm font-semibold text-charcoal"
            onClick={() => setOpen(false)}
          >
            Falar com a NEXUS
          </a>
        </nav>
      )}
    </header>
  );
}
