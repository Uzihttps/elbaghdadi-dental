
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
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div 
      className={cn(
        "elegant-card p-6 rounded-xl backdrop-blur-sm transition-all duration-300",
        className
      )}
      variants={cardVariants}
      whileHover="hover"
    >
      <div className="h-14 w-14 rounded-lg bg-gold-500/10 text-gold-400 flex items-center justify-center mb-5 backdrop-blur-sm">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-slate-300">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
