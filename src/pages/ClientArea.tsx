
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { ArrowLeft, LogIn, Mail, Lock, UserPlus } from "lucide-react";

const ClientArea = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user) {
        setUser(data.user);
      }
    };
    
    checkUser();
    
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === "SIGNED_IN" && session?.user) {
          setUser(session.user);
        } else if (event === "SIGNED_OUT") {
          setUser(null);
        }
      }
    );
    
    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
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
    } catch (error: any) {
      toast.error(error.message || "Erro ao fazer login");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
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
    } catch (error: any) {
      toast.error(error.message || "Erro ao criar conta");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Logout realizado com sucesso");
  };

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
                ? "Gerencie suas cotações e apólices"
                : "Entre com suas credenciais para acessar o sistema"}
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            {user ? (
              <div className="space-y-6">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Logado como:</p>
                  <p className="font-medium">{user.email}</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Suas Cotações</h3>
                  <p className="text-gray-500 text-sm">
                    Você ainda não possui cotações. Solicite uma cotação para visualizar aqui.
                  </p>
                  <Button 
                    onClick={() => navigate("/formulario-seguro")}
                    className="w-full bg-yellow-500 hover:bg-yellow-400 text-black"
                  >
                    Solicitar nova cotação
                  </Button>
                </div>
              </div>
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
