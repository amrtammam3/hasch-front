
import React, { useState } from 'react';
import groubstudent from '../assets/images/group-photo.png';
import student from '../assets/images/student.png';
import quoteMark from '../assets/images/quote-mark.png';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

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

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      {/* Mobile only */}
      <div
        dir={isArabic ? 'rtl' : 'ltr'}
        className="block md:hidden min-h-screen bg-gradient-to-r from-[#4A3D8B] via-[#51449C] to-[#4A3D8B] px-4 py-8 relative overflow-hidden dark:bg-gradient-to-r dark:from-[#4A3D8B] dark:to-[#13022E]"
      >
        {/* Title and dots */}
        <div className={isArabic ? 'pr-4 mb-6 relative z-20' : 'pl-4 mb-6 relative z-20'}>
          <h2 className="text-white text-2xl font-bold leading-tight">
            <span className="block">{t('testimonials.title')}</span>
            <span className="block">
              {t('testimonials.subtitle')} <span className="font-extrabold">.....</span>
            </span>
          </h2>
        </div>
        <div className={isArabic ? 'relative flex justify-end items-center mb-44' : 'relative flex justify-start items-center mb-44'}>
          <div
            className={isArabic ? 'absolute left-4 -top-16 w-54 h-48 rounded-full border-0' : 'absolute right-4 -top-16 w-54 h-48 rounded-full border-0'}
          >
            <img
              src={groubstudent}
              alt="Students working together"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* Testimonial card */}
        <div
          className="relative bg-transparent rounded-2xl px-4 py-6 mb-8 border-2 border-dashed border-[#1DBFFE] w-[90%] mx-auto"
          style={{ maxWidth: 400 }}
        >
          <div className="flex items-center mb-4">
            {isArabic ? (
              <>
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mx-3 text-white font-bold text-base">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="mr-auto w-10 h-10 opacity-50 flex items-center justify-end">
                  <img
                    src={quoteMark}
                    alt="Quote mark"
                    className="w-full h-full object-contain transform scale-x-[-1]"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-3 text-white font-bold text-base">
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
          <p className={isArabic ? 'text-white text-sm leading-relaxed whitespace-pre-line text-right' : 'text-white text-sm leading-relaxed whitespace-pre-line'}>
            {testimonials[currentTestimonial].text}
          </p>
        </div>
        {/* Navigation dots */}
        <div className={isArabic ? 'flex justify-center mt-2 space-x-2 space-x-reverse' : 'flex justify-center mt-2 space-x-2'}>
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
      {/* Desktop only */}
      <div className="hidden md:block">
        <div className="py-20 bg-gradient-to-r from-[#4A3D8B] via-[#51449C] to-[#4A3D8B] transition-colors duration-300 dark:bg-gradient-to-r dark:from-[#4A3D8B] dark:to-[#13022E]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1DBFFE] dark:text-[#1DBFFE] mb-6">
                {t('testimonials.title')} {t('testimonials.subtitle')}
              </h2>
              <p className="hidden"></p>
            </div>
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-12">
              <div
                className="p-8 w-full md:w-1/2 relative z-10 mx-auto mb-8 md:mb-0"
                style={{
                  border: '2px dashed #1DBFFE', 
                }}
              >
                <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
                  <div className="flex flex-col items-center md:flex-row md:items-center justify-between w-full gap-4">
                    <div className="flex items-center gap-4 justify-center md:justify-start w-full">
                      <div className="w-20 h-20 rounded-full overflow-hidden">
                        <img
                          src={testimonials[currentTestimonial].image}
                          alt={testimonials[currentTestimonial].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-white font-semibold text-sm uppercase">
                        {testimonials[currentTestimonial].name}
                      </div>
                    </div>
                    <div className="w-12 h-12 mx-auto md:mx-0">
                      <img
                        src={quoteMark}
                        alt="Quote mark"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <p className="text-white text-base leading-relaxed whitespace-pre-line">
                    {testimonials[currentTestimonial].text}
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 flex justify-center md:block">
                <div className="relative">
                  <img
                    src={groubstudent}
                    alt="Students working together"
                    className="w-48 h-48 md:w-full md:h-72 object-cover rounded-full mx-auto"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-10 space-x-3">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index % testimonials.length)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentTestimonial === (index % testimonials.length)
                      ? 'bg-[#4A3D8B]'
                      : 'bg-[#C1C1F4] opacity-50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;