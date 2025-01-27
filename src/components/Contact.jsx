import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import ContactForm from "./ContactForm";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="page-section">
      <div className="flex flex-col gap-8 w-full">
        <div>
          <h2 className="page-section__title">Contact</h2>
        </div>

        <div className="grid sm:grid-cols-2 items-start gap-8 md:gap-16 font-[sans-serif]">
          <ContactForm />
          <div className="flex flex-col gap-4 justify-center h-full lg:p-16">
            <p className="text-lg">
              Whether you want to collaborate on a project or hire my services,
              you can send me a message through the contact form, email me
              directly, or connect on LinkedIn.
            </p>

            <div className="flex flex-col min-[320px]:flex-row gap-8 md:gap-16">
              <div className="flex items-center">
                <div className="bg-gradient-to-tr from-polynesian_blue-400 to-polynesian_blue-600 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <MdEmail className="text-2xl" />
                </div>
                <Link
                  href="mailto:alexgeorgegeer@gmail.com"
                  className="text-sm ml-4 hover:opacity-50"
                >
                  <small className="block">Mail</small>
                  <strong>alexgeorgegeer@gmail.com</strong>
                </Link>
              </div>
              <div className="flex items-center">
                <div className="bg-gradient-to-tr from-polynesian_blue-400 to-polynesian_blue-600 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <Link
                    to="https://www.linkedin.com/in/alexander-geer/"
                    target="_blank"
                    className="hover:opacity-50"
                  >
                    <FaLinkedinIn className="text-2xl" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
