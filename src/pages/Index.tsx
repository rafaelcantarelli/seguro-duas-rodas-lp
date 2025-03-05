
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Motorcycle } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl"
      >
        <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10">
          <Motorcycle className="h-10 w-10 text-primary" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
          Seguro para Duas Rodas
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Proteja sua moto com as melhores condições do mercado. Preencha nosso formulário e receba uma cotação personalizada.
        </p>
        
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="bg-success hover:bg-success-dark text-white py-4 px-8 rounded-lg font-medium shadow-md transition-all duration-300"
          onClick={() => navigate("/formulario-seguro")}
        >
          <span className="flex items-center">
            Solicitar Cotação <ArrowRight className="ml-2 h-5 w-5" />
          </span>
        </motion.button>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-20 text-center"
      >
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Seguro Duas Rodas. Todos os direitos reservados.
        </p>
      </motion.div>
    </div>
  );
};

export default Index;
