
import { Stethoscope, Syringe, Scissors, Sparkles, Droplet, SmilePlus } from "lucide-react";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "General Dentistry",
      description: "Comprehensive dental care including cleanings, fillings, and preventive treatments.",
    },
    {
      icon: Sparkles,
      title: "Cosmetic Dentistry",
      description: "Enhance your smile with teeth whitening, veneers, and aesthetic restorations.",
    },
    {
      icon: Syringe,
      title: "Botox Treatment",
      description: "Reduce wrinkles and fine lines with safe, effective botox injections.",
    },
    {
      icon: Droplet,
      title: "Skin Boosters",
      description: "Revitalize and hydrate your skin for a more youthful, radiant appearance.",
    },
    {
      icon: SmilePlus,
      title: "Smile Makeover",
      description: "Transform your smile with a custom combination of cosmetic procedures.",
    },
    {
      icon: Scissors,
      title: "Facial Contouring",
      description: "Enhance your facial features with non-surgical techniques and treatments.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="services" className="section bg-charcoal-900">
      <div className="container">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold gold-gradient mb-4">Our Services</h2>
          <p className="text-slate-300">
            Comprehensive dental care and advanced aesthetic treatments to enhance your natural beauty.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={0.1 * index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
