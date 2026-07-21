'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

// ==========================================
// 1. DADOS DOS ITENS DA GALERIA (PORTFÓLIO)
// ==========================================
const galleryItems = [
  {
    id: 1,
    src: '/images/placeholder.svg',
    alt: 'Corte feminino',
    category: 'feminino',
    size: 'large',
  },
  { id: 2, src: '/images/placeholder.svg', alt: 'Coloração', category: 'feminino', size: 'small' },
  { id: 3, src: '/images/placeholder.svg', alt: 'Penteado', category: 'feminino', size: 'small' },
  {
    id: 4,
    src: '/images/placeholder.svg',
    alt: 'Corte masculino',
    category: 'masculino',
    size: 'small',
  },
  { id: 5, src: '/images/placeholder.svg', alt: 'Barba', category: 'masculino', size: 'large' },
  {
    id: 6,
    src: '/images/placeholder.svg',
    alt: 'Corte feminino',
    category: 'feminino',
    size: 'small',
  },
  {
    id: 7,
    src: '/images/placeholder.svg',
    alt: 'Barboterapia',
    category: 'masculino',
    size: 'small',
  },
  {
    id: 8,
    src: '/images/placeholder.svg',
    alt: 'Transformação',
    category: 'feminino',
    size: 'medium',
  },
  {
    id: 9,
    src: '/images/placeholder.svg',
    alt: 'Estilo masculino',
    category: 'masculino',
    size: 'medium',
  },
];

const categories = ['todos', 'feminino', 'masculino'] as const;

export function Gallery() {
  // Variável de estado para controlar a categoria ativa do filtro
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  // Variável de dados filtrada com base na categoria selecionada
  const filtered =
    activeCategory === 'todos'
      ? galleryItems
      : galleryItems.filter(item => item.category === activeCategory);

  return (
    // ==========================================
    // 2. SEÇÃO PRINCIPAL DA GALERIA
    // ==========================================
    <section id="galeria" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-black via-[#0a0a0f] to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção e Filtros de Categoria */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] text-white/40 uppercase mb-4 block">
            Galeria
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-8">
            Nosso{' '}
            <span className="bg-linear-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent font-semibold">
              Portfólio
            </span>
          </h2>

          {/* Botões de Filtro */}
          <div className="flex justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-white/10 text-white border border-white/20'
                    : 'text-white/40 hover:text-white/70 border border-transparent'
                }`}
              >
                {cat === 'todos' ? 'Todos' : cat === 'feminino' ? 'Feminino' : 'Masculino'}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ========================================== */}
        {/* 3. GRID MASONRY DOS ITENS DA GALERIA       */}
        {/* ========================================== */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {filtered.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="break-inside-avoid group relative overflow-hidden rounded-2xl"
            >
              <div className="bg-white/5 aspect-3/4 rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-white/20 transition-all duration-500">
                <div className="text-center p-6">
                  <div
                    className={`w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center ${
                      item.category === 'feminino' ? 'bg-purple-500/10' : 'bg-blue-500/10'
                    }`}
                  >
                    <span
                      className={`text-2xl ${
                        item.category === 'feminino' ? 'text-purple-300' : 'text-blue-300'
                      }`}
                    >
                      {item.category === 'feminino' ? '♀' : '♂'}
                    </span>
                  </div>
                  <p className="text-white/30 text-sm">{item.alt}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
