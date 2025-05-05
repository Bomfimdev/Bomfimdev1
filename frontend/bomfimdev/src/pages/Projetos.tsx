import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CartaoProjeto from '../components/CartaoProjeto';

interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  tecnologia?: string;
  imagem?: string;
  link?: string;
}

const BASE_URL = process.env.REACT_APP_API_URL || 'https://bomfimdev.onrender.com';

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
    <section className="w-full sm:w-[90%] mx-auto p-4 sm:p-6 pt-72 pb-20 relative z-0">
      <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center text-white">Meus Projetos</h2>
      <p className="text-center text-sm text-[#E2E8F0] mb-8">Confira alguns dos projetos que desenvolvi</p>
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
              link={projeto.link}
            />
          ))
        ) : (
          <p className="text-base sm:text-lg text-center text-[#CBD5E1]">Nenhum projeto encontrado.</p>
        )}
      </div>
    </section>
  );
};

export default Projetos;