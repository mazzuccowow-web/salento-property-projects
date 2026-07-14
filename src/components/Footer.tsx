/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin } from 'lucide-react';

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

        {/* COLONNA 4: SOCIAL MEDIA (Con i loghi ufficiali a colori pieni) */}
        <div>
          <h4 className="text-brand-gold font-serif text-lg mb-6">{t('footer.socialMedia')}</h4>
          <ul className="space-y-4 text-sm opacity-80 font-light">
            
            {/* FACEBOOK */}
            <li className="flex items-center space-x-3">
              {/* Logo ufficiale Facebook: cerchio blu con "f" bianca */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                className="w-5 h-5 flex-shrink-0"
              >
                <path 
                  fill="#1877F2" 
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
              <a 
                href="https://www.facebook.com/salentopropertyprojects?locale=en_GB" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#1877F2] transition-colors"
              >
                Facebook
              </a>
            </li>

            {/* LINKEDIN */}
            <li className="flex items-center space-x-3">
              {/* Logo ufficiale LinkedIn: quadrato blu con "in" bianco */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                className="w-5 h-5 flex-shrink-0"
              >
                <path 
                  fill="#0A66C2" 
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"
                />
              </svg>
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
