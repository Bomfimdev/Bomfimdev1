import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Button } from './ui/Button';

const BASE_URL = process.env.REACT_APP_API_URL || 'https://bomfimdev.onrender.com';

const FormularioContato = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [servico, setServico] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const texto = [
      empresa.trim() && `Empresa: ${empresa.trim()}`,
      servico.trim() && `Serviço: ${servico.trim()}`,
      mensagem.trim(),
    ]
      .filter(Boolean)
      .join('\n\n');

    try {
      await axios.post(`${BASE_URL}/api/contato`, {
        nome: nome.trim(),
        email: email.trim(),
        mensagem: texto,
      });
      setStatus('success');
      setNome('');
      setEmail('');
      setEmpresa('');
      setServico('');
      setMensagem('');
    } catch (error) {
      setStatus('error');
      console.error('Erro ao enviar:', error);
    }
  };

  const inputClass = `
    w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg
    text-white placeholder-light-500
    focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none
    transition-colors
  `;

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-dark-800/50 border border-dark-600/50 rounded-2xl p-6 sm:p-8 backdrop-blur-sm"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-light-300 mb-2">
            Seu nome *
          </label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Como posso te chamar?"
            className={inputClass}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-light-300 mb-2">
            E-mail *
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
            className={inputClass}
            required
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 mt-5">
        <div>
          <label htmlFor="empresa" className="block text-sm font-medium text-light-300 mb-2">
            Empresa / Negócio
          </label>
          <input
            id="empresa"
            type="text"
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
            placeholder="Nome da sua empresa"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="servico" className="block text-sm font-medium text-light-300 mb-2">
            O que você precisa?
          </label>
          <select
            id="servico"
            value={servico}
            onChange={(e) => setServico(e.target.value)}
            className={inputClass}
          >
            <option value="">Selecione...</option>
            <option value="Site Institucional">Site Institucional</option>
            <option value="Landing Page">Landing Page</option>
            <option value="Sistema Web">Sistema Web / Software</option>
            <option value="E-commerce">E-commerce / Loja Virtual</option>
            <option value="Redesign">Redesign de site existente</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="mensagem" className="block text-sm font-medium text-light-300 mb-2">
          Conte mais sobre o projeto *
        </label>
        <textarea
          id="mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          placeholder="Qual o problema que você quer resolver? Qual o objetivo do site/sistema?"
          rows={4}
          className={inputClass}
          required
        />
      </div>

      <Button
        type="submit"
        disabled={status === 'loading'}
        size="lg"
        className="w-full mt-6"
      >
        {status === 'loading' ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Enviando...
          </span>
        ) : (
          'Solicitar proposta gratuita'
        )}
      </Button>

      {status === 'success' && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-center text-emerald-light text-sm"
        >
          ✓ Mensagem enviada! Retorno em até 24h no seu WhatsApp.
        </motion.p>
      )}

      {status === 'error' && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-center text-red-400 text-sm"
        >
          Ops, algo deu errado. Tente pelo WhatsApp: (61) 99658-3471
        </motion.p>
      )}
    </motion.form>
  );
};

export default FormularioContato;
