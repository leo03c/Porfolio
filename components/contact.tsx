import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Heart, Phone } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{"Trabajemos juntos"}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Estoy siempre abierto a nuevas oportunidades y colaboraciones.
              {"¡No dudes en contactarme!"}
            </p>
          </div>

          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="grid gap-4">
                  <Button size="lg" className="w-full gap-2" asChild>
                    <a href="mailto:leonardocastollod7@gmail.com">
                      <Mail className="h-5 w-5" />
                      leonardocastollod7@gmail.com
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="w-full gap-2 bg-transparent" asChild>
                    <a href="tel:+5358478963">
                      <Phone className="h-5 w-5" />
                      +53 5847 8963
                    </a>
                  </Button>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Button variant="outline" size="lg" asChild className="gap-2 bg-transparent">
                    <a href="https://github.com/leo03c" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="gap-2 bg-transparent">
                    <a
                      href="https://www.linkedin.com/in/leonardo-castollo-dominguez-b5a1a0339/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center space-y-4 pt-8">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Heart className="h-4 w-4 fill-current text-accent" />
              <span>Hobbies: Baloncesto y deporte</span>
            </div>
            <p className="text-sm text-muted-foreground italic">{"Me encanta aprender y superarme constantemente."}</p>
          </div>
        </div>
      </div>

      <footer className="container mx-auto max-w-6xl pt-16 pb-8">
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 leo03c. Todos los derechos reservados.</p>
        </div>
      </footer>
    </section>
  )
}
