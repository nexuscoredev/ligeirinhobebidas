const flow = ["PDV", "Totem", "App", "NEXUS Hub", "Active Entregas"];

export function Architecture() {
  return (
    <section id="arquitetura" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">Arquitetura</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-cream sm:text-4xl">
            Um ecossistema. Flexível por design.
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Você não compra licença engessada — contrata evolução. Amanhã é segunda loja, PIX no
            totem ou relatório novo: o sistema acompanha.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto rounded-2xl border border-white/8 bg-charcoal-card p-6 sm:p-10">
          <div className="flex min-w-max items-center justify-center gap-2 sm:gap-4">
            {flow.map((step, i) => (
              <div key={step} className="flex items-center gap-2 sm:gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-xl border text-center text-xs font-semibold sm:h-16 sm:w-16 sm:text-sm ${
                      step === "NEXUS Hub"
                        ? "border-gold bg-gold/15 text-gold"
                        : "border-white/10 bg-charcoal text-cream"
                    }`}
                  >
                    {step === "NEXUS Hub" ? "Hub" : step.split(" ")[0]}
                  </div>
                  <span className="mt-2 max-w-[5rem] text-center text-[10px] text-muted sm:max-w-none sm:text-xs">
                    {step}
                  </span>
                </div>
                {i < flow.length - 1 && (
                  <svg
                    className="h-4 w-4 shrink-0 text-gold/50 sm:h-5 sm:w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
