"use client";
import React, { useRef, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StatsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const countRef1 = useRef<HTMLSpanElement>(null);
  const countRef2 = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const grid = gridRef.current;

    if (!section || !title || !grid) return;

    const ctx = gsap.context(() => {
      // Animate Title
      gsap.fromTo(title,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate Grid Items
      const items = grid.querySelectorAll('.grid-item');
      gsap.fromTo(items,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate Numbers
      [
        { ref: countRef1.current, end: 72 },
        { ref: countRef2.current, end: 100 }
      ].forEach(({ ref, end }) => {
        if (!ref) return;
        const counter = { val: 0 };
        gsap.to(counter, {
          val: end,
          duration: 2,
          ease: "power1.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          onUpdate: () => {
            ref.textContent = Math.floor(counter.val) + "+";
          }
        });
      });

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#f2efe9] pt-24 w-full">
      <div className="max-w-full mx-auto">
        
        {/* Title */}
        <h2 ref={titleRef} className="text-4xl md:text-6xl font-bold text-center mb-16 tracking-tight uppercase">
          <span className="text-[#D91F26]">NUMBERS</span> <span className="text-[#1c1c1c]">DO WHAT</span>
          <br className="hidden md:block" />
          <span className="text-[#1c1c1c]"> WORDS CAN'T</span>
        </h2>

        {/* Grid Layout */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 w-full">
          
          {/* Item 1: Red Box (72+ CLIENTS) */}
          <div className="grid-item bg-[#D91F26] aspect-square md:aspect-auto md:h-[400px] p-8 md:p-12 flex flex-col justify-center items-center relative text-[#f2efe9]">
            <div className="absolute top-6 right-6">
              <FaArrowRight className="transform -rotate-45 text-2xl md:text-3xl" />
            </div>
            <div className="text-center">
              <span ref={countRef1} className="text-6xl md:text-8xl font-bold block mb-2">0+</span>
              <span className="text-lg md:text-xl font-semibold tracking-widest uppercase">CLIENTS</span>
            </div>
          </div>

          {/* Item 2: Text Description */}
          <div className="grid-item bg-[#f2efe9] aspect-square md:aspect-auto md:h-[400px] p-8 md:p-12 flex items-center justify-center">
            <p className="text-[#1c1c1c] text-lg md:text-xl leading-relaxed font-medium">
              Our network provides the infrastructure to scale decentralized AI3.0 applications on-chain—hyper-scalable permanent data storage, super fast data availability & flexible EVM-compatible decoupled execution.
            </p>
          </div>

          {/* Item 3: Text Description */}
          <div className="grid-item bg-[#f2efe9] aspect-square md:aspect-auto md:h-[400px] p-8 md:p-12 flex items-center justify-center order-4 md:order-3">
             <p className="text-[#1c1c1c] text-lg md:text-xl leading-relaxed font-medium">
              Our network provides the infrastructure to scale decentralized AI3.0 applications on-chain—hyper-scalable permanent data storage, super fast data availability & flexible EVM-compatible decoupled execution.
            </p>
          </div>

          {/* Item 4: Red Box (100+ PROJECTS) */}
          <div className="grid-item bg-[#D91F26] aspect-square md:aspect-auto md:h-[400px] p-8 md:p-12 flex flex-col justify-center items-center relative text-[#f2efe9] order-3 md:order-4">
            <div className="absolute top-6 right-6">
              <FaArrowRight className="transform rotate-45 text-2xl md:text-3xl" />
            </div>
             <div className="text-center">
              <span ref={countRef2} className="text-6xl md:text-8xl font-bold block mb-2">0+</span>
              <span className="text-lg md:text-xl font-semibold tracking-widest uppercase">PROJECTS</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default StatsSection;
