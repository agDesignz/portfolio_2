const About = () => {
  return (
    <section className="page-section page-section--border">
      <div className=" grid sm:grid-cols-2 gap-8">
        <div className="sm:text-right">
          <h3 className="page-section__title">About</h3>
        </div>
        <div className="sm:text-right sm:row-start-2">
          <h2 className="text-4xl">
            Passionate about development, communication, and learning.
          </h2>
        </div>
        <div className="sm:row-start-2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            facere laborum nostrum inventore, reprehenderit saepe necessitatibus
            molestias, tempore explicabo quidem, animi placeat. Omnis iure iste
            sed! Pariatur voluptatem deleniti sapiente.
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
