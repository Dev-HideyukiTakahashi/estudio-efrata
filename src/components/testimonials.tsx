'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

// ==========================================
// 1. DADOS DOS DEPOIMENTOS DOS CLIENTES
// ==========================================
const testimonials = [
  {
    id: 1,
    name: 'Vanessa Garcia',
    rating: 5,
    text: 'Simplesmente o melhor salão que já fui! A Valéria é extremamente talentosa, saí de lá me sentindo uma nova mulher. Ambiente luxuoso e atendimento impecável.',
    professional: 'valeria',
    photo: '/images/depoimentos/vanessa.png',
  },
  {
    id: 2,
    name: 'Hideyuki Takahashi',
    rating: 5,
    text: 'O Bruno é um artista! Melhor corte que já tive. A barboterapia é uma experiência que todo homem deveria experimentar. Ambiente incrível.',
    professional: 'bruno',
    photo: '/images/depoimentos/hideyuki.png',
  },
  {
    id: 3,
    name: 'Vanessa Garcia',
    rating: 5,
    text: 'Fiz uma transformação completa com a Valéria e o resultado superou minhas expectativas. Profissionalismo, carinho e um resultado impecável.',
    professional: 'valeria',
    photo: '/images/depoimentos/vanessa.png',
  },
  {
    id: 4,
    name: 'Hideyuki Takahashi',
    rating: 5,
    text: 'Finalmente um lugar que entende de estilo masculino. O Bruno sabe exatamente o que funciona. Virei cliente fiel!',
    professional: 'bruno',
    photo: '/images/depoimentos/hideyuki.png',
  },
  {
    id: 5,
    name: 'Vanessa Garcia',
    rating: 5,
    text: 'O Estúdio Efrata é outro nível. A coloração que a Valéria fez ficou simplesmente perfeita. Super recomendo!',
    professional: 'valeria',
    photo: '/images/depoimentos/vanessa.png',
  },
  {
    id: 6,
    name: 'Hideyuki Takahashi',
    rating: 5,
    text: 'Corte executivo impecável. Ambiente premium, atendimento nota 10. O Bruno é o melhor barbeiro da região!',
    professional: 'bruno',
    photo: '/images/depoimentos/hideyuki.png',
  },
];

export function Testimonials() {
  return (
    // ==========================================
    // 2. SEÇÃO PRINCIPAL DE DEPOIMENTOS
    // ==========================================
    <section className="relative py-32 overflow-hidden cursor-default">
      {/* Gradiente de fundo base */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-[#0a0a0f] to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] text-white/40 uppercase mb-4 block">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white">
            O que nossos{' '}
            <span className="bg-linear-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent font-semibold">
              clientes
            </span>{' '}
            dizem
          </h2>
        </motion.div>

        {/* ========================================== */}
        {/* 3. GRADE DE CARDS DOS DEPOIMENTOS          */}
        {/* ========================================== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.1, duration: 0.4, ease: 'easeOut' }}
              className={`p-6 rounded-2xl backdrop-blur-sm border cursor-default transition-all duration-300 ease-out ${
                item.professional === 'valeria'
                  ? 'bg-purple-900/15 border-purple-500/20 hover:border-purple-500/40 hover:shadow-[0_12px_35px_rgba(168,85,247,0.3)]'
                  : 'bg-blue-900/15 border-blue-500/20 hover:border-blue-500/40 hover:shadow-[0_12px_35px_rgba(59,130,246,0.3)]'
              }`}
            >
              {/* Avaliação em Estrelas */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={`${
                      item.professional === 'valeria'
                        ? 'text-purple-400 fill-purple-400'
                        : 'text-blue-400 fill-blue-400'
                    }`}
                  />
                ))}
              </div>

              {/* Texto do Depoimento */}
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                &ldquo;{item.text}&rdquo;
              </p>

              {/* Informações do Cliente */}
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 shrink-0">
                  <Image
                    src={item.photo}
                    alt={item.name}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{item.name}</p>
                  <p className="text-xs text-white/30">
                    {item.professional === 'valeria' ? 'Valéria' : 'Bruno'}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
