import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiArrowDown } from "react-icons/fi";
import { info } from "../data/info";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 max-w-3xl"
      >
        <p className="text-sm font-medium text-violet-400 tracking-widest uppercase mb-4">
          {info.role}
        </p>

        <h1 className="font-display text-6xl md:text-8xl font-black mb-6 leading-none">
          Hi, I'm{" "}
          <span className="gradient-text">
            {info.name.split(" ")[0]}
          </span>
        </h1>

        <p className="text-xl text-zinc-400 mb-10 max-w-xl mx-auto leading-relaxed">
          {info.tagline}
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full font-medium text-white hover:opacity-90 transition-opacity"
          >
            See My Work
          </a>

          <a
            href={info.github}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border border-zinc-700 rounded-full text-zinc-300 hover:border-zinc-400 hover:text-white transition-all flex items-center gap-2"
          >
            <FiGithub size={16} />
            GitHub
          </a>

          <a
            href={info.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border border-zinc-700 rounded-full text-zinc-300 hover:border-zinc-400 hover:text-white transition-all flex items-center gap-2"
          >
            <FiLinkedin size={16} />
            LinkedIn
          </a>
        </div>
      </motion.div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-600 hover:text-zinc-400 animate-bounce"
      >
        <FiArrowDown size={22} />
      </a>
    </section>
  );
}