'use client';
import React, { useState, useEffect } from 'react';
import BustPoster1 from '../../assets/CarouselImage/BustPoster1.jpg';
import BustPoster2 from '../../assets/CarouselImage/BustPoster2.jpg';
import BustPoster from '../../assets/CarouselImage/BustPoster.jpg';
import BustPoster3 from '../../assets/CarouselImage/BustPoster3.jpg';
import BustPoster4 from '../../assets/CarouselImage/BustPoster4.jpg';



const AutoCarousel = () => {
  const images = [BustPoster1, BustPoster2, BustPoster, BustPoster3, BustPoster4,BustPoster2, BustPoster];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (images.length - 2));
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      
      <div className="relative w-full mx-auto overflow-hidden shadow-lg md:h-[300px] lg:h-[300px] md:flex items-center justify-center hidden bg-black">
        <div
          className="flex max-w-[1920px] h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {images.map((image, index) => (
            <img key={index} src={image} alt={`carousel-${index}`} className="h-full flex-shrink-0 w-1/3" />
          ))}
        </div>
      </div>
    </>
  );
};

export default AutoCarousel;
