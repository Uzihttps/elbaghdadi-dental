
import { Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

interface PersonalDetailsProps {
  date: Date | undefined;
  timeSlot: string | undefined;
  name: string;
  email: string;
  phone: string;
  onNameChange: (name: string) => void;
  onEmailChange: (email: string) => void;
  onPhoneChange: (phone: string) => void;
  onPrevStep: () => void;
  onNextStep: (e: React.FormEvent) => void;
}

const PersonalDetails = ({
  date,
  timeSlot,
  name,
  email,
  phone,
  onNameChange,
  onEmailChange,
  onPhoneChange,
  onPrevStep,
  onNextStep
}: PersonalDetailsProps) => {
  const { t, language } = useLanguage();
  const { toast } = useToast();

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
          <Users className="w-5 h-5 text-gold-400" /> 
          {t('booking.yourInfo')}
        </h4>
        <p className="text-gray-400 text-sm mt-1">
          {t('booking.appointment')} <span className="text-gold-400">{formattedDate} at {timeSlot}</span>
        </p>
      </div>
      
      <form onSubmit={onNextStep} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">{t('booking.name')}</label>
          <Input
            id="name"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
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
            onChange={(e) => onEmailChange(e.target.value)}
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
            onChange={(e) => onPhoneChange(e.target.value)}
            placeholder={t('booking.phone')}
            required
            className="bg-gray-900 border-gray-700 text-white focus:border-gold-500/50"
          />
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
          >
            {t('booking.continue')} &rarr;
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetails;
