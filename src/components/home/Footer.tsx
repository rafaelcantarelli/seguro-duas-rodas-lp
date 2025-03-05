
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <img 
              src="/lovable-uploads/fcbeae2d-b991-4d88-88c8-b6660a0a8b36.png" 
              alt="Seguro Duas Rodas" 
              className="h-10 mr-2" 
            />
          </div>
          
          <div className="text-gray-400 text-sm text-center md:text-right">
            <p>© {currentYear} Seguro Duas Rodas. Todos os direitos reservados.</p>
            <p className="mt-1">
              <a href="/politica-de-privacidade" className="text-gray-400 hover:text-yellow-500 transition-colors">Política de Privacidade</a>
              {" | "}
              <a href="/termos-de-uso" className="text-gray-400 hover:text-yellow-500 transition-colors">Termos de Uso</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
