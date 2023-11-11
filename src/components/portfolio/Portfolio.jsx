import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Sales Insights and data Analysis using Tableau",
    img: "./tableau1.png",
    desc: "This Project is based on a computer hardware business which is facing challenges in dynamically changing market.Sales director decides to invest in data analysis project and so we developed a Tableau dashboard that can give him real time sales insights",
  },
  {
    id: 2,
    title: "To-Do-List-App",
    img: "./todolist.jpg",
    desc: "In this project, we have developed a react application in which we can add the desired tasks and delete them once you are finished. We have used react hooks and bootstrap, CSS for styling the User Interface (UI).",
  },
  {
    id: 3,
    title: "Restaurant Website",
    img: "./restaurant.jpg",
    desc: "In this project, we have developed a sample restaurant website using the front-end technologies and java where the user can browse the menu and can see the ingredient list and how the dish is prepared. He can order it, can change the quantity and also can add preferences as needed. Finally, he can checkout and place the order.",
  },
  {
    id: 4,
    title: "Attendance Management System",
    img: "./attendance.jpg",
    desc: "In this project, we have developed a java-based web application which is useful for classroom. Hence, we have three roles in this project. The Super user who is responsible for approve and manage different admins and Admin who can add different Skill set, sessions, Trainer details, Manage attendance and feedback. Here, the User can enroll for a session, can give feedback to the sessions attended.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
