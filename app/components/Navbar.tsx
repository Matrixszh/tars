"use client";
import React, { useState } from 'react';
import { motion } from 'motion/react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-6 font-['Poppins']">
      <div className="max-w-full mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="h-8 md:h-15 w-auto">
          <a href="/">
            <img 
              src="/logo.png"
              alt="TXRS Logo"
              className="h-full w-auto object-contain"
            />
          </a>
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
          <motion.button 
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
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-50 text-white"
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
            className="text-2xl text-white hover:text-gray-300 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a 
            href="/about" 
            className="text-2xl text-white hover:text-gray-300 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="/services" 
            className="text-2xl text-white hover:text-gray-300 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <button 
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
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
