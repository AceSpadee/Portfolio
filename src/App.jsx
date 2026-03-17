import { useState } from "react";
import "./App.css";
import ProjectCard from "./components/ProjectCard";
import ImageLightbox from "./components/ImageLightbox";
import projects from "./data/projects";
import Reveal from "./components/Reveal";

function App() {
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const openImageModal = (index) => {
    setActiveImageIndex(index);
  };

  const closeImageModal = () => {
    setActiveImageIndex(null);
  };

  const showPrevImage = () => {
    setActiveImageIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const showNextImage = () => {
    setActiveImageIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="site">
      <header className="navbar">
        <div className="logo">Peyton</div>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <Reveal>
        <section className="hero">
          <div className="hero-layout">
            <div className="hero-content">
              <span className="hero-eyebrow">Full-Stack Developer</span>
              <h1>Hi, I’m Peyton Iverson</h1>
              <h2>I build modern web apps with a focus on interaction, polish, and real functionality</h2>
              <p>
                I enjoy creating responsive websites, interactive user interfaces,
                and full-stack projects using React, Node.js, MongoDB, and JavaScript.
              </p>

              <div className="hero-buttons">
                <a href="#projects" className="btn">View Projects</a>
                <a href="#contact" className="btn btn-secondary">Contact Me</a>
              </div>
            </div>

            <div className="hero-panel">
              <div className="hero-panel-card">
                <p className="hero-panel-label">Core Stack</p>
                <div className="hero-stack">
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                  <span>Express</span>
                  <span>CSS</span>
                </div>
              </div>

              <div className="hero-panel-card">
                <p className="hero-panel-label">Focus</p>
                <ul>
                  <li>Responsive Web Apps</li>
                  <li>Interactive UI</li>
                  <li>Full-Stack Projects</li>
                  <li>Frontend-Focused Development</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={50}>
        <section id="about" className="section">
          <div className="about-layout">
            <div className="about-text">
              <h2>About Me</h2>
              <p>
                I’m a full-stack developer who enjoys building modern web apps,
                interactive interfaces, and polished user experiences. I like
                creating projects that combine clean design with real functionality,
                whether that means building responsive frontend layouts, working
                through full-stack features, or refining how an app feels to use.
              </p>
              <p>
                A lot of my work centers around React, JavaScript, Node.js, and
                MongoDB, with a strong interest in frontend interaction and overall
                project structure. I enjoy taking an idea from concept to a working
                product and improving both the technical side and the user experience
                along the way.
              </p>
            </div>

            <div className="about-highlights">
              <div className="about-card">
                <h3>Frontend Focus</h3>
                <p>Responsive layouts, polished UI, and interactive experiences.</p>
              </div>

              <div className="about-card">
                <h3>Full-Stack Work</h3>
                <p>Building apps that connect clean interfaces with backend logic.</p>
              </div>

              <div className="about-card">
                <h3>Modern Stack</h3>
                <p>React, JavaScript, Node.js, Express, MongoDB, and CSS.</p>
              </div>

              <div className="about-card">
                <h3>Builder Mindset</h3>
                <p>Turning ideas into real projects and improving them through iteration.</p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={100}>
        <section id="projects" className="section">
          <div className="section-heading">
            <h2>Projects</h2>
            <p>
              A mix of public work, live previews, and private projects that reflect
              both my frontend focus and full-stack development experience.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 80} distance={18} duration={600}>
                <ProjectCard
                  project={project}
                  onImageClick={() => openImageModal(index)}
                />
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal delay={150}>
        <section id="contact" className="section">
          <div className="contact-section">
            <div className="contact-text">
              <h2>Contact</h2>
              <p>
                I’m always open to new opportunities, projects, and collaborations.
                Feel free to reach out or connect with me through the links below.
              </p>
            </div>

            <div className="contact-grid">
              <a
                className="contact-card"
                href="mailto:ptniversn@gmail.com"
              >
                <span className="contact-label">Email</span>
                <span className="contact-value">ptniversn@gmail.com</span>
              </a>

              <a
                className="contact-card"
                href="https://github.com/AceSpadee"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-label">GitHub</span>
                <span className="contact-value">https://github.com/AceSpadee</span>
              </a>
            </div>
          </div>
        </section>
      </Reveal>

      <footer className="footer">
        <p>© 2026 Peyton Iverson. All rights reserved.</p>
      </footer>

      {activeImageIndex !== null && (
        <ImageLightbox
          projects={projects}
          activeIndex={activeImageIndex}
          onClose={closeImageModal}
          onPrev={showPrevImage}
          onNext={showNextImage}
        />
      )}
    </div>
  );
}

export default App;