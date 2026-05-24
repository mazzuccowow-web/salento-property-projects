/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-brand-black text-brand-beige py-16 px-6" id="main-footer">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
           <Link to="/" className="flex flex-col mb-6" id="footer-logo">
            <span className="text-2xl font-serif font-bold tracking-tight text-brand-white">
              SALENTO
            </span>
            <span className="text-xs tracking-[0.2em] font-sans font-medium text-brand-gold uppercase -mt-1">
              Property Projects
            </span>
          </Link>
          <p className="text-sm text-red-500 leading-relaxed font-light">
            {t('hero.description')}
          </p>
        </div>

        <div>
          <h4 className="text-brand-gold font-serif text-lg mb-6">{t('nav.services')}</h4>
          <ul className="space-y-3 text-sm opacity-80 font-light">
            <li>{t('home.services.budgeting')}</li>
            <li>{t('home.services.planning')}</li>
            <li>{t('home.services.renovation')}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-brand-gold font-serif text-lg mb-6">{t('nav.contact')}</h4>
          <ul className="space-y-4 text-sm opacity-80 font-light">
            <li className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-brand-gold" />
              <span>+44 7465 207494 (UK)</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-brand-gold" />
              <span>office@salentopropertyprojects.co.uk</span>
            </li>
            <li className="flex items-center space-x-3">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span>Nardò, Salento (Italy) | London (UK)</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-brand-beige/10 mt-16 pt-8 text-[10px] uppercase font-medium tracking-widest opacity-40 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center">
        <span>© 2026 Salento Property Projects. All Rights Reserved.</span>
        <div className="flex space-x-6">
        </div>
      </div>
    </footer>
  );
}
