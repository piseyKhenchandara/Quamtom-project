'use client';

import React, { useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  const [selectedRegion, setSelectedRegion] = useState('UNITED STATES');

  return (
    <footer className="bg-black text-white px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* First column */}
          <div>
            <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-2">
              <h3 className="uppercase text-sm font-medium">May we help you?</h3>
              <span className="transform rotate-180">˄</span>
            </div>
          </div>

          {/* Second column */}
          <div>
            <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-2">
              <h3 className="uppercase text-sm font-medium">The company</h3>
              <span>˅</span>
            </div>
          </div>

          {/* Third column */}
          <div>
            <div>
              <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-2">
                <h3 className="uppercase text-sm font-medium">Store locator</h3>
              </div>
              <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-2">
                <span className="text-sm text-gray-400">Country/Region, City</span>
                <span>˃</span>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="uppercase text-sm font-medium mb-4">Sign up for QUANTOM updates</h3>
              <p className="text-xs text-gray-400 mb-4">
                By entering your email address below, you consent to receiving our newsletter with access to our latest collections, events and initiatives. More details on this are provided in our <a href="#" className="underline">Privacy Policy</a>
              </p>
              <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-2">
                <span className="text-sm text-gray-400">Email</span>
                <span>˃</span>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="uppercase text-sm font-medium mb-4">Country/Region</h3>
              <div className="mb-4">
                <button className="uppercase text-sm font-medium">
                  {selectedRegion}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Services section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-2 max-w-xs">
            <h3 className="uppercase text-sm font-medium">QUANTOM services</h3>
            <span>˅</span>
          </div>
        </div>

        {/* Logo section */}
        <div className="flex flex-wrap gap-6 mb-8 items-center">
          <div className="w-12 h-12 flex items-center justify-center border border-gray-700 rounded-full">
            <span className="text-xs">®</span>
          </div>
          <div className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-md">
            <span className="text-lg font-bold">Q</span>
          </div>

          <FaFacebook className='text-4xl'/>

          <FaInstagram className='text-4xl' />
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-400 mb-16">
          © 2016 - 2025 Quantom S.p.A - All rights reserved. SIAE LICENCE # Z294/1/1936 and 5647/1/1936
        </div>

        {/* Big logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-8xl font-light tracking-widest">QUANTOM</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
