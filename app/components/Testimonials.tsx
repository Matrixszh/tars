'use client';
import { useState } from 'react';
import { ArrowLeft, ArrowRight, MoveRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const testimonials = [
  {
    id: 1,
    text: "TARS Marketing helped us improve our brand and built a clean, professional website. Their Google Ads brought us real and relevant leads, and we saw a clear return on investment. These leads helped us grow our reach and business.",
    author: "Promide"
  },
  {
    id: 2,
    text: "When Nexcon started, we had no online presence at all. TARS Marketing helped us build our digital presence from scratch and reach the right audience.",
    author: "Nexcon"
  },
  {
    id: 3,
    text: "Generating relevant B2B leads used to be our biggest hurdle. Tars Marketing changed that by delivering high-quality prospects that directly boosted our sales. They truly understand the B2B landscape. Tars Marketing delivered exceptional Google Ads services with expert insights and robust results, making them a highly recommended choice for digital marketing.",
    author: "Acme"
  },
  {
    id: 4,
    text: "Tars Marketing delivered exceptional Google Ads services with expert insights, and robust results, making them a highly recommended choice for digital marketing.",
    author: "Josh"
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
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center md:items-end space-y-6">
          <div className="relative w-full max-w-xl bg-[#1c1c1c] p-8 md:p-12 flex flex-col justify-center min-h-[320px] md:min-h-[400px]">
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
