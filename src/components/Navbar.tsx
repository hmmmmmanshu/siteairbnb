
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const { t } = useLanguage();
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
  
  return <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", scrolled ? "bg-white/95 dark:bg-card/95 backdrop-blur-lg py-2 shadow-md" : "bg-black/20 backdrop-blur-sm py-3")}>
      <nav className="container flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
        {/* Logo/Brand */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/assets/logo.webp" alt="The Lilac Cottage" className="h-6 w-6 md:h-8 md:w-8" />
            <span className={cn("text-lg md:text-xl font-bold transition-colors", scrolled ? "text-gray-900 dark:text-white" : "text-white")}>The Lilac Cottage</span>
          </Link>
        </div>

        {/* Mobile Navigation - Horizontal */}
        <ul className="flex md:hidden space-x-4">
          {navLinks.map(link => <li key={link.name} className="relative">
              <Link to={link.path} className={cn("text-sm font-medium transition-colors hover:text-primary px-2 py-1 rounded", scrolled ? "text-gray-700 dark:text-gray-300 hover:text-primary" : "text-white")}>
                {link.name}
              </Link>
            </li>)}
        </ul>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map(link => <li key={link.name} className="relative">
              <Link to={link.path} className={cn("font-medium transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full", scrolled ? "text-gray-700 dark:text-gray-300 hover:text-primary" : "text-white")}>
                {link.name}
              </Link>
            </li>)}
        </ul>

        {/* Right Side - Social Links and CTA */}
        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Social Links */}
          <div className="flex items-center space-x-2 md:space-x-3">
            <a href="#" className={cn("hover:text-primary transition-colors", scrolled ? "text-gray-600 dark:text-gray-400" : "text-white")}>
              <Instagram className="h-4 w-4 md:h-5 md:w-5" />
            </a>
            <a href="#" className={cn("hover:text-primary transition-colors", scrolled ? "text-gray-600 dark:text-gray-400" : "text-white")}>
              <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
            </a>
            <a href="#" className={cn("hover:text-primary transition-colors", scrolled ? "text-gray-600 dark:text-gray-400" : "text-white")}>
              <Facebook className="h-4 w-4 md:h-5 md:w-5" />
            </a>
          </div>
          
          {/* CTA Button */}
          <Button asChild className="btn-purple text-xs md:text-sm px-3 md:px-4 py-1 md:py-2">
            <a href="https://www.airbnb.co.in/rooms/17482812?source_impression_id=p3_1757707916_P3aPqmWYx3LJGd08" target="_blank" rel="noopener noreferrer">Book Now</a>
          </Button>
        </div>
      </nav>
    </header>;
}
