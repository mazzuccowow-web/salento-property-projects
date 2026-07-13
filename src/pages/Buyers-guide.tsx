/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
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
  Hammer
} from 'lucide-react';

import homeph from "../photo/homeph.jpg";

export default function BuyersGuide() {

  useEffect(() => {
    // Creiamo il tag script dinamicamente quando la pagina viene caricata
    const script = document.createElement('script');
    script.src = "https://app.trysoro.com/api/embed/bb2cb9bd-d6eb-475e-b4be-112bff94a8eb";
    script.defer = true;
    
    // Lo appendiamo al body del documento
    document.body.appendChild(script);

    // Rimuoviamo lo script quando l'utente cambia pagina per evitare duplicazioni
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="pt-32 pb-24 bg-brand-beige min-h-screen" id="buyers-guide-page">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HERO SECTION (SPLIT LAYOUT) */}
        <div className="bg-brand-white rounded-2xl overflow-hidden border border-brand-sand shadow-lg grid grid-cols-1 md:grid-cols-12 gap-0 mb-16">
          <div className="md:col-span-7 p-8 md:p-16 flex flex-col justify-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-serif text-brand-black leading-tight">
              Buyer's Guide
            </h1>
            <p className="text-xl text-brand-gold font-serif italic">
              Your step-by-step resource for buying property in Salento, Italy
            </p>
            <p className="text-brand-taupe font-light leading-relaxed">
              Essential information, practical advice and local insights to help you buy with confidence and avoid costly mistakes.
            </p>
            <a 
              href="https://wa.me/447465207494"
              target="_blank"
              rel="noreferrer"
              className="bg-brand-gold text-brand-black px-8 py-3.5 rounded-md font-bold text-sm tracking-wider uppercase hover:bg-brand-black hover:text-brand-white transition-all shadow-md w-fit flex items-center space-x-2"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="md:col-span-5 relative h-64 md:h-auto min-h-[350px]">
            <img 
              src={homeph} 
              alt="Salento Property landscape" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* TWO COLUMNS LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN: MAIN CONTENT (Overview, Buying Process, Topics, Soro Embed) */}
          <main className="lg:col-span-8 space-y-16">
            
            {/* OVERVIEW SECTION */}
            <section className="bg-brand-white p-8 rounded-xl border border-brand-sand shadow-sm space-y-8">
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
            </section>

            {/* THE BUYING PROCESS */}
            <section className="space-y-6">
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
            </section>

            {/* KEY TOPICS COVERED */}
            <section className="space-y-6">
              <h2 className="text-2xl font-serif text-brand-black">Key Topics Covered</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { title: 'Why Salento?', desc: 'Discover what makes Salento a unique place to invest and live.', icon: MapPin },
                  { title: 'Costs & Taxes', desc: 'Understand all the costs involved and the tax implications.', icon: Landmark },
                  { title: 'Legal & Due Diligence', desc: 'The essential checks to protect your investment.', icon: ShieldCheck },
                  { title: 'Renovation & Planning', desc: 'Permits, approvals and best practices for renovations.', icon: Hammer },
                  { title: 'Managing Remotely', desc: 'How we help you manage your property from abroad.', icon: Layers },
                  { title: 'Financing Options', desc: 'Mortgages in Italy and international financing.', icon: BookOpen },
                  { title: 'FAQs', desc: 'Answers to the most common questions from buyers.', icon: HelpCircle },
                  { title: 'Useful Resources', desc: 'Links, contacts and documents to support your journey.', icon: FileText },
                ].map((topic, idx) => (
                  <div key={idx} className="bg-brand-white p-5 rounded-xl border border-brand-sand shadow-xs space-y-2 hover:border-brand-gold transition-colors">
                    <topic.icon className="w-5 h-5 text-brand-gold mb-1" />
                    <h4 className="text-xs font-bold text-brand-black">{topic.title}</h4>
                    <p className="text-[11px] text-brand-taupe font-light leading-relaxed">{topic.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* SORO EMBEDDED BLOG SECTION */}
            <section className="space-y-6 pt-6 border-t border-brand-sand">
              <div>
                <h2 className="text-3xl font-serif text-brand-black">Latest Articles & Insights</h2>
                <p className="text-brand-taupe font-light mt-1">Explore our guides and articles updated automatically by Soro SEO.</p>
              </div>

              {/* CONTENITORE DOVE SORO INIETTERÀ IL BLOG */}
              <div className="bg-brand-white p-4 rounded-xl border border-brand-sand shadow-sm min-h-[400px]">
                <div id="soro-blog"></div>
              </div>
            </section>

            {/* CALL TO ACTION ROW */}
            <div className="bg-brand-sand/30 p-8 rounded-xl border border-brand-sand flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center space-x-4">
                <div className="bg-brand-gold/10 p-3 rounded-full text-brand-gold hidden md:block">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-brand-black">Ready to Take the Next Step?</h4>
                  <p className="text-sm text-brand-taupe font-light mt-1">Book a consultation with our team and start your property journey in Salento.</p>
                </div>
              </div>
              <a 
                href="https://wa.me/447465207494"
                target="_blank"
                rel="noreferrer"
                className="bg-brand-gold text-brand-black px-6 py-3 rounded-md font-bold text-xs tracking-wider uppercase hover:bg-brand-black hover:text-brand-white transition-all w-full md:w-auto text-center"
              >
                Book a Consultation
              </a>
            </div>

          </main>

          {/* RIGHT COLUMN: STICKY SIDEBAR */}
          <aside className="lg:col-span-4 space-y-8">
            
            {/* IN THIS GUIDE */}
            <div className="bg-brand-white p-6 rounded-xl border border-brand-sand shadow-xs space-y-4">
              <h3 className="font-serif text-lg text-brand-black border-b border-brand-sand pb-3">In This Guide</h3>
              <ul className="space-y-3 text-xs text-brand-taupe">
                {[
                  'Why Salento?',
                  'Step-by-Step Process',
                  'Costs & Taxes',
                  'Legal & Due Diligence',
                  'Renovation & Planning',
                  'Managing Remotely',
                  'FAQs',
                  'Useful Resources'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-2.5 hover:text-brand-gold cursor-pointer transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* NEED PERSONAL GUIDANCE */}
            <div className="bg-brand-sand/20 p-6 rounded-xl border border-brand-sand shadow-xs text-center space-y-4">
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
            </div>

            {/* RELATED SERVICES */}
            <div className="bg-brand-white p-6 rounded-xl border border-brand-sand shadow-xs space-y-4">
              <h3 className="font-serif text-lg text-brand-black border-b border-brand-sand pb-3">Related Services</h3>
              <div className="space-y-4">
                {[
                  { title: 'Property Search Service', desc: 'Find the right property with local expertise.' },
                  { title: 'Masseria Renovation', desc: 'Restore and add value to historic properties.' },
                  { title: 'Apartment Refurbishment', desc: 'Modern living in the heart of Salento.' },
                  { title: 'Project Management', desc: 'We manage your project from start to finish.' },
                ].map((service, idx) => (
                  <div key={idx} className="flex items-start space-x-3 group cursor-pointer">
                    <div className="w-12 h-12 rounded bg-brand-beige overflow-hidden flex-shrink-0">
                      <img src={homeph} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-brand-black group-hover:text-brand-gold transition-colors">{service.title}</h4>
                      <p className="text-[10px] text-brand-taupe font-light leading-snug">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* HAVE QUESTIONS */}
            <div className="bg-brand-white p-6 rounded-xl border border-brand-sand shadow-xs space-y-4">
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
            </div>

          </aside>

        </div>

      </div>
    </div>
  );
}
