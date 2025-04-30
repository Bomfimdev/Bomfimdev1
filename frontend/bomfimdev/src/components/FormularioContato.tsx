import React, { useState } from 'react';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

const FormularioContato: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`${BASE_URL}/api/contato`, {
        nome,
        email,
        mensagem,
      });
      setStatus('Mensagem enviada com sucesso!');
      setNome('');
      setEmail('');
      setMensagem('');
    } catch (error) {
      setStatus('Erro ao enviar mensagem. Tente novamente.');
      console.error('Erro ao enviar mensagem:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-lg mx-auto bg-[#1C2526] p-6 rounded-lg shadow-lg">
      <div>
        <label htmlFor="nome" className="block text-sm font-medium text-[#F5F5F5] mb-1">Nome</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="w-full p-3 bg-[#2A3B3C] rounded text-[#F5F5F5] text-sm border border-[#2A3B3C] focus:border-[#005DC4] focus:outline-none"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[#F5F5F5] mb-1">E-mail</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 bg-[#2A3B3C] rounded text-[#F5F5F5] text-sm border border-[#2A3B3C] focus:border-[#005DC4] focus:outline-none"
          required
        />
      </div>
      <div>
        <label htmlFor="mensagem" className="block text-sm font-medium text-[#F5F5F5] mb-1">Mensagem</label>
        <textarea
          id="mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          className="w-full p-3 bg-[#2A3B3C] rounded text-[#F5F5F5] text-sm border border-[#2A3B3C] focus:border-[#005DC4] focus:outline-none"
          rows={4}
          required
        />
      </div>
      <button type="submit" className="bg-[#005DC4] text-[#F5F5F5] px-6 py-3 rounded-full hover:bg-[#3381D9] text-sm sm:text-base transition-all">
        Enviar Mensagem
      </button>
      {status && <p className="text-center text-sm text-[#B0BEC5] mt-4">{status}</p>}
    </form>
  );
};

export default FormularioContato;