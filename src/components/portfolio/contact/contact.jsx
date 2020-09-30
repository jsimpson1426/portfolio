import React from "react";
import ButtonGroup from "../../common/buttonGroup/buttonGroup";
import "./contact.sass";
import SectionHeader from "../../common/sectionHeader/sectionHeader";

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
      <SectionHeader id={id} text="Contact Me"></SectionHeader>
      <div className="contact-div-bg1">
        <div className="contact-div-bg2">
          <div className="contact-div-content">
            <ButtonGroup buttons={buttons} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
