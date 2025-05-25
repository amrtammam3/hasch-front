import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import onlineclasses from '../assets/images/onlineclasses.png';

// Subcomponent to display the image
const ClassImage = ({ isDesktop, isArabic }) => (
  <div className={clsx('relative', isDesktop ? 'w-[80%] mx-auto' : 'w-[90%] mx-auto')}>
    {/* Image container with blur effect */}
    <div className="rounded-lg overflow-hidden relative" style={{ zIndex: 1 }}>
      <img
        src={onlineclasses}
        alt="Professional Instructors"
        className="w-full h-auto rounded-lg object-cover"
        loading="lazy"
      />
    </div>
  </div>
);

// Subcomponent to display text and features
const ClassText = ({ isDesktop, isArabic }) => {
  const { t } = useTranslation();

  const features = [
    t('onlineClasses.features.comprehensive'),
    t('onlineClasses.features.expert'),
    t('onlineClasses.features.weekly'),
    t('onlineClasses.features.community'),
    t('onlineClasses.features.certification'),
  ];

  const baseTextClass = clsx(
    'text-gray-900 dark:text-white leading-tight',
    isArabic && 'font-cairo font-normal'
  );

  const titleClass = clsx(
    'font-bold leading-tight text-[#4A3D8B]',
    isDesktop ? 'text-3xl' : 'text-24',
    isArabic && 'font-cairo'
  );

  const subtitleClass = clsx(
    baseTextClass,
    'font-bold',
    isDesktop ? 'text-lg' : 'text-base'
  );

  return (
    <div className={clsx(isDesktop ? 'space-y-6' : 'space-y-4 text-left pr-8 pl-4')}>
      <h2 className={titleClass} aria-label={t('onlineClasses.title')}>
        {t('onlineClasses.title')}
      </h2>
      <p className={baseTextClass}>{t('onlineClasses.description1')}</p>
      <h3 className={subtitleClass}>{t('onlineClasses.description3')}</h3>
      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-1">
            <span className="text-gray-900 dark:text-white text-sm">•</span>
            <span className={clsx(baseTextClass, 'text-sm')}>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main component for online classes section
const OnlineClasses = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.resolvedLanguage === 'ar' || localStorage.getItem('i18nextLng') === 'ar';

  return (
    <div className="bg-white dark:bg-[#13022E] py-20 transition-colors duration-300 relative overflow-hidden mt-8">
      {/* Decorative circles styled like the Portfolio component */}
      <span className={clsx(
        'absolute w-20 h-20 border-2 border-[#8169F1] opacity-30 rounded-full',
        isArabic ? 'top-0 right-0 translate-x-10 -translate-y-10' : 'top-0 left-0 -translate-x-10 -translate-y-10',
        'md:w-32 md:h-32'
      )}></span>
      <span className={clsx(
        'absolute w-20 h-20 border-2 border-[#8169F1] opacity-30 rounded-full',
        isArabic ? 'top-0 left-0 -translate-x-10 -translate-y-10' : 'top-0 right-0 translate-x-10 -translate-y-10',
        'md:w-32 md:h-32'
      )}></span>
      <span className={clsx(
        'absolute w-20 h-20 border-2 border-[#8169F1] opacity-30 rounded-full',
        isArabic ? 'bottom-0 right-0 translate-x-10 translate-y-10' : 'bottom-0 left-0 -translate-x-10 translate-y-10',
        'md:w-32 md:h-32'
      )}></span>
      <span className={clsx(
        'absolute w-20 h-20 border-2 border-[#8169F1] opacity-30 rounded-full',
        isArabic ? 'bottom-0 left-1/2 translate-x-1/2 translate-y-10' : 'bottom-0 right-1/2 translate-x-1/2 translate-y-10',
        'md:w-32 md:h-32'
      )}></span>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile layout */}
        <div className="block md:hidden space-y-6">
          <ClassImage isDesktop={false} isArabic={isArabic} />
          <ClassText isDesktop={false} isArabic={isArabic} />
        </div>
        {/* Desktop and tablet layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ClassImage isDesktop={true} isArabic={isArabic} />
          <ClassText isDesktop={true} isArabic={isArabic} />
        </div>
      </div>
    </div>
  );
};

export default OnlineClasses;