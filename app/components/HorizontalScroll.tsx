'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';

const items = [
  {
    id: 1,
    title: "PASSION",
    color: "bg-red-400",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
  },
  {
    id: 2,
    title: "WORK",
    color: "bg-blue-400",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop"
  },
  {
    id: 3,
    title: "MOTIVATION",
    color: "bg-orange-400",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=600&fit=crop"
  },
  {
    id: 4,
    title: "INSPIRATION",
    color: "bg-yellow-400",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=600&fit=crop"
  },
  {
    id: 5,
    title: "BELIEVE",
    color: "bg-green-400",
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=600&fit=crop"
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
        {/* Header Section */}
        <header className='text-white relative w-full bg-slate-950 grid place-content-center h-[80vh]'>
          <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
          <h1 className='text-4xl md:text-6xl font-bold text-center tracking-tight relative z-10'>
            I know You Love to Scroll <br />
            So Scroll
          </h1>
        </header>

        {/* Horizontal Scroll Section */}
        <section ref={targetRef} className='relative h-[500vh]'>
          <div className='sticky top-0 flex h-screen items-center overflow-hidden'>
            <motion.div style={{ x }} className='flex'>
              {items.map((item) => (
                <div 
                  key={item.id} 
                  className={`relative h-screen w-screen ${item.color} flex flex-col justify-center items-center flex-shrink-0`}
                >
                  <h2 className='text-[15vw] md:text-[20vw] font-semibold text-black mb-8 md:mb-12'>
                    {item.title}
                  </h2>
                  <div className='relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] shadow-2xl'>
                    <Image
                      src={item.img}
                      fill
                      className='object-cover rounded-lg'
                      alt={item.title}
                    />
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
