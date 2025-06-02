import { useEffect } from "react"
import Hero from "./components/hero"
import About from "./components/about"
import Experience from "./components/experience"
import Skills from "./components/skills"
import Projects from "./components/projects"
import Education from "./components/education"
import Contact from "./components/contact"
import ThemeToggle from "./components/theme-toggle"

function App() {
  useEffect(() => {
    const link = document.createElement("link")
    link.href = "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
    link.rel = "stylesheet"
    document.head.appendChild(link)

    document.body.style.fontFamily = '"Space Grotesk", sans-serif'

    return () => {
      document.head.removeChild(link)
    }
  }, [])

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

export default App
