
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FloatingCTA = () => {
  const navigate = useNavigate();
  
  return (
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
  );
};

export default FloatingCTA;
