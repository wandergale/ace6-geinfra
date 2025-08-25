import { Link } from "react-router-dom";

function Home() {

  return (
    <div className="min-h-screen gb-gray-50">
      <header className="bg-ufal-blue shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="/logo-ufal.png" 
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

            <Link 
              to="/solicitations">
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <h2 className="text-2xl font-semibold text-ufal-blue mb-6 col-span-full text-center">
                      Solicitações
                    </h2>
                </nav>
              </div>
            </Link>
        </div>
      </main>

    </div>
  )
}

export default Home
