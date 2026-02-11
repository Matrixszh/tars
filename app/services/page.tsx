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
  DialogImage,
  DialogClose,
  DialogDescription,
  DialogContainer,
} from '@/components/linear-modal';
import { X, Search, PenTool, Zap, Rocket, Building2, Globe, Cpu, Layers, Hexagon } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      title: "WEB DEV",
      description: "Custom, high-performance websites that leave a lasting impression.",
      details: "We build scalable, secure, and SEO-optimized websites using the latest technologies like Next.js, React, and Node.js. Our focus is on performance, accessibility, and user experience.",
      tags: ["Next.js", "React", "Node.js", "SEO"],
      color: "bg-[#1c3e8d]",
      textColor: "text-white",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80"
    },
    {
      title: "UI/UX DESIGN",
      description: "User-centric interfaces that blend aesthetics with functionality.",
      details: "Our design process starts with understanding your users. We create wireframes, prototypes, and high-fidelity designs that are intuitive, accessible, and beautiful.",
      tags: ["Figma", "Prototyping", "User Research", "Interaction"],
      color: "bg-[#D91F26]",
      textColor: "text-white",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
    },
    {
      title: "BRANDING",
      description: "Identity systems that tell your story and resonate with your audience.",
      details: "From logo design to full brand guidelines, we help you define your voice and visual identity. We create brands that stand out in a crowded market.",
      tags: ["Logo Design", "Strategy", "Identity", "Guidelines"],
      color: "bg-[#f2efe9]",
      textColor: "text-[#1c1c1c]",
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80"
    },
    {
      title: "MARKETING",
      description: "Data-driven strategies to amplify your reach and drive growth.",
      details: "We use data and analytics to create targeted marketing campaigns. From SEO and content marketing to social media and paid advertising, we help you grow your business.",
      tags: ["SEO", "Content", "Social Media", "Analytics"],
      color: "bg-[#1c1c1c]",
      textColor: "text-white",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    }
  ];

  const clientLogos = [
    { node: <div className="flex items-center gap-2 font-black text-2xl text-[#1c1c1c] uppercase"><Building2 className="w-8 h-8"/> TechNova</div>, title: "TechNova" },
    { node: <div className="flex items-center gap-2 font-black text-2xl text-[#1c1c1c] uppercase"><Globe className="w-8 h-8"/> GreenLeaf</div>, title: "GreenLeaf" },
    { node: <div className="flex items-center gap-2 font-black text-2xl text-[#1c1c1c] uppercase"><Zap className="w-8 h-8"/> Velocity</div>, title: "Velocity" },
    { node: <div className="flex items-center gap-2 font-black text-2xl text-[#1c1c1c] uppercase"><Cpu className="w-8 h-8"/> Quantum</div>, title: "Quantum" },
    { node: <div className="flex items-center gap-2 font-black text-2xl text-[#1c1c1c] uppercase"><Layers className="w-8 h-8"/> Elevate</div>, title: "Elevate" },
    { node: <div className="flex items-center gap-2 font-black text-2xl text-[#1c1c1c] uppercase"><Hexagon className="w-8 h-8"/> Horizon</div>, title: "Horizon" },
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
                logos={clientLogos}
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
               className="text-5xl md:text-8xl font-black text-[#1c1c1c] mb-12 tracking-tighter uppercase text-center"
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
                       borderRadius: '40px',
                     }}
                     className={`${service.color} ${service.textColor} flex flex-col justify-between min-h-[400px] border-4 border-black relative overflow-hidden group w-full text-left`}
                   >
                     <div className="p-12 h-full flex flex-col justify-between relative z-10">
                       <div>
                         <DialogTitle className="text-4xl md:text-6xl font-bold mb-6 uppercase leading-none">{service.title}</DialogTitle>
                         <DialogDescription className={`text-xl md:text-2xl font-medium max-w-md ${service.textColor === 'text-white' ? 'text-white/90' : 'text-[#1c1c1c]/90'}`}>
                           {service.description}
                         </DialogDescription>
                       </div>
                       
                       <div className="self-end mt-8">
                         <span className="px-8 py-3 bg-white text-black rounded-full font-bold uppercase tracking-wider group-hover:bg-black group-hover:text-white transition-colors border-2 border-black inline-block">
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
                       <DialogImage
                         src={service.image}
                         alt={service.title}
                         className="h-64 w-full object-cover"
                       />
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

           <div className="bg-[#f2efe9] py-20 rounded-t-[60px] border-t-4 border-black">
             <CurvedLoop 
               marqueeText="BOLD ✦ TACKY ✦ CREATIVE ✦ LOUD ✦ "
               speed={3}
               curveAmount={500}
               direction="left"
               interactive
               className="custom-text-style"
             />

             <div className="max-w-full mx-auto px-6  mt-12">
                <h3 className="text-5xl md:text-7xl font-bold text-[#1c1c1c] mb-20 text-center uppercase tracking-tighter">
                  HOW WE <span className="text-[#D91F26]">MOVE</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-8 border-4 border-black rounded-[40px] bg-white hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-2">
                       {step.icon}
                       <h4 className="text-2xl font-black mb-4 uppercase">{step.title}</h4>
                       <p className="text-lg font-medium text-gray-600 leading-tight">{step.description}</p>
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
