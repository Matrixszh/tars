"use client";
import { ReactLenis } from "lenis/react";
import { motion } from "motion/react";
import HeroSection from "../components/Hero";
import Footer from "../components/Footer";
import CurvedLoop from "@/components/CurvedLoop";
import FloatingLines from "../components/FloatingLines";
import LogoLoop from '../components/LogoLoop';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogClose,
  DialogDescription,
  DialogContainer,
} from '@/components/linear-modal';
import { X, Search, PenTool, Zap, Rocket, Target, Code, Megaphone, Paintbrush } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      title: "PPC (Google Ads)",
      description: "Capture intent when it matters most. We architect high-performance Google Ads campaigns.",
      details: "From keyword strategy to conversion tracking, every click is an investment in your bottom line. We optimize for ROI, ensuring your ad spend translates into tangible business growth.",
      tags: ["Google Ads", "SEM", "Conversion", "ROI"],
      color: "bg-[#1c3e8d]",
      textColor: "text-white",
      Icon: Target
    },
    {
      title: "Web Development",
      description: "Digital experiences engineered for conversion. Fast, scalable, and intuitive web applications.",
      details: "We don't just build websites; we develop fast, scalable, and intuitive web applications. Our focus is on seamless user journeys that transform casual browsers into brand advocates.",
      tags: ["React", "Next.js", "UX/UI", "Scalable"],
      color: "bg-[#D91F26]",
      textColor: "text-white",
      Icon: Code
    },
    {
      title: "Strategic Social Advertising",
      description: "Command attention in a crowded feed. Data-driven Meta campaigns that convert.",
      details: "We leverage the power of Facebook and Instagram through data-driven Meta campaigns. By combining granular targeting with scroll-stopping creative, we turn social engagement into measurable revenue.",
      tags: ["Meta Ads", "Instagram", "Facebook", "Growth"],
      color: "bg-[#f2efe9]",
      textColor: "text-[#1c1c1c]",
      Icon: Megaphone
    },
    {
      title: "Creative Design",
      description: "Aesthetics with an appetite for results. Bold, cohesive designs that demand attention.",
      details: "From foundational branding to high-impact ad visuals, we bridge the gap between art and commerce. We create bold, cohesive designs that demand attention and reinforce your brand’s authority.",
      tags: ["Branding", "Visual Identity", "Art Direction", "Design"],
      color: "bg-[#1c1c1c]",
      textColor: "text-white",
      Icon: Paintbrush
    }
  ];

  const imageLogos = [
    { src: "/LC.png", alt: "Company 1" },
    { src: "/LC1.png", alt: "Company 2" },
    { src: "/LC3.png", alt: "Company 3" },
    { src: "/LC4.png", alt: "Company 1" },
    { src: "/LC5.png", alt: "Company 2" },
    { src: "/LC6.png", alt: "Company 3" },
    { src: "/LC7.png", alt: "Company 2" },
    { src: "/LC8.png", alt: "Company 3" },
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

        <div className="bg-white rounded-t-[80px] -mt-[80px] relative z-10 pt-24 pb-12">
           
           <div className="mb-32">
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
                fadeOutColor="#ffffff"
                ariaLabel="Trusted Clients"
              />
              </div>
            </div>

           <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-20">
             <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="text-3xl md:text-7xl font-bold text-[#1c1c1c] mb-12 leading-[1.1] tracking-tight uppercase text-center"
             >
               WHAT WE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1c3e8d] to-[#D91F26]">COOK</span>
             </motion.h2>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {services.map((service, index) => (
                 <Dialog
                   key={index}
                   transition={{
                     type: 'spring',
                     bounce: 0.05,
                     duration: 0.25,
                   }}
                 >
                   <DialogTrigger
                     style={{
                       borderRadius: '0px',
                     }}
                     className={`${service.color} ${service.textColor} flex flex-col justify-between min-h-[400px] border-4 border-black relative overflow-hidden group w-full text-left`}
                   >
                     <div className="p-12 h-full flex flex-col justify-between relative z-10">
                       <div>
                         <DialogTitle className="text-4xl md:text-5xl font-medium mb-6 uppercase leading-none">{service.title}</DialogTitle>
                         <DialogDescription className={`text-xl md:text-2xl font-medium max-w-md ${service.textColor === 'text-white' ? 'text-white/90' : 'text-[#1c1c1c]/90'}`}>
                           {service.description}
                         </DialogDescription>
                       </div>
                       
                       <div className="self-end mt-8">
                         <span className="px-8 py-3 bg-white text-black font-bold uppercase tracking-wider group-hover:bg-black group-hover:text-white transition-colors border-2 border-black inline-block">
                           Learn More
                         </span>
                       </div>
                     </div>
                     
                     {/* Decorative circle */}
                     <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full border-[20px] border-white/20 group-hover:scale-150 transition-transform duration-500 z-0"></div>
                   </DialogTrigger>

                   <DialogContainer>
                     <DialogContent
                        style={{
                          borderRadius: '24px',
                        }}
                        className={`pointer-events-auto relative flex h-auto max-h-[90vh] w-full flex-col overflow-y-auto border-4 border-black ${service.color} sm:w-[600px]`}
                      >
                       <div className="h-64 w-full flex items-center justify-center border-b-4 border-black bg-white/5">
                       <service.Icon size={120} className={service.textColor} />
                     </div>
                     <div className={`p-8 ${service.textColor}`}>
                         <div className="flex justify-between items-start mb-6">
                           <DialogTitle className="text-5xl font-black uppercase tracking-tighter">
                             {service.title}
                           </DialogTitle>
                           <DialogClose className={`p-2 rounded-full border-2 ${service.textColor === 'text-white' ? 'border-white hover:bg-white hover:text-black' : 'border-black hover:bg-black hover:text-white'} transition-colors`}>
                             <X size={24} />
                           </DialogClose>
                         </div>
                         
                         <DialogDescription className="text-xl font-medium leading-relaxed mb-8 opacity-90">
                           {service.details}
                         </DialogDescription>

                         <div className="flex flex-wrap gap-3">
                           {service.tags.map((tag, i) => (
                             <span 
                               key={i}
                               className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider border-2 ${service.textColor === 'text-white' ? 'border-white text-white' : 'border-black text-black'}`}
                             >
                               {tag}
                             </span>
                           ))}
                         </div>
                       </div>
                     </DialogContent>
                   </DialogContainer>
                 </Dialog>
               ))}
             </div>
           </div>

           <div className="bg-[#f2efe9] pt-10 rounded-t-[60px] border-t-4 border-black">
             <CurvedLoop 
               marqueeText="BOLD ✦ TACKY ✦ CREATIVE ✦ LOUD ✦ "
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
           </div>
        </div>

        <Footer />
      </div>
    </ReactLenis>
  );
}
