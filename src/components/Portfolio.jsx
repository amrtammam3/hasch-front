


import React from 'react';
import { useTranslation } from 'react-i18next';
import portfolio1 from '../assets/images/portfolio1.png';
import portfolio2 from '../assets/images/portfolio2.png';
import portfolio3 from '../assets/images/portfolio3.png';
import portfolio6 from '../assets/images/portfolio6.png';

const Portfolio = () => {
  const { t, i18n } = useTranslation();

  // Determine if the current language is Arabic
  const isArabic = i18n.language === 'ar';

  const projects = [
    {
      id: 1,
      title: t('portfolio.getItDone'),
      image: portfolio1,
      category: t('portfolio.categories.webDesign')
    },
    {
      id: 2,
      title: t('portfolio.welcomeToFlash'),
      image: portfolio2,
      category: t('portfolio.categories.uiUxDesign')
    },
    {
      id: 3,
      title: t('portfolio.nature'),
      image: portfolio3,
      category: t('portfolio.categories.photography')
    },
    {
      id: 4,
      title: t('portfolio.digitalArt'),
      image: portfolio2,
      category: t('portfolio.categories.digitalArt')
    },
    {
      id: 5,
      title: t('portfolio.modernDesign'),
      image: portfolio2,
      category: t('portfolio.categories.webDesign')
    },
    {
      id: 6,
      title: t('portfolio.natureBeauty'),
      image: portfolio6,
      category: t('portfolio.categories.photography')
    }
  ];

  return (
    <>
      {/* Mobile View */}
      <div className="block md:hidden relative bg-white dark:bg-[#1A0B2E] py-10 min-h-screen overflow-hidden">
        <span className="absolute top-0 left-0 w-20 h-20 border-2 border-[#8169F1] opacity-30 rounded-full"></span>
        <span className="absolute top-1/2 right-0 w-16 h-16 border-2 border-[#8169F1] opacity-30 rounded-full"></span>
        <span className="absolute bottom-0 left-1/2 w-20 h-20 border-2 border-[#8169F1] opacity-30 rounded-full"></span>
        <h2 className={`text-xl font-bold text-[#3A2E7B] dark:text-[#1DBFFE] text-center mb-8 ${isArabic ? 'font-cairo' : ''}`}>
          {t('portfolio.title')}
        </h2>
        <div className="grid grid-cols-3 gap-3 px-2" dir="ltr">
          {projects.map((project, idx) => {
            let extraClass = "";
            if (idx === 0) extraClass = "rounded-tl-[60px]";
            if (idx === 5) extraClass = "rounded-br-[60px]";
            return (
              <div key={project.id} className={`overflow-hidden ${extraClass}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-24 object-cover"
                />
              </div>
            );
          })}
        </div>
        <div className="flex justify-end px-4 mt-10 items-center gap-2">
          <span className={`text-white text-sm ${isArabic ? 'font-cairo' : ''}`}>Current language: {i18n.language}</span>
          <button
            className={`text-white px-8 py-2 rounded-full bg-gradient-to-b from-[#1DBFFE] to-[#4A3D8B] text-base font-semibold shadow ${isArabic ? 'font-cairo' : ''}`}
          >
            {t('portfolio.viewMore')}
          </button>
        </div>
      </div>
      {/* Desktop View */}
      <div className="hidden md:block relative bg-white dark:bg-[#1A0B2E] py-20 transition-colors duration-300 overflow-hidden">
        <span className="absolute top-0 left-0 w-32 h-32 border-2 border-[#8169F1] opacity-30 rounded-full md:w-40 md:h-40"></span>
        <span className="absolute top-1/2 right-0 w-24 h-24 border-2 border-[#8169F1] opacity-30 rounded-full md:w-32 md:h-32"></span>
        <span className="absolute bottom-0 left-1/2 w-32 h-32 border-2 border-[#8169F1] opacity-30 rounded-full md:w-40 md:h-40"></span>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold text-primary dark:text-[#1DBFFE] mb-4 ${isArabic ? 'font-cairo' : ''}`}>
              {t('portfolio.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" dir="ltr">
            {projects.map((project, idx) => {
              let extraClass = "";
              if (idx === 0) extraClass = "rounded-tl-[60px]";
              if (idx === 5) extraClass = "rounded-br-[60px]";
              return (
                <div
                  key={project.id}
                  className={`group relative overflow-hidden ${extraClass}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              );
            })}
          </div>
          <div className="flex justify-end mt-14 items-center gap-2">
            <button
              className={`text-white px-10 py-2 rounded-lg bg-gradient-to-b from-secondary to-primary hover:from-primary hover:to-secondary transition dark:from-[#1DBFFE] dark:to-[#4A3D8B] ${isArabic ? 'font-cairo' : ''}`}
            >
              {t('portfolio.viewMore')}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;