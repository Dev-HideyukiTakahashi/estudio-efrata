'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { User, Phone, MessageSquare } from 'lucide-react';

// Esquema de validação dos campos do cliente utilizando Zod
const schema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  phone: z
    .string()
    .min(10, 'Telefone inválido')
    .regex(/^[\d\s\-()]+$/, 'Telefone inválido'),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface StepClientInfoProps {
  onSubmit: (name: string, phone: string, notes: string) => void;
  onBack: () => void;
}

export function StepClientInfo({ onSubmit, onBack }: StepClientInfoProps) {
  // Configuração do React Hook Form integrado com validação Zod
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-light text-white mb-2">Seus Dados</h3>
        <p className="text-white/40 text-sm">Informe seus dados para o agendamento</p>
      </div>

      {/* Formulário de captura de informações do cliente */}
      <form
        onSubmit={handleSubmit(data => onSubmit(data.name, data.phone, data.notes || ''))}
        className="space-y-4"
      >
        {/* Campo: Nome do Cliente */}
        <div>
          <div className="relative">
            <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              {...register('name')}
              placeholder="Seu nome"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-purple-500/40 transition-colors"
            />
          </div>
          {errors.name && (
            <p className="text-red-400/70 text-xs mt-1 ml-2">{errors.name.message}</p>
          )}
        </div>

        {/* Campo: Telefone / WhatsApp */}
        <div>
          <div className="relative">
            <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              {...register('phone')}
              placeholder="Telefone / WhatsApp"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-blue-500/40 transition-colors"
            />
          </div>
          {errors.phone && (
            <p className="text-red-400/70 text-xs mt-1 ml-2">{errors.phone.message}</p>
          )}
        </div>

        {/* Campo: Observações (Opcional) */}
        <div>
          <div className="relative">
            <MessageSquare size={16} className="absolute left-3 top-3 text-white/30" />
            <textarea
              {...register('notes')}
              placeholder="Observação (opcional)"
              rows={3}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-purple-500/40 transition-colors resize-none"
            />
          </div>
        </div>

        {/* Botão de Envio com animação do Framer Motion */}
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          type="submit"
          className="w-full py-3 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer"
        >
          Continuar
        </motion.button>
      </form>
    </div>
  );
}
