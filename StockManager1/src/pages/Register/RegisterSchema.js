import { z } from "zod";

export const registerSchema = z.object({
  firstName: z.string().min(2, "First name is too short"),
  lastName: z.string().min(2, "Last name is too short"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(8, "Phone number is too short"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});