import React from "react";
import "./FloatNav.sass";

const FloatNav = ({ links }) => {
  return (
    <ul className="float-nav-ul">
      {links.map((navLink) => (
        <li
          className={navLink.isRoute ? "float-nav-li-route" : "float-nav-li"}
          key={navLink.text}
        >
          <a className="float-nav-a" href={navLink.url}>
            {navLink.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FloatNav;
