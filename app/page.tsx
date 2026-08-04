import Hero from "@/components/sections/Hero";
import PressMarquee from "@/components/sections/PressMarquee";
import Challenge from "@/components/sections/Challenge";
import SuccessFramework from "@/components/sections/SuccessFramework";
import Framework from "@/components/sections/Framework";
import Science from "@/components/sections/Science";
import Platform from "@/components/sections/Platform";
import Courses from "@/components/sections/Courses";
import Testimonials from "@/components/sections/Testimonials";
import Coach from "@/components/sections/Coach";
import Cta from "@/components/sections/Cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PressMarquee />
      <Challenge />
      <SuccessFramework />
      <Framework />
      <Science />
      <Platform />
      <Courses />
      <Testimonials />
      <Coach />
      <Cta />
    </>
  );
}
