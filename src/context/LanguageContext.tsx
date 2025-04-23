
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'fr';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    'nav.book': 'Book Appointment',
    
    // Hero
    'hero.badge': 'Premium Aesthetic Care',
    'hero.title1': 'Beautiful Smiles',
    'hero.title2': '& Aesthetic Excellence',
    'hero.description': 'Dr. El Baghdadi combines dental expertise with aesthetic treatments to enhance your natural beauty and confidence.',
    'hero.trusted': 'Trusted by over',
    'hero.patients': 'happy patients',
    'hero.exceptional': 'Exceptional Care',
    'hero.tech': 'State-of-the-art technology and techniques',
    
    // Services
    'services.title': 'Our Premium Services',
    'services.subtitle': 'Experience the epitome of dental care and advanced aesthetic treatments, meticulously crafted to enhance your natural beauty.',
    'services.general': 'General Dentistry',
    'services.cosmetic': 'Cosmetic Dentistry',
    'services.botox': 'Botox Treatment',
    'services.skin': 'Skin Boosters',
    'services.smile': 'Smile Makeover',
    'services.facial': 'Facial Contouring',
    
    // About
    'about.title': 'Achievements & Certifications',
    'about.description1': 'Dr. El Baghdadi is a distinguished dentist and aesthetic medicine specialist, dedicated to providing exceptional care that enhances both oral health and natural beauty.',
    'about.description2': 'With over a decade of experience, Dr. El Baghdadi combines technical expertise with an artistic approach to create naturally beautiful results.',
    'about.education': 'After graduating with honors in dental medicine, Dr. El Baghdadi pursued advanced training in aesthetic procedures, including Botox administration and facial rejuvenation techniques.',
    'about.unique': 'This unique combination of skills allows for comprehensive treatment plans that address both dental concerns and aesthetic goals.',
    'about.achievements': 'Achievements & Certifications',
    'about.exp': 'Years of',
    'about.experience': 'Experience',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.about': 'À Propos',
    'nav.testimonials': 'Témoignages',
    'nav.contact': 'Contact',
    'nav.book': 'Prendre RDV',
    
    // Hero
    'hero.badge': 'Soins Esthétiques Premium',
    'hero.title1': 'Beaux Sourires',
    'hero.title2': '& Excellence Esthétique',
    'hero.description': 'Dr. El Baghdadi combine expertise dentaire et traitements esthétiques pour sublimer votre beauté naturelle et votre confiance.',
    'hero.trusted': 'Fait confiance par plus de',
    'hero.patients': 'patients satisfaits',
    'hero.exceptional': 'Soins Exceptionnels',
    'hero.tech': 'Technologie et techniques de pointe',
    
    // Services
    'services.title': 'Nos Services Premium',
    'services.subtitle': "Découvrez l'excellence des soins dentaires et des traitements esthétiques avancés, méticuleusement conçus pour sublimer votre beauté naturelle.",
    'services.general': 'Dentisterie Générale',
    'services.cosmetic': 'Dentisterie Esthétique',
    'services.botox': 'Traitement Botox',
    'services.skin': 'Boosters Cutanés',
    'services.smile': 'Transformation du Sourire',
    'services.facial': 'Contours du Visage',
    
    // About
    'about.title': 'Réalisations & Certifications',
    'about.description1': 'Dr. El Baghdadi est un dentiste et spécialiste en médecine esthétique distingué, dévoué à fournir des soins exceptionnels qui améliorent la santé bucco-dentaire et la beauté naturelle.',
    'about.description2': 'Avec plus de dix ans d\'expérience, Dr. El Baghdadi combine expertise technique et approche artistique pour créer des résultats naturellement beaux.',
    'about.education': 'Après avoir obtenu son diplôme avec mention en médecine dentaire, Dr. El Baghdadi a poursuivi une formation avancée en procédures esthétiques, y compris l\'administration de Botox et les techniques de rajeunissement facial.',
    'about.unique': 'Cette combinaison unique de compétences permet d\'établir des plans de traitement complets qui répondent à la fois aux préoccupations dentaires et aux objectifs esthétiques.',
    'about.achievements': 'Réalisations & Certifications',
    'about.exp': 'Années d\'',
    'about.experience': 'Expérience',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  // Try to get stored language from localStorage, default to 'en'
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    return (savedLanguage === 'en' || savedLanguage === 'fr') ? savedLanguage : 'en';
  });

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('preferredLanguage', language);
  }, [language]);

  const t = (key: string): string => {
    const langTranslations = translations[language];
    return langTranslations[key as keyof typeof langTranslations] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
