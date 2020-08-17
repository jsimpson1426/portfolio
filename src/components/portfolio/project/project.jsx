import React, { Component } from "react";
import "./project.sass";

class Project extends Component {
  state = {};
  render() {
    let { content } = this.props;
    return (
      <div key={content.title} className="project-div-container">
        <h2 className="project-h2">{content.title}</h2>
        <img className="project-img" alt={content.alt} src={content.imgUrl} />
        <div className="project-div-right">
          <p className="project-p">{content.description}</p>
          <a className="project-a" href={content.projectUrl}>
            View Project
          </a>
          <a className="project-a" href={content.githubUrl}>
            GitHub
          </a>
        </div>
      </div>
    );
  }
}

export default Project;
