import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  tecnologia?: string;
  imagem?: string;
}

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

const DetalhesProjeto: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [projeto, setProjeto] = useState<Projeto | null>(null);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/projetos/${id}`)
      .then(response => {
        console.log('Projeto recebido:', response.data);
        setProjeto(response.data);
      })
      .catch(error => console.error('Erro ao buscar projeto:', error));
  }, [id]);

  if (!projeto) {
    return <div className="text-center text-white p-20">Carregando...</div>;
  }

  return (
    <section className="w-full sm:w-[90%] mx-auto p-4 sm:p-6 py-20">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-white">{projeto.titulo}</h2>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        {projeto.imagem && (
          <img
            src={projeto.imagem}
            alt={projeto.titulo}
            className="w-full h-64 object-cover rounded-lg mb-6"
            loading="lazy"
          />
        )}
        <p className="text-gray-300 text-sm mb-4">{projeto.descricao}</p>
        <p className="text-blue-400 text-sm mb-6">Tecnologia: {projeto.tecnologia || 'Desconhecida'}</p>
        <div className="text-center">
          <Link
            to="/projetos"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-400 text-sm sm:text-base"
          >
            Voltar para Projetos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DetalhesProjeto;