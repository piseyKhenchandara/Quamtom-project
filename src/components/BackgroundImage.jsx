'use client';
import { useEffect, useRef, useState } from 'react';
import AncientGreceD3D from '../assets/HeaderImage/3Dburst.png';

const BackgroundImage = () => {
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScrollAndVisibility = () => {
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const element = imageRef.current;

      if (element) {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top < viewportHeight * 0.5 && rect.bottom > 0;

        setIsVisible(isInView && scrollPosition < viewportHeight / 2);
      }
    };

    handleScrollAndVisibility();
    window.addEventListener('scroll', handleScrollAndVisibility);

    return () => {
      window.removeEventListener('scroll', handleScrollAndVisibility);
    };
  }, []);

  return (
    <img
      ref={imageRef}
      src={AncientGreceD3D}
      alt="Left Background"
      className={`absolute left-0 md:w-[800px] md:h-[400px] transform -translate-x-30 translate-y-50 xl:inline-block 
        md:-translate-x-70 z-10 transition-opacity duration-500 hidden
        ${isVisible ? 'opacity-100 visible image-animate' : 'opacity-0 invisible'}`}
    />
  );
};

export default BackgroundImage;