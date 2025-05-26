

// import React from 'react';
// import { useTranslation } from 'react-i18next';
// import event from '../assets/images/event.png';

// const EventCard = () => {
//   const { t, i18n } = useTranslation();
//   const isRTL = i18n.language === 'ar';

//   // Convert numbers to Arabic numerals if in RTL mode
//   const toArabicNumerals = (num) => {
//     const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
//     return num.toString().split('').map(digit => arabicNumerals[digit] || digit).join('');
//   };

//   const date = isRTL ? `٢٢ - ٠٤ - ٢٠٢٥` : '22 - 04 - 2025';
//   const time = isRTL ? `٢٠:٠٠ KSA` : '20:00 KSA';

//   return (
//     <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 relative" dir={isRTL ? 'rtl' : 'ltr'}>
//       <div className="relative w-full max-w-[520px] mx-auto">
//         <div className={`absolute ${isRTL ? 'right-1' : 'left-1'} top-12 w-[480px] h-[350px] rounded-lg bg-gradient-to-t from-[#4A3D8B] to-[#8169F1] z-10`}></div>
//         <div className={`absolute ${isRTL ? '-right-11' : '-left-11'} top-0 z-0`}>
//           <div className="grid grid-cols-9 gap-[3px]">
//             {[...Array(81)].map((_, i) => (
//               <div key={i} className="w-[6px] h-[6px] bg-[#4A3D8B] dark:bg-[#1DBFFE] rounded-full"></div>
//             ))}
//           </div>
//         </div>
//         <div className={`relative ${isRTL ? 'mr-8' : 'ml-8'} z-20`}>
//           <img
//             src={event}
//             alt="Event"
//             className={`w-full h-[360px] object-cover rounded-lg ${isRTL ? 'border-r-12' : 'border-l-12'} border-[#8169F1]`}
//           />
//         </div>
//       </div>
//       <div className="w-full max-w-xl">
//         <h2 className={`text-3xl font-bold ${isRTL ? 'text-[#000000] dark:text-white' : 'text-[#000000] dark:text-white'} mb-6 leading-tight text-center ${isRTL ? 'lg:text-right font-cairo' : 'lg:text-left'}`} style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
//           {isRTL ? t('events.event1.title') : 'Welcome To The Digital Marketing Meetup 2025'}
//         </h2>
//         <p className={`text-gray-500 dark:text-white mb-12 text-lg leading-relaxed text-center ${isRTL ? 'lg:text-right font-cairo' : 'lg:text-left'}`} style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
//           {isRTL ? t('events.event1.description') : 'Educational And Promotional Live Streamed Sessions Where Experts Discuss Industry Trends, Product Demos, Q&A Sessions'}
//         </p>
//         <div className="space-y-6">
//           <div>
//             <h3 className={`text-[#000000] dark:text-white text-2xl font-semibold mb-1 ${isRTL ? 'text-right font-cairo' : ''}`} style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
//               {isRTL ? t('events.date') : 'Date:'}
//             </h3>
//             <p className={`text-gray-500 dark:text-white text-xl ${isRTL ? 'text-right font-cairo' : ''}`} style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
//               {date}
//             </p>
//           </div>
//           <div>
//             <h3 className={`text-[#000000] dark:text-white text-2xl font-semibold mb-1 ${isRTL ? 'text-right font-cairo' : ''}`} style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
//               {isRTL ? t('events.time') : 'Time:'}
//             </h3>
//             <p className={`text-gray-500 dark:text-white text-xl ${isRTL ? 'text-right font-cairo' : ''}`} style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
//               {time}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const UpcomingEvents = () => {
//   const { t, i18n } = useTranslation();
//   const isRTL = i18n.language === 'ar';

//   const toArabicNumerals = (num) => {
//     const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
//     return num.toString().split('').map(digit => arabicNumerals[digit] || digit).join('');
//   };

//   const date = isRTL ? `٢٢ - ٠٤ - ٢٠٢٥` : '22 - 04 - 2025';
//   const time = isRTL ? `٢٠:٠٠ KSA` : '20:00 KSA';

