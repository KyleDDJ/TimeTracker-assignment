import { z as Zod } from "zod";

export const LoginSchema = Zod.object({
  email: Zod.string().min(1, "Email is required").email("Enter a valid email"),
  password: Zod.string().min(6, "Password must be at least 6 characters"),
});

export type LoginFormData = Zod.infer<typeof LoginSchema>;
