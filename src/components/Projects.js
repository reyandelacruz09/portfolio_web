import { useContent } from "../content";
import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";

export default function Projects() {
  const { projects } = useContent();

  return (
    <section id="projects" className="section-padding bg-white dark:bg-[#0f172a]">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-50 dark:bg-[#111827] rounded-2xl p-6 border border-gray-200 dark:border-white/5 flex flex-col justify-between hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300 shadow-sm"
            >
              <div>
                <div className="flex items-start justify-between mb-3">
                  <span className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500 dark:text-indigo-400">
                    <FiFolder className="w-5 h-5" />
                  </span>
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-indigo-500 transition-colors"
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
                        className="text-gray-400 hover:text-indigo-500 transition-colors"
                        aria-label={`${project.title} live`}
                      >
                        <FiExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-500 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
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
