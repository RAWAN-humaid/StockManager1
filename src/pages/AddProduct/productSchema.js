import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  quantity: z
    .string()
    .min(1, "Quantity is required")
    .refine((value) => Number(value) > 0, {
      message: "Quantity must be greater than 0",
    }),
  category: z.string().min(1, "Category is required"),
  description: z.string().optional(),
  image: z.any().refine((value) => value !== null, {
    message: "Product image is required",
  }),
});