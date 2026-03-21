"use client";
import { ReactLenis } from "lenis/react";
import { motion } from "motion/react";
import Image from "next/image";
import HeroSection from "../components/Hero";
import Footer from "../components/Footer";
import CurvedLoop from "@/components/CurvedLoop";
import FloatingLines from "../components/FloatingLines";
import LogoLoop from '../components/LogoLoop';
import { Search, PenTool, Zap, Rocket } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      title: "PPC (Google Ads)",
      description: "Capture intent when it matters most. We architect high-performance Google Ads campaigns that maximize ROI.",
      imageSrc: "/gads.png"
    },
    {
      title: "Web Development",
      description: "Digital experiences engineered for conversion. Fast, scalable, and intuitive web applications built with modern tech.",
      imageSrc: "/webdev.png"
    },
    {
      title: "Meta Ads",
      description: "Command attention in a crowded feed. We leverage the power of Facebook and Instagram through data-driven Meta campaigns. By combining granular targeting with scroll-stopping creative, we turn social engagement into measurable revenue.",
      imageSrc: "/meta.png"
    },
    {
      title: "Creative Design",
      description: "Aesthetics with an appetite for results. Bold, cohesive designs that demand attention and reinforce brand identity.",
      imageSrc: "/creaetivedesign.png"
    }
  ];

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

  const processSteps = [
    { title: "DISCOVERY", icon: <Search className="w-12 h-12 mb-6 text-[#1c3e8d]"/>, description: "We dig deep into your brand's DNA to find what makes you tick. No stone left unturned." },
    { title: "STRATEGY", icon: <PenTool className="w-12 h-12 mb-6 text-[#D91F26]"/>, description: "We blueprint a plan that's as bold as your ambition. Pure tactical genius." },
    { title: "EXECUTION", icon: <Zap className="w-12 h-12 mb-6 text-[#1c1c1c]"/>, description: "We build with speed, precision, and a touch of madness. Perfection is the standard." },
    { title: "LAUNCH", icon: <Rocket className="w-12 h-12 mb-6 text-[#1c3e8d]"/>, description: "We blast off and ensure your landing is nothing short of legendary. World domination follows." },
  ];

  return (
    <ReactLenis root>
      <div className="bg-[#1c1c1c] min-h-screen font-['Poppins']">
        <HeroSection 
          title="SERVICES" 
          titleSize="text-[12rem]"
          buttonColor="bg-[#1c3e8d]"
          buttonHref="/contact"
          backgroundElement={
            <div className="w-full h-full">
              <FloatingLines 
                enabledWaves={["top","middle","bottom"]}
                lineCount={5}
                lineDistance={5}
                bendRadius={5}
                bendStrength={-0.5}
                interactive={true}
                parallax={true}
              />
            </div>
          }
        />

        <div className="bg-white rounded-t-[80px] -mt-[80px] relative z-10 pt-24 ">
           
           <div className="mb-20">
             <div className="max-w-[1400px] mx-auto px-6 md:px-12">
               <motion.h2 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 className="text-5xl md:text-7xl font-bold text-[#1c1c1c] mb-16 text-center uppercase tracking-tighter"
               >
                 Services <span className="text-[#1c3e8d]">We Provide</span>
               </motion.h2>
             </div>

             <div className="w-full">
               <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                 <div className="space-y-14 md:space-y-20">
                   {services.map((service, index) => (
                     <div
                       key={index}
                       className="border-4 border-black bg-white hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-2 group overflow-hidden"
                     >
                       <div className="grid grid-cols-[5rem_1fr] md:grid-cols-[18%_1fr]">
                         <div className="border-r-4 border-black" />

                         <div className="py-10 md:py-14 px-6 md:px-12">
                           <div className="border-t-4 border-black" />

                           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center py-10 md:py-14">
                             <div className="relative">
                               <div className="bg-white p-3 md:p-5 border-4 border-black">
                                 <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
                                   <Image
                                     src={service.imageSrc}
                                     alt={service.title}
                                     fill
                                     sizes="(min-width: 768px) 50vw, 100vw"
                                     className="object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                                   />
                                 </div>
                               </div>
                             </div>

                             <div>
                               <h3 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 text-[#1c1c1c]">
                                 {service.title}
                               </h3>
                               <p className="text-gray-600 leading-relaxed text-lg md:text-xl max-w-[52ch]">
                                 {service.description}
                               </p>
                             </div>
                           </div>

                           <div className="border-b-4 border-black" />
                         </div>
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
             </div>
           </div>

           <div className="bg-[#f2efe9] pt-10 rounded-t-[60px] border-t-4 border-black">
             <CurvedLoop 
               marqueeText="BOLD ✦ CREATIVE ✦ LOUD ✦ "
               speed={3}
               curveAmount={500}
               direction="left"
               interactive
               className="custom-text-style"
             />

             <div className="max-w-full mx-auto px-6 ">
                <h3 className="text-5xl md:text-7xl font-bold text-[#1c1c1c] mb-20 text-center uppercase leading-[1.1] tracking-tight">
                  HOW WE <span className="text-[#D91F26]">MOVE</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-8 border-4 border-black  bg-white hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-2">
                       {step.icon}
                       <h4 className="text-4xl font-medium mb-4 uppercase">{step.title}</h4>
                       <p className="text-lg font-normal text-gray-600 leading-tight">{step.description}</p>
                    </div>
                  ))}
                </div>
             </div>

             <div className=" pt-20">
              <h3 className="text-center text-sm font-bold tracking-[0.3em] text-[#1c1c1c] mb-12 uppercase">
                Trusted By
              </h3>
               <div style={{ height: '100px', position: 'relative', overflow: 'hidden', backgroundColor: 'transparent'}}>
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
                ariaLabel="Trusted Clients"
              />
              </div>
            </div>
           </div>
        </div>

        <Footer />
      </div>
    </ReactLenis>
  );
}
