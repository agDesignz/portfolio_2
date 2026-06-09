import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import LogoLg from "./svg/LogoLg.jsx";

const Header = () => {
  return (
    <header className="p-4 absolute top-0 w-full">
      <div className="flex items-center gap-4 container xl:max-w-[1200px] h-full text-saffron">
        {/* <h1 className="text-3xl">AG</h1> */}
        <figure className="max-width-44 w-20">
          <img className="h-full" src="/images/logo-lg.png" alt="Site logo." />
        </figure>
        {/* <Link
          to="https://www.linkedin.com/in/alexander-geer/"
          target="_blank"
          className="text-3xl hover:opacity-50"
        >
          <span className="hidden">Alex Geer Linkedin page</span>
          <FaLinkedin />
        </Link> */}
        {/* <Link to="#" target="_blank" className="w-10">
          <LogoLg fill="saffron-500" />
        </Link> */}
      </div>
    </header>
  );
};
export default Header;
