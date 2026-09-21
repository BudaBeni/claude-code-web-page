"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export function VideoDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [1, 1] : [0.8, 1],
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [1, 1] : [0.7, 1],
  );

  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mx-auto max-w-[28ch] text-balance text-center text-3xl font-semibold tracking-[-0.03em] text-paper md:text-4xl">
          Nézd meg a villámgyors végrehajtást a gyakorlatban.
        </h2>
        <div ref={ref} className="mt-10">
          <motion.div style={{ scale, opacity }} className="origin-center">
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-line bg-[#10151f]">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 40%, #243056 0%, #10151f 68%)",
                }}
              />
              <div className="absolute inset-4 rounded-xl border border-line/80 bg-ink/70 p-4 shadow-inner sm:inset-8 sm:p-6">
                <div className="mb-4 flex items-center gap-1.5">
                  <span className="size-2.5 rounded-full bg-line" />
                  <span className="size-2.5 rounded-full bg-line" />
                  <span className="size-2.5 rounded-full bg-line" />
                  <span className="ml-3 text-xs text-mute">n8n · ügyfélfolyamat</span>
                </div>
                <div className="flex h-[calc(100%-2rem)] items-center justify-center gap-3 sm:gap-6">
                  <WorkflowNode label="Trigger" />
                  <span className="h-px w-8 bg-signal-ink/70 sm:w-16" aria-hidden />
                  <WorkflowNode label="AI" accent />
                  <span className="h-px w-8 bg-signal-ink/70 sm:w-16" aria-hidden />
                  <WorkflowNode label="Excel" />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="flex size-16 items-center justify-center rounded-full border border-line bg-panel/90 text-paper shadow-lg backdrop-blur-sm"
                  aria-hidden
                >
                  <span className="ml-1 block size-0 border-y-8 border-l-[14px] border-y-transparent border-l-paper" />
                </div>
              </div>
              <p className="sr-only">Demóvideó helyőrző</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WorkflowNode({
  label,
  accent = false,
}: {
  label: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-lg border px-3 py-2 text-xs font-medium sm:px-4 sm:py-3 sm:text-sm ${
        accent
          ? "border-signal bg-signal/15 text-paper"
          : "border-line bg-panel text-mute"
      }`}
    >
      {label}
    </div>
  );
}
