import { z } from "zod";

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at lest of 3 chars." })
    .max(255, { message: "Name must not be more than 255 characters" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalide email Adderss" })
    .min(3, { message: "email must be at lest of 3 chars." })
    .max(255, { message: "email must not be more than 255 characters" }),
  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be at least of 10 characters" })
    .max(20, { message: "Phone must not be more than 20 characters" }),
  password: z
    .string({ required_error: "password must be required" })
    .min(7, { message: "Password must br at  least 6 characters" })
    .max(1024, { message: "Passwor can't be greater than 1024 characters" }),
});

export default signupSchema;
