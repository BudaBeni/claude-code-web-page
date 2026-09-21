import { BadgeCheck, Building2, LineChart } from "lucide-react";

const pillars = [
  { icon: Building2, label: "Nagyvállalati tapasztalat" },
  { icon: BadgeCheck, label: "100% Pénzvisszafizetési garancia" },
  { icon: LineChart, label: "Adatvezérelt teljesítmény" },
] as const;

export function TrustBanner() {
  return (
    <section
      aria-label="Bizalmi pillérek"
      className="border-y border-line bg-panel/40 px-4 py-8 md:px-6"
    >
      <ul className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-6 text-sm text-mute sm:flex-row sm:gap-10">
        {pillars.map(({ icon: Icon, label }) => (
          <li key={label} className="flex items-center gap-2">
            <Icon className="size-4 text-signal" aria-hidden />
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
