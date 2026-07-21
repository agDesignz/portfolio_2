import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const d = new Date();

  return (
    <footer className="w-full min-h-20 p-4 flex justify-center items-center gap-8 flex-wrap text-saffron italic">
      <p className="text-sm sm:text-md">
        Copyright © <strong>Alex Geer</strong> {d.getFullYear()}
      </p>
      <div className="flex items-center justify-center gap-4">
        <Link
          to="https://github.com/agDesignz"
          target="_blank"
          className="text-2xl hover:opacity-50"
          aria-label="Github"
        >
          <FaGithub />
        </Link>
        <Link
          to="https://www.linkedin.com/in/alexander-geer/"
          target="_blank"
          className="text-3xl hover:opacity-50"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
