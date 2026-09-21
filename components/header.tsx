"use client";

import { startTransition, useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 24;
      startTransition(() => setScrolled(next));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-line/80 bg-ink/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 md:px-6">
        <a
          href="#top"
          className="shrink-0 font-sans text-sm font-bold tracking-[-0.04em] text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal sm:text-base"
        >
          Automation<span className="text-signal-ink"> Agency</span>
        </a>
        <a
          href="#demo"
          className="inline-flex items-center justify-center rounded-lg bg-signal px-3 py-2 text-xs font-semibold text-ink shadow-[0_0_0_1px_var(--signal-glow)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_var(--signal-glow)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal sm:px-4 sm:text-sm"
        >
          Ingyenes Demo Foglalása
        </a>
      </div>
    </header>
  );
}
