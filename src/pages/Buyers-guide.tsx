/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, ClipboardList, ShieldCheck, Handshake, Key, 
  Landmark, Phone, Mail, ArrowRight, Layers, MapPin, 
  Hammer, ChevronDown 
} from 'lucide-react';

import copImg from "../photo/cop.png";
import bgCop from "../photo/BGcop.png";

export default function BuyersGuide() {
  const { t } = useTranslation();

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', gdprConsent: false });
  const [activeTopic, setActiveTopic] = useState<number | null>(null);

  useEffect(() => {
    // Soro SEO Script
    const script = document.createElement('script');
    script.src = "https://app.trysoro.com/api/embed/bb2cb9bd-d6eb-475e-b4be-112bff94a8eb";
    script.defer = true;
    document.body.appendChild(script);

    // Meta Pixel PageView
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'PageView');
    }

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');

    const encode = (data: { [key: string]: any }) =>
      Object.keys(data).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "buyers-guide-leads", ...formData })
    })
      .then((res) => {
        if (res.ok) {
          setFormStatus('success');
          if (typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('track', 'Lead', { content_name: 'Before You Buy in Salento PDF', status: 'Form Submitted' });
            (window as any).fbq('track', 'CompleteRegistration', { content_name: 'PDF Downloaded' });
          }
          const link = document.createElement('a');
          link.href = '/Before_You_Buy_in_Salento.pdf';
          link.download = 'Before_You_Buy_in_Salento.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          setFormStatus('error');
        }
      })
      .catch(() => setFormStatus('error'));
  };

  // 5 STEP DEL PROCESSO TRADOTTI
  const buyingSteps = [
    { step: '1', name: t('buyersGuidePage.steps.s1.name'), desc: t('buyersGuidePage.steps.s1.desc'), icon: Search },
    { step: '2', name: t('buyersGuidePage.steps.s2.name'), desc: t('buyersGuidePage.steps.s2.desc'), icon: ClipboardList },
    { step: '3', name: t('buyersGuidePage.steps.s3.name'), desc: t('buyersGuidePage.steps.s3.desc'), icon: ShieldCheck },
    { step: '4', name: t('buyersGuidePage.steps.s4.name'), desc: t('buyersGuidePage.steps.s4.desc'), icon: Handshake },
    { step: '5', name: t('buyersGuidePage.steps.s5.name'), desc: t('buyersGuidePage.steps.s5.desc'), icon: Key },
  ];

  // 6 ARGOMENTI TRADOTTI
  const topicsData = [
    {
      title: t('buyersGuidePage.topics.t1.title'),
      subtitle: t('buyersGuidePage.topics.t1.subtitle'),
      icon: MapPin,
      paragraphs: [t('buyersGuidePage.topics.t1.p1'), t('buyersGuidePage.topics.t1.p2'), t('buyersGuidePage.topics.t1.p3')],
      listTitle: t('buyersGuidePage.topics.t1.listTitle'),
      listType: 'disc' as const,
      listItems: t('buyersGuidePage.topics.t1.items', { returnObjects: true }) as string[],
      closing: t('buyersGuidePage.topics.t1.closing')
    },
    {
      title: t('buyersGuidePage.topics.t2.title'),
      subtitle: t('buyersGuidePage.topics.t2.subtitle'),
      icon: ClipboardList,
      paragraphs: [t('buyersGuidePage.topics.t2.p1')],
      listTitle: t('buyersGuidePage.topics.t2.listTitle'),
      listType: 'decimal' as const,
      listItems: t('buyersGuidePage.topics.t2.items', { returnObjects: true }) as string[],
      closing: t('buyersGuidePage.topics.t2.closing')
    },
    {
      title: t('buyersGuidePage.topics.t3.title'),
      subtitle: t('buyersGuidePage.topics.t3.subtitle'),
      icon: Landmark,
      paragraphs: [t('buyersGuidePage.topics.t3.p1')],
      listTitle: t('buyersGuidePage.topics.t3.listTitle'),
      listType: 'disc' as const,
      listItems: t('buyersGuidePage.topics.t3.items', { returnObjects: true }) as string[],
      afterList: [t('buyersGuidePage.topics.t3.after1'), t('buyersGuidePage.topics.t3.after2')],
      closing: t('buyersGuidePage.topics.t3.closing')
    },
    {
      title: t('buyersGuidePage.topics.t4.title'),
      subtitle: t('buyersGuidePage.topics.t4.subtitle'),
      icon: ShieldCheck,
      paragraphs: [t('buyersGuidePage.topics.t4.p1'), t('buyersGuidePage.topics.t4.p2')],
      listTitle: t('buyersGuidePage.topics.t4.listTitle'),
      listType: 'disc' as const,
      listItems: t('buyersGuidePage.topics.t4.items', { returnObjects: true }) as string[],
      afterList: [t('buyersGuidePage.topics.t4.after1')],
      closing: t('buyersGuidePage.topics.t4.closing')
    },
    {
      title: t('buyersGuidePage.topics.t5.title'),
      subtitle: t('buyersGuidePage.topics.t5.subtitle'),
      icon: Hammer,
      paragraphs: [t('buyersGuidePage.topics.t5.p1'), t('buyersGuidePage.topics.t5.p2')],
      listTitle: t('buyersGuidePage.topics.t5.listTitle'),
      listType: 'disc' as const,
      listItems: t('buyersGuidePage.topics.t5.items', { returnObjects: true }) as string[],
      afterList: [t('buyersGuidePage.topics.t5.after1')],
      closing: t('buyersGuidePage.topics.t5.closing')
    },
    {
      title: t('buyersGuidePage.topics.t6.title'),
      subtitle: t('buyersGuidePage.topics.t6.subtitle'),
      icon: Layers,
      paragraphs: [t('buyersGuidePage.topics.t6.p1'), t('buyersGuidePage.topics.t6.p2')],
      listTitle: t('buyersGuidePage.topics.t6.listTitle'),
      listType: 'disc' as const,
      listItems: t('buyersGuidePage.topics.t6.items', { returnObjects: true }) as string[],
      afterList: [t('buyersGuidePage.topics.t6.after1')],
      closing: t('buyersGuidePage.topics.t6.closing')
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-brand-beige min-h-screen" id="buyers-guide-page">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* BANNER COVER */}
        <motion.section 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden mb-16 rounded-2xl shadow-md"
        >
          <div className="absolute inset-0 z-0">
            <img src={bgCop} alt="Salento Landscape Cover" className="w-full h-full object-cover brightness-[65%]" />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-transparent to-brand-beige/10"></div>
          </div>
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif text-brand-white leading-tight mb-4">
              {t('buyersGuidePage.hero.title')}
            </h1>
            <div className="w-20 h-1 bg-brand-gold mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-brand-white opacity-90 font-light max-w-2xl mx-auto">
              {t('buyersGuidePage.hero.subtitle')}
            </p>
          </div>
        </motion.section>

        {/* LEAD MAGNET DOWNLOAD */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-brand-white rounded-2xl overflow-hidden border border-brand-sand shadow-lg grid grid-cols-1 md:grid-cols-12 gap-0 mb-16"
        >
          <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center space-y-6">
            <span className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase">
              {t('buyersGuidePage.leadMagnet.badge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-brand-black leading-tight">
              {t('buyersGuidePage.leadMagnet.title')}
            </h2>
            <p className="text-md text-brand-taupe font-serif italic">
              {t('buyersGuidePage.leadMagnet.subtitle')}
            </p>
            <p className="text-sm text-brand-taupe font-light leading-relaxed">
              {t('buyersGuidePage.leadMagnet.description')}
            </p>

            {formStatus !== 'success' ? (
              <form name="buyers-guide-leads" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-brand-sand/60">
                <input type="hidden" name="form-name" value="buyers-guide-leads" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    required
                    placeholder={t('buyersGuidePage.leadMagnet.firstName')}
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-brand-beige border border-brand-sand rounded px-4 py-2.5 text-sm focus:ring-1 focus:ring-brand-gold focus:outline-none"
                  />
                  <input
                    type="text"
                    name="lastName"
                    required
                    placeholder={t('buyersGuidePage.leadMagnet.lastName')}
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-brand-beige border border-brand-sand rounded px-4 py-2.5 text-sm focus:ring-1 focus:ring-brand-gold focus:outline-none"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={t('buyersGuidePage.leadMagnet.email')}
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-brand-beige border border-brand-sand rounded px-4 py-2.5 text-sm focus:ring-1 focus:ring-brand-gold focus:outline-none"
                />
                <div className="flex items-start space-x-2.5 pt-2">
                  <input
                    type="checkbox"
                    name="gdprConsent"
                    id="gdprConsent"
                    required
                    checked={formData.gdprConsent}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 rounded border-brand-sand text-brand-gold focus:ring-brand-gold"
                  />
                  <label htmlFor="gdprConsent" className="text-[11px] text-brand-taupe leading-snug font-light">
                    {t('buyersGuidePage.leadMagnet.gdprConsent')}
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full bg-brand-gold text-brand-black py-3.5 rounded font-bold text-xs tracking-wider uppercase hover:bg-brand-black hover:text-brand-white transition-all shadow-md disabled:opacity-50 flex items-center justify-center space-x-2"
                >
                  <span>
                    {formStatus === 'sending'
                      ? t('buyersGuidePage.leadMagnet.buttonSending')
                      : t('buyersGuidePage.leadMagnet.buttonIdle')}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                {formStatus === 'error' && (
                  <p className="text-red-600 text-xs text-center font-medium">
                    {t('buyersGuidePage.leadMagnet.errorMessage')}
                  </p>
                )}
              </form>
            ) : (
              <div className="bg-green-50 border border-green-200 p-6 rounded-xl text-center space-y-2">
                <h4 className="text-green-800 font-bold text-lg">{t('buyersGuidePage.leadMagnet.successTitle')}</h4>
                <p className="text-green-700 text-sm font-light">
                  {t('buyersGuidePage.leadMagnet.successText')}
                  <a href="/Before_You_Buy_in_Salento.pdf" download className="underline font-semibold hover:text-green-900">
                    {t('buyersGuidePage.leadMagnet.successLink')}
                  </a>
                </p>
              </div>
            )}
          </div>

          <div className="md:col-span-5 relative bg-brand-sand/20 flex items-center justify-center p-8 md:p-12 min-h-[350px]">
            <img src={copImg} alt="Guide Cover" className="w-auto h-full max-h-[420px] object-contain rounded-lg shadow-2xl hover:scale-[1.02] transition-transform duration-300" />
          </div>
        </motion.div>

        {/* TWO COLUMNS LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <main className="lg:col-span-8 space-y-16">
            {/* OVERVIEW */}
            <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-brand-white p-8 rounded-xl border border-brand-sand shadow-sm space-y-8">
              <h2 className="text-2xl font-serif text-brand-black border-b border-brand-sand pb-4">
                {t('buyersGuidePage.overview.title')}
              </h2>
              <p className="text-brand-taupe font-light leading-relaxed">
                {t('buyersGuidePage.overview.description')}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 pt-4 text-center relative">
                {buyingSteps.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center space-y-3 relative z-10">
                    <div className="w-14 h-14 rounded-full bg-brand-beige border border-brand-sand flex items-center justify-center text-brand-gold shadow-sm hover:scale-105 transition-transform">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-brand-gold font-serif">{item.step}</span>
                    <h4 className="text-xs font-bold text-brand-black leading-tight max-w-[100px] mx-auto">{item.name}</h4>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* THE BUYING PROCESS CARDS */}
            <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6">
              <h2 className="text-2xl font-serif text-brand-black">{t('buyersGuidePage.steps.title')}</h2>
              <p className="text-brand-taupe font-light">{t('buyersGuidePage.steps.subtitle')}</p>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {buyingSteps.map((card, idx) => (
                  <div key={idx} className="bg-brand-white p-5 rounded-xl border border-brand-sand shadow-xs space-y-3">
                    <h4 className="text-xs font-bold text-brand-gold uppercase tracking-wider">{card.step}. {card.name}</h4>
                    <p className="text-xs text-brand-taupe font-light leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* KEY TOPICS ACCORDION */}
            <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6">
              <h2 className="text-2xl font-serif text-brand-black">{t('buyersGuidePage.accordionTitle')}</h2>
              <div className="space-y-4">
                {topicsData.map((topic, idx) => {
                  const isOpened = activeTopic === idx;
                  const ListTag = topic.listType === 'decimal' ? 'ol' : 'ul';
                  return (
                    <div key={idx} className="bg-brand-white rounded-xl border border-brand-sand overflow-hidden shadow-sm transition-all duration-300">
                      <button onClick={() => setActiveTopic(isOpened ? null : idx)} className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 rounded-full bg-brand-beige flex items-center justify-center text-brand-gold flex-shrink-0">
                            <topic.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-serif text-lg text-brand-black font-semibold">{topic.title}</h4>
                            <p className="text-xs text-brand-taupe font-light mt-0.5">{topic.subtitle}</p>
                          </div>
                        </div>
                        <ChevronDown className={`w-5 h-5 text-brand-gold transition-transform duration-300 ${isOpened ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpened && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                            <div className="px-6 pb-6 pt-2 border-t border-brand-sand/40 text-sm text-brand-taupe font-light leading-relaxed space-y-4">
                              {topic.paragraphs.map((p, pIdx) => <p key={pIdx}>{p}</p>)}
                              {Array.isArray(topic.listItems) && (
                                <div className="pt-1">
                                  {topic.listTitle && <p className="font-semibold mb-2">{topic.listTitle}</p>}
                                  <ListTag className={`${topic.listType === 'decimal' ? 'list-decimal' : 'list-disc'} pl-5 space-y-1`}>
                                    {topic.listItems.map((li, lIdx) => <li key={lIdx}>{li}</li>)}
                                  </ListTag>
                                </div>
                              )}
                              {topic.afterList?.map((p, aIdx) => <p key={aIdx}>{p}</p>)}
                              {topic.closing && <p className="italic pt-1 font-medium text-brand-black/80">{topic.closing}</p>}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.section>

            {/* BLOG SECTION */}
            <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6 pt-6 border-t border-brand-sand">
              <div>
                <h2 className="text-3xl font-serif text-brand-black">{t('buyersGuidePage.blog.title')}</h2>
                <p className="text-brand-taupe font-light mt-1">{t('buyersGuidePage.blog.subtitle')}</p>
              </div>
              <div className="bg-brand-white p-4 rounded-xl border border-brand-sand shadow-sm min-h-[400px]">
                <div id="soro-blog"></div>
              </div>
            </motion.section>
          </main>

          {/* SIDEBAR */}
          <aside className="lg:col-span-4 space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-brand-sand/20 p-6 rounded-xl border border-brand-sand shadow-xs text-center space-y-4">
              <h3 className="font-serif text-lg text-brand-black">{t('buyersGuidePage.sidebar.guidanceTitle')}</h3>
              <p className="text-xs text-brand-taupe font-light leading-relaxed">{t('buyersGuidePage.sidebar.guidanceDesc')}</p>
              <a href="https://wa.me/447465207494" target="_blank" rel="noreferrer" className="bg-brand-gold text-brand-black block px-4 py-3 rounded-md font-bold text-xs tracking-wider uppercase hover:bg-brand-black hover:text-brand-white transition-all shadow-xs">
                {t('buyersGuidePage.sidebar.guidanceBtn')}
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="bg-brand-white p-6 rounded-xl border border-brand-sand shadow-xs space-y-4">
              <h3 className="font-serif text-lg text-brand-black border-b border-brand-sand pb-3">{t('buyersGuidePage.sidebar.questionsTitle')}</h3>
              <p className="text-xs text-brand-taupe font-light leading-relaxed">{t('buyersGuidePage.sidebar.questionsDesc')}</p>
              <div className="space-y-3 text-xs text-brand-taupe font-light">
                <a href="mailto:office@salentopropertyprojects.co.uk" className="flex items-center space-x-2 hover:text-brand-gold transition-colors">
                  <Mail className="w-4 h-4 text-brand-gold" />
                  <span>office@salentopropertyprojects.co.uk</span>
                </a>
                <a href="tel:+447465207494" className="flex items-center space-x-2 hover:text-brand-gold transition-colors">
                  <Phone className="w-4 h-4 text-brand-gold" />
                  <span>+44 7465 207494 (UK)</span>
                </a>
              </div>
              <a href="/contact" className="border border-brand-gold text-brand-black block text-center py-2.5 rounded-md font-bold text-xs tracking-wider uppercase hover:bg-brand-gold transition-all">
                {t('buyersGuidePage.sidebar.questionsBtn')}
              </a>
            </motion.div>
          </aside>

        </div>
      </div>
    </div>
  );
}
