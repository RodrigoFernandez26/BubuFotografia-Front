import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat, Pacifico } from "next/font/google"
import "./globals.css"
import ThemeProvider from "@/components/theme-provider"


// Fuente principal para textos generales
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

// Fuente para "fotografía" - sans-serif espaciada
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
})

// Fuente para "Bubu" - estilo script/brush
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
})

export const metadata: Metadata = {
  title: "Bubu Fotografía | Capturando momentos especiales",
  description:
    "Servicio de fotografía profesional para bodas, eventos, retratos y más. Capturamos tus momentos especiales con un toque artístico único.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${montserrat.variable} ${pacifico.variable} font-sans dark`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
