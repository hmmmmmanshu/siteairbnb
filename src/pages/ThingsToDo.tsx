import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

// Places to Visit data with linkable images
const placesToVisit = [
  {
    id: 1,
    name: "Cloud's End",
    description: "Surrounded by the Oak and Deodar forest, Clouds End is landmark to the geographical end of Mussoorie. Located at around 7 kms from main Mussoorie city, Clouds End is known for pleasant scenic views of hills with enjoyable climate.",
    image: "/assets/clouds-end.webp",
    imageWebp: "/assets/clouds-end.webp",
    category: "attractions"
  },
  {
    id: 2,
    name: "Lal Tibba",
    description: "Lal Tibba is situated at the highest peak's topmost point. It can be accessed via Depot Hill in Landour and is popular among tourists and travellers for viewing long trails of major mountain peaks as well as romantic sunsets and sunrises.",
    image: "/assets/lal-tibba.webp",
    imageWebp: "/assets/lal-tibba.webp",
    category: "attractions"
  },
  {
    id: 3,
    name: "Jharipani Falls",
    description: "The enchanting falls which demand a trek of about 2km from the Lilac Cottage, offer a picturesque view of the Shivalik Range.",
    image: "/assets/jharipani-falls.webp",
    imageWebp: "/assets/jharipani-falls.webp",
    category: "attractions"
  },
  {
    id: 4,
    name: "Kempty Falls",
    description: "Gigantic Fall with somersault of the streams before hitting the bottom, Kempty Falls is the most popular and one of the oldest tourist spot near Mussoorie. It is the most fascinating picnic spot or a perfect day out place at a distance of 15 km.",
    image: "/assets/kempty-falls.webp",
    imageWebp: "/assets/kempty-falls.webp",
    category: "attractions"
  },
  {
    id: 5,
    name: "Benog Wildlife Sanctuary",
    description: "Benog Wildlife Sanctuary, a part of Rajaji National Park, is home to diverse wildlife including Himalayan monkeys, deer, and various bird species. Perfect for nature enthusiasts and wildlife photography.",
    image: "/assets/Benog+Wildlife+Sanctuary.webp",
    imageWebp: "/assets/Benog+Wildlife+Sanctuary.webp",
    category: "attractions"
  },
  {
    id: 6,
    name: "Lakha Mandal",
    description: "Lakhamandal is an ancient Hindu temple complex with historical significance, featuring traditional architecture and religious artifacts dating back centuries.",
    image: "/assets/lakha-mandal.webp",
    imageWebp: "/assets/lakha-mandal.webp",
    category: "attractions"
  },
  {
    id: 7,
    name: "Chaar Dukaan",
    description: "Char Dhukaan is a small place which is famous for its local shops and traditional mountain architecture. A perfect spot to experience the local culture and buy souvenirs.",
    image: "/assets/chaar-dukaan.webp",
    imageWebp: "/assets/chaar-dukaan.webp",
    category: "attractions"
  },
  {
    id: 8,
    name: "Company Garden",
    description: "A popular picnic location in Mussoorie, Company Garden features beautifully maintained flower beds, walking paths, and recreational facilities for families.",
    image: "/assets/company-garden.webp",
    imageWebp: "/assets/company-garden.webp",
    category: "attractions"
  }
];

// Cafes and Restaurants data
const cafesAndRestaurants = [
  {
    id: 9,
    name: "Chic Chocolate",
    cuisine: "Bakery & Cafe",
    price: "₹800 for two",
    mustTry: "Wood Fired Pizzas, Hot Chocolate Brownie Fudge",
    image: "/assets/chic-chocolate.webp",
    imageWebp: "/assets/chic-chocolate.webp",
    category: "dining"
  },
  {
    id: 10,
    name: "Little Llama Cafe",
    cuisine: "Continental",
    price: "₹1,000 for two",
    mustTry: "Pesto Pizza, Stone Pot Meal, Fish & Chips",
    image: "/assets/little-llama-cafe.webp",
    imageWebp: "/assets/little-llama-cafe.webp",
    category: "dining"
  },
  {
    id: 11,
    name: "Cafe Manor",
    cuisine: "Continental, Indian",
    price: "₹1,200 for two",
    mustTry: "Parmesan Crusted Chicken, Marinara Pizza",
    image: "/assets/cafe-manor.webp",
    imageWebp: "/assets/cafe-manor.webp",
    category: "dining"
  },
  {
    id: 12,
    name: "Cafe De Tavern",
    cuisine: "Continental",
    price: "₹700 for two",
    mustTry: "Cloud's End Burger, Himalaya Club Mousse",
    image: "/assets/cafe-de-tavern.webp",
    imageWebp: "/assets/cafe-de-tavern.webp",
    category: "dining"
  },
  {
    id: 13,
    name: "Cafe Ivy",
    cuisine: "India, Continental",
    price: "₹1000 for two",
    mustTry: "Pigs In A Blanket, Lebanese Falafel, Al Fungi",
    image: "/assets/cafe-ivy.webp",
    imageWebp: "/assets/cafe-ivy.webp",
    category: "dining"
  },
  {
    id: 14,
    name: "Cafe By The Way",
    cuisine: "Cafe",
    price: "₹600 for two",
    mustTry: "Blueberry Waffle with Ice Cream, Iced Hazelnut Latte",
    image: "/assets/cafe-by-the-way.webp",
    imageWebp: "/assets/cafe-by-the-way.webp",
    category: "dining"
  },
  {
    id: 15,
    name: "Urban Turban",
    cuisine: "Mughlai, North Indian",
    price: "₹1,000 for two",
    mustTry: "Dahi Ke Sholay, Turban Tikka Masala",
    image: "/assets/urban-turban.webp",
    imageWebp: "/assets/urban-turban.webp",
    category: "dining"
  },
  {
    id: 16,
    name: "Doma's",
    cuisine: "Tibetan",
    price: "₹500 for two",
    mustTry: "Doma's Momo Platter, Pork Ramen",
    image: "/assets/domas.webp",
    imageWebp: "/assets/domas.webp",
    category: "dining"
  }
];

