/** Reexportar enums do client Prisma quando apps consumirem @ligeirinho/database */
export const ORDER_STATUSES = [
  "NOVO",
  "EM_PREPARACAO",
  "EM_ROTA",
  "CONCLUIDO",
  "CANCELADO",
] as const;

export const ORDER_CHANNELS = ["PDV", "TOTEM", "APP", "CAYENA", "WHATSAPP"] as const;

export type OrderStatus = (typeof ORDER_STATUSES)[number];
export type OrderChannel = (typeof ORDER_CHANNELS)[number];
