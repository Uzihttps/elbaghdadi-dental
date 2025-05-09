
import { useState } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Smile } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/context/LanguageContext";
import { sendEmailNotification, generateWhatsAppMessage } from "@/services/emailService";

// Step components
import DateSelection from "@/components/booking/DateSelection";
import TimeSelection from "@/components/booking/TimeSelection";
import PersonalDetails from "@/components/booking/PersonalDetails";
import ServiceSelection from "@/components/booking/ServiceSelection";
import SuccessView from "@/components/booking/SuccessView";

const WHATSAPP_NUMBER = "212700485873"; // WhatsApp number without the + symbol

const BookingForm = () => {
  const { toast } = useToast();
  const { t, language } = useLanguage();
  const [step, setStep] = useState(1);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string | undefined>(undefined);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const formatDateWithLocale = (date: Date) => {
    return format(
      date, 
      "EEEE, MMMM d, yyyy", 
      { locale: language === 'fr' ? fr : undefined }
    );
  };

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    if (selectedDate) {
      setStep(2);
    }
  };

  const handleTimeSelect = (time: string) => {
    setTimeSlot(time);
    setStep(3);
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(4);
    
    toast({
      title: t('booking.almostDone'),
      description: t('booking.lastStep'),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formattedDate = date ? formatDateWithLocale(date) : "";
    
    // Send email notification
    sendEmailNotification({
      name,
      email,
      phone,
      date: formattedDate,
      time: timeSlot || '',
      service
    });
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      toast({
        title: t('booking.appointmentConfirmed'),
        description: t('booking.seeYou')
          .replace('{date}', formattedDate)
          .replace('{time}', timeSlot || ''),
      });
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setName("");
        setEmail("");
        setPhone("");
        setService("");
        setDate(undefined);
        setTimeSlot(undefined);
        setStep(1);
      }, 5000);
    }, 1500);
  };

  const openWhatsApp = () => {
    const formattedDate = date ? formatDateWithLocale(date) : "";
    const message = generateWhatsAppMessage({
      name,
      email,
      phone,
      date: formattedDate,
      time: timeSlot,
      service,
    });
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div 
      className="bg-gradient-to-b from-gray-900 to-black rounded-2xl shadow-xl p-6 md:p-8 border border-gold-500/30 w-full max-w-md overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Header with friendly message */}
      <div className="border-b border-gold-500/20 pb-5 mb-6">
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-2xl font-bold gold-gradient">{t('booking.title')}</h3>
          <Smile className="h-5 w-5 text-gold-400" />
        </div>
        <p className="text-gray-400 mt-1">{t('booking.subtitle')}</p>
      </div>

      {/* Progress indicator */}
      <div className="flex items-center justify-between mb-6">
        {[1, 2, 3, 4].map((stepNumber) => (
          <div key={stepNumber} className="flex flex-col items-center">
            <div 
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                step >= stepNumber 
                  ? "bg-gold-500 text-black" 
                  : "bg-gray-800 text-gray-400"
              }`}
            >
              {stepNumber}
            </div>
            <span className="text-xs mt-1 text-gray-400 hidden md:block">
              {stepNumber === 1 && t('booking.step1')}
              {stepNumber === 2 && t('booking.step2')}
              {stepNumber === 3 && t('booking.step3')}
              {stepNumber === 4 && t('booking.step4')}
            </span>
          </div>
        ))}
      </div>
      
      {isSuccess ? (
        <SuccessView 
          date={date}
          timeSlot={timeSlot}
          service={service}
          onWhatsAppClick={openWhatsApp}
        />
      ) : (
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <DateSelection 
                date={date}
                onDateSelect={handleDateSelect}
              />
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <TimeSelection 
                date={date}
                timeSlot={timeSlot}
                onTimeSelect={handleTimeSelect}
                onPrevStep={() => setStep(1)}
              />
            </motion.div>
          )}
          
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <PersonalDetails 
                date={date}
                timeSlot={timeSlot}
                name={name}
                email={email}
                phone={phone}
                onNameChange={setName}
                onEmailChange={setEmail}
                onPhoneChange={setPhone}
                onPrevStep={() => setStep(2)}
                onNextStep={handleNextStep}
              />
            </motion.div>
          )}
          
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <ServiceSelection 
                date={date}
                timeSlot={timeSlot}
                name={name}
                service={service}
                isSubmitting={isSubmitting}
                onServiceChange={setService}
                onPrevStep={() => setStep(3)}
                onSubmit={handleSubmit}
              />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.div>
  );
};

export default BookingForm;
