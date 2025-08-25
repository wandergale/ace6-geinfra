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

    </div>
  )
}

export default Home
