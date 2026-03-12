import { useEffect } from "react";

function ImageLightbox({ projects, activeIndex, onClose, onPrev, onNext }) {
  const activeProject = projects[activeIndex];

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  if (!activeProject) return null;

  return (
    <div
      className="image-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${activeProject.title} expanded image`}
    >
      <div
        className="image-modal-content"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="image-modal-close"
          onClick={onClose}
          aria-label="Close expanded image"
        >
          ×
        </button>

        <button
          type="button"
          className="image-modal-nav image-modal-nav-left"
          onClick={onPrev}
          aria-label="Previous project image"
        >
          ‹
        </button>

        <button
          type="button"
          className="image-modal-nav image-modal-nav-right"
          onClick={onNext}
          aria-label="Next project image"
        >
          ›
        </button>

        <img
          className="image-modal-img"
          src={activeProject.image}
          alt={activeProject.alt}
        />

        <div className="image-modal-caption">
          <h4>{activeProject.title}</h4>
          <p>{activeProject.alt}</p>
        </div>
      </div>
    </div>
  );
}

export default ImageLightbox;