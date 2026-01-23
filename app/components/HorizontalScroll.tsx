'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';

const items = [
  {
    id: 1,
    title: "PASSION",
    color: "bg-[#1c1c1c]",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
  },
  {
    id: 2,
    title: "WORK",
    color: "bg-[#1c3e8d]",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop"
  },
  {
    id: 3,
    title: "MOTIVATION",
    color: "bg-[#1c1c1c]",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=600&fit=crop"
  },
  {
    id: 4,
    title: "INSPIRATION",
    color: "bg-[#1c3e8d]",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=600&fit=crop"
  },
  {
    id: 5,
    title: "BELIEVE",
    color: "bg-[#1c1c1c]",
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

        {/* Horizontal Scroll Section */}
        <section ref={targetRef} className='relative h-[500vh]'>
          <div className='sticky top-0 flex h-screen items-center overflow-hidden'>
            <motion.div style={{ x }} className='flex'>
              {items.map((item) => (
                <div 
                  key={item.id} 
                  className={`relative h-[200vh] w-screen ${item.color} flex flex-col justify-center items-center flex-shrink-0`}
                >
                  <h2 className='text-[15vw] md:text-[15vw] font-semibold text-[white] '>
                    {item.title}
                  </h2>
                  <div className='relative w-[300px] h-[300px] md:w-[1000px] md:h-[500px] shadow-2xl pb-10'>
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
