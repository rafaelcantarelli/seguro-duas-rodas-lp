
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { ArrowLeft, LogIn, Mail, Lock, UserPlus, User, FileText, Edit, Calendar, Phone, Check } from "lucide-react";
import { maskPhone } from "@/utils/masks";

const ClientArea = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("perfil");
  const [cotacoes, setCotacoes] = useState([]);
  const [loadingCotacoes, setLoadingCotacoes] = useState(false);
  
  // User profile data
  const [profileData, setProfileData] = useState({
    nome: "",
    telefone: "",
    whatsapp: ""
  });
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [savingProfile, setSavingProfile] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user) {
        setUser(data.user);
        
        // Fetch user's quotes
        if (data.user) {
          fetchUserCotacoes(data.user.email);
        }
      }
    };
    
    checkUser();
    
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === "SIGNED_IN" && session?.user) {
          setUser(session.user);
          fetchUserCotacoes(session.user.email);
        } else if (event === "SIGNED_OUT") {
          setUser(null);
          setCotacoes([]);
        }
      }
    );
    
    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  const fetchUserCotacoes = async (userEmail) => {
    if (!userEmail) return;
    
    setLoadingCotacoes(true);
    try {
      const { data, error } = await supabase
        .from("cotacoes_seguro")
        .select("*")
        .eq("email", userEmail)
        .order("created_at", { ascending: false });
        
      if (error) throw error;
      
      setCotacoes(data || []);
    } catch (error) {
      console.error("Erro ao buscar cotações:", error);
      toast.error("Não foi possível carregar suas cotações");
    } finally {
      setLoadingCotacoes(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      toast.success("Login realizado com sucesso");
    } catch (error) {
      toast.error(error.message || "Erro ao fazer login");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      toast.success("Conta criada com sucesso! Verifique seu email para confirmar o cadastro.");
    } catch (error) {
      toast.error(error.message || "Erro ao criar conta");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Logout realizado com sucesso");
  };

  const handleProfileInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === "whatsapp" || name === "telefone") {
      setProfileData({
        ...profileData,
        [name]: maskPhone(value)
      });
    } else {
      setProfileData({
        ...profileData,
        [name]: value
      });
    }
  };

  const handleSaveProfile = async () => {
    setSavingProfile(true);
    try {
      // Here we would save the profile data to a profiles table in Supabase
      // For now we'll just simulate success
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Perfil atualizado com sucesso");
      setIsEditingProfile(false);
    } catch (error) {
      toast.error("Erro ao atualizar perfil");
    } finally {
      setSavingProfile(false);
    }
  };

  const renderCotacaoStatus = (status) => {
    switch (status) {
      case "pendente":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            Pendente
          </span>
        );
      case "aprovada":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Aprovada
          </span>
        );
      case "recusada":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            Recusada
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            {status}
          </span>
        );
    }
  };

  const renderProfileTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Seus Dados</h3>
        {!isEditingProfile && (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setIsEditingProfile(true)}
          >
            <Edit className="h-4 w-4 mr-2" />
            Editar Perfil
          </Button>
        )}
      </div>
      
      {isEditingProfile ? (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nome">Nome Completo</Label>
            <Input
              id="nome"
              name="nome"
              value={profileData.nome}
              onChange={handleProfileInputChange}
              placeholder="Seu nome completo"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="telefone">Telefone</Label>
              <Input
                id="telefone"
                name="telefone"
                value={profileData.telefone}
                onChange={handleProfileInputChange}
                placeholder="(00) 00000-0000"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="whatsapp">WhatsApp</Label>
              <Input
                id="whatsapp"
                name="whatsapp"
                value={profileData.whatsapp}
                onChange={handleProfileInputChange}
                placeholder="(00) 00000-0000"
              />
            </div>
          </div>
          
          <div className="flex justify-end space-x-2">
            <Button 
              variant="outline" 
              onClick={() => setIsEditingProfile(false)}
              disabled={savingProfile}
            >
              Cancelar
            </Button>
            <Button 
              onClick={handleSaveProfile}
              disabled={savingProfile}
              className="bg-yellow-500 hover:bg-yellow-400 text-black"
            >
              {savingProfile ? (
                <>Salvando...</>
              ) : (
                <>
                  <Check className="h-4 w-4 mr-2" />
                  Salvar Alterações
                </>
              )}
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Email:</p>
            <p className="font-medium">{user?.email}</p>
          </div>
          
          {profileData.nome && (
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Nome:</p>
              <p className="font-medium">{profileData.nome}</p>
            </div>
          )}
          
          {profileData.telefone && (
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Telefone:</p>
              <p className="font-medium">{profileData.telefone}</p>
            </div>
          )}
          
          {profileData.whatsapp && (
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-sm text-gray-600">WhatsApp:</p>
              <p className="font-medium">{profileData.whatsapp}</p>
            </div>
          )}
          
          {!profileData.nome && !profileData.telefone && !profileData.whatsapp && (
            <div className="text-center p-6 border border-dashed border-gray-300 rounded-lg">
              <User className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Você ainda não completou seu perfil.</p>
              <p className="text-sm text-gray-400">Clique em "Editar Perfil" para adicionar suas informações.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );

  const renderCotacoesTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Suas Cotações</h3>
        <Button 
          onClick={() => navigate("/formulario-seguro")}
          size="sm"
          className="bg-yellow-500 hover:bg-yellow-400 text-black"
        >
          Solicitar nova cotação
        </Button>
      </div>
      
      {loadingCotacoes ? (
        <div className="text-center p-8">
          <div className="animate-spin w-8 h-8 border-4 border-yellow-500 border-t-transparent rounded-full mx-auto"></div>
          <p className="mt-4 text-gray-500">Carregando suas cotações...</p>
        </div>
      ) : cotacoes.length > 0 ? (
        <div className="space-y-4">
          {cotacoes.map((cotacao) => (
            <Card key={cotacao.id} className="overflow-hidden">
              <CardHeader className="bg-gray-50 pb-3">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-lg">{cotacao.marca} {cotacao.modelo}</CardTitle>
                    <CardDescription>
                      {new Date(cotacao.created_at).toLocaleDateString('pt-BR')}
                    </CardDescription>
                  </div>
                  {renderCotacaoStatus(cotacao.status)}
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <p className="text-sm text-gray-500">Proprietário:</p>
                    <p className="font-medium">{cotacao.nome_proprietario}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Veículo:</p>
                    <p className="font-medium">{cotacao.ano} • {cotacao.condicao_veiculo}</p>
                  </div>
                  {cotacao.placa && (
                    <div>
                      <p className="text-sm text-gray-500">Placa:</p>
                      <p className="font-medium">{cotacao.placa}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-sm text-gray-500">Tipo de Seguro:</p>
                    <p className="font-medium">{cotacao.tipo_seguro}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center p-8 border border-dashed border-gray-300 rounded-lg">
          <FileText className="h-12 w-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-500 font-medium">Você ainda não possui cotações</p>
          <p className="text-sm text-gray-400 mt-1 mb-4">
            Solicite uma cotação agora mesmo para o seguro da sua moto
          </p>
          <Button 
            onClick={() => navigate("/formulario-seguro")}
            className="bg-yellow-500 hover:bg-yellow-400 text-black"
          >
            Solicitar cotação
          </Button>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Button
          variant="outline"
          className="mb-6"
          onClick={() => navigate("/")}
          size="sm"
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> Voltar para o início
        </Button>

        <Card className="border-0 shadow-lg">
          <CardHeader className="text-center pb-2">
            <img 
              src="/lovable-uploads/fcbeae2d-b991-4d88-88c8-b6660a0a8b36.png" 
              alt="Seguro Duas Rodas" 
              className="h-16 mx-auto mb-4" 
            />
            <CardTitle className="text-2xl font-bold">Área do Cliente</CardTitle>
            <CardDescription>
              {user 
                ? "Gerencie suas cotações e dados pessoais"
                : "Entre com suas credenciais para acessar o sistema"}
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            {user ? (
              <Tabs defaultValue="perfil" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-2 mb-4">
                  <TabsTrigger value="perfil">
                    <User className="h-4 w-4 mr-2" />
                    Perfil
                  </TabsTrigger>
                  <TabsTrigger value="cotacoes">
                    <FileText className="h-4 w-4 mr-2" />
                    Cotações
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="perfil">
                  {renderProfileTab()}
                </TabsContent>
                <TabsContent value="cotacoes">
                  {renderCotacoesTab()}
                </TabsContent>
              </Tabs>
            ) : (
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid grid-cols-2 mb-4">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="register">Cadastro</TabsTrigger>
                </TabsList>
                <TabsContent value="login">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="seu@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Senha</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="password"
                          type="password"
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-400 text-black" disabled={loading}>
                      {loading ? "Entrando..." : "Entrar"}
                      <LogIn className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </TabsContent>
                <TabsContent value="register">
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="register-email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="register-email"
                          type="email"
                          placeholder="seu@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-password">Senha</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="register-password"
                          type="password"
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-400 text-black" disabled={loading}>
                      {loading ? "Criando conta..." : "Criar conta"}
                      <UserPlus className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            )}
          </CardContent>
          {user && (
            <CardFooter>
              <Button 
                variant="outline" 
                className="w-full" 
                onClick={handleLogout}
              >
                Sair da conta
              </Button>
            </CardFooter>
          )}
          {!user && (
            <CardFooter className="flex justify-center text-sm text-gray-500">
              <p>Seguro Duas Rodas © {new Date().getFullYear()}</p>
            </CardFooter>
          )}
        </Card>
      </div>
    </div>
  );
};

export default ClientArea;
