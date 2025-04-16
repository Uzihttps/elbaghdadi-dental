
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
    <motion.div 
      className={cn(
        "bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
    >
      <div className="h-12 w-12 rounded-lg bg-dental-100 text-dental-600 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
