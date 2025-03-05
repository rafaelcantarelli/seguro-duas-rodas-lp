
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  
  return (
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
  );
};

export default HeroSection;
