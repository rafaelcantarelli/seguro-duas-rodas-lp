
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  ArrowRight, 
  Shield, 
  Clock, 
  ThumbsUp, 
  BadgePercent, 
  Phone,
  Bike
} from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const testimonials = [
    {
      name: "Carlos Silva",
      position: "Motociclista há 5 anos",
      text: "O processo foi rápido e o valor ficou muito abaixo do que eu esperava. Recomendo!",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      name: "Ana Santos",
      position: "Entregadora",
      text: "O seguro salvou minha renda quando minha moto teve problema. Atendimento excelente!",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      name: "Roberto Oliveira",
      position: "Motoboy",
      text: "Consegui um seguro completo pagando menos do que imaginava. Processo simples e rápido.",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg"
    }
  ];

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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
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
