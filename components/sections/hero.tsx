import { EmailForm } from "@/components/email-form";

export function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-[80vh] items-center px-4 py-16 md:px-6 md:py-24"
    >
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <h1 className="max-w-[22ch] text-balance text-4xl font-semibold tracking-[-0.04em] text-paper sm:text-5xl md:text-6xl">
          Automatizáld a monoton feladatokat. Skálázd a profitod új munkaerő nélkül.
        </h1>
        <p className="mt-6 max-w-[62ch] text-pretty text-base text-mute md:text-lg">
          Készítsd fel vállalkozásod az AI-robbanásra. Olyan rendszer alapú,
          skálázható automatizációkat építünk, amelyek az idő töredéke alatt
          szabadítják meg csapatod a repetitív feladatoktól. Technikai tudás
          nélkül.
        </p>
        <div id="demo" className="mt-10 w-full max-w-xl scroll-mt-28">
          <EmailForm idPrefix="hero" showMicrocopy />
        </div>
      </div>
    </section>
  );
}
