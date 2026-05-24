/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { 
  ClipboardCheck, 
  Construction, 
  Euro, 
  Search, 
  FileCheck, 
  ShieldCheck 
} from 'lucide-react';

// ✅ IMMAGINI
import propertyImg from "../photo/property.png";
import renovationImg from "../photo/renovation.jpg";
import budgetImg from "../photo/budget_2.jpeg";
import supportImg from "../photo/support.png";
import contractorImg from "../photo/contractor.png";
import inspectionsImg from "../photo/inspections.jpg";

export default function Services() {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-24 bg-brand-white" id="services-page">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <header className="mb-24 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif text-brand-black mb-6"
          >
            {t('servicesPage.title')}
          </motion.h1>

          <div className="w-20 h-1 bg-brand-gold mx-auto mb-8"></div>

          <p className="text-xl text-brand-taupe font-light max-w-3xl mx-auto">
            {t('servicesPage.subtitle')}
          </p>
        </header>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            {
              title: t('servicesPage.pm'),
              icon: <ClipboardCheck className="w-10 h-10" />,
              desc: t('servicesPage.pmDesc'),
              image: propertyImg,
            },
            {
              title: t('servicesPage.ro'),
              icon: <Construction className="w-10 h-10" />,
              desc: t('servicesPage.roDesc'),
              image: renovationImg
            },
            {
              title: t('servicesPage.bp'),
              icon: <Euro className="w-10 h-10" />,
              desc: t('servicesPage.bpDesc'),
              image: budgetImg
            },
            {
              title: t('servicesPage.ib'),
              icon: <Search className="w-10 h-10" />,
              desc: t('servicesPage.ibDesc'),
              image: supportImg
            },
            {
              title: t('servicesPage.cc'),
              icon: <FileCheck className="w-10 h-10" />,
              desc: t('servicesPage.ccDesc'),
              image: contractorImg
            },
            {
              title: t('servicesPage.pi'),
              icon: <ShieldCheck className="w-10 h-10" />,
              desc: t('servicesPage.piDesc'),
              image: inspectionsImg
            },
          ].map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-brand-beige rounded-xl overflow-hidden group hover:shadow-2xl transition-all duration-500"
              id={`service-full-${index}`}
            >

              {/* IMAGE */}
              <div className="h-64 overflow-hidden flex items-center justify-center bg-black/5">

                <img 
                  src={service.image} 
                  alt={service.title}
                  className={`object-cover transition-transform duration-700 group-hover:scale-110 ${
                    service.small
                      ? "h-[85%] w-[85%]"   // 👈 PIÙ PICCOLA SOLO PROPERTY
                      : "w-full h-full"
                  }`}
                />

              </div>

              {/* CONTENT */}
              <div className="p-8">
                <div className="text-brand-gold mb-6">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-serif text-brand-black mb-4">
                  {service.title}
                </h3>

                <p className="text-brand-taupe font-light leading-relaxed">
                  {service.desc}
                </p>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </div>
  );
}