import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Building, Calendar, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function Projects() {
  const projects = [
    {
      title: "Experiencia Profesional - Cosmox",
      company: "Cosmox",
      period: "Feb 2023 - May 2025",
      description:
        "Como Desarrollador Frontend, fui responsable del desarrollo y mantenimiento de aplicaciones web según requerimientos del cliente. Colaboré estrechamente con equipos de diseño para implementar interfaces de usuario efectivas y participé en la optimización de rendimiento y depuración de código.",
      tags: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Git", "Trabajo en Equipo"],
      featured: true,
      type: "professional",
    },
    {
      title: "Barbería - Plataforma Integral",
      description:
        "Sistema completo para gestión de barberías con backend personalizado. Incluye autenticación, sistema de reservas, administración de clientes y panel de control en tiempo real.",
      tags: ["Django", "Django REST", "PostgreSQL", "React", "Tailwind CSS"],
      github: "https://github.com/leo03c/BarberiaWithBackend",
      featured: true,
      type: "personal",
    },
    {
      title: "Aplicación Para Restaurantes",
      description:
      "Sistema web para la gestión y organización de restaurantes. Incluye herramientas avanzadas para administrar el menú, procesar pedidos, organizar reservas y asignar roles de acceso al personal.",
      tags: ["Python", "Django", "PostgreSQL", "Bootstrap"],
      github: "https://github.com/leo03c/Restaurant",
      featured: true,
      type: "personal",
    },
    {
      title: "Sistema de sensores para monitoreo ambiental",
      description:
      "Aplicación enfocada en el seguimiento ambiental para parques inteligentes en zonas altamente urbanizadas.",
      tags: ["Arduino", "C++", "Python"],
      github: "https://github.com/leo03c/Sistema-de-sensores-para-monitoreo-ambiental",
      featured: false,
      type: "personal",
    },
    {
      title: "Tienda de Artículos Deportivos",
      description:
      "Aplicación web para gestión y organización de Tiendas Deportivas con funcionalidades avanzadas de búsqueda, categorización y permisos de usuario.",
      tags: ["Python", "Django", "PostgreSQL", "Bootstrap"],
      github: "https://github.com/leo03c/Archivo",
      featured: false,
      type: "personal",
    },
    {
      title: "Seguimiento Pacientes Veterinaria",
      description:
        "Sistema de gestión de los pacientes para una clinica de veterinaria genérica.",
      tags: [ "React", "Tailwind CSS"],
      github: "https://github.com/leo03c/Seguimiento-Pasientes-Veterinaria",
      featured: false,
      type: "personal",
    },
  ]

  const getProjectIcon = (type: string) => {
    return type === "professional" ? Building : Github
  }

  const getProjectColor = (type: string) => {
    return type === "professional" ? "bg-blue-50 text-blue-700 border-blue-200" : "bg-green-50 text-green-700 border-green-200"
  }

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Mi Trabajo</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Proyectos profesionales y personales donde aplico mis habilidades en desarrollo fullstack
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`border-border hover:shadow-lg transition-all duration-300 ${
                  project.featured ? "border-2 border-accent/20" : ""
                }`}
              >
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg ${getProjectColor(project.type)} flex items-center justify-center`}>
                          {project.type === "professional" ? (
                            <Building className="h-5 w-5" />
                          ) : (
                            <Github className="h-5 w-5" />
                          )}
                        </div>
                        <div>
                          <CardTitle className="text-xl flex items-center gap-2">
                            {project.title}
                            {project.featured && (
                              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                            )}
                          </CardTitle>
                          {project.company && (
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                              <Building className="h-3 w-3" />
                              <span>{project.company}</span>
                              {project.period && (
                                <>
                                  <span>•</span>
                                  <Calendar className="h-3 w-3" />
                                  <span>{project.period}</span>
                                </>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {project.featured && (
                      <Badge variant="default" className="w-fit bg-accent hover:bg-accent/90">
                        {project.type === "professional" ? "Experiencia Profesional" : "Proyecto Destacado"}
                      </Badge>
                    )}
                  </div>
                  
                  <CardDescription className="leading-relaxed text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex} 
                          variant="secondary" 
                          className="text-xs px-3 py-1"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    {project.github && (
                      <div className="flex gap-3">
                        <Button variant="default" size="sm" asChild className="gap-2">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                            Ver Código
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild className="gap-2">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                            Demo
                          </a>
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              ¿Interesado en ver más proyectos?
            </p>
            <Button asChild variant="outline" className="gap-2">
              <a href="https://github.com/leo03c" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                Ver más en GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}