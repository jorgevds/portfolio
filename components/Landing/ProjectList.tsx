import React from "react";
import Project from "./Project";

interface ProjectListProps {}

const ProjectList: React.FC<ProjectListProps> = () => {
  return (
    <article
      className="w-4/5 h-auto m-auto mb-12 rounded-lg shadow-md minlg:w-3/5"
      id="projects"
    >
      <Project />
    </article>
  );
};

export default ProjectList;
