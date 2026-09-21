import { Sparkles, Unplug, UserCheck } from "lucide-react";

const cards = [
  {
    icon: Unplug,
    title: "Nincs technikai teher",
    body: "Mi kezeljük az API kulcsokat, a modellfrissítéseket és a rendszer karbantartását. Nem kell kódolni tanulnod – csak élvezd az eredményeket.",
  },
  {
    icon: UserCheck,
    title: "Garantált minőség (Human-in-the-loop)",
    body: "Az AI sebessége emberi felügyelettel párosítva. Manuális jóváhagyási lépéseket építünk a folyamataidba, hogy minden alkalommal garantáljuk a kiváló minőséget.",
  },
  {
    icon: Sparkles,
    title: "Motivált kollégák",
    body: "Szüntesd meg a lélekölő adatrögzítést. Tartsd motiváltan a csapatod azáltal, hogy magas hozzáadott értékű, kreatív munkára fókuszálhatnak.",
  },
] as const;

export function ValueProps() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-[24ch] text-balance text-3xl font-semibold tracking-[-0.03em] text-paper md:text-4xl">
          Maximális ROI. Technikai fejfájás nélkül.
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {cards.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="rounded-2xl border border-line bg-panel p-6 transition duration-200 hover:-translate-y-1 hover:border-signal"
            >
              <Icon className="size-6 text-signal" aria-hidden />
              <h3 className="mt-4 text-balance text-lg font-semibold tracking-tight text-paper">
                {title}
              </h3>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-mute">
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
