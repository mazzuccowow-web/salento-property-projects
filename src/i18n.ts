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
        cta: 'Book a Consultation'
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
        ctaTitle: 'Ready to start your property journey with total confidence?',
        ctaSubtitle: 'Book a confidential consultation with Andrea and our team.',
        ctaButton: 'Book a Consultation',
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

      buyersGuidePage: {
        hero: {
          title: "Buyer's Guide",
          subtitle: 'Your step-by-step resource for buying property in Salento, Italy'
        },
        leadMagnet: {
          badge: 'Digital Download',
          title: 'Before You Buy in Salento',
          subtitle: 'The Essential Guide for International Property Buyers',
          description: 'Thinking of buying a property in Salento? Download our Buyer’s Guide and discover the essential steps, hidden costs, legal considerations and practical advice every international buyer should know before making a purchase. Written by local property professionals to help you buy with confidence.',
          firstName: 'First Name',
          lastName: 'Last Name',
          email: 'Email Address',
          gdprConsent: 'I agree to receive updates, guides and occasional property insights from Salento Property Projects. I can unsubscribe at any time.',
          buttonIdle: 'Download Your Guide',
          buttonSending: 'Preparing Download...',
          errorMessage: 'Something went wrong. Please try again.',
          successTitle: 'Thank you!',
          successText: 'Your download has started automatically. If it doesn’t, ',
          successLink: 'click here to download manually.'
        },
        sidebar: {
          guidanceTitle: 'Need Personal Guidance?',
          guidanceDesc: 'We offer independent advice and end-to-end support for international buyers.',
          guidanceBtn: 'Book a Consultation',
          questionsTitle: 'Have Questions?',
          questionsDesc: 'We are here to help you make the right decision.',
          questionsBtn: 'Contact Us'
        },
        article: {
          tag: 'Featured Article',
          readTime: '12 min read',
          title: 'The Real Cost of Buying Property in Salento',
          subtitle: 'Why independent advice before you buy can save far more than you expect',
          intro: [
            'Buying a property in Salento from abroad can be an exciting opportunity.',
            'It can also be one of the most complicated financial decisions you will make.',
            'The photographs may look perfect. The location may be exactly what you were looking for. The property may appear to offer exceptional value compared with prices in other parts of Europe.',
            'But there is one question that every overseas buyer should ask before committing to the purchase:',
            'What will this property really cost me?',
            'Not just the purchase price. Not just the renovation estimate. The real cost of the entire project.',
            'Because a property that looks like a bargain at €100,000 can become a very different proposition when the renovation eventually costs €200,000 or €300,000.',
            'And once you have completed the purchase, your ability to renegotiate the original price has largely disappeared.',
            'This is why we believe that the most valuable moment to involve an independent property professional is often before you buy.'
          ],
          caseStudy: {
            title: 'A real example from Salento',
            p1: 'To understand why this matters, consider a real situation involving an overseas buyer and a property in Castrignano del Capo.',
            p2: 'We are deliberately not identifying the buyer or the property. The purpose of this example is not to criticise an individual, an estate agency, an architect or a contractor.',
            p3: 'The purpose is to demonstrate what can happen when a buyer commits to a property before having an independent understanding of the complete project.',
            p4: 'In this case, the estate agency involved in the transaction recommended a contractor to the buyer.',
            p5: 'An initial renovation estimate was provided at approximately €120,000.',
            p6: 'For a buyer making a purchasing decision, that number is obviously important. A property purchase is rarely considered in isolation. The buyer needs to think about the purchase price plus the money required to turn the property into the home or investment they actually want.',
            p7: 'At approximately €120,000, the project appeared to have one financial profile. But as the project progressed, the expected renovation cost changed dramatically.',
            highlight: 'Eventually, the estimated renovation requirement reached approximately €300,000.',
            p8: 'That is not a small difference. It changes the entire economics of the purchase. A property requiring €120,000 of renovation is one proposition. A property requiring €300,000 is another. And this is where the importance of independent advice becomes clear.'
          },
          closedCircle: {
            title: 'The problem is not necessarily that anyone did anything wrong',
            p1: 'This distinction matters. An estate agent recommending a contractor is not, by itself, evidence of wrongdoing.',
            p2: 'Architects, contractors, surveyors and estate agents naturally develop professional networks. Local relationships can be extremely valuable, particularly in a market where knowing the right people can make a project much easier.',
            p3: 'The problem arises when an overseas buyer has no genuinely independent point of reference.',
            p4: 'Imagine the position of someone living in London, Manchester, Dublin, New York or elsewhere who wants to purchase a property in Salento. They may know the property market in their own country extremely well. They may be financially sophisticated. They may be excellent at negotiating. But they are entering a local ecosystem where they may know nobody.',
            p5: 'The estate agent knows the seller. The estate agent may recommend a contractor. The contractor may work regularly with architects and other local professionals. The architect may have an established network of contractors. Everyone knows how the local system works. The overseas buyer does not. That creates an information imbalance.',
            subTitle: 'The closed-circle problem',
            p6: 'We call this the closed-circle problem. It does not require dishonesty. It does not require a conspiracy. It does not even require anyone to act improperly. It can simply happen because local property transactions naturally operate through established relationships.',
            p7: 'The buyer needs someone capable of stepping outside that circle and asking uncomfortable questions: Is this really the best price? Is this really the right renovation strategy? Is this estimate realistic? Do we need to spend this money? What alternatives exist? What would another professional say?',
            quote: '“If we knew today what we know now, would we still pay the same price for the property?” That question should ideally be answered before the purchase.'
          },
          negotiation: {
            title: 'The best negotiation happens before you own the problem',
            p1: 'The Castrignano del Capo case demonstrates that the purchase price and renovation budget cannot be separated.',
            p2: 'Suppose a buyer purchases a property for €X believing that approximately €120,000 will complete the renovation. If that renovation later becomes approximately €300,000, the buyer has discovered that their original investment calculation was based on a very different project. And by that point, the buyer owns the property.',
            p3: 'Before completion, information can affect the purchase price. After completion, the same information simply becomes another cost.',
            p4: 'A strong negotiation is not simply: "Will the seller accept €20,000 less?" It should be based on evidence: "This is what we have identified. This is what the project is likely to require. These are the risks. This is the financial impact. Therefore, this is the price at which the project makes sense for us."'
          },
          comparison: {
            title: "Don't confuse a beautiful property with a good project",
            intro: 'A property can be beautiful and still be a poor purchase. A property can require substantial renovation and still be an excellent purchase. The difference is the relationship between: Purchase price + renovation cost + risk + intended outcome.',
            propA: {
              title: 'Property A',
              price: 'Purchase price: €100,000',
              reno: 'Renovation: €250,000',
              total: 'Total: €350,000'
            },
            propB: {
              title: 'Property B',
              price: 'Purchase price: €150,000',
              reno: 'Renovation: €120,000',
              total: 'Total: €270,000'
            },
            note: 'Property A appears cheaper on the listing, but Property B represents the far more rational investment.'
          },
          investigation: {
            title: 'What should be investigated before making an offer?',
            intro: 'A property should be assessed as a complete project, not simply as a collection of rooms.',
            items: [
              { label: 'Structure', desc: 'Walls, roofs, floors and structural elements differ significantly from modern buildings.' },
              { label: 'Roof', desc: 'The difference between local repairs and major structural intervention can be substantial.' },
              { label: 'Damp & Water Ingress', desc: 'A damp mark is a symptom. The real question is: why is moisture there?' },
              { label: 'Electrical Systems', desc: 'Older systems require far more than simply replacing a few wall sockets.' },
              { label: 'Plumbing & Drainage', desc: 'New bathrooms or kitchens have implications far beyond the visible room.' },
              { label: 'Windows & Doors', desc: 'Crucial for comfort and energy performance, needing integration into the wider strategy.' },
              { label: 'Floors & Ceilings', desc: 'Traditional vaulted ceilings create specific technical challenges.' },
              { label: 'External Areas', desc: 'Courtyards, terraces, boundary walls and drainage are key budget drivers.' }
            ]
          },
          strategy: {
            title: 'A survey is not the same thing as a renovation strategy',
            p1: 'A technical inspection can identify problems, but identifying a problem is not the same as understanding the project’s financial consequences.',
            p2: 'The buyer needs to move through six critical questions: What is wrong? What needs to be done? What is the appropriate solution? How much could that solution cost? In what order should the work happen? Is the property still financially attractive?'
          },
          framework: {
            title: 'What SPP believes the process should look like',
            intro: 'Our approach is based on putting the buyer’s decision first:',
            steps: [
              'Understand the buyer’s objective (Holiday home, permanent residence, rental, restoration).',
              'Assess the property beyond the photographs.',
              'Identify risks — separate cosmetic issues from structural costs.',
              'Estimate the work realistically.',
              'Test the project economics (Price + Works).',
              'Challenge the assumptions and quotations.',
              'Negotiate from solid evidence.',
              'Decide: Buy, renegotiate, change strategy or walk away.'
            ]
          },
          lateSection: {
            title: 'What if you have already bought?',
            quote: 'Meglio tardi che mai. (Better late than never.)',
            p1: 'The buyer in our Castrignano del Capo example approached SPP later in the journey. By that stage, the opportunity to negotiate the purchase price had passed.',
            p2: 'However, late involvement still allowed them to reassess scope, question unneeded work, compare contractor quotations, and prioritise critical expenditure.',
            p3: 'You cannot change the past, but you can still improve what happens next.'
          },
          fiveQuestions: {
            title: 'Five questions every overseas buyer should ask',
            q1: '1. Do I know the property’s real condition? (Not what it looks like, but what is actually known).',
            q2: '2. Do I have an independent view? (Advice from someone whose only role is protecting my interests).',
            q3: '3. Do I have a realistic understanding of the renovation? (A project-based breakdown, not a rough guess).',
            q4: '4. Does the purchase price still make sense once works and risks are included?',
            q5: '5. Would I make the same offer if I knew everything I know now?'
          },
          conclusion: {
            title: 'Our central principle',
            highlight: 'The best time to control the cost of a renovation is before you buy the property.',
            p1: 'Before the purchase, you can negotiate. Before the purchase, you can change your offer. Before the purchase, you can walk away. After the purchase, you own the building and its problems.',
            p2: 'Sometimes the greatest value an independent property professional can provide is not helping you renovate the property you bought. It is helping you decide what you should pay for it before you buy it.',
            ctaPrompt: 'Discuss your prospective Salento property with Andrea and our independent advisory team.'
          }
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
        cta: 'Prenota una Consulenza'
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
        ctaTitle: 'Pronto ad avviare il tuo progetto immobiliare con la massima serenità?',
        ctaSubtitle: 'Prenota una consulenza riservata con Andrea e il nostro team.',
        ctaButton: 'Prenota una Consulenza',
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

      buyersGuidePage: {
        hero: {
          title: 'Guida per Acquirenti',
          subtitle: 'La tua guida passo dopo passo per acquistare immobili nel Salento'
        },
        leadMagnet: {
          badge: 'Download Digitale',
          title: 'Prima di Acquistare nel Salento',
          subtitle: 'La Guida Essenziale per Acquirenti Internazionali',
          description: 'Stai pensando di acquistare un immobile nel Salento? Scarica la nostra Guida e scopri i passaggi chiave, i costi nascosti, gli aspetti legali e i consigli pratici che ogni acquirente dovrebbe conoscere prima di procedere. Scritta da professionisti per farti acquistare in totale serenità.',
          firstName: 'Nome',
          lastName: 'Cognome',
          email: 'Indirizzo Email',
          gdprConsent: 'Accetto di ricevere aggiornamenti, guide e approfondimenti periodici da Salento Property Projects. Posso disiscrivermi in qualsiasi momento.',
          buttonIdle: 'Scarica la Tua Guida',
          buttonSending: 'Preparazione Download...',
          errorMessage: 'Qualcosa è andato storto. Per favore riprova.',
          successTitle: 'Grazie!',
          successText: 'Il download è iniziato automaticamente. Se non dovesse partire, ',
          successLink: 'clicca qui per scaricarla manualmente.'
        },
        sidebar: {
          guidanceTitle: 'Hai Bisogno di una Guida Personale?',
          guidanceDesc: 'Offriamo consulenza indipendente e assistenza end-to-end per acquirenti internazionali.',
          guidanceBtn: 'Prenota una Consulenza',
          questionsTitle: 'Hai Domande?',
          questionsDesc: 'Siamo qui per aiutarti a prendere la decisione giusta.',
          questionsBtn: 'Contattaci'
        },
        article: {
          tag: 'Articolo di Approfondimento',
          readTime: '12 min di lettura',
          title: 'Il Costo Reale di Acquistare un Immobile nel Salento',
          subtitle: "Perché una consulenza indipendente prima dell'acquisto può farti risparmiare molto più del previsto",
          intro: [
            "Acquistare una proprietà nel Salento dall'estero può essere un'opportunità straordinaria.",
            "Può anche rivelarsi una delle decisioni finanziarie più complesse della tua vita.",
            "Le fotografie possono sembrare perfette. La posizione esattamente quella desiderata. L'immobile può apparire incredibilmente conveniente rispetto ad altre zone d'Europa.",
            "Ma c'è una domanda cruciale che ogni acquirente internazionale dovrebbe porsi prima di impegnarsi nell'acquisto:",
            "Quanto mi costerà davvero questo immobile?",
            "Non soltanto il prezzo di acquisto. Non soltanto una stima sommaria dei lavori. Il costo reale dell'intero progetto.",
            "Perché una proprietà che sembra un affare a 100.000 € può diventare un'operazione completamente diversa quando la ristrutturazione arriva a costare 200.000 € o 300.000 €.",
            "E una volta concluso l'acquisto, la possibilità di rinegoziare il prezzo di partenza è praticamente svanita.",
            "Ecco perché riteniamo che il momento di maggior valore per coinvolgere un professionista indipendente sia prima di comprare."
          ],
          caseStudy: {
            title: 'Un caso reale dal Salento',
            p1: 'Per comprendere perché questo aspetto sia fondamentale, consideriamo una situazione reale che ha coinvolto un acquirente estero e un immobile a Castrignano del Capo.',
            p2: "Non identifichiamo volutamente né l'acquirente né l'immobile. Lo scopo di questo esempio non è criticare un singolo, un'agenzia immobiliare, un architetto o un'impresa.",
            p3: "L'obiettivo è dimostrare cosa accade quando un acquirente si impegna su una proprietà prima di avere una comprensione indipendente del progetto complessivo.",
            p4: "In questo caso, l'agenzia immobiliare coinvolta nella compravendita ha raccomandato un'impresa all'acquirente.",
            p5: 'La stima iniziale dei lavori di ristrutturazione era di circa 120.000 €.',
            p6: "Per un acquirente in fase decisionale, quella cifra è determinante. L'acquisto di una casa non si valuta mai da solo: l'acquirente calcola il prezzo di acquisto sommato all'importo necessario per trasformare l'immobile nella residenza o investimento desiderato.",
            p7: 'A circa 120.000 €, il progetto presentava un determinato profilo economico. Ma con il procedere dei rilievi, la spesa stimata è cambiata radicalmente.',
            highlight: 'Alla fine, la stima necessaria per la ristrutturazione ha raggiunto circa 300.000 €.',
            p8: "Non si tratta di una piccola differenza. Cambia radicalmente la sostenibilità dell'acquisto. Un immobile che richiede 120.000 € di lavori è un'operazione; uno che ne richiede 300.000 € è tutt'altra cosa. Ed è qui che emerge l'importanza di una consulenza autonoma."
          },
          closedCircle: {
            title: 'Il problema non è necessariamente che qualcuno abbia agito in malafede',
            p1: "Questa distinzione è essenziale. Un'agenzia immobiliare che suggerisce un costruttore non è di per sé prova di scorrettezza.",
            p2: 'Architetti, imprese, geometri e agenti sviluppano naturalmente reti professionali. Le relazioni locali sono preziose, specialmente in mercati in cui conoscere i giusti referenti semplifica molti passaggi.',
            p3: 'Il problema sorge quando un acquirente internazionale non possiede alcun punto di riferimento realmente indipendente.',
            p4: 'Immagina la posizione di chi vive a Londra, Manchester, Dublino, New York o altrove e desidera acquistare nel Salento. Conosce il mercato del proprio Paese, ha competenze finanziarie e negoziali, ma entra in un ecosistema locale dove non conosce nessuno.',
            p5: "L'agente conosce il venditore e consiglia il costruttore. Il costruttore lavora con gli architetti locali. Tutti conoscono le dinamiche del territorio. L'acquirente estero no. Si crea così un'asimmetria informativa.",
            subTitle: 'Il problema del "circuito chiuso"',
            p6: 'Chiamiamo questa dinamica il problema del "circuito chiuso". Non presuppone disonestà o cattive intenzioni: deriva semplicemente dal fatto che le transazioni locali operano tramite relazioni consolidate.',
            p7: 'L\'acquirente ha bisogno di una figura esterna a quel circuito, capace di porre domande scomode: È davvero il miglior prezzo? È la giusta strategia di restauro? Questo preventivo è realistico? È necessario spendere questa cifra? Esistono alternative tecniche meno onerose?',
            quote: '“Se sapessimo oggi ciò che abbiamo scoperto dopo, pagheremmo lo stesso prezzo per questo immobile?” Questa domanda deve trovare risposta prima del rogito.'
          },
          negotiation: {
            title: "La migliore negoziazione si fa prima di ereditare il problema",
            p1: "Il caso di Castrignano del Capo dimostra che il prezzo d'acquisto e il budget di ristrutturazione non possono essere separati.",
            p2: "Se acquisti per una cifra X credendo che serviranno 120.000 € di lavori, e poi ne servono 300.000 €, non hai solo scoperto che i lavori costano di più: hai scoperto che il tuo investimento originario poggiava su premesse del tutto diverse.",
            p3: "Prima del rogito, le informazioni incidono sul prezzo d'acquisto. Dopo il rogito, le stesse informazioni diventano solo un costo a tuo carico.",
            p4: 'Una negoziazione efficace non è semplicemente chiedere "Ci togliete 20.000 €?". Si basa sui dati: "Ecco cosa abbiamo riscontrato. Questo è ciò che il progetto richiederà. Questi sono i rischi e l\'impatto finanziario. Pertanto, questo è il prezzo al quale l\'operazione ha senso per noi."'
          },
          comparison: {
            title: 'Non confondere una bella proprietà con un buon progetto',
            intro: 'Un immobile può essere splendido e rivelarsi un pessimo investimento. Un immobile può richiedere pesanti lavori ed essere un affare straordinario. La differenza sta nell\'equilibrio tra Prezzo + Costo Lavori + Rischio + Risultato finale.',
            propA: {
              title: 'Immobile A',
              price: 'Prezzo acquisto: 100.000 €',
              reno: 'Ristrutturazione: 250.000 €',
              total: 'Totale: 350.000 €'
            },
            propB: {
              title: 'Immobile B',
              price: 'Prezzo acquisto: 150.000 €',
              reno: 'Ristrutturazione: 120.000 €',
              total: 'Totale: 270.000 €'
            },
            note: "L'Immobile A sembra più economico nell'annuncio, ma l'Immobile B rappresenta l'investimento di gran lunga più razionale."
          },
          investigation: {
            title: "Cosa occorre verificare prima di formulare un'offerta?",
            intro: "Un immobile va valutato come progetto complessivo, non come una semplice sequenza di stanze.",
            items: [
              { label: 'Struttura', desc: 'Murature portanti, volte e solai storici differiscono radicalmente dall\'edilizia moderna.' },
              { label: 'Coperture e Lastrici', desc: 'La differenza tra una manutenzione locale e il rifacimento del solaio può essere ingente.' },
              { label: 'Umidità e Risalita', desc: 'La macchia è solo un sintomo: la vera domanda è l\'origine dell\'infiltrazione.' },
              { label: 'Impianti Elettrici', desc: 'Gli impianti obsoleti richiedono interventi ben più profondi del semplice cambio prese.' },
              { label: 'Impianto Idrico e Scarichi', desc: 'Spostare bagni o cucine impatta sulle pendenze e sugli allacci generali.' },
              { label: 'Infissi e Serramenti', desc: 'Essenziali per isolamento e sicurezza, da integrare nella strategia energetica.' },
              { label: 'Pavimenti e Volte', desc: 'Le pavimentazioni tradizionali e le volte a stella impongono vincoli precisi.' },
              { label: 'Spazi Esterni', desc: 'Corti, terrazze, muretti a secco e scoli incidono pesantemente sul budget.' }
            ]
          },
          strategy: {
            title: 'Una perizia tecnica non è una strategia di ristrutturazione',
            p1: 'Un sopralluogo tecnico individua le criticità, ma rilevarle non equivale a comprenderne le ripercussioni economiche complessive.',
            p2: "L'acquirente deve rispondere a 6 domande essenziali: Cosa non va? Cosa va fatto? Qual è la soluzione idonea? Quanto costa? In quale sequenza procedere? L'immobile rimane finanziariamente conveniente?"
          },
          framework: {
            title: 'Come SPP struttura il processo di consulenza',
            intro: "Il nostro metodo mette sempre al centro la decisione consapevole dell'acquirente:",
            steps: [
              "Comprensione degli obiettivi (Casa vacanze, residenza stabile, messa a reddito, restauro conservativo).",
              "Valutazione tecnica oltre le fotografie dell'annuncio.",
              "Identificazione dei rischi (distinguere difetti estetici da costi strutturali).",
              "Stima analitica e realistica delle opere necessarie.",
              "Verifica della sostenibilità economica (Prezzo + Lavori).",
              "Verifica critica dei preventivi e delle soluzioni tecniche proposte.",
              "Negoziazione basata su evidenze documentate.",
              "Decisione informata: Acquistare, rinegoziare, rimodulare il progetto o rinunciare."
            ]
          },
          lateSection: {
            title: 'Cosa fare se hai già acquistato?',
            quote: 'Meglio tardi che mai.',
            p1: "L'acquirente del caso di Castrignano del Capo ha contattato SPP in una fase avanzata. A quel punto la possibilità di incidere sul prezzo d'acquisto era sfumata.",
            p2: 'Tuttavia, il nostro intervento ha consentito di rimodulare il computo dei lavori, eliminare opere superflue, comparare preventivi di artigiani e stabilire le priorità di spesa.',
            p3: 'Non puoi cambiare il passato, ma puoi governare con successo ogni passo futuro.'
          },
          fiveQuestions: {
            title: 'Cinque domande che ogni acquirente estero dovrebbe porsi',
            q1: "1. Conosco le reali condizioni dell'immobile? (Non come appare, ma cosa è effettivamente certificato).",
            q2: "2. Ho un parere indipendente? (Ricevo consigli da chi tutela esclusivamente i miei interessi?).",
            q3: "3. Ho una stima realistica dei lavori? (Un computo strutturato, non una cifra ipotetica).",
            q4: "4. Il prezzo di acquisto ha ancora senso una volta sommati i lavori e i rischi?",
            q5: "5. Farei la stessa offerta sapendo esattamente tutto ciò che so oggi?"
          },
          conclusion: {
            title: 'Il nostro principio cardine',
            highlight: "Il momento migliore per controllare il costo di una ristrutturazione è prima di acquistare l'immobile.",
            p1: "Prima dell'acquisto puoi negoziare. Prima dell'acquisto puoi modificare la tua offerta. Prima dell'acquisto puoi rinunciare. Dopo l'acquisto, possiedi l'immobile e tutti i suoi problemi.",
            p2: "Spesso il valore più grande che un consulente indipendente può offrirti non è aiutarti a ristrutturare la casa che hai comprato: è aiutarti a decidere quanto pagarla prima di acquistarla.",
            ctaPrompt: 'Discuti il tuo potenziale acquisto nel Salento con Andrea e il nostro team di consulenza indipendente.'
          }
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
