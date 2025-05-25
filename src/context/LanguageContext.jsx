

// Context for managing language state and translations
import { createContext, useContext } from 'react';
import { useTranslation } from 'react-i18next';

export const LANGS = {
  AR: 'ar',
  EN: 'en',
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { i18n, t } = useTranslation();

  // Change language and update i18n
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ currentLang: i18n.language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};






























