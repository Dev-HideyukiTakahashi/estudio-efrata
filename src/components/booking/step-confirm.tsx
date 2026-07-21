'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle, Send, MessageCircle } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import { getSupabase } from '@/lib/supabase';
import { buildWhatsAppMessage, getWhatsAppLink } from '@/lib/whatsapp';
import type { Service } from '@/types';

const supabase = getSupabase();

interface StepConfirmProps {
  professional: 'valeria' | 'bruno';
  service: Service;
  date: Date;
  time: string;
  customerName: string;
  customerPhone: string;
  notes: string;
  onBack: () => void;
  onReset: () => void;
}

export function StepConfirm({
  professional,
  service,
  date,
  time,
  customerName,
  customerPhone,
  notes,
  onBack,
  onReset,
}: StepConfirmProps) {
  // Variáveis de estado
  const [isAwaitingWhatsApp, setIsAwaitingWhatsApp] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Função para gerar a mensagem e o link do WhatsApp
  const generateWhatsAppURL = () => {
    const whatsappMessage = buildWhatsAppMessage({
      customerName,
      customerPhone,
      professional: professional === 'valeria' ? 'Valéria' : 'Bruno',
      service: service.name,
      date: formatDate(date),
      time,
    });
    return getWhatsAppLink(whatsappMessage);
  };

  // Função de evento: Abre o WhatsApp e muda a tela para aguardar a confirmação do cliente
  const handleOpenWhatsApp = () => {
    window.open(generateWhatsAppURL(), '_blank');
    setIsAwaitingWhatsApp(true);
  };

  // Função de evento: O cliente clicou em "Não", reabre o WhatsApp
  const handleRetryWhatsApp = () => {
    window.open(generateWhatsAppURL(), '_blank');
  };

  // Função de evento: Confirma que enviou a mensagem, salva no banco e fecha o modal
  const handleConfirmBooking = async () => {
    setIsSubmitting(true);
    setError('');

    try {
      const { error: insertError } = await supabase.from('appointments').insert({
        customer_name: customerName,
        customer_phone: customerPhone,
        professional,
        service: service.name,
        date: date.toISOString().split('T')[0],
        time,
        status: 'confirmed',
        notes: notes || null,
      });

      if (insertError) throw insertError;

      // Sucesso: Fecha o modal/reseta o fluxo diretamente
      onReset();
    } catch (err) {
      setError('Erro ao salvar o agendamento no sistema. Tente novamente.');
      setIsSubmitting(false);
    }
  };

  // ---------------------------------------------------------------------------
  // Renderização: Tela 2 - Aguardando confirmação do WhatsApp
  // ---------------------------------------------------------------------------
  if (isAwaitingWhatsApp) {
    return (
      <div className="text-center py-4 space-y-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="w-16 h-16 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center mx-auto"
        >
          <MessageCircle size={32} />
        </motion.div>

        <div className="space-y-2">
          <h3 className="text-xl font-light text-white">Quase lá!</h3>
          <p className="text-white/70 text-sm">
            O salão foi notificado pelo agendamento no WhatsApp?
          </p>
        </div>

        {error && <p className="text-red-400/70 text-xs">{error}</p>}

        <div className="flex flex-col gap-3 mt-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleConfirmBooking}
            disabled={isSubmitting}
            className="w-full py-4 bg-linear-to-r from-green-600 to-emerald-600 text-white rounded-xl text-sm font-medium hover:shadow-lg transition-all disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
          >
            <CheckCircle size={20} />
            {isSubmitting ? 'Salvando...' : 'Sim, notifiquei o salão'}
          </motion.button>

          <button
            onClick={handleRetryWhatsApp}
            disabled={isSubmitting}
            className="w-full py-3 bg-white/5 border border-white/10 text-white/70 rounded-xl text-sm hover:bg-white/10 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <Send size={16} />
            Não, reenviar mensagem
          </button>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // Renderização: Tela 1 - Aviso Inicial (Sem os detalhes para não poluir)
  // ---------------------------------------------------------------------------
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-xl font-light text-white">Finalizar Agendamento</h3>
        <p className="text-white/40 text-sm">Estamos prontos para reservar seu horário.</p>
      </div>

      {/* Aviso Importante Redesenhado */}
      <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-5 flex items-start gap-4">
        <AlertTriangle className="text-orange-400 shrink-0 mt-0.5" size={24} />
        <div className="space-y-1">
          <p className="text-orange-200 text-sm font-medium">Atenção ao WhatsApp</p>
          <p className="text-orange-200/70 text-xs leading-relaxed">
            Lembre-se de notificar o salão enviando a mensagem automática e{' '}
            <strong>voltar para esta tela</strong> para concluir e salvar o seu agendamento no
            sistema.
          </p>
        </div>
      </div>

      {/* Ações: Voltar etapa ou Iniciar Envio */}
      <div className="flex gap-3 pt-2">
        <button
          onClick={onBack}
          className="flex-1 py-3 rounded-xl border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-all text-sm cursor-pointer"
        >
          Voltar
        </button>
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onClick={handleOpenWhatsApp}
          className="flex-[2] py-3 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <MessageCircle size={18} />
          Confirmar e Enviar
        </motion.button>
      </div>
    </div>
  );
}
