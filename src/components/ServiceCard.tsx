
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
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7,
        ease: "easeOut"
      }
    },
    hover: {
      y: -12,
      boxShadow: "0 20px 40px rgba(228, 178, 65, 0.12)",
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className={cn(
        "luxury-card p-8 rounded-xl backdrop-blur-sm transition-all duration-300",
        className
      )}
      variants={cardVariants}
      whileHover="hover"
    >
      <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600/50 text-black flex items-center justify-center mb-6 shadow-lg shadow-gold-500/10">
        <Icon className="h-8 w-8" strokeWidth={1.5} />
      </div>
      <h3 className="text-2xl font-semibold text-white mb-4 font-serif">{title}</h3>
      <p className="text-slate-300 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
