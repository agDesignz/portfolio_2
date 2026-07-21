import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import ContactForm from "./ContactForm";
import { Link } from "react-router-dom";
import { RiRobot3Fill } from "react-icons/ri";

const Contact = () => {
  return (
    <section className="page-section">
      <div className="flex flex-col gap-8 w-full">
        <div>
          <h2 className="page-section__title">Contact</h2>
        </div>

        <div className="grid sm:grid-cols-2 items-start gap-8 md:gap-16 font-[sans-serif]">
          <ContactForm />
          <div className="h-full grid">
            <h3>Robots!</h3>
            <p>
              The word "ROBOT" was coined by Czech playwrite Karel &#268;apek in
              1920. I learned during the twelve years I spend living in the
              Czech capital, Prague (Praha to the locals).
            </p>
            <RiRobot3Fill className="h-96" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
