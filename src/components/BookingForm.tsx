
import { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock, Users, CheckCircle } from "lucide-react";
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

// Available time slots for the selected date
const TIME_SLOTS = [
  "9:00 AM", "10:00 AM", "11:00 AM", 
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
];

const BookingForm = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string | undefined>(undefined);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      toast({
        title: "Exclusive Appointment Reserved",
        description: `We'll be expecting you on ${date ? format(date, "EEEE, MMMM d") : ""} at ${timeSlot}.`,
      });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setName("");
        setEmail("");
        setPhone("");
        setService("");
        setDate(undefined);
        setTimeSlot(undefined);
        setStep(1);
      }, 3000);
    }, 1500);
  };

  const services = [
    "Luxury Dental Consultation",
    "Premium Cosmetic Dentistry",
    "Executive Botox Treatment",
    "VIP Skin Boosters",
    "Complete Smile Makeover",
    "Elite Facial Contouring"
  ];

  return (
    <motion.div 
      className="bg-gradient-to-b from-gray-900 to-black rounded-2xl shadow-xl p-6 md:p-8 border border-gold-500/30 w-full max-w-md overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="border-b border-gold-500/20 pb-5 mb-6">
        <h3 className="text-2xl font-bold gold-gradient">Reserve Your Exclusive Appointment</h3>
        <p className="text-gray-400 mt-1">Experience exceptional care</p>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-800 h-1 mb-8 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-gold-400 to-gold-600"
          initial={{ width: "25%" }}
          animate={{ width: `${step * 25}%` }}
          transition={{ duration: 0.5 }}
        />
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
          <h4 className="text-xl font-semibold text-white mb-2">Appointment Confirmed</h4>
          <p className="text-gray-400 mb-4">Your exclusive session has been reserved.</p>
          <div className="bg-gray-900 p-4 rounded-lg border border-gold-500/20">
            <div className="flex items-center justify-center gap-2 mb-2">
              <CalendarIcon className="w-4 h-4 text-gold-400" />
              <span className="text-white">{date ? format(date, "EEEE, MMMM d") : ""}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-gold-400" />
              <span className="text-white">{timeSlot}</span>
            </div>
          </div>
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
                Select Date
              </h4>
              
              <Calendar
                mode="single"
                selected={date}
                onSelect={handleDateSelect}
                disabled={(date) => date < new Date() || date > new Date(new Date().setMonth(new Date().getMonth() + 2))}
                className="p-3 bg-gray-900 border border-gold-500/20 rounded-lg text-white"
                classNames={{
                  day_selected: "bg-gold-500 text-black hover:bg-gold-600 hover:text-black focus:bg-gold-500 focus:text-black",
                  day_today: "bg-gray-800 text-white",
                  head_cell: "text-gold-500"
                }}
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
              className="space-y-5"
            >
              <h4 className="font-medium text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-gold-400" /> 
                Select Time
              </h4>
              
              <div className="grid grid-cols-2 gap-2">
                {TIME_SLOTS.map((time) => (
                  <button
                    key={time}
                    onClick={() => handleTimeSelect(time)}
                    className={cn(
                      "p-3 rounded-lg border transition-all duration-300",
                      timeSlot === time 
                        ? "border-gold-500 bg-gold-500/10 text-gold-400" 
                        : "border-gray-700 hover:border-gold-500/50 text-gray-300 hover:text-white"
                    )}
                  >
                    {time}
                  </button>
                ))}
              </div>

              <Button
                onClick={() => setStep(1)}
                variant="outline"
                className="w-full border-gray-700 text-gray-400 hover:text-white hover:border-gold-500/50 bg-transparent"
              >
                Back to Calendar
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
              <h4 className="font-medium text-white flex items-center gap-2">
                <Users className="w-5 h-5 text-gold-400" /> 
                Your Information
              </h4>
              
              <form onSubmit={handleNextStep} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    required
                    className="bg-gray-900 border-gray-700 text-white focus:border-gold-500/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="bg-gray-900 border-gray-700 text-white focus:border-gold-500/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                  <Input
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone number"
                    required
                    className="bg-gray-900 border-gray-700 text-white focus:border-gold-500/50"
                  />
                </div>
                
                <div className="flex gap-2">
                  <Button
                    type="button"
                    onClick={() => setStep(2)}
                    variant="outline"
                    className="flex-1 border-gray-700 text-gray-400 hover:text-white hover:border-gold-500/50 bg-transparent"
                  >
                    Back
                  </Button>
                  
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-black"
                  >
                    Continue
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
              <h4 className="font-medium text-white">Select Service</h4>
              
              <div className="bg-gray-900 p-4 rounded-lg border border-gold-500/20 mb-5">
                <div className="flex items-center gap-2 mb-2">
                  <CalendarIcon className="w-4 h-4 text-gold-400" />
                  <span className="text-white">{date ? format(date, "EEEE, MMMM d") : ""}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gold-400" />
                  <span className="text-white">{timeSlot}</span>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">Select Treatment</label>
                  <Select value={service} onValueChange={setService} required>
                    <SelectTrigger id="service" className="w-full bg-gray-900 border-gray-700 text-white focus:border-gold-500/50">
                      <SelectValue placeholder="Select a service" />
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
                    Back
                  </Button>
                  
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-black"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Reserving..." : "Confirm Appointment"}
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
