import { useState, useRef } from "react";
import validateEmail from "../utils/validateEmail";

import AltchaComponent from "./AltchaComponent"; // Import captcha component
import sendEmail from "../utils/sendEmail";
import altchaVerify from "../utils/altchaVerify";

const ContactForm = ({ showRobot }) => {
  const form = useRef();
  // Data from the form:
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [userMessage, setUserMessage] = useState("");

  // Altcha ref:
  const altchaRef = useRef(null);

  // onBlur on each input element
  // calls handleInputCHange to validate
  function handleInputChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  function handleValidation(e) {
    const field = e.target.name;
    // Check for a good email
    if (e.target.name === "email") {
      if (!validateEmail(e.target.value)) {
        setUserMessage("Please enter a valid email address");
      } else {
        setUserMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setUserMessage(`Please enter something in the ${field} field.`);
      } else {
        setUserMessage("");
      }
    }
  }

  const handleSubmit = async function (e) {
    e.preventDefault();

    if (
      !Object.values(formState).every((value) => value != null && value !== "")
    ) {
      setUserMessage("Please complete the form");
      return;
    }

    const altchaToken = altchaRef.current?.value;

    if (!altchaToken) {
      setUserMessage("Please complete the captcha");
      return;
    }

    const altchaVerified = await altchaVerify(altchaToken);

    if (altchaVerified.ok) {
      const emailStatus = await sendEmail(form.current);

      emailStatus.status === 200 && setUserMessage("email sent");
      setFormState({ name: "", email: "", message: "" });
      return;
    } else {
      setUserMessage("Captcha Invalid. Message Not Sent.");
      return;
    }
  };

  return (
    <form
      className="flex flex-col gap-4 text-navy-600 text-lg items-center"
      onSubmit={handleSubmit}
      ref={form}
    >
      <input
        autoComplete="off"
        type="text"
        placeholder="Name"
        aria-label="Name"
        value={formState.name}
        name="name"
        onChange={handleInputChange}
        onBlur={handleValidation}
        className="w-full rounded-md py-3 px-4 bg-green-50 placeholder:text-navy-700 outline-navy-500"
      />

      <input
        autoComplete="off"
        type="email"
        placeholder="Email"
        value={formState.email}
        name="email"
        aria-label="Email"
        onChange={handleInputChange}
        onBlur={handleValidation}
        className="w-full rounded-md py-3 px-4 bg-green-50 placeholder:text-navy-700 outline-navy-500"
      />

      <textarea
        autoComplete="off"
        placeholder="Message"
        rows="6"
        value={formState.message}
        name="message"
        aria-label="Message"
        onChange={handleInputChange}
        onBlur={handleValidation}
        className="w-full rounded-md px-4 bg-green-50 placeholder:text-navy-700 pt-3 outline-navy-500"
      ></textarea>
      <AltchaComponent ref={altchaRef} showRobot={showRobot} />
      <button
        type="submit"
        className="bg-gradient-to-tr from-green-800 to-green text-2xl text-saffron-50 hover:from-green hover:to-green transition duration-300 tracking-wide rounded-md px-4 py-3 w-full"
      >
        Send
      </button>
      {userMessage && <h5 className="text-syracuse_red-700">{userMessage}</h5>}
    </form>
  );
};
export default ContactForm;
