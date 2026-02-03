"use client";
import React from "react";
import { ReactLenis } from "lenis/react";
import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <ReactLenis root>
      <div className="bg-[#f2efe9] min-h-screen font-['Poppins']">
        <Navbar />
        
        {/* Header Section */}
        <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-[#1c1c1c] overflow-hidden">
             <div 
                className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
                style={{
                  backgroundImage: "url('/hotel.jpg')",
                }}
              />
          <div className="relative z-10 text-center px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-9xl font-bold text-white tracking-tighter uppercase"
            >
              About Us
            </motion.h1>
          </div>
        </section>

        {/* What We Do - Brief Message */}
        <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
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
        <section className="py-24 px-6 md:px-12 bg-[#D91F26] text-white">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="flex flex-col justify-center"
            >
               <h2 className="text-5xl md:text-7xl font-bold mb-6">OUR MISSION</h2>
               <div className="h-2 w-24 bg-white mb-8"></div>
            </motion.div>
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="flex items-center"
            >
              <p className="text-xl md:text-3xl font-medium leading-relaxed">
                To empower brands with cutting-edge tools and strategies. We strive to deliver scalable, 
                high-performance solutions that not only meet today's demands but anticipate tomorrow's challenges.
                We believe in the power of "Passion, Work, and Belief" to drive extraordinary outcomes.
              </p>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </ReactLenis>
  );
}
