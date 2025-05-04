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
    return <div className="text-center text-[#F5F5F5] p-20">Carregando...</div>;
  }

  return (
    <section className="w-full sm:w-[90%] mx-auto p-4 sm:p-6 pt-36 pb-20">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-[#F5F5F5]">{projeto.titulo}</h2>
      <div className="bg-[#142A5A] p-6 rounded-lg shadow-lg">
        {projeto.imagem && (
          <img
            src={projeto.imagem}
            alt={projeto.titulo}
            className="w-full h-64 object-cover rounded-lg mb-6"
            loading="lazy"
          />
        )}
        <p className="text-[#B0BEC5] text-sm mb-4">{projeto.descricao}</p>
        <p className="text-[#005DC4] text-sm mb-6">Tecnologia: {projeto.tecnologia || 'Desconhecida'}</p>
        <div className="text-center">
          <Link
            to="/projetos"
            className="inline-block bg-[#005DC4] text-[#F5F5F5] px-6 py-3 rounded-full hover:bg-[#0D3CD1] text-sm sm:text-base transition-all"
          >
            Voltar para Projetos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DetalhesProjeto;