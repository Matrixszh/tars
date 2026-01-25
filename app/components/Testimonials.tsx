'use client';
import { useState } from 'react';
import { ArrowLeft, ArrowRight, MoveRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const testimonials = [
  {
    id: 1,
    text: "Our network provides the infrastructure to scale decentralized AI3.0 applications on-chain—hyper-scalable permanent data storage, superOur network",
    author: "Zain"
  },
  {
    id: 2,
    text: "The team exceeded our expectations with their attention to detail and innovative solutions. A truly transformative experience for our brand.",
    author: "Sarah"
  },
  {
    id: 3,
    text: "Professional, efficient, and incredibly talented. They turned our vague ideas into a concrete, stunning reality that our users love.",
    author: "Michael"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-[#f3f1eb] py-20 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="space-y-8">
          <h2 className="text-5xl md:text-7xl font-bold text-[#1c1c1c] uppercase tracking-tighter leading-tight">
            What do our <span className="text-[#1c3e8d]">clients</span> say about us
          </h2>
          <button className="group flex items-center gap-2 bg-[#1c1c1c] text-white px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors">
            Explore <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center md:items-end space-y-6">
          <div className="relative w-full max-w-md aspect-square bg-[#1c1c1c] p-8 md:p-12 flex flex-col justify-center">
             <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="h-full flex flex-col justify-between"
                >
                  <p className="text-white/90 text-xl md:text-2xl leading-relaxed font-light">
                    {testimonials[current].text}
                  </p>
                  <p className="text-right text-white text-2xl md:text-3xl mt-6">
                    ~ {testimonials[current].author}
                  </p>
                </motion.div>
             </AnimatePresence>
          </div>
          
          <div className="flex gap-8 items-center justify-end w-full max-w-md">
            <button onClick={prev} className="p-2 hover:scale-110 transition-transform text-[#1c3e8d]">
               {/* Custom SVG for solid triangle look if needed, or just standard icon */}
               <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-10 md:h-10 rotate-180">
                  <path d="M5 3L19 12L5 21V3Z" />
               </svg>
            </button>
            <button onClick={next} className="p-2 hover:scale-110 transition-transform text-[#1c3e8d]">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-10 md:h-10">
                  <path d="M5 3L19 12L5 21V3Z" />
               </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
