
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonialRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Carlos Silva",
      position: "Motociclista há 5 anos",
      text: "O processo foi rápido e o valor ficou muito abaixo do que eu esperava. Recomendo!",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      name: "Ana Santos",
      position: "Motociclista há 3 anos",
      text: "O seguro salvou minha vida quando tive um acidente. Atendimento excelente!",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      name: "Roberto Oliveira",
      position: "Motociclista Esportivo",
      text: "Consegui um seguro completo pagando menos do que imaginava. Processo simples e rápido.",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      name: "Juliana Martins",
      position: "Viajante de Moto",
      text: "As coberturas são excelentes para quem faz viagens longas como eu. Super satisfeita!",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
      name: "Fernando Costa",
      position: "Colecionador de Motos",
      text: "Encontrei um seguro que cobre minha coleção inteira por um preço justo. Incrível!",
      avatar: "https://randomuser.me/api/portraits/men/5.jpg"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    // Auto-advance carousel every 5 seconds
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          O que nossos <span className="text-yellow-500">clientes dizem</span>
        </h2>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Carousel Container */}
          <div 
            ref={testimonialRef}
            className="overflow-hidden relative"
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                    <div className="flex items-center mb-6">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-full mr-4 object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                        <p className="text-gray-600">{testimonial.position}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic text-lg">"{testimonial.text}"</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Carousel Navigation */}
          <div className="flex justify-between mt-8">
            <div className="flex space-x-2 justify-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentTestimonial === index ? 'bg-yellow-500' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="flex space-x-2">
              <button
                onClick={prevTestimonial}
                className="bg-black hover:bg-gray-800 text-white rounded-full p-2 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="bg-black hover:bg-gray-800 text-white rounded-full p-2 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
