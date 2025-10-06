import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa6';
import { RefreshCw, AlertCircle, Inbox } from 'lucide-react';
import SolicitationCard from '@/components/SolicitationCard';
import './ufal-styles.css';
import logo from './ufal-logo.png';

interface Solicitation {
  id: number;
  nome_solicitante: string;
  setor_solicitante: string;
  unidade: string;
  local_servico: string;
  tipo_servico: string;
  outro_servico?: string;
  tipo_manutencao: string;
  descricao_problema: string;
  data_criacao?: string;
  status?: string;
}

function Dashboard() {
  const navigate = useNavigate();
  const [solicitations, setSolicitations] = useState<Solicitation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const goBack = () => navigate('/');

  const fetchSolicitations = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('http://127.0.0.1:8000/solicitacoes/');
      
      if (!response.ok) {
        throw new Error('Erro ao carregar solicitações');
      }
      
      const data = await response.json();
      setSolicitations(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
      console.error('Erro ao buscar solicitações:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSolicitations();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-ufal-blue shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src={logo} 
                alt="Logo UFAL" 
                className="h-12 w-auto"
              />
              <div className="text-white">
                <h2 className="text-lg font-semibold">Universidade Federal de Alagoas</h2>
                <p className="text-sm opacity-90">Sistema GEINFRA - Dashboard</p>
              </div>
            </div>
            <button
              onClick={goBack}
              className="flex items-center gap-2 text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <FaAngleLeft size={20} />
              <span className="hidden sm:inline">Voltar</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Título e Ações */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Solicitações de Serviço
              </h1>
              <p className="text-gray-600">
                Visualize todas as solicitações registradas no sistema
              </p>
            </div>
            <button
              onClick={fetchSolicitations}
              disabled={isLoading}
              className="flex items-center gap-2 bg-ufal-blue text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
            >
              <RefreshCw size={18} className={isLoading ? 'animate-spin' : ''} />
              <span>Atualizar</span>
            </button>
          </div>
        </div>

        {/* Estados de Loading, Error e Empty */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-16">
            <RefreshCw size={48} className="text-ufal-blue animate-spin mb-4" />
            <p className="text-gray-600 text-lg">Carregando solicitações...</p>
          </div>
        )}

        {error && !isLoading && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 flex items-start gap-4">
            <AlertCircle className="text-red-600 flex-shrink-0" size={24} />
            <div>
              <h3 className="text-red-800 font-semibold mb-1">Erro ao carregar solicitações</h3>
              <p className="text-red-700">{error}</p>
              <button
                onClick={fetchSolicitations}
                className="mt-3 text-red-600 hover:text-red-800 font-medium underline"
              >
                Tentar novamente
              </button>
            </div>
          </div>
        )}

        {!isLoading && !error && solicitations.length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <Inbox size={64} className="text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Nenhuma solicitação encontrada
            </h3>
            <p className="text-gray-500 mb-6">
              Ainda não há solicitações registradas no sistema.
            </p>
            <button
              onClick={() => navigate('/solicitations')}
              className="bg-ufal-blue text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Criar Nova Solicitação
            </button>
          </div>
        )}

        {/* Lista de Solicitações */}
        {!isLoading && !error && solicitations.length > 0 && (
          <div className="space-y-4">
            <div className="text-sm text-gray-600 mb-4">
              Total de {solicitations.length} solicitação{solicitations.length !== 1 ? 'ões' : ''} encontrada{solicitations.length !== 1 ? 's' : ''}
            </div>
            {solicitations.map((solicitation) => (
              <SolicitationCard 
                key={solicitation.id} 
                solicitation={solicitation} 
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Dashboard;
