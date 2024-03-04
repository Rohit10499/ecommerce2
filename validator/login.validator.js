import { z } from "zod";

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalide email Adderss or password" }),
  password: z
    .string({ required_error: "password must be required" })
    .min(7, { message: "Password must br at  least 7 characters" }),
});

export default loginSchema;
