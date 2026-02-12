'use client';

import { ArrowRight } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

interface ButtonCreativeRightProps {
  label?: string;
  href?: string;
  bgColor?: string;
  textColor?: string;
  circleColor?: string;
  hoverTextColor?: string;
}

function ButtonCreativeRight({ 
  label = "About", 
  href = "/about",
  bgColor = "#ffffff",
  textColor = "#000000",
  circleColor = "#000000",
  hoverTextColor = "#ffffff"
}: ButtonCreativeRightProps) {
  return (
    <Link href={href}>
      <div 
        className='group relative cursor-pointer p-2 w-38 border-3 overflow-hidden border-[#000000] text-center font-semibold'
        style={{ 
          backgroundColor: bgColor, 
          color: textColor 
        }}
      >
        <span className='translate-x-1 group-hover:translate-x-12 group-hover:opacity-0 transition-all duration-300 inline-block'>
          {label}
        </span>
        <div 
          className='flex gap-2 z-10 items-center absolute top-0 h-full w-full justify-center translate-x-12 opacity-0 group-hover:-translate-x-1 group-hover:opacity-100 transition-all duration-300'
          style={{ color: hoverTextColor }}
        >
          <span>{label}</span>
          <ArrowRight />
        </div>
        <div 
          className='absolute top-[40%] left-[20%] h-2 w-2 group-hover:h-full group-hover:w-full rounded-lg scale-[1] group-hover:scale-[1.8] transition-all duration-300 group-hover:top-[0%] group-hover:left-[0%]'
          style={{ backgroundColor: circleColor }}
        ></div>
      </div>
    </Link>
  );
}

export default ButtonCreativeRight;
