import { Link } from "react-router-dom";
import PROJECTS from "../assets/data/projects";

const Projects = () => {
  return (
    <section className="page-section page-section--border">
      <div className="flex flex-col gap-8 w-full">
        <div>
          <h2 className="page-section__title">Projects</h2>
        </div>
        <div className="flex flex-col gap-10">
          {PROJECTS.map((pro, idx) => (
            <div
              key={idx}
              className="grid sm:grid-cols-[1fr_1fr] lg:grid-cols-[2fr_3fr] gap-8 md:gap-10 lg:gap-12"
            >
              <figure className="max-w-80 aspect-[3/2] rounded-md overflow-hidden shadow-md shadow-navy-900 relative">
                <img
                  src={`/images/${pro.image}`}
                  alt={`Image of ${pro.title}`}
                  className="object-cover min-h-full h-auto"
                />
                {/* <div className="absolute top-0 left-0 right-0 bottom-0 z-20 project-gradient opacity-0 hover:opacity-100 duration-200"></div> */}
              </figure>
              <div className="flex flex-col gap-4">
                <h3 className="font-oswald font-light text-xl md:text-2xl tracking-wider text-saffron">
                  {pro.title}
                </h3>
                <p>{pro.description}</p>
                <div className="flex flex-wrap gap-4">
                  {pro.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded-sm bg-gradient-to-tr from-navy-700 to-navy-600 px-2 py-1 font-open-sans font-medium text-sm text-saffron-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-2">
                  <Link
                    to={pro.code}
                    target="_blank"
                    className="link-btn link-btn--green link-btn--green--live"
                  >
                    Code
                  </Link>
                  {pro.live ? (
                    <Link
                      to={pro.live && pro.live}
                      target="_blank"
                      className="link-btn link-btn--green link-btn--green--live"
                    >
                      Live
                    </Link>
                  ) : (
                    <div className="link-btn link-btn--green link-btn--dead">
                      No live version available
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
