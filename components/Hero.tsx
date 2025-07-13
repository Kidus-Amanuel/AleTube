'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, Variants } from 'framer-motion';

const heroImages = [
  'https://img.youtube.com/vi/PGZtApUov5s/sddefault.jpg',
  'https://img.youtube.com/vi/oez1TAzhXQo/sddefault.jpg',
  'https://img.youtube.com/vi/nOSnJ8gd_HI/sddefault.jpg',
  'https://img.youtube.com/vi/AmN1eiKoMgo/sddefault.jpg',
];

const heroHeadlines = [
  "Reacting to the Hottest Videos Online",
  "Unfiltered Reactions to Viral Content",
  "Join the Reaction Revolution",
  "Reacting to the Hottest Videos Online",
];

const textVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.15, ease: 'easeInOut' },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeInOut' },
  },
};

const carouselVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 1.05,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '1%',
    opacity: 0,
    scale: 1.05,
  }),
};

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1));
  }, []);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1));
    resetTimer();
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    resetTimer();
  };

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (progressRef.current) progressRef.current.style.width = '0%';

    timerRef.current = setInterval(() => nextSlide(), 6000);

    if (progressRef.current) {
      progressRef.current.style.transition = 'none';
      progressRef.current.style.width = '0%';
      setTimeout(() => {
        if (progressRef.current) {
          progressRef.current.style.transition = 'width 6s linear';
          progressRef.current.style.width = '100%';
        }
      }, 10);
    }
  }, [nextSlide]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  return (
    <div className="relative w-full h-screen overflow-hidden py-20 mt-20">
      <div className="absolute inset-0">
        {heroImages.map((img, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            custom={direction}
            variants={carouselVariants}
            initial="enter"
            animate={index === currentIndex ? 'center' : 'exit'}
            exit="exit"
            transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${img})`, filter: 'brightness(0.7)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#111827]/90 via-[#111827]/30 to-[#111827]/90" />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="absolute top-20 left-10 w-16 h-16 rounded-full bg-[#4F46E5]/20 blur-xl"
        animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute bottom-1/3 right-16 w-12 h-12 rounded-full bg-[#FF0000]/30 blur-xl"
        animate={{ y: [0, 15, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />

      <div className="relative z-10 flex pt-24 py-16 sm:py-10 flex-col justify-center items-center h-full px-4 sm:px-6 md:px-8 text-center">
        <motion.div className="max-w-4xl px-4" variants={textVariants} initial="hidden" animate="visible">
          <motion.div className="mb-8" variants={itemVariants}>
            <motion.div className="flex justify-center mb-6" variants={itemVariants}>
              <div className="bg-[#FF0000] text-white px-4 py-1.5 rounded-full text-sm font-bold flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
                LIVE REACTIONS
              </div>
            </motion.div>

            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" variants={itemVariants}>
              {heroHeadlines[currentIndex]}
            </motion.h1>

            <motion.p className="text-xl md:text-2xl text-[#E5E7EB] mb-10 max-w-2xl mx-auto leading-relaxed font-light" variants={itemVariants}>
              Authentic reactions to the latest viral videos, music, and internet sensations. Join the community of over 150k subscribers!
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-2 bg-white/10 dark:bg-white/20 z-20">
        <div ref={progressRef} className="h-full bg-gradient-to-r from-[#FF0000] to-[#4F46E5] w-0 rounded-r-full" />
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3.5 h-3.5 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-white scale-125 ring-2 ring-[#FF0000] ring-offset-2 ring-offset-[#111827]'
                : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 p-3 sm:p-4 rounded-full bg-[#111827]/80 hover:bg-[#111827] text-white z-20 transition-all group shadow-xl"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 p-3 sm:p-4 rounded-full bg-[#111827]/80 hover:bg-[#111827] text-white z-20 transition-all group shadow-xl"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
