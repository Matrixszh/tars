"use client"
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';
import Link from 'next/link';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

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

  const menuVariants = {
    initial: { x: '100%' },
    animate: { 
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1], // Cubic bezier for smooth, settled stop
        staggerChildren: 0.1,
        delayChildren: 0.2
      } as any
    },
    exit: { 
      x: '100%',
      transition: {
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1],
        staggerChildren: 0.05,
        staggerDirection: -1
      } as any
    }
  };

  const menuItemVariants = {
    initial: { x: 50, opacity: 0 },
    animate: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      } as any
    },
    exit: { x: 50, opacity: 0 }
  };

  return (
    <div 
      className="relative w-full h-screen bg-black text-white overflow-hidden font-['Poppins'] max-w-[100vw]"
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
            className="md:hidden z-50 w-12 h-12 flex flex-col items-center justify-center gap-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <motion.span 
              animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white block origin-center transition-all duration-300"
            />
            <motion.span 
              animate={isMenuOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
              className="w-6 h-0.5 bg-white block transition-all duration-300"
            />
            <motion.span 
              animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white block origin-center transition-all duration-300"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              variants={menuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ willChange: 'transform' }}
              className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-40 md:hidden flex flex-col items-center justify-center overflow-hidden"
            >
              {/* Decorative Background Elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                 <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] animate-pulse" />
                 <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
              </div>

              <div className="flex flex-col items-center gap-10 relative z-10">
                {['Home', 'About', 'Services'].map((item) => (
                  <motion.a
                    key={item}
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    variants={menuItemVariants}
                    className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 hover:to-white transition-all uppercase tracking-tighter"
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ scale: 1.1, letterSpacing: "0.1em" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                  </motion.a>
                ))}
                
                <motion.a
                  href="/contact"
                  variants={menuItemVariants}
                  className={`mt-8 px-10 py-4 ${buttonColor} text-white rounded-full font-bold text-xl uppercase tracking-widest hover:brightness-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all flex items-center gap-3`}
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Talk
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
