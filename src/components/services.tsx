"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Clock, Sparkles, Scissors } from "lucide-react"
import { formatPrice } from "@/lib/utils"
import type { Service } from "@/types"

const valeriaServices: Service[] = [
  {
    id: "v1",
    professional: "valeria",
    name: "Corte Premium Feminino",
    description: "Corte personalizado com análise de formato de rosto e textura dos fios.",
    duration: 60,
    price: 180,
  },
  {
    id: "v2",
    professional: "valeria",
    name: "Coloração Personalizada",
    description: "Técnicas exclusivas de coloração com produtos profissionais de alta performance.",
    duration: 120,
    price: 350,
  },
  {
    id: "v3",
    professional: "valeria",
    name: "Tratamento Capilar Luxury",
    description: "Hidratação profunda com queratina e óleos nobres para revitalizar os fios.",
    duration: 90,
    price: 250,
  },
  {
    id: "v4",
    professional: "valeria",
    name: "Escova Especial",
    description: "Escova modelada com finalização profissional e proteção térmica.",
    duration: 60,
    price: 150,
  },
  {
    id: "v5",
    professional: "valeria",
    name: "Transformação Completa",
    description: "Corte, coloração e tratamento em um combo exclusivo de transformação.",
    duration: 180,
    price: 580,
  },
]

const brunoServices: Service[] = [
  {
    id: "b1",
    professional: "bruno",
    name: "Corte Masculino Premium",
    description: "Corte moderno e personalizado com tesoura e máquina, finalização com produtos premium.",
    duration: 60,
    price: 120,
  },
  {
    id: "b2",
    professional: "bruno",
    name: "Barba Tradicional",
    description: "Aparação e modelagem de barba com navalha, toalha quente e balm hidratante.",
    duration: 45,
    price: 80,
  },
  {
    id: "b3",
    professional: "bruno",
    name: "Barboterapia Relaxante",
    description: "Barba completa com toalhas quentes, óleos essenciais e massagem facial relaxante.",
    duration: 75,
    price: 150,
  },
  {
    id: "b4",
    professional: "bruno",
    name: "Corte + Barba Executivo",
    description: "Combo completo de corte e barba para o homem que precisa de praticidade e estilo.",
    duration: 90,
    price: 180,
  },
  {
    id: "b5",
    professional: "bruno",
    name: "Design de Estilo Masculino",
    description: "Consultoria de estilo capilar masculino com corte personalizado e finalização premium.",
    duration: 90,
    price: 200,
  },
]

interface ServicesProps {
  onBookClick: (service?: Service) => void
}

export function Services({ onBookClick }: ServicesProps) {
  const [activeTab, setActiveTab] = useState<"valeria" | "bruno">("valeria")

  const services = activeTab === "valeria" ? valeriaServices : brunoServices

  return (
    <section id="servicos" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0f] to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] text-white/40 uppercase mb-4 block">
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white">
            Experiência{" "}
            <span className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent font-semibold">
              Premium
            </span>
          </h2>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full p-1 bg-white/5 border border-white/10">
            <button
              onClick={() => setActiveTab("valeria")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "valeria"
                  ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg"
                  : "text-white/50 hover:text-white"
              }`}
            >
              <Sparkles size={14} className="inline mr-2" />
              Valéria
            </button>
            <button
              onClick={() => setActiveTab("bruno")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "bruno"
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                  : "text-white/50 hover:text-white"
              }`}
            >
              <Scissors size={14} className="inline mr-2" />
              Bruno
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div
                  className={`relative p-6 rounded-2xl backdrop-blur-sm border transition-all duration-500 h-full flex flex-col ${
                    activeTab === "valeria"
                      ? "bg-purple-900/10 border-purple-500/10 hover:border-purple-500/30 hover:bg-purple-900/20"
                      : "bg-blue-900/10 border-blue-500/10 hover:border-blue-500/30 hover:bg-blue-900/20"
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-2 rounded-lg ${
                        activeTab === "valeria"
                          ? "bg-purple-500/10 text-purple-300"
                          : "bg-blue-500/10 text-blue-300"
                      }`}
                    >
                      {activeTab === "valeria" ? (
                        <Sparkles size={20} />
                      ) : (
                        <Scissors size={20} />
                      )}
                    </div>
                    <span
                      className={`text-2xl font-bold ${
                        activeTab === "valeria" ? "text-purple-300" : "text-blue-300"
                      }`}
                    >
                      {formatPrice(service.price)}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-sm text-white/50 mb-4 flex-1">{service.description}</p>

                  <div className="flex items-center gap-2 text-xs text-white/40 mb-4">
                    <Clock size={14} />
                    <span>{service.duration} minutos</span>
                  </div>

                  <button
                    onClick={() => onBookClick(service)}
                    className={`w-full py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeTab === "valeria"
                        ? "bg-purple-600/20 text-purple-300 hover:bg-purple-600/40 border border-purple-500/20"
                        : "bg-blue-600/20 text-blue-300 hover:bg-blue-600/40 border border-blue-500/20"
                    }`}
                  >
                    Agendar
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
