import { projectList } from '../data';

// TODO: make responsive cos rn it sux
export const ProjectModal = ({
    project,
    closeModal,
}: {
    project: (typeof projectList)[number];
    closeModal: () => void;
}) => {
    return (
        <div
            className="fixed block left-0 top-0 z-[1055] h-full w-full lg:px-1"
            tabIndex={-1}
            onClick={() => closeModal()}
        >
            <div className="flex flex-col h-full w-full justify-center items-center bg-black/50">
                <div
                    className="bg-white h-4/5 w-4/5 rounded-lg shadow-md p-12 sm:p-6"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex flex-col w-full h-full justify-between">
                        <div className="flex flex-nowrap w-full h-1/2 relative flex-shrink-0">
                            {project.img ? (
                                <img
                                    src={project.img}
                                    alt={project.caption}
                                    className="absolute top-12 sm:top-24 opacity-75 w-full h-[100%] object-cover sm:h-1/2"
                                />
                            ) : null}
                            <div className="w-1/2 z-[1]">
                                <h2 className="text-2xl tracking-widest uppercase font-title">{project.name}</h2>
                            </div>

                            <div className="flex w-1/2 bg-[blanchedalmond] mix-blend-hard-light z-[1] leading-10 relative">
                                <div className="bg-black text-white absolute top-1/2 sm:top-1/3 text-stroke-2">
                                    {project.caption}
                                </div>
                            </div>

                            <div
                                className="text-lg absolute top-0 right-0 z-50 cursor-pointer"
                                onClick={() => closeModal()}
                            >
                                x
                            </div>
                        </div>

                        <div className="flex-shrink-0 h-[12%] bg-[blanchedalmond] opacity-50 mix-blend-luminosity sm:mt-[-4rem]">
                            {' '}
                        </div>

                        <div className="flex gap-8 px-8 sm:px-0 my-3 sm:mt-12">
                            {project.code ? (
                                <a href={project.code} rel="noreferer noopener" target="_blank">
                                    <div className="flex items-center gap-2 rounded-lg border border-black px-2 cursor-pointer hover:bg-black hover:text-white transition">
                                        Code
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="12"
                                            height="12"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M15 3h6v6" />
                                            <path d="M10 14 21 3" />
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                        </svg>
                                    </div>
                                </a>
                            ) : null}
                            {project.deployment ? (
                                <a href={project.deployment} rel="noreferer noopener" target="_blank">
                                    <div className="flex items-center gap-2 rounded-lg border border-black px-2 cursor-pointer hover:bg-black hover:text-white transition">
                                        Live
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="12"
                                            height="12"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M15 3h6v6" />
                                            <path d="M10 14 21 3" />
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                        </svg>
                                    </div>
                                </a>
                            ) : null}
                        </div>

                        <div className="px-8 overflow-auto sm:px-0">{project.description}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
