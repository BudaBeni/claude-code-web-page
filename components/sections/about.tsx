import Image from "next/image";

export function About() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className="relative mx-auto w-full max-w-md md:max-w-none">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-panel">
            <Image
              src="/beni-1.jpg"
              alt="Buda Benedek"
              fill
              sizes="(max-width: 768px) 100vw, 32rem"
              className="object-cover object-[center_28%]"
            />
          </div>
          <div className="relative mt-4 h-40 w-32 overflow-hidden rounded-2xl border border-line shadow-xl md:absolute md:-bottom-8 md:right-6 md:mt-0 md:h-52 md:w-40">
            <Image
              src="/beni-2.jpg"
              alt="Buda Benedek, portré"
              fill
              sizes="160px"
              className="object-cover object-[center_15%]"
            />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-paper md:text-4xl">
            Őszinte AI Tanácsadás.
          </h2>
          <p className="mt-5 max-w-[52ch] text-pretty text-base text-mute">
            Szia, Buda Benedek vagyok. A filozófiám egyszerű: nem erőltetünk
            semmit. Csak akkor építünk automatizációt, ha annak vitathatatlan
            pénzügyi értelme van a vállalkozásod számára. A gyors bevezetéstől a
            folyamatos ügyfélszolgálatig partnerek vagyunk a hatékony
            skálázódásban.
          </p>
          <a
            href="mailto:buda.benedek2@gmail.com"
            className="mt-8 inline-flex items-center justify-center rounded-lg border border-line px-5 py-3 text-sm font-semibold text-paper transition duration-200 hover:-translate-y-0.5 hover:border-signal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
          >
            Írj nekem közvetlenül
          </a>
        </div>
      </div>
    </section>
  );
}
