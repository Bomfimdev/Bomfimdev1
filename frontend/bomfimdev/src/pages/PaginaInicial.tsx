import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CartaoProjeto from '../components/CartaoProjeto';
import { motion } from 'framer-motion';

interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  tecnologia?: string;
  imagem?: string;
}

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

const PaginaInicial: React.FC = () => {
  const [projetos, setProjetos] = useState<Projeto[]>([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/projetos`)
      .then(response => {
        console.log('Projetos recebidos:', response.data);
        setProjetos(response.data.slice(0, 3));
      })
      .catch(error => console.error('Erro ao buscar projetos:', error));
  }, []);

  return (
    <div className="w-full sm:w-[90%] mx-auto">
      {/* Seção Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 pt-20"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left mb-8 md:mb-0"
        >
          <p className="text-sm text-[#005DC4] mb-2">Bem-vindo ao Bomfimdev</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight text-[#F5F5F5]">
            Olá, sou Gabriel Bomfim, Desenvolvedor Full Stack
          </h1>
          <p className="text-base sm:text-lg text-[#B0BEC5] mb-6">
            Desenvolvo soluções modernas e eficientes para web, com foco em performance e usabilidade.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/sobre" className="inline-block bg-[#005DC4] text-[#F5F5F5] px-6 py-3 rounded-full hover:bg-[#0D3CD1] text-sm sm:text-base transition-all">
              Saiba Mais Sobre Mim
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <img 
            src="/imagens/Perfil.jpeg" 
            alt="Foto de Perfil de Gabriel Bomfim" 
            className="w-64 h-64 sm:w-80 sm:h-80 rounded-lg object-cover shadow-lg"
            loading="lazy"
          />
        </motion.div>
      </motion.section>

      {/* Seção Habilidades */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="p-4 sm:p-6 pt-36 pb-20"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center text-[#F5F5F5]">Minhas Habilidades</h2>
        <p className="text-center text-sm text-[#005DC4] mb-8">Conheça minhas principais competências técnicas</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)" }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#142A5A] p-6 rounded-lg shadow-lg transition-all"
          >
            <h3 className="text-lg font-semibold text-[#005DC4] mb-2">Desenvolvimento Backend</h3>
            <p className="text-[#B0BEC5] text-sm">Java, Spring Boot, Node.js, APIs REST escaláveis.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#142A5A] p-6 rounded-lg shadow-lg transition-all"
          >
            <h3 className="text-lg font-semibold text-[#005DC4] mb-2">Desenvolvimento Frontend</h3>
            <p className="text-[#B0BEC5] text-sm">React, TypeScript, Tailwind CSS, interfaces dinâmicas.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-[#142A5A] p-6 rounded-lg shadow-lg transition-all"
          >
            <h3 className="text-lg font-semibold text-[#005DC4] mb-2">DevOps & CI/CD</h3>
            <p className="text-[#B0BEC5] text-sm">Docker, Jenkins, AWS, automação de pipelines.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Seção Projetos */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="p-4 sm:p-6 pt-36 pb-20"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center text-[#F5F5F5]">Meus Projetos</h2>
        <p className="text-center text-sm text-[#005DC4] mb-8">Confira alguns dos meus trabalhos recentes</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projetos.length > 0 ? (
            projetos.map(projeto => (
              <CartaoProjeto
                key={projeto.id}
                id={projeto.id}
                titulo={projeto.titulo}
                descricao={projeto.descricao}
                tecnologia={projeto.tecnologia}
                imagem={projeto.imagem}
              />
            ))
          ) : (
            <p className="text-base sm:text-lg text-center text-[#B0BEC5]">Nenhum projeto encontrado.</p>
          )}
        </div>
        <div className="text-center mt-8">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/projetos" className="inline-block bg-[#005DC4] text-[#F5F5F5] px-6 py-3 rounded-full hover:bg-[#0D3CD1] text-sm sm:text-base transition-all">
              Ver Todos os Projetos
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default PaginaInicial;