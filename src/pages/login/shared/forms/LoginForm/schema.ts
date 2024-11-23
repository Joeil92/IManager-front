import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email({ message: "Veuillez entrer un email valide" }).min(1).max(255),
    password: z.string().min(1, { message: "Veuillez entrer un mot de passe" }).max(255),
});