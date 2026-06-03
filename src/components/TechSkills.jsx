import TECH_SKILLS from "../assets/data/tech-skills";

const TechSkills = () => {
  return (
    <section className="page-section page-section--border">
      <div className="flex flex-col gap-8 w-full">
        <div>
          <h2 className="page-section__title">Skills</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {TECH_SKILLS.map((skill, idx) => (
            <div
              key={idx}
              className="shadow-md shadow-navy-900 rounded-md border border-navy-400 p-4 hover:scale-[1.02] hover:bg-navy-700/20 duration-500 flex flex-col items-center gap-4"
            >
              <skill.icon className={`text-4xl sm:text-7xl ${skill.fill}`} />
              <h3 className="uppercase text-xl font-open-sans">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TechSkills;
