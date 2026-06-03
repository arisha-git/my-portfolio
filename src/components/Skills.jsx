import { motion } from "framer-motion"
import { skills } from "../data/content"

const categoryColors = {
  "AI / ML": "border-violet-400/40 text-violet-400",
  "Frontend": "border-purple-400/40 text-purple-400",
  "Backend": "border-fuchsia-400/40 text-fuchsia-400",
  "DevOps": "border-violet-300/40 text-violet-300",
  "Tools & Platforms": "border-purple-300/40 text-purple-300",
  "Currently Learning": "border-fuchsia-300/40 text-fuchsia-300",
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 max-w-6xl mx-auto">
      <motion.h2
        className="font-display text-5xl font-black mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
      >
        What I <span className="gradient-text">know</span>
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, items], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: i * 0.08 }}
            className={`bg-zinc-900 border rounded-2xl p-6 ${
              categoryColors[category] ?? "border-zinc-700 text-zinc-400"
            }`}
          >
            <h3 className="font-display text-lg font-bold mb-4">{category}</h3>
            <ul className="space-y-2">
              {items.map((skill) => (
                <li
                  key={skill}
                  className="text-sm text-zinc-400 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}