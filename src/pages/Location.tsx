import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Car, Train, Plane } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Location() {
  const { t } = useLanguage();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const travelTimes = [
    {
      duration: "5 hours 20 minutes",
      from: "From Delhi via Road",
      icon: <Car className="h-6 w-6" />
    },
    {
      duration: "5 hours",
      from: "From Chandigarh via Road", 
      icon: <Car className="h-6 w-6" />
    },
    {
      duration: "5 hours",
      from: "From Delhi via Train",
      icon: <Train className="h-6 w-6" />
    },
    {
      duration: "1 hour 20 minutes",
      from: "From Jolly Grant Airport, Dehradun",
      icon: <Plane className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section with Mountain Background */}
        <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          {/* Mountain Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop')"
            }}
          >
            <div className="absolute inset-0 bg-black/30" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 text-center text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              {t.location.title}
            </h1>
          </div>
        </section>

        {/* Cottage Description Section */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.location.description}
              </p>
            </div>
          </div>
        </section>

        {/* Travel Times Section */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {travelTimes.map((travel, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      {travel.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {travel.duration}
                  </h3>
                  <p className="text-gray-600">
                    {travel.from}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Address and Contact Footer Section */}
        <section className="py-16 bg-amber-100">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Address */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {t.location.address}
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p>6B, Kamal Cottages</p>
                  <p>Jharipani</p>
                  <p>Mussoorie 248179</p>
                  <p>Uttarakhand</p>
                  <p>India</p>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {t.location.contact}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-gray-600 mr-3" />
                    <span className="text-gray-700">+91 7011023809</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-gray-600 mr-3" />
                    <span className="text-gray-700">lilacmussoorie@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-white">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.7890123456789!2d78.083717!3d30.427246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDI1JzM4LjEiTiA3OMKwMDUnMDEuNCJF!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus&q=6B+Kamal+Cottage,+Mussoorie+248179,+India"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lilac Cottage Location - 6B Kamal Cottage, Mussoorie"
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
