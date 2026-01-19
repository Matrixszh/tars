"use client"
import React, { useState } from 'react';

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden font-['Poppins']">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-6">
        <div className="max-w-full mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="h-8 md:h-15 w-auto">
  <img 
    src="/logo.png"  // Place your logo as public/logo.png (or .svg, .jpg)
    alt="TXRS Logo"
    className="h-full w-auto object-contain"
  />
</div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-xl font-light hover:text-gray-300 transition-colors">
              Home
            </a>
            <a href="#about" className="text-xl font-light  hover:text-gray-300 transition-colors">
              About
            </a>
            <a href="#services" className="text-xl font-light  hover:text-gray-300 transition-colors">
              Services
            </a>
            <button className="px-6 py-2 bg-white text-[#1c3e8d] rounded-2xl font-semisbold hover:bg-gray-200 border border-3 border-[#1c3e8d] transition-colors flex items-center gap-2">
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
            </button>
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
              href="#home" 
              className="text-2xl hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-2xl hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#services" 
              className="text-2xl hover:text-gray-300 transition-colors"
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

      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hotel.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="relative text-center">
          {/* Spinning Sparkle Icon Top Left */}
          <div className="absolute -top-8 -left-8 md:-top-12 md:-left-12">
            <svg 
              className="w-8 h-8 md:w-12 md:h-12 text-white animate-spin" 
              style={{ animationDuration: '3s' }}
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
            </svg>
          </div>

          {/* Spinning Sparkle Icon Top Right */}
         

          {/* Main Title */}
          <h1 className="text-7xl md:text-[20rem] lg:text-[20rem] font-bold tracking-[0.2em] leading-none">
            TARS
          </h1>

          {/* Spinning Sparkle Icon Bottom Left */}
          

          {/* Spinning Sparkle Icon Bottom Right */}
          <div className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12">
            <svg 
              className="w-8 h-8 md:w-16 md:h-16 text-white animate-spin" 
              style={{ animationDuration: '5s' }}
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
            </svg>
          </div>

          {/* Explore Button */}
          <div className="mt-12">
            <button className="text-lg px-6 py-2 bg-[#1c3e8d] hover:bg-blue-700 text-white rounded-2xl border border-3 border-white   transition-colors flex items-center gap-2 mx-auto">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;