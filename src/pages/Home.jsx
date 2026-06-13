import About from "../components/About";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import TechSkills from "../components/TechSkills";
import Contact from "../components/Contact";
import Source from "../components/Source";

const Home = () => {
  return (
    <main>
      <section className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-gradient-img"></div>
      </section>
      <div className="px-4">
        <Hero />
        <About />
        <TechSkills />
        <Projects />
        <Contact />
        <Source />
      </div>
    </main>
  );
};
export default Home;
