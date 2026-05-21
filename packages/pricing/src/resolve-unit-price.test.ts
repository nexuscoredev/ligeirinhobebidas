import assert from "node:assert/strict";
import { test } from "node:test";
import { lineTotalCents, resolveUnitPrice } from "./index.js";

const tiers = [
  { minQuantity: 1, maxQuantity: 2, unitPriceCents: 750, label: "Varejo", priority: 0 },
  { minQuantity: 3, maxQuantity: null, unitPriceCents: 450, label: "Atacado 3+", priority: 10 },
];

test("1 unidade usa faixa varejo", () => {
  const r = resolveUnitPrice(1, tiers, 750);
  assert.equal(r.unitPriceCents, 750);
  assert.equal(r.tierLabel, "Varejo");
});

test("3 unidades usa faixa atacado", () => {
  const r = resolveUnitPrice(3, tiers, 750);
  assert.equal(r.unitPriceCents, 450);
  assert.equal(r.tierLabel, "Atacado 3+");
});

test("line total", () => {
  assert.equal(lineTotalCents(450, 3), 1350);
});
