import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Experience from "./components/Experience"

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
      </main>
      <footer className="text-center py-10 text-zinc-600 text-sm border-t border-zinc-900">
        Built with React · Tailwind v4 · Framer Motion
      </footer>
    </>
  )
}