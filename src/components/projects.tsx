import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { ExternalLink, Github, Lock } from "lucide-react"

type Repository = {
  id: number
  name: string
  description: string
  html_url: string
  homepage: string
  topics: string[]
  language: string
  isPrivate?: boolean
}

export default function Projects() {
  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setRepos([
        {
          id: 1,
          name: "UsporediMe",
          description:
            "A comprehensive price comparison platform with Vue frontend, Spring Boot backend, and Go-based store crawler. Features real-time price tracking, product parsing, and Docker Swarm deployment with Traefik routing.",
          html_url: "#",
          homepage: "https://www.usporedime.com",
          topics: [
            "vue",
            "spring-boot",
            "go",
            "postgresql",
            "docker-swarm",
            "traefik",
            "price-comparison",
            "web-scraping",
          ],
          language: "Java",
          isPrivate: true,
        },
        {
          id: 2,
          name: "MithrilCMS",
          description:
            "A lightweight, developer-focused Content Management System built with Go and PostgreSQL. Features type-safe database operations with sqlc, database migrations, and Docker containerization for easy deployment.",
          html_url: "https://github.com/GyroZepelix/mithril-cms",
          homepage: "",
          topics: ["go", "postgresql", "cms", "sqlc", "migrate", "docker", "api"],
          language: "Go",
        },
        {
          id: 3,
          name: "Project-Source",
          description:
            "A real-time messaging application developed as my high school thesis project. Built with React frontend, Spring Boot 3.0 backend, Keycloak authentication, and Cassandra database for scalable messaging.",
          html_url: "https://github.com/GyroZepelix/project-source",
          homepage: "",
          topics: [
            "react",
            "spring-boot",
            "keycloak",
            "cassandra",
            "postgresql",
            "real-time",
            "messaging",
            "authentication",
          ],
          language: "Java",
        },
      ])
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <section id="projects" className="py-16 px-3 md:px-6 lg:px-8 scroll-mt-16">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my personal projects showcasing different aspects of full-stack development
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{repo.name}</span>
                        {repo.isPrivate && <Lock className="h-4 w-4 text-muted-foreground" />}
                      </div>
                      <Badge variant="outline" className="ml-2 shrink-0">
                        {repo.language}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{repo.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {repo.topics.slice(0, 6).map((topic) => (
                        <Badge key={topic} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                      {repo.topics.length > 6 && (
                        <Badge variant="secondary" className="text-xs">
                          +{repo.topics.length - 6} more
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between gap-2">
                    {repo.isPrivate ? (
                      <Button variant="outline" size="sm" disabled className="flex-1">
                        <Lock className="mr-2 h-4 w-4" />
                        Private Repo
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm" asChild className="flex-1">
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Source
                        </a>
                      </Button>
                    )}
                    {repo.homepage && (
                      <Button variant="default" size="sm" asChild className="flex-1">
                        <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
