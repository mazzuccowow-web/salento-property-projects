/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Shield, XCircle, CheckCircle2 } from 'lucide-react';

// IMMAGINI LOCALI
import missionImg from "../photo/andrea.png";
import approachImg from "../photo/comp.png";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-24" id="about-page">
      <div className="max-w-7xl mx-auto px-6">

        {/* NEW SECTION: INDEPENDENT PROJECT COORDINATION */}
        <div className="mb-32 space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            {/* Titolo reso più grande */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-black leading-tight">
              {t('about.indTitle')}
            </h2>
            <div className="space-y-6 text-lg text-brand-taupe font-light leading-relaxed">
              <p>{t('about.indDesc1')}</p>
              <p>{t('about.indDesc2')}</p>
              <p>{t('about.indDesc3')}</p>
            </div>
          </motion.div>

          {/* BOX IN EVIDENZA: WHY WE'RE DIFFERENT */}
          <div className="max-w-5xl mx-auto">
            {/* Titolo del box reso più grande */}
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-brand-black text-center mb-10">
              {t('about.differentTitle')}
            </h3>

            {/* Contenitore con sfondo beige/avorio chiaro */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-brand-beige/40 rounded-2xl p-8 md:p-12 border border-brand-sand shadow-lg space-y-6"
            >
              {/* Griglia 3x2 (le prime 6 frasi) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { text: t('about.diff1'), type: 'negative' },
                  { text: t('about.diff2'), type: 'negative' },
                  { text: t('about.diff3'), type: 'negative' },
                  { text: t('about.diff4'), type: 'positive' },
                  { text: t('about.diff5'), type: 'positive' },
                  { text: t('about.diff6'), type: 'positive' },
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-brand-white p-6 rounded-xl border border-brand-sand/60 flex items-center space-x-4 shadow-sm min-h-[90px]"
                  >
                    {item.type === 'negative' ? (
                      <XCircle className="w-5 h-5 text-red-500/80 flex-shrink-0" />
                    ) : (
                      /* Icone di spunta positiva impostate su VERDE */
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    )}
                    <span className="text-sm md:text-base font-serif text-brand-black font-semibold">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* L'ultima frase (la 7ª) centrata sotto e più marcata */}
              <div className="flex justify-center pt-2">
                <div className="bg-brand-gold text-brand-black px-8 py-5 rounded-xl shadow-md border border-brand-gold flex items-center justify-center space-x-3 max-w-md w-full hover:scale-[1.02] transition-transform">
                  <Shield className="w-6 h-6 flex-shrink-0" />
                  <span className="font-serif font-bold text-lg md:text-xl tracking-wide uppercase">
                    {t('about.diff7')}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* TITLE */}
        <header className="mb-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif text-brand-black mb-6"
          >
            {t('about.title')}
          </motion.h1>
          <div className="w-20 h-1 bg-brand-gold mx-auto mb-8"></div>
        </header>

        {/* MISSION SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-serif text-brand-black">
              {t('about.mission')}
            </h2>
            <p className="text-lg text-brand-taupe leading-relaxed font-light">
              {t('about.missionDesc1')}
            </p>
            <p className="text-lg text-brand-taupe leading-relaxed font-light">
              {t('about.missionDesc2')}
            </p>
          </motion.div>

          {/* IMAGE 1 - MISSION */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-md mx-auto md:h-[350px] relative"
          >
            <img
              src={missionImg}
              alt="Mission"
              className="w-full h-auto md:h-full object-contain md:object-cover rounded-lg shadow-xl block"
            />
          </motion.div>
        </div>

        {/* TEAM SECTION (WHO WE ARE) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center flex-row-reverse mb-32">
          {/* IMAGE 2 - TEAM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[300px] max-w-md mx-auto w-full md:order-1"
          >
            <img
              src={approachImg}
              alt="Team"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 md:order-2"
          >
            <h2 className="text-3xl font-serif text-brand-black">
              {t('about.teamTitle')}
            </h2>
            <p className="text-lg text-brand-taupe leading-relaxed font-light">
              {t('about.whoWeAreDesc')}
            </p>

            <div className="border-l-4 border-brand-gold pl-6 py-3">
              <h3 className="text-xl font-serif text-brand-black mb-1">
                {t('about.andreaName')}
              </h3>
              <p className="text-brand-gold font-semibold mb-3">
                {t('about.andreaRole')}
              </p>
              <p className="text-brand-taupe font-light leading-relaxed">
                {t('about.andreaDesc')}
              </p>
            </div>

            <div className="border-l-4 border-brand-gold pl-6 py-3">
              <h3 className="text-xl font-serif text-brand-black mb-1">
                {t('about.mirellaName')}
              </h3>
              <p className="text-brand-gold font-semibold mb-3">
                {t('about.mirellaRole')}
              </p>
              <p className="text-brand-taupe font-light leading-relaxed">
                {t('about.mirellaDesc')}
              </p>
            </div>

            <p className="text-lg text-brand-taupe leading-relaxed font-light">
              {t('about.teamDesc')}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
