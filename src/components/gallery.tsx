'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

// ==========================================
// 1. DADOS DOS ITENS DA GALERIA (PORTFÓLIO)
// ==========================================
const galleryItems = [
  // --- VALÉRIA ---
  {
    id: 1,
    src: '/images/valeria-portfolio/1.png',
    alt: 'Penteado de Festa Glamour',
    category: 'feminino',
  },
  { id: 2, src: '/images/valeria-portfolio/2.png', alt: 'Morena Iluminada', category: 'feminino' },
  {
    id: 3,
    src: '/images/valeria-portfolio/3.png',
    alt: 'Ruivo Acobreado Intenso',
    category: 'feminino',
  },
  { id: 4, src: '/images/valeria-portfolio/4.png', alt: 'Loiro Perolado', category: 'feminino' },
  { id: 5, src: '/images/valeria-portfolio/5.png', alt: 'Brilho Espelhado', category: 'feminino' },
  { id: 6, src: '/images/valeria-portfolio/6.png', alt: 'Corte em Camadas', category: 'feminino' },

  // --- BRUNO ---
  {
    id: 7,
    src: '/images/bruno-portfolio/1.png',
    alt: 'Degradê Perfeito (Skin Fade)',
    category: 'masculino',
  },
  { id: 8, src: '/images/bruno-portfolio/2.png', alt: 'Platinado (Nevou)', category: 'masculino' },
  {
    id: 9,
    src: '/images/bruno-portfolio/3.png',
    alt: 'Corte Afro com Nudred',
    category: 'masculino',
  },
  {
    id: 10,
    src: '/images/bruno-portfolio/4.png',
    alt: 'Barba Lenhador Alinhada',
    category: 'masculino',
  },
  {
    id: 11,
    src: '/images/bruno-portfolio/5.png',
    alt: 'Barba Curta e Desenhada',
    category: 'masculino',
  },
  {
    id: 12,
    src: '/images/bruno-portfolio/6.png',
    alt: 'Experiência Barboterapia',
    category: 'masculino',
  },
];

const categories = ['todos', 'feminino', 'masculino'] as const;

export function Gallery() {
  // Variável de estado para controlar a categoria ativa do filtro
  const [isActiveCategory, setIsActiveCategory] = useState<string>('todos');

  // Variável de dados filtrada com base na categoria selecionada
  const filteredItems =
    isActiveCategory === 'todos'
      ? galleryItems
      : galleryItems.filter(item => item.category === isActiveCategory);

  // --------------------------------------------------------
  // LÓGICA DE ESTILOS DINÂMICOS (DRY)
  // --------------------------------------------------------
  const getFilterStyles = (cat: string, isActive: boolean) => {
    if (isActive) {
      if (cat === 'feminino') return 'bg-purple-500/10 text-purple-300 border-purple-500/30';
      if (cat === 'masculino') return 'bg-blue-500/10 text-blue-300 border-blue-500/30';
      return 'bg-white/10 text-white border-white/20';
    } else {
      if (cat === 'feminino')
        return 'text-white/40 border-transparent hover:text-purple-300 hover:border-purple-500/30';
      if (cat === 'masculino')
        return 'text-white/40 border-transparent hover:text-blue-300 hover:border-blue-500/30';
      return 'text-white/40 border-transparent hover:text-white border-white/20';
    }
  };

  // Função de evento para alterar a categoria ativa
  const handleToggleCategory = (category: string) => {
    setIsActiveCategory(category);
  };

  return (
    // ==========================================
    // 2. SEÇÃO PRINCIPAL DA GALERIA
    // ==========================================
    <section id="galeria" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-black via-[#0a0a0f] to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
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

          {/* Filtros */}
          <div className="flex justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => handleToggleCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm border transition-all duration-300 cursor-pointer ${getFilterStyles(
                  cat,
                  isActiveCategory === cat,
                )}`}
              >
                {cat === 'todos' ? 'Todos' : cat === 'feminino' ? 'Feminino' : 'Masculino'}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ========================================== */}
        {/* 3. GRADE DOS ITENS DA GALERIA (GRID SIMÉTRICO) */}
        {/* ========================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.05, duration: 0.4, ease: 'easeOut' }}
              className={`group relative rounded-2xl cursor-pointer transition-all duration-500 border border-white/5 ${
                item.category === 'feminino'
                  ? 'hover:border-purple-400/25 hover:shadow-[0_0_50px_rgba(168,85,247,0.7)]'
                  : 'hover:border-blue-400/25 hover:shadow-[0_0_50px_rgba(59,130,246,0.7)]'
              }`}
            >
              {/* Contêiner Interno */}
              <div className="relative aspect-3/4 rounded-2xl overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />

                  {/* Overlay com Texto no Hover */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 z-10">
                    <p className="text-white font-medium text-sm drop-shadow-md">{item.alt}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
