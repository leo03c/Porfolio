"use client"
import { Button } from "@/components/ui/button"
import { Github, Mail, FileText, Calendar, MapPin, QrCode } from "lucide-react"
import { useState, useEffect } from "react"

export function Hero() {
  const [qrCode, setQrCode] = useState("")
  const [isClient, setIsClient] = useState(false)
  
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV-Leonardo-Castillo-Diaz.pdf';
    link.download = 'CV-Leonardo-Castillo-Diaz.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Función para scroll suave
  const smoothScroll = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Generar QR code usando API de Google Charts
  useEffect(() => {
    setIsClient(true)
    
    // Usar nombre de archivo sin espacios y codificado
    const fileName = 'CV-Leonardo-Castillo-Diaz.pdf'
    const cvUrl = `${window.location.origin}/${fileName}`
    
    // Codificar la URL completa para el QR
    const encodedUrl = encodeURIComponent(cvUrl)
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodedUrl}`
    
    setQrCode(qrUrl)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda - Contenido principal */}
          <div className="space-y-8">
            {/* Información de estado y ubicación */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Disponible para nuevos proyectos</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>La Habana, Cuba</span>
              </div>
            </div>
            
            {/* Título principal */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
                Leonardo Castillo
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground text-balance">
                Ingeniero en Ciencias Informáticas
              </p>
            </div>

            {/* Descripción breve */}
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Desarrollador especializado en crear soluciones digitales innovadoras. 
              Combino creatividad con expertise técnico para transformar ideas en 
              experiencias web excepcionales.
            </p>

            {/* Estadísticas de impacto */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-md">
              <div className="space-y-1">
                <div className="text-2xl font-bold text-accent">+2</div>
                <div className="text-sm text-muted-foreground">Años experiencia</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-accent">10+</div>
                <div className="text-sm text-muted-foreground">Proyectos</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-accent">100%</div>
                <div className="text-sm text-muted-foreground">Compromiso</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-accent">2</div>
                <div className="text-sm text-muted-foreground">Idiomas</div>
              </div>
            </div>

            {/* Botones de acción principales con scroll suave */}
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => smoothScroll('projects')}
                size="lg" 
                className="bg-accent hover:bg-accent/90 transition-all duration-300 transform hover:scale-105"
              >
                Ver Mi Trabajo
              </Button>
              <Button 
                onClick={() => smoothScroll('contact')}
                variant="outline" 
                size="lg"
                className="transition-all duration-300 transform hover:scale-105 border-2"
              >
                Contáctame
              </Button>
            </div>

            {/* Redes sociales */}
            <div className="flex gap-4 pt-4">
              <Button 
                variant="ghost" 
                size="icon" 
                asChild 
                className="rounded-full transition-all duration-300 hover:scale-110 hover:bg-accent/10"
              >
                <a 
                  href="https://github.com/leo03c" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                asChild 
                className="rounded-full transition-all duration-300 hover:scale-110 hover:bg-accent/10"
              >
                <a 
                  href="mailto:leonardocastillod7@gmail.com" 
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Columna derecha - Código QR */}
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="bg-card p-6 rounded-2xl shadow-lg border border-border transition-all duration-300 hover:shadow-xl">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-2">
                  <QrCode className="h-4 w-4" />
                  <span>Escanea para descargar mi CV</span>
                </div>
                
                {isClient && qrCode ? (
                  <img 
                    src={qrCode} 
                    alt="Código QR para descargar CV" 
                    className="w-48 h-48 mx-auto rounded-lg border transition-all duration-300 hover:scale-105"
                    onError={(e) => {
                      // Fallback si la generación del QR falla
                      const fileName = 'CV-Leonardo-Castillo-Diaz.pdf'
                      const cvUrl = `${window.location.origin}/${fileName}`
                      const fallbackQr = `https://quickchart.io/qr?text=${encodeURIComponent(cvUrl)}&size=200`
                      e.currentTarget.src = fallbackQr
                    }}
                  />
                ) : (
                  <div className="w-48 h-48 bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent mx-auto mb-2"></div>
                      <p className="text-xs">Generando QR...</p>
                    </div>
                  </div>
                )}
                
                <p className="text-xs text-muted-foreground max-w-[200px]">
                  Usa la cámara de tu dispositivo para escanear y descargar mi currículum
                </p>
              </div>
            </div>
            
            {/* Información adicional del QR */}
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                También disponible en:
              </p>
              <div className="flex justify-center gap-4">
                <Button 
                  onClick={handleDownloadCV}
                  variant="outline" 
                  size="sm"
                  className="flex items-center gap-2 transition-all duration-300 hover:scale-105"
                >
                  <FileText className="h-3 w-3" />
                  Descargar Directo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}