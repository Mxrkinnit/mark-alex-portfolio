"use client";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
const projects = [
  {
    title: "StudySmartAI",
    period: "05/2026 — 08/2026",
    type: "AI-Powered Study Application",
    description:
      "A study-focused application designed to help students organize and improve their learning experience. The project applies object-oriented programming and structured software design to create a practical educational application.",
    details:
      "Developed the application in C++ with an emphasis on object-oriented design, modular program structure and maintainable code. The project demonstrates the ability to translate an educational problem into a functional software solution while applying core programming and software engineering principles.",
    tech: ["C++", "OOP", "Xcode", "Software Design"],
    link: "https://github.com/Mxrkinnit/StudySmartAI",
  },

  {
    title: "Hospital Management System",
    period: "04/2026 — 08/2026",
    type: "Healthcare Management Application",
    description:
      "A C++ management system designed to organize healthcare information and streamline common administrative operations within a hospital environment.",
    details:
      "Implemented using object-oriented programming and structured data management techniques. The project focuses on organizing patient and appointment-related information while demonstrating practical use of classes, data structures, program logic and modular application design.",
    tech: ["C++", "OOP", "Data Structures", "System Design"],
    link: "https://github.com/Mxrkinnit/Hospital-Management-System",
  },

  {
    title: "Looket App",
    period: "04/2023 — 07/2023",
    type: "Android Mobile Application",
    description:
      "A Kotlin-based Android application developed to explore mobile application development, user interaction and modern Android project architecture.",
    details:
      "Built using Kotlin with a Gradle-based project structure. The project provided hands-on experience with Android development, application interfaces and organizing mobile functionality into a maintainable application structure.",
    tech: ["Kotlin", "Android", "Gradle", "UI Development"],
    link: "https://github.com/Mxrkinnit/Looket_App",
  },

  {
    title: "CRUD Web Application",
    period: "02/2023 — 02/2023",
    type: "Database-Driven Web Application",
    description:
      "A Django web application implementing complete Create, Read, Update and Delete functionality with persistent database storage.",
    details:
      "Developed the application using Python and Django, with SQLite used for data persistence and HTML templates for the user interface. The project demonstrates backend development, database interaction, routing, form handling and the implementation of a complete CRUD workflow.",
    tech: ["Python", "Django", "SQLite", "HTML"],
    link: "https://github.com/Mxrkinnit/crud",
  },
];

const experience = [
  {
    period: "Founder",
    company: "FreeWill",
    role: "Clothing & Streetwear Brand",
    description:
      "Founded and developed FreeWill as a clothing and streetwear brand, taking responsibility for brand development, product direction, digital presence and marketing.",
    areas: [
      "Brand Development",
      "Streetwear",
      "E-commerce",
      "Digital Marketing",
      "Creative Direction",
      "Entrepreneurship",
    ],
  },
];

const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["Python", "Kotlin", "C", "C++"],
  },
  {
    title: "Front-End Development",
    skills: ["HTML5", "CSS3", "JavaScript", "UI/UX Design", "React"],
  },
  {
    title: "Frameworks & Platforms",
    skills: ["Django", "Flutter", "Flask"],
  },
  {
    title: "Databases",
    skills: ["SQL Server", "Firebase", "Supabase", "SQLite"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Docker", "Bash", "Figma", "MATLAB"],
  },
  {
    title: "Operating Systems",
    skills: ["Unix", "Linux / Ubuntu", "Windows", "macOS"],
  },
];

const education = [
  {
    period: "09/2024 — Present",
    school: "Xiamen University Malaysia",
    qualification:
      "Bachelor of Engineering in Computer Science and Technology (Honours)",
    location: "Sepang, Malaysia",
  },
  {
    period: "01/2023 — 06/2023",
    school: "Emobilis Technology Training Institute",
    qualification: "Certificate in Full Stack Software Development",
    location: "Nairobi, Kenya",
  },
  {
    period: "07/2023 — 09/2023",
    school: "Cascade Institute of Hospitality",
    qualification: "Certificate in Computer Packages",
    location: "Thika, Kenya",
  },
  {
    period: "01/2019 — 12/2022",
    school: "Mangu High School",
    qualification: "Kenya Certificate of Secondary Education",
    location: "Thika, Kenya",
  },
];



export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main>
      {/* Navigation */}
      <nav className="nav">
        <a href="#home" className="brand">
          MA<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

       <button
  className="mobile-menu-button"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="Toggle navigation menu"
  aria-expanded={menuOpen}
>
  {menuOpen ? "✕" : "☰"}
