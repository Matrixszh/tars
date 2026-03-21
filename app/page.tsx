import Image from "next/image";
import HeroSection from "./components/Hero";
import ScrollVelocity from "./components/ScrollVelocity";
import ScrollReveal from "./components/ScrollReveal";
import BrandVisible from "./components/BrandVisible";
import FlipCardSection from "./components/FlipCardSection";
import StatsSection from "./components/StatsSection";
import { ReactLenis } from 'lenis/react';
import HorizontalScroll from "./components/HorizontalScroll";
import Testimonials from "./components/Testimonials";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogImage,
  DialogClose,
  DialogDescription,
  DialogContainer,
} from '@/components/linear-modal';
import { Plus, Paintbrush, Globe, MousePointer2, Layout, Target, Code, Megaphone } from 'lucide-react';

import LogoLoop from './components/LogoLoop';
import Footer from './components/Footer';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import ButtonCreativeRight from "./components/ButtonFancy";
const preview = {
  PM: { src: "/gt.png" },
  WD: { src: "/webdev.png" },
  CD: { src: "/creaetivedesign.png" },
  scrollReveal: { src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80" }
};

const items = [
  {
    id: 1,
    url: preview.PM,
    title: "Performance Marketing",
    Icon: Target,
    description:
      "Capture intent when it matters most. We architect high-performance Google Ads campaigns that channel high-intent traffic. From keyword strategy to conversion tracking, every click is an investment in your bottom line.",
    tags: ["Google Ads", "SEM", "Conversion", "ROI"],
  },
  {
    id: 2,
    url: preview.WD,
    title: "Webdev",
    Icon: Code,
    description: `Digital experiences engineered for conversion. We don't just build websites; we develop fast, scalable, and intuitive web applications. Our focus is on seamless user journeys that transform casual browsers into brand advocates.`,
    tags: ["React", "Next.js", "UX/UI", "Scalable"],
  },
  {
    id: 3,
    url: preview.CD,
    title: "Creative Design",
    Icon: Paintbrush,
    description: `Aesthetics with an appetite for results. From foundational branding to high-impact ad visuals, we bridge the gap between art and commerce. We create bold, cohesive designs that demand attention and reinforce your brand’s authority.`,
    tags: ["Branding", "Visual Identity", "Art Direction", "Design"],
  },
];



// Alternative with image sources
const imageLogos = [
  { src: "/LC.png", alt: "Company 1" },
  { src: "/LC1.png", alt: "Company 2" },
  { src: "/LC3.png", alt: "Company 3" },
  { src: "/LC4.png", alt: "Company 1" },
  { src: "/mmlogo.png", alt: "Company 2" },
  { src: "/LC6.png", alt: "Company 3" },
  { src: "/LC7.png", alt: "Company 2" },
  { src: "/LC8.png", alt: "Company 3" },
  { src: "/LC9.jpeg", alt: "Company 3" },
];

export default function Home() {
  return (
    <ReactLenis root>
      <div>
        <HeroSection
          buttonHref="/services"
        />
        
        <ScrollVelocity
          texts={['ABOUT . ABOUT . ABOUT . ABOUT .', 'ABOUT . ABOUT . ABOUT . ABOUT . ABOUT']} 
          velocity={10}
          className="custom-scroll-text"
        />
        <BrandVisible 
          buttonLabel="About"
          buttonHref="/about"
          buttonBgColor="#1c3e8d"
          buttonTextColor="#ffffff"
          buttonCircleColor="#000000"
        />
        <FlipCardSection />
        <ScrollVelocity
          texts={['STATS . STATS . STATS . STATS .', 'STATS . STATS . STATS . STATS . STATS']} 
          velocity={10}
          className="custom-scroll-text bg-[#D91F26]"
        />
        <StatsSection />
        <HorizontalScroll/>
        <ScrollVelocity
          texts={['SERVICES . SERVICES . SERVICES . SERVICES .', 'SERVICES . SERVICES . SERVICES . SERVICES . SERVICES .']} 
          velocity={10}
          className="custom-scroll-text bg-[#1c1c1c]"
        />
      </div>
      <div className='bg-[#f3f1eb] py-20 px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-full mx-auto'>
          <div className='md:col-span-3 flex items-center justify-center p-8 mb-8'>
             <h2 className='text-5xl md:text-7xl font-bold text-[#1c1c1c] uppercase tracking-tighter text-center leading-tight'>
                Know the tools<br/>win the game
             </h2>
          </div>
          {items.map((item) => (
            <div key={item.id} className="flex flex-col gap-6 group">
              <div className="relative aspect-square w-full overflow-hidden bg-[#1c1c1c]">
                <div className="absolute inset-0 bg-gray-500/20 z-10 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-0" />
                <Image
                  src={item.url.src}
                  alt={item.title}
                  fill
                  className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1c1c1c] uppercase tracking-tight text-center">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
           <ButtonCreativeRight label="Services" href="/services" />
        </div>
      </div>
      <ScrollVelocity
          texts={['TESTIMONIALS . TESTIMONIALS . TESTIMONIALS . TESTIMONIALS .', 'TESTIMONIALS . TESTIMONIALS . TESTIMONIALS . TESTIMONIALS . TESTIMONIALS']} 
          velocity={10}
          className="custom-scroll-text"
        />
      <Testimonials />
       <div style={{ height: '100px', position: 'relative', overflow: 'hidden', backgroundColor: '#f2efe9'}}>
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={imageLogos}
        speed={100}
        direction="left"
        logoHeight={60}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#f2efe9"
        ariaLabel="Technology partners"
      />
    </div>
    <Footer />
    </ReactLenis>
  );
}
