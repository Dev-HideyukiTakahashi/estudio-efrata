'use client';

import { useState, useCallback } from 'react';
import type { BookingState, Service } from '@/types';

// Estado inicial padrão para reiniciar ou iniciar o fluxo de agendamento
const initialState: BookingState = {
  step: 1,
  professional: null,
  service: null,
  date: null,
  time: null,
  customerName: '',
  customerPhone: '',
  notes: '',
};

export function useBooking() {
  const [state, setState] = useState<BookingState>(initialState);

  // Função de evento: Reseta o fluxo inteiro para o estado inicial
  const reset = useCallback(() => {
    setState(initialState);
  }, []);

  // Função de evento: Define o profissional e avança para a etapa de serviços (Etapa 2)
  const setProfessional = useCallback((professional: 'valeria' | 'bruno') => {
    setState(prev => ({
      ...prev,
      professional,
      service: null, // Reseta dependências caso troque de profissional
      date: null,
      time: null,
      step: 2,
    }));
  }, []);

  // Função de evento: Define o serviço e avança para a etapa de datas (Etapa 3)
  const setService = useCallback((service: Service) => {
    setState(prev => ({
      ...prev,
      service,
      step: 3,
    }));
  }, []);

  // Função de evento: Define a data e avança para a etapa de horários (Etapa 4)
  const setDate = useCallback((date: Date) => {
    setState(prev => ({
      ...prev,
      date,
      time: null, // Reseta o horário caso mude o dia
      step: 4,
    }));
  }, []);

  // Função de evento: Define o horário e avança para a etapa de dados do cliente (Etapa 5)
  const setTime = useCallback((time: string) => {
    setState(prev => ({
      ...prev,
      time,
      step: 5,
    }));
  }, []);

  // Função de evento: Preenche as informações de contato e avança para a confirmação (Etapa 6)
  const setCustomerInfo = useCallback((name: string, phone: string, notes: string) => {
    setState(prev => ({
      ...prev,
      customerName: name,
      customerPhone: phone,
      notes,
      step: 6,
    }));
  }, []);

  // Função de evento: Retorna para a etapa anterior (limitado ao mínimo de 1)
  const goBack = useCallback(() => {
    setState(prev => ({
      ...prev,
      step: Math.max(1, prev.step - 1),
    }));
  }, []);

  // Função de evento: Navega diretamente para uma etapa específica
  const goToStep = useCallback((step: number) => {
    setState(prev => ({
      ...prev,
      step,
    }));
  }, []);

  return {
    state,
    setProfessional,
    setService,
    setDate,
    setTime,
    setCustomerInfo,
    goBack,
    goToStep,
    reset,
  };
}
