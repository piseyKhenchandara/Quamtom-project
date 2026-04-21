'use client';
import React, { useState, useRef } from 'react';
import Premium1 from '../../assets/HoodiesImage/PremiumHoodies1.png';
import Premium2 from '../../assets/HoodiesImage/PremiumHoodies2.png';
import Premium3 from '../../assets/HoodiesImage/PremiumHoodies3.png';

const PremiumsHoodies = () => {
  const images = [Premium1,Premium2,Premium3];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const mainImgRef = useRef(null);

  const updateImages = (direction = 'next') => {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  const changeImage = (index) => {
    const direction = index > currentIndex ? 'next' : 'prev';
    setCurrentIndex(index);
    updateImages(direction);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    updateImages('next');
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    updateImages('prev');
  };

  const prevIndex = (currentIndex - 1 + images.length) % images.length;
  const nextIndex = (currentIndex + 1) % images.length;

  return (
    <div className="bg-black flex flex-col items-center justify-center py-24 w-full">
        <div className=" w-25 h-25 lg:w-70 lg:h-70 md:w-30 md:h-30 rounded-full bg-white flex justify-center items-center transform translate-y-30 md:translate-y-36 lg:translate-y-48 animate-[rgb-glow_2s_infinite_alternate]">
        <div className="w-18 h-18 md:w-20 md:h-20 lg:w-50 lg:h-50 rounded-full bg-black"></div>
    </div>

        <div className="flex flex-col w-full lg:h-[500px] xl:h-[600px]  bg-black shadow-xl rounded-lg overflow-hidden items-center">
        
            <div className="w-4/5 h-4/5 relative flex items-center justify-center">
            <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-black/80 transition-colors z-10 cursor-pointer"
            >
                &lt;
            </button>

            <div className="relative w-full h-full flex items-center justify-center overflow-hidden p-10 cursor-pointer">
                <img
                src={images[prevIndex]}
                alt="Previous"
                className="absolute left-[10%] w-1/4 opacity-30 scale-75 transition-all duration-1200 ease-[cubic-bezier(0.25,0.8,0.25,1)] object-cover"
                />
                <img
                ref={mainImgRef}
                src={images[currentIndex]}
                alt="Main"
                className="w-1/2 z-10 opacity-100 scale-75 transition-all duration-1200 ease-[cubic-bezier(0.25,0.8,0.25,1)] object-cover cursor-pointer"
                />
                <img
                src={images[nextIndex]}
                alt="Next"
                className="absolute right-[10%] w-1/4 opacity-30 scale-75 transition-all duration-1200 ease-[cubic-bezier(0.25,0.8,0.25,1)] object-cover cursor-pointer"
                />
            </div>

            <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-black/80 transition-colors z-10 cursor-pointer"
            >
                &gt;
            </button>
            </div>

            {/* Carousel thumbnails */}
            <div className="w-full h-1/5 bg-black flex flex-row justify-center items-center py-5 space-x-4">
            {images.map((src, index) => (
                <div  key={index}
                src={src}
                alt={`Thumbnail ${index + 1}`}
                className={`bg-white object-cover cursor-pointer rounded-md border-2 transition-all duration-300 ${
                currentIndex === index 
                    ? 'border-gray-600 scale-105' 
                    : 'border-transparent'
                }`}
                onClick={() => changeImage(index)}>

                    
                </div>
            ))}
            </div>
        </div>
    </div>
  );
};

export default PremiumsHoodies;