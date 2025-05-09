
import { Instagram, Facebook, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t, language } = useLanguage();
  
  const getFooterLinks = () => {
    if (language === 'fr') {
      return [
        {
          title: "Liens Rapides",
          links: [
            { name: "Accueil", href: "#home" },
            { name: "Services", href: "#services" },
            { name: "À Propos", href: "#about" },
            { name: "Témoignages", href: "#testimonials" },
            { name: "Contact", href: "#contact" },
          ],
        },
        {
          title: "Services",
          links: [
            { name: "Dentisterie Générale", href: "#services" },
            { name: "Dentisterie Esthétique", href: "#services" },
            { name: "Traitement Botox", href: "#services" },
            { name: "Boosters Cutanés", href: "#services" },
            { name: "Contours du Visage", href: "#services" },
          ],
        },
        {
          title: "Légal",
          links: [
            { name: "Politique de Confidentialité", href: "#" },
            { name: "Conditions d'Utilisation", href: "#" },
            { name: "Politique de Cookies", href: "#" },
          ],
        },
      ];
    } else {
      return [
        {
          title: "Quick Links",
          links: [
            { name: "Home", href: "#home" },
            { name: "Services", href: "#services" },
            { name: "About", href: "#about" },
            { name: "Testimonials", href: "#testimonials" },
            { name: "Contact", href: "#contact" },
          ],
        },
        {
          title: "Services",
          links: [
            { name: "General Dentistry", href: "#services" },
            { name: "Cosmetic Dentistry", href: "#services" },
            { name: "Botox Treatment", href: "#services" },
            { name: "Skin Boosters", href: "#services" },
            { name: "Facial Contouring", href: "#services" },
          ],
        },
        {
          title: "Legal",
          links: [
            { name: "Privacy Policy", href: "#" },
            { name: "Terms of Service", href: "#" },
            { name: "Cookie Policy", href: "#" },
          ],
        },
      ];
    }
  };

  const footerLinks = getFooterLinks();
  const description = language === 'fr' 
    ? "Soins dentaires complets et traitements esthétiques pour un beau sourire et une apparence naturelle améliorée."
    : "Comprehensive dental care and aesthetic treatments for a beautiful smile and enhanced natural appearance.";

  return (
    <footer className="bg-charcoal-900 text-slate-300 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/9529c193-29a0-49f7-bac0-635dd55afc34.png" 
                alt="El Baghdadi Dental Logo" 
                className="h-12 w-12 object-contain"
              />
            </div>
            <p className="mb-6">
              {description}
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-300 hover:text-gold-400 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-gold-400 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-gold-400 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {footerLinks.map((column, index) => (
            <motion.div 
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4 className="font-medium text-gold-400 text-lg mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-slate-400 hover:text-gold-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-charcoal-800 mt-12 pt-8 text-center text-slate-400">
          <p>© {currentYear} El Baghdadi Dental. {language === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
