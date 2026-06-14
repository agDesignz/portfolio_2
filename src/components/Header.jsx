import { useState, useRef, useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import LogoLg from "./svg/LogoLg.jsx";

const Header = () => {
  const [isIntersecting, setIsIntersecting] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "300px",
      threshold: 0,
    };
    const toggleNav = (entries) => {
      const [entry] = entries;
      setIsIntersecting(entry.isIntersecting);
      console.log(isIntersecting);
    };
    // https://www.freecodecamp.org/news/reveal-on-scroll-in-react-using-the-intersection-observer-api/
    // https://dev.to/producthackers/intersection-observer-using-react-49ko
    const observer = new IntersectionObserver(toggleNav, options);
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isIntersecting]);

  return (
    <header className="absolute top-0 w-full" ref={ref}>
      <nav className={`nav ${isIntersecting ? "" : " nav--fixed"}`}>
        <section className="flex items-center gap-4 container xl:max-w-[1200px] h-full text-saffron">
          <figure
            className={`nav__logo ${isIntersecting ? "" : " nav__logo--fixed"}`}
          >
            <img
              className="w-full"
              src="/images/logo-lg.png"
              alt="Site logo."
            />
          </figure>
        </section>
      </nav>
    </header>
  );
};
export default Header;
