/**
 * Seed de exemplo — cardápio piloto com preço por faixa (1 un / 3+ un).
 * Executar: npm run seed -w @ligeirinho/database
 */
import { ComboType, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const cervejas = await prisma.category.upsert({
    where: { slug: "cervejas" },
    update: {},
    create: {
      name: "Cervejas",
      slug: "cervejas",
      displayOrder: 1,
      showOnTotem: true,
    },
  });

  const destilados = await prisma.category.upsert({
    where: { slug: "destilados" },
    update: {},
    create: {
      name: "Destilados",
      slug: "destilados",
      displayOrder: 2,
      showOnTotem: true,
    },
  });

  const produto = await prisma.product.upsert({
    where: { sku: "CERV-EXEMPLO-001" },
    update: {},
    create: {
      sku: "CERV-EXEMPLO-001",
      name: "Cerveja Exemplo 350ml",
      categoryId: cervejas.id,
      basePriceCents: 750,
      showOnPdv: true,
      showOnTotem: true,
    },
  });

  await prisma.productPriceTier.deleteMany({ where: { productId: produto.id } });
  await prisma.productPriceTier.createMany({
    data: [
      {
        productId: produto.id,
        minQuantity: 1,
        maxQuantity: 2,
        unitPriceCents: 750,
        label: "Varejo",
        priority: 0,
      },
      {
        productId: produto.id,
        minQuantity: 3,
        maxQuantity: null,
        unitPriceCents: 450,
        label: "Atacado 3+",
        priority: 10,
      },
    ],
  });

  const combo = await prisma.combo.upsert({
    where: { slug: "kit-churrasco-exemplo" },
    update: {},
    create: {
      name: "Kit Churrasco (exemplo)",
      slug: "kit-churrasco-exemplo",
      type: ComboType.FIXED_BUNDLE,
      categoryId: destilados.id,
      fixedPriceCents: 8990,
      showOnPdv: true,
      showOnTotem: false,
    },
  });

  await prisma.comboItem.upsert({
    where: {
      comboId_productId: { comboId: combo.id, productId: produto.id },
    },
    update: { quantity: 6 },
    create: {
      comboId: combo.id,
      productId: produto.id,
      quantity: 6,
      isRequired: true,
    },
  });

  console.log("Seed concluído:", {
    categorias: [cervejas.slug, destilados.slug],
    produto: produto.sku,
    combo: combo.slug,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
