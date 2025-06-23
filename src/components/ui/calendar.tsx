
import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { fr } from "date-fns/locale";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  const { language } = useLanguage();
  
  // Use French locale for day names when the language is set to French
  const locale = language === 'fr' ? fr : undefined;
  
  // Custom formatting for day names in French
  const formatters = language === 'fr' ? {
    formatWeekdayName: (weekday: Date) => {
      const day = weekday.getDay();
      const frenchDays = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
      return frenchDays[day];
    }
  } : undefined;

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-4 pointer-events-auto w-full", className)}
      locale={locale}
      formatters={formatters}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 w-full",
        month: "space-y-4 w-full",
        caption: "flex justify-center pt-1 relative items-center mb-4",
        caption_label: "text-lg font-semibold text-gold-400",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-8 w-8 bg-charcoal-800 border-gold-500/30 text-gold-400 hover:bg-gold-500/10 hover:text-gold-300 hover:border-gold-500/50 transition-all duration-300"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex w-full",
        head_cell: "text-gold-300 rounded-md w-full flex-1 font-medium text-sm text-center py-2",
        row: "flex w-full mt-1",
        cell: "flex-1 h-10 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gold-500/10 [&:has([aria-selected])]:bg-gold-500/20 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-10 w-full p-0 font-normal text-gray-300 hover:bg-gold-500/10 hover:text-gold-300 transition-all duration-200"
        ),
        day_range_end: "day-range-end",
        day_selected: "bg-gold-500 text-black hover:bg-gold-600 hover:text-black focus:bg-gold-500 focus:text-black font-semibold shadow-lg",
        day_today: "bg-charcoal-700 text-gold-400 border border-gold-500/30 font-medium",
        day_outside: "day-outside text-gray-500 opacity-50 hover:bg-gold-500/5 hover:text-gray-400",
        day_disabled: "text-gray-600 opacity-30 cursor-not-allowed hover:bg-transparent",
        day_range_middle: "aria-selected:bg-gold-500/20 aria-selected:text-gold-300",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ..._props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ..._props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
