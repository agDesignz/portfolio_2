import { Link } from "react-router-dom";

const Source = () => {
  return (
    <section className="page-section page-section--border">
      <div className="flex items-center justify-center">
        <Link
          to="https://github.com/agDesignz/portfolio_2"
          className="text-lg text-saffron-500 hover:opacity-50 font-fredericka"
          target="_blank"
        >
          See the source code for this site
        </Link>
      </div>
    </section>
  );
};
export default Source;
