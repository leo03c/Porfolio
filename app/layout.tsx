import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/lib/i18n"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "leo03c - Fullstack Developer & Designer",
  description: "Portfolio de leo03c - Ingeniero en Ciencias Informáticas especializado en desarrollo fullstack",
  generator: "Leonardo Castillo Diaz",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${geist.variable} ${geistMono.variable} font-sans bg-white text-primary`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
