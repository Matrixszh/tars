"use client";
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { FaBolt, FaEnvelope, FaFire, FaRocket } from 'react-icons/fa';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { EmblaCarouselType } from 'embla-carousel';

interface CardData {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}
const cardData: CardData[] = [
  {
    id: 1,
    icon: <FaBolt size={200} className="text-[#1c1c1c]" />,
    title: "Performance-Driven Strategy",
    description: "We don’t guess — we analyze. Every campaign is built on real data, audience insights, and measurable KPIs to ensure consistent growth and ROI.",
    imageSrc: "/cu.png",
    imageAlt: "Mountain landscape with dynamic lighting"
  },
  {
    id: 2,
    icon: <FaEnvelope size={200} className="text-[#1c1c1c]" />,
    title: "Creative Brand Storytelling",
    description: "From scroll-stopping visuals to compelling narratives, we craft content that builds emotional connection and makes your brand unforgettable.",
    imageSrc: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
    imageAlt: "Abstract lights representing digital creativity"
  },
  {
    id: 3,
    icon: <FaFire size={200} className="text-[#1c1c1c]" />,
    title: "Paid Ads That Convert",
    description: "We design high-converting ad funnels across Meta, Google, and other platforms — optimizing every click, impression, and conversion.",
    imageSrc: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80",
    imageAlt: "City view from above representing reach and scale"
  },
  {
    id: 4,
    icon: <FaRocket size={200} className="text-[#1c1c1c]" />,
    title: "Scalable Digital Growth",
    description: "Whether you're a startup or scaling brand, our systems are built to grow with you — expanding reach, leads, and revenue sustainably.",
    imageSrc: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80",
    imageAlt: "Rocket launch symbolizing rapid growth"
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
        <div className="absolute w-full h-full [backface-visibility:hidden] bg-[#1c3e8d] border-4 border-[#1c1c1c]">
          <div className="relative w-full h-full">
             <Image 
               src={data.imageSrc}
               alt={data.imageAlt}
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
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#1c3e8d] text-[#f2efe9] p-6 flex flex-col justify-center border-4 border-[#1c1c1c]">
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
