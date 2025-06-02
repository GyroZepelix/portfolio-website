import Hero from "../components/hero"
import About from "../components/about"
import Experience from "../components/experience"
import Skills from "../components/skills"
import Projects from "../components/projects"
import Education from "../components/education"
import Contact from "../components/contact"
import ThemeToggle from "../components/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </main>
  )
}
