import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Rodape: React.FC = () => {
  return (
    <footer className="bg-transparent p-6 text-center w-full">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://www.linkedin.com/in/gabriel-bomfim-oliveira/" target="_blank" rel="noopener noreferrer">
            {FaLinkedin({ className: "text-[#1E3A8A] hover:text-[#3B82F6] text-3xl" })}
          </a>
          <a href="https://github.com/Bomfimdev" target="_blank" rel="noopener noreferrer">
            {FaGithub({ className: "text-[#1E3A8A] hover:text-[#3B82F6] text-3xl" })}
          </a>
        </div>
        <div className="flex justify-center space-x-6 mb-4">
          <Link to="/" className="text-[#1E3A8A] hover:text-[#3B82F6] text-sm">
            Home
          </Link>
          <Link to="/projetos" className="text-[#1E3A8A] hover:text-[#3B82F6] text-sm">
            Portfolio
          </Link>
          <Link to="/sobre" className="text-[#1E3A8A] hover:text-[#3B82F6] text-sm">
            Sobre
          </Link>
          <Link to="/contato" className="text-[#1E3A8A] hover:text-[#3B82F6] text-sm">
            Contato
          </Link>
        </div>
        <p className="text-[#CBD5E1] text-sm">© 2025 Bomfimdev. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Rodape;