
import React from 'react';
import laptopMockup from '../assets/images/laptop-mockup.png';
import phonemockup from '../assets/images/mobile-mockup.png';
import ellipse16 from '../assets/images/Ellipse 16.png';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#13022E] to-[#4A3D8B] min-h-screen flex items-center overflow-hidden">
      {/* Ellipse Images */}
      <div className="absolute inset-0">
        {/* Ellipse above "In Smart" */}
        <img
          src={ellipse16}
          alt="Ellipse"
          className="absolute w-18 h-18 top-32 left-1/3 transform -translate-x-1/2"
        />
        {/* Ellipse left of "Build" */}
        <img
          src={ellipse16}
          alt="Ellipse"
          className="absolute w-18 h-18 top-40 left-16"
        />
        {/* Ellipse below "Solution" */}
        <img
          src={ellipse16}
          alt="Ellipse"
          className="absolute w-18 h-18 bottom-40 left-1/4 transform -translate-x-1/2"
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 max-w-xl ml-24 mt-[-100px]">
            <h1 className="text-[32px] lg:text-[36px] font-bold text-white leading-tight">
              Build Your <span className="text-[#49D7FC]">Website</span> In Smart <br /> Way
            </h1>
            <p className="text-xl text-white-200">
              Start your career with the most skilled <br />programmers and designers
            </p>
            <p className="text-lg text-white-200">
              The best solution to success
            </p>
          </div>

          {/* Device Mockups */}
          <div className="relative">
            <div className="relative z-10 transform -translate-x-36 pt-40">
              <img
                src={laptopMockup}
                alt="Laptop Mockup"
                className="w-full max-w-3xl scale-110"
              />
              <img
                src={phonemockup}
                alt="Phone Mockup"
                className="absolute -right-20 top-[75%] transform -translate-y-1/2 w-1/3 scale-110"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full"
          height="400"
          viewBox="0 0 1440 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* Background wave */}
          <path
            d="M0 250L120 270C240 290 480 330 720 340C960 350 1200 330 1440 310L1440 400L0 400Z"
            fill="#13022E"
            fillOpacity="0.8"
          />
          {/* Middle wave */}
          <path
            d="M0 300L120 310C240 320 480 340 720 350C960 360 1200 350 1440 340L1440 400L0 400Z"
            fill="#4A3D8B"
            fillOpacity="0.4"
          />
          {/* Top wave */}
          <path
            d="M0 340L120 345C240 350 480 360 720 365C960 370 1200 365 1440 360L1440 400L0 400Z"
            fill="#13022E"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;