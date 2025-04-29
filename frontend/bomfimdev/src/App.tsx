import { BrowserRouter as Roteador, Routes as Rotas, Route as Rota } from 'react-router-dom';
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';
import PaginaInicial from './pages/PaginaInicial';
import Sobre from './pages/Sobre';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';
import './styles/global.css';

function App() {
  return (
    <Roteador>
      <div className="flex flex-col min-h-screen">
        <Cabecalho />
        <main className="flex-grow">
          <Rotas>
            <Rota path="/" element={<PaginaInicial />} />
            <Rota path="/sobre" element={<Sobre />} />
            <Rota path="/projetos" element={<Projetos />} />
            <Rota path="/contato" element={<Contato />} />
          </Rotas>
        </main>
        <Rodape />
      </div>
    </Roteador>
  );
}

export default App;