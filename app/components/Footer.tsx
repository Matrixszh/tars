import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1c1c1c] text-[#f2efe9] py-16 px-6 md:px-12 font-['Poppins']">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          {/* Logo */}
          <div className="h-12 md:h-16 w-auto">
             <img 
               src="/logo.png" 
               alt="TARS Logo" 
               className="h-full w-auto object-contain"
             />
          </div>
          
          {/* Links */}
          <nav className="flex flex-wrap gap-6 md:gap-10 text-base md:text-lg font-light">
            <a href="#home" className="hover:text-[#1c3e8d] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#1c3e8d] transition-colors">About</a>
            <a href="#services" className="hover:text-[#1c3e8d] transition-colors">Services</a>
            <a href="#contact" className="text-[#1c3e8d] font-medium hover:text-[#f2efe9] transition-colors">Contact</a>
          </nav>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#f2efe9]" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-base font-light">
          <a href="mailto:tarxmarketing@gmail.com" className="hover:text-[#1c3e8d] underline underline-offset-4 decoration-1 transition-colors">
            tarxmarketing@gmail.com
          </a>
          <a href="tel:+916309323553" className="hover:text-[#1c3e8d] transition-colors">
            +91 6309323553
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
