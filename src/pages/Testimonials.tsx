/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Testimonials() {
  const { t } = useTranslation();

  const testimonialsList = [
    {
      id: 'ian-fielding',
      author: t('testimonials.items.ian.author'),
      locationBadge: t('testimonials.items.ian.locationBadge'),
      p1: t('testimonials.items.ian.p1'),
      p2: t('testimonials.items.ian.p2'),
      highlight: t('testimonials.items.ian.highlight')
    },
    {
      id: 'silvana-de-palma',
      author: t('testimonials.items.silvana.author'),
      locationBadge: t('testimonials.items.silvana.locationBadge'),
      p1: t('testimonials.items.silvana.p1'),
      p2: t('testimonials.items.silvana.p2'),
      highlight: t('testimonials.items.silvana.highlight')
    },
    {
      id: 'hgm-management',
      author: t('testimonials.items.hgm.author'),
      locationBadge: t('testimonials.items.hgm.locationBadge'),
      p1: t('testimonials.items.hgm.p1'),
      p2: t('testimonials.items.hgm.p2'),
      highlight: t('testimonials.items.hgm.highlight')
    }
  ];

  return (
    <div className="pt-32 pb-28 min-h-screen" id="testimonials-page">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER SECTION */}
        <header className="text-center max-w-4xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold block mb-3"
          >
            {t('testimonials.eyebrow')}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif text-brand-black mb-6"
          >
            {t('testimonials.title')}
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-brand-gold mx-auto mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-brand-taupe font-light leading-relaxed max-w-3xl mx-auto"
          >
            {t('testimonials.subtitle')}
          </motion.p>
        </header>

        {/* GRID TESTIMONIALS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsList.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              className="bg-brand-beige border border-brand-sand rounded-2xl p-8 relative flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Filigrana */}
              <span className="absolute top-6 right-8 text-7xl font-serif text-brand-gold/20 select-none leading-none pointer-events-none">
                “
              </span>

              <div>
                {/* Location Badge */}
                <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-brand-gold mb-6">
                  <span className="inline-block w-2 h-2 rounded-full bg-brand-gold"></span>
                  <span>{item.locationBadge}</span>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-brand-taupe text-base leading-relaxed font-light space-y-4 mb-8">
                  {item.p1 && <p>{item.p1}</p>}
                  {item.p2 && <p>{item.p2}</p>}
                  {item.highlight && (
                    <strong className="font-semibold text-brand-black block pt-2">
                      {item.highlight}
                    </strong>
                  )}
                </blockquote>
              </div>

              {/* Client Signature: Nome — Zona, Città */}
              <div className="pt-6 border-t border-brand-sand flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-base md:text-lg font-serif font-bold text-brand-black">
                    {item.author}
                  </h3>
                </div>
                <span className="text-xs text-brand-gold border border-brand-gold/40 px-2.5 py-1 rounded-full font-medium whitespace-nowrap bg-brand-white">
                  {t('testimonials.verifiedBadge')}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CTA CALLOUT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-brand-beige/60 rounded-2xl p-10 md:p-12 border border-brand-sand"
        >
          <h3 className="text-2xl md:text-3xl font-serif text-brand-black mb-3">
            {t('testimonials.ctaTitle')}
          </h3>
          <p className="text-brand-taupe font-light mb-8 max-w-xl mx-auto">
            {t('testimonials.ctaSubtitle')}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-brand-black text-brand-white px-8 py-4 rounded-xl font-medium hover:bg-brand-gold transition-colors shadow-sm"
          >
            {t('testimonials.ctaButton')}
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
