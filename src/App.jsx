import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import "./app.scss";

const App = () => {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="Skills">Parallax</section>
      <section id="Work Experience">services</section>
      <section id="Projects">Parallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contact">contact</section>
      <section id="About">About me</section>
    </div>
  );
};

export default App;
