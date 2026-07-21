'use client';

import { motion } from 'framer-motion';
import { Sparkles, Scissors } from 'lucide-react';

interface StepProfessionalProps {
  onSelect: (professional: 'valeria' | 'bruno') => void;
}

export function StepProfessional({ onSelect }: StepProfessionalProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-light text-white mb-2">Escolha o Profissional</h3>
        <p className="text-white/40 text-sm">Selecione quem você deseja agendar</p>
      </div>

      <div className="grid gap-4">
        {/* Botão de seleção: Valéria */}
        <motion.button
          whileHover={{ scale: 1.01 }} // Reduzido ligeiramente de 1.02 para evitar distorção brusca
          whileTap={{ scale: 0.99 }}
          onClick={() => onSelect('valeria')}
          className="group relative p-6 rounded-2xl bg-linear-to-br from-purple-900/20 to-purple-950/20 border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-300 text-left cursor-pointer transform-[translateZ(0)] backface-hidden"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-linear-to-br from-purple-400 to-purple-700 flex items-center justify-center shrink-0">
              <Sparkles size={24} className="text-white" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">Valéria</h4>
              <p className="text-sm text-purple-300/70">Cabeleireira</p>
              <p className="text-xs text-white/40 mt-1">Cortes, coloração, tratamentos</p>
            </div>
          </div>
        </motion.button>

        {/* Botão de seleção: Bruno */}
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onClick={() => onSelect('bruno')}
          className="group relative p-6 rounded-2xl bg-linear-to-br from-blue-900/20 to-blue-950/20 border border-blue-500/20 hover:border-blue-500/40 transition-colors duration-300 text-left cursor-pointer transform-[translateZ(0)] backface-hidden"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-linear-to-br from-blue-400 to-blue-700 flex items-center justify-center shrink-0">
              <Scissors size={24} className="text-white" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">Bruno</h4>
              <p className="text-sm text-blue-300/70">Barbeiro</p>
              <p className="text-xs text-white/40 mt-1">Cortes masculinos, barba, estilo</p>
            </div>
          </div>
        </motion.button>
      </div>
    </div>
  );
}
