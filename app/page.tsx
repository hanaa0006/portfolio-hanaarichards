"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

const projects: { title: string; description: string; tech: string[]; link?: string }[] = [
  {
    title: "Findr Emergency Locator",
    description:
      "Full-stack emergency service locator with real-time dashboards, API integrations and interactive map systems.",
    tech: ["React", "Supabase", "MapLibre", "Figma"],
  },
  {
    title: "CertiFund Escrow Platform",
    description:
      "Secure escrow platform with admin dashboards, transaction filtering and premium UI/UX design.",
    tech: ["React", "APIs", "Figma", "UI/UX"],
  },
  {
    title: "HR Management System",
    description:
      "Responsive HR management system with employee tracking, payroll modules and analytics dashboards.",
    tech: ["Vue.js", "JavaScript", "CSS"],
  },
  {
    title: "RSQ Construction",
    description:
      "Modern construction company website with responsive design and animated UI components built for a professional online presence.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Motion"],
    link: "https://rsqconstruction.co.za",
  },
];

const skills = [
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "JavaScript",
  "Node.js",
  "Python",
  "UI/UX Design",
  "Figma",
  "MySQL",
  "Oracle SQL",
  "Supabase",
  "Vercel",
];

const contactDetails = [
  {
    icon: "📧",
    label: "Email",
    value: "richardshanaa@gmail.com",
    href: "mailto:richardshanaa@gmail.com",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+27 67 404 0090",
    href: "tel:+27674040090",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/hanaa-richards",
    href: "https://www.linkedin.com/in/hanaa-richards",
  },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#fff7fb] text-black transition-colors duration-500 dark:bg-black dark:text-white">
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-pink-200/30 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-pink-300/20 blur-[140px]" />
      </div>

      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 z-50 w-full border-b border-pink-200/20 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-black/40"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2">
            <Image
              src="/mini_hanaa.png"
              alt="Hanaa avatar"
              width={85}
              height={85}
            />
            <h1 className="text-xl font-bold tracking-wide text-pink-200 md:text-2xl">
              Hanaa Richards
            </h1>
          </div>

          <div className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#about" className="transition hover:text-pink-200">
              About
            </a>
            <a href="#skills" className="transition hover:text-pink-200">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-pink-200">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-pink-200">
              Contact
            </a>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-full bg-pink-200 px-4 py-2 text-sm font-semibold text-black transition hover:scale-105"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </motion.nav>

      {/* HERO */}
      <section className="mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28">
        <div className="flex w-full flex-col-reverse items-center gap-12 md:flex-row md:justify-between">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 text-lg font-medium text-pink-200"
            >
              Full Stack Developer & UI/UX Designer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-8 text-5xl font-bold leading-tight md:text-7xl"
            >
              Building{" "}
              <span className="bg-gradient-to-r from-pink-200 to-pink-300 bg-clip-text text-transparent">
                elegant{" "}
              </span>
              digital experiences.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-10 max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-300 md:text-xl"
            >
              Passionate about creating modern, responsive and visually
              engaging web applications with smooth user experiences and
              premium interface design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-5"
            >
              <button
                onClick={() => scrollTo("projects")}
                className="rounded-2xl bg-pink-200 px-8 py-4 font-semibold text-black transition hover:scale-105"
              >
                View Projects
              </button>

              <button
                onClick={() => scrollTo("contact")}
                className="rounded-2xl border border-pink-200/30 px-8 py-4 font-semibold transition hover:bg-pink-200/10"
              >
                Contact Me
              </button>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex-shrink-0"
          >
            <div className="relative h-64 w-64 md:h-80 md:w-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-200/40 to-pink-300/20 blur-2xl" />
              <Image
                src="/profile.png.jpg"
                alt="Hanaa Richards"
                fill
                className="rounded-full object-cover border-2 border-pink-200/30"
                style={{ objectPosition: "center 20%" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto max-w-7xl border-t border-pink-200/10 px-6 py-28"
      >
        <div className="grid items-center gap-20 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-8 text-4xl font-bold text-pink-200 md:text-5xl">
              About Me
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              Diligent and driven full-stack developer with a strong
              foundation in modern web technologies and a passion for
              creating clean, responsive digital experiences.
            </p>

            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              Experienced in React, Next.js, UI/UX design, dashboards,
              APIs and building modern interactive applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[40px] border border-pink-200/10 bg-pink-100/10 p-10 backdrop-blur-xl dark:bg-white/5"
          >
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="mb-2 text-4xl font-bold text-pink-200">1+</h3>
                <p className="text-gray-600 dark:text-gray-300">Years Experience</p>
              </div>
              <div>
                <h3 className="mb-2 text-4xl font-bold text-pink-200">6+</h3>
                <p className="text-gray-600 dark:text-gray-300">Projects Built</p>
              </div>
              <div>
                <h3 className="mb-2 text-4xl font-bold text-pink-200">15+</h3>
                <p className="text-gray-600 dark:text-gray-300">Certificates</p>
              </div>
              <div>
                <h3 className="mb-2 text-4xl font-bold text-pink-200">100%</h3>
                <p className="text-gray-600 dark:text-gray-300">Passion Driven</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="mx-auto max-w-7xl border-t border-pink-200/10 px-6 py-28"
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-4xl font-bold text-pink-200 md:text-5xl"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="rounded-3xl border border-pink-200/10 bg-pink-100/10 p-6 backdrop-blur-xl dark:bg-white/5"
            >
              <p className="text-center text-lg font-medium">{skill}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="mx-auto max-w-7xl border-t border-pink-200/10 px-6 py-28"
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-4xl font-bold text-pink-200 md:text-5xl"
        >
          Featured Projects
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={project.link ? { y: -10 } : {}}
              className="overflow-hidden rounded-[32px] border border-pink-200/10 bg-pink-100/10 backdrop-blur-xl dark:bg-white/5 flex flex-col justify-between"
            >
              <div>
                <div className="h-60 bg-gradient-to-br from-pink-200/30 to-pink-300/20" />

                <div className="p-8">
                  <h3 className="mb-4 text-3xl font-bold">{project.title}</h3>

                  <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-pink-200/20 px-4 py-2 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Only render action elements if a project link explicitly exists */}
              {project.link && (
                <div className="px-8 pb-8">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block font-medium text-pink-200 transition hover:text-pink-100"
                  >
                    View Project →
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="mx-auto max-w-7xl border-t border-pink-200/10 px-6 py-28"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-8 text-4xl font-bold text-pink-200 md:text-5xl">
            Let's build something amazing.
          </h2>

          <p className="mb-14 max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-300 md:text-xl">
            I'm always interested in new opportunities,
            collaborations and innovative projects.
          </p>

          {/* Contact Detail Cards */}
          <div className="mb-12 grid gap-5 sm:grid-cols-3">
            {contactDetails.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.label === "LinkedIn" ? "_blank" : undefined}
                rel={item.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="flex flex-col gap-3 rounded-[28px] border border-pink-200/10 bg-pink-100/10 p-7 backdrop-blur-xl transition dark:bg-white/5 hover:border-pink-200/30"
              >
                <span className="text-3xl">{item.icon}</span>
                <p className="text-sm font-medium text-pink-200">{item.label}</p>
                <p className="break-all text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {item.value}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-pink-200/10 py-10 text-center text-gray-500">
        © 2026 Hanaa Richards. All rights reserved.
      </footer>
    </main>
  );
}