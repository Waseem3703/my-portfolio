const About = () => {
  return (
    <section
      id="about"
      className="mr-2 sm:mr-2 md:mr-1 lg:mr-24 mb-10 text-gray-300 px-1 sm:px-6 lg:px-0"
      style={{
        fontFamily: `__inter_20b187, __inter_Fallback_20b187, ui-sans-serif, system-ui, -apple-system,
         BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
         "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
      }}
    >
      <h2 className="text-lg sm:text-xl font-semibold text-white mt-4 lg:opacity-0 mb-4 tracking-wide uppercase">
        About
      </h2>

      <div className="space-y-5 text-[17px] sm:text-[18px] md:text-[17px] leading-relaxed">
        <p>
          I'm a self-employed Frontend Developer with a passion for crafting
          clean, responsive, and accessible web interfaces. I specialize in
          building intuitive and scalable user experiences using modern
          technologies like React.js and Tailwind CSS.
        </p>

        <p>
          My expertise includes HTML5, CSS3, JavaScript, React.js, Tailwind CSS,
          Responsive Web Design, Front-End Development, Git, GitHub, and
          WordPress. I also have experience in full-stack development using
          Node.js, Express.js, MongoDB, and the MERN Stack.
        </p>

        <p>
          I actively integrate RESTful APIs, optimize website performance,
          ensure cross-browser compatibility, and transform designs from Figma
          into fully functional websites. Tools like Postman, Docker, Firebase,
          and debugging utilities are part of my regular workflow.
        </p>

        <p>
          While I work independently, I'm constantly learning and evolving my
          skills. I'm currently focused on delivering high-quality freelance
          projects and honing my craft through continuous development and
          real-world application.
        </p>
      </div>
    </section>
  );
};

export default About;
