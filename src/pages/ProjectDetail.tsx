import { useParams, Link } from "react-router-dom";
import projects from "../assets/data/project.json";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === id);

  if (!project) {
    return (
      <div className="bg-[#0d1938] min-h-screen text-white flex items-center justify-center text-xl">
        Project not found.
      </div>
    );
  }

  return (
    <div className="bg-[#0d1938] min-h-screen px-6 py-10 text-gray-300 font-sans">
      <div className="max-w-5xl mx-auto">
        <Link
          to="/#projects"
          className="inline-block mb-6 text-cyan-400 hover:underline text-sm"
        >
          ← Back to Projects
        </Link>

        <h1 className="text-3xl font-bold text-white mb-4">{project.title}</h1>

        <img
          src={project.image}
          alt={project.title}
          className="w-full max-w-4xl h-auto rounded-lg mb-6 shadow-lg"
        />

        <p className="text-lg mb-4 leading-relaxed">{project.description}</p>

        {project.details && (
          <p className="text-base mb-6 leading-loose text-gray-400">
            {project.details}
          </p>
        )}

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-2">
            Key Features
          </h2>
          <ul className="list-disc list-inside space-y-1">
            {project.features?.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-cyan-700/40 text-white px-3 py-1 rounded-full text-sm border border-cyan-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.screenshots && project.screenshots.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl font-semibold text-white mb-4">
              Project Screenshots
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.screenshots.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Screenshot ${idx + 1}`}
                  className="rounded-lg shadow-md border border-gray-700"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
