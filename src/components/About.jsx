import portrait from "../assets/images/portrait.png";
import React, { useState, useEffect } from "react";

const About = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setImgLoaded(true);
    };
    image.src = portrait;
  }, [portrait]);
  return (
    <section className="page-section page-section--border">
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="page-section__title">About</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <h3 className="text-xl sm:text-2xl md:text-3xl">
            Blending Technical Expertise with Creativity and a Diverse Skill Set
          </h3>

          <div className="flex flex-col gap-4 lg:row-start-2 sm:text-lg lg:text-xl leading-relaxed">
            <p>
              My journey into coding began as a creative spark, and it quickly
              grew into a passion. Designing, building, and styling apps allows
              me to blend my artistic background with technical expertise. I
              enjoy building things, constantly learning new skills, and
              crafting user-friendly experiences that tell compelling stories.
            </p>
            <p>
              Before transitioning to tech, I had a lengthy career in France and
              the Czech Republic blending language education, proofreading,
              translation, and theatre — fields that strengthened my
              communication, adaptability, and attention to detail. In 2020, I
              discovered web development and realized it was the perfect
              intersection of my creative and analytical interests.
            </p>
            <p>
              After years of self-study and freelance experience as a WordPress
              developer, I graduated from the University of Minnesota Full-Stack
              Coding Bootcamp in 2024. With a strong foundation in modern tools
              like Node.js, React, and databases, I’m eager to bring my diverse
              skill set and passion for innovation to new challenges in web
              development.
            </p>
          </div>
          <figure className="row-start-2 rounded-full overflow-hidden h-48 w-48 min-[320px]:h-80 min-[320px]:w-80 justify-self-center">
            {imgLoaded ? (
              <img
                className="h-full w-full object-cover"
                src={portrait}
                alt="Portrait of Alex Geer in the mountains"
              />
            ) : (
              <svg
                className="animate-spin h-5 w-5 mr-3 ..."
                viewBox="0 0 24 24"
              ></svg>
            )}
          </figure>
        </div>
      </div>
    </section>
  );
};
export default About;
