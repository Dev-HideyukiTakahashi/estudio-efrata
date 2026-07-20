"use client"

import { motion } from "framer-motion"
import { Clock, Sparkles, Scissors } from "lucide-react"
import { formatPrice } from "@/lib/utils"
import type { Service } from "@/types"

const valeriaServices: Service[] = [
  { id: "v1", professional: "valeria", name: "Corte Premium Feminino", description: "Corte personalizado", duration: 60, price: 180 },
  { id: "v2", professional: "valeria", name: "Coloração Personalizada", description: "Coloração com produtos premium", duration: 120, price: 350 },
  { id: "v3", professional: "valeria", name: "Tratamento Capilar Luxury", description: "Hidratação profunda", duration: 90, price: 250 },
  { id: "v4", professional: "valeria", name: "Escova Especial", description: "Escova modelada", duration: 60, price: 150 },
  { id: "v5", professional: "valeria", name: "Transformação Completa", description: "Corte + coloração + tratamento", duration: 180, price: 580 },
]

const brunoServices: Service[] = [
  { id: "b1", professional: "bruno", name: "Corte Masculino Premium", description: "Corte personalizado", duration: 60, price: 120 },
  { id: "b2", professional: "bruno", name: "Barba Tradicional", description: "Aparação e modelagem", duration: 45, price: 80 },
  { id: "b3", professional: "bruno", name: "Barboterapia Relaxante", description: "Barba + massagem facial", duration: 75, price: 150 },
  { id: "b4", professional: "bruno", name: "Corte + Barba Executivo", description: "Combo completo", duration: 90, price: 180 },
  { id: "b5", professional: "bruno", name: "Design de Estilo Masculino", description: "Consultoria + corte", duration: 90, price: 200 },
]

interface StepServiceProps {
  professional: "valeria" | "bruno"
  onSelect: (service: Service) => void
  onBack: () => void
}

export function StepService({ professional, onSelect, onBack }: StepServiceProps) {
  const services = professional === "valeria" ? valeriaServices : brunoServices
  const isValeria = professional === "valeria"

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-light text-white mb-2">Escolha o Serviço</h3>
        <p className="text-white/40 text-sm">
          Serviços disponíveis para {isValeria ? "Valéria" : "Bruno"}
        </p>
      </div>

      <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
        {services.map((service) => (
          <motion.button
            key={service.id}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => onSelect(service)}
            className={`w-full p-4 rounded-xl border text-left transition-all duration-300 ${
              isValeria
                ? "bg-purple-900/10 border-purple-500/10 hover:border-purple-500/30"
                : "bg-blue-900/10 border-blue-500/10 hover:border-blue-500/30"
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${isValeria ? "bg-purple-500/10" : "bg-blue-500/10"}`}>
                  {isValeria ? (
                    <Sparkles size={16} className="text-purple-300" />
                  ) : (
                    <Scissors size={16} className="text-blue-300" />
                  )}
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">{service.name}</h4>
                  <p className="text-xs text-white/40 mt-0.5">{service.description}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Clock size={12} className="text-white/30" />
                    <span className="text-xs text-white/30">{service.duration} min</span>
                  </div>
                </div>
              </div>
              <span className={`text-base font-bold ${isValeria ? "text-purple-300" : "text-blue-300"}`}>
                {formatPrice(service.price)}
              </span>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  )
}
