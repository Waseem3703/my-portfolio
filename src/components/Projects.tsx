import { Link } from "react-router-dom";
import projects from "../assets/data/projects.json"

const Projects = () => {
  return (
    <section id="projects" className="mb-16 text-gray-300">
      <h2 className="text-2xl font-semibold text-white mb-6">Projects</h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <Link to={`/project/${project.id}`} key={project.id}> <div
            key={index}
            className="flex flex-col md:flex-row gap-4 bg-transparent p-4 rounded-lg hover:bg-[#5f6f910d] 
            transition-colors duration-500 ease-in-out cursor-pointer ml-[-16px]"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full md:w-42 h-30 object-cover rounded"
              />
            )}
            <div className="flex-1">
              <p className="text-cyan-400 text-sm">{}</p>
              <h3 className="text-lg font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-gray-400 mt-1">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  className="text-cyan-400 text-sm hover:underline mt-1 inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              )}
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-[#5f6f9127] text-sm px-2 py-1 mt-[-15px] rounded hover:bg-[#5f6f914a] 
                    transitions-colors duration-300 ease-in-out"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div> </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
