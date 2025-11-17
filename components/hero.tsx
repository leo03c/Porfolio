import { Button } from "@/components/ui/button"
import { Github, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              {"Hola, soy "}
              <span className="text-accent">Leonardo</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground text-balance">Diseñador y Programador Fullstack</p>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Apasionado por el desarrollo frontend y backend. Ingeniero en Ciencias Informáticas graduado de la UCI.
            Siempre busco aprender y superarme día a día, creando soluciones robustas y escalables.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <a href="#projects">Ver proyectos</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Contactar</a>
            </Button>
          </div>

          <div className="flex gap-4 pt-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/leo03c" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:leonardocastillod7@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
