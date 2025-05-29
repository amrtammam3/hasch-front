// import { useTranslation } from 'react-i18next';
// import clsx from 'clsx';
// import onlineclasses from '../assets/images/onlineclasses.png';

// // Subcomponent to display the image
// const ClassImage = ({ isDesktop, isArabic }) => (
//   <div className={clsx('relative', isDesktop ? 'w-[80%] mx-auto' : 'w-[80%] mx-auto')}>
//     {/* Image container with blur effect */}
//     <div className="rounded-lg overflow-hidden relative" style={{ zIndex: 1 }}>
//       <img
//         src={onlineclasses}
//         alt="Professional Instructors"
//         className="w-full h-auto rounded-lg object-cover"
//         loading="lazy"
//       />
//     </div>
//   </div>
// );

// // Subcomponent to display text and features
// // const ClassText = ({ isDesktop, isArabic }) => {
// //   const { t } = useTranslation();

// //   const features = [
// //     t('onlineClasses.features.comprehensive'),
// //     t('onlineClasses.features.expert'),
// //     t('onlineClasses.features.weekly'),
// //     t('onlineClasses.features.community'),
// //     t('onlineClasses.features.certification'),
// //   ];

// //   const baseTextClass = clsx(
// //     'text-gray-900 dark:text-white leading-tight',
// //     isArabic && 'font-cairo'
// //   );

// //   const titleClass = clsx(
// //     'font-bold leading-tight text-[#4A3D8B]',
// //     isDesktop ? 'text-3xl' : 'text-20',
// //     isArabic && 'font-cairo'
// //   );

// // const subtitleClass = clsx(
// //   baseTextClass,
// //   isArabic ? 'font-bold' : 'font-bold',
// //   isDesktop ? 'text-lg' : 'text-base',
// // );


// //   return (
// //     <div className={clsx(isDesktop ? 'space-y-6' : 'space-y-4 text-left pr-9 pl-12')}>
// //       <h2 className={titleClass} aria-label={t('onlineClasses.title')}>
// //         {t('onlineClasses.title')}
// //       </h2>
// //       <p className={baseTextClass}>{t('onlineClasses.description1')}</p>
// //       <p className={baseTextClass}>{t('onlineClasses.description2')}</p>
// //       <h3 className={subtitleClass}>{t('onlineClasses.description3')}</h3>
// //       <div className="space-y-3">
// //         {features.map((feature, index) => (
// //           <div key={index} className="flex items-start space-x-1">
// //             <span className="text-gray-900 dark:text-white text-sm">•</span>
// //             <span className={clsx(baseTextClass, 'text-sm')}>{feature}</span>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };


// const ClassText = ({ isDesktop, isArabic }) => {
//   const { t } = useTranslation();

//   const features = [
//     t('onlineClasses.features.comprehensive'),
//     t('onlineClasses.features.expert'),
//     t('onlineClasses.features.weekly'),
//     t('onlineClasses.features.community'),
//     t('onlineClasses.features.certification'),
//   ];

//   const baseTextClass = clsx(
//     'text-gray-900 dark:text-white leading-tight font-SemiBold',
//     isArabic && 'font-cairo'
//   );

//   const titleClass = clsx(
//     'font-bold leading-tight text-[#4A3D8B]',
//     isDesktop ? 'text-3xl' : 'text-20',
//     isArabic && 'font-cairo'
//   );

//   const subtitleClass = clsx(
//     baseTextClass,
//     isArabic ? 'font-bold' : 'font-bold',
//     isDesktop ? 'text-lg' : 'text-base'
//   );

