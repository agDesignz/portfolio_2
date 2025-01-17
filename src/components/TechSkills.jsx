import TECH_SKILLS from "../assets/data/tech-skills";

const TechSkills = () => {
  return (
    <section className="page-section page-section--border">
      <div className="flex flex-col gap-8 w-full">
        <div>
          <h3 className="page-section__title">Skills</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {TECH_SKILLS.map((skill, idx) => (
            <div
              key={idx}
              className="shadow-md shadow-navy_blue-100 rounded-md border border-cocoa-300 p-4 hover:scale-105 duration-500 flex flex-col items-center gap-4"
            >
              <skill.icon className={`text-4xl sm:text-7xl ${skill.fill}`} />
              <p className="uppercase text-xl">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TechSkills;
