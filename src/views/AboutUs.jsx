import React from 'react';
import RothImage from '../assets/AboutUsImage/RothImage.jpg';
import SeyImage from '../assets/AboutUsImage/SeyImage.jpg';
import Quantom from '../assets/HeaderImage/Quantom.png';
import RunningText from '../components/RunningText';


const AboutUs = () => {
  return (
    <div className="min-h-screen text-gray-500 font-sans">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16 text-center">
        <div className="max-w-7xl mx-auto">
          <div className='flex flex-row  items-center justify-center gap-5' >
            <img src={Quantom} alt="" className=' scale-x-[-1] w-[100px] ' />
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="text-gray-400">Quantom</span>
          </h1>

        
          </div>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Where timeless elegance meets modern sophistication. Crafting luxury apparel that defines your style.
          </p>
        </div>
      </section>
      <div className='bg-gray-200 flex flex-row items-center justify-center h-[50px] w-full text-white'>
        <h1 className='px-5 text-2xl font-bold bg-black p-2'>Partner</h1>
      <RunningText />
      </div>

      {/* Our Story Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-6xl font-semibold mb-6 ">CEO</h2>
            <p className="text-gray-400 mb-4">
              Founded in the heart of fashion's elite, Quantom emerged from a vision to redefine luxury clothing. 
              With meticulous attention to detail and a passion for exquisite craftsmanship, we create pieces that 
              transcend trends and become heirlooms.
            </p>
            <p className="text-gray-400">
              Every thread, every stitch, every design is a testament to our commitment to excellence—because at 
              Quantom, luxury is not just worn, it’s lived.
            </p>
          </div>
          <div className="h-64 md:h-96 flex items-center justify-center">
            <img src={SeyImage} alt="CEO" className="w-[60%] h-[80%]  object-cover  shadow-lg" />
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="h-64 md:h-96 flex items-center justify-center order-last md:order-first">
            <img src={RothImage} alt="CO-CEO" className="w-[60%] h-[80%] object-cover  shadow-lg" />
          </div>
          <div>
            <h2 className="text-3xl md:text-6xl font-semibold mb-6">CO-CEO</h2>
            <p className="text-gray-400 mb-4">
              At Quantom, we envision a world where elegance is effortless and style is eternal. Our collections 
              blend cutting-edge innovation with classic artistry, offering you garments that speak to both 
              heritage and the future.
            </p>
            <p className="text-gray-400">
              We’re not just a brand—we’re a legacy, curating wardrobes for those who dare to stand out with 
              unparalleled grace.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-300 text-black text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Quantom</h2>
          <p className="text-lg md:text-xl mb-8">
            Discover the art of luxury dressing. Explore our collections and elevate your wardrobe today.
          </p>
          
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center">
        <p className="text-gray-400">&copy; 2025 Quantom. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
