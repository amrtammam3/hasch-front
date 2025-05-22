import React from 'react';
import { useTranslation } from 'react-i18next';
import event from '../assets/images/event.png';

const EventCard = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 relative" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="relative w-full max-w-[520px] mx-auto">
        <div className="absolute top-12 left-0 w-full h-[360px] rounded-lg bg-gradient-to-t from-[#4A3D8B] to-[#8169F1] z-0"></div>
        <div className={`absolute ${isRTL ? '-right-4' : '-left-4'} top-0 z-10`}>
          <div className="grid grid-cols-4 gap-[7px]">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="w-[6px] h-[6px] bg-[#16A8E0] rounded-full"></div>
            ))}
          </div>
        </div>
        <div className={`relative ${isRTL ? 'mr-8' : 'ml-8'} z-10`}>
          <img
            src={event}
            alt="Event"
            className="w-full h-[360px] object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="w-full max-w-xl">
        <h2 className={`text-2xl sm:text-3xl font-bold text-white mb-6 leading-tight text-center ${isRTL ? 'lg:text-right' : 'lg:text-left'}`}>
          {isRTL ? t('events.event1.title') : 'Welcome To The Digital Marketing Meetup 2025'}
        </h2>
        <p className={`text-gray-300 mb-8 sm:mb-12 text-base sm:text-lg leading-relaxed text-center ${isRTL ? 'lg:text-right' : 'lg:text-left'}`}>
          {isRTL ? t('events.event1.description') : 'Educational And Promotional Live Streamed Sessions Where Experts Discuss Industry Trends, Product Demos, Q&A Sessions'}
        </p>
        <div className="space-y-6">
          <div>
            <h3 className={`text-white text-xl sm:text-2xl font-semibold mb-1 ${isRTL ? 'text-right' : ''}`}>{isRTL ? t('events.date') : 'Date'}:</h3>
            <p className={`text-gray-300 text-lg sm:text-xl ${isRTL ? 'text-right' : ''}`}>{isRTL ? t('events.event1.date') : '22 - 04 - 2025'}</p>
          </div>
          <div>
            <h3 className={`text-white text-xl sm:text-2xl font-semibold mb-1 ${isRTL ? 'text-right' : ''}`}>{isRTL ? t('events.time') : 'Time'}:</h3>
            <p className={`text-gray-300 text-lg sm:text-xl ${isRTL ? 'text-right' : ''}`}>{isRTL ? t('events.event1.time') : '20:00 KSA'}</p>
          </div>
        </div>
        <div className={`flex ${isRTL ? 'justify-start' : 'justify-end'} mt-10`}>
          <button
            className="text-white px-6 py-2 rounded-lg mr-20 bg-gradient-to-b from-secondary to-primary hover:from-primary hover:to-secondary transition dark:from-[#1DBFFE] dark:to-[#4A3D8B]"
          >
            {isRTL ? t('events.viewMore') : 'View More'}
          </button>
        </div>
      </div>
    </div>
  );
};

const UpcomingEvents = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <>
<div className="block md:hidden bg-white dark:bg-[#13022E] min-h-screen px-4 py-8">
  <div className="relative flex items-center justify-center mb-8">
    <span className="absolute -left-2 -top-2 w-8 h-8 border-2 border-[#8169F1] opacity-40 rounded-full"></span>
    <h1 className="text-lg font-bold text-[#3A2E7B] dark:text-[#B6A7FF] text-center">Upcoming Events</h1>
  </div>
  <div className="relative flex justify-center mb-8">
    <div className="absolute left-24 top-2 z-8 flex">
      <div className="w-14 h-[220px] bg-[#3A2E7B] dark:bg-[#8169F1] rounded-bl-md"></div>
      <div className="w-[160px] h-8 bg-[#3A2E7B] dark:bg-[#8169F1] rounded-bl-md self-end -ml-4"></div>
    </div>
    <div className="absolute -top-4 left-20 z-40">
      <div className="grid grid-cols-4 gap-[3px]">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-[#8169F1] rounded-full"></div>
        ))}
      </div>
    </div>
    <div className="relative z-30 w-[208px] h-[208px] mx-auto">
      <img
        src={event}
        alt="Event"
        className="w-full h-full object-cover rounded-md"
      />
    </div>
  </div>
  <div className="w-full max-w-xs mx-auto text-left px-1">
    <h2 className="text-base font-bold text-gray-900 dark:text-white mb-2">
      Welcome To The Digital Marketing Meetup 2025
    </h2>
    <p className="text-xs text-gray-700 dark:text-gray-300 mb-4">
      Educational And Promotional Live Streamed Sessions Where Experts Discuss Industry Trends , Product Demos , Q&A Sessions
    </p>
    <div className="mb-2">
      <div className="mb-2">
        <div className="text-xs font-bold text-gray-900 dark:text-white mb-1">Date:</div>
        <div className="text-xs text-gray-900 dark:text-gray-200 font-normal">22 - 04 - 2025</div>
      </div>
      <div>
        <div className="text-xs font-bold text-gray-900 dark:text-white mb-1">Time:</div>
        <div className="text-xs text-gray-900 dark:text-gray-200 font-normal">20:00 KSA</div>
      </div>
    </div>
  </div>
  {/* الزر */}
  <div className="flex justify-end w-full max-w-xs mx-auto mt-6">
    <button
      className="text-white px-6 py-2 rounded-full bg-gradient-to-b from-[#1DBFFE] to-[#4A3D8B] hover:from-[#4A3D8B] hover:to-[#1DBFFE] transition text-sm shadow font-semibold"
    >
      View more
    </button>
  </div>
</div>
      {/* ديسكتوب فقط */}
      <div className="hidden md:block">
        <div className="bg-white dark:bg-[#13022E] min-h-screen relative overflow-hidden py-20 px-4 transition-colors duration-300" dir={isRTL ? 'rtl' : 'ltr'}>
          <div className="absolute top-0 left-0">
            <div className="w-40 h-40 rounded-full border-2 border-[#3A2E7B] opacity-30"></div>
          </div>
          <div className="absolute -bottom-20 -right-20">
            <div className="w-60 h-60 rounded-full border-2 border-[#3A2E7B] opacity-30"></div>
          </div>
          <div className="max-w-[1400px] mx-auto">
            <h1 className="text-secondary dark:text-[#1DBFFE] text-2xl sm:text-3xl lg:text-3xl font-bold mb-16 text-center">
              {isRTL ? t('events.title') : 'Upcoming Events'}
            </h1>
            <EventCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingEvents;