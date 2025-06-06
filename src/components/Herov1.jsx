"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { FaBriefcase } from "react-icons/fa6";

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [seen, setSeen] = useState(false);
  const heroRef = useRef(null);

  // Reset "seen" when hero section comes back into view
  useEffect(() => {
    const section = heroRef.current;
    if (!section) return;

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(false);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleAvatarClick = () => {
    setShowModal(true);
    setSeen(true);
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="w-full min-h-screen flex items-center text-theme-dark px-2 sm:px-6 md:px-16 py-16 md:py-24 pt-20"
    >
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center w-full">
        {/* Left Side: Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6 card-glass p-8 flex flex-col items-center"
        >
          <div className="flex flex-col items-center gap-4">
            <div
              className={`p-1 bg-white rounded-full cursor-pointer transition-transform hover:scale-105
                ${seen ? "ring-4 ring-red-200" : "ring-4 ring-red-500"}
              `}
              onClick={handleAvatarClick}
              title="View full photo"
            >
              <Image
                src="/profile.jpeg"
                alt="Satish"
                width={120}
                height={120}
                className="rounded-full border-4 border-transparent shadow-lg bg-white"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight flex items-center gap-2 text-center">
              <span
                className="inline-block origin-[70%_70%] animate-wave"
                role="img"
                aria-label="Waving hand"
              >
                👋
              </span>
              Hi, I’m{" "}
              <span className="bg-gradient-to-r from-red-500 via-red-500 to-red-500 bg-clip-text text-transparent ml-2">
                Satish
              </span>
            </h1>
            <p className="text-lg md:text-xl text-center">
              A full-stack developer who codes with clarity and purpose. I design
              scalable, lightning-fast web apps using modern stacks.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href="/resume.pdf"
                className="btn-primary flex items-center gap-2"
                download
              >
                <HiOutlineDocumentArrowDown className="text-xl" />
                Resume
              </a>
              <a
                href="#projects"
                className="btn-secondary flex items-center gap-2"
              >
                <FaBriefcase className="text-lg" />
                Projects
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Glassy Code Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative card-glass p-8"
        >
          <p className="text-red-500 mb-2">// current stack</p>
          <pre className="whitespace-pre-wrap leading-relaxed text-red-600 font-mono">
            <code>
              {`const satish = {
  role: "Full Stack Dev",
  techStack: ["React", "Next.js", "Node.js", "Tailwind"],
  hobbies: ["cleanCode", "debugging", "coffee"],
  openToWork: true,
};`}
            </code>
          </pre>
        </motion.div>
      </div>

      {/* Modal for full photo */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={() => setShowModal(false)}
        >
          <div className="bg-white rounded-2xl p-4 shadow-xl max-w-xs w-full flex flex-col items-center">
            <Image
              src="/profile.jpeg"
              alt="satish"
              width={300}
              height={300}
              className="rounded-2xl"
            />
            <button
              className="mt-4 px-4 py-2 rounded-full bg-red-500 text-white font-semibold"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
