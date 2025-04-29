import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Rodape: React.FC = () => {
  return (
    <footer className="bg-transparent p-6 text-center w-full">
      <div className="max-w-5xl mx-auto">
        {/* Ícones de Redes Sociais */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://www.linkedin.com/in/gabriel-bomfim-oliveira/" target="_blank" rel="noopener noreferrer">
            {FaLinkedin({ className: "text-blue-300 hover:text-blue-200 text-3xl" })}
          </a>
          <a href="https://github.com/Bomfimdev" target="_blank" rel="noopener noreferrer">
            {FaGithub({ className: "text-blue-300 hover:text-blue-200 text-3xl" })}
          </a>
        </div>
        {/* Links de Navegação */}
        <div className="flex justify-center space-x-6 mb-4">
          <Link to="/" className="text-blue-400 hover:text-blue-300 text-sm">
            Home
          </Link>
          <Link to="/projetos" className="text-blue-400 hover:text-blue-300 text-sm">
            Portfolio
          </Link>
          <Link to="/sobre" className="text-blue-400 hover:text-blue-300 text-sm">
            Sobre
          </Link>
          <Link to="/contato" className="text-blue-400 hover:text-blue-300 text-sm">
            Contato
          </Link>
        </div>
        {/* Copyright */}
        <p className="text-gray-300 text-sm">© 2025 Bomfimdev. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Rodape;