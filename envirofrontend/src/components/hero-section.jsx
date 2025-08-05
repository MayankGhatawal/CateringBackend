
import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { ArrowRight, Phone, Play, Star, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Pure Water Solutions",
      subtitle: "Advanced RO & UF Systems",
      description: "Clean, safe drinking water for homes and industries with our proven filtration technology.",
      image: "https://blog.romegamart.com/media/uploads/compressed-image_19.jpg",
      color: "blue"
    },
    {
      title: "Wastewater Treatment",
      subtitle: "STP & ETP Solutions", 
      description: "Complete sewage and effluent treatment systems for environmental protection.",
      image: "https://blog.romegamart.com/media/uploads/compressed-image_20.jpg",
      color: "green"
    },
    {
      title: "Air Purification",
      subtitle: "Industrial Scrubbers",
      description: "Advanced air treatment systems for cleaner industrial environments.",
      image: "https://image.made-in-china.com/202f0j00GmAldzgZERkY/1000m3-Per-Day-Industrial-Reverse-Osmosis-Machine-Water-Purification-Treatment-RO-System-Drinking-Pure-Water-Filter.webp",
      color: "purple"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide(prev => (prev + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const colorClasses = {
    blue: { accent: "text-blue-600", button: "bg-blue-600 hover:bg-blue-700", bg: "from-blue-50 to-white" },
    green: { accent: "text-green-600", button: "bg-green-600 hover:bg-green-700", bg: "from-green-50 to-white" },
    purple: { accent: "text-purple-600", button: "bg-purple-600 hover:bg-purple-700", bg: "from-purple-50 to-white" }
  };
  const colors = colorClasses[slides[currentSlide].color];

  return (
    <section className={`min-h-screen bg-green-50  px-4 sm:px-6 py-8 md:py-12 lg:py-14`}>
    

      <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">{slides[currentSlide].title}</h1>
          <h2 className={`text-xl font-semibold mb-4 ${colors.accent}`}>{slides[currentSlide].subtitle}</h2>
          <p className="text-base text-gray-600 mb-6 leading-relaxed">{slides[currentSlide].description}</p>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {["ISO Certified", "24/7 Support", "Expert Team", "Proven Results"].map((item) => (
              <div key={item} className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
          <Link to="/contact">
  <Button size="lg" className={`${colors.button} text-white px-6 py-3 text-base`}>
    <Phone className="w-4 h-4 mr-2" />
    Contact
    <ArrowRight className="w-4 h-4 ml-2" />
  </Button>
</Link>
          
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <img src={slides[currentSlide].image} alt={slides[currentSlide].title} 
              className="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-700 hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
         
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {["500+ Projects", "50+ Cities", "1000+ Clients", "99% Success"].map((stat) => (
          <div key={stat} className="text-center p-3 bg-white rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-gray-900 mb-1">{stat.split(' ')[0]}</div>
            <div className="text-xs text-gray-600">{stat.split(' ').slice(1).join(' ')}</div>
          </div>
        ))}
      </div>

      <div className="flex justify-center space-x-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrentSlide(i)} 
            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentSlide ? `${colors.button} w-6` : "bg-gray-300"}`}
            aria-label={`Go to slide ${i + 1}`} />
        ))}
      </div>
    </section>
  );
}