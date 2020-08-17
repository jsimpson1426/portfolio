import React from "react";
import "./about.sass";

const About = () => {
  return (
    <div className="about-div-container">
      <h1 className="about-h1">About Me</h1>
      <p className="about-p">
        Hi! I'm Josh, a software engineer from Indianapolis, IN.
      </p>
      <p className="about-p">
        I enjoy solving problems with code, whether it be practical or
        exploratory! My goal is to be a jack-of-all-trades (master of some) so
        that when new problems come my way I can adapt to new technologies and
        provide quality user experiences.
      </p>
      <div>
        <p className="about-p">
          The stack that I have been working with recently includes:
        </p>
        <ul className="about-ul">
          <li className="about-li">JavaScript</li>
          <li className="about-li">HTML & CSS/SASS</li>
          <li className="about-li">React</li>
          <li className="about-li">Node.js</li>
          <li className="about-li">MongoDB</li>
          <li className="about-li">Heroku</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
