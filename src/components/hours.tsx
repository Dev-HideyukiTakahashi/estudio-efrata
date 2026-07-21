'use client';

import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

// ==========================================
// 1. DADOS DOS HORÁRIOS DE FUNCIONAMENTO
// ==========================================
const schedule = [
  { day: 'Segunda-feira', hours: '08:00 - 18:00' },
  { day: 'Terça-feira', hours: '08:00 - 18:00' },
  { day: 'Quarta-feira', hours: '08:00 - 18:00' },
  { day: 'Quinta-feira', hours: '08:00 - 18:00' },
  { day: 'Sexta-feira', hours: '08:00 - 18:00' },
  { day: 'Sábado', hours: '08:00 - 18:00' },
  { day: 'Domingo', hours: 'Fechado' },
];

export function Hours() {
  return (
    // ==========================================
    // 2. SEÇÃO PRINCIPAL DE HORÁRIOS
    // ==========================================
    <section className="relative py-20 overflow-hidden">
      {/* Gradiente de fundo base */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0f] via-black to-[#0a0a0f]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto"
        >
          {/* Cabeçalho da Seção */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-purple-500/20 to-blue-500/20 border border-white/10 mb-4">
              <Clock size={28} className="text-white/70" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-light text-white mb-2">
              Horários de Funcionamento
            </h2>
            <p className="text-white/40 text-sm">Segunda a sábado, horário comercial</p>
          </div>

          {/* ========================================== */}
          {/* 3. LISTA DE DIAS E HORÁRIOS COM HOVER     */}
          {/* ========================================== */}
          <div className="rounded-2xl backdrop-blur-sm bg-white/2 border border-white/10 overflow-hidden">
            {schedule.map((item, index) => (
              <div
                key={item.day}
                className={`flex items-center justify-between px-6 py-4 transition-all duration-300 hover:bg-white/4 cursor-default ${
                  index < schedule.length - 1 ? 'border-b border-white/5' : ''
                } ${item.hours === 'Fechado' ? 'text-white/30' : 'text-white/70'}`}
              >
                <span className="text-sm transition-colors duration-300 hover:text-white">
                  {item.day}
                </span>
                <span
                  className={`text-sm font-medium ${
                    item.hours === 'Fechado' ? 'text-red-400/60' : 'text-white/90'
                  }`}
                >
                  {item.hours}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
