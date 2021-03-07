import React from "react";
import { projectList } from "../../data";

interface ProjectProps {}

const Project: React.FC<ProjectProps> = ({}) => {
  return (
    <ul className="grid grid-cols-2 gap-8 p-4 py-8 m-auto text-center lg:grid-cols-1 xxxl:grid-cols-3">
      {projectList.map((project) => (
        <div
          className="flex flex-col m-auto text-center hover-trigger"
          key={project.id}
          data-aos="fade-up"
          data-aos-once="true"
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
  );
};

export default Project;
