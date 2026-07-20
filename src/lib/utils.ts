export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ")
}

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value)
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date)
}

export function generateTimeSlots(
  existingAppointments: { time: string; date: string }[],
  date: string,
  opening = "08:00",
  closing = "18:00",
  interval = 30
): { time: string; available: boolean }[] {
  const slots: { time: string; available: boolean }[] = []
  const [openH, openM] = opening.split(":").map(Number)
  const [closeH, closeM] = closing.split(":").map(Number)
  const openMinutes = openH * 60 + openM
  const closeMinutes = closeH * 60 + closeM

  const bookedTimes = existingAppointments
    .filter((a) => a.date === date)
    .map((a) => a.time)

  for (let m = openMinutes; m < closeMinutes; m += interval) {
    const h = Math.floor(m / 60)
    const min = m % 60
    const time = `${String(h).padStart(2, "0")}:${String(min).padStart(2, "0")}`
    slots.push({
      time,
      available: !bookedTimes.includes(time),
    })
  }

  return slots
}
