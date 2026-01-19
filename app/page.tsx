import Image from "next/image";
import HeroSection from "./components/Hero";
import ScrollVelocity from "./components/ScrollVelocity";

export default function Home() {
  return (
    <div>
    <HeroSection/>
    
    <ScrollVelocity
  texts={['ABOUT . ABOUT . ABOUT . ABOUT .', 'ABOUT . ABOUT . ABOUT . ABOUT . ABOUT']} 
  velocity={100}
  className="custom-scroll-text"
/>
</div>
  );
}
