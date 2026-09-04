import { useContent } from "../content";
import { FiBriefcase } from "react-icons/fi";

export default function Experience() {
  const { experience } = useContent();

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-[#0b1020]">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Experience</h2>
        <div className="space-y-8">
          {experience.map((exp, i) => (
            <div
              key={i}
              className="relative pl-6 border-l-2 border-indigo-500/30"
            >
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-indigo-500 border-4 border-gray-50 dark:border-[#0b1020]" />
              <div className="bg-white dark:bg-[#111827] rounded-2xl p-6 border border-gray-200 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <FiBriefcase className="w-4 h-4 text-indigo-500 dark:text-indigo-400 hidden sm:block" />
                    <h3 className="text-gray-900 dark:text-white font-semibold">
                      {exp.role}
                    </h3>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-500 mt-1 sm:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-indigo-500 dark:text-indigo-400 text-sm mb-2">
                  {exp.company}
                </p>
                <p className="text-gray-600 dark:text-gray-500 text-sm leading-relaxed">
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
