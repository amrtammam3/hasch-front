// // import i18n from 'i18next';
// // import { initReactI18next } from 'react-i18next';
// // import LanguageDetector from 'i18next-browser-languagedetector';

// // import enTranslations from './translations/en.json';
// // import arTranslations from './translations/ar.json';

// // i18n
// //   .use(LanguageDetector)
// //   .use(initReactI18next)
// //   .init({
// //     resources: {
// //       en: {
// //         translation: enTranslations
// //       },
// //       ar: {
// //         translation: arTranslations
// //       }
// //     },
// //     fallbackLng: 'en',
// //     interpolation: {
// //       escapeValue: false
// //     },
// //     detection: {
// //       order: ['localStorage', 'navigator'],
// //       caches: ['localStorage']
// //     }
// //   });

// // export default i18n; 














// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';

// import enTranslations from './translations/en.json';
// import arTranslations from './translations/ar.json';

// i18n
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     resources: {
//       en: {
//         translation: enTranslations
//       },
//       ar: {
//         translation: arTranslations
//       }
//     },
//     fallbackLng: 'en',
//     interpolation: {
//       escapeValue: false
//     },
//     detection: {
//       order: ['localStorage', 'navigator'],
//       caches: ['localStorage']
//     }
//   });

// // تحديد الـ dir بناءً على اللغة الحالية عند التهيئة
// i18n.on('languageChanged', (lng) => {
//   document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
// });

// export default i18n;








// i18n.js
// Configuration for i18next to handle internationalization (i18n) with language detection
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from './translations/en.json';
import arTranslations from './translations/ar.json';

// Language constants
export const LANGS = {
  AR: 'ar',
  EN: 'en',
};

// Initialize i18next with language resources and detection
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      [LANGS.EN]: { translation: enTranslations },
      [LANGS.AR]: { translation: arTranslations },
    },
    fallbackLng: LANGS.EN, // Default language if detection fails
    interpolation: {
      escapeValue: false, // React handles XSS, so no need to escape
    },
    detection: {
      order: ['localStorage', 'navigator'], // Check localStorage first, then browser language
      caches: ['localStorage'], // Persist language choice in localStorage
    },
  });

// Set document direction (RTL/LTR) based on language
i18n.on('languageChanged', (lng) => {
  document.documentElement.dir = lng === LANGS.AR ? 'rtl' : 'ltr';
});

export default i18n;