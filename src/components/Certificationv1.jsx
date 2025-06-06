"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const CertificationsV1 = () => {
    return (
        <section
            id="certifications"
            className="w-full min-h-[30vh] text-theme-dark px-2 sm:px-8 py-12 flex items-center justify-center"
        >
            <motion.div
                className="w-full max-w-xl mx-auto card-glass p-8"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.h2
                    className="text-3xl font-bold text-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    Certifications
                </motion.h2>
                <motion.div
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <span className="text-7xl mb-4 animate-spin-slow">🧠</span>
                    <div className="text-xl font-bold text-[var(--color-accent)] mb-4">
                        No Certificates. Just{" "}
                        <span className="underline decoration-wavy decoration-yellow-400">
                            Proof
                        </span>
                        .
                    </div>
                    <motion.div
                        className="bg-gradient-to-r from-[var(--color-accent)] to-yellow-400 text-white rounded-xl px-6 py-4 shadow-lg mb-6 font-semibold text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        My portfolio is my degree.
                        <br />
                        My code is my certificate.
                        <br />
                        My curiosity is my teacher.
                    </motion.div>
                    <motion.ul
                        className="space-y-3 text-base text-theme-dark/90 font-medium"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <li>
                            <span className="text-2xl mr-2">⚡</span>
                            Learned everything by building, breaking, and fixing real projects.
                        </li>
                        <li>
                            <span className="text-2xl mr-2">🌍</span>
                            Grew with docs, open communities, and hands-on challenges.
                        </li>
                        <li>
                            <span className="text-2xl mr-2">🚀</span>
                            Every feature here is a badge of what I can do.
                        </li>
                        <li>
                            <span className="text-2xl mr-2">💡</span>
                            Built and maintained this portfolio from scratch using Next.js, React, and Tailwind CSS.
                        </li>
                    </motion.ul>
                    <motion.div
                        className="mt-8 text-base text-gray-700 font-semibold italic"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-white/80 border border-[var(--color-accent)] shadow">
                            Who needs paper when you have proof?{" "}
                            <span className="not-italic text-[var(--color-accent)] font-bold">
                                This site is my experience.
                            </span>
                        </span>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default CertificationsV1;
