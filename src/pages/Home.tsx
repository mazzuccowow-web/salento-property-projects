/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

import minister from "../photo/minister.png";
import company from "../photo/compani.png";
import homeph from "../photo/homeph.jpg";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div id="home-page">

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" id="hero">
        <div className="absolute inset-0 z-0">
          <img 
            src={homeph}
            alt="Beautiful Salento Masseria"
            className="w-full h-full object-cover grayscale-[20%] brightness-[70%]"
            id="hero-bg-image"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-transparent to-brand-beige/10"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          
          {/* 1. TITOLO */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-serif text-brand-white mb-6 leading-tight"
          >
            {t('hero.title')}
          </motion.h1>

          {/* 2. SOTTO-TITOLO (con andata a capo automatica) */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-brand-white/95 font-light mb-10 max-w-2xl mx-auto leading-relaxed whitespace-pre-line"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* 3. BOTTONE CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-10"
          >
            <a 
              href="https://wa.me/447465207494" 
              target="_blank" 
              rel="noreferrer"
              className="bg-brand-gold text-brand-black px-10 py-4 rounded-full font-sans font-bold tracking-wider hover:bg-brand-white transition-colors flex items-center space-x-3 mx-auto shadow-xl w-fit" 
              id="hero-cta-button"
            >
              <span>{t('hero.cta')}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* 4. DESCRIZIONE SOTTO AL BOTTONE (con andata a capo automatica, bianco opaco) */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm md:text-base text-brand-white/80 font-light max-w-2xl mx-auto leading-relaxed whitespace-pre-line"
          >
            {t('hero.description2')}
          </motion.p>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-16 bg-brand-black text-brand-beige text-center border-t border-b border-brand-beige/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-14">

          {/* LEFT IMAGE */}
          <div className="flex items-center justify-center">
            <img 
              src={minister}
              alt="Minister"
              className="h-28 md:h-32 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300"
              id="trust-badge-minister"
            />
          </div>

          {/* CENTER TEXT */}
          <div className="flex-1 italic font-serif text-xl md:text-3xl opacity-90 leading-relaxed max-w-3xl px-2">
            "We transform the complexity of Italian property renovation into a seamless, prestigious journey for our international clients."
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex items-center justify-center">
            <img 
              src={company}
              alt="Company"
              className="h-28 md:h-32 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300"
              id="trust-badge-company"
            />
          </div>

        </div>
      </section>

    </div>
  );
}
