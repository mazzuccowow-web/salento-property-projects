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
        buyersGuide: 'Buyers Guide',
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
        }
      },

      about: {
        title: 'Who We Are',

        mission: 'Our Mission',

        missionDesc1:
          'Salento Property Projects was founded on a simple realization: international property owners in Salento needed operational support capable of more effectively structuring and coordinating professionals, contractors, and all stages of the project.',

        missionDesc2:
          'With 25 years of experience in the UK operations and finance sectors, we are native Italian speakers who offer the perfect blend of British organizational standards and local expertise. We are well-connected with trained local professionals to ensure every project achieves international-level results.',

        // 👉 TEAM SECTION
        teamTitle: 'The Team',

        whoWeAreDesc:
          'Founded by Andrea Mazzucco and Mirella Lefter, Salento Property Projects was created to help international buyers navigate renovation projects in Salento through a more structured, transparent and operational approach.',

        andreaName: 'Andrea Mazzucco',
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

      contact: {
        title: 'Get in Touch',
        subtitle: 'Let’s discuss your project'
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
        subtitle: 'Comprehensive solutions for prestige renovations and property management in Salento.',
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
        }
      },

      about: {
        title: 'Chi Siamo',

        mission: 'La Nostra Missione',

        missionDesc1:
          'Salento Property Projects è nata da una semplice consapevolezza: i proprietari internazionali di immobili nel Salento avevano bisogno di un supporto operativo capace di coordinare in modo più strutturato professionisti, imprese e tutte le fasi del progetto.',

        missionDesc2:
          'Siamo madrelingua italiani con 25 anni di esperienza nei settori delle operazioni e della finanza nel Regno Unito. Questo ci permette di offrire il mix perfetto tra standard organizzativi britannici e competenza locale. Siamo profondamente connessi con professionisti del territorio per garantire che ogni progetto raggiunga risultati di livello internazionale.',

        // 👉 TEAM SECTION
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

      contact: {
        title: 'Contattaci',
        subtitle: 'Parliamo del tuo progetto'
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
        step4Desc: 'I nostri professionisti qualificati gestiscono e coordinano ogni aspetto del processo di ristrutturazione o costruzione per vostro conto. Siamo specializzati nel lavorare con proprietari e investitori stranieri, offrendo un\'esperienza fluida di project management da remoto. Tramite aggiornamenti regolari via email, videochiamate programmate, sopralluoghi in diretta dal cantiere e rapporti dettagliati sullo stato di avanzamento, ci assicuriamo che rimaniate pienamente informati e coinvolti in ogni fase. Il nostro obiettivo è darvi completa visibilità, sicurezza e tranquillità, ovunque vi troviate nel mondo.',
        step5: 'Completamento e Consegna',
        step5Desc: 'Una volta completati i lavori, eseguiamo le ispezioni finali per garantire il rispetto dei più alti standard qualitativi. L\'immobile viene quindi consegnato pronto per l\'uso, l\'affitto o la rivendita, insieme a tutta la documentazione e alle certificazioni pertinenti.'
      },

      servicesPage: {
        title: 'I Nostri Servizi',
        subtitle: 'Soluzioni complete per ristrutturazioni di prestigio e gestione immobiliare nel Salento.',
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
