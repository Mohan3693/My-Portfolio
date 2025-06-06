"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaInfinity } from "react-icons/fa6"; // Optional: use an icon library for infinity

const navLinks = [
	{ label: "Home", href: "#hero" },
	{ label: "Profile", href: "#about" },
	{ label: "Skills", href: "#skills" },
	{ label: "MyWork", href: "#projects" },
	{ label: "Experience", href: "#experience" },
	{ label: "Education", href: "#education" },
	{ label: "Certifications", href: "#certifications" },
	{ label: "Contact", href: "#contact" },
];

export default function Navbar() {
	const [active, setActive] = useState(navLinks[0].href);
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [showNav, setShowNav] = useState(true);
	const linkRefs = useRef([]);
	const lastScrollY = useRef(0);

	// Observe sections and update active nav
	useEffect(() => {
		const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
		const sections = sectionIds.map((id) => document.getElementById(id));
		const handler = () => {
			const scrollY = window.scrollY + 120; // adjust for navbar height
			let current = navLinks[0].href;
			sections.forEach((section, idx) => {
				if (section && section.offsetTop <= scrollY) {
					current = navLinks[idx].href;
				}
			});
			setActive(current);
		};
		window.addEventListener("scroll", handler, { passive: true });
		handler();
		return () => window.removeEventListener("scroll", handler);
	}, []);

	// Scroll nav link into view when active changes
	useEffect(() => {
		const idx = navLinks.findIndex((l) => l.href === active);
		if (linkRefs.current[idx]) {
			linkRefs.current[idx].scrollIntoView({
				behavior: "smooth",
				inline: "center",
				block: "nearest",
			});
		}
	}, [active]);

	// Close mobile menu on navigation
	const handleNavClick = (href) => {
		setActive(href);
		setOpen(false);
	};

	// Show/hide navbar on scroll direction
	useEffect(() => {
		let ticking = false;
		const handleScroll = () => {
			const currentY = window.scrollY;
			setScrolled(currentY > 10);

			// Always show navbar at hero section (top of page)
			if (currentY <= 40) {
				setShowNav(true);
				lastScrollY.current = currentY;
				return;
			}

			if (!ticking) {
				window.requestAnimationFrame(() => {
					if (currentY > lastScrollY.current + 4) {
						// Scrolling down
						setShowNav(true);
					} else if (currentY < lastScrollY.current - 4) {
						// Scrolling up
						setShowNav(false);
					}
					lastScrollY.current = currentY;
					ticking = false;
				});
				ticking = true;
			}

			if (open) setOpen(false); // Close mobile menu on scroll
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [open]);

	// Hide menu when clicking outside
	useEffect(() => {
		if (!open) return;
		const handleClick = (e) => {
			const menu = document.getElementById("mobile-nav-menu");
			if (menu && !menu.contains(e.target)) {
				setOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClick);
		return () => document.removeEventListener("mousedown", handleClick);
	}, [open]);

	return (
		<nav
			className={`fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[92vw] max-w-4xl rounded-full transition-shadow transition-transform duration-500 ease-[cubic-bezier(.4,1.4,.6,1)] shadow-md px-3 flex items-center justify-between border border-neutral-200 h-12
                ${scrolled ? "bg-white/60 backdrop-blur-xl" : "bg-white/80 backdrop-blur-2xl"}
                ${scrolled ? "shadow-lg" : "shadow-md"}
                ${showNav ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-24 opacity-0 pointer-events-none"}
            `}
			style={{
				backdropFilter: scrolled ? "blur(20px)" : "blur(15px)",
				border: "1px solid #e5e7eb",
			}}
		>
			{/* Logo/Brand */}
			<a
				href="#hero"
				className="flex items-center gap-2 font-bold text-lg text-[var(--color-accent)] select-none tracking-tight pl-2"
				aria-label="Home"
			>
				{/* Infinity symbol only, perfectly centered */}
				<span className="inline-flex items-center justify-center w-6 h-6 text-[var(--color-accent)] align-middle">
					<svg viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
						<path
							d="M2 10c0-4.418 3.582-8 8-8 3.314 0 6.156 2.01 8 6 1.844-3.99 4.686-6 8-6 4.418 0 8 3.582 8 8s-3.582 8-8 8c-3.314 0-6.156-2.01-8-6-1.844 3.99-4.686 6-8 6-4.418 0-8-3.582-8-8z"
							stroke="currentColor"
							strokeWidth="2"
							fill="none"
						/>
					</svg>
				</span>
			</a>

			{/* Desktop Nav */}
			<ul
				className="hidden md:flex gap-2 items-center h-full overflow-x-auto scrollbar-thin scrollbar-thumb-[var(--color-accent)] scrollbar-track-transparent"
				style={{
					scrollbarColor: "var(--color-accent) transparent",
					scrollbarWidth: "thin",
				}}
			>
				{navLinks.map((link, i) => (
					<li key={link.href} className="h-full flex items-center relative">
						<a
							ref={(el) => (linkRefs.current[i] = el)}
							href={link.href}
							className={`px-3 py-1 rounded-full text-neutral-700 text-sm font-medium transition-all duration-200
                ${
									active === link.href
										? "bg-[var(--color-accent)]/15 text-[var(--color-accent)] shadow font-bold scale-105"
										: "hover:bg-[var(--color-accent)]/10 hover:text-[var(--color-accent)]"
								}
          `}
							onClick={() => handleNavClick(link.href)}
							aria-current={active === link.href ? "page" : undefined}
							tabIndex={0}
						>
							{link.label}
							{/* Animated active dot */}
							{active === link.href && (
								<span className="block mx-auto mt-1 h-1 w-2 rounded-full bg-[var(--color-accent)] transition-all duration-300"></span>
							)}
						</a>
					</li>
				))}
			</ul>

			{/* Mobile Hamburger */}
			<button
				className="md:hidden flex items-center justify-center text-xl text-[var(--color-accent)] focus:outline-none pr-2"
				onClick={() => setOpen((o) => !o)}
				aria-label="Toggle navigation"
			>
				<FaBars />
			</button>

			{/* Mobile Nav Dropdown */}
			{open && (
				<div className="fixed inset-0 z-50 flex items-start justify-center" style={{ pointerEvents: "auto" }}>
					<ul
						id="mobile-nav-menu"
						className="md:hidden absolute top-16 left-1/2 -translate-x-1/2 w-[92vw] max-w-xs bg-white/95 rounded-2xl shadow-2xl border border-neutral-200 flex flex-col items-center py-3 z-50 animate-slide-fade-in"
					>
						{navLinks.map((link, i) => (
							<li key={link.href} className="w-full">
								<a
									href={link.href}
									className={`block w-full px-3 py-2 rounded-full text-center text-base font-medium transition-colors duration-200
                ${
										active === link.href
											? "bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-bold"
											: "hover:bg-[var(--color-accent)]/10 hover:text-[var(--color-accent)]"
									}
              `}
									onClick={() => handleNavClick(link.href)}
									aria-current={active === link.href ? "page" : undefined}
									tabIndex={0}
								>
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</div>
			)}
			<style jsx global>{`
        nav ul {
          /* Hide vertical scrollbar for all browsers */
          scrollbar-width: thin;
          scrollbar-color: var(--color-accent) transparent;
        }
        nav ul::-webkit-scrollbar {
          height: 6px;
          width: 0px;
          background: transparent;
        }
        nav ul::-webkit-scrollbar-thumb {
          background: var(--color-accent);
          border-radius: 6px;
        }
        nav ul::-webkit-scrollbar-track {
          background: transparent;
        }
        nav ul {
          overflow-y: hidden !important;
        }
        @keyframes slide-fade-in {
          from { opacity: 0; transform: translateY(-32px) scale(0.98);}
          to { opacity: 1; transform: translateY(0) scale(1);}
        }
        .animate-slide-fade-in {
          animation: slide-fade-in 0.45s cubic-bezier(.4,1.4,.6,1) both;
        }
      `}</style>
		</nav>
	);
}