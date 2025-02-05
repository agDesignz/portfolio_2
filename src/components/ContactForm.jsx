import { useState, useRef } from "react";
import validateEmail from "../utils/validateEmail";
import emailjs from "@emailjs/browser";
import "dotenv";
import AltchaComponent from "./AltchaComponent"; // Import captcha component

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [userMessage, setUserMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState(null); // Captcha state

  // onBlur on each input element
  // calls handleInputCHange to validate
  function handleInputChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  const form = useRef();

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
    // Check that name and message have some input
    // Alert them if nothing is filled properly
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!captchaToken) {
      setUserMessage("Please complete the captcha");
      return;
    }

    emailjs
      .sendForm(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    setUserMessage("email sent");
    setFormState({ name: "", email: "", message: "" });
  }

  return (
    <form
      className="flex flex-col gap-4 text-navy_blue-600 text-lg"
      ref={form}
      onSubmit={handleSubmit}
    >
      <input
        autoComplete="off"
        type="text"
        placeholder="Name"
        value={formState.name}
        name="name"
        onChange={handleInputChange}
        onBlur={handleValidation}
        className="w-full rounded-md py-3 px-4 bg-mindaro-900 placeholder:text-polynesian_blue-700 outline-polynesian_blue-500"
      />
      <input
        autoComplete="off"
        type="email"
        placeholder="Email"
        value={formState.email}
        name="email"
        onChange={handleInputChange}
        onBlur={handleValidation}
        className="w-full rounded-md py-3 px-4 bg-mindaro-900 placeholder:text-polynesian_blue-700 outline-polynesian_blue-500"
      />
      <textarea
        autoComplete="off"
        placeholder="Message"
        rows="6"
        value={formState.message}
        name="message"
        onChange={handleInputChange}
        onBlur={handleValidation}
        className="w-full rounded-md px-4 bg-mindaro-900 placeholder:text-polynesian_blue-700 pt-3 outline-polynesian_blue-500"
      ></textarea>
      <AltchaComponent onVerify={setCaptchaToken} />
      <button
        type="submit"
        className="bg-gradient-to-tr from-carrot-600 to-saffron-500 text-2xl text-navy_blue-600 hover:opacity-75 duration-75 tracking-wide rounded-md px-4 py-3 w-full"
      >
        Send
      </button>
      {userMessage && <h5 className="text-err">{userMessage}</h5>}
    </form>
  );
};
export default ContactForm;
