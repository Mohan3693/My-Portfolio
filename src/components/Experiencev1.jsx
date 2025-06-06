"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";

const experienceData = [
	{
		company: "Portfolio Project",
		role: "Full Stack Developer",
		date: "Jun 2025",
		description: [
			"Designed and developed a modern, interactive portfolio website using Next.js, React, and Tailwind CSS.",
			"Implemented smooth animations and responsive layouts for an engaging user experience.",
			"Integrated project modals, resume download, and dynamic skill bars.",
			"Optimized site performance and SEO for fast load times and high visibility.",
			"Utilized Git and GitHub for version control and collaborative development.",
		],
		icon: <FaLaptopCode className="text-lg opacity-70" />,
	},
];

const detailVariants = {
	initial: { opacity: 0, y: 30, scale: 0.98 },
	animate: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
	},
	exit: {
		opacity: 0,
		y: -30,
		scale: 0.98,
		transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
	},
};

export default function ExperienceSectionV1() {
	const [activeIndex, setActiveIndex] = useState(0);
	const active = experienceData[activeIndex];

	return (
		<section
			id="experience"
			className="w-full min-h-[60vh] flex items-center justify-center px-2 sm:px-8 py-16"
		>
			<div className="w-full max-w-4xl mx-auto card-glass p-8">
				<h2 className="text-3xl font-bold text-center mb-10">
					Professional Experience
				</h2>
				<div className="flex flex-col md:flex-row gap-8">
					{/* Timeline/Selector */}
					<div className="flex md:flex-col gap-4 md:w-1/3 justify-center">
						{experienceData.map((exp, idx) => (
							<button
								key={exp.company}
								onClick={() => setActiveIndex(idx)}
								className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300
									${
										idx === activeIndex
											? "bg-[var(--color-accent)] text-theme-dark shadow-lg scale-105"
											: "bg-[var(--color-primary)] text-theme-dark hover:bg-[var(--color-accent)]/70 hover:scale-105"
									}`}
								style={{
									outline:
										idx === activeIndex
											? "2px solid var(--color-accent)"
											: "none",
								}}
							>
								{exp.icon}
								{exp.company}
							</button>
						))}
					</div>
					{/* Details */}
					<motion.div
						className="flex-1 bg-white/90 card-glass rounded-xl shadow-xl p-6 min-h-[260px] flex flex-col justify-center transition-all duration-300 hover:shadow-[0_8px_40px_0_rgba(255,56,92,0.15)] hover:bg-red-50/60 hover:scale-[1.025]"
						whileHover={{
							scale: 1.025,
							boxShadow: "0 8px 40px 0 rgba(255,56,92,0.15)",
							backgroundColor: "rgba(254,226,226,0.6)",
						}}
					>
						<AnimatePresence mode="wait">
							<motion.div
								key={active.company}
								variants={detailVariants}
								initial="initial"
								animate="animate"
								exit="exit"
							>
								<h3 className="text-xl font-bold mb-1 text-[var(--color-accent)]">
									{active.role}
								</h3>
								<div className="text-sm mb-2 font-mono text-gray-500">
									{active.date}
								</div>
								<ul className="list-disc pl-5 space-y-2 mb-2">
									{active.description.map((item, i) => (
										<motion.li
											key={i}
											initial={{ opacity: 0, x: 20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{
												delay: 0.1 + i * 0.08,
												duration: 0.4,
												ease: "easeOut",
											}}
										>
											{item}
										</motion.li>
									))}
								</ul>
							</motion.div>
						</AnimatePresence>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
