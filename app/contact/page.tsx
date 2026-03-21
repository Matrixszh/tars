"use client";
import React from "react";
import { ReactLenis } from "lenis/react";
import { motion } from "motion/react";
import { Instagram, Facebook, Mail } from "lucide-react";
import HeroSection from "../components/Hero";
import Footer from "../components/Footer";
import Beams from "../components/Beams"

export default function ContactPage() {
  return (
    <ReactLenis root>
      <div className="bg-[#f2efe9] min-h-screen font-['Poppins'] overflow-hidden">
       <HeroSection 
          title="CONTACT" 
          titleSize="text-xl md:text-[12rem]"
          buttonColor="bg-[#D91F26]"
          buttonHref="/services"
          backgroundElement={
            <div className="w-full h-full bg-black">
              <Beams
                beamWidth={3}
                beamHeight={30}
                beamNumber={20}
                lightColor="#ff0000"
                speed={2}
                noiseIntensity={1.75}
                scale={0.2}
                rotation={30}
              />
            </div>
          }
        />

        <div className="relative z-10 bg-white rounded-t-[80px] -mt-[80px] pt-24 pb-24 px-6 md:px-12">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-6xl md:text-8xl font-medium text-[#1c1c1c] mb-12 leading-none uppercase">
                  LET&apos;S <br/>
                  <span className="text-[#D91F26]">TALK</span>
                </h2>
                
                <div className="space-y-12">
                  <div className="group">
                    <h3 className="text-xl font-medium text-[#1c3e8d] mb-2 uppercase tracking-widest">Email</h3>
                    <a
                      href="mailto:info@tarsmarketing.com"
                      className="text-3xl md:text-2xl font-medium text-[#1c1c1c] hover:text-[#D91F26] transition-colors inline-flex items-center gap-4"
                    >
                      <Mail className="w-8 h-8" />
                      <span>info@tarsmarketing.com</span>
                    </a>
                  </div>

                  <div className="group">
                    <h3 className="text-xl font-medium text-[#1c3e8d] mb-2 uppercase tracking-widest">Social</h3>
                    <div className="flex gap-6">
                      <a
                        href="https://www.instagram.com/tarsmarketing?igsh=MXd5bnpyMXQzZ2J3eg=="
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#1c1c1c] hover:text-[#D91F26] transition-colors"
                        aria-label="TARS Marketing on Instagram"
                      >
                        <Instagram className="w-10 h-10" />
                      </a>
                      <a
                        href="https://www.facebook.com/share/1XsHj9kZ7v/?mibextid=wwXIfr"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#1c1c1c] hover:text-[#D91F26] transition-colors"
                        aria-label="TARS Marketing on Facebook"
                      >
                        <Facebook className="w-10 h-10" />
                      </a>
                    </div>
                  </div>

                  
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-[#1c1c1c] p-8 md:p-12 rounded-[40px] text-white relative overflow-hidden"
              >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D91F26] rounded-bl-full opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#1c3e8d] rounded-tr-full opacity-50"></div>

                <form className="relative z-10 space-y-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold uppercase tracking-widest mb-2 text-gray-400">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-transparent border-b-2 border-white/20 py-4 text-2xl focus:outline-none focus:border-[#D91F26] transition-colors placeholder-white/10"
                      placeholder="YOUR NAME"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold uppercase tracking-widest mb-2 text-gray-400">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-transparent border-b-2 border-white/20 py-4 text-2xl focus:outline-none focus:border-[#D91F26] transition-colors placeholder-white/10"
                      placeholder="YOUR@EMAIL.COM"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold uppercase tracking-widest mb-2 text-gray-400">Message</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full bg-transparent border-b-2 border-white/20 py-4 text-2xl focus:outline-none focus:border-[#D91F26] transition-colors placeholder-white/10 resize-none"
                      placeholder="TELL US EVERYTHING..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-6 bg-white text-black font-black text-xl uppercase tracking-widest rounded-full hover:bg-[#D91F26] hover:text-white transition-all duration-300 mt-8"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>

            </div>
          </div>
        </div>

        <Footer />
      </div>
    </ReactLenis>
  );
}
