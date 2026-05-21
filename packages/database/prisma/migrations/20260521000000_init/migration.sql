-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateEnum
CREATE TYPE "ComboType" AS ENUM ('FIXED_BUNDLE', 'QUANTITY_TIER', 'MIX_AND_MATCH');

-- CreateEnum
CREATE TYPE "OrderChannel" AS ENUM ('PDV', 'TOTEM', 'APP', 'CAYENA', 'WHATSAPP');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('NOVO', 'EM_PREPARACAO', 'EM_ROTA', 'CONCLUIDO', 'CANCELADO');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('DINHEIRO', 'PIX', 'CARTAO_CREDITO', 'CARTAO_DEBITO', 'OUTRO');

-- CreateTable
CREATE TABLE "categories" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "parent_id" UUID,
    "display_order" INTEGER NOT NULL DEFAULT 0,
    "icon_url" TEXT,
    "show_on_totem" BOOLEAN NOT NULL DEFAULT true,
    "show_on_pdv" BOOLEAN NOT NULL DEFAULT true,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" UUID NOT NULL,
    "sku" TEXT,
    "barcode" TEXT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "category_id" UUID NOT NULL,
    "image_url" TEXT,
    "base_price_cents" INTEGER,
    "track_stock" BOOLEAN NOT NULL DEFAULT false,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "show_on_pdv" BOOLEAN NOT NULL DEFAULT true,
    "show_on_totem" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_price_tiers" (
    "id" UUID NOT NULL,
    "product_id" UUID NOT NULL,
    "min_quantity" INTEGER NOT NULL,
    "max_quantity" INTEGER,
    "unit_price_cents" INTEGER NOT NULL,
    "label" TEXT,
    "priority" INTEGER NOT NULL DEFAULT 0,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "valid_from" TIMESTAMPTZ(3),
    "valid_until" TIMESTAMPTZ(3),
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "product_price_tiers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "combos" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "type" "ComboType" NOT NULL,
    "category_id" UUID,
    "fixed_price_cents" INTEGER,
    "image_url" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "show_on_pdv" BOOLEAN NOT NULL DEFAULT true,
    "show_on_totem" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "combos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "combo_items" (
    "id" UUID NOT NULL,
    "combo_id" UUID NOT NULL,
    "product_id" UUID NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "is_required" BOOLEAN NOT NULL DEFAULT true,
    "group_key" TEXT,
    "min_pick" INTEGER,
    "max_pick" INTEGER,
    "display_order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "combo_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "combo_price_tiers" (
    "id" UUID NOT NULL,
    "combo_id" UUID NOT NULL,
    "min_quantity" INTEGER NOT NULL,
    "max_quantity" INTEGER,
    "unit_price_cents" INTEGER,
    "total_price_cents" INTEGER,
    "label" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "combo_price_tiers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" UUID NOT NULL,
    "order_number" TEXT NOT NULL,
    "channel" "OrderChannel" NOT NULL,
    "status" "OrderStatus" NOT NULL DEFAULT 'NOVO',
    "customer_name" TEXT,
    "customer_phone" TEXT,
    "notes" TEXT,
    "subtotal_cents" INTEGER NOT NULL DEFAULT 0,
    "discount_cents" INTEGER NOT NULL DEFAULT 0,
    "total_cents" INTEGER NOT NULL DEFAULT 0,
    "assigned_to_id" UUID,
    "external_ref" TEXT,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(3) NOT NULL,
    "completed_at" TIMESTAMPTZ(3),

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_items" (
    "id" UUID NOT NULL,
    "order_id" UUID NOT NULL,
    "product_id" UUID,
    "combo_id" UUID,
    "quantity" INTEGER NOT NULL,
    "unit_price_cents" INTEGER NOT NULL,
    "line_total_cents" INTEGER NOT NULL,
    "product_name_snapshot" TEXT NOT NULL,
    "price_tier_label" TEXT,
    "pricing_rule_snapshot" JSONB,
    "display_order" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "order_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_payments" (
    "id" UUID NOT NULL,
    "order_id" UUID NOT NULL,
    "method" "PaymentMethod" NOT NULL,
    "amount_cents" INTEGER NOT NULL,
    "paid_at" TIMESTAMPTZ(3),
    "external_tx_id" TEXT,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "order_payments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "categories_slug_key" ON "categories"("slug");

-- CreateIndex
CREATE INDEX "categories_parent_id_idx" ON "categories"("parent_id");

-- CreateIndex
CREATE UNIQUE INDEX "products_sku_key" ON "products"("sku");

-- CreateIndex
CREATE UNIQUE INDEX "products_barcode_key" ON "products"("barcode");

-- CreateIndex
CREATE INDEX "products_category_id_idx" ON "products"("category_id");

-- CreateIndex
CREATE INDEX "products_name_idx" ON "products"("name");

-- CreateIndex
CREATE INDEX "product_price_tiers_product_id_min_quantity_idx" ON "product_price_tiers"("product_id", "min_quantity");

-- CreateIndex
CREATE UNIQUE INDEX "product_price_tiers_product_id_min_quantity_key" ON "product_price_tiers"("product_id", "min_quantity");

-- CreateIndex
CREATE UNIQUE INDEX "combos_slug_key" ON "combos"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "combo_items_combo_id_product_id_key" ON "combo_items"("combo_id", "product_id");

-- CreateIndex
CREATE INDEX "combo_price_tiers_combo_id_min_quantity_idx" ON "combo_price_tiers"("combo_id", "min_quantity");

-- CreateIndex
CREATE UNIQUE INDEX "orders_order_number_key" ON "orders"("order_number");

-- CreateIndex
CREATE INDEX "orders_status_created_at_idx" ON "orders"("status", "created_at");

-- CreateIndex
CREATE INDEX "orders_channel_idx" ON "orders"("channel");

-- CreateIndex
CREATE INDEX "order_items_order_id_idx" ON "order_items"("order_id");

-- CreateIndex
CREATE INDEX "order_payments_order_id_idx" ON "order_payments"("order_id");

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_price_tiers" ADD CONSTRAINT "product_price_tiers_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "combos" ADD CONSTRAINT "combos_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "combo_items" ADD CONSTRAINT "combo_items_combo_id_fkey" FOREIGN KEY ("combo_id") REFERENCES "combos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "combo_items" ADD CONSTRAINT "combo_items_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "combo_price_tiers" ADD CONSTRAINT "combo_price_tiers_combo_id_fkey" FOREIGN KEY ("combo_id") REFERENCES "combos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_combo_id_fkey" FOREIGN KEY ("combo_id") REFERENCES "combos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_payments" ADD CONSTRAINT "order_payments_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;
