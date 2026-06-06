import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const d = new Date();
  const portfolioStack = [
    "React",
    "Vite",
    "Tailwind CSS",
    "PostCSS",
    "EmailJs",
    "Altcha",
  ];

  return (
    <footer className="w-full min-h-20 p-4">
      <article className="flex flex-col items-center justify-center gap-4 mb-6">
        <h3 className="font-oswald font-light text-xl md:text-2xl tracking-wider text-saffron">
          This Site Was Built With:
        </h3>
        <ul className="flex flex-wrap gap-4">
          {portfolioStack.map((tech, idx) => (
            <span
              key={idx}
              className="rounded-sm bg-gradient-to-tr from-navy-700 to-navy-600 px-2 py-1 font-open-sans font-medium text-sm text-saffron-200"
            >
              {tech}
            </span>
          ))}
        </ul>
        <Link
          to="https://github.com/agDesignz/portfolio_2"
          className="text-lg text-saffron hover:opacity-50 font-fredericka"
          target="_blank"
        >
          See the source code for this site
        </Link>
      </article>
      <div className="flex justify-center items-center gap-8 flex-wrap text-saffron italic">
        <p className="text-sm sm:text-md md:text-lg">
          Copyright © <strong>Alex Geer</strong> {d.getFullYear()}
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            to="https://github.com/agDesignz"
            target="_blank"
            className="text-2xl md:text-3xl hover:opacity-50"
          >
            <FaGithub />
          </Link>
          <Link
            to="https://www.linkedin.com/in/alexander-geer/"
            target="_blank"
            className="text-3xl md:text-4xl hover:opacity-50"
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
