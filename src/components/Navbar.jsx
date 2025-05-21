import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Logo from '../assets/images/haschcode-logo.svg';
import Frame3 from '../assets/images/Frame 3.png';
import LandSwitchDark from '../assets/images/Land Switch - Dark.png';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

// Responsive navigation bar with mobile menu and theme toggle
const Navbar = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.courses'), path: '/courses' },
    { name: t('nav.portfolio'), path: '/portfolio' },
    { name: t('nav.news'), path: '/news' },
    { name: t('nav.events'), path: '/events' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const handleThemeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className="bg-white dark:bg-[#1a0b3a] fixed top-0 left-0 w-full z-50 shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center h-20 lg:h-20">
          <a href="/" className="flex items-center gap-2 flex-shrink-0 mx-auto lg:ml-8 lg:mx-0">
            <img
              src={Logo}
              alt="HaschCode Logo"
              className="h-10 md:h-12 lg:h-16 w-auto max-w-[44px] md:max-w-[48px] lg:max-w-[56px] object-contain"
            />
            <span className="text-lg md:text-xl font-semibold text-black dark:text-white">
              HaschCode
            </span>
          </a>
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="relative text-lg font-medium transition duration-300 text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white after:transition-all after:duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex items-center space-x-6">
            <img
              src={Frame3}
              alt="AI Assistant"
              className="h-18 w-auto max-w-[64px] object-contain cursor-pointer"
            />
            <button
              onClick={handleThemeToggle}
              className="h-10 w-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 transition-colors duration-300 focus:outline-none"
              title={theme === 'dark' ? 'الوضع النهاري' : 'الوضع الليلي'}
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 4.95l-.71-.71M4.05 4.93l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
              )}
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={() => changeLanguage('en')}
                className={`text-lg ${theme === 'dark' ? 'text-white' : 'text-black'} ${i18n.language === 'en' ? 'font-bold' : ''}`}
              >
                EN
              </button>
              <span className={`text-lg ${theme === 'dark' ? 'text-white' : 'text-black'}`}>|</span>
              <button
                onClick={() => changeLanguage('ar')}
                className={`text-lg ${theme === 'dark' ? 'text-white' : 'text-black'} ${i18n.language === 'ar' ? 'font-bold' : ''}`}
              >
                عربي
              </button>
            </div>
            <button className={`text-lg ${theme === 'dark' ? 'text-white' : 'text-black'} hover:text-gray-400 transition`}>
              Log in
            </button>
          </div>
          <div className="lg:hidden flex items-center justify-center w-full mt-2">
            <button onClick={toggleMenu} className={`p-2 text-black dark:text-white`}>
              {isOpen ? <HiX className="h-6 w-6" /> : <HiMenuAlt3 className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="bg-white dark:bg-[#1a0b3a] lg:hidden border-t border-gray-700 transition-all duration-300">
          <div className="flex flex-col items-center px-4 py-4 space-y-4 w-full">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={closeMenu}
                className="text-base font-medium w-full text-center text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 w-full space-y-4 border-t border-gray-600 flex flex-col items-center">
              <img src={Frame3} alt="AI Assistant" className="h-10 w-auto object-contain cursor-pointer mx-auto" />
              <button
                onClick={handleThemeToggle}
                className="h-10 w-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 transition-colors duration-300 focus:outline-none mx-auto"
                title={theme === 'dark' ? 'الوضع النهاري' : 'الوضع الليلي'}
              >
                {theme === 'dark' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 4.95l-.71-.71M4.05 4.93l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
                )}
              </button>
              <div className="flex flex-col gap-4 items-center">
                <div className="flex items-center gap-2 justify-center">
                  <button
                    onClick={() => changeLanguage('en')}
                    className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-black'} ${i18n.language === 'en' ? 'font-bold' : ''}`}
                  >
                    EN
                  </button>
                  <span className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-black'}`}>|</span>
                  <button
                    onClick={() => changeLanguage('ar')}
                    className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-black'} ${i18n.language === 'ar' ? 'font-bold' : ''}`}
                  >
                    عربي
                  </button>
                </div>
                <button className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-black'} hover:text-gray-400 transition`}>
                  Log in
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;