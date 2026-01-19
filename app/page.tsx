import Image from "next/image";
import HeroSection from "./components/Hero";
import ScrollVelocity from "./components/ScrollVelocity";
import ScrollReveal from "./components/ScrollReveal";
import BrandVisible from "./components/BrandVisible";
import { ReactLenis } from 'lenis/react';

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
      </div>
    </ReactLenis>
  );
}