</button>

        <a className="nav-cta" href="mailto:markgachango@gmail.com">
          Let&apos;s talk
        </a>
      </nav>

      {menuOpen && (
  <div className="mobile-menu">
    <a href="#about" onClick={() => setMenuOpen(false)}>
      About
    </a>

    <a href="#skills" onClick={() => setMenuOpen(false)}>
      Skills
    </a>

    <a href="#projects" onClick={() => setMenuOpen(false)}>
      Projects
    </a>

    <a href="#experience" onClick={() => setMenuOpen(false)}>
      Experience
    </a>

    <a href="#education" onClick={() => setMenuOpen(false)}>
      Education
    </a>

    <a href="#contact" onClick={() => setMenuOpen(false)}>
      Contact
    </a>

    <a
      href="https://www.linkedin.com/in/mark-alex-gachango-b55135270/"
      target="_blank"
      rel="noreferrer"
      onClick={() => setMenuOpen(false)}
    >
      LinkedIn ↗
    </a>

    <a
      href="/Mark-Alex-CV.pdf"
      target="_blank"
      rel="noreferrer"
      onClick={() => setMenuOpen(false)}
    >
      Resume ↗
    </a>
  </div>
)}

      {/* Hero */}
      <section id="home" className="hero section">
        <div className="hero-copy">
          <p className="eyebrow">
            COMPUTER SCIENCE STUDENT · SOFTWARE DEVELOPER
          </p>

          <h1>
            I build software,
            <br />
            <span>web and mobile experiences.</span>
          </h1>

          <p className="hero-text">
            I&apos;m <strong>Kiiru Mark Alex Gachango</strong>, a Computer
            Science student at Xiamen University Malaysia with hands-on
            experience in software, web, mobile and backend development.
          </p>

          <div className="hero-actions">
            <a className="button primary" href="#projects">
              View my work <span>↗</span>
            </a>
            
            <a
            className="button secondary"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            >
              Resume <span>↗</span>
            </a>

            <a
  className="button secondary"
  href="https://www.linkedin.com/in/mark-alex-gachango-b55135270/"
  target="_blank"
  rel="noreferrer"
>
  LinkedIn <span>↗</span>
</a>

            <a
              className="button secondary"
              href="https://github.com/Mxrkinnit"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span>↗</span>
            </a>
          </div>

          <div className="quick-stats">
            <div>
              <strong>13+</strong>
              <span>Public repositories</span>
            </div>

            <div>
              <strong>4</strong>
              <span>Featured projects</span>
            </div>

            <div>
              <strong>5+</strong>
              <span>Programming languages</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="orb orb-one" />
          <div className="orb orb-two" />

          <div className="profile-frame">
            <img src="/profile.jpg" alt="Kiiru Mark Alex Gachango" />
          </div>

          <div className="code-card">
            <div className="window-dots">
              <i />
              <i />
              <i />
            </div>

            <pre>{`const developer = {
  name: "Mark Alex",
  focus: [
    "Software Engineering",
    "Full-Stack",
    "Mobile",
    "AI"
  ],
  status: "building..."
};`}</pre>
          </div>
        </div>
      </section>

      {/* About */}
      <ScrollReveal>
        <section id="about" className="section split">
          <div className="section-label">01 / ABOUT</div>

        <div className="content">
          <p className="lead">
            Computer Science student with hands-on experience in
            <strong>
              {" "}
              software, application, web and mobile development.
            </strong>
          </p>

          <p>
            Experienced across C++, Python, Kotlin and modern web technologies,
            with practical exposure to Django, Flutter, Flask, React, SQL,
            Firebase and Git. My projects span AI-assisted learning, healthcare
            management, Android applications and database-driven web
            development.
          </p>

          <p>
            I enjoy translating real-world requirements into functional
            software and continuously improving my knowledge of software
            engineering, architecture, databases and problem-solving.
          </p>

          <div className="about-grid">
            <div>
              <span>Currently</span>
              <strong>Computer Science &amp; Technology</strong>
            </div>

            <div>
              <span>University</span>
              <strong>Xiamen University Malaysia</strong>
            </div>

            <div>
              <span>Based in</span>
              <strong>Sepang, Malaysia</strong>
            </div>

            <div>
              <span>Interested in</span>
              <strong>Software &amp; Technology Opportunities</strong>
            </div>
          </div>
        </div>
        </section>
        </ScrollReveal>

      {/* Skills */}
      <ScrollReveal>
  <section id="skills" className="section skills-section">
        <div className="section-label">02 / SKILLS</div>

        <div className="content">
          <div className="section-heading">
            <h2>
              Tools I use to
              <br />
              <em>build.</em>
            </h2>

            <p>
              Technologies I&apos;ve worked with through coursework,
              independent projects and software development training.
            </p>
          </div>

          <div className="skill-grid">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <h3>{group.title}</h3>

                <div className="chips">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        </section>
</ScrollReveal>

      {/* Projects */}
      <ScrollReveal>
  <section id="projects" className="section projects-section">
        <div className="section-label">03 / PROJECTS</div>

        <div className="content">
          <div className="section-heading">
            <h2>
              Selected
              <br />
              <em>work.</em>
            </h2>

            <p>
              Projects demonstrating practical experience across systems,
              mobile, backend and web development.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="project-main">
                  <p className="project-type">
                    {project.type} · {project.period}
                  </p>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

<p className="project-details">
  {project.details}
</p>

<div className="chips">
  {project.tech.map((tech) => (
    <span key={tech}>{tech}</span>
  ))}
