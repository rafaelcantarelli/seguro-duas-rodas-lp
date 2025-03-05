
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold text-yellow-500 mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Página não encontrada</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          A página que você está procurando não existe ou foi movida.
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
          className="bg-black hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-all duration-300 flex items-center mx-auto"
        >
          <Home className="mr-2 h-5 w-5" />
          Voltar para a página inicial
        </motion.button>
      </motion.div>
    </div>
  );
};

export default NotFound;
