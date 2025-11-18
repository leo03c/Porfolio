import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Mail, Phone, MapPin, Calendar, MessageCircle } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Contacto</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              ¿Tienes un proyecto en mente? Estoy disponible para nuevas oportunidades 
              y colaboraciones. ¡Hablemos!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Información de contacto */}
            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-center mb-4">Información de Contacto</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                      <Mail className="h-5 w-5 text-accent" />
                      <div className="text-left">
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium">leonardocastillod7@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                      <Phone className="h-5 w-5 text-accent" />
                      <div className="text-left">
                        <p className="text-sm text-muted-foreground">Teléfono</p>
                        <p className="font-medium">+53 5847 8963</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                      <MapPin className="h-5 w-5 text-accent" />
                      <div className="text-left">
                        <p className="text-sm text-muted-foreground">Ubicación</p>
                        <p className="font-medium">La Habana, Cuba</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                      <Calendar className="h-5 w-5 text-accent" />
                      <div className="text-left">
                        <p className="text-sm text-muted-foreground">Disponibilidad</p>
                        <p className="font-medium">Inmediata</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Botones de acción */}
            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-center mb-4">Conectemos</h3>
                  
                  <div className="space-y-4">
                    <Button size="lg" className="w-full gap-2" asChild>
                      <a href="mailto:leonardocastillod7@gmail.com">
                        <Mail className="h-5 w-5" />
                        Enviar Email
                      </a>
                    </Button>
                    
                    <Button variant="outline" size="lg" className="w-full gap-2" asChild>
                      <a href="https://wa.me/5358478963" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-5 w-5" />
                        WhatsApp
                      </a>
                    </Button>
                    
                    <Button variant="outline" size="lg" className="w-full gap-2" asChild>
                      <a href="https://t.me/leo03c" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-5 w-5" />
                        Telegram
                      </a>
                    </Button>
                    
                    <Button variant="outline" size="lg" className="w-full gap-2" asChild>
                      <a href="tel:+5358478963">
                        <Phone className="h-5 w-5" />
                        Llamar por Teléfono
                      </a>
                    </Button>
                    
                    <Button variant="outline" size="lg" className="w-full gap-2" asChild>
                      <a href="https://github.com/leo03c" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                        Ver mi GitHub
                      </a>
                    </Button>
                  </div>
                  
                  <div className="text-center space-y-2 pt-4">
                    <p className="text-sm text-muted-foreground italic">
                      Respuesta rápida por WhatsApp y Telegram
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <footer className="container mx-auto max-w-6xl pt-16 pb-8">
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Leonardo Castillo. Desarrollador Fullstack & Ingeniero en Ciencias Informáticas</p>
          <p className="mt-1">Todos los derechos reservados</p>
        </div>
      </footer>
    </section>
  )
}