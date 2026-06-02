import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 max-w-6xl mx-auto">
      <motion.h2
        className="font-display text-5xl font-black mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
      >
        Selected <span className="gradient-text">work</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: i * 0.1 }}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-600 transition-all duration-300"
          >
            <div
              className={`h-1 w-full rounded-full bg-gradient-to-r ${p.color} mb-5`}
            />

            <h3 className="font-display text-xl font-bold mb-2">
              {p.title}
            </h3>

            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              {p.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 bg-zinc-800 rounded-full text-zinc-400"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-500 hover:text-white transition-colors"
                >
                  <FiGithub size={18} />
                </a>
              )}

              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-500 hover:text-white transition-colors"
                >
                  <FiExternalLink size={18} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}