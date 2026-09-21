import { Header } from "@/components/header";
import { About } from "@/components/sections/about";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { TrustBanner } from "@/components/sections/trust-banner";
import { ValueProps } from "@/components/sections/value-props";
import { VideoDemo } from "@/components/sections/video-demo";
import { ShaderBackground } from "@/components/ui/static-mesh-gradient-sea";

export default function Home() {
  return (
    <div className="relative isolate">
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
        <ShaderBackground className="h-full w-full" />
        <div className="absolute inset-0 bg-ink/50" />
      </div>
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <TrustBanner />
          <ValueProps />
          <VideoDemo />
          <About />
        </main>
        <Footer />
      </div>
    </div>
  );
}
