import InputComponent from "@/components/InputComponent"
import NavBreadcrumb from "@/components/NavBreadcrumb"
import RadioGroupComponent from "@/components/RadioGroupComponent"
import SelectComponent from "@/components/Select"
import TextAreaComponent from "@/components/TextAreaComponent"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FormEvent } from "react"
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import './ufal-styles.css'
import logo from './ufal-logo.png'

function Solicitations() {

  const navigate = useNavigate();

  const goBack = () => navigate('/');

  const handleSaveClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Não conectado ao servidor. \nA funcionalidade ainda não está disponível!')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-ufal-blue shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src={logo} 
              alt="Logo UFAL" 
              className="h-12 w-auto ufal-logo"
            />
            <div className="text-white">
              <h2 className="text-lg font-semibold">Universidade Federal de Alagoas</h2>
              <p className="text-sm opacity-90">Sistema GEINFRA</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 fade-in">
        <nav className="py-4">
          <NavBreadcrumb/>
        </nav>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-5xl font-bold text-ufal-blue mb-8 text-center">
            Nova Solicitação
          </h1>

          <form onSubmit={(e) => handleSaveClick(e)} className="mt-8">
            <div className="flex mb-6 gap-x-10">
              <InputComponent
                label="Nome do Solicitante (*)"
                placeholder="Nome do solicitante"
                className="basis-2/3"
              />
              <SelectComponent
                label="Setor do Solicitante (*)"
                placeholder="Setor"
                items={['Setor A', 'Setor B', 'Setor C', 'Setor D']}
                className="basis-1/3"
              />
            </div>
            <div className="flex mb-6 gap-x-10">
              <span className="flex gap-x-10 basis-2/3">
                <SelectComponent
                  label="Unidade (*)"
                  placeholder="Unidade"
                  items={['Campus Arapiraca', 'Polo Palmeira', 'Polo Penedo']}
                />
                <InputComponent
                  label="Local do serviço (*)"
                  placeholder="Local do serviço"
                />
              </span>
              <InputComponent
                label="Data da Solicitação"
                placeholder="00/00/0000 às 00:00h"
                className=" basis-1/3"
                readOnly
              />
            </div>
            
            <section className="flex items-stretch my-10 bg-ufal-gray-light rounded-lg p-6">
              <div className="w-full">
                <RadioGroupComponent
                  label="Tipo de Serviço (*)"
                  items={['Elétrico', 'Hidráulico', 'Refrigeração', 'Pintura', 'Outro']}
                />
                <Input
                  placeholder="Outro..."
                  className="w-1/2 mt-3"
                />
              </div>
              <span className="bg-ufal-blue w-0.5 mx-10 opacity-30"/>
              <div className="w-full">
                <RadioGroupComponent
                  label="Tipo de Manutenção (*)"
                  items={['Corretiva', 'Preventiva', 'Melhoria']}
                />
              </div>
            </section>

            <div className="mb-8">
              <TextAreaComponent
                label="Descrição do problema (*)"
                placeholder="Descrição do problema..."
              />
            </div>

            <footer className="flex justify-between items-center py-6 border-t border-gray-200">
              <Button
                variant="ghost"
                size="icon"
                type="button"
                onClick={goBack}
                className="geinfra-button hover:bg-gray-100"
              >
                <FaAngleLeft
                  className="cursor-pointer"
                  size={40}
                  color="var(--ufal-blue)"
                />
              </Button>
              <Button
                className="bg-ufal-blue hover:bg-ufal-blue-dark h-14 font-bold px-20 text-white geinfra-button"
                type="submit"
              >
                Salvar
              </Button>
            </footer>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Solicitations