import React from 'react';
import Quantom from '../assets/HeaderImage/Quantom.png';
import RunningText from '../components/RunningText';
import Charles from '../assets/BrandLogo/Charles.png';
import Zara from '../assets/BrandLogo/Zara.png';
import Link from 'next/link';

const AboutPartnership = () => {
  return (
    <div className="min-h-screen  text-white font-sans">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-row items-center justify-center gap-5">
            <img src={Quantom} alt="Quantom Logo" className="scale-x-[-1] w-[100px]" />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="text-gray-500">Partnerships</span>
            </h1>
          </div>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto">
            Collaborating with visionaries to elevate luxury and innovation in fashion.
          </p>
        </div>
      </section>

      {/* Running Text Section */}
      <div className="bg-gray-100 flex flex-row items-center justify-center h-[50px] w-full">
        <h1 className="px-5 text-2xl font-bold bg-black p-2 text-white"> Partners</h1>
        <RunningText />
      </div>

      {/* Partnership Details Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-6xl font-semibold mb-6">Our Commitment</h2>
            <p className="text-gray-500 mb-4">
              At Quantom, partnerships are the cornerstone of our success. We align with like-minded creators, 
              artisans, and innovators who share our dedication to excellence and timeless style.
            </p>
            <p className="text-gray-500">
              Together, we weave a tapestry of luxury—blending unique expertise with our vision to craft apparel 
              that transcends the ordinary and redefines sophistication.
            </p>
          </div>
          <div className="h-64 md:h-96 flex items-center justify-center">
            <img
              src={Zara}
              alt="Zara Partnership"
              className="w-[60%] h-[80%] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Why Partner With Us Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="h-64 md:h-96 flex items-center justify-center order-last md:order-first">
            <img
              src={Charles}
              alt="Charles Collaboration"
              className="w-[60%] h-[80%] object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-6xl font-semibold mb-6">Why Partner With Us?</h2>
            <p className="text-gray-500 mb-4">
              We offer our partners access to a world of prestige, craftsmanship, and innovation. By joining forces 
              with Quantom, you become part of a legacy that values quality, creativity, and unparalleled elegance.
            </p>
            <p className="text-gray-500">
              Let’s create something extraordinary together—because true luxury thrives in collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-300 text-black text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Quantom Legacy</h2>
          <p className="text-lg md:text-xl mb-8">
            Ready to collaborate? Connect with us and let’s shape the future of luxury fashion together.
          </p>
          <Link
            href="/about-us"
            className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition duration-300 inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center">
        <p className="text-gray-600">© 2025 Quantom. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPartnership;