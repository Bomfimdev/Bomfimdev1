import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  tecnologia?: string;
  imagem?: string;
  link?: string;
}

const BASE_URL = process.env.REACT_APP_API_URL || 'https://bomfimdev.onrender.com';

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
    return <div className="text-center text-[#F1F5F9] p-20">Carregando...</div>;
  }

  return (
    <section className="w-full sm:w-[90%] mx-auto p-4 sm:p-6 pt-72 pb-20 relative z-0">
      <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center text-white">{projeto.titulo}</h2>
      <p className="text-center text-sm text-[#E2E8F0] mb-8">Detalhes do projeto selecionado</p>
      <div className="bg-[#1F2A44] p-6 rounded-lg shadow-lg">
        {projeto.imagem && (
          <img
            src={projeto.imagem}
            alt={projeto.titulo}
            className="w-full h-64 object-cover rounded-lg mb-6"
            loading="lazy"
          />
        )}
        <p className="text-[#CBD5E1] text-sm mb-4">{projeto.descricao}</p>
        <p className="text-[#1E3A8A] text-sm mb-4">Tecnologia: {projeto.tecnologia || 'Desconhecida'}</p>
        {projeto.link && (
          <p className="text-[#1E3A8A] text-sm mb-6">
            <a href={projeto.link} target="_blank" rel="noopener noreferrer" className="hover:text-[#3B82F6]">
              Ver Projeto
            </a>
          </p>
        )}
        <div className="text-center">
          <Link
            to="/projetos"
            className="inline-block bg-[#1E3A8A] text-[#F1F5F9] px-6 py-3 rounded-full hover:bg-[#3B82F6] text-sm sm:text-base transition-all"
          >
            Voltar para Projetos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DetalhesProjeto;