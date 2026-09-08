/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { 
  Phone, Mail, ArrowRight, BookOpen, Clock, 
  AlertTriangle, CheckCircle2, HelpCircle 
} from 'lucide-react';

import copImg from "../photo/cop.png";
import bgCop from "../photo/BGcop.png";

export default function BuyersGuide() {
  const { t } = useTranslation();

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', gdprConsent: false });

  useEffect(() => {
    // Meta Pixel PageView
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'PageView');
    }
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

  const introParagraphs = t('buyersGuidePage.article.intro', { returnObjects: true }) as string[];
  const investigationItems = t('buyersGuidePage.article.investigation.items', { returnObjects: true }) as Array<{ label: string; desc: string }>;
  const frameworkSteps = t('buyersGuidePage.article.framework.steps', { returnObjects: true }) as string[];

  return (
    <div className="pt-32 pb-24 bg-brand-beige min-h-screen" id="buyers-guide-page">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* BANNER COVER */}
        <motion.section 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[280px] md:h-[380px] flex items-center justify-center overflow-hidden mb-16 rounded-2xl shadow-md"
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

        {/* MAIN LAYOUT WITH SIDEBAR */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* ARTICLE CONTENT */}
          <main className="lg:col-span-8">
            <motion.article 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.7 }} 
              className="bg-brand-white p-8 md:p-12 rounded-2xl border border-brand-sand shadow-sm space-y-10"
            >
              {/* Header */}
              <div className="border-b border-brand-sand/70 pb-8 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.2em] uppercase text-brand-gold bg-brand-beige px-3 py-1 rounded-full border border-brand-sand">
                    <BookOpen className="w-3.5 h-3.5" />
                    {t('buyersGuidePage.article.tag')}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-brand-taupe font-light">
                    <Clock className="w-3.5 h-3.5 text-brand-gold" />
                    {t('buyersGuidePage.article.readTime')}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif text-brand-black leading-tight font-normal">
                  {t('buyersGuidePage.article.title')}
                </h2>
                <p className="text-base md:text-lg text-brand-taupe font-serif italic leading-relaxed">
                  {t('buyersGuidePage.article.subtitle')}
                </p>
              </div>

              {/* Intro paragraphs */}
              <div className="space-y-4 text-sm md:text-base text-brand-taupe font-light leading-relaxed">
                {Array.isArray(introParagraphs) && introParagraphs.map((para, i) => (
                  <p key={i} className={i === 4 ? "text-lg font-serif font-bold text-brand-black pt-2" : ""}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Case Study Callout Box */}
              <div className="bg-brand-beige/80 border-l-4 border-brand-gold rounded-r-xl p-6 md:p-8 space-y-4">
                <div className="flex items-center gap-2 text-brand-black font-serif text-xl font-medium">
                  <AlertTriangle className="w-5 h-5 text-brand-gold flex-shrink-0" />
                  <h3>{t('buyersGuidePage.article.caseStudy.title')}</h3>
                </div>
                <p className="text-sm text-brand-taupe font-light leading-relaxed">{t('buyersGuidePage.article.caseStudy.p1')}</p>
                <p className="text-xs text-brand-taupe/80 italic">{t('buyersGuidePage.article.caseStudy.p2')}</p>
                <p className="text-sm text-brand-taupe font-light leading-relaxed">{t('buyersGuidePage.article.caseStudy.p3')}</p>
                <p className="text-sm text-brand-taupe font-light leading-relaxed">{t('buyersGuidePage.article.caseStudy.p4')}</p>
                
                <div className="my-4 bg-brand-white p-4 rounded-lg border border-brand-sand">
                  <p className="text-sm font-semibold text-brand-black">{t('buyersGuidePage.article.caseStudy.p5')}</p>
                  <p className="text-xs text-brand-taupe mt-1">{t('buyersGuidePage.article.caseStudy.p6')}</p>
                  <p className="text-sm text-brand-taupe mt-3">{t('buyersGuidePage.article.caseStudy.p7')}</p>
                  <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded text-red-900 font-serif font-bold text-sm md:text-base">
                    {t('buyersGuidePage.article.caseStudy.highlight')}
                  </div>
                </div>
                <p className="text-sm text-brand-taupe font-light leading-relaxed">{t('buyersGuidePage.article.caseStudy.p8')}</p>
              </div>

              {/* The Closed-Circle Problem */}
              <div className="space-y-4 text-sm md:text-base text-brand-taupe font-light leading-relaxed">
                <h3 className="text-2xl font-serif text-brand-black pt-4">
                  {t('buyersGuidePage.article.closedCircle.title')}
                </h3>
                <p>{t('buyersGuidePage.article.closedCircle.p1')}</p>
                <p>{t('buyersGuidePage.article.closedCircle.p2')}</p>
                <p>{t('buyersGuidePage.article.closedCircle.p3')}</p>
                <p>{t('buyersGuidePage.article.closedCircle.p4')}</p>
                <p>{t('buyersGuidePage.article.closedCircle.p5')}</p>

                <h4 className="text-xl font-serif text-brand-black pt-4 font-medium">
                  {t('buyersGuidePage.article.closedCircle.subTitle')}
                </h4>
                <p>{t('buyersGuidePage.article.closedCircle.p6')}</p>
                <p>{t('buyersGuidePage.article.closedCircle.p7')}</p>
                
                <blockquote className="my-6 border-l-2 border-brand-gold pl-6 py-2 italic font-serif text-base md:text-lg text-brand-black">
                  {t('buyersGuidePage.article.closedCircle.quote')}
                </blockquote>
              </div>

              {/* Negotiation Section */}
              <div className="space-y-4 text-sm md:text-base text-brand-taupe font-light leading-relaxed">
                <h3 className="text-2xl font-serif text-brand-black pt-4">
                  {t('buyersGuidePage.article.negotiation.title')}
                </h3>
                <p>{t('buyersGuidePage.article.negotiation.p1')}</p>
                <p>{t('buyersGuidePage.article.negotiation.p2')}</p>
                <p>{t('buyersGuidePage.article.negotiation.p3')}</p>
                <div className="bg-brand-sand/20 p-5 rounded-lg border border-brand-sand text-brand-black text-sm italic font-serif">
                  {t('buyersGuidePage.article.negotiation.p4')}
                </div>
              </div>

              {/* Property A vs Property B Comparison */}
              <div className="space-y-6 pt-4">
                <h3 className="text-2xl font-serif text-brand-black">
                  {t('buyersGuidePage.article.comparison.title')}
                </h3>
                <p className="text-sm md:text-base text-brand-taupe font-light leading-relaxed">
                  {t('buyersGuidePage.article.comparison.intro')}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="bg-brand-beige p-6 rounded-xl border border-brand-sand space-y-2">
                    <span className="text-xs uppercase tracking-widest text-brand-taupe font-bold">Comparison</span>
                    <h4 className="text-lg font-serif text-brand-black font-semibold">
                      {t('buyersGuidePage.article.comparison.propA.title')}
                    </h4>
                    <p className="text-sm text-brand-taupe">{t('buyersGuidePage.article.comparison.propA.price')}</p>
                    <p className="text-sm text-brand-taupe">{t('buyersGuidePage.article.comparison.propA.reno')}</p>
                    <p className="text-base font-bold text-brand-black pt-2 border-t border-brand-sand/60">
                      {t('buyersGuidePage.article.comparison.propA.total')}
                    </p>
                  </div>

                  <div className="bg-brand-white p-6 rounded-xl border-2 border-brand-gold shadow-sm space-y-2 relative">
                    <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">More Rational</span>
                    <h4 className="text-lg font-serif text-brand-black font-semibold">
                      {t('buyersGuidePage.article.comparison.propB.title')}
                    </h4>
                    <p className="text-sm text-brand-taupe">{t('buyersGuidePage.article.comparison.propB.price')}</p>
                    <p className="text-sm text-brand-taupe">{t('buyersGuidePage.article.comparison.propB.reno')}</p>
                    <p className="text-base font-bold text-brand-black pt-2 border-t border-brand-sand/60">
                      {t('buyersGuidePage.article.comparison.propB.total')}
                    </p>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-brand-taupe italic">
                  {t('buyersGuidePage.article.comparison.note')}
                </p>
              </div>

              {/* What should be investigated checklist */}
              <div className="space-y-6 pt-4">
                <h3 className="text-2xl font-serif text-brand-black">
                  {t('buyersGuidePage.article.investigation.title')}
                </h3>
                <p className="text-sm text-brand-taupe font-light">
                  {t('buyersGuidePage.article.investigation.intro')}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Array.isArray(investigationItems) && investigationItems.map((item, idx) => (
                    <div key={idx} className="p-4 bg-brand-beige/50 rounded-lg border border-brand-sand/70 space-y-1">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0" />
                        <h4 className="text-sm font-semibold text-brand-black">{item.label}</h4>
                      </div>
                      <p className="text-xs text-brand-taupe font-light pl-6 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategy and Framework (8 Steps) */}
              <div className="space-y-6 pt-4">
                <h3 className="text-2xl font-serif text-brand-black">
                  {t('buyersGuidePage.article.strategy.title')}
                </h3>
                <p className="text-sm md:text-base text-brand-taupe font-light leading-relaxed">
                  {t('buyersGuidePage.article.strategy.p1')}
                </p>
                <p className="text-sm md:text-base text-brand-taupe font-light leading-relaxed">
                  {t('buyersGuidePage.article.strategy.p2')}
                </p>

                <div className="bg-brand-white p-6 rounded-xl border border-brand-sand space-y-4 mt-6">
                  <h4 className="text-lg font-serif text-brand-black font-semibold">
                    {t('buyersGuidePage.article.framework.title')}
                  </h4>
                  <p className="text-xs text-brand-taupe">{t('buyersGuidePage.article.framework.intro')}</p>
                  <ol className="space-y-2.5 pt-2">
                    {Array.isArray(frameworkSteps) && frameworkSteps.map((step, idx) => (
                      <li key={idx} className="text-xs md:text-sm text-brand-taupe font-light flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-brand-beige text-brand-gold font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="leading-snug">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* What if you have already bought? */}
              <div className="bg-brand-beige p-6 md:p-8 rounded-xl border border-brand-sand space-y-3">
                <h3 className="text-xl font-serif text-brand-black font-medium">
                  {t('buyersGuidePage.article.lateSection.title')}
                </h3>
                <p className="text-base font-serif italic text-brand-gold font-semibold">
                  {t('buyersGuidePage.article.lateSection.quote')}
                </p>
                <p className="text-sm text-brand-taupe font-light leading-relaxed">
                  {t('buyersGuidePage.article.lateSection.p1')}
                </p>
                <p className="text-sm text-brand-taupe font-light leading-relaxed">
                  {t('buyersGuidePage.article.lateSection.p2')}
                </p>
                <p className="text-sm text-brand-black font-medium pt-1">
                  {t('buyersGuidePage.article.lateSection.p3')}
                </p>
              </div>

              {/* 5 Questions Box */}
              <div className="bg-brand-black text-brand-white p-8 rounded-2xl space-y-6">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-brand-gold flex-shrink-0" />
                  <h3 className="text-xl md:text-2xl font-serif text-brand-white">
                    {t('buyersGuidePage.article.fiveQuestions.title')}
                  </h3>
                </div>
                <div className="space-y-3 text-xs md:text-sm font-light text-brand-sand">
                  <p className="p-3 bg-brand-white/5 rounded border border-brand-white/10">{t('buyersGuidePage.article.fiveQuestions.q1')}</p>
                  <p className="p-3 bg-brand-white/5 rounded border border-brand-white/10">{t('buyersGuidePage.article.fiveQuestions.q2')}</p>
                  <p className="p-3 bg-brand-white/5 rounded border border-brand-white/10">{t('buyersGuidePage.article.fiveQuestions.q3')}</p>
                  <p className="p-3 bg-brand-white/5 rounded border border-brand-white/10">{t('buyersGuidePage.article.fiveQuestions.q4')}</p>
                  <p className="p-3 bg-brand-white/5 rounded border border-brand-white/10">{t('buyersGuidePage.article.fiveQuestions.q5')}</p>
                </div>
              </div>

              {/* Conclusion & CTA */}
              <div className="pt-6 border-t border-brand-sand/80 space-y-5 text-center max-w-2xl mx-auto">
                <h3 className="text-2xl font-serif text-brand-black">
                  {t('buyersGuidePage.article.conclusion.title')}
                </h3>
                <p className="text-lg font-serif italic text-brand-gold font-medium">
                  {t('buyersGuidePage.article.conclusion.highlight')}
                </p>
                <p className="text-sm text-brand-taupe font-light leading-relaxed">
                  {t('buyersGuidePage.article.conclusion.p1')}
                </p>
                <p className="text-sm text-brand-taupe font-light leading-relaxed">
                  {t('buyersGuidePage.article.conclusion.p2')}
                </p>
                <div className="pt-4">
                  <a
                    href="https://wa.me/447465207494"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-brand-gold text-brand-black px-8 py-4 rounded-md font-bold text-xs tracking-wider uppercase hover:bg-brand-black hover:text-brand-white transition-all shadow-md"
                  >
                    <span>{t('buyersGuidePage.sidebar.guidanceBtn')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          </main>

          {/* SIDEBAR */}
          <aside className="lg:col-span-4 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }} 
              className="bg-brand-sand/20 p-6 rounded-xl border border-brand-sand shadow-xs text-center space-y-4 sticky top-28"
            >
              <h3 className="font-serif text-lg text-brand-black">{t('buyersGuidePage.sidebar.guidanceTitle')}</h3>
              <p className="text-xs text-brand-taupe font-light leading-relaxed">{t('buyersGuidePage.sidebar.guidanceDesc')}</p>
              <a href="https://wa.me/447465207494" target="_blank" rel="noreferrer" className="bg-brand-gold text-brand-black block px-4 py-3 rounded-md font-bold text-xs tracking-wider uppercase hover:bg-brand-black hover:text-brand-white transition-all shadow-xs">
                {t('buyersGuidePage.sidebar.guidanceBtn')}
              </a>

              <div className="pt-6 border-t border-brand-sand/60 space-y-4 text-left">
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
              </div>
            </motion.div>
          </aside>

        </div>
      </div>
    </div>
  );
}
