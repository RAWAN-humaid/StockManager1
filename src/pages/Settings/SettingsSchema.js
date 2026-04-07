import { z } from "zod";

export const settingsSchema = z
  .object({
    fullName: z.string().min(2, "Full name is too short"),
    email: z.string().email("Invalid email"),
    phone: z.string().min(8, "Phone number is too short"),
    city: z.string().min(2, "City is too short"),
    country: z.string().min(2, "Country is too short"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });