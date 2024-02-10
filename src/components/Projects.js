import { projects } from "../utils/Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const Work = () => {
  return (
    <div className=" h-full  sm:px-10 px-5 py-5 bg-white  mb-5">
      <div>
        <div className="flex items-center gap-10  mb-4">
          <h1 className="text-3xl font-semibold font-heading">PROJECTS</h1>
          <div className="h-[2px] w-[200px] bg-gradient-to-r  from-primary to-standout"></div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-3">
        {projects.map((project) => {
          return (
            <div key={project.name} className="shadow-xl px-5 py-2 grow">
              <img
                src={project.img}
                className="w-[250px] h-[150px] rounded-lg object-cover mb-2"
              />
              <h3 className="text-lg font-semibold font-heading mb-2">
                {project.name}
              </h3>
              <p className="text-sm">{project.desc}</p>
              <div className="flex flex-wrap gap-3 mt-4">
                {project.techStack.map((tech) => {
                  return (
                    <span key={tech} className="p-1 text-xs bg-[#E1E8EF] rounded-md">
                      {tech}
                    </span>
                  );
                })}
              </div>
              <div className="flex justify-between mt-4">
                <a href={project.url} target="_blank" className=" hover:underline">
                  <FontAwesomeIcon icon={faLink} size="1" color="#ff9C1A" />
                  <span className="ml-2 text-xs ">url</span>
                </a>
                <a href={project.code} target="_blank" className=" hover:underline">
                  <FontAwesomeIcon icon={faGithub} size="1" color="#ff9C1A" />
                  <span className="ml-2 text-xs">code</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Work;
