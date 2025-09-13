
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Bath, Wifi, Tv, Thermometer, Zap, Car, ShieldCheck, 
  Building, Utensils, Coffee, Gamepad2, Users, Home, 
  Wrench, Droplets, Microwave, RefrigeratorIcon, ChefHat,
  Heart, Sparkles, Battery, MapPin, Clock
} from "lucide-react";

export default function Amenities() {
  const { t } = useLanguage();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  // Helper function to get the appropriate icon for each amenity
  const getIcon = (categoryName: string, index: number) => {
    const icons = {
      inProperty: [
        <Home key={0} />, <Droplets key={1} />, <Thermometer key={2} />, <Tv key={3} />,
        <Wifi key={4} />, <Wrench key={5} />, <Microwave key={6} />, <RefrigeratorIcon key={7} />,
        <ChefHat key={8} />, <Heart key={9} />, <Sparkles key={10} />, <Battery key={11} />
      ],
      onCampus: [
        <Car key={0} />, <ShieldCheck key={1} />, <Building key={2} />, 
        <Gamepad2 key={3} />, <Users key={4} />, <Gamepad2 key={5} />
      ]
    };
    
    return icons[categoryName as keyof typeof icons]?.[index] || <Home />;
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-cottage-light to-white dark:from-cottage-dark dark:to-background">
          <div className="container relative z-10 pt-20">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                The Lilac Cottage
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                {t.amenitiesPage.title}
              </h1>
              <p className="text-muted-foreground">
                {t.amenitiesPage.subtitle}
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/50 blur-3xl" />
            <div className="absolute bottom-10 right-40 w-48 h-48 rounded-full bg-cottage-light blur-3xl" />
          </div>
        </section>
        
        {/* Description Section - Removed as it's now empty */}
        
        {/* Categories Sections */}
        {Object.keys(t.amenitiesPage.categories).map((category, categoryIndex) => {
          const categoryData = t.amenitiesPage.categories[category as keyof typeof t.amenitiesPage.categories];
          const isEven = categoryIndex % 2 === 0;
          
          return (
            <section key={category} className={`py-16 ${isEven ? 'bg-card' : ''}`}>
              <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <h2 className="text-3xl font-bold mb-4">
                    {categoryData.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {categoryData.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                  {categoryData.items.map((item, index) => (
                    <div 
                      key={index} 
                      className="flex flex-col items-center text-center animate-fade-in p-4"
                      style={{ animationDelay: `${(index + 1) * 100}ms` }}
                    >
                      <div className="mb-4 text-6xl" style={{ color: '#D2B48C' }}>
                        {getIcon(category, index)}
                      </div>
                      <h3 className="text-lg font-medium">{item.title}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
        
        {/* Need Help Section */}
        <section 
          className="relative py-20 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop')"
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="container relative z-10">
            <div className="max-w-2xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help?</h2>
              <p className="text-lg mb-8">
                Fill the form below and our team will get back to you and help you plan your stay at The Lilac Cottage.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-left">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name (required)</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm mb-1">First Name</label>
                        <input 
                          type="text" 
                          className="w-full p-3 rounded bg-white/20 border border-white/30 text-white placeholder-white/70"
                        />
                      </div>
                      <div>
                        <label className="block text-sm mb-1">Last Name</label>
                        <input 
                          type="text" 
                          className="w-full p-3 rounded bg-white/20 border border-white/30 text-white placeholder-white/70"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Mobile Number (required)</label>
                    <input 
                      type="tel" 
                      className="w-full p-3 rounded bg-white/20 border border-white/30 text-white placeholder-white/70"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Expected Date of Travel</label>
                    <input 
                      type="date" 
                      className="w-full p-3 rounded bg-white/20 border border-white/30 text-white"
                      placeholder="dd-mm-yyyy"
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full md:w-auto px-8 py-3 bg-orange-400 hover:bg-orange-500 text-black font-medium rounded transition-colors"
                  >
                    Request Callback
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
