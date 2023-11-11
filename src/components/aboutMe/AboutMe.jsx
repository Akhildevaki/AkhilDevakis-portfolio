import "./aboutme.scss";
import "../../app.scss";

const AboutMe = () => {
  return (
    <div className="about">
      <div className="intro">
        <div className="left">
          <h1>
            Hola! &nbsp;&nbsp; I'm Akhil Devaki, <br /> a Web Developer
          </h1>
        </div>
        <div className="right">
          <img src="developer.png" height="300px" width="300px" />
        </div>
      </div>
      <div className="horizontal">
        <hr />
      </div>

      <div className="desc">
        <div className="bottomLeft">
          <img src="developer1.avif" height="300px" width="300px" />
        </div>

        <div className="bottomRight">
          <h2>About me and my work</h2>
          <p>
            Dedicated and skilled front-end developer with a passion for
            crafting engaging user experiences who wants to apply his skills in
            the field of web development and also works extremely hard and loves
            to explore and learn new things.Committed to staying updated with
            industry trends and continuously enhancing skills. Eager to
            contribute my expertise to creating exceptional digital solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
