import emailjs from "@emailjs/browser";
import "dotenv";

const sendEmail = async (formData) => {
  try {
    const emailStatus = await emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      },
    );
    return emailStatus;
  } catch (error) {
    return error.text;
  }
};

export default sendEmail;
