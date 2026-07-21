'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

// Types e Interfaces
interface NavItem {
  label: string;
  href: string;
}

interface HeaderProps {
  onBookClick: () => void;
}

// Dados de Navegação
const navigationItems: NavItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Agendamento', href: '#agendamento' },
];

export function Header({ onBookClick }: HeaderProps) {
  // Variáveis de estado com prefixo 'is' e descritivas
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função de evento com prefixo 'handle' corrigindo o fechamento e clique do menu mobile
  const handleMobileNavClick = (href: string) => {
    setIsMobileMenuOpen(false);

    // Pequeno atraso para garantir que a animação feche limpa antes de rolar até a âncora
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const handleBookNowClick = () => {
    setIsMobileMenuOpen(false);
    onBookClick();
  };

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent',
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-xl sm:text-2xl font-light tracking-[0.2em] text-white">
            ESTÚDIO<span className="font-bold text-purple-300">EFRATA</span>
          </a>

          {/* Navegação Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigationItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/70 hover:text-white transition-colors tracking-wider"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={onBookClick}
              className="ml-4 px-6 py-2.5 bg-linear-to-r from-purple-600 to-blue-600 text-white text-sm font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 tracking-wider"
            >
              Agendar Agora
            </button>
          </nav>

          {/* Botão Menu Mobile */}
          <button
            onClick={handleToggleMobileMenu}
            className="lg:hidden text-white p-2"
            aria-label="Abrir Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile com AnimatePresence */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/5 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map(item => (
                <button
                  key={item.href}
                  onClick={() => handleMobileNavClick(item.href)}
                  className="block w-full text-left text-white/70 hover:text-white transition-colors tracking-wider py-2 bg-transparent border-none cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={handleBookNowClick}
                className="w-full px-6 py-3 bg-linear-to-r from-purple-600 to-blue-600 text-white text-sm font-medium rounded-full tracking-wider"
              >
                Agendar Agora
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
