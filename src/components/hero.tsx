'use client';

import { motion } from 'framer-motion';
import { Scissors, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 sm:pt-28 pb-16"
    >
      {/* ========================================== */}
      {/* 1. CAMADAS DE FUNDO E GRADIENTES           */}
      {/* ========================================== */}
      <div className="absolute inset-0 bg-linear-to-br from-[#0a0a0f] via-[#0f0a1a] to-[#0a0a1a]" />

      <div className="absolute top-0 left-0 w-1/2 h-full bg-linear-to-r from-purple-900/10 to-transparent" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-lfrom-blue-900/10 to-transparent" />

      {/* Efeitos de Luz / Blur de Fundo */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px]" />

      {/* ========================================== */}
      {/* 2. CONTEÚDO PRINCIPAL (TÍTULO E SUBTÍTULO)   */}
      {/* ========================================== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12"
        >
          {/* Badge de Destaque no Topo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-4"
          >
            <Sparkles size={14} className="text-purple-300" />
            <span className="text-xs tracking-[0.3em] text-white/60 uppercase">
              Experiência Premium
            </span>
          </motion.div>

          {/* Título Principal */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light text-white mb-4 tracking-tight">
            Estúdio{' '}
            <span className="bg-linear-to-r from-purple-300 via-white to-blue-300 bg-clip-text text-transparent font-bold">
              Efrata
            </span>
          </h1>

          {/* Subtítulo Descritivo */}
          <p className="text-base sm:text-lg text-white/50 max-w-xl mx-auto font-light tracking-wide">
            Beleza, estilo e cuidado em uma experiência premium.
          </p>
        </motion.div>

        {/* ========================================== */}
        {/* 3. CARDS DOS PROFISSIONAIS (VALÉRIA & BRUNO) */}
        {/* ========================================== */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start max-w-5xl mx-auto">
          {/* Card da Valéria */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-linear-to-r from-purple-600/20 to-purple-400/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-linear-to-br from-purple-900/30 to-purple-950/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-purple-400 to-purple-700 flex items-center justify-center">
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

          {/* Card do Bruno */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="group"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-linear-to-r from-blue-600/20 to-blue-400/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-linear-to-br from-blue-900/30 to-blue-950/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-400 to-blue-700 flex items-center justify-center">
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
      </div>
    </section>
  );
}
