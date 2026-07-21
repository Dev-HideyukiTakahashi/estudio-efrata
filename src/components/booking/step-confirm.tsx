'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Calendar, Clock, User, Scissors, MapPin } from 'lucide-react';
import { formatDate, formatPrice } from '@/lib/utils';
import { getSupabase } from '@/lib/supabase';
const supabase = getSupabase();
import { buildWhatsAppMessage, getWhatsAppLink } from '@/lib/whatsapp';
import type { Service } from '@/types';

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
  // Variáveis de estado para controle de carregamento, erros e sucesso do agendamento
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // Função de evento: Confirma e insere o agendamento no Supabase e dispara o link do WhatsApp
  const handleConfirm = async () => {
    setIsLoading(true);
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

      setIsSuccess(true);

      // Constrói e abre automaticamente a mensagem formatada no WhatsApp
      const whatsappMessage = buildWhatsAppMessage({
        customerName,
        customerPhone,
        professional: professional === 'valeria' ? 'Valéria' : 'Bruno',
        service: service.name,
        date: formatDate(date),
        time,
      });

      window.open(getWhatsAppLink(whatsappMessage), '_blank');
    } catch (err) {
      setError('Erro ao confirmar agendamento. Tente novamente.');
    }
    setIsLoading(false);
  };

  // Renderização condicional: Tela de sucesso após a confirmação
  if (isSuccess) {
    return (
      <div className="text-center py-8 space-y-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <CheckCircle size={64} className="mx-auto text-green-400" />
        </motion.div>
        <h3 className="text-2xl font-light text-white">Agendamento Confirmado!</h3>
        <p className="text-white/50 text-sm">
          Seu horário foi reservado com sucesso.
          <br />
          Você foi redirecionado para o WhatsApp.
        </p>
        <button
          onClick={onReset}
          className="w-full py-3 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all cursor-pointer"
        >
          Concluir / Fechar
        </button>
      </div>
    );
  }

  // Renderização padrão: Resumo dos dados e botões de ação
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-light text-white mb-2">Confirmar Agendamento</h3>
        <p className="text-white/40 text-sm">Revise os dados antes de confirmar</p>
      </div>

      <div className="space-y-3">
        {/* Bloco: Nome do Cliente */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
          <User size={16} className="text-purple-300" />
          <div>
            <p className="text-xs text-white/40">Cliente</p>
            <p className="text-sm text-white">{customerName}</p>
          </div>
        </div>

        {/* Bloco: Profissional Escolhido */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
          <Scissors
            size={16}
            className={professional === 'valeria' ? 'text-purple-300' : 'text-blue-300'}
          />
          <div>
            <p className="text-xs text-white/40">Profissional</p>
            <p className="text-sm text-white">{professional === 'valeria' ? 'Valéria' : 'Bruno'}</p>
          </div>
        </div>

        {/* Bloco: Detalhes do Serviço e Preço */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
          <MapPin size={16} className="text-blue-300" />
          <div>
            <p className="text-xs text-white/40">Serviço</p>
            <p className="text-sm text-white">{service.name}</p>
            <p className="text-xs text-white/30">{formatPrice(service.price)}</p>
          </div>
        </div>

        {/* Bloco: Data Selecionada */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
          <Calendar size={16} className="text-purple-300" />
          <div>
            <p className="text-xs text-white/40">Data</p>
            <p className="text-sm text-white">{formatDate(date)}</p>
          </div>
        </div>

        {/* Bloco: Horário Selecionado */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
          <Clock size={16} className="text-blue-300" />
          <div>
            <p className="text-xs text-white/40">Horário</p>
            <p className="text-sm text-white">{time}</p>
          </div>
        </div>
      </div>

      {/* Exibição de Erro, caso ocorra falha na inserção */}
      {error && <p className="text-red-400/70 text-xs text-center">{error}</p>}

      {/* Ações: Voltar etapa ou Confirmar agendamento */}
      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="flex-1 py-3 rounded-xl border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-all text-sm cursor-pointer"
        >
          Voltar
        </button>
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onClick={handleConfirm}
          disabled={loading}
          className="flex-1 py-3 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all disabled:opacity-50 cursor-pointer"
        >
          {loading ? 'Confirmando...' : 'Confirmar Agendamento'}
        </motion.button>
      </div>
    </div>
  );
}
