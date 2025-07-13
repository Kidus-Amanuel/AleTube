'use client';
import React, { useState, useEffect } from 'react';
import { ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface MerchItem {
  image: string;
  title: string;
  price: string;
  description: string;
  category?: string;
  rating?: number;
  reviewCount?: number;
}

export default function Merch() {
  const merchItems: MerchItem[] = [
    {
      image: "https://i.pinimg.com/1200x/d2/83/70/d28370addd76af26ef5a011baeb36b4a.jpg",
      title: "Retro Hoodie",
      price: "$45.00",
      description: "Cozy and cool, limited edition.",
      category: "Clothing",
      rating: 4.8,
      reviewCount: 142
    },
    {
      image: "https://i.pinimg.com/1200x/83/8c/87/838c87e26aedbdfd28fdcf108b238138.jpg",
      title: "Street Cap",
      price: "$20.00",
      description: "Classic fit, perfect shade.",
      category: "Accessories",
      rating: 4.5,
      reviewCount: 89
    },
    {
      image: "https://i.pinimg.com/1200x/d7/28/c7/d728c75f898f0e8682a5791f9a16aa4d.jpg",
      title: "Graphic Tee",
      price: "$28.00",
      description: "100% cotton with custom art.",
      category: "Clothing",
      rating: 4.7,
      reviewCount: 203
    },
    {
      image: "https://i.pinimg.com/1200x/83/0d/c5/830dc57e6faf248cc41f656796fa93a0.jpg",
      title: "Signature Mug",
      price: "$18.00",
      description: "Start your day in style",
      category: "Home",
      rating: 4.9,
      reviewCount: 56
    },
    {
      image: "https://i.pinimg.com/736x/97/16/db/9716dbd52cd3a3744db7bb256502d055.jpg",
      title: "Bucket Hat",
      price: "$18.00",
      description: "Sun-ready & stylish.",
      category: "Accessories",
      rating: 4.6,
      reviewCount: 72
    },
    {
      image: "https://i.pinimg.com/736x/6f/bb/a1/6fbba15a0aef51619e51d1536af91518.jpg",
      title: "Canvas Tote",
      price: "$15.00",
      description: "Sustainable & spacious.",
      category: "Accessories",
      rating: 4.4,
      reviewCount: 118
    },
  ];

  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1); // small screens
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2); // medium screens
      } else {
        setItemsPerSlide(3); // large screens
      }
    };

    updateItemsPerSlide(); // initial check

    window.addEventListener('resize', updateItemsPerSlide);
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);

  const totalSlides = Math.ceil(merchItems.length / itemsPerSlide);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const goToPrev = () => {
    setCurrentIndex(prev => (prev === 0 ? totalSlides - 1 : prev - 1));
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev === totalSlides - 1 ? 0 : prev + 1));
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered, totalSlides]);

  return (
    <div className="py-16 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-500">
          Featured Merch
        </h2>
        <p className="text-gray-400">
          Support the channel by grabbing some exclusive gear!
        </p>
      </div>

      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${100 * totalSlides}%`,
            transform: `translateX(-${(100 / totalSlides) * currentIndex}%)`,
          }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => {
            const start = slideIndex * itemsPerSlide;
            const slideItems = merchItems.slice(start, start + itemsPerSlide);
            return (
              <div
                key={slideIndex}
                className="flex gap-6 px-2 shrink-0"
                style={{ width: `${100 / totalSlides}%` }}
              >
                {slideItems.map((item, i) => (
                  <div
                    key={i}
                    className="bg-gray-800 rounded-xl w-full overflow-hidden hover:shadow-2xl transition-all group"
                  >
                    <div className="relative">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {item.category && (
                        <div className="absolute top-3 right-3 bg-amber-500 text-black text-xs px-2 py-1 rounded-full">
                          {item.category}
                        </div>
                      )}
                    </div>
                    <div className="p-4 text-left">
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="text-sm text-gray-400 mb-2">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-amber-400 font-bold text-xl">{item.price}</span>
                        <button className="bg-amber-500 text-black px-3 py-1 rounded flex items-center hover:bg-amber-600">
                          <ShoppingCart size={16} className="mr-1" />
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        {/* Arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 p-3 rounded-full"
        >
          <ChevronLeft size={24} className="text-white" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 p-3 rounded-full"
        >
          <ChevronRight size={24} className="text-white" />
        </button>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-3 h-3 rounded-full ${
                i === currentIndex ? 'bg-amber-500 scale-125' : 'bg-gray-700 hover:bg-amber-400'
              } transition-all`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
