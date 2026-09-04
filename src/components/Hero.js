import { useContent } from "../content";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";

const iconMap = {
  GitHub: FiGithub,
  LinkedIn: FiLinkedin,
  Email: FiMail,
};

export default function Hero() {
  const { profile, socials } = useContent();

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 via-transparent to-transparent pointer-events-none" />
      {profile.photo && (
        <img
          src={profile.photo}
          alt={profile.name}
          className="w-44 h-44 rounded-full object-cover border-4 border-indigo-500/40 mb-8 shadow-xl shadow-indigo-500/20"
        />
      )}
      <p className="text-indigo-500 dark:text-indigo-400 text-sm font-medium tracking-widest uppercase mb-4">
        Hi, I'm
      </p>
      <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
        {profile.name}
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6">
        {profile.title}
      </p>
      <p className="max-w-xl text-gray-500 dark:text-gray-400 leading-relaxed mb-10">
        {profile.tagline}
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {socials.map((s) => {
          const Icon = iconMap[s.label];
          return (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 dark:border-white/10 text-sm text-gray-600 dark:text-gray-400 hover:border-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all"
            >
              {Icon && <Icon className="w-4 h-4" />}
              {s.label}
            </a>
          );
        })}
      </div>

      <a
        href="#about"
        className="text-gray-400 dark:text-gray-600 animate-bounce"
        aria-label="Scroll down"
      >
        <FiArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
}
