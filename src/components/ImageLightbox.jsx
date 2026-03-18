import { useEffect } from "react";

function ImageLightbox({
  images,
  projectTitle,
  activeIndex,
  onClose,
  onPrev,
  onNext,
  showNavigation = false,
}) {
  const activeImage = images?.[activeIndex];

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

  if (!images || !images.length || !activeImage) return null;

  const showNav = showNavigation || images.length > 1;

  return (
    <div
      className="image-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${projectTitle} expanded image`}
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

        {showNav && (
          <>
            <button
              type="button"
              className="image-modal-nav image-modal-nav-left"
              onClick={onPrev}
              aria-label="Previous image"
            >
              ‹
            </button>

            <button
              type="button"
              className="image-modal-nav image-modal-nav-right"
              onClick={onNext}
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}

        <img
          className="image-modal-img"
          src={activeImage.src}
          alt={activeImage.alt}
        />

        <div className="image-modal-caption">
          <h4>{projectTitle}</h4>
          <p>{activeImage.alt}</p>
          {images.length > 1 && (
            <span className="image-modal-counter">
              {activeIndex + 1} / {images.length}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ImageLightbox;