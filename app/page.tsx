import AboutUs from "@/components/AboutUs";
import AutomotiveSection from "@/components/AutomotiveSection";
import CarBrandLogos from "@/components/CarBrandLogos";
import Certification from "@/components/Certification";
import ContactForm from "@/components/ContactForm";
import ContactTeam from "@/components/ContactTeam";
import Hero from "@/components/Hero";
import KeepingSafe from "@/components/KeepingSafe";
import ReadyToTalk from "@/components/ReadyToTalk";
import Slider from "@/components/Slider";
import WhatWeCanDo from "@/components/WhatWeCanDo";
import WhatWeDo from "@/components/WhatWeDo";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-8 ">
      <Hero />
      <div className="max-w-[1536px] mx-auto px-10">
        <WhatWeDo />
        <WhyUs />
        <Slider />
        <Certification />
        <ContactForm />
        <AutomotiveSection />
        <AboutUs />
        <ContactTeam />
        <WhatWeCanDo />
        <KeepingSafe />
        <CarBrandLogos />
        <ReadyToTalk />
      </div>
    </main>
  );
}
