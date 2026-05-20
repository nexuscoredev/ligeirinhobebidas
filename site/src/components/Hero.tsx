export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, color-mix(in srgb, var(--color-gold) 25%, transparent), transparent)",
        }}
      />
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-gold/8 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gold">
          Desenvolvido por NEXUS · SUA MARCA · SEU SISTEMA
        </p>

        <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-cream sm:text-6xl lg:text-7xl">
          O sistema da adega
          <br />
          <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
            com a cara da Ligeirinho
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          PDV · Totem · App · Entregas — um hub integrado. Não é pacote genérico de
          prateleira: é feito para o seu processo, do caixa ao motorista.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 font-semibold text-charcoal transition hover:bg-gold-light"
          >
            Quero conhecer o Hub
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#modulos"
            className="inline-flex items-center rounded-full border border-white/15 px-8 py-3.5 text-sm font-medium text-cream transition hover:border-gold/40 hover:text-gold"
          >
            Ver módulos
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-4 border-t border-white/10 pt-10 sm:gap-8">
          {[
            { value: "100%", label: "sob medida" },
            { value: "1", label: "hub integrado" },
            { value: "0", label: "adaptação forçada" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl font-bold text-gold sm:text-4xl">{stat.value}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
