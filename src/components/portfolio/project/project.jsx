import React, { Component } from "react";
import "./project.sass";

class Project extends Component {
  state = {};
  render() {
    let { content } = this.props;
    return (
      <div className="project-div-bg1">
        <div className="project-div-bg2">
          <div className="project-div-container">
            <h2 className="project-h2">{content.title}</h2>
            <ul className="project-ul">
              <li className="project-li-left">
                <img
                  className="project-img"
                  alt={content.alt}
                  src={content.imgUrl}
                />
              </li>
              <li className="project-li-right">
                <p className="project-p">{content.description}</p>
                <div className="project-div-buttons">
                  <a className="project-a" href={content.projectUrl}>
                    View Project
                  </a>
                  <a className="project-a" href={content.githubUrl}>
                    GitHub
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
