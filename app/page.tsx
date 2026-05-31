import Hero from "@/components/sections/Hero";
import LogoStrip from "@/components/sections/LogoStrip";
import WatWeBouwen from "@/components/sections/WatWeBouwen";
import Solutions from "@/components/sections/Solutions";
import Stats from "@/components/sections/Stats";
import Faq from "@/components/sections/Faq";
import FinalCta from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <WatWeBouwen />
      <Solutions />
      <Stats />
      <Faq />
      <FinalCta />
    </>
  );
}
