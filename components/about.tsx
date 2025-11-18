import { GraduationCap, Code2, TrendingUp, Briefcase, Users, Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Formación Académica",
      description: "Graduado de Ingeniería en Ciencias Informáticas en la Universidad de las Ciencias Informáticas (UCI) con excelente rendimiento académico.",
    },
    {
      icon: Briefcase,
      title: "Experiencia Profesional",
      description: "2+ años desarrollando aplicaciones web modernas, colaborando en equipos multidisciplinarios y entregando soluciones de calidad.",
    },
    {
      icon: Code2,
      title: "Enfoque Técnico",
      description: "Especializado en desarrollo fullstack, creando tanto interfaces atractivas como arquitecturas backend robustas y escalables.",
    },
    {
      icon: Users,
      title: "Trabajo en Equipo",
      description: "Excelente capacidad de colaboración, comunicación efectiva y adaptación a metodologías ágiles de desarrollo.",
    },
    {
      icon: Target,
      title: "Metodología",
      description: "Enfoque en calidad, mejores prácticas de código y atención meticulosa a los detalles y requerimientos del cliente.",
    },
    {
      icon: TrendingUp,
      title: "Crecimiento Continuo",
      description: "Comprometido con el aprendizaje constante y la adopción de nuevas tecnologías para mantenerme a la vanguardia.",
    },
  ]

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Mi Trayectoria</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Soy un profesional apasionado por la tecnología con una sólida formación en ingeniería informática. 
              Mi enfoque combina creatividad técnica con soluciones prácticas, siempre buscando superar expectativas 
              y contribuir al éxito de cada proyecto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300 group">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
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

          {/* Sección de valores personales */}
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold">Mi Filosofía de Trabajo</h3>
            <p className="text-muted-foreground leading-relaxed">
              Creo en el poder de la tecnología para resolver problemas complejos y mejorar experiencias. 
              Mi objetivo es crear soluciones que no solo funcionen perfectamente, sino que también 
              generen valor real para los usuarios y las empresas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}