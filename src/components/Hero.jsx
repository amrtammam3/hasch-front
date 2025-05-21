

import React from 'react';
import { useTranslation } from 'react-i18next';
import laptopMockup from '../assets/images/laptop-mockup.png';
import phonemockup from '../assets/images/mobile-mockup.png';
import ellipse16 from '../assets/images/Ellipse 16.png';

const Hero = () => {
  const { t } = useTranslation();

  let titleContentDesktop;
  let titleContentMobile;

  if (t('hero.title').includes('انشئ')) {
    const titleParts = t('hero.title').split('موقعك الالكتروني');
    titleContentDesktop = (
      <>
        {titleParts[0]}
        <span className="text-[#1DBFFE]">موق Marlonعك الالكتروني</span>
        {titleParts[1]}
      </>
    );
    titleContentMobile = (
      <>
        {titleParts[0]}
        <span className="text-[#1DBFFE]">موقعك الالكتروني</span>
        {titleParts[1]}
      </>
    );
  } else {
    const titleParts = t('hero.title').split('Website');
    titleContentDesktop = (
      <>
        {titleParts[0]}
        <span className="text-[#1DBFFE]">Website</span>
        {' in smart'}
        <br />
        smart
      </>
    );
    titleContentMobile = (
      <>
        {titleParts[0]}
        <span className="text-[#1DBFFE]">Website</span>
        {' in'}
        <br />
        smart way
      </>
    );
  }

  return (
    <>
      {/* موبايل فقط */}
      <div className="block md:hidden relative bg-gradient-to-r from-[#8169F1] to-[#4A3D8B] dark:from-[#4A3D8B] dark:to-[#13022E] min-h-screen flex items-center overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0">
          <img
            src={ellipse16}
            alt="Ellipse"
            className="absolute w-18 h-18 top-32 left-1/3 transform -translate-x-1/2"
          />
          <img
            src={ellipse16}
            alt="Ellipse"
            className="absolute w-18 h-18 top-40 left-16"
          />
          <img
            src={ellipse16}
            alt="Ellipse"
            className="absolute w-18 h-18 bottom-40 left-1/4 transform -translate-x-1/2"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative pt-0">
          <div className="flex flex-col">
            <h1 className="text-[32px] font-bold text-white dark:text-white leading-tight mb-8 ml-4">
              {titleContentMobile}
            </h1>
            <div className="flex flex-row items-center justify-between w-full">
              <div className="space-y-6 max-w-md ml-4">
                <p className="text-[16px] font-poppins font-bold text-white leading-tight">
                  Start your career with the most skilled programmers and designers
                </p>
                <p className="text-[16px] font-poppins font-bold text-white leading-tight">
                  The best solution to success
                </p>
              </div>
              <div className="relative">
                <div className="relative z-10">
                  <img
                    src={laptopMockup}
                    alt="Laptop Mockup"
                    className="w-full max-w-lg scale-90"
                  />
                  <img
                    src={phonemockup}
                    alt="Phone Mockup"
                    className="absolute -right-4 top-[70%] transform -translate-y-1/2 w-2/5 scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full"
            height="400"
            viewBox="0 0 1440 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0 250L120 270C240 290 480 330 720 340C960 350 1200 330 1440 310L1440 400L0 400Z"
              fill="#E8E4F7"
              fillOpacity="0.8"
              className="dark:fill-[#13022E]"
            />
            <path
              d="M0 300L120 310C240 320 480 340 720 350C960 360 1200 350 1440 340L1440 400L0 400Z"
              fill="#E8E4F7"
              fillOpacity="0.4"
              className="dark:fill-[#4A3D8B]"
            />
            <path
              d="M0 340L120 345C240 350 480 360 720 365C960 370 1200 365 1440 360L1440 400L0 400Z"
              fill="#E8E4F7"
              className="dark:fill-[#13022E]"
            />
          </svg>
        </div>
      </div>

      {/* ديسكتوب فقط */}
      <div className="hidden md:block relative bg-gradient-to-r from-[#8169F1] to-[#4A3D8B] dark:from-[#4A3D8B] dark:to-[#13022E] min-h-screen flex items-center overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0">
          <img
            src={ellipse16}
            alt="Ellipse"
            className="absolute w-18 h-18 top-32 left-1/3 transform -translate-x-1/2"
          />
          <img
            src={ellipse16}
            alt="Ellipse"
            className="absolute w-18 h-18 top-40 left-16"
          />
          <img
            src={ellipse16}
            alt="Ellipse"
            className="absolute w-18 h-18 bottom-40 left-1/4 transform -translate-x-1/2"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 max-w-xl ml-24 mt-[-100px]">
              <h1 className="text-[32px] lg:text-[36px] font-bold text-white dark:text-white leading-tight">
                {titleContentDesktop}
              </h1>
              <p className="text-[20px] font-poppins font-bold text-white leading-tight">
                {t('hero.subtitle')}
              </p>
              <p className="text-[20px] font-poppins font-bold text-white leading-tight">
                {t('hero.description')}
              </p>
            </div>
            <div className="relative">
              <div className="relative z-10 transform -translate-x-36 pt-52">
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
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full"
            height="400"
            viewBox="0 0 1440 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0 250L120 270C240 290 480 330 720 340C960 350 1200 330 1440 310L1440 400L0 400Z"
              fill="#E8E4F7"
              fillOpacity="0.8"
              className="dark:fill-[#13022E]"
            />
            <path
              d="M0 300L120 310C240 320 480 340 720 350C960 360 1200 350 1440 340L1440 400L0 400Z"
              fill="#E8E4F7"
              fillOpacity="0.4"
              className="dark:fill-[#4A3D8B]"
            />
            <path
              d="M0 340L120 345C240 350 480 360 720 365C960 370 1200 365 1440 360L1440 400L0 400Z"
              fill="#E8E4F7"
              className="dark:fill-[#13022E]"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Hero;