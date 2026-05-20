const weeks = [
  {
    week: "Semana 1",
    days: "dias 1–7",
    title: "Mapeamento + PDV",
    desc: "Mapeamento da operação e PDV com cardápio sob medida.",
  },
  {
    week: "Semana 2",
    days: "dias 8–14",
    title: "Totem em tablet",
    desc: "Autoatendimento na loja com fluxo de coleta de pedidos.",
  },
  {
    week: "Semana 3",
    days: "dias 15–21",
    title: "App + integrações",
    desc: "App da equipe e integração Cayena, rota e Active Entregas.",
  },
  {
    week: "Semana 4",
    days: "dias 22–30",
    title: "Go-live",
    desc: "Testes com a equipe, ajustes finos, treinamento e entrada em produção.",
  },
];

export function Timeline() {
  return (
    <section id="implantacao" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">Próximo passo</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-cream sm:text-4xl">
            Implantação em 30 dias
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {weeks.map((w, i) => (
            <div
              key={w.week}
              className="relative rounded-2xl border border-white/8 bg-charcoal-card p-6"
            >
              <span className="font-display text-4xl font-bold text-white/5">{i + 1}</span>
              <p className="mt-2 text-xs font-medium uppercase tracking-wider text-gold">
                {w.week} · {w.days}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold text-cream">{w.title}</h3>
              <p className="mt-2 text-sm text-muted">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
