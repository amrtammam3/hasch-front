




// import React, { useState, useEffect } from 'react';
// import clsx from 'clsx';
// import Logo from '../assets/images/Logo3000px.png';
// import Frame3 from '../assets/images/Frame 3.png';
// import { HiMenuAlt3, HiX } from 'react-icons/hi';
// import { IoPersonOutline } from 'react-icons/io5';
// import { FaGlobe } from 'react-icons/fa';
// import ThemeToggle from '../components/ThemeToggle.jsx';
// import MobileMenu from '../components/MobileMenu.jsx';
// import { useLanguage, LANGS } from '../context/LanguageContext.jsx';
// import { useTheme } from '../context/ThemeContext.jsx';

// // Array of navigation items with keys and paths
// const NAV_ITEMS = [
//   { key: 'home', path: '/' },
//   { key: 'courses', path: '/courses' },
//   { key: 'portfolio', path: '/portfolio' },
//   { key: 'news', path: '/news' },
//   { key: 'events', path: '/events' },
//   { key: 'about', path: '/about' },
//   { key: 'contact', path: '/contact' },
// ];

// // Component for rendering individual navigation links
// const NavLink = ({ href, children }) => (
//   <a
//     href={href}
//     className="relative text-16 font-cairo font-600 text-white hover:text-gray-200 after:absolute after:bottom-[-4px] after:inset-x-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white after:transition-all after:duration-300 tracking-wider"
//     aria-label={children}
//   >
//     {children}
//   </a>
// );

// // Component for rendering the language selection dropdown

// // ... باقي imports كما هو

// const LanguageDropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { t, currentLang, changeLanguage } = useLanguage();

//   const toggleDropdown = () => setIsOpen(!isOpen);
//   const handleLanguageChange = (lang) => {
//     changeLanguage(lang);
//     setIsOpen(false);
//   };

//   return (
//     <div className="relative flex items-center z-50">
//       <button
//         onClick={toggleDropdown}
//         className="text-14 font-cairo font-600 rounded px-2 py-1 transition text-white hover:text-gray-200 flex items-center"
//         aria-label="Toggle language dropdown"
//       >
//         {currentLang === LANGS.AR ? 'ع' : 'EN'}
//         <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//         </svg>
//       </button>
//       {isOpen && (
//         <div
//           className={clsx(
//             'absolute top-[2.25rem] mt-1 bg-white dark:bg-gray-800 rounded-md shadow-lg z-50',
//             'w-[90px] max-w-[90vw] overflow-hidden',
//             'left-1/2 transform -translate-x-1/2',
//             'sm:w-[100px] sm:max-w-none sm:transform-none',
//             currentLang === LANGS.AR ? 'sm:right-0 sm:left-auto' : 'sm:left-0'
//           )}
//         >
//           <button
//             onClick={() => handleLanguageChange(LANGS.EN)}
//             className="block w-full text-center px-2 py-2 text-13 font-cairo font-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
//           >
//             English
//           </button>
//           <button
//             onClick={() => handleLanguageChange(LANGS.AR)}
//             className="block w-full text-center px-2 py-2 text-13 font-cairo font-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
//           >
//             العربية
//           </button>
//         </div>
//       )}

//     </div>
//   );
// };

// // const LanguageDropdown = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const { t, currentLang, changeLanguage } = useLanguage();

// //   // Toggle the dropdown visibility
// //   const toggleDropdown = () => setIsOpen(!isOpen);

// //   // Handle language change and close dropdown
// //   const handleLanguageChange = (lang) => {
// //     changeLanguage(lang);
// //     setIsOpen(false);
// //   };

