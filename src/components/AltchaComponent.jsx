import "altcha";
import { useEffect } from "react";

const AltchaComponent = ({ onVerify }) => {
  useEffect(() => {
    const widget = document.querySelector("#altcha");
    console.log("Verify Triggered");
    if (widget) {
      const handleVerified = (ev) => {
        // setPayload(ev.detail.payload);
        onVerify(ev.detail.payload); // Pass payload to parent component
      };
      widget.addEventListener("verified", handleVerified);

      return () => widget.removeEventListener("verified", handleVerified);
    }
  }, [onVerify]);

  useEffect(() => {
    console.log(document.querySelector("#altcha"));
  }, []);

  return (
    <altcha-widget
      style={{ width: "100%", color: "#ffffff" }}
      id="altcha"
      challengeurl={`https://us.altcha.org/api/v1/challenge?apiKey=${
        import.meta.env.VITE_ALTCHA_SITEKEY
      }`}
    ></altcha-widget>
  );
};

export default AltchaComponent;
