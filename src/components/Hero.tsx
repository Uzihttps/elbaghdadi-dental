
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-b from-sky-50 to-white">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-6 md:space-y-8">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Beautiful Smiles & Aesthetic Excellence
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-slate-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Dr. El Baghdadi combines dental expertise with aesthetic treatments to enhance your natural beauty and confidence.
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button asChild size="lg" className="bg-dental-600 hover:bg-dental-700">
              <a href="#booking">Book Appointment</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-dental-600 text-dental-600 hover:bg-dental-50">
              <a href="#services">Explore Services</a>
            </Button>
          </motion.div>
          <motion.div 
            className="flex items-center gap-6 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex -space-x-4">
              <div className="w-10 h-10 rounded-full bg-dental-100 border border-white flex items-center justify-center text-dental-600 font-medium">+50</div>
              <div className="w-10 h-10 rounded-full bg-dental-200 border border-white"></div>
              <div className="w-10 h-10 rounded-full bg-dental-300 border border-white"></div>
            </div>
            <p className="text-sm text-slate-600">Trusted by over <span className="font-semibold">500+</span> happy patients</p>
          </motion.div>
        </div>
        <motion.div 
          className="relative lg:h-[500px] rounded-xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Modern dental clinic interior" 
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
