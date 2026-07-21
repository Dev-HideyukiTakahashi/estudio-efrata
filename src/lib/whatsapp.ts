const WHATSAPP_NUMBER = '5511942051849';

export function buildWhatsAppMessage(params: {
  customerName: string;
  customerPhone: string;
  professional: string;
  service: string;
  date: string;
  time: string;
}): string {
  const message = [
    '✨ *ESTÚDIO EFRATA* ✨',
    '',
    '*Novo Agendamento*',
    '──────────────',
    '',
    '👤 *CLIENTE*',
    `• Nome: ${params.customerName}`,
    `• Telefone: ${params.customerPhone}`,
    '',
    '✂️ *DETALHES DO SERVIÇO*',
    `• Profissional: ${params.professional}`,
    `• Serviço: ${params.service}`,
    '',
    '📅 *DATA E HORÁRIO*',
    `• Dia: ${params.date}`,
    `• Horário: ${params.time}`,
    '',
  ].join('\n');

  return message;
}

export function getWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
