
import { Smile, CalendarIcon, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { useLanguage } from "@/context/LanguageContext";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

interface ServiceSelectionProps {
  date: Date | undefined;
  timeSlot: string | undefined;
  name: string;
  service: string;
  isSubmitting: boolean;
  onServiceChange: (service: string) => void;
  onPrevStep: () => void;
  onSubmit: (e: React.FormEvent) => void;
}

const ServiceSelection = ({
  date,
  timeSlot,
  name,
  service,
  isSubmitting,
  onServiceChange,
  onPrevStep,
  onSubmit
}: ServiceSelectionProps) => {
  const { t, language } = useLanguage();

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

  // Display a human-readable date format
  const formattedDate = date ? formatDateWithLocale(date) : "";

  return (
    <div className="space-y-5">
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
      
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">{t('booking.selectTreatment')}</label>
          <Select value={service} onValueChange={onServiceChange} required>
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
            onClick={onPrevStep}
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
    </div>
  );
};

export default ServiceSelection;
