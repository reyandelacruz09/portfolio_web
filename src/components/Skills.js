import { useContent } from "../content";
import {
  FiCode,
  FiServer,
  FiDatabase,
  FiTool,
  FiCpu,
} from "react-icons/fi";

const categoryIcons = {
  Frontend: FiCode,
  Backend: FiServer,
  "Data & Analytics": FiDatabase,
  "DevOps & Tools": FiTool,
  Other: FiCpu,
};

export default function Skills() {
  const { skills } = useContent();

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-[#0b1020]">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group) => {
            const Icon = categoryIcons[group.category];
            return (
              <div
                key={group.category}
                className="bg-white dark:bg-[#111827] rounded-2xl p-6 border border-gray-200 dark:border-white/5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500 dark:text-indigo-400">
                    {Icon && <Icon className="w-5 h-5" />}
                  </span>
                  <h3 className="text-gray-900 dark:text-white font-semibold text-lg">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
