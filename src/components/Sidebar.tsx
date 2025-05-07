import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="w-full md:w-1/4 p-6 bg-[#0a192f] text-white h-screen fixed">
      <h1 className="text-2xl font-bold text-white mb-1">Muhammad Waseem</h1>
      <p className="text-sm text-gray-400 mb-6">Front End Engineer</p>

      <nav className="mb-6">
        <ul className="space-y-2">
          <li><a href="#about" className="text-gray-300 hover:text-white">About</a></li>
          <li><a href="#experience" className="text-gray-300 hover:text-white">Experience</a></li>
          <li><a href="#projects" className="text-gray-300 hover:text-white">Projects</a></li>
        </ul>
      </nav>

      <div className="flex space-x-4 mt-auto">
        <a href="#" target="_blank"><FaGithub className="hover:text-cyan-400" /></a>
        <a href="#" target="_blank"><FaLinkedin className="hover:text-cyan-400" /></a>
        <a href="#" target="_blank"><FaTwitter className="hover:text-cyan-400" /></a>
        <a href="#" target="_blank"><FaInstagram className="hover:text-cyan-400" /></a>
      </div>
    </aside>
  );
};

export default Sidebar;
