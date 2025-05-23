import type { BlogArticle } from '../types';

const articles: BlogArticle[] = [
  {
    year: "2024",
    title: "5 Common Accessibility Pitfalls and How to Avoid Them",
    description: "A guide for developers to ensure their websites are accessible for all users.",
    image: "images/pinterest.webp",
    link: "#",
  },
  {
    year: "2023",
    title: "Integrating AppSec Securely with WordPress + Tailwind",
    description: "Tips on making WordPress safer using modern tools and workflows.",
    image: "images/pinterest.webp",
    link: "#",
  },
  {
    year: "2019",
    title: "Building a Headless Mobile App CMS From Scratch",
    description: "How I created a CMS that powers native mobile apps using Node.js.",
    image: "images/pinterest.webp",
    link: "#",
  },
];

const Articles = () => {
  return (
    <section id="articles" className="mb-16 text-gray-300">
      <h2 className="text-2xl font-semibold text-white mb-6">Writings</h2>
      <div className="space-y-6">
        {articles.map((article, index) => (
          <div
            key={index}
            className="ml-[-14px] flex flex-col md:flex-row gap-4 bg-[#112240] p-4 rounded-lg hover:shadow-lg transition-shadow"
          >
            {article.image && (
              <img
                src={article.image}
                alt={article.title}
                className="w-full md:w-32 h-24 object-cover rounded"
              />
            )}
            <div className="flex-1">
              <p className="text-cyan-400 text-sm">{article.year}</p>
              <h3 className="text-lg font-semibold text-white">{article.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{article.description}</p>
              {article.link && (
                <a
                  href={article.link}
                  className="text-cyan-400 text-sm hover:underline mt-1 inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Articles;
