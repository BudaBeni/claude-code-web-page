import type { InputHTMLAttributes } from "react";

export function Input({
  className = "",
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`w-full rounded-lg border border-line bg-panel px-4 py-3 text-sm text-paper placeholder:text-mute/70 transition focus:border-signal focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal ${className}`}
      {...props}
    />
  );
}
