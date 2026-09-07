import { useContent } from "../content";
import { FiMail, FiPhone, FiGithub, FiLinkedin } from "react-icons/fi";

const iconMap = {
  GitHub: FiGithub,
  LinkedIn: FiLinkedin,
  Email: FiMail,
  Phone: FiPhone,
};

export default function Contact() {
  const { socials, contact } = useContent();

  return (
    <section id="contact" className="section-padding bg-white dark:bg-[#0a0e1a] relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-cyan-500/5 via-transparent to-transparent" />
      </div>
      <div className="max-w-xl mx-auto text-center relative">
        <h2 className="section-title">Get in Touch</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed text-balance">
          I'm always open to new opportunities, interesting projects, or just a
          conversation. Feel free to reach out.
        </p>

        <div className="flex flex-col items-center gap-4 mb-10">
          {contact.email && (
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-3 text-gray-700 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 px-6 py-3 rounded-xl bg-gray-100 dark:bg-white/5 hover:bg-cyan-500/10 border border-gray-200 dark:border-white/5 hover:border-cyan-500/30"
            >
              <FiMail className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              <span className="font-medium">{contact.email}</span>
            </a>
          )}
          {contact.phone && (
            <a
              href={`tel:${contact.phone}`}
              className="flex items-center gap-3 text-gray-700 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-300 px-6 py-3 rounded-xl bg-gray-100 dark:bg-white/5 hover:bg-violet-500/10 border border-gray-200 dark:border-white/5 hover:border-violet-500/30"
            >
              <FiPhone className="w-5 h-5 text-violet-600 dark:text-violet-400" />
              <span className="font-medium">{contact.phone}</span>
            </a>
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {socials.map((s) => {
            const Icon = iconMap[s.label];
            return (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-gray-200 dark:border-white/10 text-sm text-gray-700 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-white hover:border-cyan-500/50 hover:from-cyan-500/20 hover:to-violet-500/20 transition-all duration-300 backdrop-blur-sm"
              >
                {Icon && <Icon className="w-4 h-4" />}
                {s.label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
