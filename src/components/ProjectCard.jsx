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
      {/* <div className="project-card__content">
        <h3 className="project-card__title">{project.title}</h3>
      </div> */}
    </article>
  );
};
export default ProjectCard;
