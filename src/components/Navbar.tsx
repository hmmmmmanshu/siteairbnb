
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Instagram, Linkedin, Facebook } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Amenities", path: "/amenities" },
    { name: "Things To Do", path: "/things-to-do" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);
  
  return <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", scrolled ? "bg-white/95 dark:bg-card/95 backdrop-blur-lg py-3 shadow-md" : "bg-black/20 backdrop-blur-sm py-5")}>
      <nav className="container flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/assets/logo.webp" alt="The Lilac Cottage" className="h-8 w-8" />
            <span className={cn("text-xl font-bold transition-colors", scrolled ? "text-gray-900 dark:text-white" : "text-white")}>The Lilac Cottage</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map(link => <li key={link.name} className="relative">
              <Link to={link.path} className={cn("font-medium transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full", scrolled ? "text-gray-700 dark:text-gray-300 hover:text-primary" : "text-white")}>
                {link.name}
              </Link>
            </li>)}
        </ul>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <a href="#" className={cn("hover:text-primary transition-colors", scrolled ? "text-gray-600 dark:text-gray-400" : "text-white")}>
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className={cn("hover:text-primary transition-colors", scrolled ? "text-gray-600 dark:text-gray-400" : "text-white")}>
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className={cn("hover:text-primary transition-colors", scrolled ? "text-gray-600 dark:text-gray-400" : "text-white")}>
              <Facebook className="h-5 w-5" />
            </a>
          </div>
          <Button asChild className="btn-purple ml-4">
            <a href="https://www.airbnb.co.in/rooms/17482812?source_impression_id=p3_1757707916_P3aPqmWYx3LJGd08" target="_blank" rel="noopener noreferrer">Book Now</a>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className={cn("rounded-full transition-colors", scrolled ? "text-gray-700 dark:text-gray-300 hover:text-primary" : "text-white hover:text-primary")}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={cn("fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden transition-opacity duration-300", mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none")}>
        <div className={cn("fixed inset-y-0 right-0 w-4/5 max-w-sm bg-white dark:bg-card shadow-2xl transition-transform duration-300 ease-in-out overflow-y-auto", mobileMenuOpen ? "translate-x-0" : "translate-x-full")}>
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center space-x-3">
                <img src="/assets/logo.webp" alt="The Lilac Cottage" className="h-8 w-8" />
                <span className="text-lg font-bold">The Lilac Cottage</span>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)} className="rounded-full">
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 px-6 py-6">
              <ul className="space-y-2">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="flex items-center py-4 px-4 text-lg font-semibold text-gray-900 dark:text-white transition-colors hover:text-primary hover:bg-primary/10 rounded-lg border border-transparent hover:border-primary/20" 
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">Follow us</p>
                <div className="flex items-center space-x-4">
                  <a href="#" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                    <Instagram className="h-5 w-5 text-primary" />
                  </a>
                  <a href="#" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </a>
                  <a href="#" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                    <Facebook className="h-5 w-5 text-primary" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="p-6 border-t border-border">
              <Button asChild className="w-full btn-purple text-lg py-6">
                <a href="https://www.airbnb.co.in/rooms/17482812?source_impression_id=p3_1757707916_P3aPqmWYx3LJGd08" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                  Book Now on Airbnb
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>;
}
