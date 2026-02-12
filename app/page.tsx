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
  galleryNew: { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80" },
  globe: { src: "/globe.svg" },
  mousetrail: { src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80" },
  scrollReveal: { src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80" }
};

const items = [
  {
    id: 1,
    url: preview.scrollReveal,
    title: "PPC (Google Ads)",
    Icon: Target,
    description:
      "Capture intent when it matters most. We architect high-performance Google Ads campaigns that channel high-intent traffic. From keyword strategy to conversion tracking, every click is an investment in your bottom line.",
    tags: ["Google Ads", "SEM", "Conversion", "ROI"],
  },
  {
    id: 2,
    url: preview.globe,
    title: "Web Development",
    Icon: Code,
    description: `Digital experiences engineered for conversion. We don't just build websites; we develop fast, scalable, and intuitive web applications. Our focus is on seamless user journeys that transform casual browsers into brand advocates.`,
    tags: ["React", "Next.js", "UX/UI", "Scalable"],
  },
  {
    id: 3,
    url: preview.mousetrail,
    title: "Strategic Social Advertising",
    Icon: Megaphone,
    description: `Command attention in a crowded feed. We leverage the power of Facebook and Instagram through data-driven Meta campaigns. By combining granular targeting with scroll-stopping creative, we turn social engagement into measurable revenue.`,
    tags: ["Meta Ads", "Instagram", "Facebook", "Growth"],
  },
  {
    id: 4,
    url: preview.galleryNew,
    title: "Creative Design",
    Icon: Paintbrush,
    description: `Aesthetics with an appetite for results. From foundational branding to high-impact ad visuals, we bridge the gap between art and commerce. We create bold, cohesive designs that demand attention and reinforce your brand’s authority.`,
    tags: ["Branding", "Visual Identity", "Art Direction", "Design"],
  },
];

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

// Alternative with image sources
const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];

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
          velocity={50}
          className="custom-scroll-text bg-[#D91F26]"
        />
        <StatsSection />
        <HorizontalScroll/>
        <ScrollVelocity
          texts={['SERVICES . SERVICES . SERVICES . SERVICES .', 'SERVICES . SERVICES . SERVICES . SERVICES . SERVICES']} 
          velocity={100}
          className="custom-scroll-text bg-[#1c1c1c]"
        />
      </div>
      <div className='bg-[#f3f1eb] py-20 px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 max-w-full mx-auto'>
          <div className='md:col-span-2 flex items-center justify-center p-8'>
             <h2 className='text-5xl md:text-7xl font-bold text-[#1c1c1c] uppercase tracking-tighter text-center leading-tight'>
                Know the tools<br/>win the game
             </h2>
          </div>
          {items.map((item, i) => {
            return (
              <Dialog
                key={item.id}
                transition={{
                  type: 'spring',
                  bounce: 0.5,
                  duration: 0.9,
                }}
              >
                <DialogTrigger
                  style={{
                    borderRadius: '0px',
                  }}
                  className='aspect-square flex w-full flex-col justify-between bg-[#1c1c1c] hover:bg-neutral-800 p-6 transition-colors'
                >
                  <div className="flex-1 flex items-center justify-center">
                    <item.Icon className="w-20 h-20 text-white" />
                  </div>
                  <div className='flex w-full flex-row items-end justify-between'>
                    <DialogTitle className='text-white text-xl font-medium'>
                      {item.title}
                    </DialogTitle>
                    <div className='text-white'>
                      <Plus className='w-6 h-6' />
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContainer className='pt-10 md:pt-20' overlayClassName='bg-[radial-gradient(125%_125%_at_50%_10%,#050505_40%,#1b1b1b_100%)]'>
                  <DialogContent
                    style={{
                      borderRadius: '24px',
                    }}
                    className='relative flex h-auto max-h-[85vh] md:h-full mx-auto flex-col overflow-y-auto border border-zinc-800 bg-black hover:bg-neutral-950 lg:w-[900px] w-[95%] md:w-[80%]'
                  >
                    <div className="flex w-full md:w-[60%] items-center justify-center mx-auto mt-4 md:mt-0 h-[30vh] md:h-full">
                      <item.Icon className="w-32 h-32 md:w-64 md:h-64 text-white" />
                    </div>
                    <div className='p-6'>
                      <DialogTitle className='text-3xl md:text-5xl text-white'>
                        {item.title}
                      </DialogTitle>

                      <DialogDescription
                        disableLayoutAnimation
                        variants={{
                          initial: { opacity: 0, scale: 0.8, y: -40 },
                          animate: { opacity: 1, scale: 1, y: 0 },
                          exit: { opacity: 0, scale: 0.8, y: -50 },
                        }}
                      >
                        <p className='mt-2 text-zinc-300'>
                          {item.description}
                        </p>
                      </DialogDescription>
                    </div>
                    <DialogClose className='text-white bg-zinc-800 p-4 hover:bg-zinc-700 rounded-lg' />
                  </DialogContent>
                </DialogContainer>
              </Dialog>
            );
          })}
        </div>
        <div className="flex justify-center mt-12">
          <ButtonCreativeRight label="Services" href="/services" />
        </div>
      </div>
      <ScrollVelocity
          texts={['TESTIMONIALS . TESTIMONIALS . TESTIMONIALS . TESTIMONIALS .', 'TESTIMONIALS . TESTIMONIALS . TESTIMONIALS . TESTIMONIALS . TESTIMONIALS']} 
          velocity={100}
          className="custom-scroll-text"
        />
      <Testimonials />
       <div style={{ height: '100px', position: 'relative', overflow: 'hidden', backgroundColor: '#f2efe9'}}>
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={techLogos}
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
