"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Camila Rodrigues",
    photo: null,
    rating: 5,
    text: "Simplesmente o melhor salão que já fui! A Valéria é extremamente talentosa, saí de lá me sentindo uma nova mulher. Ambiente luxuoso e atendimento impecável.",
    professional: "valeria",
  },
  {
    id: 2,
    name: "Rafael Oliveira",
    photo: null,
    rating: 5,
    text: "O Bruno é um artista! Melhor corte que já tive. A barboterapia é uma experiência que todo homem deveria experimentar. Ambiente incrível.",
    professional: "bruno",
  },
  {
    id: 3,
    name: "Juliana Costa",
    photo: null,
    rating: 5,
    text: "Fiz uma transformação completa com a Valéria e o resultado superou minhas expectativas. Profissionalismo, carinho e um resultado impecável.",
    professional: "valeria",
  },
  {
    id: 4,
    name: "Marcos Santos",
    photo: null,
    rating: 5,
    text: "Finalmente um lugar que entende de estilo masculino. O Bruno sabe exatamente o que funciona. Virei cliente fiel!",
    professional: "bruno",
  },
  {
    id: 5,
    name: "Ana Paula Lima",
    photo: null,
    rating: 5,
    text: "O Estúdio Efrata é outro nível. A coloração que a Valéria fez ficou simplesmente perfeita. Super recomendo!",
    professional: "valeria",
  },
  {
    id: 6,
    name: "Thiago Fernandes",
    photo: null,
    rating: 5,
    text: "Corte executivo impecável. Ambiente premium, atendimento nota 10. O Bruno é o melhor barbeiro da região!",
    professional: "bruno",
  },
]

export function Testimonials() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0f] to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] text-white/40 uppercase mb-4 block">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white">
            O que nossos{" "}
            <span className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent font-semibold">
              clientes
            </span>{" "}
            dizem
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-2xl backdrop-blur-sm border transition-all duration-500 ${
                item.professional === "valeria"
                  ? "bg-purple-900/10 border-purple-500/10 hover:border-purple-500/20"
                  : "bg-blue-900/10 border-blue-500/10 hover:border-blue-500/20"
              }`}
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={`${
                      item.professional === "valeria"
                        ? "text-purple-400 fill-purple-400"
                        : "text-blue-400 fill-blue-400"
                    }`}
                  />
                ))}
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">&ldquo;{item.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                    item.professional === "valeria"
                      ? "bg-purple-500/20 text-purple-300"
                      : "bg-blue-500/20 text-blue-300"
                  }`}
                >
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{item.name}</p>
                  <p className="text-xs text-white/30">
                    {item.professional === "valeria" ? "Cliente Valéria" : "Cliente Bruno"}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
