
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();
  
  return (
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
  );
};

export default CTASection;
