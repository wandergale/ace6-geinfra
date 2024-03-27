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

function Solicitations() {

  const navigate = useNavigate();

  const goBack = () => navigate('/');

  const handleSaveClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Não conectado ao servidor. \nA funcionalidade ainda não está disponível!')
  }

  return (
    <main className="container">
      <nav className="py-4">
        <NavBreadcrumb/>
      </nav>

      <h1 className="text-5xl font-bold text-heading my-8">
        Nova Solicitação
      </h1>

      <form onSubmit={(e) => handleSaveClick(e)} className="mt-8">
        <div className="flex mb-4 gap-x-10">
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
        <div className="flex mb-4 gap-x-10">
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
        <section className="flex items-stretch my-10">
          <div className="w-full">
            <RadioGroupComponent
              label="Tipo de Serviço (*)"
              items={['Elétrico', 'Hidráulico', 'Refrigeração', 'Pintura', 'Outro']}
            />
            {/* TODO: Add verification here to display field only when 'outro' is selected */}
            <Input
              placeholder="Outro..."
              className="w-1/2 mt-3"
            />
          </div>
          <span className="bg-[#C4C4C4] w-0.5 mx-10"/>
          <div className="w-full">
            <RadioGroupComponent
              label="Tipo de Manutenção (*)"
              items={['Corretiva', 'Preventiva', 'Melhoria']}
            />
          </div>
        </section>


        <TextAreaComponent
          label="Descrição do problema (*)"
          placeholder="Descrição do problema..."
        />

        <footer className="flex justify-between items-center py-10">
          <Button
            variant="ghost"
            size="icon"
            type="button"
            onClick={goBack}
          >
            <FaAngleLeft
              className="cursor-pointer"
              size={40}
              color="#374957"
            />
          </Button>
          <Button
            className="bg-primary-blue h-14 font-bold px-20"
            type="submit"
          >
            Salvar
          </Button>
        </footer>
      </form>
    </main>
  )
}

export default Solicitations
