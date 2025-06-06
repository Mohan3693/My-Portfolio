"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SiNextdotjs, SiTailwindcss, SiReact, SiNodedotjs, SiMongodb, SiSocketdotio, SiExpress } from "react-icons/si";
import { FiCopy, FiCheck } from "react-icons/fi";

const techIcons = {
  "Next.js": <SiNextdotjs className="text-gray-800" title="Next.js" />,
  "Tailwind": <SiTailwindcss className="text-sky-400" title="Tailwind CSS" />,
  "React": <SiReact className="text-sky-500" title="React" />,
  "Node.js": <SiNodedotjs className="text-green-600" title="Node.js" />,
  "MongoDB": <SiMongodb className="text-green-700" title="MongoDB" />,
  "Socket.io": <SiSocketdotio className="text-black" title="Socket.io" />,
  "Express": <SiExpress className="text-gray-700" title="Express" />,
};

const projects = [
    {
        title: "My Portfolio Website",
        category: "Personal Project",
        description:
            "A modern, interactive portfolio built with Next.js, React, and Tailwind CSS to showcase my work, skills, and experience.",
        details:
            "This very website! Designed and developed from scratch with a focus on smooth animations, responsive design, and a professional presentation. Features include animated sections, project modals, and a beautiful custom theme.",
        tech: ["Next.js", "React", "Tailwind"],
        github: "https://github.com/Mohan3693/My-Portfolio",
        demo: "https://my-portfolio-one-sable.vercel.app/", // <-- updated live link
        image: "/portfolio-screenshot.png",
        featured: true,
        createdAt: "2025-06-06",
    },
];

const isNew = (createdAt) => {
  const days = (Date.now() - new Date(createdAt)) / (1000 * 60 * 60 * 24);
  return days < 30;
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }, // Smooth easing curve
  }),
};

const ProjectsSectionV3 = () => {
  const [selected, setSelected] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = (url) => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <section
      id="projects"
      className="w-full min-h-[60vh] flex items-center justify-center px-2 sm:px-8 py-16"
    >
      <div className="w-full max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }} // Smooth heading animation
          viewport={{ once: true }}
        >
          My Work
        </motion.h2>
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scaleX: 0.7 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.8, 0.25, 1] }} // Smooth divider animation
          viewport={{ once: true }}
        >
          <div className="h-1 w-24 bg-gradient-to-r from-[var(--color-accent)] to-blue-400 rounded-full" />
        </motion.div>
        <p className="text-center text-lg text-[var(--color-accent)] mb-8">
          A selection of my favorite work, built with modern web technologies.
        </p>
        <div
          className="
            grid gap-8 md:grid-cols-2 lg:grid-cols-3
            justify-center items-stretch
            place-items-center
            mx-auto
            w-full
            "
          style={{
            gridAutoFlow: "row",
            justifyItems: "center",
          }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              className="relative bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.04] hover:border-[var(--color-accent)] hover:bg-white transition-all duration-300 p-0 flex flex-col h-full min-h-[480px] max-w-[370px] w-full mx-auto overflow-hidden"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={idx}
              tabIndex={0}
              role="button"
              aria-label={`View details for ${project.title}`}
              onClick={(e) => {
                e.stopPropagation(); // Prevent propagation to child elements
                setSelected(project); // Open the modal
              }}
            >
              {project.featured && (
                <span className="absolute top-4 left-4 z-10 bg-[var(--color-accent)] text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse shadow">
                  Featured
                </span>
              )}
              {isNew(project.createdAt) && (
                <span className="absolute top-4 right-4 z-10 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow animate-bounce">
                  New
                </span>
              )}
              <div className="relative w-full h-52 overflow-hidden rounded-t-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-t-2xl"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Animated overlay with actions */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center gap-3 transition-opacity duration-300 rounded-t-2xl">
                  <button
                    className="btn-primary px-6 py-2 rounded-full font-semibold"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent propagation to the parent card
                      setSelected(project); // Open the modal
                    }}
                  >
                    View Details
                  </button>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary px-4 py-2 rounded-full font-semibold"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent propagation to the parent card
                      }}
                    >
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary px-4 py-2 rounded-full font-semibold"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent propagation to the parent card
                      }}
                    >
                      Live
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between min-h-[250px]">
                {/* Category/tagline */}
                {project.category && (
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-1">
                    {project.category}
                  </span>
                )}
                <h3 className="text-xl font-bold mb-2 text-[var(--color-accent)]">
                  {project.title}
                </h3>
                <p className="mb-4 text-theme-dark/80 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4 items-center">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="flex items-center gap-1 px-2 py-1 rounded bg-[var(--color-bg-light)] text-xs font-mono text-[var(--color-primary)] border border-[var(--color-primary)]"
                    >
                      {techIcons[tech] || null}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <a
            href="https://github.com/Mohan3693"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-3 rounded-full text-lg font-semibold shadow hover:shadow-lg transition"
          >
            See All Projects
          </a>
        </div>
      </div>
      {/* Modal for project details */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }} // Smooth modal animation
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-2xl max-w-lg w-full relative"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }} // Smooth modal content animation
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-xl font-bold text-[var(--color-accent)] hover:text-red-500"
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                ×
              </button>
              <div className="w-full h-48 relative mb-6 rounded-lg overflow-hidden">
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col items-center mb-4">
                <h3 className="text-2xl font-bold mb-1 text-[var(--color-accent)]">
                  {selected.title}
                </h3>
                <div className="h-1 w-16 bg-gradient-to-r from-[var(--color-accent)] to-blue-400 rounded-full mb-3" />
                <p className="mb-4 text-theme-dark/90 text-center">
                  {selected.details}
                </p>
                <div className="flex flex-wrap gap-2 mb-4 items-center justify-center">
                  {selected.tech.map((tech) => (
                    <span
                      key={tech}
                      className="flex items-center gap-1 px-2 py-1 rounded bg-[var(--color-bg-light)] text-xs font-mono text-[var(--color-primary)] border border-[var(--color-primary)]"
                    >
                      {techIcons[tech] || null}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 mb-4">
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex-1 text-center"
                >
                  Code
                </a>
                <a
                  href={selected.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1 text-center"
                >
                  Live
                </a>
              </div>
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-accent)] text-[var(--color-accent)] font-semibold hover:bg-[var(--color-accent)] hover:text-white transition w-full justify-center"
                onClick={() => handleCopy(selected.github)}
              >
                {copied ? <FiCheck /> : <FiCopy />}
                {copied ? "Copied!" : "Copy GitHub Link"}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSectionV3;