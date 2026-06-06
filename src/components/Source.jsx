import { Link } from "react-router-dom";
const portfolioStack = [
  "React",
  "Vite",
  "Tailwind CSS",
  "PostCSS",
  "EmailJs",
  "Altcha",
];

const Source = () => {
  return (
    <section className="page-section flex flex-col items-center justify-center gap-4 md:gap-6 mb-6">
      <article className="max-w-xl flex flex-col items-center justify-center gap-2 md:gap-4">
        <h3 className="font-oswald font-light text-xl md:text-2xl tracking-wider text-saffron">
          This Site Was Built With:
        </h3>
        <ul className="flex justify-center flex-wrap gap-4">
          {portfolioStack.map((tech, idx) => (
            <li
              key={idx}
              className="rounded-sm bg-gradient-to-tr from-navy-700 to-navy-600 px-2 py-1 font-open-sans font-medium text-sm text-saffron-200"
            >
              {tech}
            </li>
          ))}
        </ul>

        <Link
          to="https://github.com/agDesignz/portfolio_2"
          className="link-btn link-btn--gold text-xl text-saffron font-fredericka"
          target="_blank"
        >
          See the source code for this site
        </Link>
      </article>
      <article className="max-w-xl flex flex-col items-center justify-center gap-2 md:gap-4">
        <p>
          Bot protection for this site is provided by my self-hosted backend
          service built with NodeJS, Express and Altcha, a free, open-source
          Captcha alternative.{" "}
        </p>
        <Link
          to="https://github.com/agDesignz/altcha_backend"
          target="_blank"
          className="link-btn link-btn--green link-btn--green--live"
        >
          Altcha Backend
        </Link>
      </article>
      <article className="max-w-xl flex flex-col items-center justify-center gap-2 md:gap-4">
        <h3 className="font-oswald font-light text-xl md:text-2xl tracking-wider text-saffron">
          About the background photo
        </h3>
        <p>
          The background photo to this site shows the developer (me) near the
          summit of Mount Monadnock in southern New Hampshire, approaching via
          the Dublin trail. The foreground is mostly exposed granite (it's not
          called the "Granite State" for nothing), and the view is facing north
          toward the towns of Dublin and Harrisville, on a partly cloudy day.
        </p>
      </article>
    </section>
  );
};
export default Source;
