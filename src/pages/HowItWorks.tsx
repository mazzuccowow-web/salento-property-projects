/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

export default function HowItWorks() {
  const { t } = useTranslation();

  const steps = [
    {
      number: '01',
      title: 'Consultation',
      desc: 'We start with a deep dive into your goals, vision, and budget. This can be done via video call or in person in London or Salento.'
    },
    {
      number: '02',
      title: 'Property Assessment',
      desc: 'A professional technical evaluation of the property or potential sites. We analyze structural integrity, planning permissions, and development potential.'
    },
    {
      number: '03',
      title: 'Planning & Budgeting',
      desc: 'We assemble the professional team (architects, engineers) and produce a detailed project timeline and fixed-fee budget breakdown.'
    },
    {
      number: '04',
      title: 'Execution & Management',
      desc: 'On-site supervision begins. You receive weekly reports with high-resolution photos and progress updates. We handle all contractor communications.'
    },
    {
      number: '05',
      title: 'Completion & Handover',
      desc: 'Final quality inspections, snagging lists, and handover of all technical certifications. Your property is ready for use or rental.'
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-brand-beige" id="how-it-works-page">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-24 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif text-brand-black mb-6"
          >
            {t('howItWorks.title')}
          </motion.h1>
          <div className="w-20 h-1 bg-brand-gold mx-auto mb-8"></div>
        </header>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-brand-gold/30 -translate-x-1/2"></div>

          <div className="space-y-24">
            {[
              { number: '01', title: t('howItWorks.step1'), desc: t('howItWorks.step1Desc') },
              { number: '02', title: t('howItWorks.step2'), desc: t('howItWorks.step2Desc') },
              { number: '03', title: t('howItWorks.step3'), desc: t('howItWorks.step3Desc') },
              { number: '04', title: t('howItWorks.step4'), desc: t('howItWorks.step4Desc') },
              { number: '05', title: t('howItWorks.step5'), desc: t('howItWorks.step5Desc') },
            ].map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                id={`step-${index}`}
              >
                {/* Number bullet */}
                <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-brand-gold text-brand-black rounded-full flex items-center justify-center font-bold font-serif text-xl z-10 shadow-lg hidden md:flex">
                  {step.number}
                </div>

                <div className="w-full md:w-[45%] mb-8 md:mb-0">
                  <div className={`p-10 bg-brand-white rounded-xl shadow-sm border border-brand-sand ${index % 2 === 0 ? 'text-left' : 'md:text-right'}`}>
                    <span className="md:hidden block text-brand-gold font-bold mb-4">{step.number}</span>
                    <h3 className="text-3xl font-serif text-brand-black mb-4">{step.title}</h3>
                    <p className="text-brand-taupe font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
                <div className="hidden md:block w-10"></div>
                <div className="w-full md:w-[45%]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
