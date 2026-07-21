import { useRef } from "react";
import ContactForm from "./ContactForm";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiRobot3Fill } from "react-icons/ri";

const Contact = () => {
  const robotRef = useRef(null);
  const showRobot = () => {
    robotRef.current.classList.remove("scale-0");
  };
  return (
    <section className="page-section">
      <div className="flex flex-col gap-8 w-full">
        <div>
          <h2 className="page-section__title">Contact</h2>
        </div>

        <div className="grid sm:grid-cols-2 items-start gap-8 md:gap-16 font-[sans-serif]">
          <ContactForm showRobot={showRobot} />
          <div
            ref={robotRef}
            className="h-full grid gap-4 justify-items-center transition-transform duration-500 scale-0"
          >
            <h3 className="text-2xl md:text-4xl font-mono text-saffron-200">
              Robots!
            </h3>
            <p className="font-normal">
              The word "ROBOT" was coined by Czech playwrite Karel &#268;apek in
              1920. I lived in the Czech capital, Prague, for nearly 12 years,
              so I had to include some fun Czech facts!{" "}
            </p>

            <p className="font-normal">
              Bot protection for this site is provided by my self-hosted backend
              service built with NodeJS, Express and Altcha, a free, open-source
              Captcha alternative.{" "}
            </p>
            <Link
              to="https://github.com/agDesignz/altcha_backend"
              target="_blank"
              className="link-btn link-btn--outline self-start"
            >
              Altcha Backend
            </Link>
            <span>
              <RiRobot3Fill className="text-3xl self-end fill-navy-300 inline-block mr-2" />
              <small className="font-mono">"Díky za přečtení!"</small>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
