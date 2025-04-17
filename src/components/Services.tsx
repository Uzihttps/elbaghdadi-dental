
import { Stethoscope, Syringe, Scissors, Sparkles, Droplet, SmilePlus } from "lucide-react";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "General Dentistry",
      description: "Comprehensive dental care including cleanings, fillings, and preventive treatments for optimal oral health.",
    },
    {
      icon: Sparkles,
      title: "Cosmetic Dentistry",
      description: "Transform your smile with our premium whitening, veneers, and aesthetic restorations using luxury materials.",
    },
    {
      icon: Syringe,
      title: "Botox Treatment",
      description: "Rejuvenate your appearance with precise, artful administration of premium botox injections.",
    },
    {
      icon: Droplet,
      title: "Skin Boosters",
      description: "Experience the pinnacle of skin rejuvenation with hydrating treatments for a radiant, youthful complexion.",
    },
    {
      icon: SmilePlus,
      title: "Smile Makeover",
      description: "Achieve the perfect smile with our bespoke combination of elite cosmetic procedures tailored to you.",
    },
    {
      icon: Scissors,
      title: "Facial Contouring",
      description: "Sculpt your ideal facial profile with our expert non-surgical techniques and premium treatments.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section id="services" className="section animated-bg">
      <div className="container relative z-10">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-3 py-1 bg-gold-500/10 text-gold-400 rounded-full text-sm font-medium">
              Elite Services
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            <span className="luxury-gradient gold-glow">Our Premium Services</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Experience the epitome of dental care and advanced aesthetic treatments, 
            meticulously crafted to enhance your natural beauty.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <ServiceCard 
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={0.1 * index}
                className="h-full"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
