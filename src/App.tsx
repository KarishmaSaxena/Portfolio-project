

import {
  Braces,
  Code2,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Terminal,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
];

const skills = [
  {
    category: "Frontend Technologies",
    items: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Redux"],
  },
  {
    category: "UI Frameworks & Styling",
    items: ["Tailwind CSS", "Bootstrap", "Flowbite", "Responsive Design"],
  },
  {
    category: "Backend Technologies",
    items: ["Django", "Django REST Framework", "Node.js", "Spring Boot"],
  },
  { category: "Databases", items: ["MySQL", "MongoDB"] },
  {
    category: "API & Integration",
    items: ["REST API Development", "API Integration", "Postman"],
  },
  {
    category: "Tools & Others",
    items: ["Git", "GitHub", "UI Optimization", "Debugging & Performance"],
  },
  {
    category: "Additional Knowledge",
    items: [
      "ML Concepts",
      "NLP Techniques",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Jupyter/Colab",
    ],
  },
];

const projects = [
  {
    title: "Discover Bangalore",
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80",
    description:
      "Tourism exploration platform with modern UI and responsive layouts. Features interactive maps and detailed location guides.",
    technologies: ["React", "CSS3", "Responsive Design"],
    link: "https://dicoverbanglorewebsite.vercel.app/explore",
  },
  {
    title: "Stock Portfolio Management",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    description:
      "Rule-based algorithms to identify long-term investment opportunities using historical market data and automated third-party API tracking.",
    technologies: ["Python", "Pandas", "Scikit-Learn"],
    link: "https://axiom-pro-clone.vercel.app/",
  },
  {
    title: "Sentiment Analysis (RoBERTa)",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    description:
      "Sentiment analysis system using VADER and RoBERTa on Amazon reviews to classify and compare customer insights.",
    technologies: ["Python", "RoBERTa", "VADER"],
    link: "#",
  },
  {
    title: "Flower Shop Website",
    image:
      "image.png",
    description:
      "Responsive multi-page website with clean navigation and polished UI built in a timed assessment.",
    technologies: ["Next.js", "Responsive Design"],
    link: "https://nextdev-flower-shop-mt0aiqxvj-karishmasaxenas-projects.vercel.app/",
  },
  {
    title: "Engineer Vetting Pipeline",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    description:
      "Multi-stage candidate evaluation system with scoring, ranking, and role matching. Achieved 85% test accuracy.",
    technologies: ["Full Stack", "Scoring System"],
    link: "https://frontend-nine-theta-72.vercel.app/",
  },
];

