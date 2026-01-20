"use client";
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { FaBolt, FaEnvelope, FaFire } from 'react-icons/fa';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { EmblaCarouselType } from 'embla-carousel';

interface CardData {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const cardData: CardData[] = [
  {
    id: 1,
    icon: <FaBolt size={200} className="text-[#1c1c1c]" />,
    title: "Fast Speed",
    description: "Our network provides the infrastructure to scale decentralized AI3.0 applications on-chain—hyper-scalable permanent data storage, super fast data availability."
  },
  {
    id: 2,
    icon: <FaEnvelope size={200} className="text-[#1c1c1c]" />,
    title: "Social Media Boost",
    description: "Our network provides the infrastructure to scale decentralized AI3.0 applications on-chain—hyper-scalable permanent data storage, super fast data availability."
  },
  {
    id: 3,
    icon: <FaFire size={200} className="text-[#1c1c1c]" />,
    title: "High Performance",
    description: "Our network provides the infrastructure to scale decentralized AI3.0 applications on-chain—hyper-scalable permanent data storage, super fast data availability."
  },
  {
    id: 4,
    icon: <FaBolt size={200} className="text-[#1c1c1c]" />,
    title: "Scalability",
    description: "Our network provides the infrastructure to scale decentralized AI3.0 applications on-chain—hyper-scalable permanent data storage, super fast data availability."
  },
  {
    id: 5,
    icon: <FaBolt size={200} className="text-[#1c1c1c]" />,
    title: "Fast Speed",
    description: "Our network provides the infrastructure to scale decentralized AI3.0 applications on-chain—hyper-scalable permanent data storage, super fast data availability."
  },
  {
    id: 6,
    icon: <FaEnvelope size={200} className="text-[#1c1c1c]" />,
    title: "Social Media Boost",
    description: "Our network provides the infrastructure to scale decentralized AI3.0 applications on-chain—hyper-scalable permanent data storage, super fast data availability."
  },
  {
    id: 7,
    icon: <FaFire size={200} className="text-[#1c1c1c]" />,
    title: "High Performance",
    description: "Our network provides the infrastructure to scale decentralized AI3.0 applications on-chain—hyper-scalable permanent data storage, super fast data availability."
  },
  {
    id: 8,
    icon: <FaBolt size={200} className="text-[#1c1c1c]" />,
    title: "Scalability",
    description: "Our network provides the infrastructure to scale decentralized AI3.0 applications on-chain—hyper-scalable permanent data storage, super fast data availability."
  }
];

const FlipCard = ({ data, isMobile }: { data: CardData, isMobile?: boolean }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="group perspective-[1000px] w-full aspect-square cursor-pointer relative"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : isMobile ? '' : 'group-hover:[transform:rotateY(180deg)]'
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full [backface-visibility:hidden] bg-[#1c3e8d] border-3 border-[#1c1c1c]">
          <div className="relative w-full h-full">
             <Image 
               src="/hotel.jpg" 
               alt="Card Background" 
               fill
               className="object-cover opacity-50 "
             />
             <div className="absolute inset-0 bg-[#1c3e8d]/60 "></div>
             <div className="absolute inset-0 flex items-center justify-center">
                {data.icon}
             </div>
             {isMobile && !isFlipped && (
               <div className="absolute bottom-4 left-0 right-0 text-center text-[#f2efe9] text-sm font-semibold opacity-80 pointer-events-none">
                 Touch to Flip
               </div>
             )}
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#1c3e8d] text-[#f2efe9] p-6 flex flex-col justify-center border-3 border-[#1c1c1c]">
           <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-4">{data.title}</h3>
              <p className="text-sm md:text-base leading-relaxed opacity-90">
                {data.description}
              </p>
           </div>
           {/* Background overlay for readability if needed, reusing the same style */}
           <div className="absolute inset-0 bg-[#1c3e8d] -z-0"></div>
           {isMobile && isFlipped && (
               <div className="absolute bottom-4 left-0 right-0 text-center text-[#f2efe9] text-sm font-semibold opacity-80 pointer-events-none z-20">
                 Touch to Flip Back
               </div>
             )}
        </div>
      </div>
    </div>
  );
};

const FlipCardSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', containScroll: 'trimSnaps' },
    [Autoplay({ delay: 3000, stopOnInteraction: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-[#f2efe9] py-24 px-6 md:px-16 w-full">
      <div className="max-w-full mx-auto">
        
        {/* Desktop Grid View (Hidden on Mobile) */}
        <div className="hidden lg:grid grid-cols-4 gap-8">
          {cardData.map((card) => (
            <FlipCard key={card.id} data={card} />
          ))}
        </div>

        {/* Mobile Carousel View (Hidden on Desktop) */}
        <div className="lg:hidden flex flex-col gap-8">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex ">
              {cardData.map((card) => (
                <div className="flex-[0_0_100%] sm:flex-[0_0_50%] min-w-0 " key={card.id}>
                  <FlipCard data={card} isMobile={true} />
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 relative z-10">
            {cardData.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === selectedIndex 
                    ? 'bg-[#1c3e8d] scale-125' 
                    : 'bg-[#1c3e8d]/30 hover:bg-[#1c3e8d]/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FlipCardSection;
