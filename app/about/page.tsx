"use client";
import React from "react";
import { ReactLenis } from "lenis/react";
import { motion } from "motion/react";
import HeroSection from "../components/Hero";
import Footer from "../components/Footer";
import LightPillar from "../components/LightPillar";
import CurvedLoop from "@/components/CurvedLoop";

export default function AboutPage() {
  return (
    <ReactLenis root>
      <div className="bg-[#1c1c1c] min-h-screen font-['Poppins'] ">
        <HeroSection 
          title="ABOUT" 
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
        <section className="bg-[#f2efe9] py-24 px-6 md:px-12 max-w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-[#1c1c1c] mb-6 leading-tight">
                CRAFTING <span className="text-[#1c3e8d]">DIGITAL</span> EXCELLENCE
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-xl md:text-2xl font-light text-[#1c1c1c] leading-relaxed">
                We are a creative agency dedicated to transforming ideas into impactful digital reality. 
                From stunning visuals to robust infrastructure, we build the tools you need to win the game.
                Our team blends passion, innovation, and technical expertise to deliver results that matter.
              </p>
            </motion.div>
          </div>
        </section>
<div className="bg-[#f2efe9] rounded-b-full ">
  <CurvedLoop 
    marqueeText="Be ✦ Creative ✦ With ✦ React ✦ Bits ✦"
    speed={5}
    curveAmount={1000}
    direction="right"
    interactive
    className="custom-text-style"
  />
</div>
        {/* Our Vision */}
        <section className="py-24 px-6 md:px-12 bg-[#1c1c1c] text-[#f2efe9]">
          <div className="max-w-[1400px] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm md:text-lg font-semibold tracking-[0.3em] text-[#1c3e8d] mb-4 uppercase">
                Our Vision
              </h2>
              <h3 className="text-3xl md:text-6xl font-bold leading-tight max-w-5xl mx-auto">
                "TO REDEFINE THE BOUNDARIES OF DIGITAL INTERACTION, CREATING A WORLD WHERE TECHNOLOGY AND ARTISTRY CONVERGE SEAMLESSLY."
              </h3>
            </motion.div>
          </div>
        </section>

        {/* Our Mission */}
        <section className=" bg-[#f2efe9] text-[#1c1c1c]">
          <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2  items-center">
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="flex items-center"
            >
              <p className="py-8 px-8 text-xl md:text-3xl font-medium leading-relaxed">
                To empower brands with cutting-edge tools and strategies. We strive to deliver scalable, 
                high-performance solutions that not only meet today's demands but anticipate tomorrow's challenges.
                We believe in the power of "Passion, Work, and Belief" to drive extraordinary outcomes.
              </p>
            </motion.div>
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative flex flex-col justify-center items-center p-12 h-full  overflow-hidden group"
            >
               {/* Background Image */}
               <div className="absolute inset-0 z-0">
                  <img 
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1600&q=80" 
                    alt="Mission Background"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
