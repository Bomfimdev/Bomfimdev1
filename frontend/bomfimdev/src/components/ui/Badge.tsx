import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  variant?: 'default' | 'accent' | 'success';
}

const variants = {
  default: 'bg-dark-600 text-light-300',
  accent: 'bg-accent/10 text-accent-light border border-accent/20',
  success: 'bg-emerald/10 text-emerald-light border border-emerald/20',
};

export const Badge = ({ children, variant = 'default' }: Props) => {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
};
