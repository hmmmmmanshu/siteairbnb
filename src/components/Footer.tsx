
import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card text-card-foreground pt-12 pb-6 border-t">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
          <div className="animate-fade-in [animation-delay:100ms]">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">LS</span>
              </div>
              <h4 className="text-xl font-bold">The Lilac Cottage</h4>
            </div>
            <p className="text-muted-foreground mb-4">
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/lilacstays/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          
          <div className="animate-fade-in [animation-delay:200ms]">
            <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              {[
                { name: "The Cottage", path: "/" },
                { name: "Amenities", path: "/amenities" },
                { name: "Location", path: "/location" },
                { name: "Things To Do", path: "/things-to-do" },
                { name: "Get In Touch", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="animate-fade-in [animation-delay:300ms]">
            <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4">{t.footer.contact}</h4>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 text-primary" />
                <span className="text-muted-foreground">
                  Cottage 6B<br />
                  Kamal Cottages, Mussoorie<br />
                  Uttarakhand 248179<br />
                  India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-primary" />
                <span className="text-muted-foreground">+91 7011023809</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-primary" />
                <span className="text-muted-foreground">lilacmussoorie@gmail.com</span>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-border pt-8 mt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} The Lilac Cottage. {t.footer.allRights}</p>
        </div>
      </div>
    </footer>
  );
}