// //   return (
// //     <div className="relative flex items-center">
// //       <button
// //         onClick={toggleDropdown}
// //         className="text-14 font-cairo font-600 rounded px-2 py-1 transition text-white hover:text-gray-200 flex items-center"
// //         aria-label="Toggle language dropdown"
// //       >
// //         {currentLang === LANGS.AR ? 'ع' : 'EN'}
// //         <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
// //         </svg>
// //       </button>
// //       {isOpen && (
// //         <div
// //           className={clsx(
// //             'absolute top-[2.25rem] mt-1 w-[90px] bg-white dark:bg-gray-800 rounded-md shadow-lg z-50 overflow-x-hidden', // Reduced width and added overflow
// //             'min-w-[80px] max-w-[calc(100vw-4rem)]', // Tighter constraints for mobile
// //             currentLang === LANGS.AR ? 'right-0' : 'left-0', // Simplified positioning
// //             'sm:w-[100px] sm:right-0 sm:left-auto' // Tablet adjustments
// //           )}
// //         >
// //           <button
// //             onClick={() => handleLanguageChange(LANGS.EN)}
// //             className="block w-full text-center px-2 py-2 text-13 font-cairo font-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
// //           >
// //             English
// //           </button>
// //           <button
// //             onClick={() => handleLanguageChange(LANGS.AR)}
// //             className="block w-full text-center px-2 py-2 text-13 font-cairo font-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
// //           >
// //             العربية
// //           </button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // Main Navbar component
// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { t, currentLang } = useLanguage();
//   const { theme } = useTheme();

//   // Toggle the mobile menu visibility
//   const toggleMenu = () => setIsOpen(!isOpen);
  
//   // Close the mobile menu
//   const closeMenu = () => setIsOpen(false);

//   // Manage body overflow when mobile menu is open
//   useEffect(() => {
//     document.body.style.overflow = isOpen ? 'hidden' : '';
//     return () => {
//       document.body.style.overflow = '';
//     };
//   }, [isOpen]);

//   return (
//     <nav className="bg-transparent z-50 absolute top-[30px] w-full transition-colors duration-300" role="navigation">
//       <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1300px]">
//         <div className="flex items-center justify-between h-[47px]">
//           {/* Logo and brand name for desktop view */}
//           <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
//             <a href="/" className="flex items-center gap-1" aria-label="HaschCode Home">
//               <img src={Logo} alt="HaschCode Logo" className="h-[36px] w-auto object-contain" />
//               <span className="text-24 text-white dark:text-white font-fahkwang font-700">
//                 HaschCode
//               </span>
//             </a>
//           </div>

//           {/* Navigation links for desktop view */}
//           <div className="hidden lg:flex items-center gap-12">
//             {NAV_ITEMS.map((item) => (
//               <NavLink key={item.key} href={item.path}>
//                 {t(`nav.${item.key}`)}
//               </NavLink>
//             ))}
//           </div>

//           {/* Right-side controls for desktop view */}
//           <div className="hidden lg:flex items-center gap-3">
//             <ThemeToggle />
//             <div className="flex items-center gap-0.5">
//               <LanguageDropdown />
//               <FaGlobe className="text-14 text-white" />
//             </div>
//           </div>

//           {/* Mobile view layout */}
//           <div
//             className={clsx(
//               'lg:hidden flex items-center justify-between w-full h-14 px-2 sm:px-4',
//               currentLang === LANGS.AR ? 'flex-row-reverse' : 'flex-row'
//             )}
//           >
//             {/* Hamburger menu */}
//             <div className={clsx(currentLang === LANGS.AR ? 'order-3' : 'order-1')}>
//               <button
//                 onClick={toggleMenu}
//                 className="p-2 text-white hover:text-gray-200 transition-colors"
//                 aria-label={isOpen ? 'Close menu' : 'Open menu'}
//               >
//                 {isOpen ? <HiX className="h-6 w-6" /> : <HiMenuAlt3 className="h-6 w-6" />}
//               </button>
//             </div>

//             {/* Logo and brand name (centered) */}
//             <div className="order-2 flex justify-center flex-1">
//               <a href="/" className="flex items-center gap-2" aria-label="HaschCode Home">
//                 <img src={Logo} alt="HaschCode Logo" className="h-9 w-auto object-contain" />
//                 <span className="text-22 text-white font-fahkwang font-700">
//                   HaschCode
//                 </span>
//               </a>
//             </div>

//             {/* Language dropdown and globe icon */}
//             <div className={clsx('flex items-center gap-1', currentLang === LANGS.AR ? 'order-1' : 'order-3')}>
//               <FaGlobe className="text-16 text-white" />
//               <LanguageDropdown />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu component */}
//       <MobileMenu isOpen={isOpen} closeMenu={closeMenu} theme={theme} navItems={NAV_ITEMS} />
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Logo from '../assets/images/Logo3000px.png';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaGlobe } from 'react-icons/fa';
import { BsMoon, BsSun } from 'react-icons/bs';
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
    className="relative text-16 font-cairo font-600 text-white hover:text-gray-200 after:absolute after:bottom-[-4px] after:inset-x-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white after:transition-all after:duration-300 tracking-wider"
    aria-label={children}
  >
    {children}
  </a>
);

