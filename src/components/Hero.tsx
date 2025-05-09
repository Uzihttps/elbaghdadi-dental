
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Zap, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {
  const { t, language } = useLanguage();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };
  
  const backgroundVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 1.2 
      } 
    }
  };

  return (
    <section id="home" className="min-h-[100vh] relative overflow-hidden flex items-center py-20 animated-bg">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gold-500/5"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gold-500/5"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      </div>

      <div className="container relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 bg-gold-500/10 text-gold-400 rounded-full text-sm font-medium flex items-center">
                  <Sparkles className="w-4 h-4 mr-1" />
                  <span>{t('hero.badge')}</span>
                </span>
              </div>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              variants={itemVariants}
            >
              <span className="luxury-gradient gold-glow font-serif">{t('hero.title1')}</span> <br />
              <span className="text-white">{t('hero.title2')}</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-300 max-w-xl"
              variants={itemVariants}
            >
              {t('hero.description')}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-6 pt-4"
              variants={itemVariants}
            >
              <Button asChild size="lg" className="bg-gold-500 hover:bg-gold-600 text-black font-medium px-6 py-6 rounded-md">
                <a href="#booking" className="flex items-center gap-2">
                  {t('nav.book')} <ChevronRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-gold-500/50 text-gold-400 hover:bg-gold-500/10 rounded-md">
                <a href="#services" className="flex items-center gap-2">
                  {language === 'fr' ? 'Explorer les Services' : 'Explore Services'} <Zap className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-6 pt-4"
              variants={itemVariants}
            >
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full border-2 border-black bg-gradient-to-br from-gold-300 to-gold-600 flex items-center justify-center"
                  />
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-black bg-black text-gold-500 flex items-center justify-center text-xs font-bold">
                  +50
                </div>
              </div>
              <p className="text-gray-400">{t('hero.trusted')} <span className="text-gold-400 font-semibold">500+</span> {t('hero.patients')}</p>
            </motion.div>
          </div>

          <motion.div 
            className="relative rounded-2xl overflow-hidden h-[500px]"
            variants={backgroundVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-gold-500/20 z-10 rounded-2xl" />
            <motion.img 
              src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Modern dental clinic interior" 
              className="w-full h-full object-cover rounded-2xl"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
            />
            
            <motion.div 
              className="absolute bottom-6 left-6 right-6 bg-black/70 backdrop-blur-md p-4 rounded-xl border border-gold-500/20 z-20"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="font-medium text-gold-300">{t('hero.exceptional')}</h3>
                  <p className="text-gray-300 text-sm">{t('hero.tech')}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
