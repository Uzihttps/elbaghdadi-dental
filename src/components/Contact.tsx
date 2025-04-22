import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import BookingForm from "./BookingForm";

const ContactInfo = ({ icon: Icon, title, content }: { icon: any; title: string; content: React.ReactNode }) => (
  <div className="flex gap-4 items-start group">
    <div className="rounded-full bg-gold-500/10 p-3 text-gold-400 mt-1 border border-gold-500/30 group-hover:border-gold-500/60 transition-all duration-300">
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <h4 className="font-medium text-white mb-1 group-hover:text-gold-400 transition-colors duration-300">{title}</h4>
      {content}
    </div>
  </div>
);

const Contact = () => {
  return (
    <section id="booking" className="section bg-black relative overflow-hidden">
      {/* Gold accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-2 bg-gradient-to-r from-gold-400/50 via-gold-500 to-gold-400/50 blur-md"></div>
      
      {/* Background animated gradient */}
      <div className="absolute w-full h-full top-0 left-0 bg-[radial-gradient(circle,_rgba(243,190,78,0.05)_0%,_transparent_70%)] animate-slow-spin opacity-70"></div>
      
      <div className="container relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="gold-gradient">Exclusive Appointments</span>
          </h2>
          <p className="text-gray-400">
            Schedule your private consultation with Dr. El Baghdadi and experience our premium services tailored to your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            className="space-y-10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                <span className="border-b-2 border-gold-500 pb-1">Contact Information</span>
              </h3>
              <p className="text-gray-400 mb-8">
                Have questions or need assistance? Our concierge team is ready to assist you
                with scheduling your appointment and answering any inquiries about our exclusive services.
              </p>
            </div>
            
            <div className="space-y-8">
              <ContactInfo 
                icon={MapPin} 
                title="Exclusive Location" 
                content={
                  <p className="text-gray-400">
                    Rue Hassan 2 résidence Mary Ida<br />
                    En face province
                  </p>
                } 
              />
              
              <ContactInfo 
                icon={Phone} 
                title="Direct Line" 
                content={
                  <p className="text-gray-400">
                    <a href="tel:+212661338152" className="hover:text-gold-400 transition-colors">
                      +212 (66) 133-8152
                    </a>
                  </p>
                } 
              />
              
              <ContactInfo 
                icon={Mail} 
                title="VIP Inquiries" 
                content={
                  <p className="text-gray-400">
                    <a href="mailto:vip@elbaghdadidental.com" className="hover:text-gold-400 transition-colors">
                      vip@elbaghdadidental.com
                    </a>
                  </p>
                } 
              />
              
              <ContactInfo 
                icon={Clock} 
                title="Availability" 
                content={
                  <div className="text-gray-400 space-y-1">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: By appointment only</p>
                  </div>
                } 
              />
            </div>
          </motion.div>
          
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <BookingForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
