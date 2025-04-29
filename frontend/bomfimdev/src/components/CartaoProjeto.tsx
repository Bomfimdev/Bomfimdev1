import React from 'react';

interface ProjetoProps {
  titulo?: string;
  descricao?: string;
  tecnologia?: string;
  imagem?: string;
}

const CartaoProjeto: React.FC<ProjetoProps> = ({ 
  titulo = 'Projeto Exemplo', 
  descricao = 'Descrição do projeto, construído com tecnologias modernas.',
  tecnologia = 'Desconhecida',
  imagem = 'https://picsum.photos/300/200?random=0'
}) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col">
      <div className="w-full h-40">
        <img 
          src={imagem} 
          alt={titulo} 
          className="w-full h-full object-cover" 
          onError={(e) => (e.currentTarget.src = 'https://picsum.photos/300/200?random=0')} 
        />
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">{titulo}</h3>
          <p className="text-gray-300 text-sm mb-2">{descricao}</p>
          <p className="text-sm text-blue-400 mb-4">Tecnologia: {tecnologia}</p>
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 text-sm">
            Ver Detalhes
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartaoProjeto;