import React from 'react';
import { Link } from 'react-router-dom';

const PaginaInicial: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 pt-20">
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <p className="text-sm text-blue-400 mb-2">Bem-vindo ao Bomfimdev</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
          Olá, sou Gabriel Bomfim, Desenvolvedor Web
        </h1>
        <p className="text-base sm:text-lg text-gray-300 mb-6">
          Desenvolvo soluções modernas e eficientes para web, com foco em performance e usabilidade.
        </p>
        <Link to="/sobre" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-400 text-sm sm:text-base">
          Saiba Mais Sobre Mim
        </Link>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img 
          src="/imagens/Perfil.jpeg" 
          alt="Foto de Perfil de Bomfim" 
          className="w-64 h-64 sm:w-80 sm:h-80 rounded-lg object-cover shadow-lg"
        />
      </div>
    </section>
  );
};

export default PaginaInicial;