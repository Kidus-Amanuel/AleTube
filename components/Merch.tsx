'use client';
import React, { useState, useEffect, useRef } from 'react';
import { ShoppingCart, ChevronLeft, ChevronRight, Star } from 'lucide-react';
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
    {
      image: "https://i.pinimg.com/1200x/a4/4b/8d/a44b8d5a00e4325a8cc9edfce6419d35.jpg",
      title: "Phone Case",
      price: "$22.00",
      description: "Durable protection with style",
      category: "Accessories",
      rating: 4.7,
      reviewCount: 94
    },
    {
      image: "https://i.pinimg.com/1200x/14/b1/a4/14b1a438bfc6173f702b99dffd9db17c.jpg",
      title: "Signed Poster",
      price: "$35.00",
      description: "Limited edition artwork",
      category: "Home",
      rating: 5.0,
      reviewCount: 41
    },
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
    {
      image: "https://i.pinimg.com/1200x/a4/4b/8d/a44b8d5a00e4325a8cc9edfce6419d35.jpg",
      title: "Phone Case",
      price: "$22.00",
      description: "Durable protection with style",
      category: "Accessories",
      rating: 4.7,
      reviewCount: 94
    },
    {
      image: "https://i.pinimg.com/1200x/14/b1/a4/14b1a438bfc6173f702b99dffd9db17c.jpg",
      title: "Signed Poster",
      price: "$35.00",
      description: "Limited edition artwork",
      category: "Home",
      rating: 5.0,
      reviewCount: 41
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalSlides = Math.ceil(merchItems.length / itemsPerSlide);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Handle responsiveness
  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
      }
    };

    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);

  // Auto-rotate carousel
  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered, totalSlides]);

  return (
    <div 
      className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black text-white"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="w-16 h-1 bg-amber-500 rounded-full mx-auto"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-500">
            Featured Merchandise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Show your support with exclusive Ale Tube merchandise. Each purchase helps us create more content!
          </p>
        </div>

        {/* Slide wrapper */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${100 * totalSlides}%`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => {
              const startIndex = slideIndex * itemsPerSlide;
              const slideItems = merchItems.slice(startIndex, startIndex + itemsPerSlide);

              return (
                <div
                  key={slideIndex}
                  className="w-full flex justify-center gap-6 px-2 shrink-0"
                  style={{ width: `${100 / totalSlides}%` }}
                >
                  {slideItems.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gray-800 rounded-xl shadow-xl w-full overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                    >
                      <div className="relative overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={45}
                          height={64}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {item.category && (
                          <div className="absolute top-4 right-4 bg-amber-500 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                            {item.category}
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <div className="space-y-2">
                            {item.rating && (
                              <div className="flex items-center">
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <Star 
                                      key={i}
                                      size={16}
                                      fill={i < Math.floor(item.rating!) ? "#F59E0B" : "none"}
                                      className={`${i < Math.floor(item.rating!) ? 'text-amber-400' : 'text-gray-500'}`}
                                    />
                                  ))}
                                </div>
                                <span className="text-sm ml-2">{item.rating} ({item.reviewCount})</span>
                              </div>
                            )}
                            <button className="w-full bg-amber-500 hover:bg-amber-600 text-gray-900 px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center">
                              <ShoppingCart size={18} className="mr-2" />
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                            <p className="text-gray-400 text-sm mb-3">
                              {item.description}
                            </p>
                          </div>
                          <span className="text-amber-400 font-bold text-xl whitespace-nowrap">
                            {item.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 backdrop-blur-sm p-3 rounded-full hover:bg-amber-500 transition-all duration-300 shadow-lg"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 backdrop-blur-sm p-3 rounded-full hover:bg-amber-500 transition-all duration-300 shadow-lg"
          >
            <ChevronRight size={24} className="text-white" />
          </button>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === currentIndex ? 'bg-amber-500 scale-125' : 'bg-gray-700 hover:bg-amber-400'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-amber-500 to-red-500 text-gray-900 font-bold px-8 py-3 rounded-full hover:from-amber-600 hover:to-red-600 transition-all shadow-lg hover:shadow-xl flex items-center mx-auto">
            <span>View All Merchandise</span>
            <ChevronRight size={20} className="ml-2" />
          </button>
        </div>
      </div>

      {/* Additional info */}
      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className="bg-gray-800/50 p-6 rounded-xl flex items-start">
          <div className="bg-amber-500/20 p-3 rounded-lg mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Premium Quality</h3>
            <p className="text-gray-400">All products made with high-quality materials and craftsmanship</p>
          </div>
        </div>
        
        <div className="bg-gray-800/50 p-6 rounded-xl flex items-start">
          <div className="bg-amber-500/20 p-3 rounded-lg mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Worldwide Shipping</h3>
            <p className="text-gray-400">Fast and reliable delivery to any location</p>
          </div>
        </div>
        
        <div className="bg-gray-800/50 p-6 rounded-xl flex items-start">
          <div className="bg-amber-500/20 p-3 rounded-lg mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Easy Returns</h3>
            <p className="text-gray-400">30-day satisfaction guarantee on all purchases</p>
          </div>
        </div>
      </div>
    </div>
  );
}