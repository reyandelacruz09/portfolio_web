import { useContent } from "../content";
import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";

export default function Projects() {
  const { projects } = useContent();

  return (
    <section id="projects" className="section-padding bg-white dark:bg-[#1c1917] relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-700/20" />
      </div>
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-100 dark:bg-[#292524] rounded-2xl p-6 border border-200 dark:border-white/5 flex flex-col justify-between hover:border-700/30 card-hover group relative overflow-hidden shadow-sm"
            >
              <div className="absolute inset-0 bg-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <span className="p-2.5 rounded-xl bg-700/10 text-700 dark:text-500 group-hover:bg-700/15 transition-colors duration-300">
                    <FiFolder className="w-5 h-5" />
                  </span>
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-400 hover:text-700 dark:hover:text-500 transition-colors duration-300"
                        aria-label={`${project.title} GitHub`}
                      >
                        <FiGithub className="w-5 h-5" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-400 hover:text-700 dark:hover:text-500 transition-colors duration-300"
                        aria-label={`${project.title} live`}
                      >
                        <FiExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-900 dark:text-white font-semibold text-lg mb-3 group-hover:text-700 dark:group-hover:text-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-500 dark:text-500 text-sm mb-5 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs rounded-lg bg-100 dark:bg-white/5 text-600 dark:text-400 border border-200 dark:border-white/5 hover:border-700/30 hover:text-700 dark:hover:text-500 transition-all duration-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
