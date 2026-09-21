import { Header } from "@/components/header";
import { About } from "@/components/sections/about";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { TrustBanner } from "@/components/sections/trust-banner";
import { ValueProps } from "@/components/sections/value-props";
import { VideoDemo } from "@/components/sections/video-demo";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBanner />
        <ValueProps />
        <VideoDemo />
        <About />
      </main>
      <Footer />
    </>
  );
}
