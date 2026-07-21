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
            className="h-full grid grid-rows-[auto_auto_1fr] gap-4 md:gap-8 justify-items-center scale-0 transition-transform duration-500"
          >
            <h3 className="text-2xl md:text-4xl font-sans">Robots!</h3>
            <p className="text-justify max-w-80">
              The word "ROBOT" was coined by Czech playwrite Karel &#268;apek in
              1920. I learned this during the twelve years I spent living in the
              Czech capital, Prague ("Praha" to the locals).
            </p>
            <RiRobot3Fill className="text-9xl self-end" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
