import Image from "next/image";
import HeroSection from "./components/Hero";
import ScrollVelocity from "./components/ScrollVelocity";
import ScrollReveal from "./components/ScrollReveal";
import BrandVisible from "./components/BrandVisible";
import FlipCardSection from "./components/FlipCardSection";
import StatsSection from "./components/StatsSection";
import { ReactLenis } from 'lenis/react';
import HorizontalScroll from "./components/HorizontalScroll";

export default function Home() {
  return (
    <ReactLenis root>
      <div>
        <HeroSection/>
        
        <ScrollVelocity
          texts={['ABOUT . ABOUT . ABOUT . ABOUT .', 'ABOUT . ABOUT . ABOUT . ABOUT . ABOUT']} 
          velocity={100}
          className="custom-scroll-text"
        />
        <BrandVisible />
        <FlipCardSection />
        <StatsSection />
        <HorizontalScroll/>
        <ScrollVelocity
          texts={['SERVICES . SERVICES . SERVICES . SERVICES .', 'SERVICES . SERVICES . SERVICES . SERVICES . SERVICES']} 
          velocity={100}
          className="custom-scroll-text bg-[#1c1c1c]"
        />
      </div>
    </ReactLenis>
  );
}
