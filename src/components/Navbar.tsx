
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
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

      </nav>
    </header>;
}
