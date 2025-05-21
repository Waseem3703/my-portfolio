const About = () => {
  return (
    <section
      id="about"
      className="mb-16 text-gray-300 px-1 sm:px-6 lg:px-0"
      style={{
        fontFamily: `__inter_20b187, __inter_Fallback_20b187, ui-sans-serif, system-ui, -apple-system,
         BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
         "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
      }}
    >
      <h2 className="text-lg sm:text-xl font-semibold text-white mt-5 sm:mt-20 mb-6 tracking-wide uppercase">
        About
      </h2>

      <div className="space-y-5 text-[17px] sm:text-base leading-relaxed">
        <p>
          I’m a developer passionate about crafting accessible, pixel-perfect
          user interfaces that blend thoughtful design with robust engineering.
          My favorite work lies at the intersection of design and development,
          creating experiences that not only look great but are meticulously
          built for performance and usability.
        </p>

        <p>
          Currently, I'm a Senior Front-End Engineer at Klaviyo, specializing in
          accessibility. I contribute to the creation and maintenance of UI
          components that power Klaviyo’s frontend, ensuring our platform meets
          web accessibility standards and best practices to deliver an inclusive
          user experience.
        </p>

        <p>
          In the past, I've had the opportunity to develop software across a
          variety of settings — from advertising agencies and large corporations
          to start-ups and small digital product studios. Additionally, I also
          released a comprehensive video course a few years ago, guiding learners
          through building a web app with the Spotify API.
        </p>

        <p>
          In my spare time, I’m usually climbing, reading, hanging out with my
          wife and two cats, or running around Hyrule searching for Korok seeds.
        </p>
      </div>
    </section>
  );
};

export default About;
