

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import laptopMockup from '../assets/images/laptop-mockup.png';
import phonemockup from '../assets/images/mobile-mockup.png';
import ellipse16 from '../assets/images/Ellipse 16.png';
import ellipse10 from '../assets/images/Ellipse 10.png';

// Subcomponent to display background circles (visible only on desktop)
const HeroBackground = () => (
  <div className="absolute inset-0 hidden lg:block">
    {/* Circle 1: Positioned at the top-left of the screen */}
    <img
      src={ellipse16}
      alt="Ellipse"
      className="absolute w-[67px] h-[61px] top-32 left-[40%] transform -translate-x-1/2 brightness-110"
      loading="lazy"
    />
    {/* Circle 2: Positioned near the top-left edge */}
    <img
      src={ellipse16}
      alt="Ellipse"
      className="absolute w-[67px] h-[61px] top-40 left-16 brightness-150"
      loading="lazy"
    />
    {/* Circle 3: Positioned at the middle-right of the screen */}
    <img
      src={ellipse16}
      alt="Ellipse"
      className="absolute w-[67px] h-[61px] right-1/4 transform -translate-x-1/3 top-60 right-[2px] brightness-125"
      loading="lazy"
    />
    {/* Circle 4: Positioned at the bottom-right of the screen */}
    <img
      src={ellipse10}
      alt="Ellipse"
      className="absolute w-[100px] h-[100px] bottom-80 right-1/4 transform -translate-x-40 -translate-y-2 brightness-125"
      loading="lazy"
    />
    {/* Circle 5: Positioned at the bottom-left of the screen */}
    <img
      src={ellipse16}
      alt="Ellipse"
      className="absolute w-[67px] h-[61px] bottom-60 left-1/4 transform -translate-x-1/2 brightness-125"
      loading="lazy"
    />
  </div>
);

// Subcomponent to display text content (title and description)
const HeroText = ({ isDesktop }) => {
  const { t, i18n } = useTranslation();
  // Check if the language is Arabic based on i18next settings
  const isArabic = i18n.resolvedLanguage === 'ar' || localStorage.getItem('i18nextLng') === 'ar';

  // Log the current language to the console for verification
  console.log('Current language:', i18n.resolvedLanguage);
  console.log('Is Arabic:', isArabic);

  // Base classes for text (bold, white, tight leading)
  const baseTextClass = clsx(
    'font-bold text-white leading-tight',
    isArabic && 'font-readex'
  );

  // Classes for the title (text size varies based on screen size)
  const titleClass = clsx(
    baseTextClass,
    isDesktop ? 'text-[32px] lg:text-[32px]' : 'text-[24px] mb-6 ml-4',
  );

  // Classes for the paragraph (medium weight, text size varies based on screen size)
  const paragraphClass = clsx(
    baseTextClass,
    'font-medium',
    isDesktop ? 'text-[20px]' : 'text-[16px]',
  );

  return (
    // Container for text with spacing and alignment based on screen size
    <div className={clsx(isDesktop ? 'space-y-6 max-w-xl ml-20 mt-[-100px]' : 'max-w-md ml-4')}>
      {/* Main title */}
      <h1 className={titleClass} aria-label={t('hero.title')}>
        {isArabic ? (
          <>
            انشئ <span className="text-[#1DBFFE]">موقعك الالكتروني</span> بافضل واذكي طريقة
          </>
        ) : (
          <>
            Build Your <span className="text-[#1DBFFE]">Website</span> In Smart <br /> Way
          </>
        )}
      </h1>
      {/* Paragraphs displayed only on desktop */}
      {isDesktop && (
        <>
          <p className={paragraphClass}>{t('hero.subtitle')}</p>
          <p className={paragraphClass}>{t('hero.description')}</p>
        </>
      )}
    </div>
  );
};

// Subcomponent to display images (laptop and phone mockups)
const HeroImages = ({ isDesktop, isArabic }) => {
  // Determine the position of the phone mockup based on language and screen size
  const phonePosition = isArabic
    ? (isDesktop ? 'left-[-75px] top-[77%]' : 'right-44 top-[65%]')
    : (isDesktop ? '-right-20 top-[77%]' : '-right-3 top-[65%]');

  return (
    // Container for images with layering and transformations
    <div className="relative">
      <div className={clsx('relative z-10', isDesktop ? 'transform -translate-x-36 pt-52 corruption' : '')}>
        {/* Laptop mockup image */}
        <img
          src={laptopMockup}
          alt="Laptop Mockup"
          className={clsx(
            'w-full', isDesktop ? 'max-w-3xl scale-110' : 'max-w-lg scale-110')}
          loading="lazy"
          
        />
        {/* Phone mockup image */}
        <img
          src={phonemockup}
          alt="Phone Mockup"
          className={clsx(
            'absolute top-[70%] transform -translate-y-1/2 scale-120',
            isDesktop ? 'w-1/3' : 'w-2/5',
            phonePosition,
          )}
          loading="lazy"
        />
      </div>
    </div>
  );
};

