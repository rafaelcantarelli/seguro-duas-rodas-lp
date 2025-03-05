
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Bike } from "lucide-react";

const PrivacyPolicy = () => {
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
              className="h-12 mr-2" 
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
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Política de Privacidade</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introdução</h2>
            <p>
              A Seguro Duas Rodas preza pela privacidade dos seus usuários e está comprometida em proteger as informações pessoais que você compartilha conosco. Esta Política de Privacidade descreve como coletamos, usamos, compartilhamos e protegemos suas informações quando você utiliza nosso site e serviços.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Informações que Coletamos</h2>
            <p>
              Coletamos informações pessoais que você nos fornece diretamente, como:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Informações de identificação (nome, data de nascimento, CPF)</li>
              <li>Informações de contato (e-mail, telefone, endereço)</li>
              <li>Informações sobre sua motocicleta (modelo, ano, placa)</li>
              <li>Histórico de condução e sinistros</li>
              <li>Informações de pagamento</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Como Utilizamos suas Informações</h2>
            <p>
              Utilizamos suas informações pessoais para:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Fornecer e melhorar nossos serviços de seguro</li>
              <li>Processar cotações e apólices de seguro</li>
              <li>Comunicar-nos com você sobre seus produtos e serviços</li>
              <li>Processar pagamentos e reembolsos</li>
              <li>Cumprir obrigações legais e regulatórias</li>
              <li>Prevenir fraudes e garantir a segurança</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Compartilhamento de Informações</h2>
            <p>
              Podemos compartilhar suas informações com:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Seguradoras parceiras que fornecem as apólices</li>
              <li>Prestadores de serviços que nos auxiliam nas operações</li>
              <li>Autoridades reguladoras e órgãos governamentais, quando exigido por lei</li>
            </ul>
            <p>
              Não vendemos suas informações pessoais a terceiros para fins de marketing.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Segurança das Informações</h2>
            <p>
              Implementamos medidas técnicas, administrativas e físicas projetadas para proteger suas informações pessoais contra acesso não autorizado, perda, uso indevido ou alteração. No entanto, nenhum sistema é completamente seguro, e não podemos garantir a segurança absoluta de suas informações.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Seus Direitos</h2>
            <p>
              De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direitos relacionados às suas informações pessoais, incluindo:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Direito de acesso às suas informações</li>
              <li>Direito de correção de dados incompletos ou incorretos</li>
              <li>Direito de eliminação dos dados</li>
              <li>Direito de portabilidade</li>
              <li>Direito de revogar o consentimento a qualquer momento</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Cookies e Tecnologias Semelhantes</h2>
            <p>
              Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência em nosso site, entender como você interage com nosso conteúdo e oferecer recursos personalizados. Você pode configurar seu navegador para recusar todos os cookies ou indicar quando um cookie está sendo enviado.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Alterações nesta Política</h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas ou por outros motivos operacionais, legais ou regulatórios. Recomendamos que você revise esta política regularmente.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contato</h2>
            <p>
              Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade ou sobre o tratamento de seus dados pessoais, entre em contato conosco através do e-mail: privacidade@seguroduas rodas.com.br
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
                className="h-10 mr-2" 
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

export default PrivacyPolicy;
