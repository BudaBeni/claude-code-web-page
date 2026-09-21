"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { submitEmail } from "@/app/actions/submit-email";
import { emailFormSchema, type EmailFormValues } from "@/lib/email-schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function EmailForm({
  idPrefix,
  showMicrocopy = false,
}: {
  idPrefix: string;
  showMicrocopy?: boolean;
}) {
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EmailFormValues>({
    resolver: zodResolver(emailFormSchema),
    defaultValues: { email: "" },
  });

  async function onSubmit(values: EmailFormValues) {
    setServerError(null);
    const formData = new FormData();
    formData.set("email", values.email);
    const result = await submitEmail(formData);
    if (result.ok) {
      setSuccess(true);
      return;
    }
    setServerError(result.error);
  }

  if (success) {
    return (
      <p role="status" className="text-pretty text-base text-paper">
        Köszönjük! Hamarosan keresni fogunk a demó időpontjával kapcsolatban.
      </p>
    );
  }

  const inputId = `${idPrefix}-email`;
  const errorId = `${idPrefix}-email-error`;
  const error = errors.email?.message ?? serverError;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex w-full flex-col gap-3"
    >
      <div className="flex w-full flex-col gap-3 sm:flex-row">
        <div className="min-w-0 flex-1">
          <label htmlFor={inputId} className="sr-only">
            Munkahelyi email cím
          </label>
          <Input
            id={inputId}
            type="email"
            autoComplete="email"
            placeholder="Add meg a munkahelyi email címed..."
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? errorId : undefined}
            {...register("email")}
          />
        </div>
        <Button type="submit" disabled={isSubmitting} className="shrink-0">
          {isSubmitting ? (
            <>
              <span className="inline-block animate-spin" aria-hidden>
                <Loader2 className="size-4" />
              </span>
              Küldés...
            </>
          ) : (
            "Kérem az ingyenes demót"
          )}
        </Button>
      </div>
      {error ? (
        <p id={errorId} role="alert" className="text-sm text-red-400">
          {error}
        </p>
      ) : null}
      {showMicrocopy ? (
        <p className="text-sm text-mute">
          Villámgyors bevezetés. 100% Pénzvisszafizetési garanciával.
        </p>
      ) : null}
    </form>
  );
}
