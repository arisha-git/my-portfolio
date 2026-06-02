import { motion } from "framer-motion"
import { experience } from "../data/content"

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 max-w-6xl mx-auto">
      <motion.h2
        className="font-display text-5xl font-black mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
      >
        Where I've <span className="gradient-text">worked</span>
      </motion.h2>

      <div className="relative border-l border-zinc-800 ml-4 pl-8 space-y-12">
        {experience.map((job, i) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: i * 0.1 }}
            className="relative"
          >
            <div className="absolute -left-11 top-1 w-3 h-3 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 ring-4 ring-[#0a0a0f]" />

            <span className="text-xs text-violet-400 font-medium uppercase tracking-widest">
              {job.period}
            </span>
            <h3 className="font-display text-2xl font-bold mt-1">{job.role}</h3>
            <p className="text-zinc-500 text-sm mb-4">{job.company}</p>

            <ul className="space-y-2">
              {job.bullets.map((b) => (
                <li key={b} className="text-zinc-400 text-sm leading-relaxed flex gap-2">
                  <span className="text-violet-400 mt-0.5">›</span>
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}