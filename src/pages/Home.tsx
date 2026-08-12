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

      {/* TRUST SECTION (Con scritte e immagini leggermente più grandi) */}
      <section className="py-20 bg-brand-black text-brand-beige border-t border-b border-brand-beige/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* COLONNA SINISTRA: Testo a sinistra + Immagine Minister a destra */}
          <div className="col-span-1 lg:col-span-3 flex flex-row items-center gap-4 justify-center lg:justify-end">
            <p className="text-xs md:text-sm text-brand-white opacity-80 font-light leading-relaxed text-center sm:text-right max-w-[240px] lg:max-w-none">
              {t('home.trust.leftText')}
            </p>
            <div className="flex items-center justify-center flex-shrink-0">
              <img 
                src={minister}
                alt="Minister"
                className="h-28 md:h-32 xl:h-36 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300"
                id="trust-badge-minister"
              />
            </div>
          </div>

          {/* COLONNA CENTRALE: Citazione larga e simmetrica */}
          <div className="col-span-1 lg:col-span-6 text-center italic font-serif text-xl md:text-2xl xl:text-3xl opacity-90 leading-relaxed px-4">
            "We transform the complexity of Italian property renovation into a seamless, prestigious journey for our international clients."
          </div>

          {/* COLONNA DESTRA: Immagine Company a sinistra + Testo a destra */}
          <div className="col-span-1 lg:col-span-3 flex flex-row items-center gap-4 justify-center lg:justify-start">
            <div className="flex items-center justify-center flex-shrink-0">
              <img 
                src={company}
                alt="Company"
                className="h-28 md:h-32 xl:h-36 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300"
                id="trust-badge-company"
              />
            </div>
            <p className="text-xs md:text-sm text-brand-white opacity-80 font-light leading-relaxed text-center sm:text-left whitespace-pre-line max-w-[260px] lg:max-w-none">
              {t('home.trust.rightText')}
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
