import { motion } from "framer-motion"
import { info } from "../data/info"

export default function About() {
  return (
    <section id="about" className="py-28 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-5xl font-black mb-6">
            About <span className="gradient-text">me</span>
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            I'm a developer who sits at the intersection of AI and full-stack
            engineering. I care deeply about building things that are both
            technically sound and delightful to use.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            When I'm not shipping code, I'm reading research papers,
            contributing to open source, or experimenting with new model
            architectures.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-3 bg-gradient-to-br from-violet-600/30 to-cyan-500/20 rounded-2xl blur-sm" />
          <img
            src={info.avatar}
            alt={info.name}
            className="relative rounded-2xl w-full object-cover aspect-square"
          />
        </motion.div>
      </div>
    </section>
  )
}