# Portal GEINFRA

O objetivo do projeto é desenvolver um sistema que auxilie a equipe da Gestão de Infraestrutura (GEINFRA) no monitoramento dos chamados de serviços relacionados a infraestrutura do campus. Através dele, alunos, servidores e demais frequentadores do campus poderão solicitar serviços e acompanhar o requerimento. Também, a própria equipe GEINFRA conseguirá acompanhar melhor os chamados e coordenar de maneira mais adequada sua equipe técnica. 

## Backend
### 📋 Pré-requisitos
Precisa ter o Python instalado em sua máquina. Para instalá-lo, você pode seguir as instruções disponíveis [aqui](https://www.python.org/downloads/).

### 🚀 Executando
1. Clone o repositório
```bash
git clone https://github.com/cpt-ufal-arapiraca/ace6-geinfra.git
```
2. Nagegue até a pasta backend
```bash
cd backend
```
3. Crie um ambiente virtual:
```bash
python3 -m venv .env
```
Pode-se usar o comando `python` caso seja o Python 2 instalado. <br>
Caso não tenha o módulo venv instalado, pode ser instalado pelo comando informado no erro e executar o comando acima novamente. <br><br>

4. Ative o ambiente virtual:
```bash
source .env/Scripts/activate
```
5. Navegue até a pasta backend
```bash
cd backend
```
6. Instale os requirements:
```bash
pip install -r requirements.txt
```
7. Navegue até a pasta api
```bash
cd api
```

8. Rode o comando a seguir para inicializar o projeto:
```bash
py manage.py runserver #Ou python manage.py runserver # no linux e Mac
```

9. Acesse o endereço http://localhost:8000/solicitacoes/ no navegador <br>
Deve ser possível visualizar a seguinte mensagem: "Hello, world. You're at the polls index."

## Webapp
### 📋 Pré-requisitos
Precisa ter um gerenciador de dependências instalado em sua máquina para poder rodar o projeto, seja o **npm** ou o **yarn**.<br>
Caso opte pelo **NPM**, você pode seguir as instruções disponíveis [aqui](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) para instalá-lo.<br>
Caso opte pelo **YARN**, você pode seguir as instruções disponíveis [aqui](https://classic.yarnpkg.com/lang/en/docs/install) para instalá-lo.

### 🚀 Executando
1. Caso não o tenha feito ainda, clone o repositório
```bash
git clone https://github.com/cpt-ufal-arapiraca/ace6-geinfra.git
```
2. Entre no diretório do projeto e nagegue até a pasta webapp
```bash
cd webapp
```
3. Instale as dependências do projeto, utilizando um dos seguintes comandos:
```bash
npm install
```
ou
```bash
yarn
```
4. Execute o projeto
```bash
npm run dev
```
ou
```bash
yarn run dev
```
5. Acesse o endereço http://localhost:5173 no navegador <br>
Deve ser possível visualizar a aplicação em execução.


## ⚙️ Executando os testes

Os testes ainda não foram implementados à aplicação...


## 🛠️ Construído com

* [React.js](https://react.dev/) - Biblioteca web frontend
* [Shadcn/ui](https://ui.shadcn.com/) - Biblioteca de construção de componentes web
* [Tailwind](https://tailwindcss.com/docs/installation) - Biblioteca de estilização de componentes frontend
* [Vite.js](https://vitejs.dev/guide/) - Ferramenta de auxílio à construção do projeto frontend
* [Django/Python](https://www.djangoproject.com/) - Framework backend
* [SQLite](https://www.sqlite.org/) - Banco de dados relacional utilizado

Ainda em desenvolvimento...

## ✒️ Autores
* **Wanderson Costa Oliveira** - *Desenvolvimento Full Stack*
* **Cayo Nikolas Ferreira Santos** - *Gerência e documentação*
* **Francisco Racklyn Sotero dos Santos** - *Desenvolvimento frontend*
* **Lucas Barbosa Leite Silva** - *Desenvolvimento backend*

Você também pode ver a lista de todos os [colaboradores](https://github.com/usuario/projeto/colaboradores) que participaram deste projeto.
