
import React from 'react';
import { useTranslation } from 'react-i18next';
import onlineclasses from '../assets/images/onlineclasses.png';

// Section highlighting online classes with professional instructors
const OnlineClasses = () => {
  const { t } = useTranslation();

  const features = [
    t('onlineClasses.features.comprehensive'),
    t('onlineClasses.features.expert'),
    t('onlineClasses.features.weekly'),
    t('onlineClasses.features.community'),
    t('onlineClasses.features.certification'),
  ];

  return (
    <div className="bg-white dark:bg-[#13022E] py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout (unchanged) */}
        <div className="block md:hidden space-y-6">
          <div className="relative w-[90%] mx-auto">
            <div className="rounded-lg overflow-hidden">
              <img
                src={onlineclasses}
                alt="Professional Instructors"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#4A3D8B]/20 rounded-full z-0"></div>
          </div>
          <div className="space-y-4 text-left pr-8 pl-4">
            <h2 className="text-2xl font-bold text-[#1DBFFE]">
              Online Classes With Professional
              <br />
              Instructors
            </h2>
            <p className="text-gray-900 dark:text-white">
              Our Courses Cover All Fields in
              <br />
              Programming World, from Beginner to
              <br />
              Advanced Levels
              <br />
              learn with expert guidance to build your
              <br />
              career
            </p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {t('onlineClasses.description3')}
            </h2>
            <div className="space-y-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="text-gray-900 dark:text-white text-sm">•</span>
                  <span className="text-gray-900 dark:text-white text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative w-[90%] md:w-[80%] mx-auto">
            <div className="rounded-lg overflow-hidden">
              <img
                src={onlineclasses}
                alt="Professional Instructors"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#4A3D8B]/20 rounded-full z-0"></div>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1DBFFE]">
              {t('onlineClasses.title')}
            </h2>
            <p className="text-gray-900 dark:text-white">
              Our Courses Cover All Fields in Programming World, from Beginner to
              <br />
              Advanced Levels
              <br />
              learn with expert guidance to build your career
            </p>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              {t('onlineClasses.description3')}
            </h3>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <span className="text-gray-900 dark:text-white text-sm">•</span>
                  <span className="text-gray-900 dark:text-white text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineClasses;