import { Link, useParams } from "react-router-dom";
import projects from "../data/projects";

function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="site">
        <section className="section">
          <h2>Project Not Found</h2>
          <p>This project page could not be found.</p>
          <Link to="/" className="btn">
            Back to Portfolio
          </Link>
        </section>
      </div>
    );
  }

  const {
    title,
    status,
    image,
    images = [],
    description,
    tech,
    highlights,
    liveLink,
    githubLink,
    projectDetails,
  } = project;

  const extraImages = images.length > 1 ? images : [];

  return (
    <div className="site">
      <header className="navbar">
        <div className="logo">Peyton</div>
        <nav>
          <Link to="/" className="nav-link">
            Back Home
          </Link>
        </nav>
      </header>

      <section className="section project-page">
        <div className="project-page-hero">
          <div className="project-page-image-wrapper">
            <img className="project-page-image" src={image} alt={title} />
          </div>

          <div className="project-page-intro">
            <span className="project-status">{status}</span>
            <h1>{title}</h1>
            <p className="project-page-description">{description}</p>

            <div className="project-tech">
              {tech.map((item) => (
                <span className="tech-pill" key={item}>
                  {item}
                </span>
              ))}
            </div>

            <div className="project-links">
              {liveLink && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  Live Preview
                </a>
              )}

              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link secondary"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>

        {extraImages.length > 0 && (
          <div className="project-page-section">
            <h2>Screenshots</h2>
            <div className="project-gallery">
              {extraImages.map((item, index) => (
                <div className="project-gallery-item" key={`${item.alt}-${index}`}>
                  <img
                    className="project-gallery-image"
                    src={item.src}
                    alt={item.alt}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="project-page-content">
          <div className="project-page-section">
            <h2>Highlights</h2>
            <ul className="project-highlights">
              {highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>

          <div className="project-page-section">
            <h2>Overview</h2>
            <p>{projectDetails.overview}</p>
          </div>

          <div className="project-page-section">
            <h2>Why I Built It</h2>
            <p>{projectDetails.goal}</p>
          </div>

          <div className="project-page-section">
            <h2>Challenges</h2>
            <ul className="project-highlights">
              {projectDetails.challenges.map((challenge) => (
                <li key={challenge}>{challenge}</li>
              ))}
            </ul>
          </div>

          <div className="project-page-section">
            <h2>What I Learned</h2>
            <ul className="project-highlights">
              {projectDetails.learned.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectPage;