import "./WorkExperience.css";
import "../../app.scss";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const WorkExperience = () => {
  return (
    <>
      <div className="timeline">
        <div className="contain leftContainer">
          <img src="/dot3.png" alt="dot" />
          <div className="textBox">
            <h2>Development Associate</h2>
            <h3>Sodexo rewards and Benefit Services</h3>
            <small>Aug 2022 - Aug 2023</small>
            <p>
              I was part of a team whose primarily responsibility is to focus on
              the enhancement of the front-end part of an web application.
            </p>
            <span className="leftArrow"></span>
          </div>
        </div>

        <div className="contain rightContainer">
          <img src="/dot3.png" alt="dot" />
          <div className="textBox">
            <h2>Programmer Analyst</h2>
            <h3>Cognizant</h3>
            <small>Mar 2021 - Jul 2022</small>
            <p>
              I was been a part of a 10 member team who does authoring of Pages
              for a website with the help of Adobe Experience Manager. and also
              responsible for the frontend development of the site and had done
              automation of the pages using GatherContent tool.
            </p>
            <span className="rightArrow"></span>
          </div>
        </div>

        <div className="contain leftContainer">
          <img src="/dot3.png" alt="dot" />
          <div className="textBox">
            <h2>Trainee</h2>
            <h3>Maven silicon</h3>
            <small>Feb 2021 - Apr 2021</small>
            <p>
              In this organization, I got an opportunity to learn many things
              from the electronics perspective on how the things work
              internally, I learnt majorly the Digital Electronics sides of the
              things.
            </p>
            <span className="leftArrow"></span>
          </div>
        </div>

        <div className="contain rightContainer">
          <img src="/dot3.png" alt="dot" />
          <div className="textBox">
            <h2>Internship</h2>
            <h3>Electronics Corporation of India Ltd.</h3>
            <small>May 2019 - Jul 2019</small>
            <p>
              Here, I got an opportunity to learn Embedded Systems. In this
              internship we are a team of 4 who incorporated the learnings in
              the internship and developed a project on Accident Detection and
              Messaging System.
            </p>
            <span className="rightArrow"></span>
          </div>
        </div>

        <div className="contain leftContainer">
          <img src="/dot3.png" alt="dot" />
          <div className="textBox">
            <h2>Headboy</h2>
            <h3>Gowtham Model School</h3>
            <small>Jun 2014 - May 2015</small>
            <p>
              Responsible for serving on various committees to plan and organize
              different kind of school events and also leading committees for
              clubs, carnivals and other organized events.
            </p>
            <span className="leftArrow"></span>
          </div>
        </div>

        <div className="contain rightContainer">
          <img src="/dot3.png" alt="dot" />
          <div className="textBox">
            <h2>Deputy Headboy</h2>
            <h3>Gowtham Model School</h3>
            <small>Jun 2013 - May 2014</small>
            <p>
              To deputize for the Head boy as required and responsible to
              support head boy on conducting different kind of events in school.
            </p>
            <span className="rightArrow"></span>
          </div>
        </div>
      </div>
    </>
  );
};
export default WorkExperience;
