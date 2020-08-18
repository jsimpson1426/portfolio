import React from "react";
import FloatNav from "../../common/FloatNav";
import "./landing.sass";

const Landing = () => {
  let navLinks = [
    { url: "#about", text: "About" },
    { url: "#projects", text: "Projects" },
    { url: "#contact", text: "Contact" },
    { url: "/resume", text: "Resume" },
  ];

  return (
    <div className="landing-div-container">
      <div className="landing-div-left">
        <h1 className="landing-h1">Josh Simpson</h1>
        <FloatNav links={navLinks}></FloatNav>
      </div>
      <div className="landing-div-right">
        <img
          className="landing-img"
          src={require("./joshSimpson.jpg")}
          alt="Josh Simpson"
        />
      </div>
    </div>
  );
};

export default Landing;
