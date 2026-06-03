import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
      </main>
      <footer className="text-center py-10 text-zinc-600 text-sm border-t border-zinc-900">
        Designed and built by Arisha using React · Tailwind v4 · Framer Motion · ❤️
      </footer>
    </>
  )
}