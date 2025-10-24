import { useState } from 'react';
import { ChevronDown, ChevronUp, Calendar, User, MapPin, Wrench, FileText } from 'lucide-react';

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

interface SolicitationCardProps {
  solicitation: Solicitation;
}

export default function SolicitationCard({ solicitation }: SolicitationCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Data não disponível';
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status?: string) => {
    switch (status?.toLowerCase()) {
      case 'pendente':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'em andamento':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'concluído':
        return 'bg-green-100 text-green-800 border-green-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200">
      {/* Header - Sempre visível */}
      <div
        onClick={toggleExpand}
        className="p-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
      >
        <div className="flex-1">
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className="text-lg font-semibold text-gray-800">
              Solicitação #{solicitation.id}
            </h3>
            {solicitation.status && (
              <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(solicitation.status)}`}>
                {solicitation.status}
              </span>
            )}
          </div>
          <p className="text-sm text-gray-600 mt-1">
            {solicitation.tipo_servico}
            {solicitation.outro_servico && ` - ${solicitation.outro_servico}`}
          </p>
        </div>
        <div className="ml-4 text-gray-400 transition-transform duration-300" style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>
      </div>

      {/* Conteúdo expandido */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ overflow: 'hidden' }}
      >
        <div className="px-4 pb-4 pt-2 border-t border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            {/* Informações do Solicitante */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <User className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-xs text-gray-500 font-medium">Solicitante</p>
                  <p className="text-sm text-gray-800">{solicitation.nome_solicitante}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-xs text-gray-500 font-medium">Setor</p>
                  <p className="text-sm text-gray-800">{solicitation.setor_solicitante}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-xs text-gray-500 font-medium">Unidade</p>
                  <p className="text-sm text-gray-800">{solicitation.unidade}</p>
                </div>
              </div>
            </div>

            {/* Informações do Serviço */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="text-green-600 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-xs text-gray-500 font-medium">Local do Serviço</p>
                  <p className="text-sm text-gray-800">{solicitation.local_servico}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Wrench className="text-green-600 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-xs text-gray-500 font-medium">Tipo de Manutenção</p>
                  <p className="text-sm text-gray-800">{solicitation.tipo_manutencao}</p>
                </div>
              </div>

              {solicitation.data_criacao && (
                <div className="flex items-start gap-3">
                  <Calendar className="text-green-600 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Data de Criação</p>
                    <p className="text-sm text-gray-800">{formatDate(solicitation.data_criacao)}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Descrição do Problema */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-start gap-3">
              <FileText className="text-purple-600 mt-1 flex-shrink-0" size={18} />
              <div className="flex-1">
                <p className="text-xs text-gray-500 font-medium mb-1">Descrição do Problema</p>
                <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-wrap">
                  {solicitation.descricao_problema}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
