import { Link } from "react-router-dom";
import PROJECTS from "../assets/data/projects";

const Projects = () => {
  return (
    <section className="page-section page-section--border">
      <div className="flex flex-col gap-8 w-full">
        <div>
          <h2 className="page-section__title">Projects</h2>
        </div>
        <div className="flex flex-col gap-8">
          {PROJECTS.map((pro, idx) => (
            <div
              key={idx}
              className="grid sm:grid-cols-[1fr_1fr] sm:max-h-56 lg:grid-cols-[2fr_3fr] gap-8"
            >
              <figure className="max-w-80 rounded-md overflow-hidden shadow-sm shadow-cocoa-300 relative">
                <img
                  src={`./src/assets/images/${pro.image}`}
                  alt={`Image of ${pro.title}`}
                  className="object-cover h-full"
                />
                {/* <div className="absolute top-0 left-0 right-0 bottom-0 z-20 project-gradient opacity-0 hover:opacity-100 duration-200"></div> */}
              </figure>
              <div className="flex flex-col gap-4">
                <h3 className="font-oswald text-xl">{pro.title}</h3>
                <p>{pro.description}</p>
                <div className="flex flex-wrap gap-4">
                  {pro.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded-sm bg-cocoa-300 px-2 py-1 font-open-sans text-sm text-sky_blue-900"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-2">
                  <Link
                    to={pro.code}
                    className="link-outline link-outline--light"
                  >
                    Code
                  </Link>
                  <Link
                    to={pro.live}
                    className="link-outline link-outline--light"
                  >
                    Live
                  </Link>
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
