import React from "react";
import Project from "./../project/project";
import "./projects.sass";
import SectionHeader from "../../common/sectionHeader/sectionHeader";

const Projects = ({ id }) => {
  const projects = [
    {
      alt: "SudokuSolver",
      title: "Sudoku Puzzle Solver",
      imgUrl: require("./placeholder.png"),
      description:
        "I used this project as a way to better understand backtracking algorithms. This project takes a solveable sudoku puzzle and fills in the blanks to find the correct answer!",
      projectUrl: "/sudoku",
      githubUrl: "linkPlaceholder",
    },
    {
      alt: "Quick-Ref",
      title: "Quick-Ref App",
      imgUrl: require("./placeholder.png"),
      description:
        "Quick-Ref is a content delivery app for reference material. Individuals with admin permissions may create, edit and delete materials and users can log in to access the content.",
      projectUrl: "/quickref",
      githubUrl: "linkPlaceholder",
    },
    {
      alt: "At Action Studios",
      title: "At Action Studios",
      imgUrl: require("./placeholder.png"),
      description:
        "I work with At Action studios to build a website for the comics that they write.",
      projectUrl: "linkPlaceholder",
      githubUrl: "linkPlaceholder",
    },
  ];

  return (
    <div className="projects-div-container">
      <SectionHeader id={id} text="Projects"></SectionHeader>
      {projects.map((p) => (
        <div key={p.title} className="projects-div-section">
          <Project key={p.title} content={p} />
        </div>
      ))}
    </div>
  );
};

export default Projects;