// Component for rendering the language selection dropdown
const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, currentLang, changeLanguage } = useLanguage();

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative flex items-center z-50">
      <button
        onClick={toggleDropdown}
        className="text-14 font-cairo font-600 rounded px-2 py-1 transition text-white hover:text-gray-200 flex items-center"
        aria-label="Toggle language dropdown"
      >
        {currentLang === LANGS.AR ? 'ع' : 'EN'}
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div
          className={clsx(
            'absolute top-[2.25rem] mt-1 bg-white dark:bg-gray-800 rounded-md shadow-lg z-50',
            'w-[90px] max-w-[90vw] overflow-hidden',
            'left-1/2 transform -translate-x-1/2',
            'sm:w-[100px] sm:transform-none',
            currentLang === LANGS.AR ? 'sm:right-0 sm:left-auto' : 'sm:left-0'
          )}
        >
          <button
            onClick={() => handleLanguageChange(LANGS.EN)}
            className="block w-full text-center px-2 py-2 text-13 font-cairo font-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            English
          </button>
          <button
            onClick={() => handleLanguageChange(LANGS.AR)}
            className="block w-full text-center px-2 py-2 text-13 font-cairo font-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
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
  const { theme, toggleTheme } = useTheme();

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
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1300px]">
        <div className="flex items-center justify-between h-[47px]">
          {/* Logo and brand name for desktop view */}
          <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
            <a href="/" className="flex items-center gap-1" aria-label="HaschCode Home">
              <img src={Logo} alt="HaschCode Logo" className="h-[36px] w-auto object-contain" />
              <span className="text-24 text-white dark:text-white font-fahkwang font-700">
                HaschCode
              </span>
            </a>
          </div>

          {/* Navigation links for desktop view */}
          <div className="hidden lg:flex items-center gap-12">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.key} href={item.path}>
                {t(`nav.${item.key}`)}
              </NavLink>
            ))}
          </div>

          {/* Right-side controls for desktop view */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <div className="flex items-center gap-0.5">
              <LanguageDropdown />
              <FaGlobe className="text-14 text-white" />
            </div>
          </div>

          {/* Mobile view layout */}
          <div
            className={clsx(
              'lg:hidden flex items-center justify-between w-full h-14 px-2 sm:px-4',
              currentLang === LANGS.AR ? 'flex-row-reverse' : 'flex-row'
            )}
          >
            {/* Hamburger menu and theme toggle */}
            <div className={clsx('flex items-center gap-1', currentLang === LANGS.AR ? 'order-3' : 'order-1')}>
              <button
                onClick={toggleTheme}
                className="p-2 text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6B46C1] rounded-full transition-colors"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? <BsSun className="h-5 w-5" /> : <BsMoon className="h-5 w-5" />}
              </button>
              <button
                onClick={toggleMenu}
                className="p-2 text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6B46C1] rounded-full transition-colors"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                {isOpen ? <HiX className="h-6 w-6" /> : <HiMenuAlt3 className="h-6 w-6" />}
              </button>
            </div>

            {/* Logo and brand name (centered) */}
            <div className="order-2 flex justify-center flex-1">
              <a href="/" className="flex items-center gap-2" aria-label="HaschCode Home">
                <img src={Logo} alt="HaschCode Logo" className="h-9 w-auto object-contain" />
                <span className="text-24 text-white font-fahkwang font-700">
                  HaschCode
                </span>
              </a>
            </div>

            {/* Language dropdown and globe icon */}
            <div className={clsx('flex items-center gap-1', currentLang === LANGS.AR ? 'order-1' : 'order-3')}>
              <FaGlobe className="text-16 text-white" />
              <LanguageDropdown />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu component */}
      <MobileMenu isOpen={isOpen} closeMenu={closeMenu} navItems={NAV_ITEMS} />
    </nav>
  );
};

export default Navbar;