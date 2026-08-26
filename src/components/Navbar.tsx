/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'it' : 'en';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.howItWorks'), path: '/how-it-works' },
    { name: t('nav.testimonials'), path: '/testimonials' },
    { name: "Buyer's Guide", path: '/buyers-guide' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-white/95 backdrop-blur-sm shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
      id="main-nav"
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* TEXT LOGO */}
        <Link to="/" className="flex flex-col" id="logo-link">
          <span className="text-3xl lg:text-4xl xl:text-5xl font-serif font-bold tracking-tight text-brand-black">
            SALENTO
          </span>
          <span className="text-xs lg:text-sm xl:text-base tracking-[0.2em] font-sans font-medium text-brand-gold uppercase -mt-1.5 md:-mt-2">
            Property Projects
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <div className="flex space-x-5 lg:space-x-7">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-brand-gold ${
                  location.pathname === link.path
                    ? 'text-brand-gold font-semibold'
                    : 'text-brand-black'
                }`}
                id={`nav-link-${link.name
                  .toLowerCase()
                  .replace(/\s+/g, '-')}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* LANGUAGE BUTTON (DESKTOP) */}
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-2 text-sm font-medium border border-brand-taupe/30 px-3 py-1.5 rounded-full hover:bg-brand-taupe/10 transition-colors"
            id="lang-toggle-desktop"
          >
            <img 
              src={i18n.language === 'en' ? "https://flagcdn.com/w20/gb.png" : "https://flagcdn.com/w20/it.png"} 
              alt={i18n.language === 'en' ? "English" : "Italiano"} 
              className="w-4 h-auto rounded-sm shadow-sm"
            />
            <span>{i18n.language.toUpperCase()}</span>
          </button>
        </div>

        {/* MOBILE */}
        <div className="flex md:hidden items-center space-x-4">
          {/* LANGUAGE BUTTON (MOBILE) */}
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-1.5 text-xs font-bold border border-brand-taupe/30 px-2.5 py-1 rounded-full"
            id="lang-toggle-mobile-icon"
          >
            <img 
              src={i18n.language === 'en' ? "https://flagcdn.com/w20/gb.png" : "https://flagcdn.com/w20/it.png"} 
              alt={i18n.language === 'en' ? "English" : "Italiano"} 
              className="w-4 h-auto rounded-sm"
            />
            <span>{i18n.language.toUpperCase()}</span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-brand-black"
            id="mobile-menu-toggle"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-white shadow-xl py-8 px-6 flex flex-col space-y-6 md:hidden"
            id="mobile-menu"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-serif transition-colors ${
                  location.pathname === link.path
                    ? 'text-brand-gold font-semibold'
                    : 'text-brand-black'
                }`}
                id={`mobile-nav-link-${link.name
                  .toLowerCase()
                  .replace(/\s+/g, '-')}`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
