import React, { useState } from 'react';
import axios from 'axios';

const FormularioContato: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/contato', {
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
      <div>
        <label htmlFor="nome" className="block text-sm font-medium text-white mb-1">Nome</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="w-full p-3 bg-gray-700 rounded text-white text-sm border border-gray-600 focus:border-blue-400 focus:outline-none"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white mb-1">E-mail</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 bg-gray-700 rounded text-white text-sm border border-gray-600 focus:border-blue-400 focus:outline-none"
          required
        />
      </div>
      <div>
        <label htmlFor="mensagem" className="block text-sm font-medium text-white mb-1">Mensagem</label>
        <textarea
          id="mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          className="w-full p-3 bg-gray-700 rounded text-white text-sm border border-gray-600 focus:border-blue-400 focus:outline-none"
          rows={4}
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-400 text-sm sm:text-base">
        Enviar Mensagem
      </button>
      {status && <p className="text-center text-sm text-gray-300 mt-4">{status}</p>}
    </form>
  );
};

export default FormularioContato;