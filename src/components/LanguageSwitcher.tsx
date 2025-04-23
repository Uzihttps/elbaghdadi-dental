
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang: 'en' | 'fr') => {
    setLanguage(lang);
  };

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-gold-400 mr-1" />
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => handleLanguageChange('en')}
        className={`text-sm ${language === 'en' ? 'bg-gold-500 hover:bg-gold-600' : 'hover:text-gold-500'}`}
      >
        EN
      </Button>
      <Button
        variant={language === 'fr' ? 'default' : 'outline'}
        size="sm"
        onClick={() => handleLanguageChange('fr')}
        className={`text-sm ${language === 'fr' ? 'bg-gold-500 hover:bg-gold-600' : 'hover:text-gold-500'}`}
      >
        FR
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
