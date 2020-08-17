import React from "react";
import Project from "./../project/project";
import "./projects.sass";

const Projects = () => {
  let projects = [
    {
      alt: "SudokuSolver",
      title: "Title1",
      imgUrl: require("./placeholder.png"),
      description: "Lorem Ipsum",
      projectUrl: "/sudoku",
      githubUrl: "linkPlaceholder",
    },
    {
      alt: "Quick-Ref",
      title: "Title2",
      imgUrl: require("./placeholder.png"),
      description: "Lorem Ipsum",
      projectUrl: "/quickref",
      githubUrl: "linkPlaceholder",
    },
    {
      alt: "@t Action",
      title: "Title3",
      imgUrl: require("./placeholder.png"),
      description: "Lorem Ipsum",
      projectUrl: "linkPlaceholder",
      githubUrl: "linkPlaceholder",
    },
  ];

  return (
    <div className="projects-div-container">
      <h1 className="projects-h1">Projects</h1>
      {projects.map((p) => (
        <Project key={p.title} content={p} />
      ))}
    </div>
  );
};

export default Projects;
