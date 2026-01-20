"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FaBolt, FaEnvelope, FaFire } from 'react-icons/fa';

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

const FlipCard = ({ data }: { data: CardData }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="group perspective-[1000px] w-full aspect-square cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : 'group-hover:[transform:rotateY(180deg)]'
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
        </div>
      </div>
    </div>
  );
};

const FlipCardSection = () => {
  return (
    <section className="bg-[#f2efe9] py-24 px-6 md:px-16 w-full">
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
