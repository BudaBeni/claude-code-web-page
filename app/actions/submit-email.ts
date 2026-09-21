"use server";

import { emailFormSchema } from "@/lib/email-schema";

export type SubmitEmailResult =
  | { ok: true }
  | { ok: false; error: string };

export async function submitEmail(formData: FormData): Promise<SubmitEmailResult> {
  const parsed = emailFormSchema.safeParse({
    email: formData.get("email"),
  });

  if (!parsed.success) {
    return {
      ok: false,
      error: parsed.error.issues[0]?.message ?? "Adj meg egy érvényes email címet.",
    };
  }

  await new Promise((resolve) => setTimeout(resolve, 400));
  console.info("[demo-lead]", parsed.data.email);

  return { ok: true };
}
