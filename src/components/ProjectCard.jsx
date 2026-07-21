import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const coverRef = useRef(null);

  const openCover = () => {
    console.log(coverRef.current);
    coverRef.current.classList.add("project-card__cover--up");
  };

  const closeCover = () => {
    coverRef.current.classList.remove("project-card__cover--up");
  };

  return (
    <article className="project-card">
      <figure className="project-card__figure">
        <img
          className="project-card__image"
          src={`/images/${project.image}`}
          alt={`Screenshot of ${project.title}`}
        />
      </figure>
      <div className="project-card__content">
        <h3 className="project-card__title">{project.title}</h3>
        <h4 className="project-card__stack">
          {project.stack.map((tech, idx) => (
            <span key={idx} className="project-card__tech-item">
              {`${tech}${idx != project.stack.length - 1 ? " | " : ""}`}
            </span>
          ))}
        </h4>

        <button
          className="link-btn link-btn--outline mt-2 self-end"
          onClick={openCover}
          aria-label="Open overlay"
        >
          See project
        </button>
      </div>
      <div className="project-card__cover" ref={coverRef}>
        <button
          className="project-card__close"
          ref={coverRef}
          onClick={closeCover}
          aria-label="Close overlay"
        >
          <FaChevronDown className="project-card__down-chev" />
        </button>
        <p>{project.description}</p>
        <div className="project-card__links">
          <Link
            to={project.code}
            target="_blank"
            className="link-btn link-btn--outline flex-1"
          >
            Code <FaGithub alt="Github Icon" className="ml-2 inline-block" />
          </Link>
          {project.live ? (
            <Link
              to={project.live && project.live}
              target="_blank"
              className="link-btn link-btn--outline flex-1"
            >
              Live
            </Link>
          ) : (
            <div
              disabled
              aria-disabled="true"
              className="link-btn link-btn--outline link-btn--dead flex-1"
            >
              No live version available
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
export default ProjectCard;
