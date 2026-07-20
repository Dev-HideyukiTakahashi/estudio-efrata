'use client';

import { motion } from 'framer-motion';
import { Scissors, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    // Seção Hero com espaçamento inferior ajustado para mobile (pb-20 sm:pb-0)
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden pt-32 sm:pt-28 md:pt-0 pb-20 sm:pb-0"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0f0a1a] to-[#0a0a1a]" />

      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-purple-900/10 to-transparent" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
          >
            <Sparkles size={14} className="text-purple-300" />
            <span className="text-xs tracking-[0.3em] text-white/60 uppercase">
              Experiência Premium
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-light text-white mb-6 tracking-tight mt-4 sm:mt-0">
Estúdio{' '}
          <span className="bg-gradient-to-r from-purple-300 via-white to-blue-300 bg-clip-text text-transparent font-bold">
              Efrata
            </span>
          </h1>

          <div className="block sm:hidden mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <Sparkles size={12} className="text-purple-300" />
              <span className="text-[10px] tracking-[0.25em] text-white/60 uppercase">
                Experiência Premium
              </span>
            </div>
          </div>

          <p className="hidden sm:block text-lg sm:text-xl text-white/50 max-w-2xl mx-auto font-light tracking-wide">
            Beleza, estilo e cuidado em uma experiência premium.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-purple-400/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-gradient-to-br from-purple-900/30 to-purple-950/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-700 flex items-center justify-center">
                    <Sparkles size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Valéria</h3>
                    <p className="text-sm text-purple-300/70">Cabeleireira</p>
                  </div>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  Especialista em transformação, cortes, coloração e cuidados personalizados.
                  Apaixonada por realçar a beleza única de cada cliente.
                </p>
                <div className="mt-6 flex gap-2">
                  {['Corte', 'Coloração', 'Tratamento'].map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300/70 border border-purple-500/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="group"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-gradient-to-br from-blue-900/30 to-blue-950/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-700 flex items-center justify-center">
                    <Scissors size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Bruno</h3>
                    <p className="text-sm text-blue-300/70">Barbeiro</p>
                  </div>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  Barbeiro especialista em cortes masculinos, barba e estilo personalizado. Cada
                  detalhe pensado para o homem moderno.
                </p>
                <div className="mt-6 flex gap-2">
                  {['Corte', 'Barba', 'Estilo'].map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-300/70 border border-blue-500/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="hidden sm:flex justify-center mt-16"
        >
          <div className="flex items-center gap-4 text-white/30 text-xs tracking-[0.2em] uppercase">
            <div className="w-12 h-px bg-gradient-to-r from-purple-500/50 to-transparent" />
            <span>Rolagem</span>
            <div className="w-12 h-px bg-gradient-to-l from-blue-500/50 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
