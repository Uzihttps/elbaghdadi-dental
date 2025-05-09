
import { useState } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { useToast } from "@/hooks/use-toast";

interface DateSelectionProps {
  date: Date | undefined;
  onDateSelect: (date: Date | undefined) => void;
  onPrevStep?: () => void;
}

const DateSelection = ({ date, onDateSelect, onPrevStep }: DateSelectionProps) => {
  const { t, language } = useLanguage();
  const { toast } = useToast();

  const formatDateWithLocale = (date: Date) => {
    return format(
      date, 
      "EEEE, MMMM d, yyyy", 
      { locale: language === 'fr' ? fr : undefined }
    );
  };

  const handleDateSelect = (selectedDate: Date | undefined) => {
    onDateSelect(selectedDate);
    
    if (selectedDate) {
      const formattedDate = selectedDate ? formatDateWithLocale(selectedDate) : "";
      
      toast({
        title: t('booking.greatChoice'),
        description: t('booking.pickTime').replace('{date}', formattedDate),
      });
    }
  };

  return (
    <div className="space-y-5">
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
    </div>
  );
};

export default DateSelection;
