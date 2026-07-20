import type { Metadata } from "next"
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Estúdio Efrata | Beleza e Barbearia Premium em Cipó Guaçu",
  description:
    "Estúdio Efrata - Beleza, estilo e cuidado em uma experiência premium. Valéria Cabeleireira e Bruno Barbeiro em Cipó Guaçu. Agende seu horário.",
  keywords: [
    "salão de beleza Cipó Guaçu",
    "cabeleireira Cipó Guaçu",
    "barbearia Cipó Guaçu",
    "salão premium",
    "corte feminino",
    "corte masculino",
    "barba",
    "coloração",
    "estúdio efrata",
  ],
  authors: [{ name: "Estúdio Efrata" }],
  openGraph: {
    title: "Estúdio Efrata | Beleza e Barbearia Premium",
    description:
      "Beleza, estilo e cuidado em uma experiência premium. Valéria Cabeleireira e Bruno Barbeiro.",
    type: "website",
    locale: "pt_BR",
    siteName: "Estúdio Efrata",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#0a0a0a] text-white font-sans">
        {children}
      </body>
    </html>
  )
}
