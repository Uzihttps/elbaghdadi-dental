
import { motion } from "framer-motion";
import { Check, Award, GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { AspectRatio } from "./ui/aspect-ratio";

const About = () => {
  const { t, language } = useLanguage();
  
  const achievements = [
    { 
      icon: GraduationCap, 
      text: language === 'fr' ? "Médecine dentaire en Russie" : "Dental medicine in Russia",
      highlightStyle: "text-white"
    },
    { 
      icon: Award, 
      text: language === 'fr' ? "7+ années d'expérience professionnelle" : "7+ Years of Professional Experience",
      highlightStyle: "text-white"
    },
    { 
      icon: Check, 
      text: language === 'fr' ? "Médecine esthétique (formation) en Russie / Italie / Égypte" : "Aesthetic medicine (training) in Russia / Italy / Egypt", 
      highlightStyle: "text-white" 
    },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative mx-auto w-4/5 lg:w-full"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl overflow-hidden">
              <AspectRatio ratio={1/1} className="w-full">
                <img 
                  src="/lovable-uploads/64b5b7f7-57a3-4e04-ba97-bb31fba6545d.png" 
                  alt="Dr. El Baghdadi performing a dental procedure" 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gold-50 flex items-center justify-center shadow-md">
                  <span className="text-gold-600 font-bold text-2xl gold-glow">7+</span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gold-500 font-semibold">{t('about.exp')}</p>
                  <p className="font-bold text-xl text-charcoal-900 tracking-tight">{t('about.experience')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold gold-gradient">{t('about.title')}</h2>
            <p className="text-white">{t('about.description1')}</p>
            <p className="text-white">{t('about.description2')}</p>
            <p className="text-white">{t('about.education')}</p>
            <p className="text-white">{t('about.unique')}</p>
            
            <div className="pt-2">
              <h3 className="font-semibold text-white mb-3">{t('about.achievements')}</h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-dental-50 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-dental-600" />
                      </div>
                      <p className={`text-slate-700 ${achievement.highlightStyle}`}>
                        {achievement.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
