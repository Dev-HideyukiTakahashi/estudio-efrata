"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Gallery } from "@/components/gallery"
import { Testimonials } from "@/components/testimonials"
import { Differentiators } from "@/components/differentiators"
import { Location } from "@/components/location"
import { Hours } from "@/components/hours"
import { Footer } from "@/components/footer"
import { BookingDrawer } from "@/components/booking-drawer"
import type { Service } from "@/types"

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [preselectedService, setPreselectedService] = useState<Service | null>(null)

  const handleBookClick = (service?: Service) => {
    setPreselectedService(service || null)
    setDrawerOpen(true)
  }

  return (
    <>
      <Header onBookClick={() => handleBookClick()} />
      <main>
        <Hero />
        <About />
        <Services onBookClick={handleBookClick} />
        <Differentiators />
        <Gallery />
        <Testimonials />
        <Location />
        <Hours />
        <section id="agendamento" className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="max-w-lg mx-auto p-8 rounded-2xl bg-gradient-to-br from-purple-900/10 to-blue-900/10 border border-white/5 backdrop-blur-sm">
              <h2 className="text-2xl sm:text-3xl font-light text-white mb-4">
                Pronto para sua{" "}
                <span className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent font-semibold">
                  experiência
                </span>
                ?
              </h2>
              <p className="text-white/50 text-sm mb-6">
                Agende seu horário e descubra o significado de cuidado premium.
              </p>
              <button
                onClick={() => handleBookClick()}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                Agendar Agora
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <BookingDrawer
        open={drawerOpen}
        onClose={() => {
          setDrawerOpen(false)
          setPreselectedService(null)
        }}
        preselectedService={preselectedService}
      />
    </>
  )
}
