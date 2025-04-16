
import { Stethoscope, Instagram, Facebook, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
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
              <Stethoscope className="h-8 w-8 text-gold-400" />
              <span className="font-bold text-xl text-white">El Baghdadi Dental</span>
            </div>
            <p className="mb-6">
              Comprehensive dental care and aesthetic treatments for a beautiful smile and enhanced natural appearance.
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
          <p>© {currentYear} El Baghdadi Dental. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
