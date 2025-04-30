import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cabecalho: React.FC = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full p-4 bg-[#0A0F1B] bg-opacity-80 z-10">
      <nav className="flex justify-between items-center w-full sm:w-[90%] mx-auto">
        <h1 className="text-xl font-bold text-[#F5F5F5]">Bomfimdev</h1>
        <button
          className="md:hidden text-[#F5F5F5] focus:outline-none"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuAberto ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        <ul className={`md:flex md:space-x-6 ${menuAberto ? 'block' : 'hidden'} md:block absolute md:static top-16 left-0 right-0 bg-[#0A0F1B] md:bg-transparent p-4 md:p-0`}>
          <li className="md:inline-block"><Link to="/" className="block py-2 md:py-0 text-[#F5F5F5] hover:text-[#3381D9] font-medium">Início</Link></li>
          <li className="md:inline-block"><Link to="/sobre" className="block py-2 md:py-0 text-[#F5F5F5] hover:text-[#3381D9] font-medium">Sobre</Link></li>
          <li className="md:inline-block"><Link to="/projetos" className="block py-2 md:py-0 text-[#F5F5F5] hover:text-[#3381D9] font-medium">Projetos</Link></li>
          <li className="md:inline-block"><Link to="/contato" className="block py-2 md:py-0 text-[#F5F5F5] hover:text-[#3381D9] font-medium">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Cabecalho;