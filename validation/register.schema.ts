import { z as Zod } from "zod";

export const RegisterSchema = Zod.object({
  name: Zod.string().min(1, "Name is required"),
  email: Zod.string().min(1, "Email is required").email("Enter a valid email"),
  password: Zod.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: Zod.string().min(6, "Please confirm your password"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export type RegisterFormData = Zod.infer<typeof RegisterSchema>;
