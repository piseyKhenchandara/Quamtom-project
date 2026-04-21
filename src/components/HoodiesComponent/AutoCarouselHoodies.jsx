'use client';
import React, { useState, useEffect, useRef } from 'react'; // Correct import (not react-router-dom)
import Poster1 from '../../assets/AutoCarousel/Poster1.jpg';
import Poster2 from '../../assets/AutoCarousel/Poster2.jpg';
import Poster3 from '../../assets/AutoCarousel/Poster3.jpg';


const AutoCarousel = () => {
  const images = [Poster1,Poster2,Poster3,Poster1,Poster2,Poster3];
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
