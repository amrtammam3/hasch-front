
import React, { useState, useEffect } from 'react';
import Logo from '../assets/images/haschcode-logo.svg';
import Frame3 from '../assets/images/Frame 3.png';
import LandSwitchDark from '../assets/images/Land Switch - Dark.png';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

// Responsive navigation bar with mobile menu and theme toggle
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'News', path: '/news' },
    { name: 'Events', path: '/events' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className={`${darkMode ? 'bg-[#1a0b3a]' : 'bg-white'} fixed top-0 left-0 w-full z-50 shadow-md transition`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center h-20">
          <a href="/" className="flex items-center gap-2 flex-shrink-0 ml-4 md:ml-6 lg:ml-8">
            <img
              src={Logo}
              alt="HaschCode Logo"
              className="h-10 md:h-12 lg:h-16 w-auto max-w-[44px] md:max-w-[48px] lg:max-w-[56px] object-contain"
            />
            <span className={`text-lg md:text-xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>
              HaschCode
            </span>
          </a>
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className={`relative text-lg font-medium transition duration-300 
                  ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-800 hover:text-black'}
                  after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-[2px]
                  after:bg-white after:transition-all after:duration-300`}
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
            <img
              src={LandSwitchDark}
              alt="Theme Toggle"
              className="h-14 w-auto max-w-[52px] object-contain cursor-pointer"
            />
            <div className="flex items-center gap-2">
              <span className={`text-lg ${darkMode ? 'text-white' : 'text-black'}`}>EN</span>
              <svg className="w-5 h-5" fill="none" stroke={darkMode ? 'white' : 'black'} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <button className={`${darkMode ? 'text-white' : 'text-black'} hover:text-gray-400 transition text-lg`}>
              Log in
            </button>
          </div>
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu} className={`${darkMode ? 'text-white' : 'text-black'} p-2`}>
              {isOpen ? <HiX className="h-6 w-6" /> : <HiMenuAlt3 className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className={`${darkMode ? 'bg-[#1a0b3a]' : 'bg-white'} lg:hidden border-t border-gray-700 transition-all duration-300`}>
          <div className="flex flex-col items-start px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={closeMenu}
                className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-800 hover:text-black'} text-base font-medium`}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 w-full space-y-4 border-t border-gray-600">
              <img src={Frame3} alt="AI Assistant" className="h-10 w-auto object-contain cursor-pointer" />
              <img src={LandSwitchDark} alt="Theme Toggle" className="h-8 w-auto object-contain cursor-pointer" />
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className={`text-sm ${darkMode ? 'text-white' : 'text-black'}`}>EN</span>
                  <svg className="w-4 h-4" fill="none" stroke={darkMode ? 'white' : 'black'} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <button className={`${darkMode ? 'text-white' : 'text-black'} hover:text-gray-400 transition`}>
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