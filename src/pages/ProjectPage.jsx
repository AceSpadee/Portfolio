import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ImageLightbox from "../components/ImageLightbox";
import projects from "../data/projects";

function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(null);

  useEffect(() => {
    setSelectedImageIndex(0);
    setLightboxImageIndex(null);
  }, [slug]);

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

  const galleryImages =
    images.length > 0
      ? images
      : [
          {
            src: image,
            alt: title,
          },
        ];

  const selectedImage = galleryImages[selectedImageIndex];

  const openLightbox = (index) => {
    setLightboxImageIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImageIndex(null);
  };

  const showPrevImage = () => {
    setLightboxImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const showNextImage = () => {
    setLightboxImageIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

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
          <div className="project-page-image-column">
            <button
              type="button"
              className="project-page-main-image-button"
              onClick={() => openLightbox(selectedImageIndex)}
              aria-label={`Expand image for ${title}`}
            >
              <div className="project-page-image-wrapper">
                <img
                  className="project-page-image"
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                />
              </div>
            </button>

            {galleryImages.length > 1 && (
              <div className="project-page-thumbnails">
                {galleryImages.map((item, index) => (
                  <button
                    key={`${item.alt}-${index}`}
                    type="button"
                    className={`project-page-thumbnail-button ${
                      selectedImageIndex === index ? "active" : ""
                    }`}
                    onClick={() => setSelectedImageIndex(index)}
                    aria-label={`View screenshot ${index + 1} for ${title}`}
                  >
                    <img
                      className="project-page-thumbnail-image"
                      src={item.src}
                      alt={item.alt}
                    />
                  </button>
                ))}
              </div>
            )}
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

        {galleryImages.length > 1 && (
          <div className="project-page-section">
            <h2>Screenshots</h2>
            <div className="project-gallery">
              {galleryImages.map((item, index) => (
                <button
                  type="button"
                  className="project-gallery-item"
                  key={`${item.alt}-${index}`}
                  onClick={() => openLightbox(index)}
                  aria-label={`Open screenshot ${index + 1} for ${title}`}
                >
                  <img
                    className="project-gallery-image"
                    src={item.src}
                    alt={item.alt}
                  />
                </button>
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

      {lightboxImageIndex !== null && (
        <ImageLightbox
          images={galleryImages}
          projectTitle={title}
          activeIndex={lightboxImageIndex}
          onClose={closeLightbox}
          onPrev={showPrevImage}
          onNext={showNextImage}
        />
      )}
    </div>
  );
}

export default ProjectPage;