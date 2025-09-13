import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import BookingForm from "@/components/BookingForm";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wifi, Utensils, Waves, LifeBuoy, MapPin, Coffee } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";


export default function Index() {
  const { t } = useLanguage();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  // Feature items
  const features = [
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: t.home.amenities.features.beachfront.title,
      description: t.home.amenities.features.beachfront.description
    },
    {
      icon: <Waves className="h-8 w-8 text-primary" />,
      title: t.home.amenities.features.pools.title,
      description: t.home.amenities.features.pools.description
    },
    {
      icon: <Coffee className="h-8 w-8 text-primary" />,
      title: t.home.amenities.features.restaurant.title,
      description: t.home.amenities.features.restaurant.description
    },
    {
      icon: <Wifi className="h-8 w-8 text-primary" />,
      title: t.home.amenities.features.wifi.title,
      description: t.home.amenities.features.wifi.description
    },
    {
      icon: <Utensils className="h-8 w-8 text-primary" />,
      title: t.home.amenities.features.bar.title,
      description: t.home.amenities.features.bar.description
    },
    {
      icon: <LifeBuoy className="h-8 w-8 text-primary" />,
      title: t.home.amenities.features.location.title,
      description: t.home.amenities.features.location.description
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Booking Platforms Section */}
        <section className="py-12 bg-secondary/50">
          <div className="container">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {/* Airbnb */}
              <div className="flex items-center space-x-2 opacity-80 hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="text-xl font-semibold text-red-500">airbnb</span>
              </div>
              
              {/* TripAdvisor */}
              <div className="flex items-center space-x-2 opacity-80 hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">oo</span>
                </div>
                <span className="text-xl font-semibold text-gray-800">Tripadvisor</span>
              </div>
              
              {/* Booking.com */}
              <div className="opacity-80 hover:opacity-100 transition-opacity">
                <span className="text-xl font-semibold">
                  <span className="text-gray-800">Booking</span>
                  <span className="text-blue-600">.com</span>
                </span>
              </div>
              
              {/* MakeMyTrip */}
              <div className="flex items-center space-x-2 opacity-80 hover:opacity-100 transition-opacity">
                <span className="text-xl font-semibold text-gray-800">make</span>
                <div className="bg-red-500 px-2 py-1 rounded">
                  <span className="text-white font-bold text-sm">MY</span>
                </div>
                <span className="text-xl font-semibold text-gray-800">trip</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Welcome Section */}
        <section id="welcome" className="section">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="animate-fade-in [animation-delay:100ms] order-2 lg:order-1">
                <span className="text-sm text-primary font-medium uppercase tracking-wider">
                  {t.home.welcome.subtitle}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-4 md:mb-6">
                  {t.home.welcome.title}
                </h2>
                <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
                  {t.home.welcome.description1}
                </p>
                <p className="text-muted-foreground mb-6 md:mb-8 text-sm md:text-base leading-relaxed">
                  {t.home.welcome.description2}
                </p>
                <Button asChild className="btn-primary w-full sm:w-auto">
                  <a href="https://www.airbnb.co.in/rooms/17482812?source_impression_id=p3_1757707916_P3aPqmWYx3LJGd08" target="_blank" rel="noopener noreferrer">
                    {t.home.welcome.learnMore} <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              
              <div className="relative animate-fade-in [animation-delay:300ms] order-1 lg:order-2">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src="/assets/welcome-main.avif"
                    alt="Soulful retreat view" 
                    className="w-full h-full object-cover scale-75"
                  />
                </div>
                <div className="absolute -bottom-3 -left-3 md:-bottom-6 md:-left-6 w-2/3 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/assets/welcome-bottom-left.avif"
                    alt="Cottage interior" 
                    className="w-full h-full object-cover scale-75"
                  />
                </div>
                <div className="absolute -top-3 -right-3 md:-top-6 md:-right-6 w-1/2 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/assets/welcome-top-right.avif"
                    alt="Mountain landscape" 
                    className="w-full h-full object-cover scale-75"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        
        {/* CTA Section */}
        <section className="relative py-16 md:py-24 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center animate-fade-in px-4">
              <div className="flex justify-center mb-4 md:mb-6">
                <img src="/assets/logo.webp" alt="The Lilac Cottage" className="h-12 w-12 md:h-16 md:w-16" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                {t.home.cta.title}
              </h2>
              <p className="text-muted-foreground mb-6 md:mb-8 text-sm md:text-base leading-relaxed">
                {t.home.cta.description}
              </p>
              <Button asChild size="lg" className="btn-primary w-full sm:w-auto text-base md:text-lg py-3">
                <a href="https://www.airbnb.co.in/rooms/17482812?source_impression_id=p3_1757707916_P3aPqmWYx3LJGd08" target="_blank" rel="noopener noreferrer">{t.home.cta.bookNow}</a>
              </Button>
            </div>
          </div>
          
          {/* Decorative waves */}
          <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
            <svg 
              className="absolute bottom-0 w-full h-24 fill-background"
              preserveAspectRatio="none"
              viewBox="0 0 1440 74"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M0,37.1L40,34.5C80,32,160,27,240,29.6C320,32,400,42,480,42.9C560,44,640,35,720,32.1C800,30,880,34,960,40.8C1040,47,1120,56,1200,56.6C1280,57,1360,48,1400,43.3L1440,39.1L1440,74L1400,74C1360,74,1280,74,1200,74C1120,74,1040,74,960,74C880,74,800,74,720,74C640,74,560,74,480,74C400,74,320,74,240,74C160,74,80,74,40,74L0,74Z"
                className="animate-wave opacity-50"
              />
              <path 
                d="M0,37.1L40,34.5C80,32,160,27,240,29.6C320,32,400,42,480,42.9C560,44,640,35,720,32.1C800,30,880,34,960,40.8C1040,47,1120,56,1200,56.6C1280,57,1360,48,1400,43.3L1440,39.1L1440,74L1400,74C1360,74,1280,74,1200,74C1120,74,1040,74,960,74C880,74,800,74,720,74C640,74,560,74,480,74C400,74,320,74,240,74C160,74,80,74,40,74L0,74Z"
                className="animate-wave opacity-100 [animation-delay:-4s]"
              />
            </svg>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