const experiences = [
  {
    title: "Software Developer",
    company: "Ravana Logistics & Technologies Pvt. Ltd.",
    period: "May 2025 – Feb 2026",
    location: "Bangalore, India",
    responsibilities: [
      "Developed backend services with Java, Node.js, and PostgreSQL for processing vulnerability data.",
      "Implemented rule-based logic using ANTLR to automate CVE classification, saving ~25% manual effort.",
      "Designed Neo4j graph structures to model dependencies for 500+ software packages.",
      "Created React dashboards using Tailwind CSS for vulnerability catalog visualization.",
    ],
  },
  {
    title: "Software Developer",
    company: "Ridensta Tours & Travels Pvt. Ltd.",
    period: "Aug 2024 – Feb 2025",
    location: "Remote",
    responsibilities: [
      "Developed a React-based booking management platform for transport services.",
      "Implemented state management using Context API to handle booking flows and user data.",
      "Integrated Django REST APIs to manage trip transactions and user workflows.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Legals Log Technologies",
    period: "Jan 2024 – Aug 2024",
    location: "Noida, India",
    responsibilities: [
      "Developed React web application for AI-powered legal assistance platform.",
      "Integrated e-court systems with secure APIs for real-time data synchronization.",
      "Built responsive web applications using HTML, CSS, and JavaScript.",
      "Collaborated with designers and conducted cross-browser compatibility testing.",
    ],
  },
];

const education = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    institution: "Teerthanker Mahaveer University",
    year: "January 2025",
    grade: "GPA: 8.3",
  },
  {
    degree: "Senior Secondary (XII)",
    institution: "Don & Donna Convent School",
    year: "",
    grade: "GPA: 7.2",
  },
  {
    degree: "Secondary (X)",
    institution: "Don & Donna Convent School",
    year: "",
    grade: "GPA: 6.8",
  },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = [
        "home",
        "skills",
        "projects",
        "experience",
        "education",
      ];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[oklch(0.11_0.015_240)] to-[oklch(0.13_0.018_240)] text-foreground font-sans">
      {/* Sticky Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 transition-all duration-300"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className={`w-full max-w-5xl flex items-center justify-between px-6 py-3 rounded-2xl border border-border transition-all duration-300 ${scrolled
            ? "bg-[oklch(0.14_0.018_240/0.85)] backdrop-blur-xl shadow-lg"
            : "bg-[oklch(0.14_0.018_240/0.6)] backdrop-blur-md"
            }`}
        >
          {/* Logo */}
          <motion.span
            className="text-base font-bold tracking-widest text-foreground uppercase cursor-pointer select-none"
            whileHover={{ scale: 1.03 }}
            onClick={() => scrollToSection("home")}
          >
            Karishma Saxena
          </motion.span>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-base font-medium rounded-xl transition-colors duration-200 ${activeSection === item.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0.5 left-4 right-4 h-0.5 rounded-full bg-primary"
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Download Resume — desktop */}
          <a
            href="#"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl text-base font-medium bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-colors duration-200"
          >
            <Download size={17} />
            Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-[calc(100%+4px)] left-4 right-4 bg-[oklch(0.14_0.018_240/0.95)] backdrop-blur-xl border border-border rounded-2xl p-4 flex flex-col gap-2"
            >
              {navItems.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-4 py-3 rounded-xl text-base font-medium transition-colors duration-200 ${activeSection === item.id
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                    }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="#"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-base font-semibold bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 mt-1 transition-colors"
              >
                <Download size={18} />
                Download Resume
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ── HERO ── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
      >
        {/* Decorative blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-primary/8 blur-[100px] pointer-events-none" />

        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              className="text-primary text-sm font-semibold tracking-widest uppercase mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Hello, I&apos;m
            </motion.p>
            <h1 className="text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
              <span className="text-primary">Karishma</span>{" "}
              <span className="text-foreground">Saxena</span>
            </h1>
            <h2 className="text-2xl font-semibold text-muted-foreground mb-6 tracking-wide">
              Full Stack Developer
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base max-w-md mb-8">
              Software Developer with 1+ year of professional experience
              building scalable, production-ready web applications using
              React.js and JavaScript. Strong expertise in REST API integration,
              state management, and responsive UI development.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href="mailto:saxenakarishma13@gmail.com"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-base shadow-glow-blue"
              >
                <Mail size={19} />
                Get In Touch
              </a>
              <a
                href="tel:+917522896206"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-secondary text-foreground border border-border hover:bg-secondary/80 transition-colors text-base"
              >
                <Phone size={19} />
                +91 75228 96206
              </a>
            </div>
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={16} className="text-primary" />
              Available for Remote Opportunities
            </p>
          </motion.div>

          {/* Right — decorative code card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="bg-card border border-border rounded-2xl p-6 shadow-glow-blue">
                {/* Window chrome */}
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-3 text-xs text-muted-foreground font-mono">
                    portfolio.tsx
                  </span>
                </div>
                {/* Fake code lines */}
                <div className="font-mono text-sm space-y-2 text-muted-foreground">
                  <div>
                    <span className="text-primary">const</span>{" "}
                    <span className="text-foreground">developer</span>
                    {" = {"}
                  </div>
                  <div className="pl-4">
                    <span className="text-primary/80">name</span>:{" "}
                    <span className="text-green-400/80">
                      &quot;Karishma Saxena&quot;
                    </span>
                    ,
                  </div>
                  <div className="pl-4">
                    <span className="text-primary/80">role</span>:{" "}
                    <span className="text-green-400/80">
                      &quot;Full Stack Developer&quot;
                    </span>
                    ,
                  </div>
                  <div className="pl-4">
                    <span className="text-primary/80">experience</span>:{" "}
                    <span className="text-yellow-400/80">
                      &quot;1+ year&quot;
                    </span>
                    ,
                  </div>
                  <div className="pl-4">
                    <span className="text-primary/80">stack</span>: [
                  </div>
                  <div className="pl-8">
                    <span className="text-green-400/80">
                      &quot;React.js&quot;
                    </span>
                    ,{" "}
                    <span className="text-green-400/80">
                      &quot;Django&quot;
                    </span>
                    ,
                  </div>
                  <div className="pl-8">
                    <span className="text-green-400/80">
                      &quot;Node.js&quot;
                    </span>
                    ,{" "}
                    <span className="text-green-400/80">&quot;Java&quot;</span>,
                  </div>
                  <div className="pl-4">],</div>
                  <div className="pl-4">
                    <span className="text-primary/80">available</span>:{" "}
                    <span className="text-blue-400/80">true</span>,
                  </div>
                  <div>{"};"}</div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["React", "Django", "Node.js", "PostgreSQL", "Neo4j"].map(
                    (t) => (
                      <span
                        key={t}
                        className="text-sm px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {t}
                      </span>
                    ),
                  )}
                </div>
              </div>
              {/* Floating icons */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 p-3 bg-card border border-border rounded-xl"
              >
                <Code2 size={22} className="text-primary" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -bottom-4 -left-4 p-3 bg-card border border-border rounded-xl"
              >
                <Terminal size={22} className="text-primary" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute top-1/2 -right-6 p-3 bg-card border border-border rounded-xl"
              >
                <Braces size={20} className="text-primary" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="py-20 bg-[oklch(0.13_0.016_240)]">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="text-5xl font-bold text-foreground mb-3">
              Skills &amp; Expertise
            </h2>
            <p className="text-lg text-muted-foreground">
              Technologies and tools I work with
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {skills.map((group, index) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                whileHover={{ y: -4 }}
                className="bg-card border border-border rounded-2xl p-5"
              >
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-base px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-20">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="text-5xl font-bold text-foreground mb-3">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              Some of my recent work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group bg-card border border-border rounded-2xl overflow-hidden"
              >
                <div className="relative overflow-hidden h-44">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[oklch(0.1_0.015_240/0.7)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm px-2 py-0.5 rounded-full bg-secondary text-muted-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="py-20 bg-[oklch(0.13_0.016_240)]">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="text-5xl font-bold text-foreground mb-3">
              Work Experience
            </h2>
            <p className="text-lg text-muted-foreground">
              My professional journey
            </p>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6 pl-0"
                >
                  {/* Node */}
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-card border-2 border-primary flex items-center justify-center text-primary font-bold text-base">
                      {index + 1}
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-card border border-border rounded-2xl p-5 mb-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-primary font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-right text-base text-muted-foreground space-y-0.5 flex-shrink-0">
                        <p>{exp.period}</p>
                        <p className="flex items-center justify-end gap-1">
                          <MapPin size={11} />
                          {exp.location}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-1.5">
                      {exp.responsibilities.map((r) => (
                        <li
                          key={r}
                          className="flex items-start gap-2 text-base text-muted-foreground"
                        >
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section id="education" className="py-20">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="text-5xl font-bold text-foreground mb-3">
              Education
            </h2>
            <p className="text-lg text-muted-foreground">Academic background</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-card border border-border rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-foreground mb-2 leading-snug">
                  {edu.degree}
                </h3>
                <p className="text-base text-primary font-medium mb-3">
                  {edu.institution}
                </p>
                <div className="flex items-center justify-between text-base text-muted-foreground">
                  {edu.year && <span>{edu.year}</span>}
                  <span className="ml-auto font-semibold text-foreground/80">
                    {edu.grade}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-12 bg-[oklch(0.12_0.016_240)] border-t border-border">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-2">
            Let&apos;s Connect
          </h3>
          <p className="text-base text-muted-foreground mb-6">
            Open for new opportunities
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <a
              href="mailto:saxenakarishma13@gmail.com"
              className="p-4 rounded-xl bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="tel:+917522896206"
              className="p-4 rounded-xl bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              aria-label="Phone"
            >
              <Phone size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/karishma-saxena-a49134261/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/KarishmaSaxenal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              className="p-4 rounded-xl bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              aria-label="Download Resume"
            >
              <Download size={24} />
            </a>
          </div>

          <div className="space-y-1 text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Karishma Saxena. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
