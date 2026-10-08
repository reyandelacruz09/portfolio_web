import { useContent } from "../content";
import { FiBriefcase } from "react-icons/fi";

export default function Experience() {
  const { experience } = useContent();

  return (
    <section id="experience" className="section-padding bg-100 dark:bg-[#211e1a] relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-700/20" />
      </div>
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Experience</h2>
        <div className="space-y-8">
          {experience.map((exp, i) => (
            <div
              key={i}
              className="relative pl-8 border-l-2 border-700/40"
            >
              <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-700 border-4 border-100 dark:border-[#211e1a] shadow-lg shadow-700/20" />
              <div className="bg-white dark:bg-[#292524] rounded-2xl p-6 border border-200 dark:border-white/5 shadow-sm hover:shadow-lg hover:border-700/30 dark:hover:border-white/10 transition-all duration-300 group">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <FiBriefcase className="w-4 h-4 text-700 dark:text-500 hidden sm:block" />
                    <h3 className="text-900 dark:text-white font-semibold group-hover:text-700 dark:group-hover:text-500 transition-colors duration-300">
                      {exp.role}
                    </h3>
                  </div>
                  <span className="text-sm text-500 mt-1 sm:mt-0 font-mono">
                    {exp.period}
                  </span>
                </div>
                <p className="text-700 dark:text-500 text-sm mb-3 font-medium">
                  {exp.company}
                </p>
                <p className="text-500 dark:text-400 text-sm leading-relaxed">
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
