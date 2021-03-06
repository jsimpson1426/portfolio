import React from "react";
import "./about.sass";
import SectionHeader from "../../common/sectionHeader/sectionHeader";

const About = ({ id }) => {
  return (
    <div className="about-div-container">
      <SectionHeader id={id} text="About Me"></SectionHeader>
      <div className="about-div-bg1">
        <div className="about-div-bg2">
          <div className="about-div-content">
            <p className="about-p">
              Hi! I'm Josh, a software engineer from Indianapolis, IN.
            </p>
            <p className="about-p">
              I enjoy solving problems with code, whether it be practical or
              exploratory! My goal is to be a jack-of-all-trades (master of
              some) so that when new problems come my way I can adapt to new
              technologies and provide quality user experiences.
            </p>
            <div>
              <p className="about-p">
                The stack that I have been working with recently includes:
              </p>
              <div className="about-div-lists">
                <ul className="about-ul">
                  <li className="about-li">JavaScript</li>
                  <li className="about-li">HTML & CSS/SASS</li>
                  <li className="about-li">React</li>
                </ul>
                <ul className="about-ul">
                  <li className="about-li">Node.js</li>
                  <li className="about-li">MongoDB</li>
                  <li className="about-li">Heroku</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
