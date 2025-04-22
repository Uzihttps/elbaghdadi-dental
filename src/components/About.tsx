import { motion } from "framer-motion";
import { Check, Award, GraduationCap } from "lucide-react";

const About = () => {
  const achievements = [
    { 
      icon: GraduationCap, 
      text: "Médecine dentaire en Russie",
      highlightStyle: "text-gold-400 font-semibold"
    },
    { 
      icon: Award, 
      text: "7+ Years of Professional Experience",
      highlightStyle: "text-gold-400 font-semibold"
    },
    { 
      icon: Check, 
      text: "Médecine esthétique (formation) en Russie / Italie / Egypt", 
      highlightStyle: "text-white bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent font-semibold" 
    },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img 
                src="/lovable-uploads/0694cb84-cb78-4a99-8c8a-fbc71dfd996f.png" 
                alt="Dr. El Baghdadi" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gold-50 flex items-center justify-center shadow-md">
                  <span className="text-gold-600 font-bold text-2xl gold-glow">7+</span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gold-500 font-semibold">Years of</p>
                  <p className="font-bold text-xl text-charcoal-900 tracking-tight">Experience</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white">Achievements & Certifications</h2>
            <p className="text-white">
              Dr. El Baghdadi is a distinguished dentist and aesthetic medicine specialist, dedicated to providing 
              exceptional care that enhances both oral health and natural beauty. With over a decade of experience,
              Dr. El Baghdadi combines technical expertise with an artistic approach to create naturally beautiful results.
            </p>
            <p className="text-white">
              After graduating with honors in dental medicine, Dr. El Baghdadi pursued advanced training in aesthetic 
              procedures, including Botox administration and facial rejuvenation techniques. This unique combination 
              of skills allows for comprehensive treatment plans that address both dental concerns and aesthetic goals.
            </p>
            
            <div className="pt-2">
              <h3 className="font-semibold text-slate-800 mb-3">Achievements & Certifications</h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-dental-50 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-dental-600" />
                      </div>
                      <p className={`text-slate-700 ${achievement.highlightStyle || ''}`}>
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
