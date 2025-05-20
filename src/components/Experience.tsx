import type { ExperienceItem } from '../types';

const experiences: ExperienceItem[] = [
  {
    title: "Senior Frontend Engineer",
    company: "Amplitude",
    period: "2022 — Present",
    description: "Lead front-end initiatives and accessibility efforts. Built robust UI systems using React, Typescript, and Tailwind.",
    tags: ["React", "TypeScript", "Accessibility", "TailwindCSS"],
    image: "../public/pinterest.webp",
    link: "#",
  },
  {
    title: "UI Engineer Co-op",
    company: "Apple",
    period: "2021 — 2022",
    description: "Worked on Apple.com to improve layout systems and design efficiency. Built reusable front-end components.",
    tags: ["JavaScript", "HTML", "CSS", "Web Performance"],
    image: "../public/pinterest.webp",
    link: "#",
  },
  {
    title: "Software Engineer Co-op",
    company: "Spotify",
    period: "2020 — 2021",
    description: "Helped refactor mobile features using React Native and maintained internal UI frameworks.",
    tags: ["React Native", "Component Design", "Testing"],
    image: "../public/pinterest.webp",
    link: "#",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="mb-16 text-gray-300 font-['__inter_20b187','__inter_Fallback_20b187','ui-sans-serif',
      'system-ui','-apple-system','BlinkMacSystemFont','Segoe UI','Roboto','Helvetica Neue','Arial','Noto Sans',
      'sans-serif','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji']"
    >
      <h2 className="text-3xl font-bold text-white mb-8">Experience</h2>

      <div className="space-y-5">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="hover:bg-[#111F44] p-6 rounded-md transition-colors duration-500 ease-in-out
             cursor-pointer shadow-sm ml-[-23px]"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              {exp.image && (
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full md:w-40 h-28 object-cover rounded-md"
                />
              )}
              <div>
                <p className="text-sm text-cyan-400">{exp.period}</p>
                <h3 className="text-xl font-semibold text-white mt-1">
                  {exp.title}
                  <span className="text-cyan-500"> @ {exp.company}</span>
                </h3>
                <p className="text-gray-400 mt-2">{exp.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-[#5f6f9127] hover:bg-[#5f6f914a] text-sm px-3 py-1 rounded-full
                       transition-colors duration-300 ease-in-out"
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
