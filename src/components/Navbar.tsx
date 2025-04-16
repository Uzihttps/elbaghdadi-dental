
import { useState, useEffect } from "react";
import { Menu, X, Tooth } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Tooth className="h-8 w-8 text-dental-600" />
          <span className="font-bold text-xl text-dental-900">El Baghdadi Dental</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  className="text-slate-700 hover:text-dental-600 transition-colors font-medium"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <Button asChild className="bg-dental-600 hover:bg-dental-700">
            <a href="#booking">Book Appointment</a>
          </Button>
        </div>

        {/* Mobile Navigation Toggle Button */}
        <button 
          className="md:hidden p-2 text-dental-900" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <ul className="container flex flex-col py-4">
            {navItems.map((item) => (
              <li key={item.name} className="py-2">
                <a 
                  href={item.href} 
                  className="text-slate-700 hover:text-dental-600 transition-colors block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li className="py-3">
              <Button asChild className="w-full bg-dental-600 hover:bg-dental-700">
                <a href="#booking" onClick={() => setIsMenuOpen(false)}>Book Appointment</a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
