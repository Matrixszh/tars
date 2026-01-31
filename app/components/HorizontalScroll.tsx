'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';

const items = [
  {
    id: 1,
    title: "PASSION",
    subtext: "Fueling every project with intense dedication and creative fire.",
    color: "bg-[#1c1c1c]",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80"
  },
  {
    id: 2,
    title: "WORK",
    subtext: "Delivering excellence through consistent effort and precise execution.",
    color: "bg-[#D91F26]",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
  },
  {
    id: 3,
    title: "MOTIVATION",
    subtext: "Driven by the desire to innovate, create, and inspire change.",
    color: "bg-[#1c1c1c]",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80"
  },
  {
    id: 4,
    title: "INSPIRATION",
    subtext: "Drawing creativity from the world around us to build the extraordinary.",
    color: "bg-[#D91F26]",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1600&q=80"
  },
  {
    id: 5,
    title: "BELIEVE",
    subtext: "Trusting the process and the vision we build together.",
    color: "bg-[#1c1c1c]",
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80"
  }
];

export default function HorizontalScroll() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <main>
      <article>
        {/* Horizontal Scroll Section */}
        <section ref={targetRef} className='relative h-[500vh]'>
          <div className='sticky top-0 flex h-screen items-center overflow-hidden'>
            <motion.div style={{ x }} className='flex'>
              {items.map((item) => (
                <div 
                  key={item.id} 
                  className="relative w-screen h-screen flex-shrink-0 flex flex-col justify-center items-center overflow-hidden"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={item.img}
                      fill
                      className='object-cover'
                      alt={item.title}
                      priority={item.id === 1}
                    />
                  </div>

                  {/* Tint Overlay */}
                  <div className={`absolute inset-0 z-10 ${item.color} opacity-70 mix-blend-multiply transition-colors duration-500`} />

                  {/* Content */}
                  <div className='relative z-20 text-center px-6 max-w-4xl mx-auto'>
                    <h2 className='text-[12vw] md:text-[10vw] font-bold text-white tracking-tighter leading-none mb-4 md:mb-8'>
                      {item.title}
                    </h2>
                    <p className="text-white text-lg md:text-2xl font-light tracking-wide max-w-2xl mx-auto">
                      {item.subtext}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </article>
    </main>
  );
}
