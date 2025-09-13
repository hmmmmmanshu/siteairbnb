import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  avatar: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ipsita",
    location: "11 years on Airbnb",
    avatar: "/assets/testimonial-ipsita.avif",
    content: "We stayed at this cottage for 3 nights and 4 days and we had an absolutely amazing time. The house is spotless and kitchen is fully equipped which really helped us as we had a 19-month old baby with us. But the best part of the stay was the terrace with amazing view of the mountains. Monica, our co-host, was very helpful and reverted to all our queries promptly. It's a beautiful cottage, the hosts are amazing- overall a wonderful place.",
    rating: 5
  },
  {
    id: 2,
    name: "Geeta",
    location: "9 years on Airbnb",
    avatar: "/assets/testimonial-geeta.avif",
    content: "Fantastic view of mountains and sunsets from the balcony. Good place for bonfire with a large family. Pictures shown are probably older from when the place was newly built and furnished, however this doesn't change much in terms of experience. The cook from the mess provided tasty meals at a nominal additional cost which was helpful. We used their suggested contact for cab service and grocery supply with no complaints. We enjoyed our stay thoroughly and it truly was a relaxing stay.",
    rating: 5
  },
  {
    id: 3,
    name: "Bharat",
    location: "7 years on Airbnb",
    avatar: "/assets/testimonial-bharat.avif",
    content: "We stayed at Lilac cottage during March end. As soon as you entered the cottage, you will feel at home. The cottage has spacious 2 bedrooms, kitchen and living room. It's beautiful place to spend time with friends and family. Caretaker Miss Sarita madam was very cooperative and provided clear instructions from the very beginning. We also had dinner and breakfast at this place, and it was good and reasonably priced. Overall it is beautiful place one should consider if you are staying in Missourie.",
    rating: 5
  },
  {
    id: 4,
    name: "Ankith",
    location: "7 years on Airbnb",
    avatar: "/assets/testimonial-ankith.avif",
    content: "Amazing views and very homely stay. The roads are narrow but the views are totally worth it. Monica was super helpful and prompt. She provided a document with activities, contact numbers for cab services, details about the caretaker, and nearby restaurants and tourist attractions. She was able to help within minutes. The place is super clean and the caretaker cleans the place every day. The caretaker can also cook meals and setup a bonfire and barbeque on request. I highly recommend the stay for anyone with a family of 4-5 looking to enjoy a relaxing stay filled with beautiful views and fresh air, 5/5!",
    rating: 5
  },
];

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 8000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="section bg-muted py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-muted-foreground">
            {t.testimonials.description}
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-[400px] md:h-[300px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  "absolute inset-0 glass-card p-8 md:p-10 transition-all duration-500",
                  activeIndex === index 
                    ? "opacity-100 translate-x-0 z-10"
                    : index < activeIndex 
                      ? "opacity-0 -translate-x-full z-0" 
                      : "opacity-0 translate-x-full z-0"
                )}
              >
                <div className="flex flex-col md:flex-row gap-6 h-full">
                  <div className="flex flex-col items-center md:items-start">
                    <div className="rounded-full overflow-hidden w-20 h-20 mb-4 border-2 border-primary">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < testimonial.rating ? "fill-primary text-primary" : "text-muted-foreground"}`} 
                        />
                      ))}
                    </div>
                    <h4 className="text-lg font-semibold text-center md:text-left">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground text-center md:text-left">{testimonial.location}</p>
                  </div>
                  
                  <div className="flex-1 flex items-center">
                    <blockquote className="italic text-muted-foreground">
                      "{testimonial.content}"
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-between mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-card hover:bg-muted border border-border transition-colors"
              disabled={isAnimating}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isAnimating) return;
                    setIsAnimating(true);
                    setActiveIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeIndex === index 
                      ? "bg-primary w-6" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-card hover:bg-muted border border-border transition-colors"
              disabled={isAnimating}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
