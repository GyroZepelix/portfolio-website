import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { GraduationCap, Award, Calendar } from "lucide-react"

type Education = {
  title: string
  institution: string
  year: string
  type: "education" | "certification"
  description?: string
}

export default function Education() {
  const educationData: Education[] = [
    {
      title: "High School Diploma in Mechatronics",
      institution: "Technical Education Program",
      year: "2023",
      type: "education",
      description: "Specialized technical education focusing on mechanical and electronic systems integration",
    },
    {
      title: "Certified SAFe 6 Scrum Master",
      institution: "Knowledge Ladder Academy",
      year: "2024",
      type: "certification",
    },
    {
      title: "Junior Penetration Tester",
      institution: "TryHackMe",
      year: "2023",
      type: "certification",
    },
  ]

  return (
    <section id="education" className="py-16 px-3 md:px-6 lg:px-8 bg-muted/50 scroll-mt-16">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            My educational background and professional certifications
          </p>
        </motion.div>

        <div className="space-y-6">
          {educationData.map((item, index) => (
            <motion.div
              key={`${item.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-1">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 flex items-center gap-2">
                        {item.type === "education" ? (
                          <GraduationCap className="h-5 w-5 text-primary" />
                        ) : (
                          <Award className="h-5 w-5 text-primary" />
                        )}
                        {item.title}
                      </CardTitle>
                      <div className="text-lg font-semibold text-primary mb-2">{item.institution}</div>
                      {item.description && <p className="text-muted-foreground">{item.description}</p>}
                    </div>
                    <div className="flex items-center gap-2 lg:justify-end">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <Badge variant="outline" className="font-medium">
                        {item.year}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
