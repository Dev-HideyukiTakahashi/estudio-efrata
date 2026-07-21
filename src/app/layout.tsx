import type { Metadata } from 'next';
import './globals.css';

/**
 * Metadados globais da aplicação otimizados para SEO agressivo.
 * Abrange buscas focadas em cabeleireira, cortes femininos e masculinos, barbeiro, cabelo e barba, hidratação e tratamentos.
 */
export const metadata: Metadata = {
  title: {
    default: 'Estúdio Efrata | Salão de Cabeleireiro, Barbeiro e Estética em Cipó Guaçu',
    template: '%s | Estúdio Efrata',
  },
  description:
    'Procurando o melhor salão de cabeleireiro e barbearia em Cipó Guaçu, SP? No Estúdio Efrata você encontra corte de cabelo feminino e masculino, hidratação profunda, coloração, barba e tratamentos capilares premium. Agende seu horário!',
  keywords: [
    'salão de cabeleireiro',
    'salão Cipó Guaçu',
    'cabeleireira Cipó Guaçu',
    'barbeiro',
    'barbearia',
    'corte de cabelo feminino',
    'corte masculino',
    'hidratação capilar',
    'tratamento para cabelo',
    'cabelo e barba',
    'coloração de cabelo',
    'estúdio de beleza Cipó Guaçu',
    'agendamento online salão',
  ],
  authors: [{ name: 'Kashi Systems' }],
  creator: 'Kashi Systems',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://estudio-efrata.netlify.app/',
    title: 'Estúdio Efrata | Cabeleireira, Barbeiro e Cuidados Capilares',
    description:
      'Especialistas em corte de cabelo, hidratação, barbearia e tratamentos premium em Cipó Guaçu. Agende online!',
    siteName: 'Estúdio Efrata',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-background text-white font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
