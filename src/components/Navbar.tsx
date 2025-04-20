import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      const sections = ["home", "services", "about", "testimonials", "contact"];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.home'), href: "#home" },
    { name: t('nav.services'), href: "#services" },
    { name: t('nav.about'), href: "#about" },
    { name: t('nav.testimonials'), href: "#testimonials" },
    { name: t('nav.contact'), href: "#contact" },
  ];

  return (
    <motion.nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        isScrolled ? "bg-black/80 backdrop-blur-lg shadow-lg shadow-gold-500/5 py-2" : "bg-transparent py-4"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container flex items-center justify-between">
        <motion.a 
          href="#" 
          className="flex items-center justify-start"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img 
            src="/lovable-uploads/9529c193-29a0-49f7-bac0-635dd55afc34.png" 
            alt="Dental Logo" 
            className="h-20 w-20 brightness-150 contrast-125 hover:brightness-175 transition-all duration-300"
          />
        </motion.a>

        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  className={cn(
                    "relative py-2 px-1 font-medium transition-colors",
                    activeSection === item.href.substring(1) 
                      ? "text-gold-400" 
                      : "text-gray-300 hover:text-gold-400"
                  )}
                >
                  {item.name}
                  {activeSection === item.href.substring(1) && (
                    <motion.div 
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gold-400"
                      layoutId="navunderline"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild className="bg-gold-500 hover:bg-gold-600 text-black rounded-md">
              <a href="#booking">{t('nav.book')}</a>
            </Button>
          </motion.div>
        </div>

        <motion.button 
          className="md:hidden p-2 text-gold-400 absolute right-4" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-black/90 backdrop-blur-lg border-t border-gold-500/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="container flex flex-col py-4">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.name} 
                  className="py-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a 
                    href={item.href} 
                    className={cn(
                      "text-gray-300 hover:text-gold-400 transition-colors block",
                      activeSection === item.href.substring(1) && "text-gold-400"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
              <motion.li 
                className="py-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <LanguageSwitcher />
                </div>
                <Button asChild className="w-full bg-gold-500 hover:bg-gold-600 text-black">
                  <a href="#booking" onClick={() => setIsMenuOpen(false)}>{t('nav.book')}</a>
                </Button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