</div>
                </div>

                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  ↗
                </a>
              </article>
            ))}
          </div>

          <a
            className="all-projects"
            href="https://github.com/Mxrkinnit?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            Explore all GitHub repositories <span>↗</span>
          </a>
          <div className="github-callout">
  <div>
    <p className="project-type">OPEN SOURCE · GITHUB</p>
    <h3>Explore my code.</h3>
    <p>
      View my repositories, experiments and ongoing projects on GitHub.
    </p>
  </div>

  <a
    className="github-button"
    href="https://github.com/Mxrkinnit"
    target="_blank"
    rel="noreferrer"
  >
    Visit GitHub <span>↗</span>
  </a>
</div>
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal>
        <section id="experience" className="section experience-section">
          <div className="section-label">04 / EXPERIENCE</div>
          <div className="content">
            <div className="section-heading">
              <h2>Beyond<br /><em>code.</em></h2>
              <p>
              Building products and businesses has helped me develop skills beyond
              programming, including branding, communication, marketing and
              problem-solving.
              </p>
              </div>
              <div className="experience-card">
                <div className="experience-meta">
                  <span>FOUNDER  · </span>
                  <span>  ENTREPRENEURSHIP</span>
                  </div>
                  
                  <div className="experience-main">
                    <h3>FreeWill</h3>
                    <p className="experience-role">
                      Clothing &amp; Streetwear Brand
                      </p>
                      
                      <p className="experience-description">
                        FreeWill is an independent clothing and streetwear brand built
                        around individuality, self-expression, and the freedom to
                        define your own identity. The brand focuses on creating and
                        promoting contemporary streetwear while developing a distinct
                        visual identity and digital presence. As a co-founder, I oversee
                        the brand's development, creative direction, product concepts,
                        marketing and online presence, combining creativity,
                        entrepreneurship and technology to grow the brand.
                        </p>
                        
                        <div className="chips">
                          {experience[0].areas.map((area) => (
                            <span key={area}>{area}</span>
                            ))}
                            </div>
                            <div className="experience-links">
                              <a
                                href="https://www.instagram.com/fr.eewill?stkn=OXRqMmM2OGlienN4"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Instagram ↗
                              </a>
                              <a
                              href="freewillco.xyz"
                              target="_blank"
                              rel="noreferrer"
                              >
                                Website ↗
                                </a>
                                </div>
                            </div>
                            <div className="experience-arrow">↗</div>
                            </div>
                            </div>
                            </section>
                            </ScrollReveal>

      {/* Education */}
      <ScrollReveal>
        <section id="education" className="section split education-section">
          <div className="section-label">05 / EDUCATION</div>

        <div className="content">
          <div className="timeline">
            {education.map((item) => (
              <div className="timeline-item" key={item.school}>
                <span>{item.period}</span>

                <div>
                  <h3>{item.school}</h3>
                  <p>{item.qualification}</p>
                  <small>{item.location}</small>
                </div>
              </div>
            ))}
          </div>

          <div className="languages">
            <h3>Languages</h3>

            <div className="language-row">
              <span>English</span>
              <b>Fluent</b>
            </div>

            <div className="language-row">
              <span>Kiswahili</span>
              <b>Fluent</b>
            </div>

            <div className="language-row">
              <span>German</span>
              <b>Learning</b>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Certificates */}
      <ScrollReveal>
        <section className="section split certificates-section">
          <div className="section-label">06 / CERTIFICATES</div>

        <div className="content certificate-grid">
          <article className="certificate-card">
            <span>2023</span>
            <h3>Full Stack Software Development</h3>
            <p>Emobilis Technology Training Institute</p>
          </article>

          <article className="certificate-card">
            <span>2023</span>
            <h3>Computer Packages</h3>
            <p>Cascade Institute of Hospitality</p>
          </article>
        </div>
      </section>
      </ScrollReveal>

      {/* Philosophy */}
      <ScrollReveal>
        <section className="section philosophy">
          <div className="quote-mark">“</div>

        <blockquote>Build. Learn. Improve. Repeat.</blockquote>

        <p>
          I believe the best way to grow as a developer is by continuously
          building projects, solving problems, learning from mistakes and
          improving with every iteration.
        </p>
      </section>
      </ScrollReveal>

      {/* Contact */}
      <ScrollReveal>
        <section id="contact" className="contact">
          <div className="contact-inner">
            <p className="eyebrow">07 / CONTACT</p>

          <h2>
            Let&apos;s build something
            <br />
            <em>meaningful.</em>
          </h2>

          <p>
            I&apos;m interested in software development opportunities,
            internships, collaborations and projects where I can continue
            learning while contributing practical technical skills.
          </p>

          <a
            className="contact-email"
            href="mailto:markgachango@gmail.com"
          >
            markgachango@gmail.com <span>↗</span>
          </a>

          <div className="socials">
            <a
              href="https://github.com/Mxrkinnit"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
    href="https://www.linkedin.com/in/mark-alex-gachango-b55135270/"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn
  </a>

            <a href="tel:+60177268530">+60 17-726 8530</a>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Footer */}
      <footer>
        <span>
          © {new Date().getFullYear()} Kiiru Mark Alex Gachango
        </span>

        <span>Designed &amp; built with Next.js</span>

        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}