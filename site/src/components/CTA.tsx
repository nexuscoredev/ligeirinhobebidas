export function CTA() {
  return (
    <section id="contato" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-gold/25 bg-gradient-to-br from-gold/15 via-charcoal-card to-charcoal px-6 py-14 text-center sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,184,74,0.15),transparent_60%)]" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold text-cream sm:text-4xl">
              Pronto para o Hub da sua marca?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted">
              Fale com a NEXUS e comece o mapeamento da operação. Seu sistema, do caixa à entrega.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://nexuscoredev.github.io/systems"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 font-semibold text-charcoal transition hover:bg-gold-light"
              >
                Conhecer a NEXUS
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a
                href="mailto:contato@nexuscore.dev"
                className="text-sm text-muted underline-offset-4 hover:text-gold hover:underline"
              >
                contato@nexuscore.dev
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
