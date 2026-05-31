import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-12 sm:h-14 p-4 absolute top-0 w-full">
      <div className="flex items-center gap-4 container xl:max-w-[1200px] h-full text-saffron-500">
        {/* <h1 className="text-3xl">AG</h1> */}
        <figure className="max-width-48 h-10">
          <img
            className="h-full"
            src="./icons/favicon-48x48.png"
            alt="Image of site logo: A saffron gold-colored letter 'a' within a saffron-gold ring."
          />
        </figure>
        <Link
          to="https://www.linkedin.com/in/alexander-geer/"
          target="_blank"
          className="text-3xl hover:opacity-50"
        >
          <FaLinkedin />
        </Link>
      </div>
    </header>
  );
};
export default Header;
