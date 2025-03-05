
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  ArrowRight, 
  Shield, 
  Clock, 
  ThumbsUp, 
  BadgePercent, 
  Phone,
  Bike,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

const Index = () => {
  const navigate = useNavigate();
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

  const benefits = [
    {
      icon: <Shield className="h-8 w-8 text-yellow-500" />,
      title: "Proteção Completa",
      description: "Cobertura abrangente para sua moto contra roubo, furto e danos."
    },
    {
      icon: <Clock className="h-8 w-8 text-yellow-500" />,
      title: "Cotação Rápida",
      description: "Receba sua cotação em minutos, sem burocracia."
    },
    {
      icon: <ThumbsUp className="h-8 w-8 text-yellow-500" />,
      title: "Atendimento Premium",
      description: "Suporte 24/7 para todas as suas necessidades."
    },
    {
      icon: <BadgePercent className="h-8 w-8 text-yellow-500" />,
      title: "Preços Competitivos",
      description: "Melhor custo-benefício do mercado para sua categoria."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header/Navbar */}
      <header className="sticky top-0 z-50 bg-black shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Bike className="h-8 w-8 text-yellow-500 mr-2" />
            <span className="text-white font-bold text-xl">Seguro Duas Rodas</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#beneficios" className="text-white hover:text-yellow-500 transition-colors">Benefícios</a>
            <a href="#depoimentos" className="text-white hover:text-yellow-500 transition-colors">Depoimentos</a>
            <a href="#contato" className="text-white hover:text-yellow-500 transition-colors">Contato</a>
          </nav>
          <button 
            onClick={() => navigate("/formulario-seguro")}
            className="hidden md:block bg-yellow-500 hover:bg-yellow-400 text-black font-medium py-2 px-4 rounded shadow-md transition-all duration-300 hover:shadow-lg"
          >
            Solicitar Cotação
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')", 
            filter: "brightness(0.4)"
          }}
        ></div>
        
        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
          >
            Proteção para sua<br/><span className="text-yellow-500">Liberdade sobre Rodas</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl"
          >
            Seguro completo para sua moto com as melhores condições do mercado e atendimento personalizado.
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/formulario-seguro")}
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-lg shadow-lg text-xl transition-all duration-300 flex items-center"
          >
            Solicitar Cotação Agora <ArrowRight className="ml-2 h-6 w-6" />
          </motion.button>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Por que escolher o <span className="text-yellow-500">Seguro Duas Rodas</span>?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-black/5 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-center">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Proteja sua moto <span className="text-yellow-500">hoje mesmo</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Nossa equipe está pronta para encontrar o melhor plano que se adapte às suas necessidades e ao seu bolso.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/formulario-seguro")}
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-lg shadow-lg text-xl transition-all duration-300"
          >
            Faça uma Cotação Grátis
          </motion.button>
        </div>
      </section>

      {/* Testimonials Section */}
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

      {/* Contact Section */}
      <section id="contato" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-4">Entre em contato</h3>
              <div className="flex items-center text-gray-300 mb-3">
                <Phone className="h-5 w-5 mr-2 text-yellow-500" />
                <span>(11) 4002-8922</span>
              </div>
              <p className="text-gray-400">
                Atendimento de segunda a sexta, das 8h às 20h<br />
                Sábados, das 8h às 14h
              </p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/formulario-seguro")}
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-lg shadow-lg text-xl transition-all duration-300 flex items-center"
            >
              Solicitar Cotação <ArrowRight className="ml-2 h-6 w-6" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <Bike className="h-8 w-8 text-yellow-500 mr-2" />
              <span className="text-white font-bold text-xl">Seguro Duas Rodas</span>
            </div>
            
            <div className="text-gray-400 text-sm text-center md:text-right">
              <p>© {new Date().getFullYear()} Seguro Duas Rodas. Todos os direitos reservados.</p>
              <p className="mt-1">
                <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Política de Privacidade</a>
                {" | "}
                <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Termos de Uso</a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating CTA Button (Mobile Only) */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/formulario-seguro")}
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-5 rounded-full shadow-lg text-base transition-all duration-300 flex items-center"
        >
          Solicitar Cotação <ArrowRight className="ml-1 h-5 w-5" />
        </motion.button>
      </div>
    </div>
  );
};

export default Index;
