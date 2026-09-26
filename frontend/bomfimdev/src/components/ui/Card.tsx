import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export const Card = ({ children, className = '', hover = true, glow = false }: Props) => {
  return (
    <motion.div
      className={`
        relative rounded-2xl border border-dark-600/50 bg-dark-800/50 backdrop-blur-sm
        ${hover ? 'transition-all duration-300 hover:border-accent/30 hover:bg-dark-700/50' : ''}
        ${glow ? 'before:absolute before:inset-0 before:rounded-2xl before:bg-card-glow before:opacity-0 hover:before:opacity-100 before:transition-opacity' : ''}
        ${className}
      `}
      whileHover={hover ? { y: -4 } : {}}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export const GlassCard = ({ children, className = '' }: Props) => {
  return (
    <div className={`glass rounded-2xl ${className}`}>
      {children}
    </div>
  );
};
