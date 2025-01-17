import headshot from "../assets/images/headshot.png";

const Hero = () => {
  return (
    <section className="page-section page-section--border page-section--full">
      <div className="grid sm:grid-cols-2 md:grid-cols-[2fr_1fr] gap-8 items-center px-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl sm:text-7xl">Alex Geer</h1>
          <h2 className="text-3xl sm:text-6xl text-saffron-500">
            Full Stack Developer
          </h2>
          <p className="text-2xl">
            I bring stories to life through technology and artistry.
          </p>
        </div>
        {/* <div className="flex justify-center">
          <img src={headshot} alt="Alex Geer Headshot" className="rounded-md" />
        </div> */}
      </div>
    </section>
  );
};
export default Hero;
