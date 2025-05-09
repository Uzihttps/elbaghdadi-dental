
import { CheckCircle, CalendarIcon, Clock, Users, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { motion } from "framer-motion";

interface SuccessViewProps {
  date: Date | undefined;
  timeSlot: string | undefined;
  service: string;
  onWhatsAppClick: () => void;
}

const SuccessView = ({ date, timeSlot, service, onWhatsAppClick }: SuccessViewProps) => {
  const { t, language } = useLanguage();

  const formatDateWithLocale = (date: Date) => {
    return format(
      date, 
      "EEEE, MMMM d, yyyy", 
      { locale: language === 'fr' ? fr : undefined }
    );
  };

  // Display a human-readable date format
  const formattedDate = date ? formatDateWithLocale(date) : "";

  return (
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
        onClick={onWhatsAppClick} 
        className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white"
      >
        <MessageCircle className="w-5 h-5" />
        {t('booking.whatsapp')}
      </Button>
    </motion.div>
  );
};

export default SuccessView;
