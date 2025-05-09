
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

interface TimeSelectionProps {
  date: Date | undefined;
  timeSlot: string | undefined;
  onTimeSelect: (time: string) => void;
  onPrevStep: () => void;
}

const TimeSelection = ({ date, timeSlot, onTimeSelect, onPrevStep }: TimeSelectionProps) => {
  const { t, language } = useLanguage();
  const { toast } = useToast();

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

  const formatDateWithLocale = (date: Date) => {
    return format(
      date, 
      "EEEE, MMMM d, yyyy", 
      { locale: language === 'fr' ? fr : undefined }
    );
  };

  const handleTimeSelect = (time: string) => {
    onTimeSelect(time);
    
    // Show a friendly toast message
    toast({
      title: t('booking.perfect'),
      description: t('booking.timeSelected').replace('{time}', time),
    });
  };

  // Display a human-readable date format
  const formattedDate = date ? formatDateWithLocale(date) : "";

  return (
    <div className="space-y-5">
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
        onClick={onPrevStep}
        variant="outline"
        className="w-full border-gray-700 text-gray-400 hover:text-white hover:border-gold-500/50 bg-transparent"
      >
        &larr; {t('booking.changeDate')}
      </Button>
    </div>
  );
};

export default TimeSelection;
