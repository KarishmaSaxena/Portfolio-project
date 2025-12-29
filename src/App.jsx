import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ExternalLink, Menu, X, Download, MapPin } from "lucide-react";
import "./App.css";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ["home", "skills", "projects", "experience", "education"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  };

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
      items: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Redux"]
    },
    {
      category: "UI Frameworks",
      items: ["Flowbite", "Bootstrap", "Responsive Design", "Tailwind CSS"]
    },
    {
      category: "Tools & Others",
      items: ["Git", "GitHub", "Postman", "REST APIs", "UI Optimization"]
    }
  ];

  const projects = [
    {
      title: "Discover Bangalore",
      image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80",
      description: "Tourism exploration platform with modern UI and responsive layouts. Features interactive maps and detailed location guides.",
      technologies: ["React", "CSS3", "Responsive Design"],
      link: "https://dicoverbanglorewebsite.vercel.app/",
      github: "#"
    },
    {
      title: "Axiom Pro Clone",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      description: "Pixel-perfect clone of Axiom Trade Pulse with token tables, modals, and filters. Implemented complex data visualization.",
      technologies: ["React", "JavaScript", "UI Components"],
      link: "https://axiom-pro-clone.vercel.app/",
      github: "#"
    },
    {
      title: "Library Management System",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80",
      description: "Deployed library system with CRUD operations and role-based views. Features book tracking and user management.",
      technologies: ["React", "REST APIs", "State Management"],
      link: "https://library-management-jljkq17xa-karishmasaxenas-projects.vercel.app",
      github: "#"
    }
  ];

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Lineaje (via Codebig Pvt. Ltd.)",
      period: "2023",
      location: "Consulting",
      responsibilities: [
        "Worked on frontend and backend modules for enterprise security products",
        "Collaborated in consulting-based enterprise environment",
        "Implemented security features for software supply chain"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Ravana Logistics & Technologies Pvt. Ltd.",
      period: "Jan 2025 – Nov 2025",
      location: "Remote",
      responsibilities: [
        "Built scalable React dashboards with filters, pagination, and role-based views",
        "Integrated REST APIs and optimized UI performance for better user experience",
        "Collaborated with backend team to ensure seamless data flow",
        "Developed CheckMyTransport: A transport verification platform with role-based dashboards, transporter verification, reviews, and blacklist management using React.js and Django REST APIs",
        "Worked on Legals Log: AI-powered legal workflow interfaces with complex form validations and user interactions"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Legals Log Technologies",
      period: "Jan 2024 – Aug 2024",
      location: "Remote",
      responsibilities: [
        "Developed AI-powered legal workflow interfaces with modern design",
        "Improved accessibility and responsive design across all platforms",
        "Implemented complex form validations and user interactions"
      ]
    }
  ];

  const education = [
    {
      degree: "B.Tech – Computer Science & Engineering",
      institution: "Teerthanker Mahaveer University",
      year: "2025",
      grade: "CGPA: 8.3"
    },
    {
      degree: "Senior Secondary (Class XII)",
      institution: "DON & Donna Convent School, Shahjahanpur",
      year: "2020",
      grade: "CGPA: 6.5"
    },
    {
      degree: "Secondary (Class X)",
      institution: "DON & Donna Convent School, Shahjahanpur",
      year: "2018",
      grade: "CGPA: 7.2"
    }
  ];

  return (
    <div className="portfolio-container">
      {/* Header */}
      <motion.header 
        className={`header ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="header-content">
          <motion.h1 
            className="logo"
            whileHover={{ scale: 1.05 }}
          >
            Karishma Saxena
          </motion.h1>
          
          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <a 
            href="/resume.pdf" 
            download
            className="btn-primary desktop-only"
          >
            <Download size={18} />
            Resume
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="nav-mobile"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link-mobile ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              ))}
              <a 
                href="/resume.pdf" 
                download
                className="btn-primary-mobile"
              >
                <Download size={18} />
                Download Resume
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="greeting"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I'm
            </motion.div>
            <h1 className="hero-title">Karishma Saxena</h1>
            <h2 className="hero-subtitle">Frontend Developer (React)</h2>
            <p className="hero-description">
              Frontend Developer with hands-on experience in building scalable, responsive, 
              and user-centric web applications using React and JavaScript. Strong focus on 
              performance, usability, clean UI, and enterprise-grade frontend solutions.
            </p>
            <div className="hero-actions">
              <a href="mailto:saxenakarishma13@gmail.com" className="btn-primary">
                <Mail size={20} />
                Get In Touch
              </a>
              <a href="tel:+917522896206" className="btn-secondary">
                <Phone size={20} />
                +91 7522896206
              </a>
            </div>
            <div className="hero-location">
              <MapPin size={16} />
              <span>Available for Remote Opportunities</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Skills & Expertise</h2>
            <p className="section-subtitle">Technologies and tools I work with</p>
          </motion.div>
          
          <div className="skills-grid">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                className="skill-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="skill-category">{skillGroup.category}</h3>
                <div className="skill-items">
                  {skillGroup.items.map((skill, idx) => (
                    <span key={idx} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">Some of my recent work</p>
          </motion.div>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                        <ExternalLink size={20} />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Work Experience</h2>
            <p className="section-subtitle">My professional journey</p>
          </motion.div>
          
          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="experience-card"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="experience-header">
                  <div>
                    <h3 className="experience-title">{exp.title}</h3>
                    <h4 className="experience-company">{exp.company}</h4>
                  </div>
                  <div className="experience-meta">
                    <span className="experience-period">{exp.period}</span>
                    <span className="experience-location">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>
                </div>
                <ul className="experience-responsibilities">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Education</h2>
            <p className="section-subtitle">Academic background</p>
          </motion.div>
          
          <div className="education-grid">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="education-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="education-degree">{edu.degree}</h3>
                <h4 className="education-institution">{edu.institution}</h4>
                <div className="education-meta">
                  <span className="education-year">{edu.year}</span>
                  <span className="education-grade">{edu.grade}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <h3 className="footer-name">Karishma Saxena</h3>
              <p className="footer-tagline">Frontend Developer | React Specialist</p>
            </div>
            
            <div className="footer-links">
              <a href="mailto:saxenakarishma13@gmail.com" className="footer-link" aria-label="Email">
                <Mail size={20} />
              </a>
              <a href="tel:+917522896206" className="footer-link" aria-label="Phone">
                <Phone size={20} />
              </a>
              <a href="https://www.linkedin.com/in/karishma-saxena" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/karishmasaxena" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2025 Karishma Saxena. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
