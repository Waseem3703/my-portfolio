"use client";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaCodepen,
  FaGoodreads,
} from "react-icons/fa";
import { useEffect, useState } from "react";

const sections = ["about", "experience", "projects"];

type SidebarProps = {
  isMobile?: boolean;
};

const Sidebar = ({ isMobile = false }: SidebarProps) => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop - 100;
          const offsetBottom = offsetTop + section.offsetHeight;

          if (scrollY >= offsetTop && scrollY < offsetBottom) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      className={`text-white flex flex-col justify-between ${
        isMobile ? "w-full px-1 py-6 static" : "fixed h-screen p-20 w-full md:w-[47%]"
      }`}
      style={{
        backgroundColor: isMobile ? "transparent" : "transparent",
        fontFamily: `__inter_20b187, __inter_Fallback_20b187, ui-sans-serif, system-ui, -apple-system,
        BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`,
      }}
    >
      {/* Top Content */}
      <div>
        <h1 className="text-4xl md:text-5 xl font-bold text-slate-200 leading-tight">
          Muhammad Waseem
        </h1>
        <p className="mt-2 text-[18px] md:text-xl text-slate-200 font-medium">
          Front End Developer
        </p>
        <p className="mt-3 text-[18px] md:text-base text-gray-400 leading-relaxed">
          I build accessible, pixel-perfect digital <br className="hidden md:block" />
          experiences for the web.
        </p>

        {/* Hide nav on mobile */}
        <nav className="hidden md:ml-10 md:mt-20 md:space-y-5 md:text-[12px] md:font-semibold md:tracking-widest md:uppercase md:block">
          {sections.map((id) => (
            <div key={id} className="relative">
              <span
                className={`absolute -left-6 top-2 h-px transition-all duration-300 ${
                  activeSection === id ? 'bg-white w-10' : 'bg-gray-500 w-6'
                }`}
              />
              <a
                href={`#${id}`}
                className={`block transition-all duration-300 ${
                  activeSection === id
                    ? 'text-white ml-4'
                    : 'text-gray-400 hover:text-white hover:ml-4'
                }`}
              >
                {id}
              </a>
            </div>
          ))}
        </nav>
      </div>

      {/* Bottom Social Links */}
      <div className="flex space-x-5 items-center pt-6 md:pt-0 md:pb-8">
        <a href="https://github.com/waseem3703" target="_blank" rel="noreferrer">
          <FaGithub className="text-[#96a6c9] text-2xl md:text-3xl hover:text-white transition-colors duration-100" />
        </a>
        <a href="https://linkedin.com/in/waseem3703" target="_blank" rel="noreferrer">
          <FaLinkedin className="text-[#96a6c9] text-2xl md:text-3xl hover:text-white transition-colors duration-100" />
        </a>
        <a href="https://codepen.io/Waseem3703/" target="_blank" rel="noreferrer">
          <FaCodepen className="text-[#96a6c9] text-2xl md:text-3xl hover:text-white transition-colors duration-100" />
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <FaInstagram className="text-[#96a6c9] text-2xl md:text-3xl hover:text-white transition-colors duration-100" />
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <FaGoodreads className="text-[#96a6c9] text-2xl md:text-3xl hover:text-white transition-colors duration-100" />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
