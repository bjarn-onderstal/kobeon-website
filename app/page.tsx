import Hero from "@/components/sections/Hero";
import LogoStrip from "@/components/sections/LogoStrip";
import WatWeBouwen from "@/components/sections/WatWeBouwen";
import Solutions from "@/components/sections/Solutions";
import Stats from "@/components/sections/Stats";
import DienstenBento from "@/components/sections/DienstenBento";
import MendixVoordeel from "@/components/sections/MendixVoordeel";
import ModellenDataCloud from "@/components/sections/ModellenDataCloud";
import Projecten from "@/components/sections/Projecten";
import Onderzoek from "@/components/sections/Onderzoek";
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
      <DienstenBento />
      <MendixVoordeel />
      <ModellenDataCloud />
      <Projecten />
      <Onderzoek />
      <Faq />
      <FinalCta />
    </>
  );
}
