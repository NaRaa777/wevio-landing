import { Marquee } from "@/components/ui/Marquee";
import { Hero } from "@/components/home/Hero";
import { ServicesTeaser } from "@/components/home/ServicesTeaser";
import { Stats } from "@/components/home/Stats";
import { Testimonials } from "@/components/home/Testimonials";
import { CtaStrip } from "@/components/home/CtaStrip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <ServicesTeaser />
      <Stats />
      <Testimonials />
      <CtaStrip />
    </>
  );
}
