
import { motion } from "framer-motion";
import { Shield, Clock, ThumbsUp, BadgePercent } from "lucide-react";

const BenefitsSection = () => {
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
  );
};

export default BenefitsSection;
