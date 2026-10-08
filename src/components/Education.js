import { education, certifications } from "../data";
import { FiAward, FiBookOpen } from "react-icons/fi";

export default function Education() {
  return (
    <section
      id="education"
      className="section-padding bg-white dark:bg-[#0a0e1a] relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-cyan-500/20" />
      </div>
      <div className="max-w-5xl mx-auto relative">
        <h2 className="section-title">Education & Certifications</h2>

        <div className="mb-10">
          <div className="bg-gray-50 dark:bg-[#111b2e] rounded-2xl p-6 border border-gray-200 dark:border-white/5 shadow-sm card-hover flex items-start gap-4">
            <span className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
              <FiBookOpen className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-gray-900 dark:text-white font-semibold">
                {education.degree}
              </h3>
              <p className="text-cyan-600 dark:text-cyan-400 text-sm font-medium mt-0.5">
                {education.school}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {education.period} · {education.location}
              </p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="bg-gray-50 dark:bg-[#111b2e] rounded-xl p-4 border border-gray-200 dark:border-white/5 shadow-sm card-hover flex items-start gap-3"
            >
              <span className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 mt-0.5 shrink-0">
                <FiAward className="w-4 h-4" />
              </span>
              <div>
                <p className="text-sm text-gray-900 dark:text-white font-medium leading-snug">
                  {cert.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1.5">
                  {cert.source} · {cert.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
