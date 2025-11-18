import { Badge } from "@/components/ui/badge"
import { Code2, Database, Wrench, Users, Sparkles } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      category: "Frontend",
      color: "blue",
      skills: ["React", "Next.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
    },
    {
      icon: Database,
      category: "Backend",
      color: "green", 
      skills: ["Python", "Django", "Django REST", "PostgreSQL", "APIs REST"],
    },
    {
      icon: Wrench,
      category: "Herramientas",
      color: "purple",
      skills: ["Git", "C++", "Bots de Telegram", "Odoo"],
    },
    {
      icon: Users,
      category: "Profesional",
      color: "orange",
      skills: ["Resolución de Problemas", "Trabajo en Equipo", "Gestión de Proyectos", "Relaciones con Clientes", "Aprendizaje Rápido"],
    },
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800 dark:hover:bg-blue-900"
      case "green":
        return "bg-green-50 text-green-700 border-green-200 hover:bg-green-100 dark:bg-green-950 dark:text-green-300 dark:border-green-800 dark:hover:bg-green-900"
      case "purple":
        return "bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800 dark:hover:bg-purple-900"
      case "orange":
        return "bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100 dark:bg-orange-950 dark:text-orange-300 dark:border-orange-800 dark:hover:bg-orange-900"
      default:
        return "bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700"
    }
  }

  const getIconColor = (color: string) => {
    switch (color) {
      case "blue": return "text-blue-600 dark:text-blue-400"
      case "green": return "text-green-600 dark:text-green-400"
      case "purple": return "text-purple-600 dark:text-purple-400"
      case "orange": return "text-orange-600 dark:text-orange-400"
      default: return "text-gray-600 dark:text-gray-400"
    }
  }

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center dark:bg-accent/20">
                <Sparkles className="h-6 w-6 text-accent" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight dark:text-white">Tecnologías & Habilidades</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed dark:text-gray-400">
              Stack tecnológico que utilizo para crear soluciones completas y eficientes
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="group relative"
              >
                {/* Card */}
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-border dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 h-full flex flex-col">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg ${getColorClasses(category.color)} flex items-center justify-center`}>
                      <category.icon className={`h-5 w-5 ${getIconColor(category.color)}`} />
                    </div>
                    <h3 className="font-semibold text-lg dark:text-white">{category.category}</h3>
                  </div>
                  
                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className={`px-3 py-1.5 text-xs font-normal border ${getColorClasses(category.color)} transition-colors`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm text-muted-foreground dark:text-gray-400">
              Siempre aprendiendo nuevas tecnologías y mejorando mis habilidades para ofrecer las mejores soluciones
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}