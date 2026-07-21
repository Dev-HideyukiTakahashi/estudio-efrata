'use client';

import { motion } from 'framer-motion';
import { HeartHandshake, Gem, FlaskConical, Star, Users, ShieldCheck } from 'lucide-react';

// ==========================================
// 1. DADOS DOS DIFERENCIAIS (ITENS DA GRADE)
// ==========================================
const items = [
  {
    icon: HeartHandshake,
    title: 'Atendimento Personalizado',
    description: 'Cada cliente é único. Criamos uma experiência sob medida para você.',
    color: 'from-purple-500/20 to-purple-600/10',
    textColor: 'text-purple-300',
    borderColor: 'border-purple-500/20',
  },
  {
    icon: Gem,
    title: 'Ambiente Premium',
    description: 'Espaço sofisticado e acolhedor para sua melhor experiência.',
    color: 'from-purple-500/20 to-purple-600/10',
    textColor: 'text-purple-300',
    borderColor: 'border-purple-500/20',
  },
  {
    icon: FlaskConical,
    title: 'Produtos Profissionais',
    description: 'Utilizamos apenas marcas premium para o melhor resultado.',
    color: 'from-blue-500/20 to-blue-600/10',
    textColor: 'text-blue-300',
    borderColor: 'border-blue-500/20',
  },
  {
    icon: Star,
    title: 'Experiência Exclusiva',
    description: 'Do café especial ao atendimento, tudo é pensado no seu bem-estar.',
    color: 'from-blue-500/20 to-blue-600/10',
    textColor: 'text-blue-300',
    borderColor: 'border-blue-500/20',
  },
  {
    icon: Users,
    title: 'Profissionais Especializados',
    description: 'Valéria e Bruno são referência em beleza e barbearia premium.',
    color: 'from-purple-500/20 to-purple-600/10',
    textColor: 'text-purple-300',
    borderColor: 'border-purple-500/20',
  },
  {
    icon: ShieldCheck,
    title: 'Higiene e Segurança',
    description: 'Materiais esterilizados e protocolos rigorosos de limpeza.',
    color: 'from-blue-500/20 to-blue-600/10',
    textColor: 'text-blue-300',
    borderColor: 'border-blue-500/20',
  },
];

export function Differentiators() {
  return (
    // ==========================================
    // 2. SEÇÃO PRINCIPAL DE DIFERENCIAIS
    // ==========================================
    <section className="relative py-32 overflow-hidden">
      {/* Gradientes e Efeitos de Fundo */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0f] via-black to-[#0a0a0f]" />

      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-600/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-blue-600/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] text-white/40 uppercase mb-4 block">
            Diferenciais
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white">
            Por que escolher{' '}
            <span className="bg-linear-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent font-semibold">
              o Estúdio Efrata
            </span>
          </h2>
        </motion.div>

        {/* ========================================== */}
        {/* 3. GRADE DE CARDS DOS DIFERENCIAIS        */}
        {/* ========================================== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card de diferenciais*/}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className={`relative p-6 rounded-2xl backdrop-blur-sm border ${item.borderColor} bg-white/2 hover:bg-white/4 transition-colors duration-500 cursor-default`}
              >
                {/* Ícone com gradiente customizado */}
                <div
                  className={`w-12 h-12 rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center mb-4 ${item.textColor}`}
                >
                  <item.icon size={22} />
                </div>

                {/* Título e Descrição */}
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
