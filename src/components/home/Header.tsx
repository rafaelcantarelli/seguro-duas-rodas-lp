
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  
  return (
    <header className="sticky top-0 z-50 bg-black shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/fcbeae2d-b991-4d88-88c8-b6660a0a8b36.png" 
            alt="Seguro Duas Rodas" 
            className="h-12 mr-2" 
          />
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#beneficios" className="text-white hover:text-yellow-500 transition-colors">Benefícios</a>
          <a href="#depoimentos" className="text-white hover:text-yellow-500 transition-colors">Depoimentos</a>
          <a href="#contato" className="text-white hover:text-yellow-500 transition-colors">Contato</a>
          <a href="/auth" className="text-white hover:text-yellow-500 transition-colors">Área Admin</a>
        </nav>
        <button 
          onClick={() => navigate("/formulario-seguro")}
          className="hidden md:block bg-yellow-500 hover:bg-yellow-400 text-black font-medium py-2 px-4 rounded shadow-md transition-all duration-300 hover:shadow-lg"
        >
          Solicitar Cotação
        </button>
      </div>
    </header>
  );
};

export default Header;
