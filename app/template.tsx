"use client";

import { motion } from "motion/react";
import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const letters = Array.from("TARS");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
    },
  };

  const letterVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1c3e8d]"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{
          delay: 2,
          duration: 0.8,
          ease: [0.76, 0, 0.24, 1], // Custom bezier for smooth slide
        }}
      >
        <div className="flex flex-col items-center justify-center">
          <motion.div
            className="flex overflow-hidden text-white text-8xl md:text-9xl font-bold tracking-widest font-['Poppins']"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {letters.map((letter, index) => (
              <motion.span key={index} variants={letterVariants}>
                {letter}
              </motion.span>
            ))}
          </motion.div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-white text-xl md:text-2xl font-light tracking-[0.5em] mt-4 font-['Poppins']"
          >
            MARKETING
          </motion.span>
        </div>
      </motion.div>
      {children}
    </>
  );
}
