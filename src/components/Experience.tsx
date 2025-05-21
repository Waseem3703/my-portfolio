import type { ExperienceItem } from '../types';

const experiences: ExperienceItem[] = [
  {
    title: "Full Stack Developer",
    company: "Self",
    period: "2025 — Present",
    description: "Lead front-end initiatives and accessibility efforts. Built robust UI systems using React, Typescript, and Tailwind.",
    tags: ["React", "Node", "Tailwind", "Express", "MongoDB"],
    image: "../public/pinterest.webp",
    link: "#",
  },
  {
    title: "Frontend Developer",
    company: "Self",
    period: "2025 — 2025",
    description: "Developed Country Info App using React.js, JavaScript, and CSS, allowing users to search for countries and view detail",
    tags: ["JavaScript", "React", "CSS", "TailwindCSS"],
    image: "../public/pinterest.webp",
    link: "#",
  },
  {
    title: "WordPress",
    company: "Self",
    period: "2024 - 2024",
    description: "This website is the landing page for the product sales online with Wordpress, JavaScript",
    tags: ["WordPress", "JavaScript", "CSS"],
    image: "../public/pinterest.webp",
    link: "#",
  },
];

const Experience = () => {
  return (
   <section
  id="experience"
  className="mb-16 px-2 md:px-0 text-gray-300 font-['__inter_20b187','__inter_Fallback_20b187','ui-sans-serif',
    'system-ui','-apple-system','BlinkMacSystemFont','Segoe UI','Roboto','Helvetica Neue','Arial','Noto Sans',
    'sans-serif','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji']"
>

      <h2 className="text-3xl font-bold text-white mb-8">Experience</h2>

      <div className="space-y-5">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row gap-4 bg-transparent p-4 rounded-lg hover:bg-[#5f6f910d] 
            transition-colors duration-500 ease-in-out cursor-pointer ml-[-16px]"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              {exp.image && (
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-40 md:w-40 md:h-28 object-cover rounded-md flex-shrink-0"
                />
              )}
              <div>
                <p className="text-[17px] text-cyan-400">{exp.period}</p>
                <h3 className="text-2xl font-semibold text-white mt-1">
                  {exp.title}
                  <span className="text-cyan-500"> @ {exp.company}</span>
                </h3>
                <p className="text-gray-400 mt-2 text-[17px]">{exp.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-[#5f6f9127] hover:bg-[#5f6f914a] text-[17px] px-3 py-1 rounded-full
                       transition-colors duration-300 ease-in-out cursor-default select-none"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
