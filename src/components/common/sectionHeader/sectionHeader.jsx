import React from "react";
import "./sectionHeader.sass";

const SectionHeader = ({ id, text }) => {
  return (
    <div className="sectionheader-div-headerbg">
      <h1 id={id} className="sectionheader-h1">
        {text}
      </h1>
    </div>
  );
};

export default SectionHeader;
