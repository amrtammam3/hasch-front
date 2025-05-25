import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Logo from '../assets/images/haschcode-logo.svg';
import Frame3 from '../assets/images/Frame 3.png';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { IoPersonOutline } from 'react-icons/io5';
import { FaGlobe } from 'react-icons/fa';
import ThemeToggle from '../components/ThemeToggle.jsx';
import MobileMenu from '../components/MobileMenu.jsx';
import { useLanguage, LANGS } from '../context/LanguageContext.jsx';
import { useTheme } from '../context/ThemeContext.jsx';

// Array of navigation items with keys and paths
const NAV_ITEMS = [
  { key: 'home', path: '/' },
  { key: 'courses', path: '/courses' },
  { key: 'portfolio', path: '/portfolio' },
  { key: 'news', path: '/news' },
  { key: 'events', path: '/events' },
  { key: 'about', path: '/about' },
  { key: 'contact', path: '/contact' },
];

// Component for rendering individual navigation links
const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="relative text-14 font-cairo font-600 text-white hover:text-gray-200 after:absolute after:bottom-[-4px] after:inset-x-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white after:transition-all after:duration-300 tracking-wider"
    aria-label={children}
  >
    {children}
  </a>
);

// Component for rendering the language selection dropdown
const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, currentLang, changeLanguage } = useLanguage();

  // Toggle the dropdown visibility
  const toggleDropdown = () => setIsOpen(!isOpen);

  // Handle language selection and close dropdown
  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative flex items-center">
      <button
        onClick={toggleDropdown}
        className="text-14 font-cairo font-600 rounded px-2 py-1 transition text-white hover:text-gray-200 flex items-center"
        aria-label="Toggle language dropdown"
      >
        {currentLang === LANGS.AR ? 'ع' : 'EN'}
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-full mt-2 w-32 bg-white dark:bg-gray-800 rounded-md shadow-lg z-50">
          <button
            onClick={() => handleLanguageChange(LANGS.EN)}
            className="block w-full text-left px-4 py-2 text-14 font-cairo font-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            English
          </button>
          <button
            onClick={() => handleLanguageChange(LANGS.AR)}
            className="block w-full text-left px-4 py-2 text-14 font-cairo font-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            العربية
          </button>
        </div>
      )}
    </div>
  );
};

// Main Navbar component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, currentLang } = useLanguage();
  const { theme } = useTheme();

  // Toggle the mobile menu visibility
  const toggleMenu = () => setIsOpen(!isOpen);
  
  // Close the mobile menu
  const closeMenu = () => setIsOpen(false);

  // Manage body overflow when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav className="bg-transparent z-50 absolute top-[30px] w-full transition-colors duration-300" role="navigation">
      <div className="mx-auto px-1 max-w-7xl">
        <div className="flex items-center justify-between h-[43px]">
          {/* Logo and brand name for desktop view */}
          <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
            <a href="/" className="flex items-center gap-2" aria-label="HaschCode Home">
              <img src={Logo} alt="HaschCode Logo" className="h-[36px] w-auto object-contain" />
              <span className="text-24 text-white dark:text-white font-fahkwang font-700">
                HaschCode
              </span>
            </a>
          </div>

          {/* Navigation links for desktop view */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.key} href={item.path}>
                {t(`nav.${item.key}`)}
              </NavLink>
            ))}
          </div>

          {/* Right-side controls for desktop view (AI Assistant, Theme Toggle, Language Dropdown, Login) */}
          <div className="hidden lg:flex items-center gap-1.5">
            <img
              src={Frame3}
              alt="AI Assistant"
              className="h-[34px] w-auto object-contain cursor-pointer"
              aria-label="AI Assistant"
            />
            <ThemeToggle />
            <div className="flex items-center gap-0.5">
              <LanguageDropdown />
              <FaGlobe className="text-14 text-white" />
            </div>
            <button
              className={clsx(
                'text-14 font-cairo font-600 flex items-center rounded-lg px-4 py-2 transition',
                theme === 'light' && currentLang === LANGS.AR
                  ? 'bg-primary bg-white/5 text-textWhite shadow-md hover:bg-primaryHover'
                  : 'text-textWhite hover:text-textGray'
              )}
              aria-label={t('common.login')}
            >
              <IoPersonOutline className="mr-1" /> {t('common.login')}
            </button>
          </div>

          {/* Mobile view layout */}
          <div className="lg:hidden flex items-center justify-between w-full h-[43px]">
            {/* Menu toggle button */}
            <button
              onClick={toggleMenu}
              className="p-2 text-white dark:text-white"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <HiX className="h-5 w-5" /> : <HiMenuAlt3 className="h-5 w-5" />}
            </button>

            {/* Logo and brand name for mobile view */}
            <a href="/" className="flex items-center gap-2 mx-auto" aria-label="HaschCode Home">
              <img src={Logo} alt="HaschCode Logo" className="h-[36px] w-auto object-contain" />
              <span className="text-24 text-white dark:text-white font-fahkwang font-700">
                HaschCode
              </span>
            </a>

            {/* Language dropdown and globe icon for mobile view */}
            <div className="flex items-center gap-0.5">
              <LanguageDropdown />
              <FaGlobe className="text-14 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu component */}
      <MobileMenu isOpen={isOpen} closeMenu={closeMenu} theme={theme} navItems={NAV_ITEMS} />
    </nav>
  );
};

export default Navbar;