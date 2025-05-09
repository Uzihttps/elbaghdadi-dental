
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
    
    // Booking Form
    'booking.title': 'Book Your Visit',
    'booking.subtitle': "We're looking forward to seeing you soon!",
    'booking.step1': 'Date',
    'booking.step2': 'Time',
    'booking.step3': 'Details',
    'booking.step4': 'Service',
    'booking.chooseDay': 'Choose Your Preferred Day',
    'booking.dateHelp': 'Simply click on your preferred date to continue. We\'re available for the next 2 months.',
    'booking.chooseTime': 'Choose a Time Slot',
    'booking.selectedDate': 'Selected date:',
    'booking.changeDate': 'Change Date',
    'booking.yourInfo': 'Your Information',
    'booking.appointment': 'Appointment:',
    'booking.name': 'Your Name',
    'booking.email': 'Email Address',
    'booking.phone': 'Phone Number',
    'booking.back': 'Back',
    'booking.continue': 'Continue',
    'booking.selectTreatment': 'Select Your Treatment',
    'booking.finalStep': 'Final step to complete your booking',
    'booking.chooseService': 'Choose your preferred service',
    'booking.completeBooking': 'Complete Booking',
    'booking.confirming': 'Confirming...',
    'booking.thankYou': 'Thank You!',
    'booking.confirmed': 'Your appointment has been confirmed. We\'ll see you soon!',
    'booking.whatsapp': 'Send Details to WhatsApp',
    'booking.greatChoice': 'Great choice!',
    'booking.pickTime': 'You\'ve selected {date}. Now pick a time that works best for you.',
    'booking.perfect': 'Perfect!',
    'booking.timeSelected': 'You\'ve selected {time}. Now let\'s get your contact information.',
    'booking.almostDone': 'Almost done!',
    'booking.lastStep': 'Just one last step - let\'s pick the service you\'re interested in.',
    'booking.appointmentConfirmed': 'Wonderful! Your appointment is confirmed',
    'booking.seeYou': 'We\'re excited to see you on {date} at {time}.',
    
    // Services
    'service.luxury': 'Luxury Dental Consultation',
    'service.premium': 'Premium Cosmetic Dentistry',
    'service.executive': 'Executive Botox Treatment',
    'service.vip': 'VIP Skin Boosters',
    'service.complete': 'Complete Smile Makeover',
    'service.elite': 'Elite Facial Contouring',
    
    // Morning/Afternoon labels
    'time.morning': 'Morning -',
    'time.afternoon': 'Afternoon -'
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
    
    // Booking Form
    'booking.title': 'Réservez Votre Visite',
    'booking.subtitle': "Nous avons hâte de vous voir bientôt !",
    'booking.step1': 'Date',
    'booking.step2': 'Heure',
    'booking.step3': 'Détails',
    'booking.step4': 'Service',
    'booking.chooseDay': 'Choisissez Votre Jour Préféré',
    'booking.dateHelp': 'Cliquez simplement sur la date de votre choix pour continuer. Nous sommes disponibles pour les 2 prochains mois.',
    'booking.chooseTime': 'Choisissez un Créneau Horaire',
    'booking.selectedDate': 'Date sélectionnée:',
    'booking.changeDate': 'Changer la Date',
    'booking.yourInfo': 'Vos Informations',
    'booking.appointment': 'Rendez-vous:',
    'booking.name': 'Votre Nom',
    'booking.email': 'Adresse Email',
    'booking.phone': 'Numéro de Téléphone',
    'booking.back': 'Retour',
    'booking.continue': 'Continuer',
    'booking.selectTreatment': 'Sélectionnez Votre Traitement',
    'booking.finalStep': 'Dernière étape pour compléter votre réservation',
    'booking.chooseService': 'Choisissez votre service préféré',
    'booking.completeBooking': 'Finaliser la Réservation',
    'booking.confirming': 'Confirmation en cours...',
    'booking.thankYou': 'Merci !',
    'booking.confirmed': 'Votre rendez-vous a été confirmé. Nous vous verrons bientôt !',
    'booking.whatsapp': 'Envoyer les Détails sur WhatsApp',
    'booking.greatChoice': 'Excellent choix !',
    'booking.pickTime': 'Vous avez sélectionné {date}. Maintenant choisissez un horaire qui vous convient.',
    'booking.perfect': 'Parfait !',
    'booking.timeSelected': 'Vous avez sélectionné {time}. Maintenant, entrons vos coordonnées.',
    'booking.almostDone': 'Presque terminé !',
    'booking.lastStep': 'Une dernière étape - choisissons le service qui vous intéresse.',
    'booking.appointmentConfirmed': 'Parfait ! Votre rendez-vous est confirmé',
    'booking.seeYou': 'Nous sommes impatients de vous voir le {date} à {time}.',
    
    // Services
    'service.luxury': 'Consultation Dentaire de Luxe',
    'service.premium': 'Dentisterie Esthétique Premium',
    'service.executive': 'Traitement Botox Exécutif',
    'service.vip': 'Boosters Cutanés VIP',
    'service.complete': 'Transformation Complète du Sourire',
    'service.elite': 'Contours du Visage Élite',
    
    // Morning/Afternoon labels
    'time.morning': 'Matin -',
    'time.afternoon': 'Après-midi -'
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
