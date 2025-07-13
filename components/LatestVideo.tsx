'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// YouTube video IDs extracted from your links
const videoIds = [
  'XQjfBETEaGw',
  'PGZtApUov5s',
  'h8P7wM4047o',
  'htD5lBwJxds',
  'r2V84iUSxWQ',
  'ZEUvMgfeSoU',
  'Fy3X9AyPH_g'
];

export default function LatestVideo() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  
  return (
    <div className="w-full max-w-7xl mx-auto py-16 px-4 sm:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Latest <span className="text-red-500">Reactions</span>
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full" />
      </div>

      <div className="relative group">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{ 
            clickable: true,
            bulletClass: 'swiper-bullet bg-gray-600 opacity-50',
            bulletActiveClass: 'swiper-bullet-active !bg-red-600 !opacity-100'
          }}
          autoplay={{ 
            delay: 1000,
            disableOnInteraction: false 
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          spaceBetween={30}
          loop={true}
          onInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="pb-14"
        >
          {videoIds.map((id) => (
            <SwiperSlide key={id} className="overflow-hidden rounded-xl group">
              <div className="aspect-video bg-black relative">
                <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
              <div className="mt-4 px-2">
                <h3 className="font-semibold text-white line-clamp-1">
                  {id === 'XQjfBETEaGw' && "INSANE TikTok Fails Compilation!"}
                  {id === 'PGZtApUov5s' && "Reacting to Viral Memes 2024"}
                  {id === 'h8P7wM4047o' && "Top 10 Craziest YouTube Shorts"}
                  {id === 'htD5lBwJxds' && "When Gamers Go TOO FAR..."}
                  {id === 'r2V84iUSxWQ' && "Try Not To Laugh Challenge"}
                  {id === 'ZEUvMgfeSoU' && "Most Awkward Moments Ever"}
                  {id === 'Fy3X9AyPH_g' && "Celebrity Fails Compilation"}
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  {Math.floor(Math.random() * 100) + 50}K views • {Math.floor(Math.random() * 5) + 1} days ago
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation */}
        <button 
          ref={prevRef}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/70 hover:bg-red-600 rounded-full hidden md:flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
          aria-label="Previous video"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          ref={nextRef}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/70 hover:bg-red-600 rounded-full hidden md:flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
          aria-label="Next video"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="text-center mt-10">
        <a 
          href="https://www.youtube.com/@YourChannelName" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-full transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
          </svg>
          View All Videos
        </a>
      </div>
    </div>
  );
}