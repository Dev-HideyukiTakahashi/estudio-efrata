"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft } from "lucide-react"
import { useBooking } from "@/hooks/use-booking"
import { StepProfessional } from "./booking/step-professional"
import { StepService } from "./booking/step-service"
import { StepDate } from "./booking/step-date"
import { StepTime } from "./booking/step-time"
import { StepClientInfo } from "./booking/step-client-info"
import { StepConfirm } from "./booking/step-confirm"
import type { Service } from "@/types"

interface BookingDrawerProps {
  open: boolean
  onClose: () => void
  preselectedService?: Service | null
}

export function BookingDrawer({ open, onClose, preselectedService }: BookingDrawerProps) {
  const {
    state,
    setProfessional,
    setService,
    setDate,
    setTime,
    setCustomerInfo,
    goBack,
    reset,
  } = useBooking()

  useEffect(() => {
    if (open) {
      reset()
    }
  }, [open, reset])

  useEffect(() => {
    if (preselectedService && open) {
      setProfessional(preselectedService.professional)
      setTimeout(() => {
        setService(preselectedService)
      }, 100)
    }
  }, [preselectedService, open, setProfessional, setService])

  const handleClose = () => {
    reset()
    onClose()
  }

  const stepLabels = ["Profissional", "Serviço", "Data", "Horário", "Dados", "Confirmar"]

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full sm:w-[480px] bg-gradient-to-b from-[#0a0a0f] to-black border-l border-white/5 z-50 overflow-y-auto"
          >
            <div className="sticky top-0 bg-black/80 backdrop-blur-xl border-b border-white/5 z-10">
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-2">
                  {state.step > 1 && (
                    <button
                      onClick={goBack}
                      className="p-1 rounded-lg hover:bg-white/5 text-white/50 hover:text-white transition-colors"
                    >
                      <ChevronLeft size={20} />
                    </button>
                  )}
                  <h2 className="text-sm font-medium text-white">Agendar</h2>
                </div>
                <button
                  onClick={handleClose}
                  className="p-1 rounded-lg hover:bg-white/5 text-white/50 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="px-4 pb-4">
                <div className="flex gap-1">
                  {stepLabels.map((label, i) => (
                    <div
                      key={label}
                      className={`flex-1 h-1 rounded-full transition-all duration-300 ${
                        i + 1 <= state.step
                          ? "bg-gradient-to-r from-purple-600 to-blue-600"
                          : "bg-white/10"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-xs text-white/30 mt-2 text-center">
                  Etapa {state.step} de 6 - {stepLabels[state.step - 1]}
                </p>
              </div>
            </div>

            <div className="p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={state.step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  {state.step === 1 && (
                    <StepProfessional onSelect={setProfessional} />
                  )}
                  {state.step === 2 && state.professional && (
                    <StepService
                      professional={state.professional}
                      onSelect={setService}
                      onBack={goBack}
                    />
                  )}
                  {state.step === 3 && (
                    <StepDate onSelect={setDate} onBack={goBack} />
                  )}
                  {state.step === 4 && state.date && state.professional && (
                    <StepTime
                      date={state.date}
                      professional={state.professional}
                      onSelect={setTime}
                      onBack={goBack}
                    />
                  )}
                  {state.step === 5 && (
                    <StepClientInfo
                      onSubmit={(name, phone, notes) =>
                        setCustomerInfo(name, phone, notes)
                      }
                      onBack={goBack}
                    />
                  )}
                  {state.step === 6 &&
                    state.professional &&
                    state.service &&
                    state.date &&
                    state.time && (
                      <StepConfirm
                        professional={state.professional}
                        service={state.service}
                        date={state.date}
                        time={state.time}
                        customerName={state.customerName}
                        customerPhone={state.customerPhone}
                        notes={state.notes}
                        onBack={goBack}
                        onReset={() => {
                          reset()
                          handleClose()
                        }}
                      />
                    )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
