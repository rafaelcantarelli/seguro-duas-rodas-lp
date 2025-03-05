import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Bike } from "lucide-react";

const TermsOfUse = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header/Navbar */}
      <header className="sticky top-0 z-50 bg-black shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/fcbeae2d-b991-4d88-88c8-b6660a0a8b36.png" 
              alt="Seguro Duas Rodas" 
              className="h-16 mr-2" 
            />
          </div>
          <button 
            onClick={() => navigate("/")}
            className="flex items-center text-white hover:text-yellow-500 transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Voltar para a página inicial
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Termos de Uso</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar ou utilizar o site e os serviços da Seguro Duas Rodas, você concorda com estes Termos de Uso. Se você não concordar com qualquer parte destes termos, por favor, não utilize nosso site ou serviços.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Descrição dos Serviços</h2>
            <p>
              A Seguro Duas Rodas oferece serviços de intermediação para contratação de seguros para motocicletas. Nossos serviços incluem:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Cotação de seguros para motocicletas</li>
              <li>Comparação de preços e coberturas entre diferentes seguradoras</li>
              <li>Assessoria na contratação de seguros</li>
              <li>Suporte durante a vigência da apólice</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Cadastro e Informações do Usuário</h2>
            <p>
              Para utilizar alguns de nossos serviços, você pode precisar se cadastrar e fornecer informações pessoais e da sua motocicleta. Você é responsável por:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Fornecer informações precisas, completas e atualizadas</li>
              <li>Manter a confidencialidade de suas credenciais de acesso</li>
              <li>Notificar-nos imediatamente sobre qualquer uso não autorizado de sua conta</li>
            </ul>
            <p>
              Reservamo-nos o direito de recusar o acesso ao serviço, encerrar contas ou cancelar cotações se as informações fornecidas forem incorretas ou fraudulentas.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Uso Adequado do Site</h2>
            <p>
              Ao utilizar nosso site e serviços, você concorda em:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Não violar leis ou regulamentos aplicáveis</li>
              <li>Não tentar acessar áreas restritas do site</li>
              <li>Não utilizar o site para enviar conteúdo ofensivo, difamatório ou ilegal</li>
              <li>Não interferir no funcionamento normal do site</li>
              <li>Não realizar ações que possam sobrecarregar nossa infraestrutura</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Limitação de Responsabilidade</h2>
            <p>
              A Seguro Duas Rodas atua como intermediária entre o cliente e as seguradoras. Não somos os fornecedores das apólices de seguro e não nos responsabilizamos por:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Decisões das seguradoras quanto à aceitação de riscos</li>
              <li>Alterações nos preços e condições impostas pelas seguradoras</li>
              <li>Cumprimento das obrigações contratuais das seguradoras</li>
              <li>Interpretações incorretas das condições da apólice por parte do cliente</li>
            </ul>
            <p>
              As cotações apresentadas estão sujeitas à verificação e aprovação das seguradoras parceiras, podendo sofrer alterações.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo disponibilizado em nosso site, incluindo textos, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais e compilações de dados, é de propriedade da Seguro Duas Rodas ou de seus licenciadores e é protegido pelas leis brasileiras e internacionais de propriedade intelectual.
            </p>
            <p>
              É proibida a reprodução, distribuição, modificação, exibição pública ou criação de obras derivadas de qualquer material do site sem autorização prévia por escrito.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Modificações nos Termos</h2>
            <p>
              Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento, a nosso critério. As alterações entrarão em vigor imediatamente após sua publicação no site. O uso continuado do site após a publicação das alterações constitui aceitação dos novos termos.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Lei Aplicável</h2>
            <p>
              Estes Termos de Uso são regidos pelas leis brasileiras. Qualquer disputa relacionada ao uso do site ou dos serviços da Seguro Duas Rodas será submetida à jurisdição exclusiva dos tribunais brasileiros.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contato</h2>
            <p>
              Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco através do e-mail: contato@seguroduas rodas.com.br
            </p>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-black py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <img 
                src="/lovable-uploads/fcbeae2d-b991-4d88-88c8-b6660a0a8b36.png" 
                alt="Seguro Duas Rodas" 
                className="h-14 mr-2" 
              />
            </div>
            
            <div className="text-gray-400 text-sm text-center md:text-right">
              <p>© {new Date().getFullYear()} Seguro Duas Rodas. Todos os direitos reservados.</p>
              <p className="mt-1">
                <a href="/politica-de-privacidade" className="text-gray-400 hover:text-yellow-500 transition-colors">Política de Privacidade</a>
                {" | "}
                <a href="/termos-de-uso" className="text-gray-400 hover:text-yellow-500 transition-colors">Termos de Uso</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfUse;
