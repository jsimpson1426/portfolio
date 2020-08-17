import React, { Component } from "react";

class Project extends Component {
  state = {};
  render() {
    let { content } = this.props;
    return (
      <div className="project-div-container">
        <img className="project-img" alt={content.alt} src={content.img} />
        <div className="project-div-right">
          <p>{content.description}</p>
          <a className="project-a-site" href={content.projectUrl}>
            View Project
          </a>
          <a className="project-a-github" href={content.githubUrl}>
            GitHub
          </a>
        </div>
      </div>
    );
  }
}

export default Project;
