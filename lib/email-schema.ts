import { z } from "zod";

export const emailFormSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Adj meg egy érvényes email címet.")
    .email("Adj meg egy érvényes email címet."),
});

export type EmailFormValues = z.infer<typeof emailFormSchema>;
