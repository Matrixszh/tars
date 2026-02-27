"use client"
import React from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import Link from 'next/link';
import Navbar from './Navbar';

const HeroSection = ({ 
  title = "TARS", 
  backgroundElement,
  titleSize = "text-[12rem]",
  buttonColor = "bg-[#1c3e8d]",
  buttonHref
}: { 
  title?: string; 
  backgroundElement?: React.ReactNode;
  titleSize?: string;
  buttonColor?: string;
  buttonHref?: string;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for the mouse movement
  const mouseX = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 30 });

  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    
    // Calculate position relative to center (range -1 to 1)
    const relativeX = (clientX / innerWidth) - 0.5;
    const relativeY = (clientY / innerHeight) - 0.5;

    // Move text opposite to mouse (parallax)
    x.set(relativeX * -50); 
    y.set(relativeY * -50);
  };

  // Text animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 3.0
      }
    }
  };

  const letterVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100
      }
    }
  };


  return (
    <div 
      className="relative w-full h-screen bg-black text-white overflow-hidden font-['Poppins'] max-w-[100vw]"
      onMouseMove={handleMouseMove}
    >
      <Navbar />

      {/* Background */}
      {backgroundElement ? (
        <div className="absolute inset-0 z-0 overflow-hidden bg-black">
          {backgroundElement}
        </div>
      ) : (
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center w-full h-full px-6">
        <div className="relative text-center max-w-full">
          {/* Spinning Sparkle Icon Top Left */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute -top-12 -left-4 md:-top-16 md:-left-16"
          >
            <svg 
              className="w-8 h-8 md:w-12 md:h-12 text-white animate-spin" 
              style={{ animationDuration: '3s' }}
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
            </svg>
          </motion.div>

          {/* Main Title with Parallax and Letter Animation */}
          <motion.div
            style={{ x: mouseX, y: mouseY }}
            className="perspective-1000 max-w-full overflow-hidden"
          >
            <motion.h1 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={`text-5xl md:${titleSize} lg:${titleSize} font-bold tracking-[0.1em] md:tracking-[0.2em] leading-none cursor-default whitespace-normal md:whitespace-nowrap break-words`}
            >
              {Array.from(title).map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="inline-block hover:text-gray-200 transition-colors"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: Math.random() * 10 - 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>

          {/* Spinning Sparkle Icon Bottom Right */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 3.8, duration: 0.5 }}
            className="absolute -bottom-12 -right-4 md:-bottom-16 md:-right-16"
          >
            <svg 
              className="w-8 h-8 md:w-16 md:h-16 text-white animate-spin" 
              style={{ animationDuration: '5s' }}
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
            </svg>
          </motion.div>

          {/* Explore Button */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 4.0, type: "spring" }}
            className="mt-12 flex justify-center"
          >
            {buttonHref ? (
              <Link
                href={buttonHref}
                className={`inline-flex items-center gap-2 px-8 py-3 text-base md:text-lg ${buttonColor} hover:brightness-110 text-white rounded-full border border-3 border-white transition-all hover:scale-105 active:scale-95`}
              >
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
              </Link>
            ) : (
              <button
                className={`inline-flex items-center gap-2 px-8 py-3 text-base md:text-lg ${buttonColor} hover:brightness-110 text-white rounded-full border border-3 border-white transition-all hover:scale-105 active:scale-95`}
              >
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
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
