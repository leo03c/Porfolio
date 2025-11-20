import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Database, Wrench, Users, Sparkles } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      category: "Frontend",
      skills: ["React", "Next.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
    },
    {
      icon: Database,
      category: "Backend", 
      skills: ["Python", "Django", "Django REST", "PostgreSQL", "APIs REST"],
    },
    {
      icon: Wrench,
      category: "Extras",
      skills: ["Git", "C++", "Java", "Telegram Bots", "Odoo", "Arduino"],
    },
    {
      icon: Users,
      category: "Profesional",
      skills: ["Resolución de Problemas", "Trabajo en Equipo", "Gestión de Proyectos", "Relaciones con Clientes", "Aprendizaje Rápido"],
    },
  ]

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Tecnologías & Habilidades</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Stack tecnológico con el que desarrollo soluciones robustas y escalables, 
              desde el frontend hasta el backend.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="border-border hover:shadow-lg transition-shadow duration-300 group"
              >
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <category.icon className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="font-semibold text-lg">{category.category}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex}
                          variant="secondary"
                          className="text-sm font-medium"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm text-muted-foreground">
              Siempre aprendiendo nuevas tecnologías y mejorando mis habilidades para ofrecer las mejores soluciones
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}