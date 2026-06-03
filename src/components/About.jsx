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
          Curiosity brought me into technology, and building keeps me here. <br></br>
          <br></br>
          I'm <b>Arisha</b>, a Computer Science student passionate about Artificial Intelligence, machine learning, and software development. 
          I enjoy transforming ideas into meaningful products that solve real-world problems and create impactful user experiences.
        </p>
        <p className="text-zinc-400 leading-relaxed">
          Beyond coding, I thrive on continuous learning, collaboration, and exploring emerging technologies. 
          Whether I'm developing AI-driven solutions, building web applications, or contributing to technical communities, I'm always looking for opportunities to create, innovate, and grow.
        </p>
      </motion.div>
    </section>
  )
}