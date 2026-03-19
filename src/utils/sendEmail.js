import emailjs from "@emailjs/browser";
import "dotenv";

const sendEmail = async (formData) => {
  try {
    const emailStatus = await emailjs.sendForm(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      formData,
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
      }
    );
    return emailStatus;
  } catch (error) {
    return error.text;
  }
};

export default sendEmail;
