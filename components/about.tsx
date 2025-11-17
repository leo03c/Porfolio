import { GraduationCap, Code2, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Educación",
      description: "Ingeniero en Ciencias Informáticas — Universidad de las Ciencias Informáticas (UCI)",
    },
    {
      icon: Code2,
      title: "Especialización",
      description: "Desarrollo fullstack con enfoque en interfaces atractivas y soluciones escalables",
    },
    {
      icon: TrendingUp,
      title: "Filosofía",
      description: "Aprendizaje continuo y superación constante en nuevas tecnologías",
    },
  ]

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Sobre mí</h2>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Me encanta diseñar interfaces atractivas y funcionales, mientras disfruto creando soluciones robustas y
              escalables. Como desarrollador fullstack, combino creatividad con habilidades técnicas para construir
              experiencias digitales excepcionales.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="border-border">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
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
