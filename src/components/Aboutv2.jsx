"use client";

import { motion } from "framer-motion";
import { FaCode, FaPalette, FaLeaf, FaUsers } from "react-icons/fa";

const badgeVariants = {
  animate: {
    x: [0, 10, -10, 0],
    transition: {
      duration: 4, // slowed down from 2 to 4 seconds
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
};

const AboutSectionV2 = () => {
  return (
    <section
      id="about"
      className="w-full flex justify-center items-center min-h-[60vh] px-2 sm:px-6 py-12"
    >
      <motion.div
        className="w-full max-w-2xl md:max-w-3xl mx-auto bg-white/90 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-xl px-4 sm:px-8 py-8 flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center tracking-tight text-gray-900">
          Professional Profile
        </h2>
        <div className="h-1 w-12 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent)] rounded-full mb-5" />
        <p className="text-base md:text-lg leading-relaxed mb-4 text-center text-gray-700 font-light">
          Hi, I’m{" "}
          <span className="font-semibold text-[var(--color-accent)]">Satish</span>. I’m
          a{" "}
          <span className="font-semibold text-[var(--color-accent)]">full-stack developer</span>
          who loves building modern, scalable web applications with{" "}
          <span className="font-semibold text-[var(--color-accent)]">Next.js</span>,{" "}
          <span className="font-semibold text-[var(--color-accent)]">React</span>, and{" "}
          <span className="font-semibold text-[var(--color-accent)]">Node.js</span>.
        </p>
        <blockquote className="italic text-[var(--color-accent)]/90 text-center mb-4 px-4 border-l-4 border-[var(--color-accent)]/30 font-medium text-sm md:text-base">
          “Great products are built with care, collaboration, and attention to detail.”
        </blockquote>
        <p className="text-sm md:text-base leading-relaxed text-center mb-6 text-gray-600 font-light">
          I focus on clean code, thoughtful UI, and delivering fast, accessible, and maintainable solutions. I enjoy working with teams, learning new things, and turning ideas into reality.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-xs md:max-w-2xl mb-8">
          <div className="flex flex-col items-center">
            <FaCode className="text-lg md:text-xl text-[var(--color-accent)] mb-1" />
            <motion.span
              className="px-3 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-medium text-xs md:text-sm border border-[var(--color-accent)]/20 text-center shadow-sm"
              variants={badgeVariants}
              animate="animate"
            >
              Full-Stack Dev
            </motion.span>
          </div>
          <div className="flex flex-col items-center">
            <FaPalette className="text-lg md:text-xl text-[var(--color-accent)] mb-1" />
            <motion.span
              className="px-3 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-medium text-xs md:text-sm border border-[var(--color-accent)]/20 text-center shadow-sm"
              variants={badgeVariants}
              animate="animate"
            >
              UI/UX
            </motion.span>
          </div>
          <div className="flex flex-col items-center">
            <FaLeaf className="text-lg md:text-xl text-[var(--color-accent)] mb-1" />
            <motion.span
              className="px-3 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-medium text-xs md:text-sm border border-[var(--color-accent)]/20 text-center shadow-sm"
              variants={badgeVariants}
              animate="animate"
            >
              Learner
            </motion.span>
          </div>
          <div className="flex flex-col items-center">
            <FaUsers className="text-lg md:text-xl text-[var(--color-accent)] mb-1" />
            <motion.span
              className="px-3 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-medium text-xs md:text-sm border border-[var(--color-accent)]/20 text-center shadow-sm"
              variants={badgeVariants}
              animate="animate"
            >
              Team Player
            </motion.span>
          </div>
        </div>
        {/* Connect With Me - Improved Official Look */}
        <div className="w-full flex flex-col items-center mt-2">
          <span className="uppercase tracking-widest text-xs font-semibold text-gray-400 mb-2">
            Connect with me
          </span>
          <div className="flex gap-3 md:gap-4">
            <a
              href="satishmohan3693@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-full bg-white border border-gray-200 shadow hover:shadow-lg transition-all duration-200 p-2 flex items-center justify-center hover:bg-[var(--color-accent)]/10"
              aria-label="Email"
            >
              <svg
                className="w-5 h-5 text-gray-500 group-hover:text-[var(--color-accent)] transition"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 13.5L2 7.5V18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7.5l-10 6z" />
                <path d="M22 6c0-.55-.22-1.05-.59-1.41-.37-.37-.87-.59-1.41-.59H4c-.55 0-1.05.22-1.41.59C2.22 4.95 2 5.45 2 6v.01l10 6 10-6V6z" />
              </svg>
            </a>
            <a
              href="https://github.com/Mohan3693"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-full bg-white border border-gray-200 shadow hover:shadow-lg transition-all duration-200 p-2 flex items-center justify-center hover:bg-[var(--color-accent)]/10"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5 text-gray-500 group-hover:text-[var(--color-accent)] transition" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.111-4.555-4.945 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.688-4.566 4.937.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.577.688.479C19.135 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/satish-siyadri"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-full bg-white border border-gray-200 shadow hover:shadow-lg transition-all duration-200 p-2 flex items-center justify-center hover:bg-[var(--color-accent)]/10"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 text-gray-500 group-hover:text-[var(--color-accent)] transition" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/>
              </svg>
            </a>
          </div>
        </div>
        {/* End Connect With Me */}
      </motion.div>
    </section>
  );
};

export default AboutSectionV2;