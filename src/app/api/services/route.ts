import { NextResponse } from 'next/server';

// Lista estática completa com os serviços de cabelo e barba da Valéria e do Bruno
const services = [
  {
    id: 'v1',
    professional: 'valeria',
    name: 'Corte Premium Feminino',
    description: 'Corte personalizado com análise de formato de rosto e textura dos fios.',
    duration: 60,
    price: 180,
  },
  {
    id: 'v2',
    professional: 'valeria',
    name: 'Coloração Personalizada',
    description: 'Técnicas exclusivas de coloração com produtos profissionais de alta performance.',
    duration: 120,
    price: 350,
  },
  {
    id: 'v3',
    professional: 'valeria',
    name: 'Tratamento Capilar Luxury',
    description: 'Hidratação profunda com queratina e óleos nobres para revitalizar os fios.',
    duration: 90,
    price: 250,
  },
  {
    id: 'v4',
    professional: 'valeria',
    name: 'Escova Especial',
    description: 'Escova modelada com finalização profissional e proteção térmica.',
    duration: 60,
    price: 150,
  },
  {
    id: 'v5',
    professional: 'valeria',
    name: 'Transformação Completa',
    description: 'Corte, coloração e tratamento em um combo exclusivo de transformação.',
    duration: 180,
    price: 580,
  },
  {
    id: 'b1',
    professional: 'bruno',
    name: 'Corte Masculino Premium',
    description: 'Corte moderno e personalizado com tesoura e máquina.',
    duration: 60,
    price: 120,
  },
  {
    id: 'b2',
    professional: 'bruno',
    name: 'Barba Tradicional',
    description: 'Aparação e modelagem de barba com navalha, toalha quente e balm hidratante.',
    duration: 45,
    price: 80,
  },
  {
    id: 'b3',
    professional: 'bruno',
    name: 'Barboterapia Relaxante',
    description: 'Barba completa com toalhas quentes, óleos essenciais e massagem facial.',
    duration: 75,
    price: 150,
  },
  {
    id: 'b4',
    professional: 'bruno',
    name: 'Corte + Barba Executivo',
    description:
      'Combo completo de corte e barba para o homem que precisa de praticidade e estilo.',
    duration: 90,
    price: 180,
  },
  {
    id: 'b5',
    professional: 'bruno',
    name: 'Design de Estilo Masculino',
    description:
      'Consultoria de estilo capilar masculino com corte personalizado e finalização premium.',
    duration: 90,
    price: 200,
  },
];

/**
 * Rota GET da API para fornecer a listagem de serviços do salão e barbearia.
 */
export async function GET() {
  return NextResponse.json(services);
}
