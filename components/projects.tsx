import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function Projects() {
  const projects = [
    {
      title: "BarberiaWithBackend",
      description:
        "Plataforma integral para barberías, creada desde cero con backend personalizado. Sistema completo de gestión con autenticación, reservas y administración.",
      tags: ["Django", "Django REST", "PostgreSQL", "React"],
      github: "https://github.com/leo03c/BarberiaWithBackend",
      featured: true,
    },
    {
      title: "Barberia",
      description:
        "Sitio web moderno para barbería con diseño atractivo y funcional. Interfaz responsive optimizada para la experiencia del usuario.",
      tags: ["React", "TailwindCSS", "JavaScript"],
      github: "https://github.com/leo03c/Barberia",
      featured: false,
    },
    {
      title: "Archivo",
      description: "Sistema de gestión de archivos con funcionalidades avanzadas de organización y búsqueda.",
      tags: ["Python", "Django", "PostgreSQL"],
      github: "https://github.com/leo03c/Archivo",
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Proyectos destacados</h2>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Una selección de proyectos en los que he trabajado, demostrando mis habilidades en desarrollo fullstack.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`border-border hover:border-accent transition-colors ${
                  project.featured ? "md:col-span-2 lg:col-span-3" : ""
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      {project.featured && (
                        <Badge variant="secondary" className="w-fit">
                          Proyecto destacado
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardDescription className="leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="gap-2">
                          <Github className="h-4 w-4" />
                          Código
                        </a>
                      </Button>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="gap-2">
                          <ExternalLink className="h-4 w-4" />
                          Ver más
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
