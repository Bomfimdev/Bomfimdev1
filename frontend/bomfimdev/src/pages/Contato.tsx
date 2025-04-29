import React from 'react';
import FormularioContato from '../components/FormularioContato';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contato: React.FC = () => {
  return (
    <section className="w-full sm:w-[90%] mx-auto p-4 sm:p-6 py-20">
      <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center text-white">Entre em Contato</h2>
      <p className="text-sm text-blue-400 mb-8 text-center">Entre em contato comigo para discutir seu projeto!</p>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Seção Contact Info */}
        <div className="md:w-1/3 bg-gray-800 p-6 rounded-lg shadow-lg text-left">
          <h3 className="text-lg font-semibold text-blue-400 mb-4">Informações de Contato</h3>
          <div className="space-y-4">
            <div>
              <p className="text-gray-300 text-sm font-semibold">E-mail</p>
              <p className="text-gray-400 text-sm">gbomfimprofissional@gmail.com</p>
            </div>
            <div>
              <p className="text-gray-300 text-sm font-semibold">Telefone</p>
              <p className="text-gray-400 text-sm">(61) 99690-7894</p>
            </div>
            <div>
              <p className="text-gray-300 text-sm font-semibold">Localização</p>
              <p className="text-gray-400 text-sm">Brasília, DF, Brasil</p>
            </div>
            <div>
              <p className="text-gray-300 text-sm font-semibold mb-2">Redes Sociais</p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/gabriel-bomfim-oliveira/" target="_blank" rel="noopener noreferrer">
                  {FaLinkedin({ className: "text-blue-300 hover:text-blue-200 text-2xl" })}
                </a>
                <a href="https://github.com/Bomfimdev" target="_blank" rel="noopener noreferrer">
                  {FaGithub({ className: "text-blue-300 hover:text-blue-200 text-2xl" })}
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Formulário */}
        <div className="md:w-2/3">
          <FormularioContato />
        </div>
      </div>
    </section>
  );
};

export default Contato;