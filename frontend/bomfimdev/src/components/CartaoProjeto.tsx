import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ProjetoProps {
  id?: number;
  titulo?: string;
  descricao?: string;
  tecnologia?: string;
  imagem?: string;
}

const CartaoProjeto: React.FC<ProjetoProps> = ({ 
  id,
  titulo = 'Projeto Exemplo', 
  descricao = 'Descrição do projeto, construído com tecnologias modernas.',
  tecnologia = 'Desconhecida',
  imagem = 'https://picsum.photos/300/200?random=0'
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)" }}
      transition={{ duration: 0.5 }}
      className="bg-[#1C2526] rounded-lg shadow-lg overflow-hidden flex flex-col"
    >
      <div className="w-full h-40">
        <img 
          src={imagem} 
          alt={titulo} 
          className="w-full h-full object-cover" 
          loading="lazy"
          onError={(e) => (e.currentTarget.src = 'https://picsum.photos/300/200?random=0')} 
        />
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-lg font-semibold text-[#F5F5F5] mb-2">{titulo}</h3>
          <p className="text-[#B0BEC5] text-sm mb-2">{descricao}</p>
          <p className="text-sm text-[#005DC4] mb-4">Tecnologia: {tecnologia}</p>
        </div>
        <div className="flex justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to={`/projetos/${id}`}
              className="bg-[#005DC4] text-[#F5F5F5] px-4 py-2 rounded hover:bg-[#3381D9] text-sm transition-all"
            >
              Ver Detalhes
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CartaoProjeto;