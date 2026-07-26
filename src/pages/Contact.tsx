/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('pending');

    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      // @ts-ignore
      body: new URLSearchParams(formData).toString(),
    })
      .then((response) => {
        if (response.ok) {
          setStatus('success');
          form.reset();
        } else {
          setStatus('error');
        }
      })
      .catch((error) => {
        console.error(error);
        setStatus('error');
      });
  };

  return (
    <div className="pt-32 pb-24" id="contact-page">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif text-brand-black mb-6"
          >
            {t('contact.title')}
          </motion.h1>
          <div className="w-20 h-1 bg-brand-gold mx-auto mb-8"></div>
          <p className="text-xl text-brand-taupe font-light">{t('contact.subtitle')}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="bg-brand-gold/10 p-4 rounded-full">
                  <Phone className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-brand-black mb-1">{t('contact.callUs')}</h4>
                  <p className="text-brand-taupe">+44 7465 207494 (UK)</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-brand-gold/10 p-4 rounded-full">
                  <Mail className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-brand-black mb-1">{t('contact.emailUs')}</h4>
                  <p className="text-brand-taupe">office@salentopropertyprojects.co.uk</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-brand-gold/10 p-4 rounded-full">
                  <MapPin className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-brand-black mb-1">{t('contact.presence')}</h4>
                  <p className="text-brand-taupe">London, UK | Nardò, Italy</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-sand/30 p-8 rounded-xl border border-brand-sand">
              <h4 className="font-serif text-xl mb-4 flex items-center space-x-3">
                <MessageSquare className="w-5 h-5 text-brand-gold" />
                <span>{t('contact.whatsapp')}</span>
              </h4>
              <p className="text-sm text-brand-taupe mb-6">{t('contact.whatsappDesc')}</p>
              <a 
                href="https://wa.me/447465207494" 
                target="_blank" 
                rel="noreferrer"
                className="bg-[#25D366] text-white px-6 py-3 rounded-full font-bold text-sm tracking-wide hover:opacity-90 transition-all flex items-center justify-center space-x-2" 
                id="whatsapp-button"
              >
                <span>{t('contact.openWhatsapp')}</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-brand-white p-10 rounded-xl shadow-xl border border-brand-sand"
            id="contact-form-container"
          >
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold tracking-widest text-brand-taupe">
                    {t('contact.form.name')}
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full bg-brand-beige border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-brand-gold transition-all"
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold tracking-widest text-brand-taupe">
                    {t('contact.form.email')}
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full bg-brand-beige border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-brand-gold transition-all"
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase font-bold tracking-widest text-brand-taupe">
                  {t('contact.form.projectType')}
                </label>
                <select
                  name="projectType"
                  className="w-full bg-brand-beige border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-brand-gold transition-all"
                >
                  <option value="Masseria Renovation">{t('contact.form.options.masseria')}</option>
                  <option value="Apartment Refurbishment">{t('contact.form.options.apartment')}</option>
                  <option value="Property Search Support">{t('contact.form.options.search')}</option>
                  <option value="Other">{t('contact.form.options.other')}</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase font-bold tracking-widest text-brand-taupe">
                  {t('contact.form.message')}
                </label>
                <textarea
                  name="message"
                  required
                  className="w-full bg-brand-beige border-none rounded-md px-4 py-3 h-32 focus:ring-2 focus:ring-brand-gold transition-all"
                  placeholder={t('contact.form.messagePlaceholder')}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'pending'}
                className="w-full bg-brand-black text-brand-white py-4 rounded-md font-bold tracking-widest uppercase hover:bg-brand-gold hover:text-brand-black transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                id="submit-button"
              >
                {status === 'pending' ? t('contact.form.sending') : t('contact.form.send')}
              </button>

              {status === 'success' && (
                <p className="text-green-600 text-sm font-semibold mt-2 text-center">
                  {t('contact.form.success')}
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-600 text-sm font-semibold mt-2 text-center">
                  {t('contact.form.error')}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
