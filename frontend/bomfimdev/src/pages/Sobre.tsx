import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Sobre: React.FC = () => {
  const [abaAtiva, setAbaAtiva] = useState('habilidades');

  return (
    <div className="w-full sm:w-[90%] mx-auto p-4 sm:p-6 pt-36 pb-20">
      {/* Seção Sobre Mim */}
      <section className="mb-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-[#F5F5F5]">Sobre Mim</h2>
        <p className="text-center text-sm text-[#005DC4] mb-8">
          Desenvolvedor Full Stack com 4 anos de experiência em Java, Spring Boot e React, busco contribuir com soluções escaláveis e inovadoras.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)" }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#1C2526] p-6 rounded-lg shadow-lg transition-all"
          >
            <h3 className="text-lg font-semibold text-[#005DC4] mb-2">Desenvolvimento Backend</h3>
            <p className="text-[#B0BEC5] text-sm">
              Experiência com Java, Spring Boot e Node.js para criar APIs REST robustas e escaláveis.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#1C2526] p-6 rounded-lg shadow-lg transition-all"
          >
            <h3 className="text-lg font-semibold text-[#005DC4] mb-2">Desenvolvimento Frontend</h3>
            <p className="text-[#B0BEC5] text-sm">
              Criação de interfaces modernas com React, TypeScript e Tailwind CSS.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-[#1C2526] p-6 rounded-lg shadow-lg transition-all"
          >
            <h3 className="text-lg font-semibold text-[#005DC4] mb-2">Bancos de Dados</h3>
            <p className="text-[#B0BEC5] text-sm">
              Gerenciamento de dados com PostgreSQL, MySQL e MongoDB.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Seção Minha Trajetória */}
      <section className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-[#F5F5F5]">Minha Trajetória</h2>
        <p className="text-sm text-[#005DC4] mb-8">Minha experiência, formação e certificações</p>
        
        {/* Abas */}
        <div className="flex flex-col items-center space-y-4 mb-8">
          <div className="flex justify-center space-x-4 w-full max-w-md">
            <button
              onClick={() => setAbaAtiva('habilidades')}
              className={`flex-1 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                abaAtiva === 'habilidades' ? 'bg-[#005DC4] text-[#F5F5F5] shadow-lg' : 'bg-[#1C2526] text-[#B0BEC5] hover:bg-[#2A3B3C] hover:shadow-md'
              }`}
            >
              Habilidades
            </button>
            <button
              onClick={() => setAbaAtiva('experiência')}
              className={`flex-1 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                abaAtiva === ' Experiência' ? 'bg-[#005DC4] text-[#F5F5F5] shadow-lg' : 'bg-[#1C2526] text-[#B0BEC5] hover:bg-[#2A3B3C] hover:shadow-md'
              }`}
            >
              Experiência
            </button>
          </div>
          <div className="flex justify-center space-x-4 w-full max-w-md">
            <button
              onClick={() => setAbaAtiva('educacao')}
              className={`flex-1 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                abaAtiva === 'educacao' ? 'bg-[#005DC4] text-[#F5F5F5] shadow-lg' : 'bg-[#1C2526] text-[#B0BEC5] hover:bg-[#2A3B3C] hover:shadow-md'
              }`}
            >
              Educação
            </button>
            <button
              onClick={() => setAbaAtiva('certificacoes')}
              className={`flex-1 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                abaAtiva === 'certificacoes' ? 'bg-[#005DC4] text-[#F5F5F5] shadow-lg' : 'bg-[#1C2526] text-[#B0BEC5] hover:bg-[#2A3B3C] hover:shadow-md'
              }`}
            >
              Certificações
            </button>
          </div>
        </div>

        {/* Conteúdo das Abas */}
        {abaAtiva === 'habilidades' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)" }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#1C2526] p-6 rounded-lg shadow-lg transition-all"
            >
              <h3 className="text-lg font-semibold text-[#F5F5F5] mb-2">Java & Spring Boot</h3>
              <p className="text-[#B0BEC5] text-sm">Desenvolvimento de APIs RESTful e sistemas backend escaláveis.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#1C2526] p-6 rounded-lg shadow-lg transition-all"
            >
              <h3 className="text-lg font-semibold text-[#F5F5F5] mb-2">React & TypeScript</h3>
              <p className="text-[#B0BEC5] text-sm">Criação de interfaces dinâmicas e responsivas.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-[#1C2526] p-6 rounded-lg shadow-lg transition-all"
            >
              <h3 className="text-lg font-semibold text-[#F5F5F5] mb-2">PostgreSQL & MySQL</h3>
              <p className="text-[#B0BEC5] text-sm">Gerenciamento de bancos de dados relacionais.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)" }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#1C2526] p-6 rounded-lg shadow-lg transition-all"
            >
              <h3 className="text-lg font-semibold text-[#F5F5F5] mb-2">DevOps & CI/CD</h3>
              <p className="text-[#B0BEC5] text-sm">Automação com Docker, Jenkins e AWS.</p>
            </motion.div>
          </div>
        )}
        {abaAtiva === ' Experiência' && (
          <div className="grid grid-cols-1 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)" }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#1C2526] p-6 rounded-lg shadow-lg transition-all text-left"
            >
              <h3 className="text-lg font-semibold text-[#F5F5F5] mb-2">Desenvolvedor Java - Conselho Nacional de Justiça (CNJ)</h3>
              <p className="text-[#B0BEC5] text-sm mb-2">Fev/2024 - Presente</p>
              <ul className="text-[#B0BEC5] text-sm list-disc list-inside">
                <li>Otimizou o sistema PJe legado com Java e Spring Boot, reduzindo o tempo de resposta de APIs em 20%.</li>
                <li>Integrou APIs no projeto Sinapses, automatizando 30% dos processos judiciais com modelos de IA.</li>
                <li>Contribuições técnicas em sistemas do PDPJ com Java, JPA e SQL.</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#1C2526] p-6 rounded-lg shadow-lg transition-all text-left"
            >
              <h3 className="text-lg font-semibold text-[#F5F5F5] mb-2">Desenvolvedor Full Stack - B2Assist Apoio Administrativo</h3>
              <p className="text-[#B0BEC5] text-sm mb-2">Jan/2021 - Fev/2024</p>
              <ul className="text-[#B0BEC5] text-sm list-disc list-inside">
                <li>Integrou APIs REST com Node.js e Spring Boot em 3 sistemas web, melhorando a escalabilidade.</li>
                <li>Desenvolveu 5 sistemas web com React e Spring Boot, economizando 15 horas semanais em processos manuais.</li>
              </ul>
            </motion.div>
          </div>
        )}
        {abaAtiva === 'educacao' && (
          <div className="grid grid-cols-1 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)" }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#1C2526] p-6 rounded-lg shadow-lg transition-all text-left"
            >
              <h3 className="text-lg font-semibold text-[#F5F5F5] mb-2">Tecnólogo em Análise e Desenvolvimento de Sistemas</h3>
              <p className="text-[#B0BEC5] text-sm mb-2">Concluído em 2024</p>
              <p className="text-[#B0BEC5] text-sm">Formação focada em desenvolvimento de software e tecnologias modernas.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#1C2526] p-6 rounded-lg shadow-lg transition-all text-left"
            >
              <h3 className="text-lg font-semibold text-[#F5F5F5] mb-2">Pós-graduação em Ciência de Dados</h3>
              <p className="text-[#B0BEC5] text-sm mb-2">Em andamento (conclusão prevista para 2026)</p>
              <p className="text-[#B0BEC5] text-sm">Estudos em análise de dados, machine learning e IA.</p>
            </motion.div>
          </div>
        )}
        {abaAtiva === 'certificacoes' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)" }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#1C2526] p-6 rounded-lg shadow-lg transition-all text-left"
            >
              <h3 className="text-lg font-semibold text-[#F5F5F5] mb-2">Formação Front-end</h3>
              <p className="text-[#B0BEC5] text-sm mb-2">OnebitCode, 2022</p>
              <p className="text-[#B0BEC5] text-sm">HTML5, CSS3 e JavaScript.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#1C2526] p-6 rounded-lg shadow-lg transition-all text-left"
            >
              <h3 className="text-lg font-semibold text-[#F5F5F5] mb-2">Especialista Back-end Java</h3>
              <p className="text-[#B0BEC5] text-sm mb-2">Zimatise, 2023</p>
              <p className="text-[#B0BEC5] text-sm">Desenvolvimento avançado com Java.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-[#1C2526] p-6 rounded-lg shadow-lg transition-all text-left"
            >
              <h3 className="text-lg font-semibold text-[#F5F5F5] mb-2">Especialista Java</h3>
              <p className="text-[#B0BEC5] text-sm mb-2">AlgaWorks, 2023</p>
              <p className="text-[#B0BEC5] text-sm">Aprofundamento em Java e Spring.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)" }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#1C2526] p-6 rounded-lg shadow-lg transition-all text-left"
            >
              <h3 className="text-lg font-semibold text-[#F5F5F5] mb-2">Desenvolvedor Full Stack</h3>
              <p className="text-[#B0BEC5] text-sm mb-2">B7Web, 2024</p>
              <p className="text-[#B0BEC5] text-sm">Desenvolvimento completo com React e Node.js.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)" }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-[#1C2526] p-6 rounded-lg shadow-lg transition-all text-left"
            >
              <h3 className="text-lg font-semibold text-[#F5F5F5] mb-2">Automação de Testes com Java</h3>
              <p className="text-[#B0BEC5] text-sm mb-2">QAZANDO, 2024</p>
              <p className="text-[#B0BEC5] text-sm">Técnicas de automação e testes com Java.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)" }}
              transition={{ duration: 0.5, delay: 1.0 }}
              viewport={{ once: true }}
              className="bg-[#1C2526] p-6 rounded-lg shadow-lg transition-all text-left"
            >
              <h3 className="text-lg font-semibold text-[#F5F5F5] mb-2">Formação DevOps PRO</h3>
              <p className="text-[#B0BEC5] text-sm mb-2">Fabrício Veronez, 2024</p>
              <p className="text-[#B0BEC5] text-sm">Automação e CI/CD com Docker e Jenkins.</p>
            </motion.div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Sobre;