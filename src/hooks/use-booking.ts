"use client"

import { useState, useCallback } from "react"
import type { BookingState, Service } from "@/types"

const initialState: BookingState = {
  step: 1,
  professional: null,
  service: null,
  date: null,
  time: null,
  customerName: "",
  customerPhone: "",
  notes: "",
}

export function useBooking() {
  const [state, setState] = useState<BookingState>(initialState)

  const reset = useCallback(() => {
    setState(initialState)
  }, [])

  const setProfessional = useCallback(
    (professional: "valeria" | "bruno") => {
      setState((prev) => ({
        ...prev,
        professional,
        service: null,
        date: null,
        time: null,
        step: 2,
      }))
    },
    []
  )

  const setService = useCallback((service: Service) => {
    setState((prev) => ({
      ...prev,
      service,
      step: 3,
    }))
  }, [])

  const setDate = useCallback((date: Date) => {
    setState((prev) => ({
      ...prev,
      date,
      time: null,
      step: 4,
    }))
  }, [])

  const setTime = useCallback((time: string) => {
    setState((prev) => ({
      ...prev,
      time,
      step: 5,
    }))
  }, [])

  const setCustomerInfo = useCallback(
    (name: string, phone: string, notes: string) => {
      setState((prev) => ({
        ...prev,
        customerName: name,
        customerPhone: phone,
        notes,
        step: 6,
      }))
    },
    []
  )

  const goBack = useCallback(() => {
    setState((prev) => ({
      ...prev,
      step: Math.max(1, prev.step - 1),
    }))
  }, [])

  const goToStep = useCallback((step: number) => {
    setState((prev) => ({
      ...prev,
      step,
    }))
  }, [])

  return {
    state,
    setProfessional,
    setService,
    setDate,
    setTime,
    setCustomerInfo,
    goBack,
    goToStep,
    reset,
  }
}
