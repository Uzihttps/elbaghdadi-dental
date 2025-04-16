
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import BookingForm from "./BookingForm";

const ContactInfo = ({ icon: Icon, title, content }: { icon: any; title: string; content: React.ReactNode }) => (
  <div className="flex gap-4 items-start">
    <div className="rounded-full bg-dental-50 p-3 text-dental-600 mt-1">
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <h4 className="font-medium text-slate-900 mb-1">{title}</h4>
      {content}
    </div>
  </div>
);

const Contact = () => {
  return (
    <section id="booking" className="section bg-dental-50">
      <div className="container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Book An Appointment</h2>
          <p className="text-slate-600">
            Schedule your visit with Dr. El Baghdadi and take the first step towards enhancing your smile and appearance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-slate-900">Contact Information</h3>
            <p className="text-slate-600">
              Have questions or need assistance? Reach out to us using the information below,
              or book your appointment using our convenient online form.
            </p>
            
            <div className="space-y-6 mt-8">
              <ContactInfo 
                icon={MapPin} 
                title="Clinic Address" 
                content={
                  <p className="text-slate-600">
                    123 Dental Plaza, Suite 456<br />
                    City Center, 10001
                  </p>
                } 
              />
              
              <ContactInfo 
                icon={Phone} 
                title="Phone Number" 
                content={
                  <p className="text-slate-600">
                    <a href="tel:+1234567890" className="hover:text-dental-600 transition-colors">
                      +1 (234) 567-890
                    </a>
                  </p>
                } 
              />
              
              <ContactInfo 
                icon={Mail} 
                title="Email Address" 
                content={
                  <p className="text-slate-600">
                    <a href="mailto:contact@elbaghdadidental.com" className="hover:text-dental-600 transition-colors">
                      contact@elbaghdadidental.com
                    </a>
                  </p>
                } 
              />
              
              <ContactInfo 
                icon={Clock} 
                title="Working Hours" 
                content={
                  <div className="text-slate-600 space-y-1">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
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
