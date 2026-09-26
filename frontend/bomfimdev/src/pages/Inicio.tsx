import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/ui/AnimatedSection';
import FormularioContato from '../components/FormularioContato';
import { estatisticas, problemas, servicos, diferenciais, passos, faq, beneficiosCta, contato } from '../conteudo';
import { nichos } from '../data/nichos';
import { Link } from 'react-router-dom';

const Inicio = () => {
  const [faqAberto, setFaqAberto] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  useEffect(() => {
    document.title = 'Bomfimdev | Sites e Sistemas sob medida para empresas';
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        {/* Background glow */}
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald/5 rounded-full blur-3xl" />

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="accent">Sites e Sistemas sob medida</Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-display font-semibold text-white leading-tight"
          >
            Seu negócio merece um site{' '}
            <span className="gradient-text">à altura.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-light-400 max-w-2xl mx-auto"
          >
            Design premium, performance e estratégia para transformar visitantes em clientes. 
            Nada de template genérico — cada projeto é único.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button to="/#contato" size="lg">
              Solicitar proposta gratuita
            </Button>
            <Button to="/#servicos" variant="secondary" size="lg">
              Ver serviços
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {estatisticas.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl sm:text-4xl font-display font-semibold gradient-text">{stat.valor}</p>
                <p className="mt-1 text-xs sm:text-sm text-light-500">{stat.texto.split(' ').slice(0, 4).join(' ')}...</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-light-500/30 rounded-full flex justify-center"
          >
            <motion.div className="w-1.5 h-3 bg-light-500/50 rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </section>

      {/* Por que importa */}
      <section className="py-24 px-6 bg-dark-900/50">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-accent font-medium mb-3">Por que isso importa</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-white">
              Seu cliente pesquisa antes de contratar.
            </h2>
            <p className="mt-4 text-light-400 max-w-2xl mx-auto">
              E o que ele encontra define se fecha com você — ou com o concorrente.
            </p>
          </FadeIn>

          <FadeInStagger className="grid md:grid-cols-3 gap-8">
            {problemas.map((item, i) => (
              <FadeInItem key={i}>
                <Card className="p-8 h-full" glow>
                  <span className="text-4xl">{item.icone}</span>
                  <h3 className="mt-4 text-xl font-semibold text-white">{item.titulo}</h3>
                  <p className="mt-3 text-light-400">{item.texto}</p>
                </Card>
              </FadeInItem>
            ))}
          </FadeInStagger>

          {/* Stats bar */}
          <FadeIn delay={0.2} className="mt-16 grid sm:grid-cols-3 gap-6">
            {estatisticas.map((stat, i) => (
              <div key={i} className="bg-dark-800/50 border border-dark-600/50 rounded-xl p-6 text-center">
                <p className="text-4xl font-display font-semibold gradient-text">{stat.valor}</p>
                <p className="mt-2 text-sm text-light-400">{stat.texto}</p>
                <p className="mt-1 text-xs text-light-500">Fonte: {stat.fonte}</p>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-accent font-medium mb-3">O que eu entrego</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-white">
              Soluções completas para seu negócio online.
            </h2>
          </FadeIn>

          <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicos.map((servico, i) => (
              <FadeInItem key={i}>
                <Card className="p-6 h-full flex flex-col" glow>
                  <span className="text-4xl">{servico.icone}</span>
                  <h3 className="mt-4 text-xl font-semibold text-white">{servico.titulo}</h3>
                  <p className="mt-2 text-light-400 text-sm flex-grow">{servico.texto}</p>
                  <ul className="mt-4 space-y-2">
                    {servico.itens.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-light-300">
                        <svg className="w-4 h-4 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-24 px-6 bg-dark-900/50">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-accent font-medium mb-3">Muito além do design</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-white">
              Não entrego "um site". Entrego presença digital.
            </h2>
          </FadeIn>

          <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {diferenciais.map((item, i) => (
              <FadeInItem key={i}>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-accent/20 to-emerald/20 flex items-center justify-center">
                    <span className="text-2xl font-display font-bold gradient-text">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{item.titulo}</h3>
                  <p className="mt-2 text-light-400 text-sm">{item.texto}</p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-accent font-medium mb-3">Simples para você</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-white">
              Você cuida do negócio. Eu cuido do resto.
            </h2>
          </FadeIn>

          <div className="grid lg:grid-cols-4 gap-8">
            {passos.map((passo, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="relative">
                  {i < passos.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-dark-600 to-transparent" />
                  )}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl font-display font-bold text-dark-600">{passo.numero}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{passo.titulo}</h3>
                  <p className="mt-2 text-light-400">{passo.texto}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Nichos - SEO */}
      <section className="py-24 px-6 bg-dark-900/50">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-accent font-medium mb-3">Especialidades</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-white">
              Sites para cada tipo de profissional
            </h2>
            <p className="mt-4 text-light-400 max-w-2xl mx-auto">
              Cada profissão tem suas necessidades. Criamos sites específicos para o seu nicho.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {nichos.map((nicho) => (
              <FadeInItem key={nicho.slug}>
                <Link
                  to={`/${nicho.slug}`}
                  className="group block bg-dark-800/50 border border-dark-600/50 rounded-xl p-5 hover:border-accent/30 hover:bg-dark-700/50 transition-all"
                >
                  <span className="text-3xl">{nicho.emoji}</span>
                  <h3 className="mt-3 font-semibold text-white group-hover:text-accent transition-colors">
                    {nicho.titulo}
                  </h3>
                  <p className="mt-1 text-sm text-light-500">
                    Site profissional para {nicho.profissaoPlural}
                  </p>
                </Link>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn className="text-center mb-16">
            <p className="text-accent font-medium mb-3">Perguntas frequentes</p>
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-white">
              Tirando suas dúvidas.
            </h2>
          </FadeIn>

          <div className="space-y-4">
            {faq.map((item, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="border border-dark-600/50 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setFaqAberto(faqAberto === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-dark-800/50 transition-colors"
                  >
                    <span className="font-medium text-white pr-4">{item.pergunta}</span>
                    <motion.svg
                      animate={{ rotate: faqAberto === i ? 180 : 0 }}
                      className="w-5 h-5 text-light-500 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: faqAberto === i ? 'auto' : 0, opacity: faqAberto === i ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-light-400">{item.resposta}</p>
                  </motion.div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-8 text-center">
            <p className="text-light-500">
              Ainda com dúvidas?{' '}
              <a href={contato.whatsapp} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                Fale comigo no WhatsApp
              </a>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contato" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <FadeIn>
              <Badge variant="success">Vagas limitadas por mês</Badge>
              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-white">
                Pronto para ter um site à altura do seu negócio?
              </h2>
              <p className="mt-4 text-light-400">
                Conte o momento da sua empresa e receba uma proposta sob medida — sem compromisso.
              </p>

              <ul className="mt-8 space-y-4">
                {beneficiosCta.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-light-300">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center gap-4">
                <a
                  href={contato.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-light-400 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5 text-emerald" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>WhatsApp</span>
                </a>
                <span className="text-dark-600">|</span>
                <a href={`mailto:${contato.email}`} className="text-light-400 hover:text-white transition-colors">
                  {contato.email}
                </a>
              </div>
            </FadeIn>

            <FormularioContato />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
