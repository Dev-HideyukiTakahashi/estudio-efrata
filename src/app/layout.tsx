import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Estúdio Efrata | Beleza e Cuidado Premium',
    template: '%s | Estúdio Efrata',
  },
  description:
    'Beleza, estilo e cuidado em uma experiência premium no Cipó Guaçu, SP. Agende seu horário com os melhores profissionais.',
  keywords: [
    'estúdio de beleza',
    'salão de cabeleireiro',
    'estética',
    'Cipó Guaçu',
    'agendamento online',
  ],
  authors: [{ name: 'Kashi Systems' }],
  creator: 'Kashi Systems',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://estudio-efrata.netlify.app/',
    title: 'Estúdio Efrata | Experiência Premium',
    description: 'Beleza, estilo e cuidado em uma experiência premium.',
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
