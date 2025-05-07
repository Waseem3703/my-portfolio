import type { ExperienceItem } from '../types';

const experiences: ExperienceItem[] = [
  {
    title: "Senior Frontend Engineer",
    company: "Amplitude",
    period: "2022 — Present",
    description: "Lead front-end initiatives and accessibility efforts. Built robust UI systems using React, Typescript, and Tailwind.",
    tags: ["React", "TypeScript", "Accessibility", "TailwindCSS"],
  },
  {
    title: "UI Engineer Co-op",
    company: "Apple",
    period: "2021 — 2022",
    description: "Worked on Apple.com to improve layout systems and design efficiency. Built reusable front-end components.",
    tags: ["JavaScript", "HTML", "CSS", "Web Performance"],
  },
  {
    title: "Software Engineer Co-op",
    company: "Spotify",
    period: "2020 — 2021",
    description: "Helped refactor mobile features using React Native and maintained internal UI frameworks.",
    tags: ["React Native", "Component Design", "Testing"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="mb-16 text-gray-300">
      <h2 className="text-2xl font-semibold text-white mb-6">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index}>
            <p className="text-sm text-cyan-400">{exp.period}</p>
            <h3 className="text-lg font-semibold text-white">
              {exp.title} <span className="text-cyan-500">@ {exp.company}</span>
            </h3>
            <p className="text-gray-400 mt-2">{exp.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {exp.tags.map((tag, i) => (
                <span key={i} className="bg-gray-800 text-sm px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