//   return (
//     <div
//       className={clsx(
//         isDesktop ? 'space-y-6' : 'space-y-4',
//         isArabic ? 'text-right pr-12 pl-9' : 'text-left pr-9 pl-12' // Adjust padding and alignment for RTL
//       )}
//       dir={isArabic ? 'rtl' : 'ltr'} // Set text direction
//     >
//       <h2 className={titleClass} aria-label={t('onlineClasses.title')}>
//         {t('onlineClasses.title')}
//       </h2>
//       <p className={baseTextClass}>{t('onlineClasses.description1')}</p>
//       <p className={baseTextClass}>{t('onlineClasses.description2')}</p>
//       <h3 className={subtitleClass}>{t('onlineClasses.description3')}</h3>
//       <div className="space-y-3">
//         {features.map((feature, index) => (
//           <div
//             key={index}
//             className={clsx(
//               'flex items-start',
//               isArabic ? 'space-x-reverse space-x-1' : 'space-x-1' // Reverse spacing for RTL
//             )}
//           >
//             <span className="text-gray-900 dark:text-white text-sm">•</span>
//             <span className={clsx(baseTextClass, 'text-sm')}>{feature}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Main component for online classes section
// const OnlineClasses = () => {
//   const { i18n } = useTranslation();
//   const isArabic = i18n.resolvedLanguage === 'ar' || localStorage.getItem('i18nextLng') === 'ar';

//   return (
//     <div className="bg-white dark:bg-[#13022E] py-20 transition-colors duration-300 relative overflow-hidden">
//       {/* Decorative circles styled like the Portfolio component */}
//       <span className={clsx(
//         'block absolute w-[80px] h-[80px] border-2 border-[#8169F1] opacity-30 rounded-full',
//         isArabic ? 'top-20 right-60 translate-x-60 -translate-y-70' : 'top-0 left-0 -translate-x-10 -translate-y-10'
//       )}></span>

//       <span className={clsx(
//         'absolute w-20 h-20 border-2 border-[#8169F1] opacity-30 rounded-full',
//         isArabic ? 'top-0 left-0 -translate-x-10 -translate-y-10' : 'top-0 right-0 translate-x-10 -translate-y-10',
//         'md:w-32 md:h-32'
//       )}></span>
//       <span className={clsx(
//         'absolute w-20 h-20 border-2 border-[#8169F1] opacity-30 rounded-full',
//         isArabic ? 'bottom-0 right-0 translate-x-10 translate-y-10' : 'bottom-0 left-0 -translate-x-10 translate-y-10',
//         'md:w-32 md:h-32'
//       )}></span>
//       <span className={clsx(
//         'absolute w-20 h-20 border-2 border-[#8169F1] opacity-30 rounded-full',
//         isArabic ? 'bottom-0 left-1/2 translate-x-1/2 translate-y-10' : 'bottom-0 right-1/2 translate-x-1/2 translate-y-10',
//         'md:w-32 md:h-32'
//       )}></span>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Mobile layout */}
//         <div className="block md:hidden space-y-6">
//           <ClassImage isDesktop={false} isArabic={isArabic} />
//           <ClassText isDesktop={false} isArabic={isArabic} />
//         </div>
//         {/* Desktop and tablet layout */}
//         <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           <ClassImage isDesktop={true} isArabic={isArabic} />
//           <ClassText isDesktop={true} isArabic={isArabic} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OnlineClasses;














import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import onlineclasses from '../assets/images/onlineclasses.png';

