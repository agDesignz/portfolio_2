import "altcha";
import { useState, useEffect, useRef } from "react";

const AltchaComponent = ({ onVerify }) => {
  const widgetRef = useRef(null);

  useEffect(() => {
    const widgetElement = widgetRef.current;

    const handleVerify = (event) => {
      console.log("Altcha verified:", event.detail);
      onVerify(event.detail.token); // Assuming the token is in event.detail.token
    };

    if (widgetElement) {
      widgetElement.addEventListener("verify", handleVerify);
    }

    return () => {
      if (widgetElement) {
        widgetElement.removeEventListener("verify", handleVerify);
      }
    };
  }, [onVerify]);

  useEffect(() => {
    console.log(widgetRef.current);
  }, []);

  return (
    <div>
      <altcha-widget
        ref={widgetRef}
        challengeurl={`https://us.altcha.org/api/v1/challenge?apiKey=${
          import.meta.env.VITE_ALTCHA_SITEKEY
        }`}
        className="w-full rounded-md py-3 px-4 flex justify-center mt-4"
      ></altcha-widget>
    </div>
  );
};

export default AltchaComponent;
