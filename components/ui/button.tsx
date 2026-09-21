import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary";

const variants: Record<Variant, string> = {
  primary:
    "bg-signal text-ink shadow-[0_0_0_1px_var(--signal-glow)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_var(--signal-glow)]",
  secondary:
    "border border-line bg-transparent text-paper hover:-translate-y-0.5 hover:border-signal",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold tracking-tight transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal disabled:pointer-events-none disabled:opacity-60 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
