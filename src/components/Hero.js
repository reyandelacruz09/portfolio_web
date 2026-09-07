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
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-500/10 via-transparent to-transparent" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-gradient-radial from-violet-500/8 via-transparent to-transparent" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-gradient-radial from-teal-500/5 via-transparent to-transparent" />
      </div>

      {profile.photo && (
        <div className="relative mb-8 animate-slide-up opacity-0">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 blur-xl opacity-30 animate-glow-pulse" />
          <img
            src={profile.photo}
            alt={profile.name}
            className="relative w-40 h-40 rounded-full object-cover border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/20"
          />
        </div>
      )}

      <p className="text-cyan-600 dark:text-cyan-400 text-sm font-medium tracking-[0.25em] uppercase mb-4 animate-slide-up opacity-0" style={{ animationDelay: '0.1s' }}>
        Hi, I'm
      </p>

      <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-4 animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
        {profile.name}
      </h1>

      <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6 animate-slide-up opacity-0" style={{ animationDelay: '0.3s' }}>
        {profile.title}
      </p>

      <p className="max-w-xl text-gray-500 dark:text-gray-500 leading-relaxed mb-10 text-balance animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
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
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 text-sm text-gray-600 dark:text-gray-400 hover:border-cyan-500/50 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-500/5 transition-all duration-300 backdrop-blur-sm"
            >
              {Icon && <Icon className="w-4 h-4" />}
              {s.label}
            </a>
          );
        })}
      </div>

      <a
        href="#about"
        className="text-gray-400 dark:text-gray-600 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <FiArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
}
