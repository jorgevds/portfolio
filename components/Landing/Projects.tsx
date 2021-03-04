import React from "react";
import { projectList } from "../../data";

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <article
      className="w-4/5 h-auto m-auto mb-12 rounded-lg shadow-md"
      id="projects"
    >
      <ul className="grid grid-cols-2 gap-8 p-4 py-8 m-auto text-center">
        {projectList.map((project) => (
          <div
            className="relative flex flex-col m-auto text-center hover-trigger"
            key={project.id}
          >
            <a
              className="pb-2 hover-img"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.img}
                alt={project.caption}
                title="Click me! I am safe and open in a new tab!"
              />
            </a>
            <li className="w-4/5 m-auto">{project.name}</li>
            <li className="absolute z-10 text-white inset-center hover-target">
              {project.caption}
            </li>
          </div>
        ))}
      </ul>
    </article>
  );
};

export default Projects;
