import { z } from "zod";

export const productsSchema = z.array(
  z.object({
    id: z.string(),
    name: z.string(),
    category: z.string(),
    quantity: z.number(),
    status: z.string(),
  })
);