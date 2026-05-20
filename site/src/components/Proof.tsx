const items = [
  {
    title: "Automação Gmail",
    desc: "Pedidos Cayena → planilha central sem digitar.",
  },
  {
    title: "Roteirização IA",
    desc: "Status sincronizados · trava anti-duplicidade.",
  },
  {
    title: "Active Entregas",
    desc: "Importação diária automática para motoristas.",
  },
];

export function Proof() {
  return (
    <section id="prova-real" className="border-y border-white/5 bg-charcoal-light py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">Prova real</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-cream sm:text-4xl">
              Já está rodando na Ligeirinho
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted">
            Isso é NEXUS na prática — não slide de vendedor. A logística já opera; a frente de loja
            é o próximo passo natural.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="relative rounded-2xl border border-gold/20 bg-charcoal p-6"
            >
              <span className="absolute top-4 right-4 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
              <h3 className="font-display text-lg font-semibold text-cream">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
