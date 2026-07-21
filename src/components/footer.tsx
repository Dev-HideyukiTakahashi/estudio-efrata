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

export function Footer() {
  return (
    // ==========================================
    // 2. SEÇÃO PRINCIPAL DO FOOTER
    // ==========================================
    <footer className="relative py-16 border-t border-white/5">
      {/* Fundo principal  */}
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
        {/* 3. BARRA INFERIOR (KASHI SYSTEMS & PALETA) */}
        {/* ========================================== */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#a1a1aa]">
            &copy; {new Date().getFullYear()} Estúdio Efrata. Todos os direitos reservados.
          </p>

          {/* Assinatura Kashi */}
          <a
            href="https://kashi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 text-xs pb-1 cursor-pointer hover:brightness-125"
          >
            <span className="bg-linear-to-r from-amber-400 via-yellow-600 to-amber-800 bg-clip-text text-transparent font-medium ">
              Kashi Systems
            </span>

            <span className="text-zinc-600">•</span>

            <span className="bg-linear-to-r from-amber-400 via-yellow-600   to-amber-800 bg-clip-text text-transparent font-medium">
              Roots define power.
            </span>

            {/* Linha de sublinhado no hover */}
            <span className="absolute bottom-0 left-0 h-px w-0 bg-linear-to-r from-amber-400 to-amber-700 transition-all duration-500 ease-out group-hover:w-full" />
          </a>
        </div>
      </div>
    </footer>
  );
}
