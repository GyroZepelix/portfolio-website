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
        "Leading technical architecture and consulting for European enterprises, helping organizations design and deploy scalable cloud-native systems. I work directly with clients as a hands-on architect, guiding teams through microservices adoption, cloud migrations, and complex backend challenges across the European tech landscape.",
      technologies: [
        "System Architecture",
        "Cloud Consulting",
        "Java",
        "Spring Boot",
        "AWS",
        "Kubernetes",
        "Microservices",
      ],
    },
    {
      company: "Deutsche Bahn",
      position: "Backend Developer",
      period: "December 2023 - February 2026",
      location: "Remote (Frankfurt am Main, Germany)",
      summary:
        "Developed and maintained Spring Boot microservices for the OSDM platform, powering international train ticketing across 15+ European partner systems. Implemented Keycloak authentication, deployed on AWS and Kubernetes, and maintained comprehensive test suites using TDD, WireMock, and Cucumber BDD. Monitored production environments with Grafana and Graylog following SAFe Agile practices.",
      technologies: [
        "Spring Boot",
        "AWS",
        "Kubernetes",
        "Keycloak",
        "WireMock",
        "Grafana",
        "Graylog",
        "Docker",
        "SAFe Agile",
      ],
    },
    {
      company: "OG Consultancy Services",
      position: "Backend Software Engineer",
      period: "July 2023 - February 2026",
      location: "Remote",
      summary:
        "Since transitioning to a full-time backend role, I've specialized in developing complex microservices architectures for major clients including BASF and DeutscheBahn. My work focuses on building scalable, mission-critical systems using Spring Boot, AWS, and Kubernetes, with particular emphasis on document processing services and international railway communication systems. I've developed custom algorithms for multi-language document analysis, implemented secure authentication solutions with Keycloak, and maintained comprehensive testing pipelines using WireMock and Cucumber. Throughout this role, I've consistently delivered high-availability solutions while contributing to Agile development processes and maintaining 100% system uptime.",
      technologies: [
        "Spring Boot",
        "AWS",
        "Kubernetes",
        "Java",
        "Keycloak",
        "WireMock",
        "Cucumber",
        "Microservices",
        "Docker",
        "Grafana",
      ],
    },
    {
      company: "OG Consultancy Services",
      position: "Software Developer Internship",
      period: "July 2022 - July 2023",
      location: "Remote",
      summary:
        "During my internship at OG Consultancy Services, I designed and implemented user interfaces using React while architecting complete backend solutions with Spring Boot following Test-Driven Development principles. I gained hands-on experience with cloud deployment and DevOps practices, managing applications using AWS EKS, Docker containerization, and monitoring tools like Grafana. This role provided me with a strong foundation in full-stack development and introduced me to enterprise-level development practices and client project delivery.",
      technologies: ["React", "Spring Boot", "AWS EKS", "Docker", "Grafana", "TDD", "JavaScript", "Java", "DevOps"],
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
