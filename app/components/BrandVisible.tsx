"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ButtonCreativeRight from './ButtonFancy';

gsap.registerPlugin(ScrollTrigger);

interface BrandVisibleProps {
  buttonLabel?: string;
  buttonHref?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
  buttonCircleColor?: string;
  buttonHoverTextColor?: string;
}

const BrandVisible = ({
  buttonLabel = "About",
  buttonHref = "/about",
  buttonBgColor,
  buttonTextColor,
  buttonCircleColor,
  buttonHoverTextColor
}: BrandVisibleProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const text = textRef.current;

    if (!section || !title || !text) return;

    const ctx = gsap.context(() => {
        // Animate title parts
        const titleSpans = title.querySelectorAll('span');
        
        gsap.fromTo(titleSpans, 
            { 
                y: 50, 
                opacity: 0 
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Animate paragraph
        gsap.fromTo(text,
            { 
                y: 30, 
                opacity: 0 
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.4,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#f2efe9] py-24 px-6 md:px-16 w-full overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Left Content */}
        <div className="flex-1 w-full">
          <h2 ref={titleRef} className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
            <span className="text-[#1c1c1c] block">WE MAKE YOUR</span>
            <span className="text-[#1c3e8d] block">BRAND VISIBLE</span>
          </h2>
        </div>

        {/* Right Content */}
        <div className="flex-1 w-full">
          <p ref={textRef} className="text-[#1c1c1c] text-lg md:text-xl leading-relaxed max-w-2xl ml-auto font-medium">
            Welcome to Tars Marketing — your digital growth partner. We empower brands to stand out and scale through strategic social media marketing, high-performance website development, innovative web applications, and results-focused, data-driven advertising .
          </p>
          <div className="pt-10">
            <ButtonCreativeRight 
              label={buttonLabel} 
              href={buttonHref}
              bgColor={buttonBgColor}
              textColor={buttonTextColor}
              circleColor={buttonCircleColor}
              hoverTextColor={buttonHoverTextColor}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandVisible;
