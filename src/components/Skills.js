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
    iconColor: "text-700 dark:text-500",
    bgColor: "bg-700/10",
    badgeBg: "bg-700/10",
    badgeText: "text-800 dark:text-500",
    badgeBorder: "border-700/20",
  },
  Backend: {
    icon: FiServer,
    iconColor: "text-700 dark:text-500",
    bgColor: "bg-700/10",
    badgeBg: "bg-700/10",
    badgeText: "text-800 dark:text-500",
    badgeBorder: "border-700/20",
  },
  "Data & Analytics": {
    icon: FiDatabase,
    iconColor: "text-700 dark:text-500",
    bgColor: "bg-700/10",
    badgeBg: "bg-700/10",
    badgeText: "text-800 dark:text-500",
    badgeBorder: "border-700/20",
  },
  "DevOps & Tools": {
    icon: FiTool,
    iconColor: "text-700 dark:text-500",
    bgColor: "bg-700/10",
    badgeBg: "bg-700/10",
    badgeText: "text-800 dark:text-500",
    badgeBorder: "border-700/20",
  },
  Other: {
    icon: FiCpu,
    iconColor: "text-700 dark:text-500",
    bgColor: "bg-700/10",
    badgeBg: "bg-700/10",
    badgeText: "text-800 dark:text-500",
    badgeBorder: "border-700/20",
  },
};

const defaultConfig = {
  icon: FiCpu,
  iconColor: "text-600 dark:text-400",
  bgColor: "bg-500/10",
  badgeBg: "bg-500/10",
  badgeText: "text-700 dark:text-400",
  badgeBorder: "border-500/20",
};

export default function Skills() {
  const { skills } = useContent();

  return (
    <section id="skills" className="section-padding bg-100 dark:bg-[#211e1a] relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-700/20" />
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
                className="bg-white dark:bg-[#292524] rounded-2xl p-6 border border-200 dark:border-white/5 card-hover relative overflow-hidden group shadow-sm"
              >
                <div className={`absolute inset-0 ${config.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-5">
                    <span className={`p-2.5 rounded-xl ${config.bgColor} ${config.iconColor}`}>
                      {Icon && <Icon className="w-5 h-5" />}
                    </span>
                    <h3 className="text-900 dark:text-white font-semibold text-lg">
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
