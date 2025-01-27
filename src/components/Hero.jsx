const Hero = () => {
  return (
    <section className="page-section page-section--border page-section--full-h">
      <div className="flex flex-col gap-4 w-full">
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-fredericka">
          Alex Geer
        </h1>
        <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl text-saffron-500 font-oswald font-light">
          Full-Stack Developer | WordPress Developer | Creative Problem-Solver |
          Lifelong Learner
        </h2>
        {/* <p className="text-2xl">I dream. I create. I bring stories to life.</p> */}
        {/* <h2 className="text-2xl font-oswald">
          Full-Stack Developer | Creative Problem-Solver | Lifelong Learner
        </h2> */}
      </div>
    </section>
  );
};
export default Hero;
