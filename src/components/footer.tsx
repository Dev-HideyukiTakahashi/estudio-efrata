'use client';

import { MapPin, Phone, Instagram } from 'lucide-react';

// ==========================================
// 1. DADOS DE CONTATO E CONFIGURAÇÕES
// ==========================================
const whatsappNumber = '5511942051849';
const whatsappMessage = encodeURIComponent(
  'Olá! Vim através do site e gostaria de agendar um horário.',
);
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    // ==========================================
    // 2. SEÇÃO PRINCIPAL DO FOOTER
    // ==========================================
    <footer className="relative py-16 border-t border-white/5 overflow-hidden">
      {/* Fundo principal */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-[#0a0a0f] to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grade de Informações */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Coluna 1: Nome e Descrição */}
          <div>
            <h3 className="text-xl font-light tracking-[0.2em] text-white mb-2">
              ESTÚDIO<span className="font-bold text-purple-300">EFRATA</span>
            </h3>
            <p className="text-[#a1a1aa] text-sm leading-relaxed max-w-xs">
              Beleza, estilo e cuidado em uma experiência premium.
            </p>
          </div>

          {/* Coluna 2: Contato */}
          <div>
            <h4 className="text-xs tracking-[0.2em] text-[#a1a1aa] uppercase mb-4">Contato</h4>
            <div className="space-y-3">
              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#a1a1aa] hover:text-white transition-colors cursor-pointer group"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <Phone size={14} />
                </div>
                <span>(11) 94205-1849</span>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#a1a1aa] hover:text-white transition-colors cursor-pointer group"
              >
                <div className="w-7 h-7 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-300 group-hover:scale-110 transition-transform">
                  <Instagram size={14} />
                </div>
                <span>@estudioefrata</span>
              </a>
            </div>
          </div>

          {/* Coluna 3: Localização */}
          <div>
            <h4 className="text-xs tracking-[0.2em] text-[#a1a1aa] uppercase mb-4">Localização</h4>
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-blue-300/60 mt-1 shrink-0" />
              <div>
                <p className="text-sm text-white/70 font-medium">Cipó Guaçu, SP</p>
                <p className="text-xs text-[#a1a1aa] mt-0.5">Rua Example, 99</p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================== */}
        {/* 3. BARRA INFERIOR (NotNull Systems & Copyright) */}
        {/* ========================================== */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-4 text-center sm:text-left">
          {/* Assinatura NotNull Systems com Logo */}
          <a
            href="https://notnullsystems.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 group cursor-pointer"
          >
            {/* Textos da Assinatura no mesmo padrão do site principal */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 items-center">
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold tracking-widest text-white/50 uppercase transition-colors duration-300 group-hover:text-white/70">
                  NotNull
                </span>
                <span className="text-[12px] font-light tracking-[0.2em] text-white/30 uppercase transition-colors duration-300 group-hover:text-white/50">
                  Systems
                </span>
              </div>

              <span className="text-[12px] font-light tracking-[0.15em] text-[#c9a94e]/70 italic sm:border-l sm:border-white/10 sm:pl-4 transition-colors duration-300 group-hover:text-[#c9a94e]">
                Always present.
              </span>
            </div>
          </a>

          {/* Copyright do Cliente */}
          <p className="text-xs font-medium text-[#414144]">
            &copy; {currentYear} Estúdio Efratá. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
