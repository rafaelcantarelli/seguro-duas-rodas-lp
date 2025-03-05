
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ContactSection = () => {
  const navigate = useNavigate();
  
  return (
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
  );
};

export default ContactSection;
