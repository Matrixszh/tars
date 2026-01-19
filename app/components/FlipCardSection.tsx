"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Zap, Mail, Flame } from 'lucide-react';

interface CardData {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const cardData: CardData[] = [
  {
    id: 1,
    icon: <Zap size={64} className="text-black" />,
    title: "Fast Speed",
    description: "Our network provides the infrastructure to scale decentralized AI3.0 applications on-chain—hyper-scalable permanent data storage, super fast data availability."
  },
  {
    id: 2,
    icon: <Mail size={64} className="text-black" />,
    title: "Social Media Boost",
    description: "Our network provides the infrastructure to scale decentralized AI3.0 applications on-chain—hyper-scalable permanent data storage, super fast data availability."
  },
  {
    id: 3,
    icon: <Flame size={64} className="text-black" />,
    title: "High Performance",
    description: "Our network provides the infrastructure to scale decentralized AI3.0 applications on-chain—hyper-scalable permanent data storage, super fast data availability."
  },
  {
    id: 4,
    icon: <Zap size={64} className="text-black" />,
    title: "Scalability",
    description: "Our network provides the infrastructure to scale decentralized AI3.0 applications on-chain—hyper-scalable permanent data storage, super fast data availability."
  },
  {
    id: 5,
    icon: <Zap size={64} className="text-black" />,
    title: "Fast Speed",
    description: "Our network provides the infrastructure to scale decentralized AI3.0 applications on-chain—hyper-scalable permanent data storage, super fast data availability."
  },
  {
    id: 6,
    icon: <Mail size={64} className="text-black" />,
    title: "Social Media Boost",
    description: "Our network provides the infrastructure to scale decentralized AI3.0 applications on-chain—hyper-scalable permanent data storage, super fast data availability."
  },
  {
    id: 7,
    icon: <Flame size={64} className="text-black" />,
    title: "High Performance",
    description: "Our network provides the infrastructure to scale decentralized AI3.0 applications on-chain—hyper-scalable permanent data storage, super fast data availability."
  },
  {
    id: 8,
    icon: <Zap size={64} className="text-black" />,
    title: "Scalability",
    description: "Our network provides the infrastructure to scale decentralized AI3.0 applications on-chain—hyper-scalable permanent data storage, super fast data availability."
  }
];

const FlipCard = ({ data }: { data: CardData }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleInteraction = () => {
    // Only toggle on click for mobile/touch devices or if user prefers clicking
    // The CSS hover state handles desktop hover
  };

  return (
    <div 
      className="group perspective-1000 w-full aspect-square cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : 'group-hover:rotate-y-180'}`}>
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden bg-[#2b52ba] border-2 border-black">
          <div className="relative w-full h-full">
             <Image 
               src="/hotel.jpg" 
               alt="Card Background" 
               fill
               className="object-cover opacity-50 mix-blend-multiply"
             />
             <div className="absolute inset-0 bg-[#2b52ba]/60 mix-blend-multiply"></div>
             <div className="absolute inset-0 flex items-center justify-center">
                {data.icon}
             </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[#2b52ba] text-white p-6 flex flex-col justify-center border-2 border-black">
           <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">{data.title}</h3>
              <p className="text-sm md:text-base leading-relaxed opacity-90">
                {data.description}
              </p>
           </div>
           {/* Background overlay for readability if needed, reusing the same style */}
           <div className="absolute inset-0 bg-[#2b52ba] -z-0"></div>
        </div>
      </div>
    </div>
  );
};

const FlipCardSection = () => {
  return (
    <section className="bg-[#EFEEE9] py-24 px-6 md:px-16 w-full">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardData.map((card) => (
            <FlipCard key={card.id} data={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlipCardSection;
