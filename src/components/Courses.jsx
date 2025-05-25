
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import mlBackground from '../assets/images/course card 1.png';
import aiBackground from '../assets/images/course card 2.png';
import laravelBackground from '../assets/images/course card 3.png';
import reactBackground from '../assets/images/course card 4.png';

// Course card component to display individual course details
const CourseCard = ({ id, title, price, isFree, image, rating, students, cardHeight }) => {
  const { t, i18n } = useTranslation();
  
  // Determine if the current language is Arabic
  const isArabic = i18n.language === 'ar';

  return (
    <Link
      to={`/course/${id}`}
      className={`block bg-[#1A0B2E] rounded-lg overflow-hidden relative w-full ${cardHeight || 'h-80'} cursor-pointer hover:shadow-lg transition-shadow duration-200 ${isArabic ? 'font-cairo' : ''}`}
      style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute bottom-4 left-4 right-4 text-left">
        <h3 className={`text-white text-xl font-semibold mb-2 ${isArabic ? 'font-cairo' : ''}`}>{title}</h3>
        <div className="flex items-center mb-2">
          <svg
            className="w-5 h-5 text-yellow-400 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className={`text-white text-sm ${isArabic ? 'font-cairo' : ''}`}>{rating.toFixed(1)} ({students})</span>
        </div>
        <p className={`text-white text-sm ${isArabic ? 'font-cairo' : ''}`}>30 {t('common.hours')}, 20 {t('common.lectures')}</p>
      </div>
      <div className={`absolute bottom-4 right-4 text-blue-400 text-xl font-bold ${isArabic ? 'font-cairo' : ''}`}>
        {isFree ? t('common.free') : `$${price}`}
      </div>
    </Link>
  );
};

const Courses = () => {
  const { t, i18n } = useTranslation();

  // Determine if the current language is Arabic
  const isArabic = i18n.language === 'ar';

  const courses = [
    {
      id: 1,
      title: t('courses.machineLearning'),
      price: 0,
      isFree: true,
      image: mlBackground,
      rating: 4.8,
      students: 1200
    },
    {
      id: 2,
      title: t('courses.aiDevelopment'),
      price: 35,
      isFree: false,
      image: aiBackground,
      rating: 4.8,
      students: 1200
    },
    {
      id: 3,
      title: t('courses.laravelDevelopment'),
      price: 0,
      isFree: true,
      image: laravelBackground,
      rating: 4.7,
      students: 2000
    },
    {
      id: 4,
      title: t('courses.reactNative'),
      price: 24.99,
      isFree: false,
      image: reactBackground,
      rating: 4.9,
      students: 1500
    }
  ];

  return (
    <>
      {/* Mobile only */}
      <div className="block md:hidden relative bg-white dark:bg-[#1A0B2E] py-10 min-h-screen overflow-hidden">
        {/* Decorative circles */}
        <span className="absolute top-0 left-0 w-20 h-20 border-2 border-[#8169F1] opacity-30 rounded-full"></span>
        <span className="absolute top-1/2 right-0 w-16 h-16 border-2 border-[#8169F1] opacity-30 rounded-full"></span>
        <span className="absolute bottom-0 left-1/2 w-20 h-20 border-2 border-[#8169F1] opacity-30 rounded-full"></span>
        {/* Title */}
        <h2 className={`text-xl font-bold text-[#3A2E7B] dark:text-[#1DBFFE] text-center mb-8 ${isArabic ? 'font-cairo' : ''}`}>
          {t('courses.title')}
        </h2>
        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 px-2">
          {courses.slice(0, 2).map((course) => (
            <div key={course.id} className="w-full aspect-square">
              <CourseCard {...course} cardHeight="h-full" />
            </div>
          ))}
        </div>
        {/* Button */}
        <div className="flex justify-end px-4 mt-10">
          <button
            className={`text-white px-8 py-2 rounded-full bg-gradient-to-b from-[#1DBFFE] to-[#4A3D8B] text-base font-semibold shadow ${isArabic ? 'font-cairo' : ''}`}
          >
            {t('courses.viewMore')}
          </button>
        </div>
      </div>
      {/* Desktop only */}
      <div className="hidden md:block relative">
        <div className="bg-white dark:bg-[#1A0B2E] py-20 transition-colors duration-300 overflow-hidden">
          {/* Decorative circles */}
          <span className="absolute top-0 left-0 w-32 h-32 border-2 border-[#8169F1] opacity-30 rounded-full md:w-40 md:h-40"></span>
          <span className="absolute top-1/2 right-0 w-24 h-24 border-2 border-[#8169F1] opacity-30 rounded-full md:w-32 md:h-32"></span>
          <span className="absolute bottom-0 left-1/2 w-32 h-32 border-2 border-[#8169F1] opacity-30 rounded-full md:w-40 md:h-40"></span>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className={`text-3xl md:text-4xl font-bold text-primary dark:text-[#1DBFFE] mb-4 ${isArabic ? 'font-cairo' : ''}`}>
                {t('courses.title')}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {courses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
            <div className="flex justify-end mt-14">
              <button
                className={`text-white px-10 py-2 rounded-lg bg-gradient-to-b from-secondary to-primary hover:from-primary hover:to-secondary transition dark:from-[#1DBFFE] dark:to-[#4A3D8B] ${isArabic ? 'font-cairo' : ''}`}
              >
                {t('courses.viewMore')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;