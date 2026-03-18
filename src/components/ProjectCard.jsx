import { Link } from "react-router-dom";

function ProjectCard({ project, onImageClick }) {
  const {
    title,
    slug,
    status,
    image,
    alt,
    description,
    tech,
    highlights,
    liveLink,
    githubLink,
  } = project;

  return (
    <article className="project-card">
      <button
        type="button"
        className="project-thumbnail-button"
        onClick={onImageClick}
        aria-label={`Expand image for ${title}`}
      >
        <div className="project-thumbnail-wrapper">
          <img className="project-thumbnail" src={image} alt={alt} />
          <div className="project-thumbnail-overlay">
            <span className="project-thumbnail-hint">Click to expand</span>
          </div>
        </div>
      </button>

      <span className="project-status">{status}</span>

      <h3>{title}</h3>

      <p className="project-description">{description}</p>

      <div className="project-tech">
        {tech.map((item) => (
          <span className="tech-pill" key={item}>
            {item}
          </span>
        ))}
      </div>

      <ul className="project-highlights">
        {highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

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

        <Link to={`/projects/${slug}`} className="project-link secondary">
          View Project
        </Link>
      </div>
    </article>
  );
}

export default ProjectCard;