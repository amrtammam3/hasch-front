import React from 'react';
import { FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import Logo from '../assets/images/haschcode-logo.svg';

// Footer component with company info and social links
const Footer = () => {
  return (
    <footer className="bg-[#13022E] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="col-span-1 md:col-span-5">
            <div className="flex items-center gap-4 mb-4 mt-8">
              <img src={Logo} alt="HaschCode Logo" className="w-16 h-16" />
              <h2 className="text-5xl font-bold">HaschCode</h2>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-semibold mb-6">About Us</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              we are a start up  with<br />
              an international team work<br />
              from all over the world
            </p>
          </div>
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-semibold mb-6">Get Started</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Start up
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Website
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Application
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Landing Page
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-3">
            <h3 className="text-xl font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Help center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Privacy policies
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300 mb-4 md:mb-0">
              2025 All rights reserved to Hasch Code
            </p>
            <div className="flex space-x-6">
              <p className="text-sm text-gray-300 mr-4">Follow us :</p>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <FaXTwitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <FaWhatsapp size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;