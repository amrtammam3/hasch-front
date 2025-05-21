import React from 'react';
import { useTranslation } from 'react-i18next';
import news1 from '../assets/images/news1.png';
import news2 from '../assets/images/news2.png';
import news3 from '../assets/images/news3.png';

// Latest news section displaying news cards
const LatestNews = () => {
  const { t } = useTranslation();

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
    <div className="py-20 bg-gradient-to-r from-[#13022E] to-[#4A3D8B] dark:from-[#13022E] dark:to-[#4A3D8B] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-[#1DBFFE] mb-4">
            {t('news.title')}
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {(window.innerWidth < 768 ? newsItems.slice(0, 2) : newsItems).map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 aspect-square object-cover"
              />
              <div className="pt-4 text-center">
                <h3 className="text-white text-lg font-semibold mb-1">
                  {item.title}
                </h3>
                <p className="text-white text-sm mb-1">{item.description1}</p>
                <p className="text-white text-sm">{item.description2}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-14">
          <button
            className="text-white px-6 py-2 rounded-lg bg-gradient-to-b from-secondary to-primary hover:from-primary hover:to-secondary transition dark:from-[#1DBFFE] dark:to-[#4A3D8B]"
          >
            {t('news.viewMore')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;