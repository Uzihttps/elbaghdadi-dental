
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  className?: string;
}

const ServiceCard = ({ icon: Icon, title, description, delay = 0, className }: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "luxury-card p-8 rounded-xl backdrop-blur-sm relative group",
        className
      )}
    >
      {/* Animated border effect */}
      <div className="absolute inset-0 rounded-xl animated-gradient-border opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600/50 text-black flex items-center justify-center mb-6 shadow-lg shadow-gold-500/10 group-hover:animate-pulse">
        <Icon className="h-8 w-8" strokeWidth={1.5} />
      </div>
      
      <h3 className="text-2xl font-semibold text-white mb-4 font-serif group-hover:text-gold-400 transition-colors duration-300">{title}</h3>
      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{description}</p>
      
      <motion.div 
        className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 to-gold-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
        layoutId="underline"
      />
    </div>
  );
};

export default ServiceCard;
