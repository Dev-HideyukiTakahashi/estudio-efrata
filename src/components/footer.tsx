'use client';

import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-16 border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-[#0a0a0f]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-light tracking-[0.2em] text-white mb-2">
              ESTÚDIO<span className="font-bold text-purple-300">EFRATA</span>
            </h3>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Beleza, estilo e cuidado em uma experiência premium.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] text-white/50 uppercase mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href="tel:+5511942051849"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors"
              >
                <Phone size={14} className="text-purple-300/50" />
                (11) 94205-1849
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors"
              >
                <Instagram size={14} className="text-purple-300/50" />
                @estudioefrata
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] text-white/50 uppercase mb-4">Localização</h4>
            <div className="flex items-start gap-3">
              <MapPin size={14} className="text-blue-300/50 mt-1 shrink-0" />
              <p className="text-sm text-white/50">Cipó Guaçu, SP</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Estúdio Efrata. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/20">
            <span>Feito com dedicação</span>
            <span>•</span>
            <span className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
              Premium Beauty
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
