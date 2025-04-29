import React, { useState } from 'react';

const Sobre: React.FC = () => {
  const [abaAtiva, setAbaAtiva] = useState('habilidades');

  return (
    <div className="w-full sm:w-[90%] mx-auto p-4 sm:p-6 py-20">
      {/* Seção Sobre Mim */}
      <section className="mb-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-white">Sobre Mim</h2>
        <p className="text-center text-sm text-blue-400 mb-8">
          Desenvolvedor Full Stack com 4 anos de experiência em Java, Spring Boot e React, busco contribuir com soluções escaláveis e inovadoras.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">Desenvolvimento Backend</h3>
            <p className="text-gray-300 text-sm">
              Experiência com Java, Spring Boot e Node.js para criar APIs REST robustas e escaláveis.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">Desenvolvimento Frontend</h3>
            <p className="text-gray-300 text-sm">
              Criação de interfaces modernas com React, TypeScript e Tailwind CSS.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">Bancos de Dados</h3>
            <p className="text-gray-300 text-sm">
              Gerenciamento de dados com PostgreSQL, MySQL e MongoDB.
            </p>
          </div>
        </div>
      </section>

      {/* Seção Habilidades */}
      <section className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-white">Minha Trajetória</h2>
        <p className="text-sm text-blue-400 mb-8">Minha experiência, formação e certificações</p>
        
        {/* Abas */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setAbaAtiva('habilidades')}
            className={`px-4 py-2 rounded-full text-sm font-semibold ${abaAtiva === 'habilidades' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
          >
            Habilidades
          </button>
          <button
            onClick={() => setAbaAtiva('experiência')}
            className={`px-4 py-2 rounded-full text-sm font-semibold ${abaAtiva === 'experiência' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
          >
            Experiência
          </button>
          <button
            onClick={() => setAbaAtiva('educacao')}
            className={`px-4 py-2 rounded-full text-sm font-semibold ${abaAtiva === 'educacao' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
          >
            Educação
          </button>
          <button
            onClick={() => setAbaAtiva('certificacoes')}
            className={`px-4 py-2 rounded-full text-sm font-semibold ${abaAtiva === 'certificacoes' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
          >
            Certificações
          </button>
        </div>

        {/* Conteúdo das Abas */}
        {abaAtiva === 'habilidades' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Java & Spring Boot</h3>
              <p className="text-gray-300 text-sm">Desenvolvimento de APIs RESTful e sistemas backend escaláveis.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-white mb-2">React & TypeScript</h3>
              <p className="text-gray-300 text-sm">Criação de interfaces dinâmicas e responsivas.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-white mb-2">PostgreSQL & MySQL</h3>
              <p className="text-gray-300 text-sm">Gerenciamento de bancos de dados relacionais.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-white mb-2">DevOps & CI/CD</h3>
              <p className="text-gray-300 text-sm">Automação com Docker, Jenkins e AWS.</p>
            </div>
          </div>
        )}
        {abaAtiva === 'experiência' && (
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-left">
              <h3 className="text-lg font-semibold text-white mb-2">Desenvolvedor Java - Conselho Nacional de Justiça (CNJ)</h3>
              <p className="text-gray-400 text-sm mb-2">Fev/2024 - Presente</p>
              <ul className="text-gray-300 text-sm list-disc list-inside">
                <li>Otimizou o sistema PJe legado com Java e Spring Boot, reduzindo o tempo de resposta de APIs em 20%.</li>
                <li>Integrou APIs no projeto Sinapses, automatizando 30% dos processos judiciais com modelos de IA.</li>
                <li>Contribuições técnicas em sistemas do PDPJ com Java, JPA e SQL.</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-left">
              <h3 className="text-lg font-semibold text-white mb-2">Desenvolvedor Full Stack - B2Assist Apoio Administrativo</h3>
              <p className="text-gray-400 text-sm mb-2">Jan/2021 - Fev/2024</p>
              <ul className="text-gray-300 text-sm list-disc list-inside">
                <li>Integrou APIs REST com Node.js e Spring Boot em 3 sistemas web, melhorando a escalabilidade.</li>
                <li>Desenvolveu 5 sistemas web com React e Spring Boot, economizando 15 horas semanais em processos manuais.</li>
              </ul>
            </div>
          </div>
        )}
        {abaAtiva === 'educacao' && (
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-left">
              <h3 className="text-lg font-semibold text-white mb-2">Tecnólogo em Análise e Desenvolvimento de Sistemas</h3>
              <p className="text-gray-400 text-sm mb-2">Concluído em 2024</p>
              <p className="text-gray-300 text-sm">Formação focada em desenvolvimento de software e tecnologias modernas.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-left">
              <h3 className="text-lg font-semibold text-white mb-2">Pós-graduação em Ciência de Dados</h3>
              <p className="text-gray-400 text-sm mb-2">Em andamento (conclusão prevista para 2026)</p>
              <p className="text-gray-300 text-sm">Estudos em análise de dados, machine learning e IA.</p>
            </div>
          </div>
        )}
        {abaAtiva === 'certificacoes' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-left">
              <h3 className="text-lg font-semibold text-white mb-2">Formação Front-end</h3>
              <p className="text-gray-400 text-sm mb-2">OnebitCode, 2022</p>
              <p className="text-gray-300 text-sm">HTML5, CSS3 e JavaScript.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-left">
              <h3 className="text-lg font-semibold text-white mb-2">Especialista Back-end Java</h3>
              <p className="text-gray-400 text-sm mb-2">Zimatise, 2023</p>
              <p className="text-gray-300 text-sm">Desenvolvimento avançado com Java.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-left">
              <h3 className="text-lg font-semibold text-white mb-2">Especialista Java</h3>
              <p className="text-gray-400 text-sm mb-2">AlgaWorks, 2023</p>
              <p className="text-gray-300 text-sm">Aprofundamento em Java e Spring.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-left">
              <h3 className="text-lg font-semibold text-white mb-2">Desenvolvedor Full Stack</h3>
              <p className="text-gray-400 text-sm mb-2">B7Web, 2024</p>
              <p className="text-gray-300 text-sm">Desenvolvimento completo com React e Node.js.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-left">
              <h3 className="text-lg font-semibold text-white mb-2">Automação de Testes com Java</h3>
              <p className="text-gray-400 text-sm mb-2">QAZANDO, 2024</p>
              <p className="text-gray-300 text-sm">Técnicas de automação e testes com Java.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-left">
              <h3 className="text-lg font-semibold text-white mb-2">Formação DevOps PRO</h3>
              <p className="text-gray-400 text-sm mb-2">Fabrício Veronez, 2024</p>
              <p className="text-gray-300 text-sm">Automação e CI/CD com Docker e Jenkins.</p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Sobre;