"use client";
import React from "react";

const educationData = [
	{
		title: "Bachelor of Technology in Computer Science and Engineering",
		institution:
			"Sai Ganapathi Engineering College, Visakhapatnam, Andhra Pradesh",
		year: "2021 – 2025",
		description: "CGPA: 7.91",
	},
	{
		title: "Board of Intermediate Education",
		institution: "MEGA Junior College, Rajahmundry, Andhra Pradesh",
		year: "2019 – 2021",
		description: "Marks: 750",
	},
];

export default function EducationSectionV2() {
	return (
		<section
			id="education"
			className="w-full min-h-[40vh] px-2 sm:px-8 py-16 flex items-center justify-center"
		>
			<div className="w-full max-w-3xl mx-auto card-glass p-8">
				<h2 className="text-3xl font-bold text-center mb-10">
					Education
				</h2>
				<div className="flex flex-col gap-8">
					{educationData.map((edu, idx) => (
						<div
							key={idx}
							className="bg-[var(--color-primary)] card-glass rounded-xl shadow-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between transition-all duration-300 hover:shadow-[0_8px_40px_0_rgba(255,56,92,0.15)] hover:bg-red-100 hover:scale-[1.025]"
						>
							<div>
								<h3 className="text-xl font-semibold text-[var(--color-accent)] mb-1">
									{edu.title}
								</h3>
								<p className="font-medium mb-1">
									{edu.institution}
								</p>
								<p className="text-sm text-gray-400 mb-2">
									{edu.year}
								</p>
								<p>{edu.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
