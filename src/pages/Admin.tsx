
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { LogOut, Trash2, Eye, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

type Cotacao = {
  id: string;
  created_at: string;
  nome_proprietario: string;
  telefone: string;
  email: string;
  marca: string;
  modelo: string;
  ano: number;
  status: string;
};

const Admin = () => {
  const [cotacoes, setCotacoes] = useState<Cotacao[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        navigate("/auth");
        return;
      }
      setUser(data.session.user);
      fetchCotacoes();
    };

    checkUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_OUT") {
          navigate("/auth");
        } else if (session) {
          setUser(session.user);
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [navigate]);

  const fetchCotacoes = async () => {
    try {
      const { data, error } = await supabase
        .from("cotacoes_seguro")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setCotacoes(data || []);
    } catch (error: any) {
      toast.error(`Erro ao carregar cotações: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/auth");
  };

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "dd/MM/yyyy 'às' HH:mm", { locale: ptBR });
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case "pendente":
        return "bg-yellow-100 text-yellow-800";
      case "em_analise":
        return "bg-blue-100 text-blue-800";
      case "aprovada":
        return "bg-green-100 text-green-800";
      case "rejeitada":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-yellow-500" />
        <p className="mt-4 text-lg">Carregando...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-black shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/lovable-uploads/fcbeae2d-b991-4d88-88c8-b6660a0a8b36.png"
              alt="Seguro Duas Rodas"
              className="h-12 mr-3"
            />
            <h1 className="text-white text-xl font-bold">Painel Administrativo</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-white">{user?.email}</span>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black" onClick={handleSignOut}>
              <LogOut className="mr-2 h-4 w-4" /> Sair
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6 bg-black text-white">
            <h2 className="text-xl font-bold">Cotações de Seguro</h2>
            <p className="text-gray-300">Gerencie todas as solicitações de cotação</p>
          </div>

          <div className="overflow-x-auto">
            {cotacoes.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">Nenhuma cotação encontrada</p>
              </div>
            ) : (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contato</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Veículo</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cotacoes.map((cotacao) => (
                    <tr key={cotacao.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(cotacao.created_at)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{cotacao.nome_proprietario}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{cotacao.telefone}</div>
                        <div className="text-sm text-gray-500">{cotacao.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{cotacao.marca} {cotacao.modelo}</div>
                        <div className="text-sm text-gray-500">{cotacao.ano}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(cotacao.status)}`}>
                          {cotacao.status === "pendente" && "Pendente"}
                          {cotacao.status === "em_analise" && "Em Análise"}
                          {cotacao.status === "aprovada" && "Aprovada"}
                          {cotacao.status === "rejeitada" && "Rejeitada"}
                          {!["pendente", "em_analise", "aprovada", "rejeitada"].includes(cotacao.status) && cotacao.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="text-blue-600 hover:text-blue-800"
                            onClick={() => {
                              // Ver detalhes (implementação futura)
                              toast.info("Visualização detalhada será implementada em breve");
                            }}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="text-red-600 hover:text-red-800"
                            onClick={() => {
                              // Excluir (implementação futura)
                              toast.info("Funcionalidade de exclusão será implementada em breve");
                            }}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
