
import { motion } from "framer-motion";
import { Star, Quote, ThumbsUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    <section id="testimonials" className="section relative py-28">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gold-pulse rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-pulse rounded-full blur-3xl opacity-20"></div>
      
      <div className="container relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-4"
          >
            <ThumbsUp className="w-12 h-12 text-gold-400" strokeWidth={1.5} />
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold luxury-gradient font-serif mb-4">
            {language === 'fr' ? "Ce que nos patients disent" : "What Our Patients Say"}
          </h2>
          <p className="text-slate-400">
            {language === 'fr' 
              ? "Découvrez les expériences de patients qui ont transformé leur sourire et leur apparence avec nos services."
              : "Read about the experiences of patients who have transformed their smiles and appearance with our services."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="luxury-card overflow-visible h-full">
                <CardContent className="p-6 relative h-full flex flex-col">
                  <div className="absolute -top-6 left-6">
                    <Avatar className="h-16 w-16 ring-4 ring-black border-2 border-gold-500">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback className="bg-gold-500 text-black font-bold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  
                  <Quote className="w-10 h-10 text-gold-400/30 absolute top-6 right-6" strokeWidth={1} />
                  
                  <div className="mt-10 mb-4">
                    <h4 className="font-semibold text-xl text-gold-400">{testimonial.name}</h4>
                    <Badge variant="outline" className="mt-1 bg-gold-500/10 text-gold-400 border-gold-500/30">
                      {testimonial.service}
                    </Badge>
                  </div>
                  
                  <blockquote className="text-slate-300 mb-6 flex-grow">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center gap-1 mt-auto">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
