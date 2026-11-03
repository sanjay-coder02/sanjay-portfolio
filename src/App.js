import React, { useState } from "react";
import "./App.css";

import profile from "./assets/sanjay.jpg";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaExternalLinkAlt,
  FaDownload,
  FaBars,
  FaTimes,
  FaArrowRight,
  FaJava,
} from "react-icons/fa";

// ======================================
// TECHNICAL SKILLS
// ======================================

const skills = [
  { name: "Java", category: "Programming", icon: <FaJava /> },
  { name: "JavaScript", category: "Programming", icon: <FaCode /> },
  { name: "Spring Boot", category: "Backend", icon: <FaLaptopCode /> },
  { name: "Spring Data JPA", category: "Backend", icon: <FaLaptopCode /> },
  { name: "REST APIs", category: "Backend", icon: <FaCode /> },
  { name: "JDBC", category: "Backend", icon: <FaDatabase /> },
  { name: "MySQL", category: "Database", icon: <FaDatabase /> },
  { name: "React.js", category: "Frontend", icon: <FaCode /> },
  { name: "HTML", category: "Frontend", icon: <FaCode /> },
  { name: "CSS", category: "Frontend", icon: <FaCode /> },
  { name: "Bootstrap", category: "Frontend", icon: <FaLaptopCode /> },
  { name: "Git & GitHub", category: "Tools", icon: <FaGithub /> },
];

// ======================================
// PROJECT DETAILS
// ======================================
// ======================================
// PROJECT DETAILS
// ======================================

const projects = [
  {
    number: "01",
    name: "CareBridge",
    subtitle: "Hospital Management System",

    description:
      "Developed a hospital management application with separate patient and administrative interfaces. Implemented backend operations using Spring Boot and Spring Data JPA, with MySQL for managing application data.",

    features: [
      "Developed separate interfaces for patients and administrators.",
      "Implemented patient and doctor management.",
      "Added doctor appointment booking and cancellation.",
      "Enabled appointment status tracking.",
      "Provided access to consultation reports.",
      "Developed REST APIs using Spring Boot and connected them with MySQL.",
    ],

    technologies: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "MySQL",
      "React.js",
    ],

    live: "https://carebridge-hospital-murex.vercel.app/",
    github: "https://github.com/sanjay-coder02/carebridge-hospital",
  },

  {
    number: "02",
    name: "Royal Roam",
    subtitle: "Tourism Website",

    description:
      "Developed a responsive tourism website featuring 24 domestic and international destinations with travel packages and booking functionality.",

    features: [
      "Developed a responsive website featuring 24 travel destinations.",
      "Displayed domestic and international destinations with details.",
      "Implemented destination-based package selection.",
      "Added dynamic package pricing and cost calculation.",
      "Developed booking forms with input validation.",
      "Implemented booking confirmation functionality.",
    ],

    technologies: [
      "React.js",
      "JavaScript",
      "React Router",
      "React Bootstrap",
      "CSS",
    ],

    live: "https://royal-roam.vercel.app/",
    github: "https://github.com/sanjay-coder02/royal-roam",
  },

  {
    number: "03",
    name: "Sports Freak",
    subtitle: "Sports Shop Website",

    description:
      "Built a responsive sports shopping website for individual and team sports, featuring product categories, product details and shopping functionality.",

    features: [
      "Designed categories for individual and team sports.",
      "Displayed sports products with individual details.",
      "Implemented interactive product image switching.",
      "Added product quantity selection.",
      "Created Buy and Checkout pages.",
      "Implemented form validation.",
    ],

    technologies: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
    ],

    live: "https://sports-freak.vercel.app/",
    github: "https://github.com/sanjay-coder02/Sports-Freak-Website",
  },
];

// ======================================
// EDUCATION DETAILS
// ======================================

const education = [
  {
    period: "2021 – 2025",
    degree: "Bachelor of Engineering",
    branch: "Computer Science and Engineering",
    institution: "Jerusalem College of Engineering",
    score: "CGPA: 6.75",
  },

  {
    period: "2020 – 2021",
    degree: "Higher Secondary Education",
    branch: "12th Grade",
    institution: "Fatima Matriculation Hr. Sec. School",
    score: "69%",
  },
];

