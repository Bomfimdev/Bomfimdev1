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
            {FaLinkedin({ className: "text-[#005DC4] hover:text-[#0D3CD1] text-3xl" })}
          </a>
          <a href="https://github.com/Bomfimdev" target="_blank" rel="noopener noreferrer">
            {FaGithub({ className: "text-[#005DC4] hover:text-[#0D3CD1] text-3xl" })}
          </a>
        </div>
        {/* Links de Navegação */}
        <div className="flex justify-center space-x-6 mb-4">
          <Link to="/" className="text-[#005DC4] hover:text-[#0D3CD1] text-sm">
            Home
          </Link>
          <Link to="/projetos" className="text-[#005DC4] hover:text-[#0D3CD1] text-sm">
            Portfolio
          </Link>
          <Link to="/sobre" className="text-[#005DC4] hover:text-[#0D3CD1] text-sm">
            Sobre
          </Link>
          <Link to="/contato" className="text-[#005DC4] hover:text-[#0D3CD1] text-sm">
            Contato
          </Link>
        </div>
        {/* Copyright */}
        <p className="text-[#B0BEC5] text-sm">© 2025 Bomfimdev. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Rodape;