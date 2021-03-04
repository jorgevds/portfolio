import React from "react";
import { projectList } from "../../data";

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <article
      className="w-4/5 h-auto m-auto mb-12 rounded-lg shadow-md minlg:w-3/5"
      id="projects"
    >
      <ul className="grid grid-cols-2 gap-8 p-4 py-8 m-auto text-center lg:grid-cols-1 xxxl:grid-cols-3">
        {projectList.map((project) => (
          <div
            className="flex flex-col m-auto text-center hover-trigger"
            key={project.id}
          >
            <a
              className="relative pb-2"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.img}
                alt={project.caption}
                title="Click me! I am safe and open in a new tab!"
                className="hover-img"
              />
              <li className="absolute z-10 w-9/12 text-white inset-center hover-target md:opacity-0">
                {project.caption}
              </li>
            </a>
            <li className="w-4/5 m-auto">{project.name}</li>
          </div>
        ))}
      </ul>
    </article>
  );
};

export default Projects;
