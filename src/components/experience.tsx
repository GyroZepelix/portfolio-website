import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

type Experience = {
  company: string
  position: string
  period: string
  location: string
  summary: string
  technologies: string[]
}

export default function Experience() {
  const experiences: Experience[] = [
    {
      company: "AXIO",
      position: "Founder & CEO",
      period: "March 2026 - Present",
      location: "Đakovo, Croatia",
      summary:
        "Leading software development initiatives at AXIO, focusing on building scalable backend systems and cloud-native architectures. Driving technical strategy and delivering high-quality solutions for clients across Europe.",
      technologies: [
        "Java",
        "Spring Boot",
        "AWS",
        "Kubernetes",
        "Docker",
        "Microservices",
        "System Architecture",
      ],
    },
    {
      company: "Deutsche Bahn",
      position: "Backend Developer",
      period: "December 2023 - February 2026",
      location: "Frankfurt am Main, Germany",
      summary:
        "Developed and maintained Spring Boot services for the OSDM backend, facilitating international train ticketing across Europe. Implemented Keycloak authentication and deployed applications on AWS and Kubernetes, ensuring robust security and scalability. Employed TDD, WireMock, and Cucumber BDD to write comprehensive tests, enhancing system reliability across 15+ partner systems. Monitored production environments using Grafana and Graylog, adhering to SAFe Agile methodologies.",
      technologies: [
        "Spring Boot",
        "AWS",
        "Kubernetes",
        "Keycloak",
        "WireMock",
        "Cucumber",
        "Grafana",
        "Graylog",
        "Docker",
        "SAFe Agile",
      ],
    },
    {
      company: "OG Consultancy Services",
      position: "Full-stack Developer",
      period: "July 2023 - February 2026",
      location: "Đakovo, Croatia",
      summary:
        "Developed backend systems and microservices for enterprise clients including BASF. Created a document extraction service using Spring Boot, AWS Textract, and Kafka, improving data extraction accuracy from 45% to 98% through custom algorithms. Mentored junior developers and students.",
      technologies: [
        "Spring Boot",
        "AWS Textract",
        "Kafka",
        "Java",
        "Microservices",
        "Docker",
        "Mentoring",
      ],
    },
    {
      company: "OG Consultancy Services",
      position: "Developer Internship",
      period: "July 2022 - August 2022",
      location: "Đakovo, Croatia",
      summary:
        "Developed a full-stack cost-saving application from the ground up. Utilized React for frontend development and Spring Boot for backend services, ensuring robust functionality. Implemented Test-Driven Development (TDD) to enhance code quality and maintainability. Deployed the application on AWS using EKS and Docker, and established Grafana for monitoring.",
      technologies: ["React", "Spring Boot", "AWS EKS", "Docker", "Grafana", "TDD"],
    },
  ]

  return (
    <section id="experience" className="py-16 px-3 md:px-6 lg:px-8 scroll-mt-16">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey building enterprise-level applications and microservices
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.position}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1 flex items-center gap-2">
                        <Building className="h-5 w-5 text-primary" />
                        {exp.position}
                      </CardTitle>
                      <div className="text-lg font-semibold text-primary mb-1">{exp.company}</div>
                    </div>
                    <div className="flex flex-col gap-2 lg:text-right">
                      <div className="flex items-center gap-2 lg:justify-end">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <Badge variant="outline" className="font-medium">
                          {exp.period}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 lg:justify-end">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-muted-foreground leading-relaxed">{exp.summary}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-primary">Technologies & Tools:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
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
