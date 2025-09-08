import { useEffect, useState } from "react";
import { projectList } from "../../data";
import { ProjectModal } from "../projectModal";
import Project from "./Project";

interface ProjectListProps {}

const ProjectList: React.FC<ProjectListProps> = () => {
  const [projectSelected, setProjectSelected] = useState<number | null>(null);
  const [project, setProject] = useState<(typeof projectList)[number] | null>(
    null,
  );

  useEffect(() => {
    if (!projectSelected) {
      setProject(null);
      return;
    }

    const proj = projectList.find((p) => p.id === projectSelected);

    if (proj) {
      setProject(proj);
    } else {
      setProject(null);
    }
  }, [projectSelected]);

  const closeModal = () => {
    setProjectSelected(null);
    setProject(null);
  };

  return (
    <>
      <article
        className="w-4/5 h-auto m-auto mb-12 rounded-lg shadow-md minlg:w-3/5 overscroll-none"
        id="projects"
      >
        <Project onProjectClicked={(id) => setProjectSelected(id)} />
      </article>
      {project ? (
        <ProjectModal project={project} closeModal={closeModal} />
      ) : null}
    </>
  );
};

export default ProjectList;
