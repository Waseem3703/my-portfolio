'use client';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaCodepen,
  FaGoodreads,
} from 'react-icons/fa';
import { useEffect, useState } from 'react';

const sections = ['about', 'experience', 'projects'];

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('about');

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside
      className="w-full md:w-[50%] text-white h-screen fixed flex flex-col justify-between ml-22 mt-23"
      style={{
        backgroundColor: 'transparent',
        fontFamily: `__inter_20b187, __inter_Fallback_20b187, ui-sans-serif, system-ui, -apple-system,
         BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
          "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
      }}
    >
      {/* Top */}
      <div>
        <h1 className="text-5xl font-bold text-slate-200 leading-tight">
          Muhammad Waseem
        </h1>
        <p className="mt-2 text-xl text-slate-200 font-medium">
          Front End Developer
        </p>
        <p className="mt-4 about-font">
          I build accessible, pixel-perfect digital <br/> experiences for the web.
        </p>

        <nav className="ml-10 mt-20 space-y-5 text-[12px] font-semibold tracking-widest uppercase">
          {sections.map((id) => (
            <div key={id} className="relative">
              <span
                className={`absolute -left-10 top-2 w-8 h-px ${
                  activeSection === id ? 'bg-white -right-18 w-16 duration-200' : 'bg-gray-500'
                }`}
              />
              <a
                href={`#${id}`}
                className={`${
                  activeSection === id ? 'text-white ml-10 duration-200' : 'text-gray-400'
                } transition-all duration-200 hover:text-white`}
              >
                {id}
              </a>
            </div>
          ))}
        </nav>
      </div>

      {/* Bottom Social Links */}
      <div className="flex space-x-5 items-center pb-8 mb-40">
        <a href="#" target="_blank" rel="noreferrer">
          <FaGithub className="text-[#96a6c9] text-2xl hover:text-white transition-colors duration-100" />
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <FaLinkedin className="text-[#96a6c9] text-2xl hover:text-white transition-colors duration-100" />
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <FaCodepen className="text-[#96a6c9] text-2xl hover:text-white transition-colors duration-100" />
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <FaInstagram className="text-[#96a6c9] text-2xl hover:text-white transition-colors duration-100" />
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <FaGoodreads className="text-[#96a6c9] text-2xl hover:text-white transition-colors duration-100" />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
