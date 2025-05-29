import { useParams, Link } from "react-router-dom";
import projects from "../assets/data/ProjectDetail.json";
import { RxCross2 } from "react-icons/rx";
import { useState, type Key } from "react";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === id);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (img: string) => {
    setSelectedImage(img);
    setIsOpen(true);
  };

  if (!project) {
    return (
      <div className="bg-[#0d1938] min-h-screen text-white flex items-center justify-center text-xl">
        Project not found.
      </div>
    );
  }

  return (
    <>
      <div className="bg-[#0d1938] min-h-screen px-4 sm:px-6 py-8 text-gray-300 font-sans">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/#projects"
            className="inline-block mb-6 text-cyan-400 hover:underline text-sm"
          >
            ← Back to Projects
          </Link>

          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg mb-4 leading-relaxed">
            {project.description}
          </p>

          {project.details && (
            <p className="text-sm sm:text-base mb-6 leading-loose text-gray-400">
              {project.details}
            </p>
          )}

          <div className="mb-6">
            <h2 className="text-lg sm:text-xl font-semibold text-white mb-2">
              Key Features
            </h2>
            <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
              {project.features?.map((feature: string, id: Key) => (
                <li key={id}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            {project.tags.map((tag: string, id: Key) => (
              <span
                key={id}
                className="bg-cyan-700/40 text-white px-3 py-1 rounded-full text-sm border border-cyan-400
                hover:bg-cyan-700 cursor-pointer duration-400"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.screenshots && project.screenshots.length > 0 && (
            <div className="mt-10">
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">
                Project Screenshots
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.screenshots.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`Screenshot ${idx + 1}`}
                    className="rounded-lg shadow-md border border-gray-700 h-52 sm:h-60 w-full object-cover 
                    cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => openModal(src)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 backdrop-blur-md flex items-center 
        justify-center z-50 px-4">
          <div className="bg-[#1c2b4d] p-4 rounded-lg w-11/12 sm:w-4/5 md:w-3/4 lg:w-1/2 relative shadow-lg">
            <button
              className="absolute -top-4 -right-4 bg-red-600 text-white rounded-full p-1 text-2xl
               hover:bg-red-700"
              onClick={() => setIsOpen(false)}
            >
              <RxCross2 />
            </button>
            <img
              src={selectedImage}
              alt={`${project.title} screenshots`}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectDetail;
