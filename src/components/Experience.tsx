import type { ExperienceItem } from "../types";
import { MdArrowOutward } from "react-icons/md";

const experiences: ExperienceItem[] = [
  {
    title: "Full Stack Developer",
    company: "Self",
    period: "2025 — PRESENT",
    description:
      "Lead front-end initiatives and accessibility efforts. Built robust UI systems using React, Typescript, and Tailwind.",
    tags: ["React", "Node", "Tailwind", "Express", "MongoDB"],
    image: "../public/pinterest.webp",
    link: "#",
  },
  {
    title: "Frontend Developer",
    company: "Self",
    period: "2025 — 2025",
    description:
      "Developed Country Info App using React.js, JavaScript, and CSS, allowing users to search for countries and view detail",
    tags: ["JavaScript", "React", "CSS", "TailwindCSS"],
    image: "../public/country.webp",
    link: "#",
  },
  {
    title: "WordPress",
    company: "Self",
    period: "2024 - 2024",
    description:
      "This website is the landing page for the product sales online with Wordpress, JavaScript",
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

      <div className="space-y-5 ">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group relative flex flex-col lg:flex-row gap-4 p-4 rounded-lg cursor-pointer ml-[-16px] transition-all duration-500"
          >
            {/* Background blur overlay */}
            <div className="absolute inset-0 bg-[#5f6f91]/10 backdrop-blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none z-0" />

            {/* Main content */}
            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
              <div>
                <p className="text-[14px] text-slate-400">{exp.period}</p>
                <h3 className="text-xl font-semibold text-slate-200 mt-1 lg:ml-30">
                  {exp.title}
                  <span className="text-slate-300 "> . {exp.company }<MdArrowOutward /> </span>
                </h3>
                <p className="text-slate-400 mt-2 text-[15px] lg:ml-30">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3 lg:ml-30">
                  {exp.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-[#5f6f9127] hover:bg-[#5f6f914a] text-[14px] px-3 py-1 rounded-full transition-colors duration-300 ease-in-out cursor-default select-none"
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
