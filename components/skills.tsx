import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "JavaScript", "HTML5", "CSS3", "TailwindCSS", "Bootstrap"],
    },
    {
      category: "Backend",
      skills: ["Django", "Django REST", "Python", "Java", "PostgreSQL"],
    },
    {
      category: "Herramientas",
      skills: ["Git", "Odoo", "C++"],
    },
  ]

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Tecnologías y herramientas</h2>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Stack tecnológico con el que trabajo para crear soluciones completas y eficientes.
            </p>
          </div>

          <div className="space-y-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-semibold">{category.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="px-4 py-2 text-sm font-medium">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
