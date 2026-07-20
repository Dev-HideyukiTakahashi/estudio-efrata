"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getSupabase } from "@/lib/supabase"
const supabase = getSupabase()
import {
  Calendar,
  Clock,
  Users,
  Scissors,
  LogOut,
  CheckCircle,
  XCircle,
  Trash2,
} from "lucide-react"
import type { Appointment } from "@/types"

export default function AdminDashboard() {
  const router = useRouter()
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [loading, setLoading] = useState(true)
  const [session, setSession] = useState<any>(null)
  const [filter, setFilter] = useState<"all" | "today" | "week">("all")

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.push("/admin/login")
        return
      }
      setSession(session)
      loadAppointments()
    })
  }, [router])

  const loadAppointments = async () => {
    const { data } = await supabase
      .from("appointments")
      .select("*")
      .order("date", { ascending: true })
      .order("time", { ascending: true })

    if (data) setAppointments(data)
    setLoading(false)
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/admin/login")
  }

  const updateStatus = async (id: string, status: string) => {
    await supabase.from("appointments").update({ status }).eq("id", id)
    loadAppointments()
  }

  const deleteAppointment = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir este agendamento?")) return
    await supabase.from("appointments").delete().eq("id", id)
    loadAppointments()
  }

  const filteredAppointments = appointments.filter((apt) => {
    if (filter === "all") return true
    const today = new Date().toISOString().split("T")[0]
    if (filter === "today") return apt.date === today
    if (filter === "week") {
      const aptDate = new Date(apt.date)
      const weekStart = new Date()
      weekStart.setDate(weekStart.getDate() - weekStart.getDay())
      const weekEnd = new Date(weekStart)
      weekEnd.setDate(weekEnd.getDate() + 6)
      return aptDate >= weekStart && aptDate <= weekEnd
    }
    return true
  })

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <header className="border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div>
            <h1 className="text-sm font-light tracking-[0.2em] text-white">
              ESTÚDIO<span className="font-bold text-purple-300">EFRATA</span>
              <span className="text-white/30 ml-3 text-xs">Admin</span>
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/40">{session?.user?.email}</span>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs text-white/50 hover:text-white hover:bg-white/5 transition-colors"
            >
              <LogOut size={14} />
              Sair
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <Calendar size={20} className="text-purple-300 mb-2" />
            <p className="text-2xl font-bold text-white">{appointments.length}</p>
            <p className="text-xs text-white/40">Total</p>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <CheckCircle size={20} className="text-green-400 mb-2" />
            <p className="text-2xl font-bold text-white">
              {appointments.filter((a) => a.status === "confirmed").length}
            </p>
            <p className="text-xs text-white/40">Confirmados</p>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <Users size={20} className="text-blue-300 mb-2" />
            <p className="text-2xl font-bold text-white">
              {appointments.filter((a) => a.professional === "valeria").length}
            </p>
            <p className="text-xs text-white/40">Valéria</p>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <Scissors size={20} className="text-blue-300 mb-2" />
            <p className="text-2xl font-bold text-white">
              {appointments.filter((a) => a.professional === "bruno").length}
            </p>
            <p className="text-xs text-white/40">Bruno</p>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-6">
          {(["all", "today", "week"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                filter === f
                  ? "bg-gradient-to-r from-purple-600/30 to-blue-600/30 text-white border border-white/20"
                  : "text-white/40 hover:text-white/70 border border-transparent"
              }`}
            >
              {f === "all" ? "Todos" : f === "today" ? "Hoje" : "Semana"}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {filteredAppointments.length === 0 && (
            <div className="text-center py-12">
              <p className="text-white/30 text-sm">Nenhum agendamento encontrado</p>
            </div>
          )}
          {filteredAppointments.map((apt) => (
            <div
              key={apt.id}
              className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm ${
                    apt.professional === "valeria"
                      ? "bg-purple-500/20 text-purple-300"
                      : "bg-blue-500/20 text-blue-300"
                  }`}
                >
                  {apt.professional === "valeria" ? "V" : "B"}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{apt.customer_name}</p>
                  <p className="text-xs text-white/40">
                    {apt.service} • {apt.professional === "valeria" ? "Valéria" : "Bruno"}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <Calendar size={12} className="text-white/30" />
                    <span className="text-xs text-white/30">{apt.date}</span>
                    <Clock size={12} className="text-white/30" />
                    <span className="text-xs text-white/30">{apt.time}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
                    apt.status === "confirmed"
                      ? "bg-green-500/10 text-green-400"
                      : apt.status === "cancelled"
                      ? "bg-red-500/10 text-red-400"
                      : "bg-blue-500/10 text-blue-400"
                  }`}
                >
                  {apt.status === "confirmed"
                    ? "Confirmado"
                    : apt.status === "cancelled"
                    ? "Cancelado"
                    : "Concluído"}
                </span>

                <div className="flex gap-1">
                  {apt.status !== "cancelled" && (
                    <button
                      onClick={() => updateStatus(apt.id, "cancelled")}
                      className="p-1.5 rounded-lg hover:bg-red-500/10 text-red-400/50 hover:text-red-400 transition-colors"
                      title="Cancelar"
                    >
                      <XCircle size={14} />
                    </button>
                  )}
                  {apt.status !== "completed" && apt.status !== "cancelled" && (
                    <button
                      onClick={() => updateStatus(apt.id, "completed")}
                      className="p-1.5 rounded-lg hover:bg-green-500/10 text-green-400/50 hover:text-green-400 transition-colors"
                      title="Concluir"
                    >
                      <CheckCircle size={14} />
                    </button>
                  )}
                  <button
                    onClick={() => deleteAppointment(apt.id)}
                    className="p-1.5 rounded-lg hover:bg-red-500/10 text-red-400/50 hover:text-red-400 transition-colors"
                    title="Excluir"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
