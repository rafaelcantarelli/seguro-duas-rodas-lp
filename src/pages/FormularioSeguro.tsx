import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ChevronDown, ChevronUp, ArrowRight, Send, ChevronLeft, ChevronRight } from "lucide-react";

const FormularioSeguro = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;
  
  const [formData, setFormData] = useState({
    // Dados do proprietário
    nomeProprietario: "",
    cpfProprietario: "",
    nascimentoProprietario: "",
    estadoCivilProprietario: "",
    
    // Dados do condutor
    nomeCondutor: "",
    cpfCondutor: "",
    nascimentoCondutor: "",
    estadoCivilCondutor: "",
    endereco: "",
    cep: "",
    estado: "",
    
    // Relação e residência
    relacaoSeguradorCondutor: "",
    tipoResidencia: "",
    garagemFechada: "",
    localTrabalho: "",
    usoProfissional: "",
    resideMenores: "",
    
    // Dados do veículo
    condicaoVeiculo: "",
    marca: "",
    modelo: "",
    ano: "",
    chassi: "",
    placa: "",
    
    // Dados do seguro
    tipoSeguro: "",
    seguradoraRenovacao: "",
    dataVencimento: "",
    codigoInterno: "",
    bonusApolice: "",
    
    // Contato
    email: "",
    telefone: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Aqui você adicionaria o código para enviar o e-mail
      // Simulando um envio de dados com um timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success("Sua solicitação de cotação foi enviada com sucesso!", {
        description: "Em breve, um de nossos corretores entrará em contato."
      });
      
      // Redirecionamento após envio bem-sucedido (opcional)
      // navigate("/sucesso");
    } catch (error) {
      toast.error("Ocorreu um erro ao enviar sua solicitação", {
        description: "Por favor, tente novamente mais tarde."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const getStepTitle = (step: number) => {
    switch (step) {
      case 1: return "Dados do Proprietário";
      case 2: return "Dados do Condutor";
      case 3: return "Relação e Residência";
      case 4: return "Dados do Veículo";
      case 5: return "Dados do Seguro";
      case 6: return "Contato";
      default: return "";
    }
  };

  const renderStepIndicator = () => {
    return (
      <div className="mb-8 w-full max-w-4xl mx-auto overflow-x-auto">
        {/* Mobile View */}
        <div className="md:hidden flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center">
              {currentStep}
            </div>
            <span className="text-sm mt-2 text-primary font-medium">
              {getStepTitle(currentStep)}
            </span>
            <span className="text-xs text-gray-500 mt-1">
              Etapa {currentStep} de {totalSteps}
            </span>
          </div>
        </div>
        
        {/* Desktop View */}
        <div className="hidden md:flex items-center justify-between">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  index + 1 === currentStep 
                    ? 'bg-primary text-white' 
                    : index + 1 < currentStep 
                      ? 'bg-gold text-black' 
                      : 'bg-gray-200 text-gray-500'
                }`}
              >
                {index + 1}
              </div>
              <span className={`text-xs mt-2 text-center max-w-[80px] ${
                index + 1 === currentStep 
                  ? 'text-primary font-medium' 
                  : index + 1 < currentStep 
                    ? 'text-gold' 
                    : 'text-gray-500'
              }`}>
                {getStepTitle(index + 1)}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="form-section animate-fade-in">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="bg-primary/10 text-primary w-8 h-8 flex items-center justify-center rounded-full mr-2">1</span>
              Dados do Proprietário
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nomeProprietario" className="input-label">Nome completo do proprietário *</label>
                <input 
                  type="text" 
                  id="nomeProprietario" 
                  name="nomeProprietario" 
                  value={formData.nomeProprietario}
                  onChange={handleInputChange}
                  className="input-field" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="cpfProprietario" className="input-label">CPF do Proprietário *</label>
                <input 
                  type="text" 
                  id="cpfProprietario" 
                  name="cpfProprietario" 
                  value={formData.cpfProprietario}
                  onChange={handleInputChange}
                  className="input-field" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="nascimentoProprietario" className="input-label">Data de nascimento do Proprietário *</label>
                <input 
                  type="date" 
                  id="nascimentoProprietario" 
                  name="nascimentoProprietario" 
                  value={formData.nascimentoProprietario}
                  onChange={handleInputChange}
                  className="input-field" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="estadoCivilProprietario" className="input-label">Estado Civil do Proprietário *</label>
                <select 
                  id="estadoCivilProprietario" 
                  name="estadoCivilProprietario" 
                  value={formData.estadoCivilProprietario}
                  onChange={handleInputChange}
                  className="input-field" 
                  required
                >
                  <option value="">Selecione</option>
                  <option value="Solteiro">Solteiro</option>
                  <option value="Casado">Casado</option>
                  <option value="Divorciado">Divorciado</option>
                  <option value="Viúvo">Viúvo</option>
                </select>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="form-section animate-fade-in">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="bg-primary/10 text-primary w-8 h-8 flex items-center justify-center rounded-full mr-2">2</span>
              Dados do Condutor
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nomeCondutor" className="input-label">Nome completo do Condutor *</label>
                <input 
                  type="text" 
                  id="nomeCondutor" 
                  name="nomeCondutor" 
                  value={formData.nomeCondutor}
                  onChange={handleInputChange}
                  className="input-field" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="cpfCondutor" className="input-label">CPF do Condutor *</label>
                <input 
                  type="text" 
                  id="cpfCondutor" 
                  name="cpfCondutor" 
                  value={formData.cpfCondutor}
                  onChange={handleInputChange}
                  className="input-field" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="nascimentoCondutor" className="input-label">Data de nascimento do Condutor *</label>
                <input 
                  type="date" 
                  id="nascimentoCondutor" 
                  name="nascimentoCondutor" 
                  value={formData.nascimentoCondutor}
                  onChange={handleInputChange}
                  className="input-field" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="estadoCivilCondutor" className="input-label">Estado Civil do Condutor *</label>
                <select 
                  id="estadoCivilCondutor" 
                  name="estadoCivilCondutor" 
                  value={formData.estadoCivilCondutor}
                  onChange={handleInputChange}
                  className="input-field" 
                  required
                >
                  <option value="">Selecione</option>
                  <option value="Solteiro">Solteiro</option>
                  <option value="Casado">Casado</option>
                  <option value="Divorciado">Divorciado</option>
                  <option value="Viúvo">Viúvo</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="endereco" className="input-label">Endereço onde o veículo reside *</label>
                <input 
                  type="text" 
                  id="endereco" 
                  name="endereco" 
                  value={formData.endereco}
                  onChange={handleInputChange}
                  className="input-field" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="cep" className="input-label">CEP da Residência *</label>
                <input 
                  type="text" 
                  id="cep" 
                  name="cep" 
                  value={formData.cep}
                  onChange={handleInputChange}
                  className="input-field" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="estado" className="input-label">Estado *</label>
                <select 
                  id="estado" 
                  name="estado" 
                  value={formData.estado}
                  onChange={handleInputChange}
                  className="input-field" 
                  required
                >
                  <option value="">Selecione</option>
                  <option value="SP">SP</option>
                  <option value="RJ">RJ</option>
                  <option value="MG">MG</option>
                </select>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="form-section animate-fade-in">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="bg-primary/10 text-primary w-8 h-8 flex items-center justify-center rounded-full mr-2">3</span>
              Relação e Residência
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="relacaoSeguradorCondutor" className="input-label">Qual a relação entre SEGURADO + CONDUTOR? *</label>
                <select 
                  id="relacaoSeguradorCondutor" 
                  name="relacaoSeguradorCondutor" 
                  value={formData.relacaoSeguradorCondutor}
                  onChange={handleInputChange}
                  className="input-field" 
                  required
                >
                  <option value="">Selecione</option>
                  <option value="Proprietário">Proprietário</option>
                  <option value="Familiar">Familiar</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>
              
              <div>
                <label className="input-label">Reside em: *</label>
                <div className="flex gap-4 mt-2">
                  <label className="inline-flex items-center">
                    <input 
                      type="radio" 
                      name="tipoResidencia" 
                      value="casa" 
                      checked={formData.tipoResidencia === "casa"}
                      onChange={handleRadioChange}
                      className="mr-2 h-4 w-4 text-primary"
                      required
                    />
                    <span>Casa</span>
                  </label>
                  
                  <label className="inline-flex items-center">
                    <input 
                      type="radio" 
                      name="tipoResidencia" 
                      value="condominio"
                      checked={formData.tipoResidencia === "condominio"}
                      onChange={handleRadioChange}
                      className="mr-2 h-4 w-4 text-primary"
                    />
                    <span>Casa em Condomínio</span>
                  </label>
                  
                  <label className="inline-flex items-center">
                    <input 
                      type="radio" 
                      name="tipoResidencia" 
                      value="apartamento"
                      checked={formData.tipoResidencia === "apartamento"}
                      onChange={handleRadioChange}
                      className="mr-2 h-4 w-4 text-primary"
                    />
                    <span>Apartamento</span>
                  </label>
                </div>
              </div>
              
              <div>
                <label htmlFor="garagemFechada" className="input-label">Veículo é guardado em garagem/estacionamento fechado? *</label>
                <select 
                  id="garagemFechada" 
                  name="garagemFechada" 
                  value={formData.garagemFechada}
                  onChange={handleInputChange}
                  className="input-field" 
                  required
                >
                  <option value="">Selecione</option>
                  <option value="Sim">Sim</option>
                  <option value="Não">Não</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="localTrabalho" className="input-label">Local de Trabalho *</label>
                <input 
                  type="text" 
                  id="localTrabalho" 
                  name="localTrabalho" 
                  value={formData.localTrabalho}
                  onChange={handleInputChange}
                  className="input-field" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="usoProfissional" className="input-label">Utiliza o veículo para uso profissional? *</label>
                <select 
                  id="usoProfissional" 
                  name="usoProfissional" 
                  value={formData.usoProfissional}
                  onChange={handleInputChange}
                  className="input-field" 
                  required
                >
                  <option value="">Selecione</option>
                  <option value="Sim">Sim</option>
                  <option value="Não">Não</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="resideMenores" className="input-label">Reside no local com pessoas entre 18 a 26 anos que possuem CNH? *</label>
                <select 
                  id="resideMenores" 
                  name="resideMenores" 
                  value={formData.resideMenores}
                  onChange={handleInputChange}
                  className="input-field" 
                  required
                >
                  <option value="">Selecione</option>
                  <option value="Sim">Sim</option>
                  <option value="Não">Não</option>
                </select>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="form-section animate-fade-in">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="bg-primary/10 text-primary w-8 h-8 flex items-center justify-center rounded-full mr-2">4</span>
              Dados do Veículo
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="condicaoVeiculo" className="input-label">Condição do Veículo *</label>
                <select 
                  id="condicaoVeiculo" 
                  name="condicaoVeiculo" 
                  value={formData.condicaoVeiculo}
                  onChange={handleInputChange}
                  className="input-field" 
                  required
                >
                  <option value="">Selecione</option>
                  <option value="Novo">Novo</option>
                  <option value="Usado">Usado</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="marca" className="input-label">Marca *</label>
                <input 
                  type="text" 
                  id="marca" 
                  name="marca" 
                  value={formData.marca}
                  onChange={handleInputChange}
                  className="input-field" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="modelo" className="input-label">Modelo *</label>
                <input 
                  type="text" 
                  id="modelo" 
                  name="modelo" 
                  value={formData.modelo}
                  onChange={handleInputChange}
                  className="input-field" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="ano" className="input-label">Ano *</label>
                <input 
                  type="number" 
                  id="ano" 
                  name="ano" 
                  value={formData.ano}
                  onChange={handleInputChange}
                  className="input-field" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="chassi" className="input-label">Chassi *</label>
                <input 
                  type="text" 
                  id="chassi" 
                  name="chassi" 
                  value={formData.chassi}
                  onChange={handleInputChange}
                  className="input-field" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="placa" className="input-label">Placa (se usado) *</label>
                <input 
                  type="text" 
                  id="placa" 
                  name="placa" 
                  value={formData.placa}
                  onChange={handleInputChange}
                  className="input-field" 
                  required={formData.condicaoVeiculo === "Usado"}
                />
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="form-section animate-fade-in">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="bg-primary/10 text-primary w-8 h-8 flex items-center justify-center rounded-full mr-2">5</span>
              Dados do Seguro
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="tipoSeguro" className="input-label">O Seguro é *</label>
                <select 
                  id="tipoSeguro" 
                  name="tipoSeguro" 
                  value={formData.tipoSeguro}
                  onChange={handleInputChange}
                  className="input-field" 
                  required
                >
                  <option value="">Selecione</option>
                  <option value="Novo">Novo</option>
                  <option value="Renovação">Renovação</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="seguradoraRenovacao" className="input-label">Qual a Seguradora (de Renovação)</label>
                <input 
                  type="text" 
                  id="seguradoraRenovacao" 
                  name="seguradoraRenovacao" 
                  value={formData.seguradoraRenovacao}
                  onChange={handleInputChange}
                  className="input-field" 
                />
              </div>
              
              <div>
                <label htmlFor="dataVencimento" className="input-label">Data do Vencimento</label>
                <input 
                  type="date" 
                  id="dataVencimento" 
                  name="dataVencimento" 
                  value={formData.dataVencimento}
                  onChange={handleInputChange}
                  className="input-field" 
                />
              </div>
              
              <div>
                <label htmlFor="codigoInterno" className="input-label">Código Interno</label>
                <input 
                  type="text" 
                  id="codigoInterno" 
                  name="codigoInterno" 
                  value={formData.codigoInterno}
                  onChange={handleInputChange}
                  className="input-field" 
                />
              </div>
              
              <div>
                <label htmlFor="bonusApolice" className="input-label">Bônus de Conta na Apólice</label>
                <input 
                  type="text" 
                  id="bonusApolice" 
                  name="bonusApolice" 
                  value={formData.bonusApolice}
                  onChange={handleInputChange}
                  className="input-field" 
                />
              </div>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="form-section animate-fade-in">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="bg-primary/10 text-primary w-8 h-8 flex items-center justify-center rounded-full mr-2">6</span>
              Contato
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="input-label">E-mail *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input-field" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="telefone" className="input-label">Telefone *</label>
                <input 
                  type="tel" 
                  id="telefone" 
                  name="telefone" 
                  value={formData.telefone}
                  onChange={handleInputChange}
                  className="input-field" 
                  required 
                />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderButtons = () => (
    <div className="flex justify-between mt-8">
      {currentStep > 1 ? (
        <button
          type="button"
          onClick={prevStep}
          className="flex items-center px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-all duration-200"
        >
          <ChevronLeft className="mr-2 h-5 w-5" />
          Anterior
        </button>
      ) : (
        <div></div>
      )}
      
      {currentStep < totalSteps ? (
        <button
          type="button"
          onClick={nextStep}
          className="flex items-center px-6 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg transition-all duration-200 ml-auto"
        >
          Próximo
          <ChevronRight className="ml-2 h-5 w-5" />
        </button>
      ) : (
        <button
          type="submit"
          className={`submit-button flex items-center justify-center ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Enviando...
            </>
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" />
              Solicitar Cotação
            </>
          )}
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="sticky top-0 z-50 bg-black shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/fcbeae2d-b991-4d88-88c8-b6660a0a8b36.png" 
              alt="Seguro Duas Rodas" 
              className="h-16 mr-2"
            />
          </div>
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Solicite a Cotação do Seguro para sua Moto</h1>
            <p className="text-gray-600 mt-2">Uma parceria PVA</p>
          </div>
        </div>
      </header>

      <div className="form-container">
        {renderStepIndicator()}

        <form onSubmit={handleSubmit} className="space-y-8">
          {renderStep()}
          {renderButtons()}
        </form>
        
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>Seus dados estão seguros. Respeitamos sua privacidade.</p>
        </div>
      </div>
    </div>
  );
};

export default FormularioSeguro;
