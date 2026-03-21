"use client";
import React from "react";
import { ReactLenis } from "lenis/react";
import { motion } from "motion/react";
import HeroSection from "../components/Hero";
import Footer from "../components/Footer";
import LightPillar from "../components/LightPillar";
import CurvedLoop from "@/components/CurvedLoop";
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

export default function AboutPage() {
  return (
    <ReactLenis root>
      <div className="bg-[#1c1c1c] min-h-screen font-['Poppins'] overflow-hidden">
        
{/*Hero section here */}
      <HeroSection 
          title="ABOUT" 
          titleSize="text-[12rem]"
          buttonColor="bg-[#1c3e8d]"
          buttonHref="/services"
          backgroundElement={
            <LightPillar
              topColor="#0096ff"
              bottomColor="#0004ff"
              intensity={1}
              rotationSpeed={0.6}
              glowAmount={0.002}
              pillarWidth={3}
              pillarHeight={0.4}
              noiseIntensity={0}
              pillarRotation={25}
              interactive={false}
              mixBlendMode="screen"
              quality="high"
            />
          }
        />

        {/* What We Do - Brief Message */}
        <section className="bg-[#f2efe9] py-24 px-6 md:px-12 max-w-full mx-auto rounded-b-[200px] pb-[10vh] ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-[#1c1c1c] mb-6 leading-tight">
                CRAFTING <span className="text-[#1c3e8d]">MARKETING</span> EXCELLENCE
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-xl md:text-2xl font-light text-[#1c1c1c] leading-relaxed">
                Welcome to Tars Marketing, your &quot;Marketing Marvels&quot; in the digital space. We help brands rise above the noise using a mix of creative social strategy, seamless web development, cutting edge web applications, and data-driven advertising.
              </p>
            </motion.div>
          </div>
          <motion.div 
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 4.0, type: "spring" }}
                      className="mt-12"
                    >
                      <button className="text-lg px-6 py-2 bg-[#1c3e8d] hover:bg-blue-700 text-white rounded-2xl border border-3 border-[#1f1f1f] transition-all hover:scale-105 active:scale-95 flex items-center gap-2 mx-auto">
                        Explore
                        <svg 
                          className="w-5 h-5" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M14 5l7 7m0 0l-7 7m7-7H3" 
                          />
                        </svg>
                      </button>
                    </motion.div>
        </section>

        {/* Our Vision */}
        <section className="py-24 px-6 md:px-12  text-[#f2efe9] rounded-b-full ">
          <div className="max-w-[1400px] mx-auto text-center ">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm md:text-lg font-semibold tracking-[0.3em] text-[#1c3e8d] mb-4 uppercase">
                Our Vision
              </h2>
              <h3 className="text-3xl md:text-6xl font-bold leading-tight max-w-5xl mx-auto pb-12">
                &quot;TO REDEFINE THE BOUNDARIES OF DIGITAL INTERACTION, CREATING A WORLD WHERE TECHNOLOGY AND ARTISTRY CONVERGE SEAMLESSLY.&quot;
              </h3>
            </motion.div>
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative flex flex-col justify-center items-center   p-12 h-[60vh] overflow-hidden group"
            >
               {/* Background Video */}
               <div className="absolute inset-0 z-0">
                  <video
                    src="/test.mp4" 
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-[100vh] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
               </div>
               
               {/* Red Glassy Overlay */}
               <div className="absolute inset-0 z-10 bg-[#0008ff] mix-blend-multiply opacity-100"></div>

               {/* Content */}
               <div className="relative z-20 text-white text-center">
                   <h2 className="text-5xl md:text-7xl font-bold mb-6">OUR VISION</h2>
                   <div className="h-2 w-24 bg-white mx-auto mb-8"></div>
               </div>
            </motion.div>
          </div>
          
        </section>

        {/* Our Mission */}
        <section className=" bg-[#f2efe9] text-[#1c1c1c] rounded-t-full">
          <div className="max-w-full mx-auto px-[0vw] md:px-[30vh]  items-center pt-20 md:pt-[50vh]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-center text-sm md:text-lg font-semibold tracking-[0.3em] text-[#D91F26] mb-4 uppercase">
                Our Mission
              </h2>
              <h3 className="text-center text-3xl md:text-6xl font-bold leading-tight max-w-5xl mx-auto pb-12 uppercase">
                &quot;TO HELP YOUR BUSINESS REACH—AND EXCEED—ITS POTENTIAL. WE COMBINE FRESH INNOVATION WITH DEEP INDUSTRY EXPERTISE TO TRANSFORM YOUR DIGITAL FOOTPRINT AND DRIVE SUSTAINABLE SUCCESS.&quot;
              </h3>
            </motion.div>
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative flex flex-col justify-center items-center p-12 h-[30vh] w-full overflow-hidden group"
            >
               {/* Background Video */}
               <div className="absolute inset-0 z-0">
                  <video
                    src="/test2.mp4" 
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-[30vh] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
               </div>
               
               {/* Red Glassy Overlay */}
               <div className="absolute inset-0 z-10 bg-[#ff0008] mix-blend-multiply opacity-100"></div>

               {/* Content */}
               <div className="relative z-20 text-white text-center">
                   <h2 className="text-5xl md:text-7xl font-bold mb-6">OUR MISSION</h2>
                   <div className="h-2 w-24 bg-white mx-auto mb-8"></div>
               </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </ReactLenis>
  );
}
