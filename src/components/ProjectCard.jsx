import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
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
        {/* <p>{project.description}</p> */}
        {/* <div className="project-card__links">
          <Link to={project.code} target="_blank" className="link-btn">
            Code
          </Link>
          {project.live ? (
            <Link
              to={project.live && project.live}
              target="_blank"
              className="link-btn"
            >
              Live
            </Link>
          ) : (
            <div className="link-btn link-btn--dead">
              No live version available
            </div>
          )}
        </div> */}
        <button className="link-btn mt-2 self-end">See project</button>
      </div>
    </article>
  );
};
export default ProjectCard;
