
import React, { createContext, useContext, useState } from 'react';

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
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
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
