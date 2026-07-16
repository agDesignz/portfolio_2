import emailjs from "@emailjs/browser";
import "dotenv";

const sendEmail = async (formData) => {
  try {
    const emailStatus = await emailjs.sendForm(
      import.meta.env.EMAILJS_SERVICE_ID,
      import.meta.env.EMAILJS_TEMPLATE_ID,
      formData,
      {
        publicKey: import.meta.env.EMAILJS_PUBLIC_KEY,
      },
    );
    return emailStatus;
  } catch (error) {
    return error.text;
  }
};

export default sendEmail;
