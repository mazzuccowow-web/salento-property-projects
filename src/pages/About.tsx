/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

// IMMAGINI LOCALI
import missionImg from "../photo/andrea.png";
import approachImg from "../photo/comp.png";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-24" id="about-page">
      <div className="max-w-7xl mx-auto px-6">

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

        {/* MISSION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">

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

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-[350px] max-w-md mx-auto w-full"
          >
            <img
              src={missionImg}
              alt="Mission"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </motion.div>
        </div>

        {/* WHO WE ARE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center flex-row-reverse mb-32">

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

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 md:order-2"
          >

            <h2 className="text-3xl font-serif text-brand-black">
              {t('about.whoWeAre')}
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