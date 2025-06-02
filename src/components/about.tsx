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
                I'm Domagoj Gjalić, a <strong>Full-Stack Software Engineer</strong> specializing in backend architecture and microservices development. With over 3 years of professional
                experience, I've built my expertise through hands-on learning, personal projects, and solving real-world
                challenges—architecting and delivering mission-critical applications for industry leaders like{" "}
                <strong className="text-primary">BASF</strong> and{" "}
                <strong className="text-primary">DeutscheBahn</strong> that directly impact millions of users across
                Europe.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                My technical expertise centers on <strong>Java</strong>, <strong>JavaScript</strong>,{" "}
                <strong>Rust</strong>, and <strong>Go</strong>, with deep proficiency in <strong>Spring Boot</strong>,{" "}
                <strong>React</strong>, and cloud-native technologies including <strong>AWS</strong>,{" "}
                <strong>Kubernetes</strong>, and <strong>Docker</strong>. I thrive on solving complex problems—from
                building document processing systems that handle multiple languages to creating algorithms that make
                sense of messy, unstructured data.
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
