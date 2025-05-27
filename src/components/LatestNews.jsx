import React from 'react';
// Importing the useTranslation hook from react-i18next for internationalization
import { useTranslation } from 'react-i18next';

// Importing images to be used in the news cards
import news1 from '../assets/images/news1.png';
import news2 from '../assets/images/news2.png';
import news3 from '../assets/images/news3.png';

// Latest news section displaying news cards
const LatestNews = () => {
  // Accessing translation function (t) and current language (i18n)
  const { t, i18n } = useTranslation();

  // Determine if the current language is Arabic for font switching
  const isArabic = i18n.language === 'ar';

  // Array of news items with id, translated title, descriptions, and images
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
    // Outer wrapper with gradient background and responsive padding
    <div className="py-20 bg-gradient-to-r from-[#4A3D8B] to-[#5A4D9B] dark:from-[#13022E] dark:to-[#4A3D8B] transition-colors duration-300">
      {/* Container with max-width and horizontal padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title centered */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold text-[#FFFFFF] dark:text-[#1DBFFE] mb-4 ${isArabic ? 'font-cairo' : ''}`}>
            {t('news.title')}
          </h2>
        </div>

        {/* Grid layout for news cards - 2 columns on small screens, 3 on medium+ */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {/* Render different number of items based on screen width (2 on small screens) */}
          {(window.innerWidth < 768 ? newsItems.slice(0, 2) : newsItems).map((item) => (
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

        {/* View more button aligned to the right */}
        <div className="flex justify-end mt-14">
          <button
            className={`text-white px-10 py-2 rounded-lg bg-gradient-to-b from-secondary to-primary hover:from-primary hover:to-secondary transition dark:from-[#1DBFFE] dark:to-[#4A3D8B] ${isArabic ? 'font-cairo' : ''}`}
          >
            {t('news.viewMore')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;







