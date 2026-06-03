import { useState, useEffect } from "react"
import { info } from "../data/info"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = ["About", "Projects", "Skills", "Experience"]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0f]/90 backdrop-blur-md border-b border-white/10 py-3"
          : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <span className="font-display text-xl font-bold gradient-text">
          {info.name.split(" ")[0]}.
        </span>

        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${info.email}`}
          className="text-sm px-4 py-2 rounded-full border border-violet-400 text-violet-400
           hover:bg-violet-600 hover:text-white transition-all duration-200"
        >
          Contact
        </a>
      </div>
    </nav>
  )
}