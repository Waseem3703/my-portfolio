import type { ProjectItem } from "../types";

const projects: ProjectItem[] = [
  {
    title: "Build a Spotify Connected App",
    description:
      "An app that connects to Spotify and displays your playlists using the Web API. Built with React, Node, and Tailwind.",
    tags: ["React", "Node", "Tailwind", "Spotify API"],
    image: "/images/spotify-app.png", // optional, add your images here
    link: "#",
  },
  {
    title: "GraphQL Profile Viewer",
    description:
      "A personal profile dashboard built using GraphQL and React for optimized queries and real-time updates.",
    tags: ["GraphQL", "React", "TypeScript"],
    image: "/images/spotify-app.png", // optional, add your images here
    link: "#",
  },
  {
    title: "HelpKit Theme",
    description:
      "A developer-friendly theme for creating docs and help centers with Next.js.",
    tags: ["Next.js", "TailwindCSS"],
    image: "/images/spotify-app.png", // optional, add your images here
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="articles" className="mb-16 text-gray-300">
      <h2 className="text-2xl font-semibold text-white mb-6">Projects</h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-4 bg-[#112240] p-4 rounded-lg hover:shadow-lg 
            transition-shadow"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full md:w-32 h-24 object-cover rounded"
              />
            )}
            <div className="flex-1">
              <p className="text-cyan-400 text-sm">{}</p>
              <h3 className="text-lg font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                {project.description}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  className="text-cyan-400 text-sm hover:underline mt-1 inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              )}
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-800 text-sm px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
