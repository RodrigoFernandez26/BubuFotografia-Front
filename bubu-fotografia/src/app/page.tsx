import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Heart, Mail, Instagram, Facebook, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-10">
              <Image src="/images/logo.png" alt="Bubu Fotografía Logo" fill className="object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="logo-text text-blue-logo">Bubu</span>
              <span className="logo-subtext text-yellow-logo">fotografía</span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-montserrat font-light tracking-wider transition-colors hover:text-primary"
            >
              Inicio
            </Link>
            <Link
              href="#portfolio"
              className="text-sm font-montserrat font-light tracking-wider transition-colors hover:text-secondary"
            >
              Portafolio
            </Link>
            <Link
              href="#highlights"
              className="text-sm font-montserrat font-light tracking-wider transition-colors hover:text-accent"
            >
              Destacados
            </Link>
            <Link
              href="#contact"
              className="text-sm font-montserrat font-light tracking-wider transition-colors hover:text-accent-tan"
            >
              Contacto
            </Link>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-screen w-full overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Fotografía artística"
              fill
              priority
              className="object-cover transform scale-[1.02] motion-safe:animate-subtle-zoom brightness-75"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80" />
          <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
            <div className="mb-8 flex justify-center">
              <Image
                src="/images/logo.png"
                alt="Bubu Fotografía Logo"
                width={120}
                height={120}
                className="animate-fade-in"
              />
            </div>
            <span className="font-montserrat text-sm uppercase tracking-widest text-primary mb-4 opacity-0 animate-fade-in">
              Fotografía profesional
            </span>
            <h1 className="opacity-0 animate-slide-up">
              <span className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl block text-blue-logo">
                Capturando
              </span>
              <span className="font-montserrat font-light text-3xl sm:text-4xl md:text-5xl tracking-wider block mt-2 text-yellow-logo">
                momentos
              </span>
              <span className="font-script text-orange-logo text-5xl sm:text-6xl md:text-7xl block mt-2">eternos</span>
            </h1>
            <p className="mt-8 max-w-lg text-lg font-montserrat font-light tracking-wide text-muted-foreground opacity-0 animate-fade-in-delay">
              Fotografía profesional para tus eventos más especiales. Preservamos tus momentos con un toque artístico
              único.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-6 opacity-0 animate-fade-in-delay-long">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 text-base font-montserrat tracking-wider bg-primary hover:bg-primary/80"
              >
                <Link href="#portfolio">Ver portafolio</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 text-base font-montserrat tracking-wider border-secondary text-secondary hover:bg-secondary/10"
              >
                <Link href="#contact">Contactar</Link>
              </Button>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-accent opacity-70" />
          </div>
        </section>

        {/* Portfolio/Gallery Section */}
        <section id="portfolio" className="py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <span className="font-montserrat text-sm uppercase tracking-widest text-primary font-medium">
                Explora mi trabajo
              </span>
              <h2 className="font-script text-4xl sm:text-5xl md:text-6xl mt-2 gradient-logo-text">Portafolio</h2>
              <div className="w-20 h-1 gradient-logo mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-max">
              {portfolioCategories.map((category, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                    index % 3 === 0 ? "md:col-span-2 lg:col-span-1" : ""
                  } ${index % 5 === 0 ? "row-span-2" : ""}`}
                  style={{
                    height: index % 5 === 0 ? "600px" : index % 3 === 0 ? "500px" : "400px",
                  }}
                >
                  <Image
                    src={category.coverImage || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 w-full p-8">
                    <h3 className="font-script text-2xl text-primary">{category.title}</h3>
                    <p className="mt-2 text-sm font-montserrat font-light tracking-wide text-muted-foreground max-w-md">
                      {category.description}
                    </p>
                    <Button asChild variant="link" className="mt-4 p-0 text-secondary">
                      <Link href={category.link} className="flex items-center font-montserrat text-sm tracking-wider">
                        Ver galería{" "}
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section id="highlights" className="py-20 bg-muted">
          <div className="container">
            <h2 className="font-script text-3xl sm:text-4xl md:text-5xl text-center mb-12 text-orange-logo">
              Eventos Destacados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {highlightedEvents.map((event, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg bg-card shadow-lg border">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={event.coverImage || "/placeholder.svg"}
                      alt={event.title}
                      width={800}
                      height={450}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 brightness-90"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-script text-2xl text-blue-logo">{event.title}</h3>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-yellow-logo hover:text-yellow-logo/80 hover:bg-background"
                      >
                        <Heart className="h-5 w-5" />
                        <span className="sr-only">Me gusta</span>
                      </Button>
                    </div>
                    <p className="mt-2 text-sm font-montserrat tracking-wider text-muted-foreground">{event.date}</p>
                    <p className="mt-4 font-montserrat font-light">{event.description}</p>
                    <Button asChild variant="link" className="mt-4 p-0 text-secondary">
                      <Link href={event.link} className="flex items-center font-montserrat text-sm tracking-wider">
                        Ver todas las fotos <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-script text-3xl sm:text-4xl md:text-5xl mb-6 text-yellow-logo">
                Hablemos sobre tu próximo evento
              </h2>
              <p className="text-lg font-montserrat font-light tracking-wide text-muted-foreground mb-10">
                ¿Tienes un evento especial en mente? Contáctame para discutir cómo podemos capturar esos momentos
                inolvidables.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="rounded-lg bg-card p-8 text-left border">
                  <h3 className="font-script text-xl mb-4 text-blue-logo">Información de contacto</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 mr-3 text-primary" />
                      <span className="font-montserrat font-light">contacto@bubufotografia.com</span>
                    </div>
                    <div className="flex items-center">
                      <Instagram className="h-5 w-5 mr-3 text-secondary" />
                      <span className="font-montserrat font-light">@bubufotografia</span>
                    </div>
                    <div className="flex items-center">
                      <Facebook className="h-5 w-5 mr-3 text-primary" />
                      <span className="font-montserrat font-light">Bubu Fotografía</span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <h4 className="font-montserrat font-medium mb-2 text-accent-tan">Horario de atención</h4>
                    <p className="text-sm font-montserrat font-light text-muted-foreground">
                      Lunes a Viernes: 9:00 AM - 6:00 PM
                      <br />
                      Sábados: 10:00 AM - 3:00 PM
                    </p>
                  </div>
                </div>
                <div className="rounded-lg bg-card p-8 text-left border">
                  <h3 className="font-script text-xl mb-4 text-orange-logo">Envíame un mensaje</h3>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-montserrat font-medium mb-1">
                        Nombre
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full rounded-md border bg-background/50 px-3 py-2 text-sm font-montserrat"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-montserrat font-medium mb-1">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full rounded-md border bg-background/50 px-3 py-2 text-sm font-montserrat"
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-montserrat font-medium mb-1">
                        Mensaje
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full rounded-md border bg-background/50 px-3 py-2 text-sm font-montserrat"
                        placeholder="Cuéntame sobre tu evento..."
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full font-montserrat tracking-wider bg-secondary hover:bg-secondary/80"
                    >
                      Enviar mensaje
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 bg-card">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10">
              <Image src="/images/logo.png" alt="Bubu Fotografía Logo" fill className="object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="logo-text text-blue-logo">Bubu</span>
              <span className="logo-subtext text-yellow-logo">fotografía</span>
            </div>
          </div>
          <p className="text-center text-sm font-montserrat font-light tracking-wide text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Bubu Fotografía. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" className="text-primary hover:text-primary/80 hover:bg-background/20">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-secondary hover:text-secondary/80 hover:bg-background/20"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-accent hover:text-accent/80 hover:bg-background/20"
            >
              <Link href="/admin/login">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <span className="sr-only">Admin</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Datos de ejemplo para el portafolio
const portfolioCategories = [
  {
    title: "Bodas",
    description: "Capturando el amor y la felicidad en tu día especial",
    coverImage: "/placeholder.svg?height=600&width=800",
    link: "/portfolio/weddings",
  },
  {
    title: "Eventos Corporativos",
    description: "Fotografía profesional para tus eventos empresariales",
    coverImage: "/placeholder.svg?height=600&width=800",
    link: "/portfolio/corporate",
  },
  {
    title: "Retratos",
    description: "Sesiones personalizadas que capturan tu esencia",
    coverImage: "/placeholder.svg?height=600&width=800",
    link: "/portfolio/portraits",
  },
  {
    title: "Quinceañeras",
    description: "Momentos inolvidables en esta celebración especial",
    coverImage: "/placeholder.svg?height=600&width=800",
    link: "/portfolio/quinceaneras",
  },
  {
    title: "Graduaciones",
    description: "Celebrando tus logros académicos con estilo",
    coverImage: "/placeholder.svg?height=600&width=800",
    link: "/portfolio/graduations",
  },
  {
    title: "Naturaleza",
    description: "La belleza del mundo natural a través de mi lente",
    coverImage: "/placeholder.svg?height=600&width=800",
    link: "/portfolio/nature",
  },
]

// Datos de ejemplo para eventos destacados
const highlightedEvents = [
  {
    title: "Boda de María & Juan",
    date: "15 de Junio, 2023",
    description:
      "Una hermosa celebración en la playa con amigos y familiares. Capturamos momentos llenos de amor y alegría durante todo el día.",
    coverImage: "/placeholder.svg?height=450&width=800",
    link: "/events/maria-juan-wedding",
  },
  {
    title: "XV Años de Sofía",
    date: "22 de Abril, 2023",
    description:
      "Una elegante fiesta de quinceañera con una decoración espectacular y momentos emotivos que quedarán para siempre.",
    coverImage: "/placeholder.svg?height=450&width=800",
    link: "/events/sofia-quinceanera",
  },
  {
    title: "Conferencia Anual TechCorp",
    date: "10 de Marzo, 2023",
    description:
      "Cobertura completa del evento empresarial más importante del año, incluyendo presentaciones y networking.",
    coverImage: "/placeholder.svg?height=450&width=800",
    link: "/events/techcorp-conference",
  },
  {
    title: "Graduación Universidad Nacional",
    date: "30 de Julio, 2023",
    description:
      "Capturamos la emoción y el orgullo de los graduados y sus familias en este importante logro académico.",
    coverImage: "/placeholder.svg?height=450&width=800",
    link: "/events/national-university-graduation",
  },
]
