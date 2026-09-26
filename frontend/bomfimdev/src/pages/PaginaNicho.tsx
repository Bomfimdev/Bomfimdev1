import { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getNichoBySlug, nichos } from '../data/nichos';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/ui/AnimatedSection';
import FormularioContato from '../components/FormularioContato';
import { contato, passos, beneficiosCta } from '../conteudo';
import { useSEO } from '../hooks/useSEO';

const PaginaNicho = () => {
  const { slug } = useParams<{ slug: string }>();
  const nicho = slug ? getNichoBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // SEO
  useSEO({
    title: nicho?.metaTitle || 'Bomfimdev',
    description: nicho?.metaDescription || '',
    keywords: nicho?.keywords || [],
    canonical: nicho ? `https://bomfimdev.com/${nicho.slug}` : undefined,
  });

  // Schema.org JSON-LD
  useEffect(() => {
    if (!nicho) return;

    const existingScript = document.querySelector('script[data-schema="nicho"]');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema', 'nicho');
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: nicho.titulo,
      description: nicho.metaDescription,
      provider: {
        '@type': 'ProfessionalService',
        name: 'Bomfimdev',
        url: 'https://bomfimdev.com',
      },
      areaServed: 'BR',
      serviceType: 'Web Development',
    });
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [nicho]);

  if (!nicho) {
    return <Navigate to="/" replace />;
  }

  // Outros nichos para cross-linking
  const outrosNichos = nichos.filter((n) => n.slug !== nicho.slug).slice(0, 6);

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-6 pt-24 pb-16">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="accent">
              <span className="mr-2">{nicho.emoji}</span>
              {nicho.titulo}
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-display font-semibold text-white leading-tight"
          >
            {nicho.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-light-400 max-w-2xl mx-auto"
          >
            {nicho.subtitulo}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button to="#orcamento" size="lg">
              {nicho.cta}
            </Button>
            <Button href={contato.whatsapp} variant="secondary" size="lg">
              Falar no WhatsApp
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Problemas */}
      <section className="py-20 px-6 bg-dark-900/50">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-12">
            <p className="text-accent font-medium mb-3">O problema</p>
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-white">
              Por que {nicho.profissaoPlural} precisam de um site profissional?
            </h2>
          </FadeIn>

          <FadeInStagger className="grid md:grid-cols-3 gap-6">
            {nicho.problemas.map((problema, i) => (
              <FadeInItem key={i}>
                <Card className="p-6 h-full" glow>
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
                    <span className="text-red-400">✕</span>
                  </div>
                  <p className="text-light-300">{problema}</p>
                </Card>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Solução / Benefícios */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-12">
            <p className="text-emerald font-medium mb-3">A solução</p>
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-white">
              O que um site profissional faz pelo seu negócio
            </h2>
          </FadeIn>

          <FadeInStagger className="grid md:grid-cols-3 gap-6">
            {nicho.beneficios.map((beneficio, i) => (
              <FadeInItem key={i}>
                <Card className="p-6 h-full" glow>
                  <div className="w-10 h-10 rounded-lg bg-emerald/10 flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-light-300">{beneficio}</p>
                </Card>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Funcionalidades */}
      <section className="py-20 px-6 bg-dark-900/50">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-12">
            <p className="text-accent font-medium mb-3">O que está incluso</p>
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-white">
              Funcionalidades do site para {nicho.profissaoPlural}
            </h2>
          </FadeIn>

          <FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {nicho.funcionalidades.map((func, i) => (
                <div key={i} className="flex items-center gap-3 bg-dark-800/50 border border-dark-600/50 rounded-lg p-4">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-light-300">{func}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-12">
            <p className="text-accent font-medium mb-3">Como funciona</p>
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-white">
              Do primeiro contato ao site no ar
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-4 gap-8">
            {passos.map((passo, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div>
                  <span className="text-4xl font-display font-bold text-dark-600">{passo.numero}</span>
                  <h3 className="mt-2 text-lg font-semibold text-white">{passo.titulo}</h3>
                  <p className="mt-2 text-sm text-light-400">{passo.texto}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Formulário */}
      <section id="orcamento" className="py-20 px-6 bg-dark-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <FadeIn>
              <Badge variant="success">Orçamento gratuito</Badge>
              <h2 className="mt-6 text-3xl sm:text-4xl font-display font-semibold text-white">
                Pronto para ter um site profissional?
              </h2>
              <p className="mt-4 text-light-400">
                Conte sobre seu {nicho.profissao === 'clínica' || nicho.profissao === 'consultório' ? nicho.profissao : `trabalho como ${nicho.profissao}`} e receba uma proposta sob medida.
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

              <div className="mt-8">
                <a
                  href={contato.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald hover:text-emerald-light transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>Prefere WhatsApp? Clique aqui</span>
                </a>
              </div>
            </FadeIn>

            <FormularioContato />
          </div>
        </div>
      </section>

      {/* Outros nichos (cross-linking para SEO) */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-white">
              Também criamos sites para
            </h2>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {outrosNichos.map((outro) => (
              <FadeInItem key={outro.slug}>
                <Link
                  to={`/${outro.slug}`}
                  className="block bg-dark-800/50 border border-dark-600/50 rounded-lg p-4 text-center hover:border-accent/30 hover:bg-dark-700/50 transition-all"
                >
                  <span className="text-2xl">{outro.emoji}</span>
                  <p className="mt-2 text-sm text-light-300">{outro.profissaoPlural}</p>
                </Link>
              </FadeInItem>
            ))}
          </FadeInStagger>

          <FadeIn className="text-center mt-8">
            <Link to="/" className="text-accent hover:text-accent-light transition-colors">
              Ver todos os serviços →
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default PaginaNicho;
