/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  ClipboardList, 
  ShieldCheck, 
  Handshake, 
  Key, 
  HelpCircle, 
  FileText, 
  Landmark, 
  BookOpen, 
  Phone, 
  Mail, 
  ArrowRight,
  Calendar,
  Layers,
  MapPin,
  Hammer,
  ChevronDown
} from 'lucide-react';

// IMPORT DELLE FOTO
import copImg from "../photo/cop.png";     // Copertina del libro PDF
import bgCop from "../photo/BGcop.png";     // Copertina di sfondo della pagina (Banner)

export default function BuyersGuide() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gdprConsent: false
  });

  // Stato per gestire quale tendina (accordion) è aperta (null = tutte chiuse)
  const [activeTopic, setActiveTopic] = useState<number | null>(null);

  useEffect(() => {
    // Caricamento dinamico del widget degli articoli di Soro
    const script = document.createElement('script');
    script.src = "https://app.trysoro.com/api/embed/bb2cb9bd-d6eb-475e-b4be-112bff94a8eb";
    script.defer = true;
    document.body.appendChild(script);

    // Tracciamento PageView sul Pixel di Meta
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'PageView');
    }

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');

    const encode = (data: { [key: string]: any }) => {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    };

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ 
        "form-name": "buyers-guide-leads", 
        ...formData 
      })
    })
      .then((response) => {
        if (response.ok) {
          setFormStatus('success');

          // Tracciamento evento sul Pixel di Meta
          if (typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('track', 'Lead', {
              content_name: 'Before You Buy in Salento PDF',
              status: 'Form Submitted'
            });
            (window as any).fbq('track', 'CompleteRegistration', {
              content_name: 'PDF Downloaded'
            });
          }

          // Trigger download automatico del PDF
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
      .catch((error) => {
        console.error(error);
        setFormStatus('error');
      });
  };

  // 6 Argomenti con i testi dettagliati
  const topics = [
    {
      title: "Why Salento?",
      subtitle: "Why are more international buyers choosing Salento?",
      icon: MapPin,
      content: (
        <div className="space-y-4">
          <p>Salento has become one of Southern Europe's most attractive property investment destinations. With its crystal-clear coastline, historic towns, authentic Italian lifestyle and relatively affordable property prices, the region offers exceptional long-term value.</p>
          <p>Unlike many saturated Mediterranean markets, Salento still presents opportunities to purchase historic townhouses, countryside villas and renovation projects at competitive prices.</p>
          <p>Whether your goal is a holiday home, a lifestyle investment, short-term rental income or a long-term property portfolio, Salento combines strong potential with an exceptional quality of life.</p>
          <div className="pt-2">
            <p className="font-semibold mb-2">Key advantages include:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Competitive property prices</li>
              <li>Growing international demand</li>
              <li>Strong tourism sector</li>
              <li>Authentic Italian culture</li>
              <li>Excellent renovation opportunities</li>
              <li>High rental potential in selected locations</li>
              <li>Mediterranean climate all year round</li>
            </ul>
          </div>
          <p className="italic pt-2">Our role is to help you navigate this market with clarity, confidence and complete independence.</p>
        </div>
      )
    },
    {
      title: "Step-by-Step Process",
      subtitle: "Buying property in Italy doesn't have to be complicated.",
      icon: ClipboardList,
      content: (
        <div className="space-y-4">
          <p>We guide you through every stage of the process, ensuring you understand each decision before moving forward.</p>
          <div className="pt-2">
            <p className="font-semibold mb-2">Our consultancy typically follows these steps:</p>
            <ol className="list-decimal pl-5 space-y-1.5">
              <li>Initial consultation to understand your goals.</li>
              <li>Property search and independent assessment.</li>
              <li>Site inspections and technical observations.</li>
              <li>Investment feasibility review.</li>
              <li>Cost estimation and renovation strategy.</li>
              <li>Legal and technical due diligence.</li>
              <li>Offer negotiation support.</li>
              <li>Coordination with professionals involved.</li>
              <li>Renovation planning (if required).</li>
              <li>Ongoing project management until completion.</li>
            </ol>
          </div>
          <p className="pt-2">Every project is different, but our structured approach reduces uncertainty and helps avoid costly mistakes.</p>
        </div>
      )
    },
    {
      title: "Costs & Taxes",
      subtitle: "Understanding the real cost of buying property in Italy.",
      icon: Landmark,
      content: (
        <div className="space-y-4">
          <p>The purchase price is only one part of your investment.</p>
          <div className="pt-2">
            <p className="font-semibold mb-2">Depending on the type of property and your circumstances, additional costs may include:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Purchase taxes</li>
              <li>Notary fees</li>
              <li>Legal fees</li>
              <li>Land Registry charges</li>
              <li>Survey costs</li>
              <li>Agency fees (where applicable)</li>
              <li>Renovation costs</li>
              <li>Utility connections</li>
              <li>Annual ownership taxes</li>
            </ul>
          </div>
          <p>Many overseas buyers underestimate these additional expenses.</p>
          <p>Our consultancy provides realistic cost planning before you commit to any purchase, allowing you to budget with confidence.</p>
          <p className="font-semibold italic pt-2">Transparency is one of the foundations of every successful investment.</p>
        </div>
      )
    },
    {
      title: "Legal & Due Diligence",
      subtitle: "Protecting your investment before you buy.",
      icon: ShieldCheck,
      content: (
        <div className="space-y-4">
          <p>One of the biggest risks when purchasing overseas is relying on incomplete or inaccurate information.</p>
          <p>Before any commitment is made, every property should be carefully assessed from both a legal and technical perspective.</p>
          <div className="pt-2">
            <p className="font-semibold mb-2">This may include reviewing:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Ownership history</li>
              <li>Planning permissions</li>
              <li>Building compliance</li>
              <li>Land Registry information</li>
              <li>Existing mortgages or legal restrictions</li>
              <li>Technical documentation</li>
              <li>Building condition</li>
              <li>Renovation feasibility</li>
            </ul>
          </div>
          <p>We coordinate with qualified local professionals while remaining fully independent from estate agents and contractors.</p>
          <p className="italic font-semibold">Our priority is protecting your interests throughout the purchasing process.</p>
        </div>
      )
    },
    {
      title: "Renovation & Planning",
      subtitle: "Transforming potential into value.",
      icon: Hammer,
      content: (
        <div className="space-y-4">
          <p>Many of Salento's most attractive properties require renovation.</p>
          <p>A successful renovation begins long before construction starts.</p>
          <div className="pt-2">
            <p className="font-semibold mb-2">We help clients understand:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Project feasibility</li>
              <li>Preliminary design strategy</li>
              <li>Budget planning</li>
              <li>Construction cost estimates</li>
              <li>Programme of works</li>
              <li>Contractor coordination</li>
              <li>Quality control</li>
              <li>Progress monitoring</li>
              <li>Final handover</li>
            </ul>
          </div>
          <p>Whether restoring a traditional townhouse or renovating a countryside property, careful planning reduces delays, unexpected costs and unnecessary risks.</p>
          <p className="italic">Our experience in project management allows clients to make informed decisions from the very beginning.</p>
        </div>
      )
    },
    {
      title: "Managing Remotely",
      subtitle: "Invest with confidence — wherever you are.",
      icon: Layers,
      content: (
        <div className="space-y-4">
          <p>Many of our clients live outside Italy. Travelling frequently during a renovation is often impractical.</p>
          <p>Our consultancy allows you to manage your investment remotely through structured reporting and transparent communication.</p>
          <div className="pt-2">
            <p className="font-semibold mb-2">Depending on your chosen service package, we can provide:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Regular project updates</li>
              <li>Site visit reports</li>
              <li>Photo and video progress documentation</li>
              <li>Budget monitoring</li>
              <li>Coordination with contractors</li>
              <li>Issue management</li>
              <li>Programme tracking</li>
              <li>Final completion reporting</li>
            </ul>
          </div>
          <p className="pt-2 font-semibold">Our objective is simple:</p>
          <p className="italic">To give you complete visibility over your investment, even when you are thousands of miles away.</p>
        </div>
      )
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-brand-beige min-h-screen" id="buyers-guide-page">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. COPERTINA DI PAGINA BANNER (ANIMATA ALL'INGRESSO) */}
        <motion.section 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden mb-16 rounded-2xl shadow-md" 
          id="buyers-guide-hero"
        >
          <div className="absolute inset-0 z-0">
            <img 
              src={bgCop}
              alt="Salento Landscape Cover"
              className="w-full h-full object-cover brightness-[65%]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-transparent to-brand-beige/10"></div>
          </div>

          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif text-brand-white leading-tight mb-4">
              Buyer's Guide
            </h1>
            <div className="w-20 h-1 bg-brand-gold mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-brand-white opacity-90 font-light max-w-2xl mx-auto">
              Your step-by-step resource for buying property in Salento, Italy
            </p>
          </div>
        </motion.section>

        {/* 2. MODULO DI DOWNLOAD LEAD MAGNET (ANIMATO ALL'INGRESSO CON RITARDO) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-brand-white rounded-2xl overflow-hidden border border-brand-sand shadow-lg grid grid-cols-1 md:grid-cols-12 gap-0 mb-16"
        >
          {/* COLONNA SINISTRA: TESTI E FORM */}
          <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center space-y-6">
            <span className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase">
              Free Digital Download
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-brand-black leading-tight">
              Before You Buy in Salento
            </h2>
            <p className="text-md text-brand-taupe font-serif italic">
              The Essential Guide for International Property Buyers
            </p>
            <p className="text-sm text-brand-taupe font-light leading-relaxed">
              Thinking of buying a property in Salento? Download our free Buyer’s Guide and discover the essential steps, hidden costs, legal considerations and practical advice every international buyer should know before making a purchase. Written by local property professionals to help you buy with confidence.
            </p>

            {formStatus !== 'success' ? (
              <form 
                name="buyers-guide-leads"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-4 pt-4 border-t border-brand-sand/60"
              >
                <input type="hidden" name="form-name" value="buyers-guide-leads" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    required
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-brand-beige border border-brand-sand rounded px-4 py-2.5 text-sm focus:ring-1 focus:ring-brand-gold focus:outline-none"
                  />
                  <input
                    type="text"
                    name="lastName"
                    required
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-brand-beige border border-brand-sand rounded px-4 py-2.5 text-sm focus:ring-1 focus:ring-brand-gold focus:outline-none"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address"
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
                    I agree to receive updates, guides and occasional property insights from Salento Property Projects. I can unsubscribe at any time.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full bg-brand-gold text-brand-black py-3.5 rounded font-bold text-xs tracking-wider uppercase hover:bg-brand-black hover:text-brand-white transition-all shadow-md disabled:opacity-50 flex items-center justify-center space-x-2"
                >
                  <span>{formStatus === 'sending' ? 'Preparing Download...' : 'Download Your Free Guide'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                
                {formStatus === 'error' && (
                  <p className="text-red-600 text-xs text-center font-medium">Something went wrong. Please try again.</p>
                )}
              </form>
            ) : (
              <div className="bg-green-50 border border-green-200 p-6 rounded-xl text-center space-y-2">
                <h4 className="text-green-800 font-bold text-lg">Thank you!</h4>
                <p className="text-green-700 text-sm font-light">
                  Your download has started automatically. If it doesn't,{' '}
                  <a href="/Before_You_Buy_in_Salento.pdf" download className="underline font-semibold hover:text-green-900">
                    click here to download manually
                  </a>.
                </p>
              </div>
            )}

          </div>

          {/* COLONNA DESTRA: COPERTINA DEL LIBRO */}
          <div className="md:col-span-5 relative bg-brand-sand/20 flex items-center justify-center p-8 md:p-12 min-h-[350px]">
            <img 
              src={copImg} 
              alt="Before You Buy in Salento - Guide Cover" 
              className="w-auto h-full max-h-[420px] object-contain rounded-lg shadow-2xl hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </motion.div>

        {/* TWO COLUMNS LAYOUT (REST OF THE PAGE) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN: MAIN CONTENT */}
          <main className="lg:col-span-8 space-y-16">
            
            {/* OVERVIEW SECTION (ANIMATA AL DEGLI SCORRIMENTO) */}
            <motion.section 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-brand-white p-8 rounded-xl border border-brand-sand shadow-sm space-y-8"
            >
              <h2 className="text-2xl font-serif text-brand-black border-b border-brand-sand pb-4">Overview</h2>
              <p className="text-brand-taupe font-light leading-relaxed">
                Buying property in Salento is an exciting opportunity, whether for a holiday home, investment or permanent relocation. This guide walks you through every step of the process — from research and due diligence to purchase and renovation.
              </p>

              {/* HORIZONTAL STEPPER */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 pt-4 text-center relative">
                {[
                  { step: '1', title: 'Research & Define', icon: Search },
                  { step: '2', title: 'Property Search & Viewings', icon: ClipboardList },
                  { step: '3', title: 'Due Diligence & Checks', icon: ShieldCheck },
                  { step: '4', title: 'Offer & Legal Process', icon: Handshake },
                  { step: '5', title: 'Completion & After Purchase', icon: Key },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center space-y-3 relative z-10">
                    <div className="w-14 h-14 rounded-full bg-brand-beige border border-brand-sand flex items-center justify-center text-brand-gold shadow-sm hover:scale-105 transition-transform">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-brand-gold font-serif">{item.step}</span>
                    <h4 className="text-xs font-bold text-brand-black leading-tight max-w-[100px] mx-auto">{item.title}</h4>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* THE BUYING PROCESS (ANIMATA AL DEGLI SCORRIMENTO) */}
            <motion.section 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-serif text-brand-black">The Buying Process</h2>
              <p className="text-brand-taupe font-light">A high-level overview of the key steps involved in buying property in Italy.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {[
                  { step: '1. Research & Define', desc: 'Define your goals, budget, preferred areas and property type.' },
                  { step: '2. Search & Viewings', desc: 'We identify suitable options and arrange viewings in Salento.' },
                  { step: '3. Due Diligence', desc: 'We conduct all legal, technical and planning checks for peace of mind.' },
                  { step: '4. Offer & Legal Process', desc: 'Make an offer, sign preliminary contract and complete legal formalities.' },
                  { step: '5. Completion', desc: 'Final deed signing, utilities transfer and post-purchase support.' },
                ].map((card, idx) => (
                  <div key={idx} className="bg-brand-white p-5 rounded-xl border border-brand-sand shadow-xs space-y-3">
                    <h4 className="text-xs font-bold text-brand-gold uppercase tracking-wider">{card.step}</h4>
                    <p className="text-xs text-brand-taupe font-light leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* KEY TOPICS COVERED (ACCORDION ANIMATO AL DEGLI SCORRIMENTO) */}
            <motion.section 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-serif text-brand-black">Key Topics Covered</h2>
              
              <div className="space-y-4">
                {topics.map((topic, idx) => {
                  const isOpened = activeTopic === idx;
                  return (
                    <div 
                      key={idx} 
                      className="bg-brand-white rounded-xl border border-brand-sand overflow-hidden shadow-sm transition-all duration-300"
                    >
                      {/* INTESTAZIONE ACCORDION CLICKABILE */}
                      <button
                        onClick={() => setActiveTopic(isOpened ? null : idx)}
                        className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 rounded-full bg-brand-beige flex items-center justify-center text-brand-gold flex-shrink-0">
                            <topic.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-serif text-lg text-brand-black font-semibold">{topic.title}</h4>
                            <p className="text-xs text-brand-taupe font-light mt-0.5">{topic.subtitle}</p>
                          </div>
                        </div>
                        <ChevronDown 
                          className={`w-5 h-5 text-brand-gold transition-transform duration-300 ${isOpened ? 'rotate-180' : ''}`} 
                        />
                      </button>

                      {/* CONTENUTO COLLASSABILE CON ANIMAZIONE FLUIDA */}
                      <AnimatePresence initial={false}>
                        {isOpened && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="px-6 pb-6 pt-2 border-t border-brand-sand/40 text-sm text-brand-taupe font-light leading-relaxed">
                              {topic.content}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.section>

            {/* EMBEDDED BLOG SECTION (ANIMATA AL DEGLI SCORRIMENTO) */}
            <motion.section 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 pt-6 border-t border-brand-sand"
            >
              <div>
                <h2 className="text-3xl font-serif text-brand-black">Latest Articles & Insights</h2>
                <p className="text-brand-taupe font-light mt-1">Explore our latest guides and articles.</p>
              </div>
              <div className="bg-brand-white p-4 rounded-xl border border-brand-sand shadow-sm min-h-[400px]">
                <div id="soro-blog"></div>
              </div>
            </motion.section>

          </main>

          {/* RIGHT COLUMN: STICKY SIDEBAR */}
          <aside className="lg:col-span-4 space-y-8">
            
            {/* NEED PERSONAL GUIDANCE (ANIMATA AL DEGLI SCORRIMENTO) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-brand-sand/20 p-6 rounded-xl border border-brand-sand shadow-xs text-center space-y-4"
            >
              <h3 className="font-serif text-lg text-brand-black">Need Personal Guidance?</h3>
              <p className="text-xs text-brand-taupe font-light leading-relaxed">
                We offer independent advice and end-to-end support for international buyers.
              </p>
              <a 
                href="https://wa.me/447465207494"
                target="_blank"
                rel="noreferrer"
                className="bg-brand-gold text-brand-black block px-4 py-3 rounded-md font-bold text-xs tracking-wider uppercase hover:bg-brand-black hover:text-brand-white transition-all shadow-xs"
              >
                Book a Consultation
              </a>
            </motion.div>

            {/* HAVE QUESTIONS (ANIMATA AL DEGLI SCORRIMENTO) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-brand-white p-6 rounded-xl border border-brand-sand shadow-xs space-y-4"
            >
              <h3 className="font-serif text-lg text-brand-black border-b border-brand-sand pb-3">Have Questions?</h3>
              <p className="text-xs text-brand-taupe font-light leading-relaxed">
                We are here to help you make the right decision.
              </p>
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
              <a 
                href="/contact"
                className="border border-brand-gold text-brand-black block text-center py-2.5 rounded-md font-bold text-xs tracking-wider uppercase hover:bg-brand-gold transition-all"
              >
                Contact Us
              </a>
            </motion.div>

          </aside>

        </div>

      </div>
    </div>
  );
}
