import { motion } from "framer-motion"
import { contributions } from "../data/content"

export default function Contributions() {
  return (
    <section id="contributions" className="py-28 px-6 max-w-6xl mx-auto">
      <motion.h2
        className="font-display text-5xl font-black mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
      >
        Where I've <span className="gradient-text">grown</span>
      </motion.h2>

      <div className="space-y-12">
        {contributions.map((c, i) => (
          <motion.div
            key={c.org}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: i * 0.1 }}
            className="bg-zinc-900 border border-violet-900/40 rounded-2xl p-8"
          >
            {/* Org header */}
            <div className="mb-6">
              <h3 className="font-display text-2xl font-bold">{c.org}</h3>
              <p className="text-zinc-500 text-sm mt-1">{c.period}</p>
            </div>

            {/* Roles timeline */}
            <div className="relative border-l border-zinc-700 ml-2 pl-8 space-y-8">
              {c.roles.map((role, j) => (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: j * 0.1 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-11 top-1.5 w-3 h-3 rounded-full bg-gradient-to-br from-violet-500 to-purple-700 ring-4 ring-zinc-900" />

                  <h4 className="font-display text-lg font-bold">{role.title}</h4>
                  <p className="text-violet-400 text-xs font-medium uppercase tracking-widest mt-0.5 mb-3">
                    {role.period}
                  </p>

                  <ul className="space-y-2">
                    {role.bullets.map((b) => (
                      <li
                        key={b}
                        className="text-zinc-400 text-sm leading-relaxed flex gap-2"
                      >
                        <span className="text-violet-400 mt-0.5">›</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}