const pillars = [
  {
    title: "Sob medida",
    desc: "Cada módulo nasce da sua necessidade — categorias, combos e regras da Ligeirinho.",
  },
  {
    title: "Integração",
    desc: "Cayena, Active e WhatsApp em um hub — do pedido marketplace à rota do motorista.",
  },
  {
    title: "Escalável",
    desc: "Cresce com a frota e novas lojas sem trocar de sistema a cada expansão.",
  },
  {
    title: "Eficiência",
    desc: "Menos retrabalho, mais controle — um pedido, um ID, do PDV à entrega.",
  },
];

export function Nexus() {
  return (
    <section className="border-y border-white/5 bg-charcoal-light py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">Quem desenvolve</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-cream sm:text-4xl">
              NEXUS Technology Systems
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Inteligência artificial · Automação · Sistemas · Integração. A NEXUS já começou pela
              logística na Ligeirinho. Agora entregamos a frente completa: PDV, totem e app da equipe.
            </p>
            <blockquote className="mt-8 border-l-2 border-gold pl-5 text-cream italic">
              &ldquo;Seu sistema não deve se adaptar ao negócio. O sistema deve ser feito para ele.&rdquo;
              <footer className="mt-2 text-sm not-italic text-muted">— NEXUS</footer>
            </blockquote>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-white/8 bg-charcoal-card p-5 transition hover:border-gold/25"
              >
                <h3 className="font-display font-semibold text-gold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
