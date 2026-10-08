import { education, certifications } from "../data";
import { FiAward, FiBookOpen } from "react-icons/fi";

export default function Education() {
  return (
    <section
      id="education"
      className="section-padding bg-white dark:bg-[#1c1917] relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-700/20" />
      </div>
      <div className="max-w-5xl mx-auto relative">
        <h2 className="section-title">Education & Certifications</h2>

        <div className="mb-10">
          <div className="bg-100 dark:bg-[#292524] rounded-2xl p-6 border border-200 dark:border-white/5 shadow-sm card-hover flex items-start gap-4">
            <span className="p-2.5 rounded-xl bg-700/10 text-700 dark:text-500">
              <FiBookOpen className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-900 dark:text-white font-semibold">
                {education.degree}
              </h3>
              <p className="text-700 dark:text-500 text-sm font-medium mt-0.5">
                {education.school}
              </p>
              <p className="text-sm text-500 dark:text-400 mt-1">
                {education.period} · {education.location}
              </p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="bg-100 dark:bg-[#292524] rounded-xl p-4 border border-200 dark:border-white/5 shadow-sm card-hover flex items-start gap-3"
            >
              <span className="p-2 rounded-lg bg-700/10 text-700 dark:text-500 mt-0.5 shrink-0">
                <FiAward className="w-4 h-4" />
              </span>
              <div>
                <p className="text-sm text-900 dark:text-white font-medium leading-snug">
                  {cert.name}
                </p>
                <p className="text-xs text-500 dark:text-400 mt-1.5">
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
