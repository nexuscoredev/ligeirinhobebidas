/**
 * Resolve preço unitário por quantidade a partir de faixas (tiers).
 * Exemplo Ligeirinho: 1–2 un @ R$ 7,50; 3+ un @ R$ 4,50/un.
 */

export type PriceTier = {
  minQuantity: number;
  maxQuantity: number | null;
  unitPriceCents: number;
  label?: string | null;
  priority?: number;
  active?: boolean;
};

export type ResolvedUnitPrice = {
  unitPriceCents: number;
  tierLabel: string | null;
  tierMinQuantity: number | null;
};

export function resolveUnitPrice(
  quantity: number,
  tiers: PriceTier[],
  basePriceCents: number | null,
): ResolvedUnitPrice {
  if (quantity < 1) {
    throw new RangeError("quantity must be >= 1");
  }

  const activeTiers = tiers
    .filter((t) => t.active !== false)
    .filter(
      (t) =>
        quantity >= t.minQuantity &&
        (t.maxQuantity === null || quantity <= t.maxQuantity),
    )
    .sort((a, b) => {
      const prio = (b.priority ?? 0) - (a.priority ?? 0);
      if (prio !== 0) return prio;
      return b.minQuantity - a.minQuantity;
    });

  const match = activeTiers[0];
  if (match) {
    return {
      unitPriceCents: match.unitPriceCents,
      tierLabel: match.label ?? null,
      tierMinQuantity: match.minQuantity,
    };
  }

  if (basePriceCents == null) {
    throw new Error("Nenhuma faixa de preço aplicável e base_price_cents ausente");
  }

  return {
    unitPriceCents: basePriceCents,
    tierLabel: null,
    tierMinQuantity: null,
  };
}

export function lineTotalCents(unitPriceCents: number, quantity: number): number {
  return unitPriceCents * quantity;
}
