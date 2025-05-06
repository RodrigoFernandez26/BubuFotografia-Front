"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Edit, FolderOpen, MoreHorizontal, Plus, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

// Datos de ejemplo para las categorías
const categories = [
  {
    id: "weddings",
    title: "Bodas",
    description: "Capturando el amor y la felicidad en tu día especial",
    coverImage: "/placeholder.svg?height=600&width=800",
    imageCount: 120,
  },
  {
    id: "corporate",
    title: "Eventos Corporativos",
    description: "Fotografía profesional para tus eventos empresariales",
    coverImage: "/placeholder.svg?height=600&width=800",
    imageCount: 85,
  },
  {
    id: "portraits",
    title: "Retratos",
    description: "Sesiones personalizadas que capturan tu esencia",
    coverImage: "/placeholder.svg?height=600&width=800",
    imageCount: 150,
  },
  {
    id: "quinceaneras",
    title: "Quinceañeras",
    description: "Momentos inolvidables en esta celebración especial",
    coverImage: "/placeholder.svg?height=600&width=800",
    imageCount: 95,
  },
  {
    id: "graduations",
    title: "Graduaciones",
    description: "Celebrando tus logros académicos con estilo",
    coverImage: "/placeholder.svg?height=600&width=800",
    imageCount: 78,
  },
  {
    id: "nature",
    title: "Naturaleza",
    description: "La belleza del mundo natural a través de mi lente",
    coverImage: "/placeholder.svg?height=600&width=800",
    imageCount: 140,
  },
]

export default function PortfolioPage() {
  const [isNewCategoryOpen, setIsNewCategoryOpen] = useState(false)
  const [newCategory, setNewCategory] = useState({
    title: "",
    description: "",
  })

  const handleNewCategorySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para guardar la nueva categoría
    console.log("Nueva categoría:", newCategory)
    setNewCategory({ title: "", description: "" })
    setIsNewCategoryOpen(false)
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Categorías del Portafolio</h2>
        <Dialog open={isNewCategoryOpen} onOpenChange={setIsNewCategoryOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Nueva categoría
            </Button>
          </DialogTrigger>
          <DialogContent>
            <form onSubmit={handleNewCategorySubmit}>
              <DialogHeader>
                <DialogTitle>Crear nueva categoría</DialogTitle>
                <DialogDescription>
                  Añade una nueva categoría a tu portafolio. Las categorías te ayudan a organizar tus fotografías.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Título</Label>
                  <Input
                    id="title"
                    value={newCategory.title}
                    onChange={(e) => setNewCategory({ ...newCategory, title: e.target.value })}
                    placeholder="Ej: Bodas, Retratos, Eventos..."
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Descripción</Label>
                  <Textarea
                    id="description"
                    value={newCategory.description}
                    onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
                    placeholder="Breve descripción de esta categoría..."
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="coverImage">Imagen de portada</Label>
                  <div className="flex items-center gap-2">
                    <Input id="coverImage" type="file" className="flex-1" />
                    <Button type="button" variant="outline" size="sm">
                      Seleccionar
                    </Button>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsNewCategoryOpen(false)}>
                  Cancelar
                </Button>
                <Button type="submit">Crear categoría</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Card key={category.id} className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src={category.coverImage || "/placeholder.svg"}
                alt={category.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
                <p className="text-sm text-white/80">{category.imageCount} imágenes</p>
              </div>
            </div>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground line-clamp-2">{category.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between p-4 pt-0">
              <Button variant="outline" size="sm" asChild>
                <Link href={`/admin/portfolio/${category.id}`}>
                  <FolderOpen className="mr-2 h-4 w-4" />
                  Ver imágenes
                </Link>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Más opciones</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Edit className="mr-2 h-4 w-4" />
                    Editar
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">
                    <Trash className="mr-2 h-4 w-4" />
                    Eliminar
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
