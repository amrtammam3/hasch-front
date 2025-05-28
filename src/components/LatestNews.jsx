
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import news images
import news1 from '../assets/images/news1.png';
import news2 from '../assets/images/news2.png';
import news3 from '../assets/images/news3.png';

// Define LatestNews component
const LatestNews = () => {
  const { t, i18n } = useTranslation(); // Access translation function and language info
  const isArabic = i18n.language === 'ar'; // Determine if the current language is Arabic

  // Define the list of news items to display
  const newsItems = [
    {
      id: 1,
      title: t('news.newCourseRelease'),
      description1: t('news.description1'),
      description2: t('news.description2'),
      image: news1,
    },
    {
      id: 2,
      title: t('news.newCourseRelease'),
      description1: t('news.description1'),
      description2: t('news.description2'),
      image: news2,
    },
    {
      id: 3,
      title: t('news.newCourseRelease'),
      description1: t('news.description1'),
      description2: t('news.description2'),
      image: news3,
    },
  ];

  return (
    <>
      {/* Mobile View Layout */}
      <div className="block md:hidden py-20 bg-gradient-to-r from-[#4A3D8B] to-[#5A4D9B] dark:from-[#13022E] dark:to-[#4A3D8B] transition-colors duration-300">
        {/* Container with max-width and horizontal padding */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section title centered */}
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold text-[#FFFFFF] dark:text-[#1DBFFE] mb-4 ${isArabic ? 'font-cairo' : ''}`}>
              {t('news.title')}
            </h2>
          </div>

          {/* Grid layout for news cards */}
          <div className="grid grid-cols-2 gap-8">
            {newsItems.slice(0, 2).map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-lg"
              >
                {/* News image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 aspect-square object-cover"
                />
                {/* Text content below the image */}
                <div className="pt-4 text-center">
                  <h3 className={`text-white text-lg font-semibold mb-1 ${isArabic ? 'font-cairo' : ''}`}>
                    {item.title}
                  </h3>
                  <p className={`text-white text-sm mb-1 ${isArabic ? 'font-cairo' : ''}`}>{item.description1}</p>
                  <p className={`text-white text-sm ${isArabic ? 'font-cairo' : ''}`}>{item.description2}</p>
                </div>
              </div>
            ))}
          </div>

          {/* "View More" button */}
          <div className="flex justify-end mt-14 items-center gap-2">
            <button
              className={`text-white px-4 py-3 rounded-2xl bg-gradient-to-b from-[#1DBFFE] to-[#4A3D8B] text-base font-semibold shadow hover:from-[#4A3D8B] hover:to-[#1DBFFE] transition ${isArabic ? 'font-cairo' : ''}`}
              style={{ minWidth: '120px' }}
            >
              {t('news.viewMore')}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop View Layout */}
      <div className="hidden md:block py-20 bg-gradient-to-r from-[#4A3D8B] to-[#5A4D9B] dark:from-[#13022E] dark:to-[#4A3D8B] transition-colors duration-300">
        {/* Container with max-width and horizontal padding */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section title centered */}
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold text-[#FFFFFF] dark:text-[#1DBFFE] mb-4 ${isArabic ? 'font-cairo' : ''}`}>
              {t('news.title')}
            </h2>
          </div>

          {/* Grid layout for news cards */}
          <div className="grid grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-lg"
              >
                {/* News image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 aspect-square object-cover"
                />
                {/* Text content below the image */}
                <div className="pt-4 text-center">
                  <h3 className={`text-white text-lg font-semibold mb-1 ${isArabic ? 'font-cairo' : ''}`}>
                    {item.title}
                  </h3>
                  <p className={`text-white text-sm mb-1 ${isArabic ? 'font-cairo' : ''}`}>{item.description1}</p>
                  <p className={`text-white text-sm ${isArabic ? 'font-cairo' : ''}`}>{item.description2}</p>
                </div>
              </div>
            ))}
          </div>

          {/* "View More" button */}
          <div className="flex justify-end mt-14 items-center gap-2">
            <button
              className={`text-white px-7 py-2 rounded-lg bg-gradient-to-b from-[#1DBFFE] to-[#4A3D8B] font-semibold shadow hover:from-[#4A3D8B] hover:to-[#1DBFFE] transition ${isArabic ? 'font-cairo' : ''}`}
              style={{ minWidth: '120px' }}
            >
              {t('news.viewMore')}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;