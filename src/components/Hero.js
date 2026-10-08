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
      {profile.photo && (
        <div className="relative mb-8 animate-slide-up opacity-0">
          <div className="absolute inset-0 rounded-full bg-700 blur-xl opacity-30 animate-glow-pulse" />
          <img
            src={profile.photo}
            alt={profile.name}
            className="relative w-40 h-40 rounded-full object-cover border-2 border-700/30 shadow-2xl shadow-700/20"
          />
        </div>
      )}

      <p className="text-700 dark:text-500 text-sm font-medium tracking-[0.25em] uppercase mb-4 animate-slide-up opacity-0" style={{ animationDelay: '0.1s' }}>
        Hi, I'm
      </p>

      <h1 className="text-5xl md:text-7xl font-extrabold text-900 dark:text-white mb-4 animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
        {profile.name}
      </h1>

      <p className="text-xl md:text-2xl text-600 dark:text-400 mb-6 animate-slide-up opacity-0" style={{ animationDelay: '0.3s' }}>
        {profile.title}
      </p>

      <p className="max-w-xl text-500 dark:text-500 leading-relaxed mb-10 text-balance animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
        {profile.tagline}
      </p>

      <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up opacity-0" style={{ animationDelay: '0.5s' }}>
        {socials.map((s) => {
          const Icon = iconMap[s.label];
          return (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-200 dark:border-white/10 text-sm text-600 dark:text-400 hover:border-700/50 hover:text-700 dark:hover:text-500 hover:bg-700/5 transition-all duration-300 backdrop-blur-sm"
            >
              {Icon && <Icon className="w-4 h-4" />}
              {s.label}
            </a>
          );
        })}
      </div>

      <a
        href="#about"
        className="text-400 dark:text-600 hover:text-700 dark:hover:text-500 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <FiArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
}
