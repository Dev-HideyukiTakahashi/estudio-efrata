"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Clock } from "lucide-react"
import { generateTimeSlots } from "@/lib/utils"
import { getSupabase } from "@/lib/supabase"
const supabase = getSupabase()
import type { TimeSlot } from "@/types"

interface StepTimeProps {
  date: Date
  professional: string
  onSelect: (time: string) => void
  onBack: () => void
}

export function StepTime({ date, professional, onSelect, onBack }: StepTimeProps) {
  const [slots, setSlots] = useState<TimeSlot[]>([])
  const [loading, setLoading] = useState(true)

  const dateStr = date.toISOString().split("T")[0]

  useEffect(() => {
    async function loadSlots() {
      setLoading(true)
      try {
        const { data } = await supabase
          .from("appointments")
          .select("time, date")
          .eq("date", dateStr)
          .eq("professional", professional)
          .neq("status", "cancelled")

        setSlots(generateTimeSlots(data || [], dateStr))
      } catch {
        setSlots(generateTimeSlots([], dateStr))
      }
      setLoading(false)
    }

    loadSlots()
  }, [dateStr, professional])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="w-8 h-8 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-light text-white mb-2">Escolha o Horário</h3>
        <p className="text-white/40 text-sm">
          Selecione o melhor horário disponível
        </p>
      </div>

      <div className="flex items-center gap-2 justify-center text-sm text-white/50">
        <Clock size={14} />
        <span>Disponíveis para este dia</span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {slots.map((slot) => (
          <motion.button
            key={slot.time}
            whileHover={slot.available ? { scale: 1.05 } : undefined}
            whileTap={slot.available ? { scale: 0.95 } : undefined}
            disabled={!slot.available}
            onClick={() => slot.available && onSelect(slot.time)}
            className={`py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
              slot.available
                ? "bg-white/5 border border-white/10 text-white/70 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-blue-600/20 hover:border-white/30 hover:text-white"
                : "bg-white/[0.02] border border-white/5 text-white/20 cursor-not-allowed line-through"
            }`}
          >
            {slot.time}
          </motion.button>
        ))}
      </div>
    </div>
  )
}
