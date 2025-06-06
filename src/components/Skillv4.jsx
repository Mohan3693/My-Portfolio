"use client";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
} from "react-icons/si";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const skills = [
  { name: "React", Icon: SiReact, level: 90 },
  { name: "Next.js", Icon: SiNextdotjs, level: 85 },
  { name: "JavaScript", Icon: SiJavascript, level: 95 },
  { name: "Tailwind CSS", Icon: SiTailwindcss, level: 80 },
  { name: "Node.js", Icon: SiNodedotjs, level: 75 },
];

export default function SkillsToolsSectionV8() {
  return (
    <section
      id="skills"
      className="w-full flex justify-center items-center min-h-[60vh] px-2 sm:px-6 py-12"
    >
      <div className="w-full max-w-2xl md:max-w-3xl mx-auto bg-white/90 border border-gray-100 rounded-2xl shadow-md px-4 sm:px-8 py-8 flex flex-col items-center box-border">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center tracking-tight text-gray-900">
          Tech Stack
        </h2>
        <div className="h-0.5 w-14 bg-gradient-to-r from-[var(--color-accent)] to-red-500 rounded-full mb-7" />
        <div className="space-y-6 w-full">
          {skills.map(({ name, Icon, level }) => (
            <SkillBar key={name} name={name} Icon={Icon} level={level} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Animated SkillBar component with "move and stick" effect
function SkillBar({ name, Icon, level }) {
  const controls = useAnimation();
  const percentControls = useAnimation();
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          controls.start({
            width: `${level}%`,
            background:
              "linear-gradient(90deg, var(--color-accent), #ef4444, #f87171, #fca5a5, var(--color-accent))",
            boxShadow: [
              "0 0 0px 0px #ef4444",
              "0 0 16px 4px #ef4444",
              "0 0 0px 0px #ef4444",
            ],
            transition: {
              duration: 1.5,
              ease: "easeInOut",
            },
          });
          percentControls.start({
            scale: [1, 1.25, 1],
            rotate: [0, 8, -8, 0],
            color: ["#ef4444", "#b91c1c", "#ef4444"],
            transition: { duration: 1, ease: "easeInOut" },
          });
          hasAnimated.current = true;
        } else if (!entry.isIntersecting && hasAnimated.current) {
          // Reset when out of view so it animates again on re-enter
          controls.start({ width: 0 });
          percentControls.start({ scale: 1, rotate: 0, color: "#ef4444" });
          hasAnimated.current = false;
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls, percentControls, level]);

  return (
    <motion.div
      className="flex items-center space-x-4 group"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
      viewport={{ once: false }}
    >
      <motion.div
        className="flex items-center justify-center w-10 h-10 rounded-full bg-red-50 group-hover:scale-110 transition-transform shadow-md"
        whileHover={{
          rotate: [0, 15, -15, 0],
          scale: 1.18,
          boxShadow: "0 0 16px 4px #ef4444",
        }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <Icon className="text-red-500 text-xl" />
      </motion.div>
      <div className="flex-1">
        <div className="flex justify-between mb-1">
          <span className="font-medium text-gray-800">{name}</span>
          <motion.span
            className="font-medium"
            animate={percentControls}
            style={{ color: "#ef4444" }}
          >
            {level}%
          </motion.span>
        </div>
        <div
          className="h-2 w-full rounded bg-red-100 overflow-hidden"
          ref={ref}
        >
          <motion.div
            className="h-2 rounded"
            initial={{ width: 0 }}
            animate={controls}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
            style={{
              background:
                "linear-gradient(90deg, var(--color-accent), #ef4444, #f87171, #fca5a5, var(--color-accent))",
              boxShadow: "0 0 12px 2px #ef4444",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
