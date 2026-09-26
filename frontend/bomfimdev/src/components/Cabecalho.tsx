import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';

const links = [
  { to: '/', label: 'Início' },
  { to: '/#servicos', label: 'Serviços' },
  { to: '/#como-funciona', label: 'Como funciona' },
  { to: '/#faq', label: 'FAQ' },
];

const Cabecalho = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuAberto(false);
  }, [location]);

  const scrollToSection = (hash: string) => {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-950/80 backdrop-blur-xl border-b border-dark-700/50' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-emerald flex items-center justify-center">
            <span className="text-white font-bold text-sm">B</span>
          </div>
          <span className="text-xl font-semibold text-white">Bomfimdev</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.to}
              onClick={() => {
                if (link.to.includes('#')) {
                  scrollToSection(link.to.replace('/', ''));
                }
              }}
              className="text-sm text-light-400 hover:text-white transition-colors line-reveal"
            >
              {link.label}
            </button>
          ))}
          <Button to="/#contato" size="sm">
            Solicitar proposta
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d={menuAberto ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuAberto && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-900/95 backdrop-blur-xl border-t border-dark-700/50"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {links.map((link) => (
                <button
                  key={link.to}
                  onClick={() => {
                    if (link.to.includes('#')) {
                      scrollToSection(link.to.replace('/', ''));
                    }
                    setMenuAberto(false);
                  }}
                  className="text-left text-light-300 hover:text-white py-2"
                >
                  {link.label}
                </button>
              ))}
              <Button to="/#contato" className="mt-2" onClick={() => setMenuAberto(false)}>
                Solicitar proposta
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Cabecalho;
