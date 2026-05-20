const modules = [
  {
    id: "pdv",
    name: "Ligeirinho PDV",
    tag: "Módulo · PDV",
    desc: "Caixa e controle na loja. Cardápio, combos e regras da marca — sem mudar o processo para caber no software.",
    features: ["Vendas no balcão", "Controle de estoque", "Relatórios da loja"],
  },
  {
    id: "totem",
    name: "Ligeirinho Totem",
    tag: "Módulo · Totem",
    desc: "Autoatendimento em tablet nativo no navegador. Layout seu, atualização remota — sem totem engessado de prateleira.",
    features: ["Tablet na loja", "Só coletar pedido", "Atualização remota"],
  },
  {
    id: "app",
    name: "Ligeirinho Operacional",
    tag: "Módulo · App",
    desc: "App da equipe para receber e despachar pedidos. Mesma base do PDV e do totem — um pedido, um ID.",
    features: ["Fila de pedidos", "Despacho rápido", "Status em tempo real"],
  },
  {
    id: "entregas",
    name: "Active Entregas",
    tag: "Módulo · Logística",
    desc: "Fluxo Cayena + frota: do pedido marketplace ao motorista. Roteirização e importação já rodando na operação.",
    features: ["Integração Cayena", "Roteirização IA", "Sync com motoristas"],
  },
];

export function Modules() {
  return (
    <section id="modulos" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">O que você pediu</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-cream sm:text-4xl">
            Troca do sistema da loja. Sem improviso.
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            PDV na loja, totem para autoatendimento, app da equipe e entregas integradas — tudo
            conversando no mesmo hub.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {modules.map((m, i) => (
            <article
              key={m.id}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-charcoal-card p-6 sm:p-8"
            >
              <span className="text-xs font-medium uppercase tracking-wider text-gold/80">{m.tag}</span>
              <h3 className="mt-2 font-display text-2xl font-bold text-cream">{m.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{m.desc}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {m.features.map((f) => (
                  <li
                    key={f}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs text-cream/90"
                  >
                    {f}
                  </li>
                ))}
              </ul>
              <span
                className="pointer-events-none absolute -right-4 -bottom-4 font-display text-8xl font-bold text-white/[0.03] transition group-hover:text-gold/[0.06]"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
