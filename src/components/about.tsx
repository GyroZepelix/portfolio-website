import { motion } from "framer-motion"
import { Badge } from "./ui/badge"

export default function About() {
  const technologies = [
    "Java",
    "JavaScript",
    "Rust",
    "Go",
    "Spring Boot",
    "React",
    "AWS",
    "Kubernetes",
    "Docker",
    "Microservices",
  ]

  return (
    <section id="about" className="py-16 px-3 md:px-6 lg:px-8 bg-muted/50 scroll-mt-16">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <p className="text-base md:text-lg leading-relaxed">
                I'm Domagoj Gjalić, Founder & CEO at <strong className="text-primary">AXIO</strong> and a{" "}
                <strong>Backend Engineer</strong> specializing in microservices and cloud-native systems
                with Java and Spring Boot. With over 4 years of professional experience, I've built
                enterprise applications for industry leaders like{" "}
                <strong className="text-primary">Deutsche Bahn</strong> and{" "}
                <strong className="text-primary">BASF</strong>, directly impacting millions of users
                across Europe.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                My work spans international railway communication systems at Deutsche Bahn in Frankfurt,
                document extraction services using <strong>AWS Textract</strong> and{" "}
                <strong>Kafka</strong> (improving accuracy from 45% to 98%), and building
                mission-critical microservices with <strong>Spring Boot</strong>,{" "}
                <strong>AWS</strong>, and <strong>Kubernetes</strong>.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Whether I'm architecting scalable backend systems or tackling complex algorithmic challenges, I approach
                each problem with curiosity and precision. When I'm not coding, you'll find me exploring the latest
                developments in space technology and exploration.
              </p>

              <div className="mt-8">
                <h4 className="text-sm font-semibold mb-4 text-primary">Core Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
