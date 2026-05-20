const generic = [
  "Cayena / marketplaces — canal B2B, não é PDV da sua loja",
  "Anota AI / cardápio — só delivery; loja offline, outro app",
  "PDV genérico — você muda o processo para caber no software",
  "Totem engessado — layout fixo, sem identidade da marca",
  "5 ferramentas — WhatsApp + planilha + 3 sistemas desconectados",
];

const hub = [
  "Feito para a Ligeirinho — categorias, combos e regras suas",
  "PDV + Totem + App — mesma base, um pedido, um ID",
  "Tablet nativo — totem no navegador, atualiza remoto",
  "Integração real — Cayena → rota → Active (já rodando)",
  "Evolui com você — pediu módulo novo? A gente constrói",
];

export function Comparison() {
  return (
    <section id="comparativo" className="bg-charcoal-light py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">Comparativo</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-cream sm:text-4xl">
            Prateleira vs NEXUS
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Sistema genérico na sua adega é como pato em cinco lagoas — não anda direito em nenhum.
            O Hub foi desenhado para o seu rio.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/8 bg-charcoal p-6 sm:p-8">
            <h3 className="font-display text-lg font-semibold text-muted">Sistemas de caixinha</h3>
            <ul className="mt-6 space-y-4">
              {generic.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted">
                  <span className="mt-0.5 shrink-0 text-red-400/80" aria-hidden>
                    ✗
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/10 to-transparent p-6 sm:p-8">
            <h3 className="font-display text-lg font-semibold text-gold">Ligeirinho Hub · NEXUS</h3>
            <ul className="mt-6 space-y-4">
              {hub.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-cream">
                  <span className="mt-0.5 shrink-0 text-gold" aria-hidden>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
