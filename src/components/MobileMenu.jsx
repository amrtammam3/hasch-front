// components/MobileMenu.js
// Mobile menu component for responsive navigation
import { useLanguage } from '../context/LanguageContext';
import { HiX } from 'react-icons/hi';
import clsx from 'clsx';

const MobileMenu = ({ isOpen, closeMenu, theme, navItems }) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div
      className={clsx(
        'lg:hidden fixed inset-0 z-50 flex backdrop-blur-md transition-opacity duration-300',
        theme === 'dark' ? 'bg-gradient-to-b from-gray-900 to-gray-800 bg-opacity-90' : 'bg-gray-800 bg-opacity-90'
      )}
    >
      <div className="w-full h-full flex" style={{ direction: t('direction') === 'rtl' ? 'rtl' : 'ltr' }}>
        <div className="w-3/4 bg-transparent p-6">
          {/* Close button */}
          <button
            onClick={closeMenu}
            className="text-white dark:text-gray-200 hover:text-gray-300 mb-6 transition"
            aria-label="Close menu"
          >
            <HiX className="h-6 w-6" />
          </button>
          {/* Navigation links */}
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
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
        {/* Empty space to close menu on click */}
        <div className="w-1/4" onClick={closeMenu}></div>
      </div>
    </div>
  );
};

export default MobileMenu;