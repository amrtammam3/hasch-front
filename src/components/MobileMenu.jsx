
import React from 'react';
import { useLanguage, LANGS } from '../context/LanguageContext';
import { HiX } from 'react-icons/hi';
import { IoPersonOutline } from 'react-icons/io5';
import clsx from 'clsx';
import ThemeToggle from './ThemeToggle';

const MobileMenu = ({ isOpen, closeMenu, theme, navItems }) => {
  const { t, currentLang } = useLanguage();

  if (!isOpen) return null;

  return (
    <div
      className={clsx(
        'lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ease-in-out',
        theme === 'dark' ? 'bg-gray-900/95' : 'bg-gray-800/95'
      )}
      onClick={closeMenu}
    >
      <div
        className={clsx(
          'w-80 max-w-[90%] h-full bg-white dark:bg-gray-800 shadow-2xl transition-transform duration-300 ease-in-out',
          currentLang === LANGS.AR ? 'right-0 translate-x-0' : 'left-0 translate-x-0',
          isOpen ? 'translate-x-0' : currentLang === LANGS.AR ? 'translate-x-full' : '-translate-x-full'
        )}
        style={{ direction: t('direction') === 'rtl' ? 'rtl' : 'ltr' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full px-5 py-6">
          {/* Close Button */}
          <div className="flex justify-end">
            <button
              onClick={closeMenu}
              className="p-2 text-gray-900 dark:text-white hover:text-primary-darken-2 dark:hover:text-primary-light transition-colors rounded-full"
              aria-label="Close menu"
            >
              <HiX className="h-7 w-7" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-4 mt-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.path}
                onClick={closeMenu}
                className={clsx(
                  'text-16 font-cairo font-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700/50 rounded-lg px-4 py-3 transition-colors duration-200',
                  currentLang === LANGS.AR ? 'text-right' : 'text-left'
                )}
                aria-label={t(`nav.${item.key}`)}
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </nav>

          {/* Bottom Controls */}
          <div className="mt-auto flex flex-col gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div
              className={clsx(
                'flex items-center gap-4',
                currentLang === LANGS.AR ? 'justify-end' : 'justify-start'
              )}
            >
              <span
                className={clsx(
                  'text-14 font-cairo font-600 text-gray-900 dark:text-white',
                  currentLang === LANGS.AR ? 'text-right' : 'text-left'
                )}
              >
                {t('common.theme')}
              </span>
              <ThemeToggle />
            </div>
            <a
              href="/login"
              onClick={closeMenu}
              className={clsx(
                'flex items-center gap-3 text-16 font-cairo font-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700/50 rounded-lg px-4 py-3 transition-colors duration-200',
                currentLang === LANGS.AR ? 'justify-end' : 'justify-start'
              )}
              aria-label={t('common.login')}
            >
              <IoPersonOutline className="h-5 w-5" />
              {t('common.login')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;