import ProjectCard from "./ProjectCard";
import PROJECTS from "../assets/data/projects";

const Projects = () => {
  return (
    <section className="page-section grid md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
      <h2 className="col-span-full page-section__title">Projects</h2>
      {PROJECTS.map((project, idx) => (
        <ProjectCard project={project} key={idx} />
      ))}
    </section>
  );
};
export default Projects;
