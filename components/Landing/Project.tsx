import { projectList } from "../../data";

interface ProjectProps {
  onProjectClicked: (id: number) => void;
}

const Project: React.FC<ProjectProps> = ({ onProjectClicked }) => {
  return (
    <ul className="grid grid-cols-2 gap-8 p-4 py-8 m-auto text-center lg:grid-cols-1 xxxl:grid-cols-3">
      {projectList.map((project) => (
        <div
          className="flex flex-col m-auto text-center hover-trigger"
          key={project.id}
          data-aos="fade-up"
          data-aos-once="true"
        >
          <button
            onClick={() => onProjectClicked(project.id)}
            className="relative pb-2"
          >
            <img
              src={project.img}
              alt={project.caption}
              title="I am safe and open in a new tab"
              className="hover-img"
            />
            <li className="absolute w-9/12 text-white inset-center hover-target md:opacity-0">
              {project.caption}
            </li>
          </button>
          <li className="w-4/5 m-auto">{project.name}</li>
        </div>
      ))}
    </ul>
  );
};

export default Project;
