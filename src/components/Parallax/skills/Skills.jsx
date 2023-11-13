import { useRef } from "react";
import "./skills.scss";
import { motion, useInView } from "framer-motion";

const Skills = () => {
  const variants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
        staggerchildren: 0.1,
      },
    },
  };

  const ref = useRef();

  const isinView = useInView(ref, { margin: "-100px" });

  return (
    <section id="Talent">
      <motion.div className="skills">
        <motion.div className="skillsContainer">
          <div className="html">
            <img src="./html.png" width="100px" height="100px" />
          </div>
          <div className="html">
            <img src="./css.png" width="100px" height="100px" />
          </div>
          <div className="html">
            <img src="./bootstrap.png" width="100px" height="100px" />
          </div>
          <div className="html">
            <img src="./js.png" width="100px" height="100px" />
          </div>
          <div className="html">
            <img src="./React-Icon-Black.png" width="100px" height="100px" />
          </div>
          <div className="html">
            <img src="./python.png" width="100px" height="100px" />
          </div>
        </motion.div>

        <motion.div className="skillscontainer">
          <div className="html">
            <img src="./java.png" width="100px" height="100px" />
          </div>
          <div className="html">
            <img
              style={{ borderRadius: "50%" }}
              src="./dsa.jpg"
              width="100px"
              height="100px"
            />
          </div>
          <div className="html">
            <img src="./iot.png" width="100px" height="100px" />
          </div>
          <div className="html">
            <img
              style={{ borderRadius: "50%" }}
              src="/tableau.png"
              width="100px"
              height="100px"
            />
          </div>
          <div className="html">
            <img
              style={{ borderRadius: "50%" }}
              src="/sql.jpg"
              width="100px"
              height="100px"
            />
          </div>
          <div className="html">
            <img
              style={{ borderRadius: "50%" }}
              src="/mongodb.jpg"
              width="100px"
              height="100px"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
