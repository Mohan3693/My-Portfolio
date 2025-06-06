// Example: src/app/page.jsx or src/App.jsx
"use client";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Herov1";
import ProjectsSectionV3 from "@/components/Projectv3";
import ExperienceSectionV1 from "@/components/Experiencev1";
import EducationSectionV2 from "@/components/Educationv2";
import CertificationsV1 from "@/components/Certificationv1";
import ContactSectionV1 from "@/components/Contactv1";
import AboutSectionV2 from "@/components/Aboutv2";
import SkillsToolsSectionV8 from "@/components/Skillv4";

export default function HomePage() {
  return (
    <main className="bg-theme-light dark:bg-theme-dark text-theme-dark dark:text-theme-light">
      <Navbar />
      <HeroSection />
      <section className="my-20">
        <AboutSectionV2 />
      </section>
      <section className="my-20">
        <SkillsToolsSectionV8 />
      </section>
      <ProjectsSectionV3 />
      <ExperienceSectionV1 />
      <EducationSectionV2 />
      <CertificationsV1 />
      <ContactSectionV1 />
    </main>
  );
}
