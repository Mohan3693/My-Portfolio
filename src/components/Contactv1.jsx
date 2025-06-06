"use client";
import React, { useState } from "react";
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

const SOCIALS = [
  {
    href: " mailto:satishmohan3693@gmail.com ",
    label: "Email",
    icon: <FaEnvelope size={24} />,
  },
  {
    href: "https://linkedin.com/in/satish-siyadri",
    label: "LinkedIn",
    icon: <FaLinkedin size={24} />,
  },
  {
    href: "https://github.com/Mohan3693",
    label: "GitHub",
    icon: <FaGithub size={24} />,
  },
];

const fadeCard = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeSide = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const inputFocusRing = "focus:ring-2 focus:ring-red-400 focus:border-red-400";
const inputHoverBg = "hover:bg-red-50 transition-colors duration-200";

const ContactSectionV1 = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields.");
      return;
    }
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen flex items-center justify-center text-theme-dark px-2 sm:px-6 py-24"
    >
      <motion.div
        className="w-full max-w-md md:max-w-4xl mx-auto bg-white/90 backdrop-blur-lg border border-[var(--color-neutral)] rounded-3xl shadow-2xl p-8 flex flex-col md:flex-row gap-8 transition-shadow hover:shadow-[0_8px_40px_0_rgba(255,56,92,0.15)]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeCard}
      >
        {/* Form */}
        <motion.div
          className="flex-1 flex flex-col justify-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-center md:text-left mb-2 tracking-tight text-theme-dark">
            Get in Touch
          </h2>
          <p className="text-center md:text-left text-base font-semibold text-[var(--color-accent)] mb-7">
            I’d love to hear from you! Fill out the form or connect via socials.
          </p>
          <form
            action=" https://formspree.io/f/mkgbobno "
            method="POST"
            className="space-y-5"
            onSubmit={handleSubmit}
          >
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className={`w-full bg-white border border-[var(--color-neutral)] rounded-full px-5 py-3 text-theme-dark font-semibold placeholder:text-neutral-500 placeholder:font-medium focus:outline-none ${inputFocusRing} ${inputHoverBg} text-base shadow`}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className={`w-full bg-white border border-[var(--color-neutral)] rounded-full px-5 py-3 text-theme-dark font-semibold placeholder:text-neutral-500 placeholder:font-medium focus:outline-none ${inputFocusRing} ${inputHoverBg} text-base shadow`}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              className={`w-full bg-white border border-[var(--color-neutral)] rounded-2xl px-5 py-3 text-theme-dark font-semibold placeholder:text-neutral-500 placeholder:font-medium resize-none focus:outline-none ${inputFocusRing} ${inputHoverBg} text-base shadow`}
              required
            ></textarea>
            <button
              type="submit"
              className="w-full btn-primary text-base font-semibold py-3 rounded-full flex items-center justify-center gap-2"
            >
              <FaPaperPlane className="inline-block" />
              Send Message
            </button>
            {error && (
              <div className="text-red-500 text-center text-sm">{error}</div>
            )}
            {submitted && (
              <div className="flex flex-col items-center justify-center gap-2 text-green-600 text-center text-sm">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                  <circle
                    cx="12"
                    cy="12"
                    r="12"
                    fill="#22c55e"
                    opacity="0.15"
                  />
                  <path
                    d="M7 13l3 3 7-7"
                    stroke="#22c55e"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Thank you! Your message has been sent.
              </div>
            )}
          </form>
        </motion.div>
        {/* Socials/Info */}
        <motion.div
          className="hidden md:flex flex-col justify-center items-center border-l border-[var(--color-neutral)] pl-8 min-w-[220px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeSide}
        >
          <span className="block mb-4 text-lg font-bold text-theme-dark">
            Connect with me:
          </span>
          <div className="flex flex-col gap-6">
            {SOCIALS.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ scale: 1.13, color: "#e11d48" }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="hover:text-[var(--color-accent)] transition-colors duration-200 scale-100 flex items-center gap-3"
                style={{
                  color:
                    s.label === "LinkedIn"
                      ? "#0A66C2"
                      : s.label === "GitHub"
                      ? "#222"
                      : s.label === "Email"
                      ? "#EA4335"
                      : "#16a34a",
                  fontWeight: 700,
                  fontSize: 22,
                  transition: "transform 0.2s, color 0.2s",
                }}
              >
                {s.icon}
                <span className="hidden lg:inline">{s.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
        {/* Socials for mobile/tablet */}
        <motion.div
          className="md:hidden mt-8 text-center text-theme-dark text-base font-semibold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <span className="block mb-2">Connect with me:</span>
          <div className="flex justify-center gap-7 mt-1">
            {SOCIALS.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ scale: 1.18, color: "#e11d48" }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="hover:text-[var(--color-accent)] transition-colors duration-200 scale-100"
                style={{
                  color:
                    s.label === "LinkedIn"
                      ? "#0A66C2"
                      : s.label === "GitHub"
                      ? "#222"
                      : s.label === "Email"
                      ? "#EA4335"
                      : "#16a34a",
                  fontWeight: 700,
                  fontSize: 32,
                  transition: "transform 0.2s, color 0.2s",
                }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSectionV1;
