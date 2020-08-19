import React from "react";
import ButtonGroup from "../../common/buttonGroup/buttonGroup";
import "./contact.sass";

const Contact = ({ id }) => {
  const buttons = [
    {
      text: "Github",
      description: "Take a look at my code on GitHub.",
      url: "https://github.com/jsimpson1426",
    },
    {
      text: "Resume",
      description: "Here is my resume if you want to know more about me.",
      url: "/resume.pdf",
    },
    {
      text: "Email",
      description:
        "My email is simpsonjoshuam@gmail.com if you have any questions.",
      url: "/mailto:simpsonjoshuam@gmail.com",
    },
  ];

  return (
    <div className="contact-div-container">
      <h1 id={id}>Contact Me</h1>
      <h2>Would you like to know more about me?</h2>
      <ButtonGroup buttons={buttons} />
    </div>
  );
};

export default Contact;