// Subcomponent to display the image
const ClassImage = ({ isDesktop, isArabic }) => (
  <div className={clsx('relative', isDesktop ? 'w-[80%] mx-auto' : 'w-[80%] mx-auto')}>
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
    'text-gray-900 dark:text-white leading-tight font-SemiBold',
    isArabic && 'font-cairo'
  );

  const titleClass = clsx(
    'font-bold leading-tight text-[#4A3D8B]',
    isDesktop ? 'text-3xl' : 'text-20',
    isArabic && 'font-cairo'
  );

  const subtitleClass = clsx(
    baseTextClass,
    isArabic ? 'font-bold' : 'font-bold',
    isDesktop ? 'text-lg' : 'text-base'
  );

  return (
    <div
      className={clsx(
        isDesktop ? 'space-y-6' : 'space-y-4',
        isArabic ? 'text-right pr-12 pl-9' : 'text-left pr-9 pl-12' // Adjust padding and alignment for RTL
      )}
      dir={isArabic ? 'rtl' : 'ltr'} // Set text direction
    >
      <h2 className={titleClass} aria-label={t('onlineClasses.title')}>
        {t('onlineClasses.title')}
      </h2>
      <p className={baseTextClass}>{t('onlineClasses.description1')}</p>
      <p className={baseTextClass}>{t('onlineClasses.description2')}</p>
      <h3 className={subtitleClass}>{t('onlineClasses.description3')}</h3>
      <div className="space-y-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className={clsx(
              'flex items-start',
              isArabic ? 'space-x-reverse space-x-1' : 'space-x-1' // Reverse spacing for RTL
            )}
          >
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

  // Define circle sizes and border widths for easy customization
  const topLeftCircleSize = '57px'; // Width and height for top-left circle
  const topLeftBorderWidth = '9px'; // Border thickness for top-left circle

  const topRightCircleSize = '128px'; // Width and height for top-right circle
  const topRightBorderWidth = '9px'; // Border thickness for top-right circle

  const bottomRightCircleSize = '60px'; // Width and height for bottom-right circle
  const bottomRightBorderWidth = '11px'; // Border thickness for bottom-right circle

  const nearTextCircleSize = '118px'; // Width and height for circle near text
  const nearTextBorderWidth = '8px'; // Border thickness for circle near text

  const centerCircleSize = '50px'; // Width and height for center circle
  const centerBorderWidth = '6px'; // Border thickness for center circle

  return (
    <div className="bg-white dark:bg-[#13022E] py-20 transition-colors duration-300 relative overflow-hidden">
      {/* Decorative circles styled to match the image */}
      {/* Top-left circle (smaller) */}
      {/* Adjust size with topLeftCircleSize, thickness with topLeftBorderWidth */}
      <span className={clsx(
        'block absolute rounded-full border-[#4A3D8B] opacity-90',
        'top-10 left-40 -translate-x-5 -translate-y-5'
      )} style={{
        width: topLeftCircleSize,
        height: topLeftCircleSize,
        borderWidth: topLeftBorderWidth
      }}></span>

      {/* Top-right circle (larger) */}
      {/* Adjust size with topRightCircleSize, thickness with topRightBorderWidth */}
      <span className={clsx(
        'absolute rounded-full border-[#4A3D8B] opacity-20',
        'top-20 right-0 translate-x-16 -translate-y-16'
      )} style={{
        width: topRightCircleSize,
        height: topRightCircleSize,
        borderWidth: topRightBorderWidth
      }}></span>

      {/* Bottom-right circle (smaller) */}
      {/* Adjust size with bottomRightCircleSize, thickness with bottomRightBorderWidth */}
      <span className={clsx(
        'absolute rounded-full border-[#4A3D8B] opacity-20',
        'bottom-10 right-80 translate-x-0 translate-y-0'
      )} style={{
        width: bottomRightCircleSize,
        height: bottomRightCircleSize,
        borderWidth: bottomRightBorderWidth
      }}></span>

      {/* Circle near the text (larger, aligned with the text) */}
      {/* Adjust size with nearTextCircleSize, thickness with nearTextBorderWidth */}
      <span className={clsx(
        'absolute rounded-full border-[#4A3D8B] opacity-90',
        'top-80 left-40 -translate-x-16 -translate-y-0'
      )} style={{
        width: nearTextCircleSize,
        height: nearTextCircleSize,
        borderWidth: nearTextBorderWidth
      }}></span>

      {/* Center circle (small) */}
      {/* Adjust size with centerCircleSize, thickness with centerBorderWidth */}
      <span className={clsx(
        'absolute rounded-full border-[#4A3D8B] opacity-50',
        'top-80 left-80 -translate-x-1/20 -translate-y-1/3'
      )} style={{
        width: centerCircleSize,
        height: centerCircleSize,
        borderWidth: centerBorderWidth
      }}></span>

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