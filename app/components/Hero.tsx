"use client"
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

const HeroSection = ({ title = "TARS", backgroundElement }: { title?: string; backgroundElement?: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Mouse position state for parallax
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
      className="relative min-h-screen bg-black text-white overflow-hidden font-['Poppins']"
      onMouseMove={handleMouseMove}
    >
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-6">
        <div className="max-w-full mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="h-8 md:h-15 w-auto">
            <img 
              src="/logo.png"
              alt="TXRS Logo"
              className="h-full w-auto object-contain"
            />
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'About', 'Services'].map((item, i) => (
              <motion.a 
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.2 + i * 0.1 }}
                className="text-xl font-light hover:text-gray-300 transition-colors"
              >
                {item}
              </motion.a>
            ))}
            <motion.a 
              href="/contact"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3.5 }}
              className="px-6 py-2 bg-white text-[#1c3e8d] rounded-2xl font-semibold hover:bg-gray-200 border border-3 border-[#1c3e8d] transition-colors flex items-center gap-2"
            >
              Contact
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="#1c3e8d" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </svg>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden fixed inset-0 bg-black/95 z-40 transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <a 
              href="/" 
              className="text-2xl hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="/about" 
              className="text-2xl hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="/services" 
              className="text-2xl hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="/contact"
              className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
              <svg 
                className="w-4 h-4" 
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
            </a>
          </div>
        </div>
      </nav>

      {/* Background */}
      {backgroundElement ? (
        <div className="absolute inset-0 z-0 overflow-hidden bg-black">
          {backgroundElement}
        </div>
      ) : (
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hotel.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="relative text-center">
          {/* Spinning Sparkle Icon Top Left */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute -top-8 -left-8 md:-top-12 md:-left-12"
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
            className="perspective-1000"
          >
            <motion.h1 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-7xl md:text-[10rem] lg:text-[10rem] font-bold tracking-[0.2em] leading-none cursor-default"
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
            className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12"
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
            className="mt-12"
          >
            <button className="text-lg px-6 py-2 bg-[#1c3e8d] hover:bg-blue-700 text-white rounded-2xl border border-3 border-white transition-all hover:scale-105 active:scale-95 flex items-center gap-2 mx-auto">
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
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
