/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        howItWorks: 'How It Works',
        testimonials: 'Testimonials',
        buyersGuide: "Buyer's Guide",
        contact: 'Contact'
      },

      hero: {
        title: 'Buying Property in Salento?',
        subtitle: "We'll help you make the right decision before you buy...\n...and professionally manage everything that comes after.",
        description2: "Buying a property abroad is exciting.\nManaging architects, builders, permits, budgets and renovations from another country isn't.\nThat's where we come in.",
        word: 'We transform the complexity of Italian property renovation into a seamless, prestigious journey for our international clients.',
        cta: 'Book a Free Consultation'
      },

      home: {
        whyUs: {
          title: 'Why Choose Us',
          ukExp: 'UK & Italian Experience',
          localNet: 'Local Network',
          transparency: 'Transparent Communication',
          supervision: 'On-site Supervision',
          englishSupport: 'English-speaking Support'
        },
        services: {
          title: 'Our Key Services',
          budgeting: 'Budget Planning',
          planning: 'Project Planning',
          renovation: 'Renovation Management'
        },
        trust: {
          leftText: 'Working in collaboration with a carefully selected network of established Italian companies and professional partners.',
          rightText: 'Salento Property Projects is a trading name of New Deal Construction Ltd, a company registered in England and Wales.\nCompany No. 13665037 · VAT No. 402 8992 85'
        }
      },

      about: {
        title: 'Who We Are',
        mission: 'Our Mission',
        missionDesc1:
          'Salento Property Projects was founded on a simple realization: international property owners in Salento needed operational support capable of more effectively structuring and coordinating professionals, contractors, and all stages of the project.',
        missionDesc2:
          'With 25 years of experience in the UK operations and finance sectors, we are native Italian speakers who offer the perfect blend of British organizational standards and local expertise. We are well-connected with trained local professionals to ensure every project achieves international-level results.',
        indTitle: 'Independent Property Consultancy in Salento & Italy',
        indDesc1: 'At Salento Property Projects, we believe buying a property is only the beginning of an exciting journey.',
        indDesc2: "Whether you've already found your dream home or you're still searching, we're here to help you make informed decisions and guide you through every stage that follows.",
        indDesc3: 'From independent pre-purchase advice to renovation planning, project coordination and final handover, we work exclusively in your best interests, giving you complete confidence throughout the entire process.',
        differentTitle: "Why We're Different",
        diff1: "We don't sell properties.",
        diff2: "We don't work for contractors.",
        diff3: "We don't earn commissions from builders.",
        diff4: "We work exclusively for you.",
        diff5: "Independent advice.",
        diff6: "Independent project coordination.",
        diff7: "Complete peace of mind.",
        teamTitle: 'The Team',
        whoWeAreDesc:
          'Founded by Andrea and Mirella Lefter, Salento Property Projects was created to help international buyers navigate renovation projects in Salento through a more structured, transparent and operational approach.',
        andreaName: 'Andrea',
        andreaRole: 'Founder & Project Coordinator',
        andreaDesc:
          'With a background influenced by UK operational and project coordination standards, Andrea focuses on helping international buyers navigate the complexities of property renovation in Salento with greater clarity, structure and confidence.',
        mirellaName: 'Mirella Lefter',
        mirellaRole: 'Quantity Surveyor',
        mirellaDesc:
          'Mirella supports the financial and cost management side of each project, helping clients better understand budgets, work scopes and renovation planning through a more organised and transparent approach.',
        teamDesc:
          'Together, we combine operational coordination and cost management expertise to help international clients approach renovation projects in Salento with greater peace of mind and structure.'
      },

      testimonials: {
        eyebrow: 'Client Experiences',
        title: 'What Our Clients Say',
        subtitle: 'From property consultancy in Salento to construction and project management in London, our clients value our independent advice, hands-on approach and commitment to getting things right.',
        verifiedBadge: 'Verified Reference',
        ctaTitle: 'Ready to start your property journey with total confidence?',
        ctaSubtitle: 'Book a confidential consultation with Andrea and our team.',
        ctaButton: 'Book a Free Consultation',
        items: {
          ian: {
            author: 'Ian Fielding — Enfield, London',
            locationBadge: 'London, United Kingdom',
            p1: 'Andrea, the manager, ensured he and his team always kept us informed and discussed issues arising before, during and after the building works. The works were undertaken whilst we were at home and the attitude of all the contractor’s team towards us was very positive and open to listening to our needs.',
            p2: 'There are a small number of snagging items at the end of the works, but everything is being resolved to our satisfaction. This project could have been very disruptive as both my wife and I work from home, but New Deal managed to minimise any disturbance to us and allowed us to continue our routines as usual.',
            highlight: 'Certainly a company I have no hesitation in recommending others to use.'
          },
          silvana: {
            author: 'Silvana De Palma — Nettuno, Rome',
            locationBadge: 'Rome, Italy',
            p1: 'We had an initial consultation with Andrea and Mirella before purchasing a property in Salento. We were particularly impressed by their knowledge of the local market and their ability to make sense of what can sometimes feel like a real jungle when looking for the right property in Italy.',
            p2: 'Their advice and initial assessment gave us much greater clarity and helped us choose the right property, not only for what we were looking for, but also for its potential as an investment.',
            highlight: 'A very valuable consultation that gave us the confidence to make the right choice.'
          },
          hgm: {
            author: 'HGM Management — Poplar, London',
            locationBadge: 'London, United Kingdom',
            p1: 'Dear Andrea and Mirella, we would like to take a moment to thank you for all of your hard work and effort over the last months. We truly appreciate all that you have done for us.',
            p2: 'We hope you accept this gift from us as a sincere token of our gratitude and appreciation.',
            highlight: 'We will forever be grateful for your help.'
          }
        }
      },

      // 👉 SEZIONE BUYER'S GUIDE (EN)
      buyersGuidePage: {
        hero: {
          title: "Buyer's Guide",
          subtitle: 'Your step-by-step resource for buying property in Salento, Italy'
        },
        leadMagnet: {
          badge: 'Free Digital Download',
          title: 'Before You Buy in Salento',
          subtitle: 'The Essential Guide for International Property Buyers',
          description: 'Thinking of buying a property in Salento? Download our free Buyer’s Guide and discover the essential steps, hidden costs, legal considerations and practical advice every international buyer should know before making a purchase. Written by local property professionals to help you buy with confidence.',
          firstName: 'First Name',
          lastName: 'Last Name',
          email: 'Email Address',
          gdprConsent: 'I agree to receive updates, guides and occasional property insights from Salento Property Projects. I can unsubscribe at any time.',
          buttonIdle: 'Download Your Free Guide',
          buttonSending: 'Preparing Download...',
          errorMessage: 'Something went wrong. Please try again.',
          successTitle: 'Thank you!',
          successText: 'Your download has started automatically. If it doesn’t, ',
          successLink: 'click here to download manually.'
        },
        overview: {
          title: 'Overview',
          description: 'Buying property in Salento is an exciting opportunity, whether for a holiday home, investment or permanent relocation. This guide walks you through every step of the process — from research and due diligence to purchase and renovation.'
        },
        steps: {
          title: 'The Buying Process',
          subtitle: 'A high-level overview of the key steps involved in buying property in Italy.',
          s1: { name: 'Research & Define', desc: 'Define your goals, budget, preferred areas and property type.' },
          s2: { name: 'Search & Viewings', desc: 'We identify suitable options and arrange viewings in Salento.' },
          s3: { name: 'Due Diligence', desc: 'We conduct all legal, technical and planning checks for peace of mind.' },
          s4: { name: 'Offer & Legal Process', desc: 'Make an offer, sign preliminary contract and complete legal formalities.' },
          s5: { name: 'Completion', desc: 'Final deed signing, utilities transfer and post-purchase support.' }
        },
        accordionTitle: 'Key Topics Covered',
        topics: {
          t1: {
            title: 'Why Salento?',
            subtitle: 'Why are more international buyers choosing Salento?',
            p1: "Salento has become one of Southern Europe's most attractive property investment destinations. With its crystal-clear coastline, historic towns, authentic Italian lifestyle and relatively affordable property prices, the region offers exceptional long-term value.",
            p2: 'Unlike many saturated Mediterranean markets, Salento still presents opportunities to purchase historic townhouses, countryside villas and renovation projects at competitive prices.',
            p3: 'Whether your goal is a holiday home, a lifestyle investment, short-term rental income or a long-term property portfolio, Salento combines strong potential with an exceptional quality of life.',
            listTitle: 'Key advantages include:',
            items: ['Competitive property prices', 'Growing international demand', 'Strong tourism sector', 'Authentic Italian culture', 'Excellent renovation opportunities', 'High rental potential in selected locations', 'Mediterranean climate all year round'],
            closing: 'Our role is to help you navigate this market with clarity, confidence and complete independence.'
          },
          t2: {
            title: 'Step-by-Step Process',
            subtitle: "Buying property in Italy doesn't have to be complicated.",
            p1: 'We guide you through every stage of the process, ensuring you understand each decision before moving forward.',
            listTitle: 'Our consultancy typically follows these steps:',
            items: ['Initial consultation to understand your goals.', 'Property search and independent assessment.', 'Site inspections and technical observations.', 'Investment feasibility review.', 'Cost estimation and renovation strategy.', 'Legal and technical due diligence.', 'Offer negotiation support.', 'Coordination with professionals involved.', 'Renovation planning (if required).', 'Ongoing project management until completion.'],
            closing: 'Every project is different, but our structured approach reduces uncertainty and helps avoid costly mistakes.'
          },
          t3: {
            title: 'Costs & Taxes',
            subtitle: 'Understanding the real cost of buying property in Italy.',
            p1: 'The purchase price is only one part of your investment.',
            listTitle: 'Depending on the type of property and your circumstances, additional costs may include:',
            items: ['Purchase taxes', 'Notary fees', 'Legal fees', 'Land Registry charges', 'Survey costs', 'Agency fees (where applicable)', 'Renovation costs', 'Utility connections', 'Annual ownership taxes'],
            after1: 'Many overseas buyers underestimate these additional expenses.',
            after2: 'Our consultancy provides realistic cost planning before you commit to any purchase, allowing you to budget with confidence.',
            closing: 'Transparency is one of the foundations of every successful investment.'
          },
          t4: {
            title: 'Legal & Due Diligence',
            subtitle: 'Protecting your investment before you buy.',
            p1: 'One of the biggest risks when purchasing overseas is relying on incomplete or inaccurate information.',
            p2: 'Before any commitment is made, every property should be carefully assessed from both a legal and technical perspective.',
            listTitle: 'This may include reviewing:',
            items: ['Ownership history', 'Planning permissions', 'Building compliance', 'Land Registry information', 'Existing mortgages or legal restrictions', 'Technical documentation', 'Building condition', 'Renovation feasibility'],
            after1: 'We coordinate with qualified local professionals while remaining fully independent from estate agents and contractors.',
            closing: 'Our priority is protecting your interests throughout the purchasing process.'
          },
          t5: {
            title: 'Renovation & Planning',
            subtitle: 'Transforming potential into value.',
            p1: "Many of Salento's most attractive properties require renovation.",
            p2: 'A successful renovation begins long before construction starts.',
            listTitle: 'We help clients understand:',
            items: ['Project feasibility', 'Preliminary design strategy', 'Budget planning', 'Construction cost estimates', 'Programme of works', 'Contractor coordination', 'Quality control', 'Progress monitoring', 'Final handover'],
            after1: 'Whether restoring a traditional townhouse or renovating a countryside property, careful planning reduces delays, unexpected costs and unnecessary risks.',
            closing: 'Our experience in project management allows clients to make informed decisions from the very beginning.'
          },
          t6: {
            title: 'Managing Remotely',
            subtitle: 'Invest with confidence — wherever you are.',
            p1: 'Many of our clients live outside Italy. Travelling frequently during a renovation is often impractical.',
            p2: 'Our consultancy allows you to manage your investment remotely through structured reporting and transparent communication.',
            listTitle: 'Depending on your chosen service package, we can provide:',
            items: ['Regular project updates', 'Site visit reports', 'Photo and video progress documentation', 'Budget monitoring', 'Coordination with contractors', 'Issue management', 'Programme tracking', 'Final completion reporting'],
            after1: 'Our objective is simple:',
            closing: 'To give you complete visibility over your investment, even when you are thousands of miles away.'
          }
        },
        blog: {
          title: 'Latest Articles & Insights',
          subtitle: 'Explore our latest guides and articles.'
        },
        sidebar: {
          guidanceTitle: 'Need Personal Guidance?',
          guidanceDesc: 'We offer independent advice and end-to-end support for international buyers.',
          guidanceBtn: 'Book a Consultation',
          questionsTitle: 'Have Questions?',
          questionsDesc: 'We are here to help you make the right decision.',
          questionsBtn: 'Contact Us'
        }
      },

      contact: {
        title: 'Get in Touch',
        subtitle: 'Let’s discuss your project',
        callUs: 'Call Us',
        emailUs: 'Email Us',
        presence: 'Our Presence',
        whatsapp: 'WhatsApp',
        whatsappDesc: 'Need a quick answer? Connect with our project managers directly on WhatsApp.',
        openWhatsapp: 'Open WhatsApp',
        form: {
          name: 'Name',
          namePlaceholder: 'Your Name',
          email: 'Email',
          emailPlaceholder: 'Your Email',
          projectType: 'Project Type',
          message: 'Message',
          messagePlaceholder: 'Tell us about your project...',
          send: 'Send Message',
          sending: 'Sending...',
          success: 'Thank you! Your message has been sent successfully.',
          error: 'Something went wrong. Please try again.',
          options: {
            masseria: 'Masseria Renovation',
            apartment: 'Apartment Refurbishment',
            search: 'Property Search Support',
            other: 'Other'
          }
        }
      },

      howItWorks: {
        title: 'How It Works',
        step1: 'Consultation',
        step1Desc: 'We begin with a detailed consultation to understand your goals, budget and vision. Whether you are purchasing, renovating or investing in property in Salento, we take the time to identify the most effective strategy for your project.',
        step2: 'Property Assessment',
        step2Desc: 'Our team conducts a comprehensive assessment of the property, evaluating its condition, renovation potential, structural requirements and investment opportunities. This allows us to provide clear recommendations before any work begins.',
        step3: 'Planning & Budgeting',
        step3Desc: 'We take care of the financial aspects of the project, helping to protect our clients from costly mistakes, unexpected expenses and unnecessary risks. Through careful planning, transparent budgeting and continuous oversight, we ensure that every decision supports the project\'s objectives while safeguarding our clients\' investment. A detailed timeline and cost structure are prepared from the outset to provide clarity, control and peace of mind throughout the entire process.',
        step4: 'Project Execution',
        step4Desc: 'Our experienced professionals manage and coordinate every aspect of the renovation or construction process on your behalf. We specialise in working with overseas property owners and investors, providing a seamless remote project management experience. Through regular email updates, scheduled video calls, live site walkthroughs and detailed progress reports, we ensure you remain fully informed and involved at every stage of the project. Our goal is to give you complete visibility, confidence and peace of mind, wherever you are in the world.',
        step5: 'Completion & Handover',
        step5Desc: 'Once the work is completed, we carry out final inspections to ensure the highest standards have been met. The property is then handed over ready for use, rental or resale, together with all relevant documentation and certifications.'
      },

      servicesPage: {
        title: 'Our Services',
        subtitle: 'At Salento Property Projects, we provide independent guidance and professional coordination throughout every phase of your journey—from your first property viewing to the successful completion of your investment.',
        pm: 'Property Project Management',
        pmDesc: 'End-to-end management of your Salento property project.',
        ro: 'Renovation Oversight',
        roDesc: 'Frequent site inspections and coordination of all trades.',
        bp: 'Budget Planning & Control',
        bpDesc: 'Accurate cost estimation and ongoing financial management.',
        ib: 'Support for International Buyers',
        ibDesc: 'Due diligence and technical evaluation before you commit.',
        cc: 'Contractor Coordination',
        ccDesc: 'Procurement and management of local builders and artisans.',
        pi: 'Property Inspections',
        piDesc: 'Regular health checks of your property during off-season.'
      },

      footer: {
        description: 'We support international clients through every stage of renovation and property management in Salento.',
        socialMedia: 'Social Media'
      }
    }
  },

  it: {
    translation: {
      nav: {
        home: 'Home',
        about: 'Chi Siamo',
        services: 'Servizi',
        howItWorks: 'Come Funziona',
        testimonials: 'Testimonianze',
        buyersGuide: 'Guida per Acquirenti',
        contact: 'Contatti'
      },

      hero: {
        title: 'Stai acquistando un immobile nel Salento?',
        subtitle: "Ti aiutiamo a prendere la decisione giusta prima dell'acquisto...\ne gestiamo professionalmente tutto ciò che viene dopo.",
        description2: "Acquistare un immobile all'estero è emozionante.\nGestire architetti, costruttori, permessi, budget e ristrutturazioni da un altro Paese non lo è.\nEd è qui che entriamo in gioco noi.",
        word: 'Trasformiamo la complessità delle ristrutturazioni immobiliari in Italia in un percorso lineare e di prestigio per i nostri clienti internazionali.',
        cta: 'Prenota una Consulenza Gratuita'
      },

      home: {
        whyUs: {
          title: 'Perché Sceglierci',
          ukExp: 'Esperienza UK e Italiana',
          localNet: 'Rete Locale',
          transparency: 'Comunicazione Trasparente',
          supervision: 'Supervisione in Loco',
          englishSupport: 'Supporto in Lingua Inglese'
        },
        services: {
          title: 'I Nostri Servizi',
          budgeting: 'Pianificazione Budget',
          planning: 'Pianificazione Progetto',
          renovation: 'Gestione Ristrutturazione'
        },
        trust: {
          leftText: 'Lavoriamo in collaborazione con una rete accuratamente selezionata di aziende italiane affermate e partner professionali.',
          rightText: 'Salento Property Projects è un nome commerciale di New Deal Construction Ltd, società registrata in Inghilterra e Galles.\nReg. Società N. 13665037 · Partita IVA N. 402 8992 85'
        }
      },

      about: {
        title: 'Chi Siamo',
        mission: 'La Nostra Missione',
        missionDesc1:
          'Salento Property Projects è nata da una semplice consapevolezza: i proprietari internazionali di immobili nel Salento avevano bisogno di un supporto operativo capace di coordinare in modo più strutturato professionisti, imprese e tutte le fasi del progetto.',
        missionDesc2:
          'Siamo madrelingua italiani con 25 anni di esperienza nei settori delle operazioni e della finanza nel Regno Unito. Questo ci permette di offrire il mix perfetto tra standard organizzativi britannici e competenza locale. Siamo profondamente connessi con professionisti del territorio per garantire che ogni progetto raggiunga risultati di livello internazionale.',
        indTitle: 'Consulenza Immobiliare Indipendente nel Salento e in Italia',
        indDesc1: 'Presso Salento Property Projects, crediamo che acquistare un immobile sia solo l\'inizio di un viaggio emozionante.',
        indDesc2: 'Sia che tu abbia già trovato la casa dei tuoi sogni o che la stia ancora cercando, siamo qui per aiutarti a prendere decisioni informate e guidarti in ogni fase successiva.',
        indDesc3: 'Dalla consulenza indipendente prima dell\'acquisto alla pianificazione della ristrutturazione, al coordinamento del progetto e alla consegna finale, lavoriamo esclusivamente nel tuo interesse, dandoti piena fiducia durante l\'intero processo.',
        differentTitle: 'Perché siamo diversi',
        diff1: 'Non vendiamo immobili.',
        diff2: 'Non lavoriamo per le imprese.',
        diff3: 'Non guadagniamo commissioni dai costruttori.',
        diff4: 'Lavoriamo esclusivamente per te.',
        diff5: 'Consulenza indipendente.',
        diff6: 'Coordinamento indipendente dei progetti.',
        diff7: 'Completa tranquillità.',
        teamTitle: 'Il Team',
        whoWeAreDesc:
          'Fondata da Andrea Mazzucco e Mirella Lefter, Salento Property Projects nasce per aiutare clienti internazionali a gestire progetti di ristrutturazione nel Salento attraverso un approccio più strutturato, trasparente e operativo.',
        andreaName: 'Andrea Mazzucco',
        andreaRole: 'Fondatore & Coordinatore Progetti',
        andreaDesc:
          'Con un background influenzato dagli standard britannici di coordinamento operativo e gestione progetti, Andrea aiuta clienti internazionali ad affrontare le complessità delle ristrutturazioni nel Salento con maggiore chiarezza, struttura e sicurezza.',
        mirellaName: 'Mirella Lefter',
        mirellaRole: 'Responsabile controllo costi',
        mirellaDesc:
          'Mirella si occupa della gestione economica e del controllo costi dei progetti, aiutando i clienti a comprendere meglio budget, lavorazioni e pianificazione delle ristrutturazioni attraverso un approccio più organizzato e trasparente.',
        teamDesc:
          'Insieme uniamo coordinamento operativo e competenze nella gestione dei costi per aiutare clienti internazionali ad affrontare progetti di ristrutturazione nel Salento con maggiore serenità e organizzazione.'
      },

      testimonials: {
        eyebrow: 'Esperienze dei Clienti',
        title: 'Cosa Dicono i Nostri Clienti',
        subtitle: 'Dalla consulenza immobiliare nel Salento alla gestione di progetti e costruzioni a Londra, i nostri clienti apprezzano la nostra consulenza indipendente, l\'approccio operativo e l\'impegno costante per ottenere risultati ottimali.',
        verifiedBadge: 'Referenza Verificata',
        ctaTitle: 'Pronto ad avviare il tuo progetto immobiliare con la massima serenità?',
        ctaSubtitle: 'Prenota una consulenza riservata con Andrea e il nostro team.',
        ctaButton: 'Prenota una Consulenza Gratuita',
        items: {
          ian: {
            author: 'Ian Fielding — Enfield, London',
            locationBadge: 'Londra, Regno Unito',
            p1: 'Andrea, il manager, si è assicurato che lui e il suo team ci tenessero sempre informati e discutessero qualsiasi problematica prima, durante e dopo i lavori. Le opere sono state eseguite mentre eravamo a casa e l\'atteggiamento di tutta la squadra è stato estremamente positivo e aperto all\'ascolto delle nostre esigenze.',
            p2: 'C\'erano alcune piccole rifiniture finali al termine dei lavori, ma tutto è stato risolto con nostra piena soddisfazione. Questo progetto avrebbe potuto essere molto invasivo dato che sia io che mia moglie lavoriamo da casa, ma New Deal è riuscita a ridurre al minimo i disagi permettendoci di continuare le nostre routine come di consueto.',
            highlight: 'Un\'azienda che non ho alcuna esitazione a raccomandare ad altri.'
          },
          silvana: {
            author: 'Silvana De Palma — Nettuno, Rome',
            locationBadge: 'Roma, Italia',
            p1: 'Abbiamo fatto una consulenza iniziale con Andrea e Mirella prima di acquistare un immobile nel Salento. Siamo rimasti particolarmente colpiti dalla loro conoscenza del mercato locale e dalla capacità di fare chiarezza in quella che a volte può sembrare una vera giungla quando si cerca la proprietà giusta in Italia.',
            p2: 'I loro consigli e la valutazione preliminare ci hanno dato una chiarezza molto maggiore e ci hanno aiutato a scegliere l\'immobile perfetto, non solo per quello che cercavamo, ma anche per il suo potenziale come investimento.',
            highlight: 'Una consulenza di grande valore che ci ha dato la sicurezza necessaria per fare la scelta giusta.'
          },
          hgm: {
            author: 'HGM Management — Poplar, London',
            locationBadge: 'Londra, Regno Unito',
            p1: 'Cari Andrea e Mirella, desideriamo ringraziarvi di cuore per tutto il vostro duro lavoro e l\'impegno costante negli ultimi mesi. Apprezziamo immensamente tutto ciò che avete fatto per noi.',
            p2: 'Speriamo accettiate questo pensiero come sincero segno della nostra gratitudine e stima.',
            highlight: 'Vi saremo per sempre grati per il vostro prezioso aiuto.'
          }
        }
      },

      // 👉 SEZIONE BUYER'S GUIDE (IT)
      buyersGuidePage: {
        hero: {
          title: 'Guida per Acquirenti',
          subtitle: 'La tua guida passo dopo passo per acquistare immobili nel Salento'
        },
        leadMagnet: {
          badge: 'Download Digitale Gratuito',
          title: 'Prima di Acquistare nel Salento',
          subtitle: 'La Guida Essenziale per Acquirenti Internazionali',
          description: 'Stai pensando di acquistare un immobile nel Salento? Scarica la nostra Guida gratuita e scopri i passaggi chiave, i costi nascosti, gli aspetti legali e i consigli pratici che ogni acquirente dovrebbe conoscere prima di procedere. Scritta da professionisti per farti acquistare in totale serenità.',
          firstName: 'Nome',
          lastName: 'Cognome',
          email: 'Indirizzo Email',
          gdprConsent: 'Accetto di ricevere aggiornamenti, guide e approfondimenti periodici da Salento Property Projects. Posso disiscrivermi in qualsiasi momento.',
          buttonIdle: 'Scarica la Tua Guida Gratuita',
          buttonSending: 'Preparazione Download...',
          errorMessage: 'Qualcosa è andato storto. Per favore riprova.',
          successTitle: 'Grazie!',
          successText: 'Il download è iniziato automaticamente. Se non dovesse partire, ',
          successLink: 'clicca qui per scaricarla manualmente.'
        },
        overview: {
          title: 'Panoramica',
          description: 'Acquistare un immobile nel Salento è un\'opportunità straordinaria, sia per una casa vacanze, un investimento o un trasferimento permanente. Questa guida ti accompagna in ogni fase del percorso: dalla ricerca preliminare alla due diligence, fino all\'acquisto e alla ristrutturazione.'
        },
        steps: {
          title: 'Il Processo di Acquisto',
          subtitle: 'Una panoramica completa dei passaggi chiave per acquistare un immobile in Italia.',
          s1: { name: 'Ricerca e Definizione', desc: 'Definisci obiettivi, budget, zone preferite e tipologia di immobile.' },
          s2: { name: 'Ricerca e Visite', desc: 'Identifichiamo le migliori opzioni e organizziamo i sopralluoghi nel Salento.' },
          s3: { name: 'Due Diligence', desc: 'Eseguiamo verifiche legali, tecniche e urbanistiche per la massima serenità.' },
          s4: { name: 'Offerta e Pratiche Legali', desc: 'Formulazione dell\'offerta, firma del preliminare e iter notarile.' },
          s5: { name: 'Rogito e Consegna', desc: 'Firma dell\'atto finale, voltura delle utenze e supporto post-vendita.' }
        },
        accordionTitle: 'Argomenti Principali Trattati',
        topics: {
          t1: {
            title: 'Perché il Salento?',
            subtitle: 'Perché sempre più acquirenti internazionali scelgono il Salento?',
            p1: 'Il Salento è diventato una delle mete di investimento immobiliare più ambite del Sud Europa. Con le sue coste cristalline, i centri storici ricchi di fascino, l\'autentico stile di vita italiano e prezzi ancora competitivi, la regione offre uno straordinario valore a lungo termine.',
            p2: 'A differenza di mercati mediterranei saturi, il Salento offre ancora l\'opportunità di acquistare palazzotti storici, ville di campagna e proprietà da ristrutturare a condizioni molto vantaggiose.',
            p3: 'Che il tuo obiettivo sia una casa vacanze, un investimento a reddito o un patrimonio a lungo termine, il Salento unisce forte potenziale a una qualità di vita impareggiabile.',
            listTitle: 'I principali vantaggi includono:',
            items: ['Prezzi degli immobili altamente competitivi', 'Crescente domanda internazionale', 'Settore turistico in forte espansione', 'Cultura e tradizioni autentiche', 'Eccellenti opportunità di ristrutturazione', 'Alto potenziale di rendita da locazione', 'Clima mediterraneo tutto l\'anno'],
            closing: 'Il nostro ruolo è guidarti in questo mercato con trasparenza, sicurezza e totale indipendenza.'
          },
          t2: {
            title: 'Processo Passo dopo Passo',
            subtitle: 'Acquistare un immobile in Italia non deve essere complicato.',
            p1: 'Ti accompagniamo in ogni fase del percorso, assicurandoci che tu comprenda ogni scelta prima di procedere.',
            listTitle: 'La nostra consulenza segue solitamente questi passaggi:',
            items: ['Consulenza iniziale per comprendere le tue esigenze.', 'Ricerca mirata e valutazione indipendente.', 'Sopralluoghi e rilievi tecnici sul posto.', 'Analisi di fattibilità dell\'investimento.', 'Stima dei costi e strategia di ristrutturazione.', 'Due diligence legale e tecnica approfondita.', 'Supporto nella negoziazione dell\'offerta.', 'Coordinamento con i professionisti coinvolti.', 'Pianificazione dei lavori (se necessari).', 'Project management continuo fino alla consegna.'],
            closing: 'Ogni progetto è unico, ma il nostro metodo strutturato riduce le incertezze ed evita errori costosi.'
          },
          t3: {
            title: 'Costi e Imposte',
            subtitle: 'Comprendere il costo reale dell\'acquisto in Italia.',
            p1: 'Il prezzo di vendita è solo una parte dell\'investimento complessivo.',
            listTitle: 'A seconda della tipologia di immobile e della tua situazione, i costi aggiuntivi possono includere:',
            items: ['Imposte di registro o IVA', 'Onorari notarili', 'Consulenze legali e tecniche', 'Spese catastali e ipotecarie', 'Costi di perizia', 'Provvigioni di agenzia (ove applicabili)', 'Budget di ristrutturazione', 'Allacci utenze', 'Imposte annuali sulla proprietà (IMU/TARI)'],
            after1: 'Molti acquirenti stranieri sottovalutano queste spese accessorie.',
            after2: 'La nostra consulenza fornisce una pianificazione economica realistica prima di assumere impegni vincolanti, permettendoti di pianificare il budget con certezza.',
            closing: 'La trasparenza è il pilastro di ogni investimento di successo.'
          },
          t4: {
            title: 'Verifiche Legali e Due Diligence',
            subtitle: 'Proteggere il tuo investimento prima del rogito.',
            p1: 'Uno dei rischi maggiori quando si acquista all\'estero è fare affidamento su informazioni incomplete o imprecise.',
            p2: 'Prima di versare caparre, ogni immobile deve essere esaminato con la massima cura sia sotto il profilo giuridico che tecnico.',
            listTitle: 'Le verifiche possono comprendere:',
            items: ['Continuità delle trascrizioni e provenienza', 'Conformità edilizia e urbanistica', 'Allineamento catastale', 'Ispezioni ipotecarie (presenza di vincoli o ipoteche)', 'Agibilità e certificazioni impianti', 'Stato strutturale e conservativo', 'Fattibilità degli interventi edilizi'],
            after1: 'Collaboriamo con professionisti locali qualificati mantenendo la totale indipendenza da agenzie e imprese.',
            closing: 'La nostra priorità è tutelare esclusivamente i tuoi interessi durante l\'acquisto.'
          },
          t5: {
            title: 'Pianificazione e Ristrutturazione',
            subtitle: 'Trasformare il potenziale in valore reale.',
            p1: 'Molti degli immobili più affascinanti nel Salento richiedono interventi di restauro.',
            p2: 'Una ristrutturazione di successo inizia molto prima dell\'apertura del cantiere.',
            listTitle: 'Aiutiamo i clienti a comprendere:',
            items: ['Fattibilità preliminare dell\'intervento', 'Strategia progettuale', 'Pianificazione analitica del budget', 'Computi metrici estimativi dettagliati', 'Cronoprogramma dei lavori', 'Selezione e coordinamento delle imprese', 'Controllo di qualità continuo', 'Monitoraggio dell\'avanzamento', 'Collaudo e consegna finale'],
            after1: 'Che si tratti di restaurare un palazzotto antico o rinnovare una masseria, un\'attenta pianificazione previene ritardi, costi imprevisti e rischi.',
            closing: 'La nostra esperienza nel project management consente ai clienti di prendere decisioni consapevoli fin dal primo momento.'
          },
          t6: {
            title: 'Gestione da Remoto',
            subtitle: 'Investi con sicurezza — ovunque ti trovi.',
            p1: 'La maggior parte dei nostri clienti risiede all\'estero. Viaggiare costantemente durante i lavori è spesso complicato.',
            p2: 'Il nostro servizio ti consente di gestire il progetto a distanza grazie a reportistica costante e comunicazione trasparente.',
            listTitle: 'A seconda del pacchetto concordato, forniamo:',
            items: ['Aggiornamenti periodici dettagliati', 'Report di sopralluogo in cantiere', 'Documentazione foto e video in alta risoluzione', 'Monitoraggio costante dei costi', 'Interfaccia unica con imprese e artigiani', 'Risoluzione tempestiva degli imprevisti', 'Controllo del rispetto dei tempi', 'Verbale di fine lavori e consegna'],
            after1: 'Il nostro obiettivo è chiaro:',
            closing: 'Offrirti il pieno controllo e la totale serenità sul tuo investimento, anche a migliaia di chilometri di distanza.'
          }
        },
        blog: {
          title: 'Ultimi Articoli e Approfondimenti',
          subtitle: 'Esplora le nostre guide e i consigli di settore.'
        },
        sidebar: {
          guidanceTitle: 'Hai Bisogno di una Guida Personale?',
          guidanceDesc: 'Offriamo consulenza indipendente e assistenza end-to-end per acquirenti internazionali.',
          guidanceBtn: 'Prenota una Consulenza',
          questionsTitle: 'Hai Domande?',
          questionsDesc: 'Siamo qui per aiutarti a prendere la decisione giusta.',
          questionsBtn: 'Contattaci'
        }
      },

      contact: {
        title: 'Contattaci',
        subtitle: 'Parliamo del tuo progetto',
        callUs: 'Chiamaci',
        emailUs: 'Scrivici via Email',
        presence: 'La Nostra Presenza',
        whatsapp: 'WhatsApp',
        whatsappDesc: 'Hai bisogno di una risposta rapida? Connettiti direttamente con i nostri project manager su WhatsApp.',
        openWhatsapp: 'Apri WhatsApp',
        form: {
          name: 'Nome',
          namePlaceholder: 'Il tuo Nome',
          email: 'Email',
          emailPlaceholder: 'La tua Email',
          projectType: 'Tipo di Progetto',
          message: 'Messaggio',
          messagePlaceholder: 'Raccontaci del tuo progetto...',
          send: 'Invia Messaggio',
          sending: 'Invio in corso...',
          success: 'Grazie! Il tuo messaggio è stato inviato con successo.',
          error: 'Qualcosa è andato storto. Per favore riprova.',
          options: {
            masseria: 'Ristrutturazione Masseria',
            apartment: 'Ristrutturazione Appartamento',
            search: 'Supporto Ricerca Immobili',
            other: 'Altro'
          }
        }
      },

      howItWorks: {
        title: 'Come Funziona',
        step1: 'Consulenza',
        step1Desc: 'Iniziamo con una consulenza dettagliata per comprendere i vostri obiettivi, il budget e la visione. Che stiate acquistando, ristrutturando o investendo in un immobile nel Salento, ci prendiamo il tempo necessario per identificare la strategia più efficace per il vostro progetto.',
        step2: 'Valutazione dell\'Immobile',
        step2Desc: 'Il nostro team esegue una valutazione completa dell\'immobile, analizzandone lo stato, il potenziale di ristrutturazione, i requisiti strutturali e le opportunità di investimento. Questo ci consente di fornire raccomandazioni chiare prima dell\'inizio di qualsiasi lavoro.',
        step3: 'Pianificazione e Budgeting',
        step3Desc: 'Ci occupiamo degli aspetti finanziari del progetto, aiutando a proteggere i nostri clienti da errori costosi, spese impreviste e rischi non necessari. Attraverso una pianificazione attenta, un budgeting trasparente e una supervisione continua, garantiamo che ogni decisione supporti gli obiettivi del progetto salvaguardando l\'investimento del cliente. Un cronoprogramma dettagliato e una struttura dei costi vengono preparati fin dall\'inizio per offrire chiarezza, controllo e tranquillità durante l\'intero processo.',
        step4: 'Esecuzione del Progetto',
        step4Desc: 'I nostri professionisti qualificati gestiscono e coordinano ogni aspect del processo di ristrutturazione o costruzione per vostro conto. Siamo specializzati nel lavorare con proprietari e investitori stranieri, offrendo un\'esperienza fluida di project management da remoto. Tramite aggiornamenti regolari via email, videochiamate programmate, sopralluoghi in diretta dal cantiere e rapporti dettagliati sullo stato di avanzamento, ci assicuriamo che rimaniate pienamente informati e coinvolti in ogni fase. Il nostro obiettivo è darvi completa visibilità, sicurezza e tranquillità, ovunque vi troviate nel mondo.',
        step5: 'Completamento e Consegna',
        step5Desc: 'Una volta completati i lavori, eseguiamo le ispezioni finali per garantire il rispetto dei più alti standard qualitativi. L\'immobile viene quindi consegnato pronto per l\'uso, l\'affitto o la rivendita, insieme a tutta la documentazione e alle certificazioni pertinenti.'
      },

      servicesPage: {
        title: 'I Nostri Servizi',
        subtitle: 'Presso Salento Property Projects, forniamo consulenza indipendente e coordinamento professionale in ogni fase del vostro percorso—dalla prima visita all\'immobile fino al completamento con successo del vostro investimento.',
        pm: 'Project Management Immobiliare',
        pmDesc: 'Gestione end-to-end del vostro progetto immobiliare nel Salento.',
        ro: 'Supervisione Ristrutturazioni',
        roDesc: 'Ispezioni frequenti in cantiere e coordinamento di tutte le maestranze.',
        bp: 'Pianificazione e Controllo Budget',
        bpDesc: 'Stima accurata dei costi e gestione finanziaria continua.',
        ib: 'Supporto per Acquirenti Internazionali',
        ibDesc: 'Due diligence e valutazione tecnica prima dell\'acquisto.',
        cc: 'Coordinamento Appaltatori',
        ccDesc: 'Ricerca e gestione di costruttori e artigiani locali.',
        pi: 'Ispezioni Immobiliari',
        piDesc: 'Controlli regolari della proprietà durante i periodi di assenza.'
      },

      footer: {
        description: 'Supportiamo clienti internazionali in ogni fase della ristrutturazione e della gestione immobiliare nel Salento.',
        socialMedia: 'Social Media'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
