/**
 * Utilitário de classes condicionais (equivalente leve ao clsx/tailwind-merge)
 * Filtra valores falsy e une as classes em uma única string espaçada.
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Formata um valor numérico para o padrão de moeda Real Brasileiro (BRL)
 */
export function formatPrice(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

/**
 * Formata um objeto Date para o formato de data por extenso em português do Brasil
 * Exemplo: 21 de julho de 2026
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

/**
 * Gera dinamicamente os horários disponíveis (slots) do dia com base no expediente
 * e nos agendamentos já cadastrados no banco de dados.
 */
export function generateTimeSlots(
  existingAppointments: { time: string; date: string }[],
  date: string,
  opening = '08:00',
  closing = '18:00',
  interval = 30,
): { time: string; available: boolean }[] {
  const slots: { time: string; available: boolean }[] = [];
  const [openH, openM] = opening.split(':').map(Number);
  const [closeH, closeM] = closing.split(':').map(Number);
  const openMinutes = openH * 60 + openM;
  const closeMinutes = closeH * 60 + closeM;

  // Mapeia os horários ocupados e adiciona o bloqueio de 60 minutos (próximo slot de 30 min)
  const bookedTimesSet = new Set<string>();
  existingAppointments
    .filter(a => a.date === date)
    .forEach(a => {
      bookedTimesSet.add(a.time); // Trava o horário exato agendado

      // Converte o horário agendado para minutos e bloqueia +30 min (totalizando 60 min de duração)
      const [h, m] = a.time.split(':').map(Number);
      const bookedTotalMin = h * 60 + m + interval;
      const nextH = Math.floor(bookedTotalMin / 60);
      const nextMin = bookedTotalMin % 60;
      const nextTime = `${String(nextH).padStart(2, '0')}:${String(nextMin).padStart(2, '0')}`;

      bookedTimesSet.add(nextTime); // Trava o slot seguinte
    });

  for (let m = openMinutes; m < closeMinutes; m += interval) {
    const h = Math.floor(m / 60);
    const min = m % 60;
    const time = `${String(h).padStart(2, '0')}:${String(min).padStart(2, '0')}`;
    slots.push({
      time,
      available: !bookedTimesSet.has(time),
    });
  }

  return slots;
}