// Subcomponent to display the SVG wave at the bottom
// const HeroWave = () => (
//   <div className="absolute bottom-0 left-0 right-0">
//     {/* SVG containing three wave layers */}
//     <svg
//       className="w-full"
//       height="600"
//       viewBox="0 0 1440 400"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       preserveAspectRatio="none"
//     >
//       {/* First layer - lightest color */}
//       <path
//         d="M0 150 Q360 400 720 350 T1440 250 L1440 400 L0 400 Z"
//         fill="#E8E4F7"
//         fillOpacity="0.8"
//         className="dark:fill-[#13022E]"
//       />
//       {/* Second layer - medium transparency */}
//       <path
//         d="M0 180 Q360 430 720 380 T1440 280 L1440 400 L0 400 Z"
//         fill="#E8E4F7"
//         fillOpacity="0.4"
//         className="dark:fill-[#4A3D8B]"
//       />
//       {/* Third layer - darkest color */}
//       <path
//         d="M0 210 Q330 460 720 410 T1440 310 L1440 400 L0 400 Z"
//         fill="#FFFFFF"
//         className="dark:fill-[#13022E]"
//       />
//     </svg>
//   </div>
// );


const HeroWave = () => (
  <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
    <svg
      className="w-full"
      height="350"
      viewBox="0 0 1440 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      {/* الطبقة الأولى - بيضاوي سلس */}
      <path
        d="m0,10 Q720,340 1440,180 L1440,320 L0,320 Z"
        fill="#E8E4F7"
        fillOpacity="0.8"
        className="dark:fill-[#13022E]"
      />
      {/* الطبقة الثانية - خلفية أعمق */}
      <path
        d="M0,80 Q720,320 1440,280 L1440,320 L0,320 Z"
        fill="#E8E4F7"
        fillOpacity="0.4"
        className="dark:fill-[#4A3D8B]"
      />
      {/* الطبقة الثالثة - أعمق طبقة */}
      <path
        d="M0,150 Q920,440 1440,250 L1440,380 L0,340 Z"
        fill="#FFFFFF"
        className="dark:fill-[#13022E]"
      />
    </svg>
  </div>
);


// Main Hero component
const Hero = () => {
  const { i18n, t } = useTranslation();
  // Check if the language is Arabic
  const isArabic = i18n.resolvedLanguage === 'ar' || localStorage.getItem('i18nextLng') === 'ar';

  // Set page direction (RTL or LTR) based on language
  useEffect(() => {
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  }, [isArabic]);

  return (
    <>
      {/* Mobile section (below 768px) */}
      <div
        className="block md:hidden relative bg-gradient-to-r from-[#8169F1] to-[#4A3D8B] dark:from-[#4A3D8B] dark:to-[#13022E] min-h-screen flex items-center overflow-hidden transition-colors duration-300"
        style={{ direction: isArabic ? 'rtl' : 'ltr' }}
        role="banner"
      >
        {/* Background circles (hidden on mobile) */}
        <HeroBackground />
        <div className="max-w-7xl mx-auto px-8 relative pt-0">
          <div className="flex flex-col">
            {/* Text content on mobile */}
            <HeroText isDesktop={false} />
            <div className="flex flex-row items-center justify-between w-full">
              <div className="mb-14 space-y-2 max-w-md ml-9">
                {/* Subtitle */}
                <p
                  className={clsx(
                    'text-[13px] font-poppins font-bold text-white leading-tight',
                  isArabic ? 'font-bold' : 'font-medium'
                  )}
                >
                  {t('hero.subtitle')}
                </p>
                {/* Description */}
                <p
                className={clsx(
                  'text-[13px] text-white leading-tight font-poppins',
                  isArabic ? 'font-bold' : 'font-medium'
                )}
              >
                {t('hero.description')}
                </p>

              </div>
              {/* Images on mobile */}
              <HeroImages isDesktop={false} isArabic={isArabic} />
            </div>
          </div>
        </div>
        {/* SVG wave at the bottom */}
        <HeroWave />
      </div>

      {/* Desktop and tablet section (768px and above) */}
      <div
        className="hidden md:block relative bg-gradient-to-r from-[#8169F1] to-[#4A3D8B] dark:from-[#4A3D8B] dark:to-[#13022E] min-h-screen flex items-center overflow-hidden transition-colors duration-300"
        style={{ direction: isArabic ? 'rtl' : 'ltr' }}
        role="banner"
      >
        {/* Background circles */}
        <HeroBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text content on desktop */}
            <HeroText isDesktop={true} />
            {/* Images on desktop */}
            <HeroImages isDesktop={true} isArabic={isArabic} />
          </div>
        </div>
        {/* SVG wave at the bottom */}
        <HeroWave />
      </div>
    </>
  );
};

export default Hero;