//   return (
//     <>
//       {/* Mobile View */}
//       <div className="block md:hidden bg-white dark:bg-[#13022E] min-h-screen px-4 py-8">
//         <div className="relative flex items-center justify-center mb-8">
//           <span className="absolute -left-2 -top-2 w-8 h-8 border-2 border-[#8169F1] opacity-40 rounded-full"></span>
//           <h1 className={`text-lg font-bold ${isRTL ? 'text-[#4A3D8B] dark:text-[#1DBFFE]' : 'text-[#4A3D8B] dark:text-[#1DBFFE]'} text-center ${isRTL ? 'font-cairo' : ''}`} style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
//             {isRTL ? t('events.title') : 'Upcoming Events'}
//           </h1>
//         </div>
//         <div className="relative flex justify-center mb-12">
//           <div className="absolute top-7 left-20 w-60 h-56 bg-gradient-to-t from-[#4A3D8B] to-[#8169F1] rounded-bl-md z-10"></div>
//           <div className="absolute -top-2 left-11 z-0">
//             <div className="grid grid-cols-9 gap-[3px]">
//               {[...Array(81)].map((_, i) => (
//                 <div key={i} className="w-1 h-1 bg-[#4A3D8B] dark:bg-[#1DBFFE] rounded-full"></div>
//               ))}
//             </div>
//           </div>
//           <div className="relative z-20 w-[260px] h-[240px] mx-auto">
//             <img
//               src={event}
//               alt="Event"
//               className="w-full h-full object-cover rounded-md border-l-4 border-[#8169F1]"
//             />
//           </div>
//         </div>
//         <div className="w-full max-w-xs mx-auto" dir={isRTL ? 'rtl' : 'ltr'}>
//           <h2 className={`text-lg font-semibold ${isRTL ? 'text-[#000000] dark:text-white' : 'text-[#4A3D8B] dark:text-white'} mb-2 ${isRTL ? 'font-cairo' : ''}`} style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
//             {isRTL ? t('events.event1.title') : 'Web Development Workshop'}
//           </h2>
//           <p className={`text-sm text-gray-500 dark:text-white mb-4 ${isRTL ? 'font-cairo' : ''}`} style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
//             {isRTL ? t('events.event1.description') : 'Educational And Promotional Live Streamed Sessions Where Experts Discuss Industry Trends, Product Demos, Q&A Sessions'}
//           </p>
//           <div className="space-y-2 mb-6">
//             <div>
//               <div className={`text-base font-medium ${isRTL ? 'text-[#000000] dark:text-white' : 'text-[#4A3D8B] dark:text-white'} mb-1 ${isRTL ? 'font-cairo' : ''}`} style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
//                 {isRTL ? t('events.date') : 'Date:'}
//               </div>
//               <div className={`text-base text-gray-500 dark:text-white ${isRTL ? 'font-cairo' : ''}`} style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
//                 {date}
//               </div>
//             </div>
//             <div>
//               <div className={`text-base font-medium ${isRTL ? 'text-[#000000] dark:text-white' : 'text-[#4A3D8B] dark:text-white'} mb-1 ${isRTL ? 'font-cairo' : ''}`} style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
//                 {isRTL ? t('events.time') : 'Time:'}
//               </div>
//               <div className={`text-base text-gray-500 dark:text-white ${isRTL ? 'font-cairo' : ''}`} style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
//                 {time}
//               </div>
//             </div>
//           </div>
//           <div className="flex justify-end mt-14">
//             <button
//               className="text-white px-6 py-2 rounded-lg bg-gradient-to-b from-secondary to-primary hover:from-primary hover:to-secondary transition dark:from-[#1DBFFE] dark:to-[#4A3D8B]"
//             >
//               {isRTL ? t('common.viewMore') : 'View More'}
//             </button>
//           </div>
//         </div>
//       </div>
//       {/* Desktop View */}
//       <div className="hidden md:block">
//         <div className="bg-white dark:bg-[#13022E] min-h-screen relative overflow-hidden py-20 px-4 transition-colors duration-300" dir={isRTL ? 'rtl' : 'ltr'}>
//           <div className="absolute top-0 right-0">
//             <div className="w-40 h-40 rounded-full border-2 border-[#8169F1] opacity-30"></div>
//           </div>
//           <div className="absolute -bottom-20 -left-20">
//             <div className="w-60 h-60 rounded-full border-2 border-[#8169F1] opacity-30"></div>
//           </div>
//           <div className="max-w-[1400px] mx-auto">
//             <h1 className={`text-3xl font-bold mb-16 text-center ${isRTL ? 'text-[#4A3D8B] dark:text-[#1DBFFE]' : 'text-[#4A3D8B] dark:text-[#1DBFFE]'}`} style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
//               {isRTL ? t('events.title') : 'Upcoming Events'}
//             </h1>
//             <EventCard />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default UpcomingEvents;


















