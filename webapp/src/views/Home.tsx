import { Link } from "react-router-dom";
import './ufal-styles.css'
import logo from './ufal-logo.png'

function Home() {

  return (
    <div className="min-h-screen gb-gray-50">
      <header className="bg-ufal-blue shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={logo}
              alt="Logo UFAL"
              className="h-12 w-auto"
            />
            <div className="text-white">
              <h2 className="text-lg font-semibold">Universidade Federal de Alagoas</h2>
              <p className="text-sm opacity-90">Sistema GEINFRA</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-ufal-blue mb-4">
            GEINFRA
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Sistema de Gestão de Infraestrutura da UFAL
          </p>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-ufal-blue mb-6">
              Solicitações
            </h2>
            <nav className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                to="/solicitations"
                className="group bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-lg p-6 transition-all duration-300 shadow-md hover:shadow-xl border border-blue-200"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-ufal-blue text-white rounded-full p-4 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Nova Solicitação
                  </h3>
                  <p className="text-sm text-gray-600">
                    Criar uma nova solicitação de serviço
                  </p>
                </div>
              </Link>

              <Link
                to="/dashboard"
                className="group bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 rounded-lg p-6 transition-all duration-300 shadow-md hover:shadow-xl border border-green-200"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-green-600 text-white rounded-full p-4 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Ver Solicitações
                  </h3>
                  <p className="text-sm text-gray-600">
                    Visualizar todas as solicitações registradas
                  </p>
                </div>
              </Link>
            </nav>
          </div>
        </div>
      </main>

    </div>
  )
}

export default Home
