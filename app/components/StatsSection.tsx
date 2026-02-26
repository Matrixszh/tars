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
  const countRef3 = useRef<HTMLSpanElement>(null);
  const countRef4 = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const grid = gridRef.current;

    if (!section || !title || !grid) return;

    const ctx = gsap.context(() => {
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

      [
        { ref: countRef1.current, end: 25, suffix: "+" },
        { ref: countRef2.current, end: 150, suffix: "+" },
        { ref: countRef3.current, end: 5, suffix: "" },
        { ref: countRef4.current, end: 5, suffix: "" }
      ].forEach(({ ref, end, suffix }) => {
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
            ref.textContent = Math.floor(counter.val) + suffix;
          }
        });
      });

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#f2efe9] pt-24 w-full">
      <div className="max-w-full mx-auto">
        <h2 ref={titleRef} className="text-4xl md:text-6xl font-bold text-center mb-16 tracking-tight uppercase">
          <span className="text-[#D91F26]">NUMBERS</span> <span className="text-[#1c1c1c]">THAT</span>
          <br className="hidden md:block" />
          <span className="text-[#1c1c1c]"> TELL OUR STORY</span>
        </h2>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 w-full">
          <div className="grid-item bg-[#D91F26] h-[200px] md:h-[400px] p-8 md:p-12 flex flex-col justify-center items-center relative text-[#f2efe9]">
            <div className="absolute top-6 right-6">
              <FaArrowRight className="transform -rotate-45 text-2xl md:text-3xl" />
            </div>
            <div className="text-center">
              <span ref={countRef1} className="text-6xl md:text-8xl font-bold block mb-2">0+</span>
              <span className="text-lg md:text-xl font-semibold tracking-widest uppercase">CLIENTS</span>
            </div>
          </div>

          <div className="grid-item bg-[#f2efe9] h-[250px] md:h-[400px] p-8 md:p-12 flex flex-col justify-center items-center relative text-[#1c1c1c] border-t md:border-t-0 md:border-l border-[#1c1c1c]/10">
            <div className="absolute top-6 right-6">
              <FaArrowRight className="transform rotate-0 text-2xl md:text-3xl" />
            </div>
            <div className="text-center">
              <span ref={countRef3} className="text-6xl md:text-8xl font-bold block mb-2">0</span>
              <span className="text-lg md:text-xl font-semibold tracking-widest uppercase">COUNTRIES</span>
            </div>
          </div>

          <div className="grid-item bg-[#f2efe9] h-[250px] md:h-[400px] p-8 md:p-12 flex flex-col justify-center items-center relative text-[#1c1c1c] border-t border-[#1c1c1c]/10">
            <div className="absolute top-6 right-6">
              <FaArrowRight className="transform rotate-180 text-2xl md:text-3xl" />
            </div>
            <div className="text-center">
              <span ref={countRef4} className="text-6xl md:text-8xl font-bold block mb-2">0</span>
              <span className="text-lg md:text-xl font-semibold tracking-widest uppercase">YEARS EXPERIENCE</span>
            </div>
          </div>

          <div className="grid-item bg-[#D91F26] h-[250px] md:h-[400px] p-8 md:p-12 flex flex-col justify-center items-center relative text-[#f2efe9] order-3 md:order-4">
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
