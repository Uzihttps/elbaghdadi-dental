
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Testimonials = () => {
  const { t, language } = useLanguage();
  
  const testimonials = [
    {
      name: "A P",
      service: language === 'fr' ? "Traitement dentaire" : "Dental Treatment",
      quote: language === 'fr' 
        ? "J'ai eu la chance de trouver un excellent dentiste, le Dr El Baghdadi qui utilise des techniques modernes et efficaces. Je le recommande vivement."
        : "I was fortunate to find an excellent dentist, Dr El Baghdadi who uses modern and effective techniques. I highly recommend him.",
      rating: 5,
      image: "https://lh3.googleusercontent.com/a/ACg8ocJFjqPEnB4tS1EuZe6oDtPu5VI-UKjIcgfpuVEU3Hph=w36-h36-p-rp-mo-br100"
    },
    {
      name: "Amin Ranya",
      service: language === 'fr' ? "Soins dentaires" : "Dental Care",
      quote: language === 'fr'
        ? "Un docteur très professionnel avec des années d'expérience. Je recommande vivement!"
        : "A very professional doctor with years of experience. I highly recommend!",
      rating: 5,
      image: "https://lh3.googleusercontent.com/a/ACg8ocJNAh4C43bfRWbiFJFnaXUlFoZaYUUX9lXs5fQ9pKjL=w36-h36-p-rp-mo-br100"
    },
    {
      name: "Youssef Benkhalifa",
      service: language === 'fr' ? "Traitement esthétique" : "Aesthetic Treatment",
      quote: language === 'fr'
        ? "Professional, à l'écoute et très compétent"
        : "Professional, attentive and very competent",
      rating: 5,
      image: "https://lh3.googleusercontent.com/a/ACg8ocLqI1IZHRe2Zj17vTc0xKjUEaIaAVVxhH5fQ5P2gXgG=w36-h36-p-rp-mo-br100"
    }
  ];

  return (
    <section id="testimonials" className="section bg-gradient-to-b from-white to-slate-50">
      <div className="container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Patients Say</h2>
          <p className="text-slate-600">
            Read about the experiences of patients who have transformed their smiles and appearance with our services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-white p-6 rounded-xl shadow-md relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Quote className="w-10 h-10 text-dental-100 absolute top-6 right-6" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.service}</p>
                </div>
              </div>
              <p className="text-slate-700 mb-4">{testimonial.quote}</p>
              <div className="flex items-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
