import "altcha";
import {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";

const AltchaComponent = forwardRef(({ onStateChange }, ref) => {
  const widgetRef = useRef(null);
  const [value, setValue] = useState(null);

  useImperativeHandle(
    ref,
    () => ({
      get value() {
        return value;
      },
    }),
    [value]
  );

  useEffect(() => {
    const handleStateChange = (ev) => {
      if ("detail" in ev) {
        setValue(ev.detail.payload || null);
        onStateChange?.(ev);
      }
    };

    const { current } = widgetRef;
    if (current) {
      current.addEventListener("statechange", handleStateChange);
      return () =>
        current.removeEventListener("statechange", handleStateChange);
    }
  }, [onStateChange]);

  return (
    <altcha-widget
      style={{ width: "100%", color: "#ffffff" }}
      ref={widgetRef}
      challengeurl={`https://us.altcha.org/api/v1/challenge?apiKey=${
        import.meta.env.VITE_ALTCHA_SITEKEY
      }`}
    ></altcha-widget>
  );
});

export default AltchaComponent;