// ======================================
// MAIN APP COMPONENT
// ======================================

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Education",
    "Contact",
  ];

  return (
    <div className="portfolio">

      {/* =================================
          NAVBAR
      ================================= */}

      <nav className="navbar">

        <div className="container navbar-container">

          <a
            href="#home"
            className="logo"
            onClick={closeMenu}
          >
            SANJAY<span>.</span>
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

            {navLinks.map((link) => (

              <li key={link}>

                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={closeMenu}
                >
                  {link}
                </a>

              </li>

            ))}

          </ul>

        </div>

      </nav>

      {/* =================================
          HOME SECTION
      ================================= */}

      <section id="home" className="hero-section">

        <div className="container hero-container">

          <div className="hero-content">

            <p className="section-subtitle">
              HELLO, WELCOME TO MY PORTFOLIO
            </p>

            <h1>
              I'm <span>Sanjay M</span>
            </h1>

            <h2>Java Full Stack Developer</h2>

            <p className="hero-description">
              A passionate Computer Science graduate with
              hands-on project experience in Java, Spring Boot,
              REST APIs, MySQL and React.js. Interested in
              building efficient backend applications and
              responsive web interfaces.
            </p>

            <div className="hero-buttons">

              <a href="#projects" className="btn-primary">
                Explore My Work <FaArrowRight />
              </a>

              <a
                href="/Sanjay_M_Resume.pdf"
                className="btn-outline"
                download
              >
                Download Resume <FaDownload />
              </a>

            </div>

            <div className="social-links">

              <a
                href="https://github.com/sanjay-coder02"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/sanjay-m-021215s/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:sanjayin440@gmail.com"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

          <div className="hero-image-container">

            <div className="image-circle">

              <img
                src={profile}
                alt="Sanjay M"
              />

            </div>

            <div className="floating-badge">
              <FaCode /> Java Developer
            </div>

          </div>

        </div>

      </section>

      {/* =================================
          ABOUT SECTION
      ================================= */}

      <section id="about" className="section about-section">

        <div className="container">

          <div className="section-heading">

            <p className="section-subtitle">
              GET TO KNOW ME
            </p>

            <h2>
              About <span>Me</span>
            </h2>

          </div>

          <div className="about-card">

            <div className="about-content">

              <h3>Java Full Stack Developer</h3>

              <p>
                I'm Sanjay M, a Computer Science Engineering
                graduate from Jerusalem College of Engineering,
                Chennai.
              </p>

              <p>
                I have completed Java Full Stack Development
                training and gained hands-on experience by
                developing projects using Java, Spring Boot,
                Spring Data JPA, MySQL and React.js.
              </p>

              <p>
                My interests include backend development,
                REST API development, database management
                and building responsive web applications.
              </p>

            </div>

            <div className="about-details">

              <div>
                <FaGraduationCap />
                <span>B.E. Computer Science</span>
              </div>

              <div>
                <FaLaptopCode />
                <span>Java Full Stack Development</span>
              </div>

              <div>
                <FaMapMarkerAlt />
                <span>Chennai, Tamil Nadu</span>
              </div>

              <div>
                <FaEnvelope />
                <span>sanjayin440@gmail.com</span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =================================
          SKILLS SECTION
      ================================= */}

      <section id="skills" className="section skills-section">

        <div className="container">

          <div className="section-heading">

            <p className="section-subtitle">
              WHAT I KNOW
            </p>

            <h2>
              Technical <span>Skills</span>
            </h2>

          </div>

          <div className="skills-grid">

            {skills.map((skill, index) => (

              <div
                className="skill-card"
                key={index}
              >

                <div className="skill-icon">
                  {skill.icon}
                </div>

                <h3>{skill.name}</h3>

                <p>{skill.category}</p>

              </div>

            ))}

          </div>

          <div className="additional-skills">

            <strong>Core Java:</strong>

            <span>OOP Concepts</span>

            <span>Collections Framework</span>

            <span>Exception Handling</span>

            <span>Multithreading Basics</span>

          </div>

        </div>

      </section>

      {/* =================================
          PROJECTS SECTION
      ================================= */}

      <section id="projects" className="section projects-section">

        <div className="container">

          <div className="section-heading">

            <p className="section-subtitle">
              MY RECENT WORK
            </p>

            <h2>
              Featured <span>Projects</span>
            </h2>

          </div>

          <div className="projects-grid">

            {projects.map((project) => (

              <div
                className="project-card"
                key={project.number}
              >

                {/* SERIAL NUMBER */}

                <div className="project-number">
                  {project.number}
                </div>

                {/* PROJECT NAME */}

                <h3>{project.name}</h3>

                <h4>{project.subtitle}</h4>

                {/* DESCRIPTION */}

                <p className="project-description">
                  {project.description}
                </p>

                {/* KEY FEATURES */}

                <div className="project-features">

                  <h5>Key Features</h5>

                  <ul>

                    {project.features.map((feature, index) => (

                      <li key={index}>
                        {feature}
                      </li>

                    ))}

                  </ul>

                </div>

                {/* TECHNOLOGIES */}

                <div className="technology-list">

                  {project.technologies.map((technology, index) => (

                    <span key={index}>
                      {technology}
                    </span>

                  ))}

                </div>

                {/* PROJECT LINKS */}

                <div className="project-buttons">

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn live-btn"
                  >
                    Live Demo <FaExternalLinkAlt />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn github-btn"
                  >
                    <FaGithub /> GitHub
                  </a>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =================================
          EDUCATION SECTION
      ================================= */}

      <section
        id="education"
        className="section education-section"
      >

        <div className="container">

          <div className="section-heading">

            <p className="section-subtitle">
              MY QUALIFICATION
            </p>

            <h2>
              Education & <span>Certification</span>
            </h2>

          </div>

          <div className="education-list">

            {education.map((item, index) => (

              <div
                className="education-card"
                key={index}
              >

                <div className="education-icon">
                  <FaGraduationCap />
                </div>

                <div className="education-content">

                  <p className="education-period">
                    {item.period}
                  </p>

                  <h3>{item.degree}</h3>

                  <h4>{item.branch}</h4>

                  <p>{item.institution}</p>

                  <span className="education-score">
                    {item.score}
                  </span>

                </div>

              </div>

            ))}

            {/* CERTIFICATIONS */}

            <div className="certification-card">

              <h3>Certifications</h3>

              <p>
                <FaCode />
                Java Full Stack Developer – Hejex Technology
              </p>

              <p>
                <FaDatabase />
                SQL (Basic) – HackerRank Certificate
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =================================
          CONTACT SECTION
      ================================= */}

      <section id="contact" className="section contact-section">

        <div className="container">

          <div className="section-heading">

            <p className="section-subtitle">
              LET'S CONNECT
            </p>

            <h2>
              Contact <span>Me</span>
            </h2>

            <p className="contact-description">
              I'm interested in Java Full Stack Developer and
              Software Developer opportunities. Feel free to
              connect with me.
            </p>

          </div>

          <div className="contact-grid">

            <a
              href="mailto:sanjayin440@gmail.com"
              className="contact-card"
            >

              <FaEnvelope />

              <h3>Email</h3>

              <p>sanjayin440@gmail.com</p>

            </a>

            <a
              href="tel:+916381942795"
              className="contact-card"
            >

              <FaPhone />

              <h3>Phone</h3>

              <p>+91 6381942795</p>

            </a>

            <div className="contact-card">

              <FaMapMarkerAlt />

              <h3>Location</h3>

              <p>Chennai, Tamil Nadu</p>

            </div>

          </div>

          <div className="contact-socials">

            <a
              href="https://www.linkedin.com/in/sanjay-m-021215s/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </a>

            <a
              href="https://github.com/sanjay-coder02"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub /> GitHub
            </a>

          </div>

        </div>

      </section>

      {/* =================================
          FOOTER
      ================================= */}

      <footer className="footer">

        <div className="container">

          <h3>
            SANJAY<span>.</span>
          </h3>

          <p>
            © {new Date().getFullYear()} Sanjay M.
            All Rights Reserved.
          </p>

          <a href="#home">
            Back to Top ↑
          </a>

        </div>

      </footer>

    </div>
  );
}

export default App;