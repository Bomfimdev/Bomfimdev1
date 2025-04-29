import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CartaoProjeto from '../components/CartaoProjeto';

interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  tecnologia?: string;
  imagem?: string;
}

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

const Projetos: React.FC = () => {
  const [projetos, setProjetos] = useState<Projeto[]>([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/projetos`)
      .then(response => {
        console.log('Projetos recebidos:', response.data);
        setProjetos(response.data);
      })
      .catch(error => console.error('Erro ao buscar projetos:', error));
  }, []);

  return (
    <section className="w-full sm:w-[90%] mx-auto p-4 sm:p-6 py-20">
      <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center text-white">Meus Projetos</h2>
      <p className="text-center text-sm text-blue-400 mb-8">Confira alguns dos projetos que desenvolvi</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projetos.length > 0 ? (
          projetos.map(projeto => (
            <CartaoProjeto
              key={projeto.id}
              id={projeto.id}
              titulo={projeto.titulo}
              descricao={projeto.descricao}
              tecnologia={projeto.tecnologia}
              imagem={projeto.imagem}
            />
          ))
        ) : (
          <p className="text-base sm:text-lg text-center text-gray-300">Nenhum projeto encontrado.</p>
        )}
      </div>
    </section>
  );
};

export default Projetos;