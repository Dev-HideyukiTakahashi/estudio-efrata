'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  format,
  isSameMonth,
  isSameDay,
  isBefore,
  startOfDay,
  isToday,
} from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface StepDateProps {
  onSelect: (date: Date) => void;
  onBack: () => void;
}

export function StepDate({ onSelect, onBack }: StepDateProps) {
  // Variável de estado para controlar o mês exibido atualmente no calendário
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Data atual zerando as horas para comparação correta de dias passados
  const today = startOfDay(new Date());

  // Memoriza o cálculo dos dias do calendário para evitar reprocessamentos desnecessários
  const days = useMemo(() => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);
    const calStart = startOfWeek(monthStart, { weekStartsOn: 0 });
    const calEnd = endOfWeek(monthEnd, { weekStartsOn: 0 });
    return eachDayOfInterval({ start: calStart, end: calEnd });
  }, [currentMonth]);

  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-light text-white mb-2">Escolha a Data</h3>
        <p className="text-white/40 text-sm">Selecione o dia para o agendamento</p>
      </div>

      {/* Cabeçalho do Calendário: Navegação entre Meses */}
      <div className="flex items-center justify-between mb-4">
        {/* Botão para voltar ao mês anterior */}
        <button
          onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
          className="p-2 rounded-lg hover:bg-white/5 text-white/50 hover:text-white transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        {/* Nome do mês e ano atual formatados em português */}
        <h4 className="text-white/80 font-medium">
          {format(currentMonth, 'MMMM yyyy', { locale: ptBR })}
        </h4>
        {/* Botão para avançar para o próximo mês */}
        <button
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          className="p-2 rounded-lg hover:bg-white/5 text-white/50 hover:text-white transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Grade de Dias da Semana e do Mês */}
      <div className="grid grid-cols-7 gap-1">
        {/* Rótulos dos dias da semana */}
        {weekDays.map(day => (
          <div key={day} className="text-center text-xs text-white/30 py-2">
            {day}
          </div>
        ))}

        {/* Renderização dinâmica dos dias do mês */}
        {days.map(day => {
          // Desativa datas anteriores ao dia de hoje
          const isDisabled = isBefore(day, today) && !isToday(day);
          // Verifica se o dia pertence ao mês atual exibido
          const isCurrentMonth = isSameMonth(day, currentMonth);

          return (
            <motion.button
              key={day.toISOString()}
              whileHover={!isDisabled ? { scale: 1.1 } : undefined}
              whileTap={!isDisabled ? { scale: 0.95 } : undefined}
              disabled={isDisabled}
              onClick={() => !isDisabled && onSelect(day)}
              className={`aspect-square rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-center ${
                !isCurrentMonth
                  ? 'text-white/10'
                  : isDisabled
                    ? 'text-white/10 cursor-not-allowed'
                    : isToday(day)
                      ? 'bg-linear-to-r from-purple-600/30 to-blue-600/30 text-white border border-white/20'
                      : 'text-white/60 hover:bg-white/5 hover:text-white'
              }`}
            >
              {format(day, 'd')}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
