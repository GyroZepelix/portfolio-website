import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Database, Globe, Server, Cpu, Terminal, Cloud } from "lucide-react"
import { Badge } from "./ui/badge"

type SkillCategory = {
  name: string
  icon: React.ReactNode
  skills: string[]
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      name: "Backend",
      icon: <Server className="h-5 w-5" />,
      skills: ["Java", "Spring Boot", "Rust", "Go", "Microservices", "API Design", "Kafka"],
    },
    {
      name: "Frontend",
      icon: <Globe className="h-5 w-5" />,
      skills: ["JavaScript", "TypeScript", "React", "Vue", "HTML/CSS", "Responsive Design"],
    },
    {
      name: "DevOps & Cloud",
      icon: <Cloud className="h-5 w-5" />,
      skills: ["AWS", "Kubernetes", "Docker", "CI/CD", "Grafana", "Prometheus"],
    },
    {
      name: "Linux & Systems",
      icon: <Terminal className="h-5 w-5" />,
      skills: ["Linux Administration", "Bash Scripting", "System Optimization", "Server Management", "Networking"],
    },
    {
      name: "Data & Security",
      icon: <Database className="h-5 w-5" />,
      skills: ["PostgreSQL", "MongoDB", "Keycloak", "Authentication", "Data Modeling"],
    },
    {
      name: "Tools & Testing",
      icon: <Cpu className="h-5 w-5" />,
      skills: ["Git", "WireMock", "Cucumber", "JUnit", "TDD", "Integration Testing"],
    },
  ]

  return (
    <section id="skills" className="py-16 px-3 md:px-6 lg:px-8 bg-muted/50 scroll-mt-16">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            My technical expertise spans backend architecture, Linux systems, and cloud technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="py-4 h-full hover:shadow-md transition-shadow duration-300">
                <CardContent className="px-4 pb-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">{category.icon}</div>
                    <h3 className="text-base font-semibold">{category.name}</h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
