import About from "../components/About";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import TechSkills from "../components/TechSkills";

const Home = () => {
  return (
    <div className="text-saffron-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen exp-gradient"></div>
      </div>
      <div className="px-4">
        <Hero />
        <About />
        <TechSkills />
        <Projects />
      </div>
    </div>
  );
};
export default Home;
