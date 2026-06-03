import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-28 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
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
    </section>
  )
}