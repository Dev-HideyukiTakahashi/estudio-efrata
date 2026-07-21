'use client';

import { motion } from 'framer-motion';

export function About() {
  return (
    // ==========================================
    // 1. SEÇÃO PRINCIPAL (SOBRE NÓS)
    // ==========================================
    <section id="sobre" className="relative py-32 overflow-hidden">
      {/* Gradiente de fundo base */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0f] via-black to-[#0a0a0f]" />

      {/* Efeitos de luz / Blur decorativos */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[128px]" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[128px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ========================================== */}
          {/* 2. BLOCO DE TEXTO E ESTATÍSTICAS           */}
          {/* ========================================== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Etiqueta superior */}
            <span className="text-xs tracking-[0.3em] text-white/40 uppercase mb-4 block">
              Sobre Nós
            </span>

            {/* Título Principal */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6">
              Onde o talento se encontra com a{' '}
              <span className="bg-linear-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent font-semibold">
                excelência
              </span>
            </h2>

            {/* Parágrafos Descritivos */}
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              O Estúdio Efrata nasceu da paixão de um casal pela beleza e pelo estilo. Valéria e
              Bruno uniram seus talentos para criar um espaço único onde cada cliente vive uma
              experiência premium.
            </p>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              Aqui, cada corte, cada coloração e cada barba são feitos com dedicação, produtos
              profissionais e a certeza de que você sairá daqui se sentindo incrível.
            </p>

            {/* Bloco de Métricas / Estatísticas */}
            <div className="flex gap-8">
              <div>
                <p className="text-3xl font-bold bg-linear-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent">
                  +500
                </p>
                <p className="text-xs text-white/40 mt-1">Clientes Atendidos</p>
              </div>
              <div>
                <p className="text-3xl font-bold bg-linear-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
                  +5
                </p>
                <p className="text-xs text-white/40 mt-1">Anos de Experiência</p>
              </div>
              <div>
                <p className="text-3xl font-bold bg-linear-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                  98%
                </p>
                <p className="text-xs text-white/40 mt-1">Satisfação</p>
              </div>
            </div>
          </motion.div>

          {/* ========================================== */}
          {/* 3. BLOCO VISUAL (CARDS DOS FUNDADORES)     */}
          {/* ========================================== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {/* Card da Valéria */}
            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="rounded-2xl aspect-3/4 bg-linear-to-br from-purple-900/20 to-purple-950/20 border border-purple-500/10 flex items-center justify-center hover:shadow-2xl hover:shadow-purple-500/10 transition-shadow cursor-default"
              >
                <div className="text-center p-4">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-linear-to-br from-purple-400 to-purple-700 flex items-center justify-center">
                    <span className="text-white text-2xl">V</span>
                  </div>
                  <p className="text-white/70 text-sm font-medium">Valéria</p>
                  <p className="text-purple-300/50 text-xs">Cabeleireira</p>
                </div>
              </motion.div>
            </div>

            {/* Card do Bruno */}
            <div className="space-y-4 pt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="rounded-2xl aspect-3/4 bg-linear-to-br from-blue-900/20 to-blue-950/20 border border-blue-500/10 flex items-center justify-center hover:shadow-2xl hover:shadow-blue-500/10 transition-shadow cursor-default"
              >
                <div className="text-center p-4">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-linear-to-br from-blue-400 to-blue-700 flex items-center justify-center">
                    <span className="text-white text-2xl">B</span>
                  </div>
                  <p className="text-white/70 text-sm font-medium">Bruno</p>
                  <p className="text-blue-300/50 text-xs">Barbeiro</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
