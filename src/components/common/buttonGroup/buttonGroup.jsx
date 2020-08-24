import React from "react";
import "./buttonGroup.sass";

const ButtonGroup = ({ buttons }) => {
  return (
    <div className="button-group-div-container">
      <ul className="button-group-ul">
        {buttons.map((button) => (
          <li className="button-group-li" key={button.description}>
            <div className="button-group-div">
              <p className="button-group-p">{button.description}</p>
              <a className="button-group-a" href={button.url} target="_blank">
                {button.text}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ButtonGroup;
