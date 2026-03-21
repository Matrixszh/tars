"use client";
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, type Transition, type Variants } from 'motion/react';
import { useLenis } from 'lenis/react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  // Capture lenis instance
  const lenis = useLenis(({ scroll }) => {
    setShowScrollTop(scroll > 300);
    setIsScrolled(scroll > 50);
  });

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const menuEnterTransition: Transition = {
    duration: 0.6,
    ease: [0.33, 1, 0.68, 1],
    staggerChildren: 0.1,
    delayChildren: 0.2
  };

  const menuExitTransition: Transition = {
    duration: 0.5,
    ease: [0.33, 1, 0.68, 1],
    staggerChildren: 0.05,
    staggerDirection: -1
  };

  const menuVariants: Variants = {
    initial: { x: '100%' },
    animate: { 
      x: 0,
      transition: menuEnterTransition
    },
    exit: { 
      x: '100%',
      transition: menuExitTransition
    }
  };

  const menuItemTransition: Transition = {
    type: "spring",
    damping: 20,
    stiffness: 100
  };

  const menuItemVariants: Variants = {
    initial: { x: 50, opacity: 0 },
    animate: { 
      x: 0, 
      opacity: 1,
      transition: menuItemTransition
    },
    exit: { x: 50, opacity: 0 }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 px-6 font-['Poppins'] transition-all duration-300 ${
          isScrolled ? 'bg-[#1c1c1c]/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-full mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="h-8 md:h-15 w-auto">
            <Link href="/">
              <img 
                src="/logo.png"
                alt="TXRS Logo"
                className="h-full w-auto object-contain"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'About', 'Services'].map((item, i) => (
              <motion.a 
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="text-xl font-light text-white hover:text-gray-300 transition-colors"
              >
                {item}
              </motion.a>
            ))}
            <motion.a 
              href="/contact"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
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
      </nav>

      {/* Mobile Menu Portal */}
      {typeof document !== 'undefined' && createPortal(
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
                  className="mt-8 px-10 py-4 bg-[#1c3e8d] text-white rounded-full font-bold text-xl uppercase tracking-widest hover:brightness-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all flex items-center gap-3"
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {"Let's Talk"}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 h-12 w-12 rounded-full bg-white text-[#1c1c1c] shadow-lg border border-[#1c1c1c] flex items-center justify-center hover:bg-[#1c1c1c] hover:text-white transition-colors"
          aria-label="Scroll to top"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19V5" />
            <path d="M5 12l7-7 7 7" />
          </svg>
        </button>
      )}
    </>
  );
};

export default Navbar;
