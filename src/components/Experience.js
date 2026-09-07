import { useContent } from "../content";
import { FiBriefcase } from "react-icons/fi";

export default function Experience() {
  const { experience } = useContent();

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-[#0f1629] relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
      </div>
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Experience</h2>
        <div className="space-y-8">
          {experience.map((exp, i) => (
            <div
              key={i}
              className="relative pl-8 border-l-2"
              style={{
                borderImage: `linear-gradient(to bottom, rgba(6, 182, 212, 0.4), rgba(139, 92, 246, 0.4)) 1`,
              }}
            >
              <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 border-4 border-gray-50 dark:border-[#0f1629] shadow-lg shadow-cyan-500/20" />
              <div className="bg-white dark:bg-[#111b2e] rounded-2xl p-6 border border-gray-200 dark:border-white/5 shadow-sm hover:shadow-lg hover:border-cyan-500/30 dark:hover:border-white/10 transition-all duration-300 group">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <FiBriefcase className="w-4 h-4 text-cyan-600 dark:text-cyan-400 hidden sm:block" />
                    <h3 className="text-gray-900 dark:text-white font-semibold group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                      {exp.role}
                    </h3>
                  </div>
                  <span className="text-sm text-gray-500 mt-1 sm:mt-0 font-mono">
                    {exp.period}
                  </span>
                </div>
                <p className="text-violet-600 dark:text-violet-400 text-sm mb-3 font-medium">
                  {exp.company}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
