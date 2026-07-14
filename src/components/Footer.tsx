/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-brand-black text-brand-beige py-16 px-6" id="main-footer">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* COLONNA 1: LOGO E DESCRIZIONE */}
        <div className="col-span-1">
           <Link to="/" className="flex flex-col mb-6" id="footer-logo">
            <span className="text-2xl font-serif font-bold tracking-tight text-brand-white">
              SALENTO
            </span>
            <span className="text-xs tracking-[0.2em] font-sans font-medium text-brand-gold uppercase -mt-1">
              Property Projects
            </span>
          </Link>
          <p className="text-sm text-brand-white opacity-80 leading-relaxed font-light">
            {t('footer.description')}
          </p>
        </div>

        {/* COLONNA 2: SERVIZI */}
        <div>
          <h4 className="text-brand-gold font-serif text-lg mb-6">{t('nav.services')}</h4>
          <ul className="space-y-3 text-sm opacity-80 font-light">
            <li>{t('home.services.budgeting')}</li>
            <li>{t('home.services.planning')}</li>
            <li>{t('home.services.renovation')}</li>
          </ul>
        </div>

        {/* COLONNA 3: CONTATTI */}
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

        {/* COLONNA 4: SOCIAL MEDIA (Icone con i colori ufficiali di brand) */}
        <div>
          <h4 className="text-brand-gold font-serif text-lg mb-6">{t('footer.socialMedia')}</h4>
          <ul className="space-y-4 text-sm opacity-80 font-light">
            <li className="flex items-center space-x-3">
              <Facebook className="w-4 h-4 text-[#1877F2]" /> {/* Blu ufficiale Facebook */}
              <a 
                href="https://www.facebook.com/salentopropertyprojects?locale=en_GB" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#1877F2] transition-colors"
              >
                Facebook
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <Linkedin className="w-4 h-4 text-[#0A66C2]" /> {/* Blu ufficiale LinkedIn */}
              <a 
                href="https://www.linkedin.com/company/salento-property-projects/?viewAsMember=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#0A66C2] transition-colors"
              >
                LinkedIn
              </a>
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