import React from 'react';
import { useTranslation } from 'react-i18next';
import event from '../assets/images/event.png';

const EventCard = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  // Convert numbers to Arabic numerals if in RTL mode
  const toArabicNumerals = (num) => {
    const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return num.toString().split('').map(digit => arabicNumerals[digit] || digit).join('');
  };

  const date = isRTL ? `٢٢ - ٠٤ - ٢٠٢٥` : '22 - 04 - 2025';
  const time = isRTL ? `٢٠:٠٠ KSA` : '20:00 KSA';

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 relative" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="relative w-full max-w-[520px] mx-auto">
        <div className={`absolute ${isRTL ? 'right-1' : 'left-1'} top-12 w-[480px] h-[350px] rounded-lg bg-gradient-to-t from-[#4A3D8B] to-[#8169F1] z-10`}></div>
        <div className={`absolute ${isRTL ? '-right-11' : '-left-11'} top-0 z-0`}>
          <div className="grid grid-cols-9 gap-[3px]">
            {[...Array(81)].map((_, i) => (
              <div key={i} className="w-[6px] h-[6px] bg-[#4A3D8B] dark:bg-[#1DBFFE] rounded-full"></div>
            ))}
          </div>
        </div>
        <div className={`relative ${isRTL ? 'mr-8' : 'ml-8'} z-20`}>
          <img
            src={event}
            alt="Event"
            className={`w-full h-[360px] object-cover rounded-lg ${isRTL ? 'border-r-12' : 'border-l-12'} border-[#8169F1]`}
          />
        </div>
      </div>
      <div className="w-full max-w-xl">
        <h2 className={`text-3xl font-bold ${isRTL ? 'text-[#000000] dark:text-white' : 'text-[#000000] dark:text-white'} mb-6 leading-tight text-center ${isRTL ? 'lg:text-right font-cairo' : 'lg:text-left'}`} style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
          {isRTL ? t('events.event1.title') : 'Welcome To The Digital Marketing Meetup 2025'}
        </h2>
        <p className={`text-gray-500 dark:text-white mb-12 text-lg leading-relaxed text-center ${isRTL ? 'lg:text-right font-cairo' : 'lg:text-left'}`} style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
          {isRTL ? t('events.event1.description') : 'Educational And Promotional Live Streamed Sessions Where Experts Discuss Industry Trends, Product Demos, Q&A Sessions'}
        </p>
        <div className="space-y-6">
          <div>
            <h3 className={`text-[#000000] dark:text-white text-2xl font-semibold mb-1 ${isRTL ? 'text-right font-cairo' : ''}`} style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
              {isRTL ? t('events.date') : 'Date:'}
            </h3>
            <p className={`text-gray-500 dark:text-white text-xl ${isRTL ? 'text-right font-cairo' : ''}`} style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
              {date}
            </p>
          </div>
          <div>
            <h3 className={`text-[#000000] dark:text-white text-2xl font-semibold mb-1 ${isRTL ? 'text-right font-cairo' : ''}`} style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
              {isRTL ? t('events.time') : 'Time:'}
            </h3>
            <p className={`text-gray-500 dark:text-white text-xl ${isRTL ? 'text-right font-cairo' : ''}`} style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
              {time}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const UpcomingEvents = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const toArabicNumerals = (num) => {
    const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return num.toString().split('').map(digit => arabicNumerals[digit] || digit).join('');
  };

  const date = isRTL ? `٢٢ - ٠٤ - ٢٠٢٥` : '22 - 04 - 2025';
  const time = isRTL ? `٢٠:٠٠ KSA` : '20:00 KSA';

  return (
    <>
      {/* Mobile View */}
      <div className="block md:hidden bg-white dark:bg-[#13022E] min-h-screen px-4 py-8">
        <div className="relative flex items-center justify-center mb-8">
          <span className="absolute -left-2 -top-2 w-8 h-8 border-2 border-[#8169F1] opacity-40 rounded-full"></span>
          <h1 className={`text-lg font-bold ${isRTL ? 'text-[#4A3D8B] dark:text-[#1DBFFE]' : 'text-[#4A3D8B] dark:text-[#1DBFFE]'} text-center ${isRTL ? 'font-cairo' : ''}`} style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
            {isRTL ? t('events.title') : 'Upcoming Events'}
          </h1>
        </div>
        <div className="relative flex justify-center mb-12">
          <div className="absolute top-7 left-20 w-60 h-56 bg-gradient-to-t from-[#4A3D8B] to-[#8169F1] rounded-bl-md z-10"></div>
          <div className="absolute -top-2 left-11 z-0">
            <div className="grid grid-cols-9 gap-[3px]">
              {[...Array(81)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-[#4A3D8B] dark:bg-[#1DBFFE] rounded-full"></div>
              ))}
            </div>
          </div>
          <div className="relative z-20 w-[260px] h-[240px] mx-auto">
            <img
              src={event}
              alt="Event"
              className="w-full h-full object-cover rounded-md border-l-4 border-[#8169F1]"
            />
          </div>
        </div>
        <div className="w-full max-w-xs mx-auto" dir={isRTL ? 'rtl' : 'ltr'}>
          <h2 className={`text-lg font-semibold ${isRTL ? 'text-[#000000] dark:text-white' : 'text-[#4A3D8B] dark:text-white'} mb-2 ${isRTL ? 'font-cairo' : ''}`} style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
            {isRTL ? t('events.event1.title') : 'Web Development Workshop'}
          </h2>
          <p className={`text-sm text-gray-500 dark:text-white mb-4 ${isRTL ? 'font-cairo' : ''}`} style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
            {isRTL ? t('events.event1.description') : 'Educational And Promotional Live Streamed Sessions Where Experts Discuss Industry Trends, Product Demos, Q&A Sessions'}
          </p>
          <div className="space-y-2 mb-6">
            <div>
              <div className={`text-base font-medium ${isRTL ? 'text-[#000000] dark:text-white' : 'text-[#4A3D8B] dark:text-white'} mb-1 ${isRTL ? 'font-cairo' : ''}`} style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
                {isRTL ? t('events.date') : 'Date:'}
              </div>
              <div className={`text-base text-gray-500 dark:text-white ${isRTL ? 'font-cairo' : ''}`} style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
                {date}
              </div>
            </div>
            <div>
              <div className={`text-base font-medium ${isRTL ? 'text-[#000000] dark:text-white' : 'text-[#4A3D8B] dark:text-white'} mb-1 ${isRTL ? 'font-cairo' : ''}`} style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
                {isRTL ? t('events.time') : 'Time:'}
              </div>
              <div className={`text-base text-gray-500 dark:text-white ${isRTL ? 'font-cairo' : ''}`} style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
                {time}
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-14">
            <button
              className="text-white px-8 py-2 rounded-lg bg-gradient-to-b from-secondary to-primary hover:from-primary hover:to-secondary transition dark:from-[#1DBFFE] dark:to-[#4A3D8B]"
            >
              {isRTL ? t('news.viewMore') : 'View More'}
            </button>
          </div>
        </div>
      </div>
      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="bg-white dark:bg-[#13022E] min-h-screen relative overflow-hidden py-20 px-4 transition-colors duration-300" dir={isRTL ? 'rtl' : 'ltr'}>
          <div className="absolute top-0 right-0">
            <div className="w-40 h-40 rounded-full border-2 border-[#8169F1] opacity-30"></div>
          </div>
          <div className="absolute -bottom-20 -left-20">
            <div className="w-60 h-60 rounded-full border-2 border-[#8169F1] opacity-30"></div>
          </div>
          <div className="max-w-[1400px] mx-auto">
            <h1 className={`text-3xl font-bold mb-16 text-center ${isRTL ? 'text-[#4A3D8B] dark:text-[#1DBFFE]' : 'text-[#4A3D8B] dark:text-[#1DBFFE]'}`} style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
              {isRTL ? t('events.title') : 'Upcoming Events'}
            </h1>
            <EventCard />
            <div className="flex justify-end mt-14">
              <button
                className={` ml-16 text-white px-10 py-2 rounded-lg bg-gradient-to-b from-secondary to-primary hover:from-primary hover:to-secondary transition dark:from-[#1DBFFE] dark:to-[#4A3D8B] ${isRTL ? 'font-cairo' : ''}`}
              >
                {isRTL ? t('news.viewMore') : 'View More'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingEvents;