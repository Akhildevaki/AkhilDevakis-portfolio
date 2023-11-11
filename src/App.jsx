import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import WorkExperience from "./components/workExperience/WorkExperience";
import Parallax from "./components/Parallax/Parallax";
import Skills from "./components/Parallax/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import AboutMe from "./components/aboutMe/AboutMe";

const App = () => {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="Skills">
        <Parallax type="skills" />
      </section>
      <section>
        <Skills />
      </section>
      <section id="Projects">
        <Parallax type="portfolio" />
      </section>
      <section id="Experience">
        <WorkExperience />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
      <section id="About">
        <AboutMe />
      </section>
    </div>
  );
};

export default App;
