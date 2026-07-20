"use client"

import { motion } from "framer-motion"
import { MapPin, Navigation } from "lucide-react"

const address = "Cipó Guaçu, SP"
const mapsUrl = "https://maps.google.com/maps?q=Cipó+Guaçu+SP"

export function Location() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0f] to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs tracking-[0.3em] text-white/40 uppercase mb-4 block">
              Localização
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">
Estúdio{" "}
          <span className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent font-bold">
                Efrata
              </span>
            </h2>

            <div className="flex items-start gap-3 mb-6">
              <MapPin size={20} className="text-purple-300 mt-1 shrink-0" />
              <div>
                <p className="text-white/70 font-medium">{address}</p>
                <p className="text-white/40 text-sm">Interior de São Paulo</p>
              </div>
            </div>

            <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-md">
              Estamos localizados em Cipó Guaçu, com fácil acesso e estacionamento.
              Venha nos visitar e viver uma experiência premium.
            </p>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm text-white/70 hover:text-white hover:border-white/30 transition-all duration-300"
            >
              <Navigation size={16} />
              Como Chegar
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] bg-white/[0.02]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117727.05252944807!2d-46.88603545!3d-23.5224655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cefb170559dd15%3A0x8cecec6f7b81c16f!2sCip%C3%B3%20Gua%C3%A7u%2C%20SP%2C%2006930-000!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Estúdio Efrata"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
