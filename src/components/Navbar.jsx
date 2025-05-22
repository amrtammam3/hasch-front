

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Logo from '../assets/images/haschcode-logo.svg';
import Frame3 from '../assets/images/Frame 3.png';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { IoPersonOutline } from 'react-icons/io5'; 
import { FiChevronDown } from 'react-icons/fi';
import { FaGlobe } from 'react-icons/fa'; 
import ThemeToggle from '../components/ThemeToggle';

const NAV_ITEMS = [
  { key: 'home', path: '/' },
  { key: 'courses', path: '/courses' },
  { key: 'portfolio', path: '/portfolio' },
  { key: 'news', path: '/news' },
  { key: 'events', path: '/events' },
  { key: 'about', path: '/about' },
  { key: 'contact', path: '/contact' },
];

const NavLink = ({ href, children, lang }) => (
  <a
    href={href}
    className="relative text-14 font-cairo font-600 text-white hover:text-gray-200 after:absolute after:bottom-[-4px] after:inset-x-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white after:transition-all after:duration-300 tracking-wider"
    aria-label={children}
  >
    {children}
  </a>
);

// Main Navbar component
const Navbar = ({ theme: initialTheme, setTheme: setInitialTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState(initialTheme);

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Handle language change
  const changeLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  // Handle theme toggle
  const handleThemeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setInitialTheme(newTheme);
    document.documentElement.className = newTheme;
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Set initial theme class on mount
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <nav className="bg-transparent z-50 absolute top-[30px] w-full transition-colors duration-300">
      <div className="mx-auto px-1 max-w-7xl">
        <div className="flex items-center justify-between h-[43px]">
          {/* Logo (Desktop) */}
          <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
            <a href="/" className="flex items-center gap-2" aria-label="HaschCode Home">
              <img src={Logo} alt="HaschCode Logo" className="h-[36px] w-auto object-contain" />
              <span
                className="text-24 text-white dark:text-white font-fahkwang font-700"
              >
                HaschCode
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.key} href={item.path} lang={i18n.language}>
                {t(`nav.${item.key}`)}
              </NavLink>
            ))}
          </div>

          {/* Desktop Controls */}
          <div className="hidden lg:flex items-center gap-2">
            <img
              src={Frame3}
              alt="AI Assistant"
              className="h-[34px] w-auto object-contain cursor-pointer"
              aria-label="AI Assistant"
            />
            <ThemeToggle theme={theme} onToggle={handleThemeToggle} />
            <div className="flex items-center gap-1">
              <button
                onClick={changeLanguage}
                className="text-14 font-cairo font-600 rounded px-2 py-1 transition text-white hover:text-gray-200 flex items-center"
                aria-label="Toggle language"
              >
                {i18n.language === 'ar' ? 'ع' : 'E'} <FiChevronDown className="ml-1" />
              </button>
              <FaGlobe className="text-14 text-white" />
            </div>
            <button
              className={`text-14 font-cairo font-600 flex items-center rounded-lg px-4 py-2 transition ${
                theme === 'light' ? (i18n.language === 'ar' ? 'bg-[#5B4D9D] bg-white/5 text-white shadow-md hover:bg-[#4A3D8B]' : 'bg-[#5B4D9D] text-white shadow-md hover:bg-[#4A3D8B]') : 'text-white hover:text-gray-200'
              }`}
              aria-label={t('common.login')}
            >
              <IoPersonOutline className="mr-1" /> {t('common.login')}
            </button>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden flex items-center justify-between w-full h-[43px]">
            {/* Hamburger Menu (Left) */}
            <button
              onClick={toggleMenu}
              className="p-2 text-white dark:text-white"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <HiX className="h-5 w-5" /> : <HiMenuAlt3 className="h-5 w-5" />}
            </button>

            {/* Logo (Center) */}
            <a href="/" className="flex items-center gap-2 mx-auto" aria-label="HaschCode Home">
              <img src={Logo} alt="HaschCode Logo" className="h-[36px] w-auto object-contain" />
              <span
                className="text-24 text-white dark:text-white font-fahkwang font-700"
              >
                HaschCode
              </span>
            </a>

            {/* Language Switcher (Right) */}
            <div className="flex items-center gap-1">
              <button
                onClick={changeLanguage}
                className="text-14 font-cairo font-600 rounded px-2 py-1 transition text-white hover:text-gray-200 flex items-center"
                aria-label="Toggle language"
              >
                {i18n.language === 'ar' ? 'ع' : 'E'} <FiChevronDown className="ml-1" />
              </button>
              <FaGlobe className="text-14 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`lg:hidden fixed inset-0 z-50 flex backdrop-blur-md transition-opacity duration-300 ${theme === 'dark' ? 'bg-gradient-to-b from-gray-900 to-gray-800 bg-opacity-90' : 'bg-gray-800 bg-opacity-90'}`}>
          <div className="w-full h-full flex" style={{ direction: i18n.language === 'ar' ? 'rtl' : 'ltr' }}>
            <div className="w-3/4 bg-transparent p-6">
              <button
                onClick={closeMenu}
                className="text-white dark:text-gray-200 hover:text-gray-300 mb-6 transition"
                aria-label="Close menu"
              >
                <HiX className="h-6 w-6" />
              </button>
              <div className="flex flex-col space-y-2">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.key}
                    href={item.path}
                    onClick={closeMenu}
                    className="text-white dark:text-gray-200 text-14 font-cairo font-600 hover:bg-gray-700 hover:bg-opacity-50 rounded-md px-4 py-2 transition-all duration-300"
                    aria-label={t(`nav.${item.key}`)}
                  >
                    {t(`nav.${item.key}`)}
                  </a>
                ))}
              </div>
            </div>
            <div className="w-1/4" onClick={closeMenu}></div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;