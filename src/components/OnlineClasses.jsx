import React from 'react';
import onlineclasses from '../assets/images/onlineclasses.png';

// Section highlighting online classes with professional instructors
const OnlineClasses = () => {
  const features = [
    'Comprehensive Courses',
    'Expert Instructors',
    'Weekly Projects',
    'Community Support',
    'Certification',
  ];

  return (
    <div className="bg-[#13022E] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
              Online Classes With Professional Instructors
            </h2>
            <p className="text-white">
              Our Courses Cover All Fields in Programming World, from Beginner to<br></br> Advanced Levels <br></br> Learn With Expert Guidance To Build Your Career
            </p>
            <p className="text-white">
              what we provide to you....
            </p>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <span className="text-white text-sm">•</span>
                  <span className="text-white text-sm">{feature}</span>
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