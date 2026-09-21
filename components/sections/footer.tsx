import { Globe, Share2 } from "lucide-react";
import { EmailForm } from "@/components/email-form";

export function Footer() {
  return (
    <footer className="bg-panel px-4 pb-10 pt-16 md:px-6 md:pt-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] text-paper md:text-4xl">
          Készen állsz arra, hogy jövőtállóvá tedd a vállalkozásod?
        </h2>
        <p className="mt-4 text-pretty text-base text-mute">
          Kérd ingyenes demódat még ezen a héten, és szerezd meg az exkluzív,
          gyors csatlakozásért járó bónuszokat.
        </p>
        <div className="mx-auto mt-8 max-w-xl">
          <EmailForm idPrefix="footer" />
        </div>
      </div>
      <div className="mx-auto mt-16 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-line pt-6 text-sm text-mute sm:flex-row">
        <p>© 2026 Automation Agency. Minden jog fenntartva.</p>
        <nav aria-label="Lábléc" className="flex items-center gap-5">
          <a
            href="mailto:buda.benedek2@gmail.com"
            className="hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
          >
            Kapcsolat
          </a>
          <a
            href="#"
            aria-label="Social Link 1"
            className="hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
          >
            <Globe className="size-4" aria-hidden />
          </a>
          <a
            href="#"
            aria-label="Social Link 2"
            className="hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
          >
            <Share2 className="size-4" aria-hidden />
          </a>
        </nav>
      </div>
    </footer>
  );
}
