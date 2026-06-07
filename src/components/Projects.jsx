import { motion } from "framer-motion"
import { FiGithub, FiExternalLink } from "react-icons/fi"
import { projects } from "../data/content"

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 max-w-6xl mx-auto">
      <motion.h2
        className="font-display text-5xl font-black mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
      >
        What I've <span className="gradient-text">built</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: i * 0.1 }}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-violet-800/60 transition-all duration-300 group"
          >
            {/* Screenshot */}
            <div className="relative overflow-hidden bg-zinc-950" style={{ height: "220px" }}>
  {p.image ? (
    <img
      src={p.image}
      alt={p.title}
      className="w-full h-auto block group-hover:scale-105 transition-transform duration-500"
      style={{ objectFit: "cover", objectPosition: "top" }}
    />
  ) : (
    <div className="w-full h-full flex items-center justify-center text-zinc-600 text-sm">
      No preview
    </div>
  )}
  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent" />
  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${p.color}`} />
</div>

            {/* Card Content */}
            <div className="p-5">
              <h3 className="font-display text-xl font-bold mb-2">
                {p.title}
              </h3>

              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 bg-zinc-800 rounded-full text-zinc-400"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-500 hover:text-violet-400 transition-colors"
                  >
                    <FiGithub size={18} />
                  </a>
                )}

                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-500 hover:text-violet-400 transition-colors"
                  >
                    <FiExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}