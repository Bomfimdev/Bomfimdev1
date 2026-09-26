import { BrowserRouter as Roteador, Route as Rota, Routes as Rotas } from 'react-router-dom';
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';
import Inicio from './pages/Inicio';
import PaginaNicho from './pages/PaginaNicho';
import './styles/global.css';

function App() {
  return (
    <Roteador>
      <div className="flex min-h-screen flex-col bg-dark-950">
        <Cabecalho />
        <main className="flex-grow">
          <Rotas>
            <Rota path="/" element={<Inicio />} />
            <Rota path="/:slug" element={<PaginaNicho />} />
          </Rotas>
        </main>
        <Rodape />
      </div>
    </Roteador>
  );
}

export default App;
