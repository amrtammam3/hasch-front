import React, { useState } from 'react'; 
import groubstudent from '../assets/images/group-photo.png'; // Import group image asset
import student from '../assets/images/student.png'; // Import student image asset
import quoteMark from '../assets/images/quote-mark.png'; // Import quote mark image asset
import { useTranslation } from 'react-i18next'; // Import internationalization hook
import clsx from 'clsx'; // Import clsx to conditionally combine class names

const Testimonials = () => {
  const { t, i18n } = useTranslation(); // Initialize translation and language detection
  const isArabic = i18n.language === 'ar'; // Boolean to check if current language is Arabic

  // Testimonials array with translated names and texts
  const testimonials = [
    {
      id: 1,
      name: t('testimonials.testimonial1.name'),
      role: '',
      image: student,
      text: t('testimonials.testimonial1.text'),
    },
    {
      id: 2,
      name: t('testimonials.testimonial2.name'),
      role: '',
      image: student,
      text: t('testimonials.testimonial2.text'),
    },
    {
      id: 3,
      name: t('testimonials.testimonial3.name'),
      role: '',
      image: student,
      text: t('testimonials.testimonial3.text'),
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0); // State to track the currently displayed testimonial

  return (
    <>
    <div
  dir={isArabic ? 'rtl' : 'ltr'} // Direction of text depending on language
  className="block md:hidden min-h-screen bg-gradient-to-r from-[#4A3D8B] via-[#51449C] to-[#4A3D8B] px-4 py-8 relative overflow-hidden dark:bg-gradient-to-r dark:from-[#4A3D8B] dark:to-[#13022E]"
>
  {/* Section title */}
  <div className={isArabic ? 'pr-4 mb-6 relative z-20' : 'pl-4 mb-6 relative z-20'}>
    <h2 className={clsx(
      'text-white text-2xl font-bold leading-tight',
      isArabic && 'font-cairo' // Use Cairo font for Arabic
    )}>
      <span className="block">{t('testimonials.title')}</span>
      <span className="block">
        {t('testimonials.subtitle')} <span className="font-extrabold"></span>
      </span>
    </h2>
  </div>

  {/* Student group image positioning */}
  <div className={isArabic ? 'flex justify-end items-center mb-12' : 'relative flex justify-start items-center mb-44'}>
    <div className={isArabic ? 'w-54 h-48 border-0' : 'absolute right-4 -top-16 w-54 h-48 border-0'}>
      <img
        src={groubstudent}
        alt="Students working together"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* Testimonial card */}
  <div
    className={isArabic 
      ? 'relative bg-transparent rounded-2xl px-4 py-6 mb-8 mt-8 border-2 border-dashed border-[#1DBFFE] w-[90%] mx-auto' 
      : 'relative bg-transparent rounded-2xl px-4 py-6 mb-8 mt-8 border-2 border-dashed border-[#1DBFFE] w-[90%] mx-auto'}
    style={{ maxWidth: '400px', minHeight: '250px' }}
  >
    <div className="flex items-center mb-4">
      {isArabic ? (
        // Layout for Arabic - image, name, quote mark from right to left
        <>
          <div className="w-12 h-12">
            <img
              src={testimonials[currentTestimonial].image}
              alt={testimonials[currentTestimonial].name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className={clsx(
            'mx-3 text-white font-bold text-base',
            isArabic && 'font-cairo'
          )}>
            {testimonials[currentTestimonial].name}
          </div>
          <div className="mr-auto w-10 h-10 opacity-50 flex items-center justify-end">
            <img
              src={quoteMark}
              alt="Quote mark"
              className="w-full h-full object-contain transform scale-x-[-1]" // Flip quote mark horizontally for RTL
            />
          </div>
        </>
      ) : (
        // Layout for non-Arabic (LTR)
        <>
          <div className="w-12 h-12">
            <img
              src={testimonials[currentTestimonial].image}
              alt={testimonials[currentTestimonial].name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className={clsx(
            'ml-3 text-white font-bold text-base',
            isArabic && 'font-cairo'
          )}>
            {testimonials[currentTestimonial].name}
          </div>
          <div className="ml-auto w-10 h-10 opacity-50 flex items-center justify-end">
            <img
              src={quoteMark}
              alt="Quote mark"
              className="w-full h-full object-contain"
            />
          </div>
        </>
      )}
    </div>
    {/* Testimonial text */}
    <p className={clsx(
      isArabic ? 'text-white text-sm leading-relaxed whitespace-pre-line text-right' : 'text-white text-sm leading-relaxed whitespace-pre-line',
      isArabic && 'font-cairo'
    )}>
      {testimonials[currentTestimonial].text}
    </p>
  </div>

  {/* Navigation dots for switching between testimonials */}
  <div className={isArabic ? 'flex justify-center mt-2 space-x-2 space-x-reverse' : 'flex justify-center mt-2 space-x-2'}>
    {testimonials.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentTestimonial(index)} // Change current testimonial
        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
          currentTestimonial === index
            ? 'bg-white' // Active dot
            : 'bg-[#C1C1F4] opacity-50' // Inactive dot
        }`}
      />
    ))}
  </div>
    </div>

      {/* Desktop version section */}
      <div className="hidden md:block">
        <div className="py-20 bg-gradient-to-r from-[#9E91D2] via-[#51449C] to-[#4A3D8B] transition-colors duration-300 dark:bg-gradient-to-r dark:from-[#4A3D8B] dark:to-[#13022E]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Title */}
            <div className="text-center mb-16">
              <h2 className={clsx(
                'text-3xl md:text-4xl font-bold text-[#FFFFFF] dark:text-[#1DBFFE] mb-6',
                isArabic && 'font-cairo'
              )}>
                {t('testimonials.title')} {t('testimonials.subtitle')}
              </h2>
              <p className="hidden"></p>
            </div>

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-12">
              {/* Testimonial card */}
              <div className="w-full md:w-1/2 flex flex-col items-center">
                <div
                  className="p-8 w-full relative z-10 mb-8 md:mb-0 before:content-[''] before:absolute before:top-0 before:left-[-2px] before:w-[2px] before:h-[140px] before:border-l-2 before:border-dashed before:border-l-transparent before:border-image-[linear-gradient(to_bottom,#4A3D8B,#1DBFFE)_1] after:content-[''] after:absolute after:top-0 after:right-[-2px] after:w-[2px] after:h-[140px] after:border-r-2 after:border-dashed after:border-r-transparent after:border-image-[linear-gradient(to_bottom,#4A3D8B,#1DBFFE)_1]"
                  style={{
                    border: '2px dashed #1DBFFE',
                    borderTop: '2px dashed #4A3D8B',
                    minHeight: '280px',
                    maxWidth: '550px',
                  }}
                >
                  {/* Card content */}
                  <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
                    <div className="flex flex-col items-center md:flex-row md:items-center justify-between w-full gap-4">
                      {/* User info */}
                      <div className="flex items-center gap-3 justify-center md:justify-start w-full">
                        <div className="w-20 h-20">
                          <img
                            src={testimonials[currentTestimonial].image}
                            alt={testimonials[currentTestimonial].name}
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>
                        <div className={clsx(
                          'text-white font-semibold text-sm uppercase',
                          isArabic && 'font-cairo'
                        )}>
                          {testimonials[currentTestimonial].name}
                        </div>
                      </div>
                      {/* Quote icon */}
                      <div className="w-14 h-12 mx-auto md:mx-0">
                        <img
                          src={quoteMark}
                          alt="Quote mark"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    {/* Testimonial text */}
                    <p className={clsx(
                      'text-white text-base leading-relaxed whitespace-pre-line',
                      isArabic && 'font-cairo'
                    )}>
                      {testimonials[currentTestimonial].text}
                    </p>
                  </div>
                </div>

                {/* Navigation dots */}
                <div className="mt-10 mx-auto w-full max-w-[550px]">
                  <div className={isArabic ? 'flex justify-center space-x-2 space-x-reverse' : 'flex justify-center space-x-2'}>
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          currentTestimonial === index
                            ? 'bg-white'
                            : 'bg-[#C1C1F4] opacity-50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Group image */}
              <div className="w-full md:w-1/3 flex justify-center md:block">
                <div className="relative">
                  <img
                    src={groubstudent}
                    alt="Students working together"
                    className="w-48 h-48 md:w-full md:h-72 "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
