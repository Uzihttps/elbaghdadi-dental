
import { motion } from "framer-motion";
import { Check, Award, GraduationCap } from "lucide-react";

const About = () => {
  const achievements = [
    { icon: GraduationCap, text: "Specialized in Advanced Aesthetics" },
    { icon: Award, text: "10+ Years of Professional Experience" },
    { icon: Check, text: "Certified in Latest Dental Technologies" },
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
                src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Dr. El Baghdadi" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-dental-100 flex items-center justify-center">
                  <span className="text-dental-600 font-bold text-lg">10+</span>
                </div>
                <div>
                  <p className="text-sm text-slate-600">Years of</p>
                  <p className="font-semibold text-slate-900">Experience</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">About Dr. El Baghdadi</h2>
            <p className="text-slate-600">
              Dr. El Baghdadi is a distinguished dentist and aesthetic medicine specialist, dedicated to providing 
              exceptional care that enhances both oral health and natural beauty. With over a decade of experience,
              Dr. El Baghdadi combines technical expertise with an artistic approach to create naturally beautiful results.
            </p>
            <p className="text-slate-600">
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
                      <p className="text-slate-700">{achievement.text}</p>
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
