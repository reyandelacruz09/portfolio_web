import { useContent } from "../content";
import {
  FiCode,
  FiServer,
  FiDatabase,
  FiTool,
  FiCpu,
} from "react-icons/fi";

const categoryConfig = {
  Frontend: {
    icon: FiCode,
    gradient: "from-cyan-500/20 to-cyan-500/5",
    iconColor: "text-cyan-600 dark:text-cyan-400",
    bgColor: "bg-cyan-500/10",
    badgeBg: "bg-cyan-500/10",
    badgeText: "text-cyan-700 dark:text-cyan-400",
    badgeBorder: "border-cyan-500/20",
  },
  Backend: {
    icon: FiServer,
    gradient: "from-violet-500/20 to-violet-500/5",
    iconColor: "text-violet-600 dark:text-violet-400",
    bgColor: "bg-violet-500/10",
    badgeBg: "bg-violet-500/10",
    badgeText: "text-violet-700 dark:text-violet-400",
    badgeBorder: "border-violet-500/20",
  },
  "Data & Analytics": {
    icon: FiDatabase,
    gradient: "from-teal-500/20 to-teal-500/5",
    iconColor: "text-teal-600 dark:text-teal-400",
    bgColor: "bg-teal-500/10",
    badgeBg: "bg-teal-500/10",
    badgeText: "text-teal-700 dark:text-teal-400",
    badgeBorder: "border-teal-500/20",
  },
  "DevOps & Tools": {
    icon: FiTool,
    gradient: "from-purple-500/20 to-purple-500/5",
    iconColor: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-500/10",
    badgeBg: "bg-purple-500/10",
    badgeText: "text-purple-700 dark:text-purple-400",
    badgeBorder: "border-purple-500/20",
  },
  Other: {
    icon: FiCpu,
    gradient: "from-emerald-500/20 to-emerald-500/5",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-500/10",
    badgeBg: "bg-emerald-500/10",
    badgeText: "text-emerald-700 dark:text-emerald-400",
    badgeBorder: "border-emerald-500/20",
  },
};

const defaultConfig = {
  icon: FiCpu,
  gradient: "from-gray-500/20 to-gray-500/5",
  iconColor: "text-gray-600 dark:text-gray-400",
  bgColor: "bg-gray-500/10",
  badgeBg: "bg-gray-500/10",
  badgeText: "text-gray-700 dark:text-gray-400",
  badgeBorder: "border-gray-500/20",
};

export default function Skills() {
  const { skills } = useContent();

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-[#0f1629] relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
      </div>
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group) => {
            const config = categoryConfig[group.category] || defaultConfig;
            const Icon = config.icon;
            return (
              <div
                key={group.category}
                className="bg-white dark:bg-[#111b2e] rounded-2xl p-6 border border-gray-200 dark:border-white/5 card-hover relative overflow-hidden group shadow-sm"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-5">
                    <span className={`p-2.5 rounded-xl ${config.bgColor} ${config.iconColor}`}>
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
                        className={`px-3 py-1 text-sm rounded-lg ${config.badgeBg} ${config.badgeText} border ${config.badgeBorder} transition-colors duration-300`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
