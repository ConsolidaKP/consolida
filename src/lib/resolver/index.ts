import * as z from "zod";

export const LogInSchema = z.object({
  email: z.string().email("Dirección de correo electrónico inválida."),
  password: z.string().min(1, "La contraseña no puede estar vacía."),
});
