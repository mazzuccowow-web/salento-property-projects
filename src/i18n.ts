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
        contact: 'Contact'
      },

      hero: {
        title: 'Managing Property Projects in Salento, Italy',
        subtitle: 'UK-standard project management for international property owners.',
        description: 'We support international clients through every stage of renovation and property management in Salento.',
        description2: 'Avoiding Costly Renovation Mistakes and Delays for International Buyers in Salento.',
        cta: 'Book Consultation'
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
        step1Desc: 'We start with a deep dive into your goals, vision, and budget.',
        step2: 'Property Assessment',
        step2Desc: 'A professional technical evaluation of the property or potential sites.',
        step3: 'Planning & Budgeting',
        step3Desc: 'We assemble the team and produce a detailed timeline and budget.',
        step4: 'Execution',
        step4Desc: 'On-site supervision begins with weekly reports and progress updates.',
        step5: 'Completion',
        step5Desc: 'Final quality inspections and handover of all certifications.'
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
        contact: 'Contatti'
      },

      hero: {
        title: 'Gestione Progetti Immobiliari nel Salento',
        subtitle: 'Project management di standard UK per proprietari internazionali.',
        description: 'Supportiamo clienti internazionali in ogni fase della ristrutturazione e della gestione immobiliare nel Salento.',
        description2: 'Evitiamo Costosi Errori e Ritardi nelle Ristrutturazioni per gli Acquirenti Internazionali nel Salento.', 
        cta: 'Prenota Consulenza'
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
        step1Desc: 'Iniziamo con un approfondimento dei vostri obiettivi, visione e budget.',
        step2: 'Valutazione Immobile',
        step2Desc: 'Una valutazione tecnica professionale dell\'immobile o dei siti potenziali.',
        step3: 'Pianificazione e Budgeting',
        step3Desc: 'Assembliamo il team e produciamo un cronogramma e un budget dettagliato.',
        step4: 'Esecuzione',
        step4Desc: 'Inizia la supervisione in loco con rapporti settimanali e aggiornamenti.',
        step5: 'Completamento',
        step5Desc: 'Ispezioni finali di qualità e consegna di tutte le certificazioni.'
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
