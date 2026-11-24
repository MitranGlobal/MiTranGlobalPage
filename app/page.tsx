import Hero from "@/components/sections/Hero";
import PressMarquee from "@/components/sections/PressMarquee";
import Challenge from "@/components/sections/Challenge";
import SuccessFramework from "@/components/sections/SuccessFramework";
import Framework from "@/components/sections/Framework";
import Platform from "@/components/sections/Platform";
import Cta from "@/components/sections/Cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PressMarquee />
      <Challenge />
      <SuccessFramework />
      <Framework />
      <Platform />
      <Cta />
    </>
  );
}
