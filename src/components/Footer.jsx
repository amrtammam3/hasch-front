import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import Logo from '../assets/images/haschcode-logo.svg';

// Footer component with company info and social links
const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary dark:bg-[#13022E] text-white py-10 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* موبايل فقط */}
        <div className="block md:hidden">
          <div className="flex items-center gap-4 mb-2 mt-2">
            <img src={Logo} alt="HaschCode Logo" className="w-12 h-12" />
            <h2 className="text-2xl font-bold">HaschCode</h2>
          </div>
          <div className="mb-2">
            <h3 className="text-lg font-semibold mb-1">{t('footer.aboutUs')}</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              {t('footer.aboutDescription')}
            </p>
          </div>
          <div className="w-full grid grid-cols-2 gap-4 mt-2">
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold mb-1">{t('footer.getStarted')}</h3>
              <ul className="space-y-1">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-xs">{t('footer.startup')}</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-xs">{t('footer.website')}</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-xs">{t('footer.application')}</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-xs">{t('footer.landingPage')}</a></li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold mb-1">{t('footer.support')}</h3>
              <ul className="space-y-1">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-xs">{t('footer.helpCenter')}</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-xs">{t('footer.myAccount')}</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-xs">{t('footer.contactUs')}</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-xs">{t('footer.privacyPolicies')}</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 flex flex-row-reverse items-center justify-between">
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300 transition-colors"><FaFacebookF size={20} /></a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors"><FaXTwitter size={20} /></a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors"><FaWhatsapp size={20} /></a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors"><FaInstagram size={20} /></a>
            </div>
            <p className="text-xs text-gray-300">{t('footer.rights')}</p>
          </div>
        </div>
        {/* ديسكتوب فقط */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="col-span-1 md:col-span-5">
              <div className="flex items-center gap-4 mb-4 mt-8">
                <img src={Logo} alt="HaschCode Logo" className="w-16 h-16" />
                <h2 className="text-5xl font-bold">HaschCode</h2>
              </div>
            </div>
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-semibold mb-6">{t('footer.aboutUs')}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {t('footer.aboutDescription')}
              </p>
            </div>
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-semibold mb-6">{t('footer.getStarted')}</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.startup')}</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.website')}</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.application')}</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.landingPage')}</a></li>
              </ul>
            </div>
            <div className="col-span-1 md:col-span-3">
              <h3 className="text-xl font-semibold mb-6">{t('footer.support')}</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.helpCenter')}</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.myAccount')}</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.contactUs')}</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.privacyPolicies')}</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-300 mb-4 md:mb-0">
                {t('footer.rights')}
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-white hover:text-gray-300 transition-colors"><FaFacebookF size={20} /></a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors"><FaXTwitter size={20} /></a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors"><FaWhatsapp size={20} /></a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors"><FaInstagram size={20} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;