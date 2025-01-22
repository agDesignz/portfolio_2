import About from "../components/About";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import TechSkills from "../components/TechSkills";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="text-saffron-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-gradient-img"></div>
      </div>
      <div className="px-4">
        <Hero />
        <About />
        <TechSkills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};
export default Home;
