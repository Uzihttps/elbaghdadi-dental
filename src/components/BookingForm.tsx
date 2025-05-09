
import { useState } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Calendar as CalendarIcon, Clock, Users, CheckCircle, Smile, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/context/LanguageContext";

const WHATSAPP_NUMBER = "212700485873"; // WhatsApp number without the + symbol
const EMAIL_RECIPIENT = "reevivetheagency@gmail.com";

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

  // Generate time slots based on language
  const TIME_SLOTS = [
    { time: "9:00 AM", label: `${t('time.morning')} 9:00 AM` },
    { time: "10:00 AM", label: `${t('time.morning')} 10:00 AM` },
    { time: "11:00 AM", label: `${t('time.morning')} 11:00 AM` },
    { time: "1:00 PM", label: `${t('time.afternoon')} 1:00 PM` },
    { time: "2:00 PM", label: `${t('time.afternoon')} 2:00 PM` },
    { time: "3:00 PM", label: `${t('time.afternoon')} 3:00 PM` },
    { time: "4:00 PM", label: `${t('time.afternoon')} 4:00 PM` }
  ];

  // Services based on language
  const services = [
    t('service.luxury'),
    t('service.premium'),
    t('service.executive'),
    t('service.vip'),
    t('service.complete'),
    t('service.elite')
  ];

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
      
      const formattedDate = selectedDate ? formatDateWithLocale(selectedDate) : "";
      
      // Show a friendly toast message
      toast({
        title: t('booking.greatChoice'),
        description: t('booking.pickTime').replace('{date}', formattedDate),
      });
    }
  };

  const handleTimeSelect = (time: string) => {
    setTimeSlot(time);
    setStep(3);
    
    // Show a friendly toast message
    toast({
      title: t('booking.perfect'),
      description: t('booking.timeSelected').replace('{time}', time),
    });
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(4);
    
    // Show a friendly toast message
    toast({
      title: t('booking.almostDone'),
      description: t('booking.lastStep'),
    });
  };

  const generateWhatsAppMessage = () => {
    const formattedDate = date ? formatDateWithLocale(date) : "";
    return encodeURIComponent(
      `*New Appointment*\n` +
      `*Name:* ${name}\n` +
      `*Email:* ${email}\n` +
      `*Phone:* ${phone}\n` +
      `*Date:* ${formattedDate}\n` +
      `*Time:* ${timeSlot}\n` +
      `*Service:* ${service}`
    );
  };

  const sendEmailNotification = async () => {
    const formattedDate = date ? formatDateWithLocale(date) : "";
    
    try {
      const formData = new FormData();
      formData.append('to', EMAIL_RECIPIENT);
      formData.append('subject', `New Appointment Request - ${name}`);
      formData.append('message', `
        New Appointment Details:
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Date: ${formattedDate}
        Time: ${timeSlot}
        Service: ${service}
        
        Please contact the client to confirm their appointment.
      `);
      
      // Using a public email sending API (EmailJS)
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        console.error('Email notification failed');
      }
    } catch (error) {
      console.error('Error sending email notification:', error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Send email notification
    sendEmailNotification();
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      const formattedDate = date ? formatDateWithLocale(date) : "";
      
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
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  // Display a human-readable date format
  const formattedDate = date ? formatDateWithLocale(date) : "";

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
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors",
                step >= stepNumber 
                  ? "bg-gold-500 text-black" 
                  : "bg-gray-800 text-gray-400"
              )}
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
        <motion.div 
          className="py-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mx-auto w-20 h-20 bg-gold-500/20 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="w-10 h-10 text-gold-400" />
          </div>
          <h4 className="text-xl font-semibold text-white mb-2">{t('booking.thankYou')}</h4>
          <p className="text-gray-400 mb-4">{t('booking.confirmed')}</p>
          <div className="bg-gray-900 p-4 rounded-lg border border-gold-500/20 mb-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <CalendarIcon className="w-4 h-4 text-gold-400" />
              <span className="text-white">{formattedDate}</span>
            </div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-gold-400" />
              <span className="text-white">{timeSlot}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Users className="w-4 h-4 text-gold-400" />
              <span className="text-white">{service}</span>
            </div>
          </div>
          
          <Button 
            onClick={openWhatsApp} 
            className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white"
          >
            <MessageCircle className="w-5 h-5" />
            {t('booking.whatsapp')}
          </Button>
        </motion.div>
      ) : (
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-5"
            >
              <h4 className="font-medium text-white flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-gold-400" /> 
                {t('booking.chooseDay')}
              </h4>
              
              <Calendar
                mode="single"
                selected={date}
                onSelect={handleDateSelect}
                disabled={(date) => date < new Date() || date > new Date(new Date().setMonth(new Date().getMonth() + 2))}
                className="p-3 bg-gray-900 border border-gold-500/20 rounded-lg text-white"
                locale={language === 'fr' ? fr : undefined}
                classNames={{
                  day_selected: "bg-gold-500 text-black hover:bg-gold-600 hover:text-black focus:bg-gold-500 focus:text-black",
                  day_today: "bg-gray-800 text-gold-400 font-bold",
                  head_cell: "text-gold-500",
                  button_reset: "text-gold-400 hover:text-gold-500"
                }}
              />
              
              <div className="bg-gray-900/50 p-3 rounded-lg border border-gold-500/10">
                <p className="text-gray-400 text-sm">
                  {t('booking.dateHelp')}
                </p>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="space-y-5"
            >
              <div className="mb-4">
                <h4 className="font-medium text-white flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gold-400" /> 
                  {t('booking.chooseTime')}
                </h4>
                <p className="text-gray-400 text-sm mt-1">
                  {t('booking.selectedDate')} <span className="text-gold-400">{formattedDate}</span>
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                {TIME_SLOTS.map((slot) => (
                  <button
                    key={slot.time}
                    onClick={() => handleTimeSelect(slot.time)}
                    className={cn(
                      "p-3 rounded-lg border transition-all duration-300",
                      timeSlot === slot.time 
                        ? "border-gold-500 bg-gold-500/10 text-gold-400" 
                        : "border-gray-700 hover:border-gold-500/50 text-gray-300 hover:text-white"
                    )}
                  >
                    {slot.label}
                  </button>
                ))}
              </div>

              <Button
                onClick={() => setStep(1)}
                variant="outline"
                className="w-full border-gray-700 text-gray-400 hover:text-white hover:border-gold-500/50 bg-transparent"
              >
                &larr; {t('booking.changeDate')}
              </Button>
            </motion.div>
          )}
          
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="space-y-5"
            >
              <div className="mb-4">
                <h4 className="font-medium text-white flex items-center gap-2">
                  <Users className="w-5 h-5 text-gold-400" /> 
                  {t('booking.yourInfo')}
                </h4>
                <p className="text-gray-400 text-sm mt-1">
                  {t('booking.appointment')} <span className="text-gold-400">{formattedDate} at {timeSlot}</span>
                </p>
              </div>
              
              <form onSubmit={handleNextStep} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">{t('booking.name')}</label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t('booking.name')}
                    required
                    className="bg-gray-900 border-gray-700 text-white focus:border-gold-500/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">{t('booking.email')}</label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('booking.email')}
                    required
                    className="bg-gray-900 border-gray-700 text-white focus:border-gold-500/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">{t('booking.phone')}</label>
                  <Input
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t('booking.phone')}
                    required
                    className="bg-gray-900 border-gray-700 text-white focus:border-gold-500/50"
                  />
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button
                    type="button"
                    onClick={() => setStep(2)}
                    variant="outline"
                    className="flex-1 border-gray-700 text-gray-400 hover:text-white hover:border-gold-500/50 bg-transparent"
                  >
                    &larr; {t('booking.back')}
                  </Button>
                  
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-black"
                  >
                    {t('booking.continue')} &rarr;
                  </Button>
                </div>
              </form>
            </motion.div>
          )}
          
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="space-y-5"
            >
              <div className="mb-4">
                <h4 className="font-medium text-white flex items-center gap-2">
                  <Smile className="w-5 h-5 text-gold-400" /> 
                  {t('booking.selectTreatment')}
                </h4>
                <p className="text-gray-400 text-sm mt-1">
                  {t('booking.finalStep')}
                </p>
              </div>
              
              <div className="bg-gray-900 p-4 rounded-lg border border-gold-500/20 mb-5">
                <div className="flex items-center gap-2 mb-2">
                  <CalendarIcon className="w-4 h-4 text-gold-400" />
                  <span className="text-white">{formattedDate}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-gold-400" />
                  <span className="text-white">{timeSlot}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-gold-400" />
                  <span className="text-white">{name}</span>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">{t('booking.selectTreatment')}</label>
                  <Select value={service} onValueChange={setService} required>
                    <SelectTrigger id="service" className="w-full bg-gray-900 border-gray-700 text-white focus:border-gold-500/50">
                      <SelectValue placeholder={t('booking.chooseService')} />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-gold-500/20 text-white">
                      {services.map((item) => (
                        <SelectItem key={item} value={item} className="hover:bg-gray-800 focus:bg-gray-800">
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button
                    type="button"
                    onClick={() => setStep(3)}
                    variant="outline"
                    className="flex-1 border-gray-700 text-gray-400 hover:text-white hover:border-gold-500/50 bg-transparent"
                  >
                    &larr; {t('booking.back')}
                  </Button>
                  
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-black"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? t('booking.confirming') : t('booking.completeBooking')}
                  </Button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.div>
  );
};

export default BookingForm;