// Combine all items
const allItems = [...placesToVisit, ...cafesAndRestaurants];

export default function ThingsToDo() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filteredItems, setFilteredItems] = useState(allItems);
  const [activeFilter, setActiveFilter] = useState("all");
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  // Filter items by category
  const filterItems = (category: string) => {
    setActiveFilter(category);
    
    if (category === "all") {
      setFilteredItems(allItems);
    } else {
      setFilteredItems(allItems.filter(item => item.category === category));
    }
  };
  
  // Handle lightbox navigation
  const navigateGallery = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage);
    let newIndex;
    
    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
    } else {
      newIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredItems[newIndex].id);
  };
  
  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      if (e.key === "Escape") {
        setSelectedImage(null);
      } else if (e.key === "ArrowLeft") {
        navigateGallery("prev");
      } else if (e.key === "ArrowRight") {
        navigateGallery("next");
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, filteredItems]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Header Section */}
        <section className="relative py-20 bg-gradient-to-r from-primary/10 to-white dark:from-primary/20 dark:to-background overflow-hidden">
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Things To Do
              </h1>
              <p className="text-muted-foreground text-lg mb-6">
                Explore the best places to visit and dine in Mussoorie
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/50 blur-3xl" />
            <div className="absolute bottom-10 right-40 w-48 h-48 rounded-full bg-primary/30 blur-3xl" />
          </div>
        </section>

        {/* Places to Visit Section */}
        <section className="section">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 animate-fade-in px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Places To Visit
              </h2>
              <p className="text-muted-foreground text-sm md:text-base">
                Discover the most beautiful attractions and scenic spots in and around Mussoorie
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {placesToVisit.map((place, index) => (
                <div 
                  key={place.id} 
                  className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden aspect-[4/3] cursor-pointer">
                    <img 
                      src={place.image} 
                      alt={place.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onClick={() => setSelectedImage(place.id)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white font-medium">{place.name}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">{place.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{place.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cafes and Restaurants Section */}
        <section className="section bg-secondary/50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 animate-fade-in px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Cafes & Restaurants
              </h2>
              <p className="text-muted-foreground text-sm md:text-base">
                Indulge in delicious local and international cuisine at the best dining spots in Mussoorie
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {cafesAndRestaurants.map((restaurant, index) => (
                <div 
                  key={restaurant.id} 
                  className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden aspect-[4/3] cursor-pointer">
                    <img 
                      src={restaurant.image} 
                      alt={restaurant.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onClick={() => setSelectedImage(restaurant.id)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white font-medium">{restaurant.name}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">{restaurant.name}</h3>
                    <p className="text-primary font-medium mb-1">{restaurant.cuisine}</p>
                    <p className="text-muted-foreground text-sm mb-2">{restaurant.price}</p>
                    <p className="text-muted-foreground text-sm">
                      <span className="font-medium">Must Try:</span> {restaurant.mustTry}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in">
            <button 
              className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </button>
            
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-4 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => navigateGallery("prev")}
            >
              <span className="sr-only">Previous</span>
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="max-w-5xl max-h-[80vh] overflow-hidden">
              {filteredItems.find(item => item.id === selectedImage) && (
                <img 
                  src={filteredItems.find(item => item.id === selectedImage)?.imageWebp || filteredItems.find(item => item.id === selectedImage)?.image} 
                  alt={filteredItems.find(item => item.id === selectedImage)?.name}
                  className="max-w-full max-h-[80vh] object-contain"
                />
              )}
            </div>
            
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-4 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => navigateGallery("next")}
            >
              <span className="sr-only">Next</span>
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
