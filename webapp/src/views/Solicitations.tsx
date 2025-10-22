import InputComponent from "@/components/InputComponent"
import NavBreadcrumb from "@/components/NavBreadcrumb"
import RadioGroupComponent from "@/components/RadioGroupComponent"
import SelectComponent from "@/components/Select"
import TextAreaComponent from "@/components/TextAreaComponent"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FormEvent, useState } from "react"
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import './ufal-styles.css'
import logo from './ufal-logo.png'

interface SolicitacaoData {
  nome_solicitante: string;
  setor_solicitante: string;
  unidade: string;
  local_servico: string;
  tipo_servico: string;
  outro_servico?: string;
  tipo_manutencao: string;
  descricao_problema: string;
}

function Solicitations() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<SolicitacaoData>({
    nome_solicitante: '',
    setor_solicitante: '',
    unidade: '',
    local_servico: '',
    tipo_servico: '',
    outro_servico: '',
    tipo_manutencao: '',
    descricao_problema: ''
  });

  const goBack = () => navigate('/');

  const handleInputChange = (field: keyof SolicitacaoData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveClick = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const requiredFields: (keyof SolicitacaoData)[] = [
      'nome_solicitante', 'setor_solicitante', 'unidade', 
      'local_servico', 'tipo_servico', 'tipo_manutencao', 'descricao_problema'
    ];
    
    const emptyFields = requiredFields.filter(field => !formData[field]);
    
    if (emptyFields.length > 0) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await fetch('http://127.0.0.1:8000/solicitacoes/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert('Solicitação criada com sucesso!');
        console.log('Solicitação salva:', data);
        
        setFormData({
          nome_solicitante: '',
          setor_solicitante: '',
          unidade: '',
          local_servico: '',
          tipo_servico: '',
          outro_servico: '',
          tipo_manutencao: '',
          descricao_problema: ''
        });
        
      } else {
        const errorData = await response.json();
        console.error('Erro ao criar solicitação:', errorData);
        alert('Erro ao criar solicitação. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Erro de rede:', error);
      alert('Erro de conexão. Verifique se o servidor está rodando.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-ufal-blue shadow-md">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center sm:justify-between gap-4 sm:gap-0">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <img 
              src={logo} 
              alt="Logo UFAL" 
              className="h-10 sm:h-12 w-auto ufal-logo"
            />
            <div className="text-white text-center sm:text-left">
              <h2 className="text-base sm:text-lg font-semibold">Universidade Federal de Alagoas</h2>
              <p className="text-xs sm:text-sm opacity-90">Sistema GEINFRA</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-1 fade-in">
        <nav className="py-2">
          <NavBreadcrumb/>
        </nav>

        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-ufal-blue mb-6 sm:mb-8 text-center">
            Nova Solicitação
          </h1>

          <form onSubmit={(e) => handleSaveClick(e)} className="mt-8">
            {/* Nome e Setor - Stack em mobile, lado a lado em desktop */}
            <div className="flex flex-col lg:flex-row mb-6 gap-6 lg:gap-10">
              <InputComponent
                label="Nome do Solicitante (*)"
                placeholder="Nome do solicitante"
                className="w-full lg:basis-2/3"
                value={formData.nome_solicitante}
                onChange={(value) => handleInputChange('nome_solicitante', value)}
              />
              <SelectComponent
                label="Setor do Solicitante (*)"
                placeholder="Setor"
                items={['Setor A', 'Setor B', 'Setor C', 'Setor D']}
                className="w-full lg:basis-1/3"
                value={formData.setor_solicitante}
                onChange={(value) => handleInputChange('setor_solicitante', value)}
              />
            </div>

            {/* Unidade, Local e Data */}
            <div className="flex flex-col lg:flex-row mb-6 gap-6 lg:gap-10">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 w-full lg:basis-2/3">
                <SelectComponent
                  label="Unidade (*)"
                  placeholder="Unidade"
                  items={['Campus Arapiraca', 'Polo Palmeira', 'Polo Penedo']}
                  className="w-full"
                  value={formData.unidade}
                  onChange={(value) => handleInputChange('unidade', value)}
                />
                <InputComponent
                  label="Local do serviço (*)"
                  placeholder="Local do serviço"
                  className="w-full"
                  value={formData.local_servico}
                  onChange={(value) => handleInputChange('local_servico', value)}
                />
              </div>
              <InputComponent
                label="Data da Solicitação"
                placeholder={new Date().toLocaleString('pt-BR')}
                className="w-full lg:basis-1/3"
                readOnly
              />
            </div>
            
            {/* Radio Groups - Stack em mobile e tablet, lado a lado em desktop */}
            <section className="flex flex-col lg:flex-row items-stretch my-10 bg-ufal-gray-light rounded-lg p-4 sm:p-6 gap-6 lg:gap-0">
              <div className="w-full">
                <RadioGroupComponent
                  label="Tipo de Serviço (*)"
                  items={['Elétrico', 'Hidráulico', 'Refrigeração', 'Pintura', 'Outro']}
                  value={formData.tipo_servico}
                  onChange={(value) => handleInputChange('tipo_servico', value)}
                />
                {formData.tipo_servico === 'Outro' && (
                  <Input
                    placeholder="Especifique o tipo de serviço..."
                    className="w-full sm:w-3/4 lg:w-1/2 mt-3"
                    value={formData.outro_servico || ''}
                    onChange={(e) => handleInputChange('outro_servico', e.target.value)}
                  />
                )}
              </div>
              
              {/* Separador - Horizontal em mobile, vertical em desktop */}
              <div className="bg-ufal-blue h-px lg:h-auto lg:w-0.5 mx-0 lg:mx-10 opacity-30"/>
              
              <div className="w-full">
                <RadioGroupComponent
                  label="Tipo de Manutenção (*)"
                  items={['Corretiva', 'Preventiva', 'Melhoria']}
                  value={formData.tipo_manutencao}
                  onChange={(value) => handleInputChange('tipo_manutencao', value)}
                />
              </div>
            </section>

            <div className="mb-8">
              <TextAreaComponent
                label="Descrição do problema (*)"
                placeholder="Descrição do problema..."
                value={formData.descricao_problema}
                onChange={(value) => handleInputChange('descricao_problema', value)}
              />
            </div>

            {/* Footer responsivo */}
            <footer className="flex flex-col sm:flex-row justify-between items-center py-6 border-t border-gray-200 gap-4 sm:gap-0">
              <Button
                variant="ghost"
                size="icon"
                type="button"
                onClick={goBack}
                className="geinfra-button hover:bg-gray-100 order-2 sm:order-1"
                disabled={isLoading}
              >
                <FaAngleLeft
                  className="cursor-pointer"
                  size={32}
                  color="var(--ufal-blue)"
                />
              </Button>
              <Button
                className="bg-ufal-blue hover:bg-ufal-blue-dark h-12 sm:h-14 font-bold px-12 sm:px-20 text-white geinfra-button w-full sm:w-auto order-1 sm:order-2"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? 'Enviando...' : 'Enviar'}
              </Button>
            </footer>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Solicitations