import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const d = new Date();

  return (
    <footer className="w-full min-h-20 p-4 bg-gradient-to-b from-polynesian_blue-300/85 to-navy_blue-300/75 flex justify-center items-center gap-8 flex-wrap text-blue_(ncs)-900">
      <p className="text-lg">
        Copyright © <strong>Alex Geer</strong> {d.getFullYear()}
      </p>
      <div className="flex items-center justify-center gap-4">
        <Link
          to="https://github.com/agDesignz"
          target="_blank"
          className="text-3xl hover:opacity-50"
        >
          <FaGithub />
        </Link>
        <Link
          to="https://www.linkedin.com/in/alexander-geer/"
          target="_blank"
          className="text-3xl hover:opacity-50"
        >
          <FaLinkedin />
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
